from rest_framework import serializers
from .models import Planificacion

class PlanificacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Planificacion
        fields = '__all__'