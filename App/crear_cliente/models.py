from django.db import models
from App.crear_empresa.models import empresa
# Create your models here.
class usuario(models.Model):
    class Meta:
        db_table = 'usuario'
    usuario = models.CharField(max_length=50, unique=True)
    clave = models.CharField(max_length=255)
    nombre = models.CharField(max_length=100)
    empresa = models.ForeignKey(empresa, on_delete=models.RESTRICT, blank=True, null=True,verbose_name="Empresa", to_field='cod_empresa')
    mutual = models.BooleanField(default=False, blank=True, null=True, verbose_name="Usuario mutual")