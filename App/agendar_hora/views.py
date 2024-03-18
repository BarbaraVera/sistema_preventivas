from datetime import datetime
from django.contrib.auth.decorators import login_required
from django.http import HttpRequest, JsonResponse, HttpResponseRedirect
from datetime import datetime
from django.http import HttpRequest
from django.shortcuts import render, redirect
from App.agendar_hora.models import solicitudes
import json
from django.views.decorators.csrf import csrf_exempt
from django.contrib import messages


@login_required
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

@csrf_exempt
def filtroRut(request):
    if request.method == 'POST':
        rut_busqueda = request.POST.get('busquedaRut')
        datos_filtrados = solicitudes.objects.filter(rut=rut_busqueda)

        if datos_filtrados.exists():
            datos_json = []
            for solicitud in datos_filtrados:
                nombre_solicitante = solicitud.nombre_solicitante
                telefono = solicitud.telefono
                rut = solicitud.rut
                responsable = solicitud.responsable
                empresa = solicitud.usuario.empresa.nombre_empresa if solicitud.usuario else None
                paquete = solicitud.paquete.nombre_paquete if solicitud.paquete else None

                solicitud_dict = {
                    "nombre_solicitante": nombre_solicitante,
                    "telefono": telefono,
                    "rut": rut,
                    "responsable": responsable,
                    "empresa": empresa,
                    "paquete": paquete
                }

                datos_json.append(solicitud_dict)

            solicitudes_data = json.dumps(datos_json)

            context = {
                'title': 'solicitud',
                'year': datetime.now().year,
                'list_datos': datos_json,
                'solicitudes_data': solicitudes_data,
            }
            return JsonResponse({'data': datos_json})
        else:
            return render(request, 'agenda_hora/agenda_hora.html', {'title': 'solicitud', 'year': datetime.now().year})

    context = {
        'title': 'solicitud',
        'year': datetime.now().year,
    }
    return render(request, 'agenda_hora/agenda_hora.html', context)

@csrf_exempt
def filtroPreventiva(request):
    if request.method == 'POST':
        paquete = request.POST.get('busquedaPreventivo')
        datos_filtrados = solicitudes.objects.filter(paquete__nombre_paquete=paquete)

        if datos_filtrados.exists():
            datos_json = []
            for solicitud in datos_filtrados:
                nombre_solicitante = solicitud.nombre_solicitante
                telefono = solicitud.telefono
                rut = solicitud.rut
                responsable = solicitud.responsable
                empresa = solicitud.usuario.empresa.nombre_empresa if solicitud.usuario else None
                paquete = solicitud.paquete.nombre_paquete if solicitud.paquete else None

                solicitud_dict = {
                    "nombre_solicitante": nombre_solicitante,
                    "telefono": telefono,
                    "rut": rut,
                    "responsable": responsable,
                    "empresa": empresa,
                    "paquete": paquete
                }

                datos_json.append(solicitud_dict)

            solicitudes_data = json.dumps(datos_json)

            context = {
                'title': 'solicitud',
                'year': datetime.now().year,
                'list_datos': datos_json,
                'solicitudes_data': solicitudes_data,
            }
            return JsonResponse({'data': datos_json})
        else:
            return render(request, 'agenda_hora/agenda_hora.html', {'title': 'solicitud', 'year': datetime.now().year})

    context = {
        'title': 'solicitud',
        'year': datetime.now().year,
    }
    return render(request, 'agenda_hora/agenda_hora.html', context)

@csrf_exempt
def filtroEmpresa(request):
    if request.method == 'POST':
        empresa = request.POST.get('busquedaEmpresa')
        datos_filtrados = solicitudes.objects.filter(usuario__empresa__nombre_empresa=empresa)

        if datos_filtrados.exists():
            datos_json = []
            for solicitud in datos_filtrados:
                nombre_solicitante = solicitud.nombre_solicitante
                telefono = solicitud.telefono
                rut = solicitud.rut
                responsable = solicitud.responsable
                empresa = solicitud.usuario.empresa.nombre_empresa if solicitud.usuario else None
                paquete = solicitud.paquete.nombre_paquete if solicitud.paquete else None

                solicitud_dict = {
                    "nombre_solicitante": nombre_solicitante,
                    "telefono": telefono,
                    "rut": rut,
                    "responsable": responsable,
                    "empresa": empresa,
                    "paquete": paquete
                }

                datos_json.append(solicitud_dict)

            solicitudes_data = json.dumps(datos_json)

            context = {
                'title': 'solicitud',
                'year': datetime.now().year,
                'list_datos': datos_json,
                'solicitudes_data': solicitudes_data,
            }
            return JsonResponse({'data': datos_json})
        else:
            return render(request, 'agenda_hora/agenda_hora.html', {'title': 'solicitud', 'year': datetime.now().year})

    context = {
        'title': 'solicitud',
        'year': datetime.now().year,
    }
    return render(request, 'agenda_hora/agenda_hora.html', context)

@csrf_exempt
def filtroFecha(request):
    if request.method == 'POST':
        fecha_inicio = request.POST.get('fechaInicio')
        fecha_fin = request.POST.get('fechaFin')

        fecha_inicio = datetime.strptime(fecha_inicio, '%Y-%m-%d')
        fecha_fin = datetime.strptime(fecha_fin, '%Y-%m-%d')
        datos_filtrados = solicitudes.objects.filter(fecha_ingreso__range=[fecha_inicio, fecha_fin])

        if datos_filtrados.exists():
            datos_json = []
            for solicitud in datos_filtrados:
                nombre_solicitante = solicitud.nombre_solicitante
                telefono = solicitud.telefono
                rut = solicitud.rut
                responsable = solicitud.responsable
                empresa = solicitud.usuario.empresa.nombre_empresa if solicitud.usuario else None
                paquete = solicitud.paquete.nombre_paquete if solicitud.paquete else None
                fecha = solicitud.fecha_ingreso

                solicitud_dict = {
                    "rut": rut,
                    "nombre_solicitante": nombre_solicitante,
                    "telefono": telefono,
                    "paquete": paquete,
                    "responsable": responsable,
                    "empresa": empresa,
                    "fecha": fecha.strftime('%Y-%m-%d %H:%M:%S')
                }

                datos_json.append(solicitud_dict)

            return JsonResponse({'data': datos_json})
        else:
            return JsonResponse({'error': 'No se encontraron solicitudes para este rango de fechas.'}, status=404)

    return JsonResponse({'error': 'Método no permitido'}, status=405)


