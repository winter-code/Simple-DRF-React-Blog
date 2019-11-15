from django.urls import path

from . import views

urlpatterns = [
    path('', views.BlogListCreate.as_view()),
    path('<id>/', views.BlogDetailView.as_view(), name='blog-detail'),
    
]