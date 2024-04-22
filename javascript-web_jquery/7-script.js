// Espera a que el documento HTML esté completamente cargado
$(document).ready(function() {
  // Realiza una solicitud GET a la API de SWAPI
  $.get("https://swapi-api.hbtn.io/api/people/5/?format=json", function(data) {
      // Extrae el nombre del personaje del objeto JSON
      var characterName = data.name;
      
      // Inserta el nombre del personaje en el elemento <div id="character">
      $("#character").text(characterName);
  });
});
