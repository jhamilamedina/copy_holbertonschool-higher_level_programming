// Agregar la clase red cuando haga click en DIV#red_header
$(document).ready(function() {

  // Agrega un controlador de eventos a red_header
  $("#red_header").click(function() {

    // Selecciona el header a cambia de color a rojo
    $("header").css("color", "#FF0000");
  });
});