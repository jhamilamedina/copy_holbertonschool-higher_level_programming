$(document).ready(function(){

  // Utilizamos el metodo ajax
  // Se solicita a travez del GET la informacion a travez de la URL dada
  $.ajax ({
    url: "https://hellosalut.stefanbohacek.dev/?lang=fr",
    method: "GET",

    // Esta funcion se ejecuta cuando la solicitud es exitosa
    success: function(response) {
      let hello = response.hello;

      // Selecciona el <div> con el id hello
      $("#hello").text(hello);
    },
    // Se ejecuta cuando hay error
    error: function(xhr, status, error) {
      console.error("Error fetching Hello translation:", status, error);
    }
  })
})