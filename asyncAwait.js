    //ASYNC AWAIT
    /*Declaro una funcion async.  Se define una funcion asincronica que devuelve un objeto  AsyncFunction*/
    /*Await solo va a funcionar dentro de una funcion async*/


    const url = 'https://pokeapi.co/api/v2/pokemon/';

    const obtenerPokemones = async () => {
        try{
            const res= await fetch(url);  //se espera la peticion en "res"
            const data = await res.json()
            //solo quiero los nombres y guardarlos en un arreglo
            let arrayNombres = [];
                
            data.results.forEach(element => {
                arrayNombres.push(element.name);
                    
                })
                console.log(arrayNombres)
        } catch (error){
            console.log('Error:', error);

        }


    }
   // obtenerPokemones();

    //MAP Otra opcion con 
    const obtenerPokes = async () => {
        try{
            const res= await fetch(url);  //se espera la peticion en "res"
            const data = await res.json()
            //solo quiero los nombres y guardarlos --pero con mAP
          //results es una de las propiedades del objeto que a su vez es un arreglo de otros objetos compuesto por nombres y url- yo solo quieri los nombres

            const arrayPokes = data.results.map( pokemones => pokemones);
            console.log(arrayPokes)
            //console.log(data)
            
        } catch (error){
            console.log('Error:', error);

        }


    }
obtenerPokes();

    //MAP
    /*La función map() en JavaScript se utiliza para aplicar una función a cada elemento de un array y crear 
    un nuevo array con los resultados de esas aplicaciones. Es una forma de transformar cada elemento del array original 
    según una lógica específica.*/
   /* La sintaxis básica de map() es la siguiente:*/
    const nuevoArray = arrayOriginal.map(function(elemento, indice, array) {
     // Lógica de transformación aquí
    return nuevoElemento;
    });
       // elemento: El elemento actual que está siendo procesado.
      //  indice: El índice del elemento actual.
      //  array: El array original que está siendo recorrido.
        
      //Ejemplo :

    const numeros = [1, 2, 3, 4, 5];

    const cuadrados = numeros.map(function(numero) {
        return numero * numero;
      });
      
      console.log(cuadrados); // Resultado: [1, 4, 9, 16, 25]
      //En este ejemplo, map() se utiliza para crear un nuevo array (cuadrados) 
      //donde cada número del array original (numeros) se eleva al cuadrado.

      const cuadrados2 = numeros.map(numero => numero * numero);  //con funcion de flecha