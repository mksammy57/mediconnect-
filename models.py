
from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField

class Doctor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='doctor_profile')
    specialization = models.CharField(max_length=100)
    experience = models.CharField(max_length=50, blank=True)
    rating = models.FloatField(default=0)
    available_today = models.BooleanField(default=True)
    consultation_types = ArrayField(models.CharField(max_length=20), default=list)
    price = models.CharField(max_length=20, blank=True)
    available_slots = ArrayField(models.CharField(max_length=20), default=list)

    def __str__(self):
        return f"{self.user.get_full_name()} - {self.specialization}"

class Appointment(models.Model):
    STATUS_CHOICES = [
        ('scheduled', 'Scheduled'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]
    
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, related_name='appointments')
    patient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='appointments')
    appointment_date = models.DateField()
    appointment_time = models.CharField(max_length=20)
    consultation_type = models.CharField(max_length=30)
    symptoms = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='scheduled')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.patient.get_full_name()} with {self.doctor.user.get_full_name()} on {self.appointment_date}"

class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    title = models.CharField(max_length=255)
    content = models.TextField()
    tags = ArrayField(models.CharField(max_length=50), default=list)
    likes = models.IntegerField(default=0)
    comments_count = models.IntegerField(default=0)
    shares = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.author.get_full_name()} on {self.post.title}"

class MedicalData(models.Model):
    category = models.CharField(max_length=50)
    key = models.CharField(max_length=100)
    data = models.JSONField()

    class Meta:
        unique_together = ['category', 'key']

    def __str__(self):
        return f"{self.category} - {self.key}"
