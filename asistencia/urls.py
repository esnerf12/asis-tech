from django.urls import path, include
from rest_framework import routers
from asistencia import views as asisviews
from users import views as usersviews
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()

router.register(r'planificacion', asisviews.PlanificacionView, 'planificacion')

urlpatterns = [
    path('register', usersviews.UserRegister.as_view(), name='register'),
	path('login', usersviews.UserLogin.as_view(), name='login'),
	path('logout', usersviews.UserLogout.as_view(), name='logout'),
	path('user', usersviews.UserView.as_view(), name='user'),
    path('v1/', include(router.urls)),
    path('docs/', include_docs_urls(title="Asistencia API")),
]
