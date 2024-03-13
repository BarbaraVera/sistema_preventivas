var formulario_empresa = document.getElementById("formulario_empresa");
formulario_empresa.addEventListener("submit", function(event) {
    event.preventDefault();
    var cod_empresa = document.getElementById("cod_empresa").value;

    $.get("/crear_empresa/existe_empresa/" + cod_empresa, function (datos) {
        console.log(datos);
        if (datos.length > 0) {
            var alertContainer = document.getElementById("alert-container");
            var alertHTML = `
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    Ya existe una empresa con ese codigo
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
            alertContainer.innerHTML = alertHTML;
        } else {

            formulario_empresa.submit();
        }
    });
});
