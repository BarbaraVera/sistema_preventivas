//-------variables--------------------
var tipo_prestacion = document.getElementById("tipo_prestacion");
var tablaPrestaciones = document.getElementById("tabla_prestaciones").getElementsByTagName('tbody')[0];
var tabla_Seleccionados = document.getElementById("tabla_seleccionados").getElementsByTagName('tbody')[0];

//-------filtro tipo de prestacion---y se agregan a la tabla de prestaciones-------------
function showPrestaciones(cod_tipo_prestacion){
    $.get("/crear_paquete/filtro_tipo_prestacion/" + cod_tipo_prestacion, function(data_prestacion){

        tablaPrestaciones.innerHTML = '';

        data_prestacion.forEach(function(prestacion){
            var row = tablaPrestaciones.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = prestacion.cod_prestacion;
            cell2.innerHTML = prestacion.prestacion;

            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = prestacion.cod_prestacion;
            cell3.appendChild(checkbox);
        });
    });
}
//----------Se agregan las prestaciones a la tabla ------------------
document.querySelector('#agregar_tabla_btn').addEventListener('click', function(){
    var selectedRows = Array.from(tablaPrestaciones.getElementsByTagName('input')).filter(checkbox => checkbox.checked);
    selectedRows.forEach(row => {
        var newRow = tabla_seleccionados.insertRow();
        var tipoPrestacionSeleccionado = tipo_prestacion.options[tipo_prestacion.selectedIndex].text;
        var tipoCell = newRow.insertCell(0);
        tipoCell.innerHTML = tipoPrestacionSeleccionado;

        for(var i = 0; i < row.parentElement.parentElement.cells.length - 1 ; i++){
            var cell = newRow.insertCell();
            cell.innerHTML = row.parentElement.parentElement.cells[i].innerHTML;
        }
        var sacarFilaButtonCell = newRow.insertCell();
        var sacarFilaButton = document.createElement('button');
        sacarFilaButton.textContent = 'Sacar fila';
        sacarFilaButton.classList.add('btn', 'btn-danger');
        sacarFilaButton.addEventListener('click',function(){
            tabla_seleccionados.deleteRow(newRow.rowIndex);
        });
        sacarFilaButtonCell.appendChild(sacarFilaButton);
    });
    selectedRows.forEach(row => {
       row.checked = false;
    });
    tablaPrestaciones.innerHTML = '';
    tipo_prestacion.selectedIndex = 0;
});
