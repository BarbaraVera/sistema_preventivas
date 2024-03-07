from datetime import datetime
from django.http import HttpRequest
from django.shortcuts import render, redirect

# Create your views here.

def agenda_hora(request):
    assert isinstance(request,HttpRequest)
    return render(
        request,
        'agenda_hora/agenda_hora.html',
        {
            'title':'Agendar Hora',
            'year':datetime.now().year,
        }
    )