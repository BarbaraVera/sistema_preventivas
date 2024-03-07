from django.db import models

# Create your models here.

class empresa(models.Model):
    class Meta:
        db_table = 'empresa'
    cod_empresa = models.CharField(max_length=50, unique=True, null=True, blank=True,verbose_name="Codigo empresa")
    nombre_empresa = models.TextField(max_length=100, null=True, blank=True, verbose_name="Nombre empresa")

class usuario(models.Model):
    class Meta:
        db_table = 'usuario'
    usuario = models.CharField(max_length=50, unique=True)
    clave = models.CharField(max_length=255)
    nombre = models.CharField(max_length=100)
    empresa =  models.ForeignKey(empresa, on_delete=models.RESTRICT, blank=True, null=True,verbose_name="Empresa", to_field='cod_empresa')

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




