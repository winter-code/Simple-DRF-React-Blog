from django.urls import path

from . import views

urlpatterns = [
    path('', views.BlogListCreate.as_view()),
    path('view/<id>/', views.BlogDetailView.as_view(), name='blog-detail'),
    
]