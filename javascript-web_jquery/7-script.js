// Obtener el nombre del personaje
$(document).ready(() => {
  // Utilizamos el metodo $.ajax y hacemos una solicitud GET
  $.ayax({
    URL: 'https://swapi-api.hbtn.io/api/people/5/?format=json',
    method: 'GET',
    success(response) { // se ejecutará si la solicitud es exitosa
      // Accedemos al nombre del personaje en el objeto JSON devuelto por el API
      const characterName = response.name;
      // Utilizamos el método .html() de jQuery para establecer el contenido del div con id "character"
      $('#character').text(characterName);
    },
    error() { // La función que se ejecutará si la solicitud falla
      // En caso de error, mostramos un mensaje de error en el div con id "character"
      $('#character').text('Error al cargar el nombre del personaje:', error);
    },
  });
});
