from rest_framework import serializers, validators
from django.contrib.auth.password_validation import validate_password
from dj_rest_auth.serializers import TokenSerializer
from django.contrib.auth import get_user_model


User = get_user_model()


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[validators.UniqueValidator(queryset=User.objects.all())]
    )
    password = serializers.CharField(
        write_only=True,
        required=True,
        validators=[validate_password],
        style={"input_type": "password"}
    )
    password1 = serializers.CharField(
        write_only=True,
        required=True,
        validators=[validate_password],
        style={"input_type": "password"}
    )

    class Meta:
        model = User
        fields = (
            "username",
            "email",
            "first_name",
            "last_name",
            "profile_pic",
            "biography",
            "password",
            "password1"
        )

    def validate(self, data):
        if data['password'] != data['password1']:
            raise serializers.ValidationError(
                {
                    "password": "Password didn't match..."
                }
            )
        return data

    def create(self, validated_data):
        password = validated_data.pop('password')
        validated_data.pop('password1')
        user = User.objects.create(**validated_data)
        user.set_password(password)
        user.save()
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "first_name",
            "last_name",
            "email",
            "profile_pic",
            "biography"
        )


class CustomTokenSerializer(TokenSerializer):
    user = UserSerializer(read_only=True)

    class Meta(TokenSerializer.Meta):
        fields = (
            'key',
            'user'
        )


class UpdateUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[validators.UniqueValidator(queryset=User.objects.all())]
    )

    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "email",
            "first_name",
            "last_name",
            "profile_pic",
            "biography",
        )

class LoginSerializer(serializers.ModelSerializer):
    
    username = serializers.CharField(required=False)
    email = serializers.EmailField(required=False)
    password = serializers.CharField(write_only=True, required=True)
    
    class Meta:
        model = User
        fields = (
            "username",
            "email",
            "password"
        )
