from datetime import datetime

from django.contrib import messages
from django.http import HttpRequest, JsonResponse
from django.shortcuts import render, redirect

from App.crear_empresa.models import empresa


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

def insertar_empresa(request):
    if request.method == 'POST':
        cod_empresa = request.POST.get('cod_empresa')
        nombre_empresa = request.POST.get('nom_empresa')
        try:

            existe_emp = empresa.objects.filter(cod_empresa=cod_empresa).exists()

            if existe_emp:
                messages.error(request, f'El codigo de empresa ya existe')
                return redirect('inicio_crear_empresa')

            datos = empresa(
                cod_empresa = cod_empresa,
                nombre_empresa = nombre_empresa
            )
            datos.save()
            messages.success(request, 'La empresa se ha creado correctamente.')
            return redirect('inicio_crear_empresa')

        except Exception as e:
            messages.error(request, f'Ocurrió un error (no se insertaron datos): {str(e)}')
            return redirect('inicio_crear_empresa')

    return redirect('inicio_crear_empresa')

def existe_empresa(request, cod_empresa):
    empresa_existente = empresa.objects.filter(cod_empresa=cod_empresa)
    data = list(empresa_existente.values())
    return JsonResponse(data, safe=False)