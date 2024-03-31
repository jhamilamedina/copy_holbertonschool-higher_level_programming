// Agregar la clase red cuando se haga click en DIV#red_header
$(document).ready(function() {

  // Agregar un click de eventos al red_header
  $("#red_header").click(function() {

    // Selecciona el header para agregar la clase
    $("header").addClass("red");
  });
});