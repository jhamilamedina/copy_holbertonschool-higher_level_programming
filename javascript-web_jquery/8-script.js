// Espera a que el documento esté completamente cargado antes de ejecutar el script
$(document).ready(function() {
  // Realiza una solicitud GET a la URL proporcionada para obtener la información de las películas
  $.ajax({
      url: "https://swapi-api.hbtn.io/api/films/?format=json",
      method: "GET",
      // Función que se ejecuta cuando la solicitud es exitosa
      success: function(response) {
          // Accede a la lista de películas en el objeto de respuesta
          var movies = response.results;
          
          // Itera sobre cada película en la lista
          $.each(movies, function(index, movie) {
              // Crea un nuevo elemento <li> para cada película
              var listItem = $("<li>");
              
              // Establece el texto del elemento <li> como el título de la película
              listItem.text(movie.title);
              
              // Agrega el elemento <li> al elemento <ul> con el ID "list_movies"
              $("#list_movies").append(listItem);
          });
      },
      // Función que se ejecuta si hay algún error en la solicitud
      error: function(xhr, status, error) {
          // Muestra un mensaje de error en la consola del navegador
          console.error("Error fetching movies:", status, error);
      }
  });
});