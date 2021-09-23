from rest_framework import serializers
from .models import User
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=('id','name', 'user_name', 'email','mobile', 'password', 'confirm_password', 'created')