
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'doctors', views.DoctorViewSet)
router.register(r'posts', views.PostViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/login/', views.login_view, name='login'),
    path('auth/register/', views.register_view, name='register'),
    path('appointments/', views.book_appointment, name='book_appointment'),
    path('medical/query/', views.query_medical_data, name='query_medical_data'),
    path('medical/data/<str:category>/', views.get_medical_data, name='get_medical_data'),
    path('medical/data/<str:category>/<str:key>/', views.get_medical_data, name='get_medical_data_key'),
]
