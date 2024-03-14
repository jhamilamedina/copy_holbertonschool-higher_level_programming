document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos el elemento con el id read_header
    const id = document.getElementById("red_header");

    // Agregamos un evento de click en el elemento red_header
    red_header.addEventListener("click", function() {

        // Usar document.querySelector para seleccionar la etiqueta HTML
        const header = document.querySelector("header");
        // Actualizar el color del texto del header a rojo (FF0000)
        header.style.color = "#FF0000";
        
    });
});
