//Crear un array con todos los telefonos

let telefonos = ['+56-2-24215300', '+56 2 24215300', '+56-2 24215300', 
'+56 2-24215300', '+56-2-2421530', '+56-2-242153000', '+34-2-24215300', 
'+56-2-24215A00',];

// Crear la expresion regular

let expresion = /^\+56(-2-| 2 )\d{8}$/;

//recorrer el array de telefonoes, aplicar la expresion y generar una fila en la tabla

for (const tfno of telefonos) {
    let resultado = expresion.test(tfno);

    let fila = document.createElement('tr');

    let columTfno = document.createElement('td');
    columTfno.innerText = tfno;

    let columResultado = document.createElement('td');
    columResultado.innerText = resultado;

    fila.appendChild(columTfno);
    fila.appendChild(columResultado);

    document.getElementById('tabla').appendChild(fila);
}


