from datetime import datetime
from django.http import HttpRequest, JsonResponse
from django.shortcuts import render, redirect
from App.crear_paquete.models import tipo_prestacion, prestacion

# Create your views here.

def crear_paquete(request):
    assert isinstance(request,HttpRequest)
    tipo_p = tipo_prestacion.objects.all().order_by('tipo_prestacion')
    return render(
        request,
        'crear_paquete/crear_paquete.html',
        {
            'title':'Crear Paquete',
            'year':datetime.now().year,
            'tipo_prestacion':tipo_p
        }
    )

def filtro_tipo_prestacion(request, cod_tipo_prestacion):
    prestaciones = prestacion.objects.filter(cod_tipo_prestacion=cod_tipo_prestacion).order_by('cod_prestacion')
    data_prestacion = list(prestaciones.values())
    return JsonResponse(data_prestacion, safe = False)