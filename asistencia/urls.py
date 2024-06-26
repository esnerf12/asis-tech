from django.urls import path, include
from rest_framework import routers
from asistencia import views as asisviews
from users import views as usersviews
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()

router.register(r'planificacion', asisviews.PlanificacionView, 'planificacion')
router.register(r'asignatura', asisviews.AsignaturaView, 'asignatura')
router.register(r'horario', asisviews.HorarioView, 'horario')
router.register(r'tipo_horario', asisviews.TipoHorarioView, 'tipo_horario')
router.register(r'tipo_semana', asisviews.TipoSemanaView, 'tipo_semana')
router.register(r'aula', asisviews.AulaView, 'aula')
router.register(r'seccion', asisviews.SeccionView, 'seccion')
router.register(r'clase', asisviews.ClaseView, 'clase')
router.register(r'asistencia', asisviews.AsistenciaView, 'asistencia')
router.register(r'persona', asisviews.PersonaView, 'persona')
router.register(r'coordinador', asisviews.CoordinadorView, 'coordinador')
router.register(r'profesor', asisviews.ProfesorView, 'profesor')
router.register(r'profesor_asignatura', asisviews.ProfesorHasAsignaturaView, 'profesor_asignatura')
router.register(r'estudiante', asisviews.EstudianteView, 'estudiante')

urlpatterns = [
    path('register', usersviews.UserRegister.as_view(), name='register'),
	path('login', usersviews.UserLogin.as_view(), name='login'),
	path('logout', usersviews.UserLogout.as_view(), name='logout'),
	path('user', usersviews.UserView.as_view(), name='user'),
	path('change_password/<int:pk>/', usersviews.ChangePasswordView.as_view(), name='change_password'),
	path('change_pin/<int:pk>/', usersviews.ChangePinView.as_view(), name='change_pin'),
    path('v1/', include(router.urls)),
    path('docs/', include_docs_urls(title="Asistencia API")),
]
