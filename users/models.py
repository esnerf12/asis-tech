from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

# Create your models here.

#User

class AppUserManager(BaseUserManager):
	def create_user(self, email, pin, password=None):
		if not email:
			raise ValueError('An email is required.')
		if not password:
			raise ValueError('A password is required.')
		if not pin:
			raise ValueError('A pin is required.')
		email = self.normalize_email(email)
		user = self.model(email=email, pin=pin)
		user.set_password(password)
		user.save()
		return user
	def create_superuser(self, email, pin, password=None):
		if not email:
			raise ValueError('An email is required.')
		if not password:
			raise ValueError('A password is required.')
		if not pin:
			raise ValueError('A pin is required.')
		user = self.create_user(email, pin, password)
		user.is_superuser = True
		user.save()
		return user

class AppUser(AbstractBaseUser, PermissionsMixin):
	user_id = models.AutoField(primary_key=True)
	email = models.EmailField(max_length=50, unique=True)
	username = models.CharField(max_length=50, unique=True)
	pin = models.CharField(max_length=6, null=True)
	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = ['username', 'pin']
	objects = AppUserManager()
	def __str__(self):
		return self.pin
