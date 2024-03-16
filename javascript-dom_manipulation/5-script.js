document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos el elemento con el id update_header
    const updateHeaderButton = document.getElementById("update_header");

    // Agregamos un evento de click en el elemento update_header
    updateHeaderButton.addEventListener("click", function() {

        // Usar document.querySelector para seleccionar la etiqueta HTML
        const headerElement = document.querySelector("header");
        // Actualiza el texto a New header
        headerElement.textContent = "New Header!!!";
        
    });
});