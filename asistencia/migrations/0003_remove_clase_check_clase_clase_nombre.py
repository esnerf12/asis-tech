# Generated by Django 5.0.4 on 2024-06-11 16:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('asistencia', '0002_remove_asistencia_check_asistencia'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='clase',
            name='check_clase',
        ),
        migrations.AddField(
            model_name='clase',
            name='nombre',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
    ]
