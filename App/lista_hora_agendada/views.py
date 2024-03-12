from datetime import datetime
from django.http import HttpRequest
from django.shortcuts import render, redirect

# Create your views here.

def lista_agenda(request):
    assert isinstance(request,HttpRequest)
    return render(
        request,
        'lista_hora_agendada/lista_hora_agendada.html',
        {
            'title':'Lista de horas',
            'year':datetime.now().year,
        }
    )