// Llamar a la función mostrarEntradas
document.addEventListener("DOMContentLoaded", function() {
    // Llamar a la función mostrarEntradas al cargar la página
    mostrarEntradas();
});

function mostrarEntradas() {
    var opcionSeleccionada = document.getElementById("busqueda").value;

    ocultarEntradas();

    switch (opcionSeleccionada){
        case "codigo1":
            document.getElementById("busquedaRut").closest('div').style.display = 'block';
            document.getElementById("botonbusqueda").closest('div').style.display = 'block';
            document.querySelectorAll("td").forEach(th => {
                th.style.color = "black";
            });
            break;
        case "codigo2":
            document.getElementById("busquedaPreventivo").closest('div').style.display = 'block';
            document.getElementById("botonbusqueda").closest('div').style.display = 'block';
            document.querySelectorAll("td").forEach(th => {
                th.style.color = "black";
            });
            break;
        case "codigo3":
            document.getElementById("busquedaEmpresa").closest('div').style.display = 'block';
            document.getElementById("botonbusqueda").closest('div').style.display = 'block';
            document.querySelectorAll("td").forEach(th => {
                th.style.color = "black";
            });
            break;
        case "codigo4":
            document.getElementById("botonbusqueda").closest('div').style.display = 'block';
            document.querySelectorAll("td").forEach(th => {
                th.style.color = "red";
            });
            break;
        case "codigo5":
            document.getElementById("botonbusqueda").closest('div').style.display = 'block';
            document.querySelectorAll("td").forEach(th => {
                th.style.color = "blue";
            });
            break;
        case "codigo6":
            document.getElementById("busquedafecha1").closest('div').style.display = 'block';
            document.getElementById("busquedafecha2").closest('div').style.display = 'block';
            document.getElementById("botonbusqueda").closest('div').style.display = 'block';
            document.querySelectorAll("td").forEach(th => {
                th.style.color = "black";
            });
            break;
        default:
            // Mostrar el campo de entrada por defecto (busquedaCodigo)
            document.getElementById("busquedaRutDiv").style.display = 'block';
            document.getElementById("botonbusqueda").closest('div').style.display = 'block';
            document.querySelectorAll("td").forEach(th => {
                th.style.color = "black";
            });
            break;
    }

}

// Función para ocultar todas las entradas
function ocultarEntradas() {
    // Ocultar todos los campos de entrada
    document.getElementById("busquedaRut").closest('div').style.display = 'none';
    document.getElementById("busquedaPreventivo").closest('div').style.display = 'none';
    document.getElementById("busquedaEmpresa").closest('div').style.display = 'none';
    document.getElementById("busquedafecha1").closest('div').style.display = 'none';
    document.getElementById("busquedafecha2").closest('div').style.display = 'none';
    document.getElementById("botonbusqueda").closest('div').style.display = 'none';
    // Ocultar el campo de entrada por defecto
    document.getElementById("busquedaRutDiv").style.display = 'none';
}


///////////////////////////////---------------Filtro rut------------/////////////////////////////////
$(document).ready(function() {
    $('#filtro').click(function() {
    $('#table-body').empty();
        var rut = $('#busquedaRut').val().trim();
        $('#busquedaRut').val("");
        var mensajeElement = $('#mensaje1');
        $('#table-body').empty();

        if (!validarRut(rut)) {
            mostrarMensaje("Por favor ingrese un RUT válido.");
            return;
        }
        $.ajax({
            url: 'filtroRut/',
            method: 'POST',
            data: {
                'busquedaRut': rut,
            },
            success: function(data) {
                if (data && data.data && data.data.length > 0) {
                    $('#table-body').empty();
                    for (var i = 0; i < data.data.length; i++) {
                        var solicitud = data.data[i];
                        var fila = $('<tr>').append(
                            $('<td>').text(solicitud.rut),
                            $('<td>').text(solicitud.nombre_solicitante),
                            $('<td>').text(solicitud.telefono),
                            $('<td>').text(solicitud.paquete),
                            $('<td>').text(solicitud.empresa),
                            $('<td>').text(solicitud.responsable)
                        );
                        $('#table-body').append(fila);
                    }
                     mostrarMensaje("");
                }
                else {
                    mostrarMensaje("No se encontraron solicitudes.");
                }
            }
        });
    });
function validarRut(rut)
{
return true;
 }
function mostrarMensaje(mensaje) {
  if (mensaje === "No se encontraron solicitudes.")
  {
    $('#mensaje1').text(mensaje).addClass('error').show();
        }
    else {
            $('#mensaje1').text(mensaje).hide();
        }
    }
});


///////////////////////////////---------------Filtro preventiva------------/////////////////////////////////
$(document).ready(function() {
    $('#filtro').click(function() {
    $('#table-body').empty();
        var paquete = $('#busquedaPreventivo').val().trim();
        $('#busquedaPreventivo').val("");
        var mensajeElement = $('#mensaje2');
        $('#table-body').empty();

        if (!paquete) {
            mostrarMensaje("Por favor ingrese un nombre de paquete.");
            return;
        }

        $.ajax({
            url: 'filtroPreventiva/',
            method: 'POST',
            data: {
                'busquedaPreventivo': paquete,
            },
            success: function(data) {
                if (data && data.data && data.data.length > 0) {
                    $('#table-body').empty();

                    // Llenar el cuerpo de la tabla con los datos de las solicitudes
                    for (var i = 0; i < data.data.length; i++) {
                        var solicitud = data.data[i];
                        var fila = $('<tr>').append(
                            $('<td>').text(solicitud.rut),
                            $('<td>').text(solicitud.nombre_solicitante),
                            $('<td>').text(solicitud.telefono),
                            $('<td>').text(solicitud.paquete),
                            $('<td>').text(solicitud.empresa),
                            $('<td>').text(solicitud.responsable)
                        );
                        $('#table-body').append(fila);
                    }
                    mostrarMensaje("");
                } else {
                    mostrarMensaje("No se encontró paquete.");
                }
            }
        });
    });

function mostrarMensaje(mensaje) {
  if (mensaje === "No se encontró paquete.")
  {
    $('#mensaje2').text(mensaje).addClass('error').show();
        }
    else {
            $('#mensaje2').text(mensaje).hide();
        }
    }
});


///////////////////////////////---------------Filtro empresa------------/////////////////////////////////
$(document).ready(function() {
    $('#filtro').click(function() {
        $('#table-body').empty();

        var empresa = $('#busquedaEmpresa').val().trim();
        $('#busquedaEmpresa').val("");
        var mensajeElement = $('#mensaje3');
        $('#table-body').empty();

        if (!empresa) {
            mostrarMensaje("Por favor ingrese un nombre de empresa.");
            return;
        }

        $.ajax({
            url: 'filtroEmpresa/',
            method: 'POST',
            data: {
                'busquedaEmpresa': empresa,
            },
            success: function(data) {
                if (data && data.data && data.data.length > 0) {
                    $('#table-body').empty();

                    for (var i = 0; i < data.data.length; i++) {
                        var solicitud = data.data[i];
                        var fila = $('<tr>').append(
                            $('<td>').text(solicitud.rut),
                            $('<td>').text(solicitud.nombre_solicitante),
                            $('<td>').text(solicitud.telefono),
                            $('<td>').text(solicitud.paquete),
                            $('<td>').text(solicitud.empresa),
                            $('<td>').text(solicitud.responsable)
                        );
                        $('#table-body').append(fila);
                    }
                     mostrarMensaje("");
                } else {
                    mostrarMensaje("No se encontró empresa.");
                }
            }
        });
    });

function mostrarMensaje(mensaje) {
  if (mensaje === "No se encontró empresa.")
  {
    $('#mensaje3').text(mensaje).addClass('error').show();
        }
    else {
            $('#mensaje3').text(mensaje).hide();
        }
    }
});


//////////////////////////////---------------Filtro fecha------------/////////////////////////////////
$(document).ready(function() {
    $('#filtro').click(function() {
        $('#table-body').empty();
         $('#mensaje4').removeClass('error').text('').hide();
         // Ocultar el mensaje de error si está visible
        if ($('#mensaje4').is(':visible')) {
            $('#mensaje4').hide().removeClass('error').text('');
        }

        if ($('#busquedafecha1').css('display') !== 'none' && $('#busquedafecha2').css('display') !== 'none') {


            var fechaInicio = $('#fechaInicio').val();
            var fechaFin = $('#fechaFin').val();

            if (fechaInicio === '' || fechaFin === '') {
                mostrarMensaje("Por favor ingrese una fecha de inicio y una fecha de fin.");
                return;
            }

            if (!isValidDate(fechaInicio) || !isValidDate(fechaFin)) {
                mostrarMensaje("Formato de fecha no válido. Utilice el formato YYYY-MM-DD.");
                return;
            }

            var fechaActual = new Date().toISOString().split('T')[0];
            if (fechaInicio > fechaActual) {
                mostrarMensaje("Las fechas de búsqueda no pueden ser posteriores a la fecha actual.");
                return;
            }

            if (fechaInicio > fechaFin) {
                mostrarMensaje("La fecha de inicio no puede ser posterior a la fecha de fin.");
                return;
            }

            $.ajax({
                url: 'filtroFecha/',
                method: 'POST',
                data: {
                    'fechaInicio': fechaInicio,
                    'fechaFin': fechaFin,
                },
                success: function(data) {
                    if (data && data.data && data.data.length > 0) {
                        $('#table-body').empty();
                        for (var i = 0; i < data.data.length; i++) {
                            var solicitud = data.data[i];
                            var fila = $('<tr>').append(
                                $('<td>').text(solicitud.rut),
                                $('<td>').text(solicitud.nombre_solicitante),
                                $('<td>').text(solicitud.telefono),
                                $('<td>').text(solicitud.paquete),
                                $('<td>').text(solicitud.empresa),
                                $('<td>').text(solicitud.responsable)
                            );
                            $('#table-body').append(fila);
                        }
                        $('#fechaInicio').val('');
                        $('#fechaFin').val('');
                    } else {
                        mostrarMensaje("No se encontraron solicitudes para estas fechas.");
                    }

                    $('#busquedafecha1').show();
                    $('#busquedafecha2').show();
                }
            });

            $('#busquedafecha1').show();
            $('#busquedafecha2').show();
        }
    });

    function mostrarMensaje(mensaje) {
        $('#mensaje4').text(mensaje).addClass('error').show();
    }

    function isValidDate(dateString) {
        var regexDate = /^\d{4}-\d{2}-\d{2}$/;
        return dateString.match(regexDate);
    }
});



