function getMovieTitles() {
    //  Hacemos la socicitud HTTP con el fecth
    fetch("https://swapi-api.hbtn.io/api/films/?format=json")
    // Cuando la repuesta sea exitosa, obtenerla en formato json
    .then(response => response.json())
    // representar los datos en json
    .then(data => {
        // Obtener la list de peliculas en json
        const movies = data.results;
        // Obtener la <ul> donde estan la lista de peliculas
        const ulElement = document.getElementById("list_movies");
        // Iterar sobre cada pelicula
        movies.forEach(movie => {
            // Crear un nuevo elemento <li> para cada titulo
            const liElement = document.createElement("li");
            // Establecer el texto del elemento li
            liElement.innerText = movie.title;
            // Agregar el elem <li> a las lista <ul>
            ulElement.appendChild(liElement);
            
        });
    })
    // Maneja el error en caso de que la solicitud falle
    .catch(error => {
        console.error("Case:", error);
    });
}
// Llamar a la funcion para obtener la lista de peliculas
getMovieTitles();