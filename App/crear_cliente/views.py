from datetime import datetime
from django.http import HttpRequest
from django.shortcuts import render, redirect
# Create your views here.

def crear_cliente(request):
    assert isinstance(request,HttpRequest)
    return render(
        request,
        'crear_cliente/crear_cliente.html',
        {
            'title':'Crear Cliente',
            'year':datetime.now().year,
        }
    )