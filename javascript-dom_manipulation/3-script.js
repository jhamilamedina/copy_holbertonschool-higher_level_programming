document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos el elemento con el id toggle_header
    const id = document.getElementById("toggle_header");

    // Selecionamos el elemento del header
    const header = document.querySelector("header");

    // Agregamos un evento de click en el elemento toggle_header
    toggle_header.addEventListener("click", function() {
        // Verificar si el header tiene la clase red
        if (header.classList.contains("red")) {
            // Se quita si header tiene la clase red
            header.classList.remove("red");
            header.classList.add("green");
        } 
        else {
            // Si el header no tiene la clase red
            header.classList.remove("green");
            header.classList.add("red"); 
        }
        
    });
});