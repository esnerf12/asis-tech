# Generated by Django 5.0.4 on 2024-04-10 23:04

import django.db.models.deletion
import django.utils.timezone
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Asignatura',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Aula',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('codigo_aula', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='Clase',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('check_clase', models.BooleanField()),
                ('hora_inicio', models.TimeField()),
                ('hora_final', models.TimeField()),
                ('comentarios', models.TextField(blank=True)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='Horario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hora_desde', models.TimeField()),
                ('hora_hasta', models.TimeField()),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='Persona',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cedula', models.IntegerField()),
                ('nombre_apellido', models.CharField(max_length=255)),
                ('fecha_nacimiento', models.DateTimeField()),
                ('telefono', models.IntegerField()),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='Seccion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('codigo_seccion', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='TipoHorario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tipo', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='Estudiante',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('persona_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='asistencia.persona')),
                ('seccion_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='asistencia.seccion')),
            ],
        ),
        migrations.CreateModel(
            name='Asistencia',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('check_asistencia', models.BooleanField()),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('clase_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='asistencia.clase')),
                ('estudiante_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='asistencia.estudiante')),
            ],
        ),
        migrations.CreateModel(
            name='Coordinador',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('persona_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='asistencia.persona')),
            ],
        ),
        migrations.CreateModel(
            name='Planificacion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tipo_semana', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('asignatura_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='asistencia.asignatura')),
                ('aula_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='asistencia.aula')),
                ('horario_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='asistencia.horario')),
            ],
        ),
        migrations.AddField(
            model_name='clase',
            name='planificacion_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='asistencia.planificacion'),
        ),
        migrations.CreateModel(
            name='Profesor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('persona_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='asistencia.persona')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ProfersorHasAsignatura',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('asignatura_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='asistencia.asignatura')),
                ('profesor_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='asistencia.profesor')),
            ],
        ),
        migrations.AddField(
            model_name='planificacion',
            name='profesor_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='asistencia.profesor'),
        ),
        migrations.CreateModel(
            name='ProfesorHasSeccion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('profesor_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='asistencia.profesor')),
                ('seccion_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='asistencia.seccion')),
            ],
        ),
        migrations.AddField(
            model_name='planificacion',
            name='seccion_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='asistencia.seccion'),
        ),
        migrations.AddField(
            model_name='horario',
            name='tipo_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='asistencia.tipohorario'),
        ),
    ]
