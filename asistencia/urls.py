from django.urls import path, include
from rest_framework import routers
from asistencia import views
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()

router.register(r'planificacion', views.PlanificacionView, 'planificacion')

urlpatterns = [
    path('v1/', include(router.urls)),
    path('docs/', include_docs_urls(title="Asistencia API")),
]
