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
