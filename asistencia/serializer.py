from rest_framework import serializers
from .models import Planificacion
from .models import Asignatura
from .models import Horario
from .models import TipoHorario
from .models import Aula
from .models import Seccion
from .models import Clase
from .models import Asistencia
from .models import Persona
from .models import Coordinador
from .models import Profesor
from .models import ProfersorHasAsignatura
from .models import Estudiante

class PlanificacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Planificacion
        fields = '__all__'

class AsignaturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asignatura
        fields = '__all__'

class HorarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Horario
        fields = '__all__'

class TipoHorarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoHorario
        fields = '__all__'

class AulaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aula
        fields = '__all__'

class SeccionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seccion
        fields = '__all__'

class ClaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clase
        fields = '__all__'

class AsistenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asistencia
        fields = '__all__'

class EstudianteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estudiante
        fields = '__all__'
        
class CoordinadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coordinador
        fields = '__all__'
        
class PersonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = '__all__'
        
class ProfesorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profesor
        fields = '__all__'

class ProfesorHasAsignaturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfersorHasAsignatura
        fields = '__all__'
