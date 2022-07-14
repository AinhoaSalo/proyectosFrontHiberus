/*Hago que genere el primer select ->*/ 
let nombresProvincias = ['Zaragoza', 'Huesca', 'Madrid'];

for (const i in nombresProvincias) {
   document.getElementById('provincias').innerHTML += `<option value="${nombresProvincias[i]}"> ${nombresProvincias[i]}</option>`;
}

/*Función para añadir el segundo desplegable una vez seleccionada provincia ->*/ 
function selectPoblacion() {
    let value = document.getElementById("provincias").value;
     
    /* Código compi David ->*/
    document.getElementById('poblaciones').options.length = 0;

    /* Código profesora -> */
    let opcion = new Option('Selecciona');
    document.getElementById('poblaciones').appendChild(opcion);
    /* <- código profesora*/

    if (value == "Zaragoza") {
        console.log("Zaragoza");
        let zaragozaList = ['Zaragoza', 'Tauste', 'Ejea de los Caballeros'];
        forPoblacion(zaragozaList)
        

    } else if (value == 'Huesca') {
        console.log("Huesca");
        let huescaList = ['Barbastro', 'Jaca', 'Sabiñanigo'];
        forPoblacion(huescaList)

    } else  if (value == 'Madrid'){
        console.log("Madrid");
        let madridList = ['Las Rozas', 'Torrejon', 'Alcobendas'];
        forPoblacion(madridList)
    }
}

/*Función global para añadir el html en el if de selectPoblacion() ->*/
function forPoblacion (params) {
    let poblacion = document.getElementById('poblaciones');

    for (const i in params) {
        poblacion.innerHTML += `<option value="${params[i]}"> ${params[i]}</option>`;
    }
}

