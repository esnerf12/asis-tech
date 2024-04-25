from django.shortcuts import render
from rest_framework import viewsets
from .serializer import PlanificacionSerializer
from .models import Planificacion

# Create your views here.
class PlanificacionView(viewsets.ModelViewSet):
    serializer_class = PlanificacionSerializer
    queryset = Planificacion.objects.all()
