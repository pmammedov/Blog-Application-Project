from dataclasses import fields
from rest_framework import serializers

from blogApp.models import BlogPost, Category, Comment, Like, View
from django.contrib.auth import get_user_model
User = get_user_model()


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = (
            "id",
            "name"
        )


class CommentSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Comment
        fields = (
            "id",
            "content",
            "time_stamp",
            "user",
        )


class LikeSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()
    user_id = serializers.IntegerField()

    class Meta:
        model = Like
        fields = (
            "id",
            "user",
            "user_id",
            "post"
        )


class BlogPostSerializer(serializers.ModelSerializer):
    post_comment = CommentSerializer(many=True, read_only=True)
    post_like = LikeSerializer(many=True, read_only=True)
    author = serializers.StringRelatedField(read_only=True)
    author_id = serializers.IntegerField(read_only=True)
    like_count = serializers.SerializerMethodField()
    comment_count = serializers.SerializerMethodField()
    post_view_count = serializers.SerializerMethodField()

    class Meta:
        model = BlogPost
        fields = (
            "id",
            "title",
            "author",
            "author_id",
            "category",
            "content",
            "image",
            "published_date",
            "updated_date",
            "status",
            "slug",
            "like_count",
            "comment_count",
            "post_view_count",
            "post_comment",
            "post_like"
        )
        read_only_fields = (
            "published_date",
            "updated_date",
            "slug",
        )

    def get_like_count(self, obj):
        return Like.objects.filter(post=obj.id).count()

    def get_comment_count(self, obj):
        return Comment.objects.filter(blog=obj.id).count()

    def get_post_view_count(self, obj):
        return View.objects.filter(post=obj.id).count()


class PostUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "first_name",
            "last_name",
            "email",
            "profile_pic",
            "biography",
        )
