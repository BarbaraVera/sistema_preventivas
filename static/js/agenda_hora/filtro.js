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


///////////////////////////////---------------Filtro codigo------------/////////////////////////////////
$(document).ready(function() {
    $('#filtro').click(function() {
        var rut = $('#busquedaRut').val().trim();
        var mensajeElement = $('#mensaje1');
        mensajeElement.hide().removeClass('error').empty();

        // Validar el formato del RUT
        if (!validarRut(rut)) {
            mostrarMensaje("Por favor ingrese un RUT válido.");
            return;
        }

        // Realizar la solicitud AJAX
        $.ajax({
            url: 'filtroRut/',
            method: 'POST',
            data: {
                'busquedaRut': rut,
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
                } else {
                    mostrarMensaje("No se encontraron solicitudes.");
                }
            },
            error: function(xhr, textStatus, errorThrown) {
                if (xhr.status === 404) {
                    mostrarMensaje("El recurso no se encuentra disponible en el servidor.");
                } else {
                    mostrarMensaje("Se produjo un error en la solicitud. Por favor, inténtelo de nuevo más tarde.");
                }
                console.error("Error en la llamada AJAX:", textStatus, errorThrown);
            }
        });
    });


function validarRut(rut) {

        return true;
    }
function mostrarMensaje(mensaje)
{
$('#mensaje1').text(mensaje).addClass('error').show();
    }
});


///////////////////////////////---------------Filtro preventiva------------/////////////////////////////////
$(document).ready(function() {
    $('#filtro').click(function() {
        var paquete = $('#busquedaPreventivo').val().trim();
        var mensajeElement = $('#mensaje2');
        mensajeElement.hide().removeClass('error').empty();

        // Validar el valor del paquete
        if (!paquete) {
            mostrarMensaje("Por favor ingrese un nombre de paquete.");
            return;
        }

        // Realizar la solicitud AJAX
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
                } else {
                    mostrarMensaje("No se encontraron solicitudes para este paquete.");
                }
            },
            error: function(xhr, textStatus, errorThrown) {
                if (xhr.status === 404) {
                    mostrarMensaje("El recurso no se encuentra disponible en el servidor.");
                } else {
                    mostrarMensaje("Se produjo un error en la solicitud. Por favor, inténtelo de nuevo más tarde.");
                }
                console.error("Error en la llamada AJAX:", textStatus, errorThrown);
            }
        });
    });

    function mostrarMensaje(mensaje) {
        $('#mensaje2').text(mensaje).addClass('error').show();
    }
});


///////////////////////////////---------------Filtro empresa------------/////////////////////////////////
$(document).ready(function() {
    $('#filtro').click(function() {
        var empresa = $('#busquedaEmpresa').val().trim();
        var mensajeElement = $('#mensaje3');
        mensajeElement.hide().removeClass('error').empty();

        if (!empresa) {
            mostrarMensaje("Por favor ingrese un nombre de empresa.");
            return;
        }

        // Realizar la solicitud AJAX
        $.ajax({
            url: 'filtroEmpresa/',
            method: 'POST',
            data: {
                'busquedaEmpresa': empresa,
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
                } else {
                    mostrarMensaje("No se encontraron solicitudes para esta empresa.");
                }
            },
            error: function(xhr, textStatus, errorThrown) {
                if (xhr.status === 404) {
                    mostrarMensaje("El recurso no se encuentra disponible en el servidor.");
                } else {
                    mostrarMensaje("Se produjo un error en la solicitud. Por favor, inténtelo de nuevo más tarde.");
                }
                console.error("Error en la llamada AJAX:", textStatus, errorThrown);
            }
        });
    });

    function mostrarMensaje(mensaje) {
        $('#mensaje3').text(mensaje).addClass('error').show();
    }
});


///////////////////////////////---------------Filtro fecha------------/////////////////////////////////
$(document).ready(function() {
    $('#filtro').click(function() {
        $('#busquedafecha1').show();
        $('#busquedafecha2').show();

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
                } else {
                    mostrarMensaje("No se encontraron solicitudes para estas fechas.");
                }
            },
            error: function(xhr, textStatus, errorThrown) {
                console.error("Error en la llamada AJAX:", textStatus, errorThrown);
                console.log(xhr.responseText);
                if (xhr.status === 404) {
                    mostrarMensaje("El recurso no se encuentra disponible en el servidor.");
                } else {
                    mostrarMensaje("Se produjo un error en la solicitud. Por favor, inténtelo de nuevo más tarde.");
                }
            }
        });
    });

    function mostrarMensaje(mensaje) {
        $('#mensaje4').text(mensaje).addClass('error').show();
    }

    function isValidDate(dateString) {
        var regexDate = /^\d{4}-\d{2}-\d{2}$/;
        return dateString.match(regexDate);
    }
});
