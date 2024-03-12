from datetime import datetime
from django.http import HttpRequest
from django.shortcuts import render, redirect
# Create your views here.

def crear_empresa(request):
    assert isinstance(request,HttpRequest)
    return render(
        request,
        'crear_empresa/crear_empresa.html',
        {
            'title':'Crear Empresa',
            'year':datetime.now().year,
        }
    )