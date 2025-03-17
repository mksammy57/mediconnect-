
from rest_framework import viewsets, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.utils import timezone
from datetime import datetime
from .models import Doctor, Appointment, Post, Comment, MedicalData
from .serializers import (
    UserSerializer, DoctorSerializer, AppointmentSerializer,
    PostSerializer, CommentSerializer, MedicalDataSerializer
)

@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    email = request.data.get('email')
    password = request.data.get('password')
    role = request.data.get('role')
    
    try:
        user = User.objects.get(email=email)
        # In a real app, authenticate properly
        # authenticated_user = authenticate(username=user.username, password=password)
        authenticated_user = user  # For demo purposes
        
        if authenticated_user:
            # Check role
            if role == 'doctor' and not hasattr(user, 'doctor_profile'):
                return Response({'error': 'User is not a doctor'}, status=status.HTTP_401_UNAUTHORIZED)
                
            return Response(UserSerializer(user).data)
    except User.DoesNotExist:
        pass
    
    return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
@permission_classes([AllowAny])
def register_view(request):
    name = request.data.get('name')
    email = request.data.get('email')
    password = request.data.get('password')
    role = request.data.get('role')
    
    if User.objects.filter(email=email).exists():
        return Response({'error': 'Email already exists'}, status=status.HTTP_400_BAD_REQUEST)
    
    # Split name into first_name and last_name
    name_parts = name.split(' ', 1)
    first_name = name_parts[0]
    last_name = name_parts[1] if len(name_parts) > 1 else ''
    
    # Create user
    user = User.objects.create_user(
        username=email,
        email=email,
        password=password,
        first_name=first_name,
        last_name=last_name
    )
    
    # Create doctor profile if role is doctor
    if role == 'doctor':
        Doctor.objects.create(
            user=user,
            specialization=request.data.get('specialization', 'General Medicine'),
            experience=request.data.get('experience', '5 years'),
            price=request.data.get('price', '$80'),
            consultation_types=['video', 'chat']
        )
    
    return Response(UserSerializer(user).data)

class DoctorViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = DoctorSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        # Using select_related for better performance
        queryset = Doctor.objects.select_related('user').all()
        
        # Filter by specialization if provided
        specialization = self.request.query_params.get('specialization')
        if specialization:
            queryset = queryset.filter(specialization__iexact=specialization)
        
        # Filter by availability
        available_today = self.request.query_params.get('available_today')
        if available_today and available_today.lower() == 'true':
            queryset = queryset.filter(available_today=True)
        
        # Filter by rating
        min_rating = self.request.query_params.get('min_rating')
        if min_rating:
            queryset = queryset.filter(rating__gte=float(min_rating))
        
        # Order by rating by default
        return queryset.order_by('-rating')

@api_view(['POST'])
@permission_classes([AllowAny])
def book_appointment(request):
    # In a real app, get patient from authenticated user
    patient_id = 1  # Default for demo
    doctor_id = request.data.get('doctorId')
    appointment_date = request.data.get('date')
    appointment_time = request.data.get('time')
    consultation_type = request.data.get('type')
    symptoms = request.data.get('symptoms')
    
    try:
        doctor = Doctor.objects.get(id=doctor_id)
        patient = User.objects.get(id=patient_id)
        
        # Create appointment
        appointment = Appointment.objects.create(
            doctor=doctor,
            patient=patient,
            appointment_date=datetime.strptime(appointment_date, '%Y-%m-%d').date(),
            appointment_time=appointment_time,
            consultation_type=consultation_type,
            symptoms=symptoms
        )
        
        return Response({
            'id': appointment.id,
            'status': 'confirmed',
            'message': 'Appointment booked successfully'
        })
    except Exception as e:
        return Response({
            'error': str(e)
        }, status=status.HTTP_400_BAD_REQUEST)

class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        # Using select_related to optimize database queries
        queryset = Post.objects.select_related('author').prefetch_related('comments').order_by('-created_at')
        filter_type = self.request.query_params.get('filter', 'latest')
        
        if filter_type == 'popular':
            queryset = queryset.order_by('-likes', '-created_at')
        elif filter_type == 'unanswered':
            queryset = queryset.filter(comments_count=0)
        elif filter_type == 'following':
            # This is a simplified version. In a real app, you'd filter by users the current user follows
            queryset = queryset.filter(author__doctor_profile__isnull=False)
        
        # Add pagination for better performance
        limit = int(self.request.query_params.get('limit', 10))
        offset = int(self.request.query_params.get('offset', 0))
        return queryset[offset:offset+limit]
    
    def perform_create(self, serializer):
        # In a real app, use the authenticated user
        author_id = self.request.user.id if self.request.user.is_authenticated else 1
        serializer.save(author_id=author_id)

@api_view(['POST'])
@permission_classes([AllowAny])
def query_medical_data(request):
    query = request.data.get('query')
    context = request.data.get('context', '')
    
    # Try to search in the database first
    # Extract key terms from the query
    key_terms = [term.lower() for term in query.split() if len(term) > 3]
    
    try:
        # Try to find matching medical data in the database
        # First try exact matches
        for term in key_terms:
            try:
                # Try medical conditions
                condition = MedicalData.objects.get(category='medicalConditionsDatabase', key=term)
                return Response({
                    'success': True,
                    'data': condition.data
                })
            except MedicalData.DoesNotExist:
                pass
            
            try:
                # Try medications
                medication = MedicalData.objects.get(category='medicationsDatabase', key=term)
                return Response({
                    'success': True,
                    'data': medication.data
                })
            except MedicalData.DoesNotExist:
                pass
            
            try:
                # Try symptoms
                symptom = MedicalData.objects.get(category='symptomsDatabase', key=term)
                return Response({
                    'success': True,
                    'data': symptom.data
                })
            except MedicalData.DoesNotExist:
                pass
        
        # Try partial matches
        for term in key_terms:
            # Check for partial matches in medical conditions
            conditions = MedicalData.objects.filter(
                category='medicalConditionsDatabase', 
                key__icontains=term
            )
            if conditions.exists():
                return Response({
                    'success': True,
                    'data': conditions.first().data
                })
            
            # Check for partial matches in medications
            medications = MedicalData.objects.filter(
                category='medicationsDatabase',
                key__icontains=term
            )
            if medications.exists():
                return Response({
                    'success': True,
                    'data': medications.first().data
                })
            
            # Check for partial matches in symptoms
            symptoms = MedicalData.objects.filter(
                category='symptomsDatabase',
                key__icontains=term
            )
            if symptoms.exists():
                return Response({
                    'success': True,
                    'data': symptoms.first().data
                })
        
        # If no matches found in database, generate a generic response
        return Response({
            'success': False,
            'message': 'No specific information found'
        })
        
    except Exception as e:
        # Fallback to a generic response if something goes wrong
        return Response({
            'success': True,
            'data': {
                'title': f'Information about {query}',
                'description': f'This is general information about {query}. Please consult a healthcare professional for specific advice.',
                'symptoms': ['Various symptoms may be associated with this condition'],
                'treatments': ['Various treatments may be available for this condition']
            }
        })

# For integrating with the JavaScript MedicalBot
@api_view(['GET'])
@permission_classes([AllowAny])
def get_medical_data(request, category, key=None):
    if key:
        try:
            data = MedicalData.objects.get(category=category, key=key)
            return Response(data.data)
        except MedicalData.DoesNotExist:
            return Response({'error': 'Data not found'}, status=status.HTTP_404_NOT_FOUND)
    else:
        data = MedicalData.objects.filter(category=category)
        result = {}
        for item in data:
            result[item.key] = item.data
        return Response(result)
