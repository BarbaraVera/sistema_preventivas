from datetime import datetime
from django.http import HttpRequest
from django.shortcuts import render, redirect

# Create your views here.

def crear_paquete(request):
    assert isinstance(request,HttpRequest)
    return render(
        request,
        'crear_paquete/crear_paquete.html',
        {
            'title':'Crear Paquete',
            'year':datetime.now().year,
        }
    )