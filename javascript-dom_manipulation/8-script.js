// Hacer la solicitud HTTP utilizando Fetch
fetch('https://hellosalut.stefanbohacek.dev/?lang=fr')
    // Cuando la solicitud sea exitosa, obtener la respuesta en formato JSON
    .then(response => response.json())
    // Procesar los datos JSON
    .then(data => {
        // Obtener el valor de "hello" de los datos JSON
        const helloValue = data.hello;
        // Obtener el valor de "hola" de los datos JSON
        const holaValue = data.hola;
        // Actualizar el contenido del elemento HTML con id "hello" con el valor de "hello"
        document.getElementById('hello').innerText = helloValue;
        // Actualizar el contenido del elemento HTML con id "hola" con el valor de "hola"
        document.getElementById('hola').innerText = holaValue;
    })
    // Manejar errores en caso de que la solicitud falle
    .catch(error => {
        console.error('Error fetching data:', error);
    });