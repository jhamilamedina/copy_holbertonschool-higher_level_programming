document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos el elemento con el id read_header
    const id = document.getElementById("red_header");

    // Agregamos un evento de click en el elemento red_header
    red_header.addEventListener("click", function() {

        // Usar document.querySelector para seleccionar la etiqueta HTML
        const header = document.querySelector("header");
        // Agregar la clase red al header
        header.classList.add("red");
        
    });
});