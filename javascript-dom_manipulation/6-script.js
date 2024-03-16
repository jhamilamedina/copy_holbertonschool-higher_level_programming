// Definomos una funcion para obtener el nombre del personaje
function getCharacterName() {
    //  Hacemos la socicitud HTTP con el fecth
    fetch("https://swapi-api.hbtn.io/api/people/5/?format=json")
    // Cuando la repuesta sea exitosa, obtenerla en formato json
    .then(response => response.json())
    // representar los datos en json
    .then(data => {
        // Obtener el nombre del personaje en json
        const characterName = data.name;
        // Actualiza el HTML con el nombre del personaje
        document.getElementById("character").innerText = characterName;
    })
    // Maneja el error en caso de que la solicitud falle
    .catch(error => {
        console.error("Case:", error);
    });
}
// Llamar a la funcion para obtener el name del personaje
getCharacterName();