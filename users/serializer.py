from django.forms import ValidationError
from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate, password_validation

UserModel = get_user_model()

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = '__all__'
    def create(self, clean_data):
        user_obj = UserModel.objects.create_user(email=clean_data['email'], pin=clean_data['pin'], password=clean_data['password'])
        user_obj.username = clean_data['username']
        user_obj.save()
        return user_obj

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('user_id', 'email', 'username', 'pin')

class ChangePasswordSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[password_validation.validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    old_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = UserModel
        fields = ('old_password', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    def validate_old_password(self, value):
        user = self.context['request'].user
        if not user.check_password(value):
            raise serializers.ValidationError({"old_password": "Old password is not correct"})
        return value

    def update(self, instance, validated_data):

        instance.set_password(validated_data['password'])
        instance.save()

        return instance
    
class ChangePinSerializer(serializers.ModelSerializer):
    pin = serializers.CharField(write_only=True, required=True)
    pin2 = serializers.CharField(write_only=True, required=True)
    old_pin = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = UserModel
        fields = ('old_pin', 'pin', 'pin2')

    def validate(self, attrs):
        if attrs['pin'] != attrs['pin2']:
            raise serializers.ValidationError({"pin": "Pin fields didn't match."})

        return attrs

    def validate_old_pin(self, value):
        user = self.context['request'].user
        if not str(user) == str(value):
            raise serializers.ValidationError({"old_pin": "Old pin is not correct."})
        return value

    def update(self, instance, validated_data):

        instance.pin = validated_data['pin']
        instance.save()

        return instance