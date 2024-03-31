// Esperar a que el DOM este listo
$(document).ready(function() {

  // Agregamos un click de eventos al update_header
  $("#update_header").click(function() {

    // Actualizamos el texto del header
    $("header").text("New Header!!!");
  });
});