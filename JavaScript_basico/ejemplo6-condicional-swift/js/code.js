/*********Ejemplo*********/

// let sexo = prompt("introduce sexo (hombre/mujer): ");

let sexo = "hombre";

switch (sexo) {
    case "hombre":
    case "h":
    case "H":
        console.log("Eres hombre")
        break;

    case "mujer":
    case "m":
    case "M":
        console.log("Eres mujer");
        break;

    default:
        console.log("Valor desconocido");
}

/*********Ejemplo más complejo*********/

function cambiarColor() {
    // Tengo que saber que boton se ha pulsado
    let boton = event.target.id
    switch (boton) {
        case "btn1":
            document.getElementById(boton).className = "rojo";
            break;
        case "btn2":
            document.getElementById(boton).className = "verde";
            break;
        case "btn3":
            document.getElementById(boton).className = "azul";
            break;
    }
}