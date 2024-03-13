from django.db import models

# Create your models here.

class tipo_solicitud(models.Model):
    class Meta:
        db_table="tipo_solicitud"
    cod_tipo_solicitud = models.CharField(blank=False, null=False, max_length=5, verbose_name="Codigo tipo solicitud", unique=True)
    tipo_solicitud = models.TextField(blank=False, null=False, verbose_name="tipo de solicitud", max_length=100)

class tipo_prestacion(models.Model):
    class Meta:
        db_table = "tipo_prestacion"
    cod_tipo_prestacion = models.CharField(blank=False, null=False, max_length=5, verbose_name="Codigo tipo prestacion", unique=True)
    tipo_prestacion = models.TextField(blank=False, null=False, verbose_name="tipo de prestacion", max_length=100)
    cod_tipo_solicitud = models.ForeignKey(tipo_solicitud, on_delete=models.RESTRICT, blank=True, null=True, to_field='cod_tipo_solicitud')

class prestacion(models.Model):
    class Meta:
        db_table = "prestacion"
    cod_prestacion = models.CharField(blank=False, null=False, max_length=5, verbose_name="Codigo prestacion", unique=True)
    prestacion = models.TextField(blank=False, null=False, verbose_name="prestacion", max_length=100)
    cod_tipo_prestacion = models.ForeignKey(tipo_prestacion, on_delete=models.RESTRICT, blank=True, null=True, to_field='cod_tipo_prestacion')

class paquete(models.Model):
    class Meta:
        db_table = "paquete"
    cod_paquete = models.CharField(blank=False, null=False, verbose_name="Codigo paquete", unique=True)
    nombre_paquete = models.TextField(blank=False, null=False, verbose_name="nombre_paquete", max_length=100)

class paquete_prestacion(models.Model):
    class Meta:
        db_table = "paquete_prestacion"
    cod_paquete = models.ForeignKey(paquete, on_delete=models.RESTRICT, blank=True, null=True, to_field='cod_paquete')
    cod_tipo_prestacion = models.ForeignKey(tipo_prestacion, on_delete=models.RESTRICT, blank=True, null=True, to_field='cod_tipo_prestacion')
    cod_prestacion = models.ForeignKey(prestacion, on_delete=models.RESTRICT, blank=True, null=True, to_field='cod_prestacion')

