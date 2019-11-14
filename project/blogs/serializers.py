from rest_framework import serializers
from blogs.models import Blog
class BlogSerializer(serializers.ModelSerializer):
    """DRF Serializer For Listing blog Posts"""
    class Meta:
        model = Blog
        fields = ('id', 'title', 'content', 'created_at')

class BlogDetailSerializer(serializers.ModelSerializer):
    """DRF Serializer For Details Of The Blog Posts"""

    class Meta:
        model = Blog
        fields = ('id', 'title', 'content', 'created_at')

