// Actualizar el DIV#toggle_header a la clase roja o verde
// Espera a que el DOM este listo
$(document).ready(function(){

  // Agregar un click de eventos a DIV#toggle_header
  $("#toggle_header").click(function() {

    // Selecciona el header
    const header = $("header");

    // Verifica si tiene la clase red
    if (header.hasClass("red")) {

      // Si tien la clase red se quita y pone la clase green
      header.removeClass("red").addClass("green");
    } else {
      // Si tiene la clase green quitala y ponle la clase red
      header.removeClass("green").addClass("red");
    }
  });
});