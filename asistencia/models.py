from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.
class Persona(models.Model):
    cedula = models.IntegerField()
    nombre_apellido = models.CharField(max_length=255)
    fecha_nacimiento = models.DateTimeField()
    telefono = models.IntegerField()
    created_at = models.DateTimeField(default=timezone.now)

class Coordinador(models.Model):
    persona_id = models.ForeignKey(Persona, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)

class Asignatura(models.Model):
    nombre = models.CharField(max_length=255)

class Seccion(models.Model):
    codigo_seccion = models.CharField(max_length=255)
    created_at = models.DateTimeField(default=timezone.now)

class Estudiante(models.Model):
    persona_id = models.ForeignKey(Persona, on_delete=models.CASCADE)
    seccion_id = models.ForeignKey(Seccion, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)

class Profesor(models.Model):
    persona_id = models.ForeignKey(Persona, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)

# Analisis a esta tabla
class ProfesorHasSeccion(models.Model):
    profesor_id = models.ForeignKey(Profesor, on_delete=models.CASCADE)
    seccion_id = models.ForeignKey(Seccion, on_delete=models.CASCADE)

class ProfersorHasAsignatura(models.Model):
    profesor_id = models.ForeignKey(Profesor, on_delete=models.CASCADE)
    asignatura_id = models.ForeignKey(Asignatura, on_delete=models.CASCADE)

class Aula(models.Model):
    codigo_aula = models.CharField(max_length=255)
    created_at = models.DateTimeField(default=timezone.now)

class TipoHorario(models.Model):
    tipo = models.CharField(max_length=255)
    created_at = models.DateTimeField(default=timezone.now)

class Horario(models.Model):
    tipo_id = models.ForeignKey(TipoHorario, on_delete=models.CASCADE)
    hora_desde = models.TimeField()
    hora_hasta = models.TimeField()
    created_at = models.DateTimeField(default=timezone.now)

class Planificacion(models.Model):
    seccion_id = models.ForeignKey(Seccion, on_delete=models.CASCADE)
    asignatura_id = models.ForeignKey(Asignatura, on_delete=models.CASCADE)
    aula_id = models.ForeignKey(Aula, on_delete=models.CASCADE)
    horario_id = models.ForeignKey(Horario, on_delete=models.CASCADE)
    profesor_id = models.ForeignKey(Profesor, on_delete=models.CASCADE)
    tipo_semana = models.CharField(max_length=255)
    created_at = models.DateTimeField(default=timezone.now)

class Clase(models.Model):
    check_clase = models.BooleanField()
    hora_inicio = models.TimeField()
    hora_final = models.TimeField()
    planificacion_id = models.ForeignKey(Planificacion, on_delete=models.CASCADE)
    comentarios = models.TextField(blank=True)
    created_at = models.DateTimeField(default=timezone.now)

class Asistencia(models.Model):
    check_asistencia = models.BooleanField()
    clase_id = models.ForeignKey(Clase, on_delete=models.CASCADE)
    estudiante_id = models.ForeignKey(Estudiante, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)
