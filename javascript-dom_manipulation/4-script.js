document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos el elemento con el id add_item
    const addItemButton = document.getElementById("add_item");

    // Agregamos un evento de click en el elemento add_item
    addItemButton.addEventListener("click", function() {
        
        // Crear un nuevo elemento
        const newItem = document.createElement("li");
        // Se asigna texto al nuevo elemento
        newItem.textContent = "Item";
        // Seleccionar el elemento ul con la clase my_list
        const myList = document.querySelector(".my_list");
        // Agregar el nuevo elemento al final de la lista
        myList.appendChild(newItem);
        
    });
});