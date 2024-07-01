from django.contrib.auth import get_user_model, login, logout
from django.shortcuts import get_object_or_404
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import permissions, status, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from .serializer import UserRegisterSerializer, UserSerializer, ChangePasswordSerializer, ChangePinSerializer
from .validations import custom_validation, validate_email, validate_password

UserModel = get_user_model()

# Create your views here.
class UserRegister(APIView):
    permission_classes = (permissions.AllowAny, )
    def post(self, request):
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.create(request.data)
            token = Token.objects.create(user=user)
            return Response({"token": token.key, "user": serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLogin(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = (SessionAuthentication,)
	##
	def post(self, request):
		try:
			user = UserModel.objects.get(email=request.data['email'])

			if not user.check_password(request.data['password']):
				return Response({"error": "Incorrect password"}, status=status.HTTP_400_BAD_REQUEST)

			if not str(user) == request.data['pin']:
				return Response({"error": "Incorrect PIN"}, status=status.HTTP_400_BAD_REQUEST)

			token, created = Token.objects.get_or_create(user=user)
			serializer = UserSerializer(instance=user)
			login(request, user)
			return Response({"token": token.key, "user": serializer.data}, status=status.HTTP_200_OK)
		except UserModel.DoesNotExist:
			return Response({"error": "Email not found"}, status=status.HTTP_404_NOT_FOUND)

class UserLogout(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = ()
	def post(self, request):
		logout(request)
		return Response(status=status.HTTP_200_OK)

class UserView(APIView):
	permission_classes = (IsAuthenticated, )
	authentication_classes = (TokenAuthentication, )
	##
	def get(self, request):
		serializer = UserSerializer(request.user)
		return Response({'user': serializer.data}, status=status.HTTP_200_OK)

class ChangePasswordView(generics.UpdateAPIView):
	permission_classes = (IsAuthenticated, )
	authentication_classes = (TokenAuthentication, )
	serializer_class = ChangePasswordSerializer
	queryset = UserModel.objects.all()

class ChangePinView(generics.UpdateAPIView):
	permission_classes = (IsAuthenticated, )
	authentication_classes = (TokenAuthentication, )
	serializer_class = ChangePinSerializer
	queryset = UserModel.objects.all()
