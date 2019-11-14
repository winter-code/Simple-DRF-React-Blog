from blogs.models import Blog
from blogs.serializers import BlogSerializer, BlogDetailSerializer
from rest_framework import generics
from django.views.generic import DeleteView



#generic views used to implement CRUD; other option was to use viewsets

class BlogListCreate(generics.ListCreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class BlogDetailView(generics.RetrieveUpdateDestroyAPIView):
    """View For The Details Of A Single Post"""

    queryset = Blog.objects.all()
    serializer_class = BlogDetailSerializer
    lookup_field = 'id'

