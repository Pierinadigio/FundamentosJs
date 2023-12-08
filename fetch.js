    // FETCH API
// API Fetch en JavaScript. La API Fetch se utiliza para realizar peticiones HTTP y trabajar con respuestas.
//Provee un metodo global fetch() que proporciona una forma f'acil y logica de 
//obtener recursos de forma asincronica en la red
//Con fetch () podemos consumir una API(respuesta ser servidor que nos entrega datos para consumir en nuestro situi web)

//fetch a la URL del recurso que voy a consumir
// fetch ('URL')
        //espero una respuesta ()=>-Los datos que devuelve son en formato JSON
  /*      /*como la respuesta es solo un parametro puedo sacar )()
    .then( respuesta  =>{
        la respuesta la retorne en formato Json
        return respuesta.json()

    })*/
     /*es lo mismo que */
        //consumimos la API
        fetch ('https://pokeapi.co/api/v2/pokemon/')
        //que devuelve una promesa en formato json
        .then ( respuesta => respuesta.json())
        //lo que me devuelve en formato json, la data la muestro en la consola.. cada uno de los nombres del arreglo "results"
        //lo que devuelve lo leemos
        .then ( data => {
                data.results.forEach(element => {
                    console.log(element.name)
                });
        })
        //si falla el llamado podemos capturar el error en catch y segun lo que tenga configurado 
        //la APi  para el manejo del error es lo que va a salir en la consola
        .catch( error => console.log(error))

                            // URL de la API que deseas consultar
                    const apiUrl = 'https://ejemplo.com/api/data';

        // Realizar una solicitud GET
                    fetch(apiUrl)
                    .then(response => {
                        // Verificar si la respuesta es exitosa (código de estado en el rango 200-299)
                        if (!response.ok) {
                        throw new Error(`Error de red: ${response.status}`);
                        }
                        // Convertir la respuesta a formato JSON
                        return response.json();
                    })
                    .then(data => {
                        // Trabajar con los datos obtenidos
                        console.log(data);
                    })
                    .catch(error => {
                        // Manejar errores de red u otras excepciones
                        console.error('Error:', error);
                    });
        // Realizar una solicitud POST           
                    fetch(apiUrl, {
                        method: 'POST', // Método de la solicitud
                        headers: {
                          'Content-Type': 'application/json', // Tipo de contenido que estás enviando (puede variar según tu caso)
                          // Otros encabezados si es necesario
                        },
                        body: JSON.stringify(data) // Datos que estás enviando, convertidos a formato JSON
                      })
                        .then(response => response.json()) // Parsea la respuesta como JSON
                        .then(data => {
                          // Hacer algo con la respuesta (data)
                        })
                        .catch(error => {
                          // Manejar errores
                          console.error('Error:', error);
                        });
            //Después de hacer la solicitud, encadenas .then() para manejar la respuesta. 
            /*Puedes utilizar .json() para analizar la respuesta como JSON (esto devuelve otra promesa).
         //Luego, puedes encadenar otro .then() para hacer algo con los datos analizados.
        //También puedes encadenar .catch() para manejar cualquier error que ocurra durante la solicitud.            
        //verificar el estado de la respuesta dentro del primer .then() y lanzar un error si es necesario.
        
        //ASYNC AWAIT
    /*La declaracion de funcion async define una funcion asincronica que devuelve un objeto  AsyncFunction*/