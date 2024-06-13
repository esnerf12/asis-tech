from django.shortcuts import render
from rest_framework import viewsets
from .serializer import PlanificacionSerializer
from .serializer import AsignaturaSerializer
from .serializer import HorarioSerializer
from .serializer import TipoHorarioSerializer
from .serializer import AulaSerializer
from .serializer import SeccionSerializer
from .serializer import ClaseSerializer
from .serializer import AsistenciaSerializer
from .serializer import PersonaSerializer
from .serializer import CoordinadorSerializer
from .serializer import ProfesorSerializer
from .serializer import ProfesorHasAsignaturaSerializer
from .serializer import EstudianteSerializer
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
from .models import Estudiante
from .models import ProfersorHasAsignatura

# Create your views here.
class PlanificacionView(viewsets.ModelViewSet):
    serializer_class = PlanificacionSerializer
    queryset = Planificacion.objects.all()

class AsignaturaView(viewsets.ModelViewSet):
    serializer_class = AsignaturaSerializer
    queryset = Asignatura.objects.all()

class HorarioView(viewsets.ModelViewSet):
    serializer_class = HorarioSerializer
    queryset = Horario.objects.all()

class TipoHorarioView(viewsets.ModelViewSet):
    serializer_class = TipoHorarioSerializer
    queryset = TipoHorario.objects.all()

class AulaView(viewsets.ModelViewSet):
    serializer_class = AulaSerializer
    queryset = Aula.objects.all()

class SeccionView(viewsets.ModelViewSet):
    serializer_class = SeccionSerializer
    queryset = Seccion.objects.all()

class ClaseView(viewsets.ModelViewSet):
    serializer_class = ClaseSerializer
    queryset = Clase.objects.all()

class AsistenciaView(viewsets.ModelViewSet):
    serializer_class = AsistenciaSerializer
    queryset = Asistencia.objects.all()
    
class PersonaView(viewsets.ModelViewSet):
    serializer_class = PersonaSerializer
    queryset = Persona.objects.all()    
    
class CoordinadorView(viewsets.ModelViewSet):
    serializer_class = CoordinadorSerializer
    queryset = Coordinador.objects.all()

class EstudianteView(viewsets.ModelViewSet):
    serializer_class = EstudianteSerializer
    queryset = Estudiante.objects.all()

class ProfesorView(viewsets.ModelViewSet):
    serializer_class = ProfesorSerializer
    queryset = Profesor.objects.all()

class ProfesorHasAsignaturaView(viewsets.ModelViewSet):
    serializer_class = ProfesorHasAsignaturaSerializer
    queryset = ProfersorHasAsignatura.objects.all()
