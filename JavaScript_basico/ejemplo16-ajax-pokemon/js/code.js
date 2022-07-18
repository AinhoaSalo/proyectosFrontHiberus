let xhr = new XMLHttpRequest();

// Funcion para obtener el objeto del navegaro
function obtenerObjeto() {
    xhr = new XMLHttpRequest(); //readyState = 0
}

function traerTodos() {
    obtenerObjeto();

    //preparar la petición
    xhr.open('GET', "https://pokeapi.co/api/v2/pokemon", true); //readyState = 1

    // El formato de respuesta es JSON
    xhr.setRequestHeader('accept', 'application/json');

    // Informar de la funcion que procesara la respuesta
    xhr.onreadystatechange = procesarTodos; //SIN PARENTESIS

    // Enviar la petición
    xhr.send(); //readyState = 2
}

function procesarTodos() { 
    //readyState = 3 recibo cabecera respuesta 
    //readyState = 4 recibo cuerpo respuesta

    //Solo se ejecuta si hemos recibido la respuesta por completo
    if(xhr.readyState == 4){
        // console.log(JSON.parse(xhr.responseText))
        let datos = JSON.parse(xhr.responseText);
        let array = datos.results;
        let nombres;
        // console.log(array);
        document.getElementById('todos').innerHTML = '<ul id="nombresPokemon"></ul>';
        
        for (const i in array) {
            nombres = array[i].name
            document.getElementById('nombresPokemon').innerHTML += `<li>${nombres}</li>`;
            console.log(array[i].name)
        }
    }
}

function buscarPokemon() {
    obtenerObjeto();

    let datoInput= nombre.value;

    xhr.open('GET', "https://pokeapi.co/api/v2/pokemon/" + datoInput, true); 

    
    xhr.setRequestHeader('accept', 'application/json');
 
     
    xhr.onreadystatechange = procesarPokemon; 

    xhr.send(); 
}

function procesarPokemon() {
    if(xhr.readyState == 4){
        console.log(JSON.parse(xhr.responseText));

        let dato = JSON.parse(xhr.responseText);

        //Lista de los nombres de los atributos o propiedades del JSON
        console.log(Object.keys(dato));
        // Acceder al valor de cada atributo
        console.log(dato['id'] + '----');

        document.getElementById('resultado').innerText 
        += 
        'Nombre: ' + dato.name + '\n';
        resultado.innerText += 'Altura: ' + dato.height + '\n';
        resultado.innerText += 'Peso: ' + dato.weight + '\n';
        
        for (const habilidad of dato.abilities) {
            resultado.innerText += 'Habilidad: ' + habilidad.ability.name + '\n';
        }
    }
}

//es lo mismo que <body onload='traerTodos()'>
addEventListener('load', traerTodos);

// asociar evento a la caja de texto
document.getElementById('nombre').addEventListener('blur', buscarPokemon);