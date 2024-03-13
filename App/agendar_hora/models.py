from django.db import models
from App.crear_cliente.models import usuario
# Create your models here.
class solicitudes(models.Model):
    class Meta:
        db_table = 'solicitudes'
    usuario = models.ForeignKey(usuario, on_delete=models.RESTRICT, blank=True, null=True,verbose_name="Usuario", to_field='usuario')
    rut = models.CharField(max_length=12, blank=True, null=True,verbose_name="Rut solicitante")
    fecha_ingreso = models.DateField(null=True, blank=True, verbose_name="Fecha ingreso")
    nombre_solicitante = models.CharField(max_length=255, blank=True, null=True,verbose_name="Nombre solicitante")
    preventiva = models.CharField(max_length=255, blank=True, null=True,verbose_name="Preventiva")
    aprobar = models.BooleanField(default=None, blank=True, null=True,verbose_name="Aprobado")
    fecha_atencion = models.DateField(null=True, blank=True, verbose_name="Fecha atencion")
    hora_atencion = models.TimeField(null=True, blank=True, verbose_name="Hora atencion")
    responsable = models.CharField(max_length=100, blank=True, null=True,verbose_name="Responsable")
    telefono = models.IntegerField(null=True, blank=True,verbose_name="Telefono solicitante")