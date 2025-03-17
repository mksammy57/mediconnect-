
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Doctor, Appointment, Post, Comment, MedicalData

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'date_joined']

class DoctorSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    id = serializers.SerializerMethodField()
    availableToday = serializers.BooleanField(source='available_today')
    consultationType = serializers.ListField(source='consultation_types')
    availableTimeSlots = serializers.ListField(source='available_slots')
    
    class Meta:
        model = Doctor
        fields = ['id', 'name', 'specialization', 'experience', 'rating', 
                  'availableToday', 'consultationType', 'price', 'availableTimeSlots']
    
    def get_name(self, obj):
        return obj.user.get_full_name() or obj.user.username
    
    def get_id(self, obj):
        return str(obj.id)

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    author_name = serializers.SerializerMethodField()
    
    class Meta:
        model = Comment
        fields = ['id', 'author', 'author_name', 'content', 'created_at']
    
    def get_author_name(self, obj):
        return obj.author.get_full_name() or obj.author.username

class PostSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()
    timestamp = serializers.SerializerMethodField()
    comments = serializers.SerializerMethodField()
    
    class Meta:
        model = Post
        fields = ['id', 'author', 'timestamp', 'title', 'content', 
                  'tags', 'likes', 'comments', 'shares']
    
    def get_author(self, obj):
        name = obj.author.get_full_name() or obj.author.username
        is_doctor = hasattr(obj.author, 'doctor_profile')
        title = 'Doctor' if is_doctor else 'Patient'
        
        return {
            'name': name,
            'avatar': name[:2].upper(),
            'title': title if is_doctor else '',
            'verified': is_doctor
        }
    
    def get_timestamp(self, obj):
        from django.utils import timezone
        diff = timezone.now() - obj.created_at
        
        if diff.days > 0:
            return f"{diff.days} days ago"
        elif diff.seconds // 3600 > 0:
            return f"{diff.seconds // 3600} hours ago"
        else:
            return f"{diff.seconds // 60} minutes ago"
    
    def get_comments(self, obj):
        return obj.comments_count

class MedicalDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicalData
        fields = ['id', 'category', 'key', 'data']
