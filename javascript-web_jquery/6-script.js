// Esperar a que el DOM este listo
$(document).ready(() => {
  // Agregamos un click de eventos al update_header
  $('#update_header').click(() => {
    // Actualizamos el texto del header
    $('header').text('New Header!!!');
  });
});
