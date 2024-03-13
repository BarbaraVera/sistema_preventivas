from django.db import models

# Create your models here.
class empresa(models.Model):
    class Meta:
        db_table = 'empresa'
    cod_empresa = models.CharField(max_length=50, unique=True, null=True, blank=True,verbose_name="Codigo empresa")
    nombre_empresa = models.TextField(max_length=100, null=True, blank=True, verbose_name="Nombre empresa")