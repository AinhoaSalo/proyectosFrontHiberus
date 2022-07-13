/*crear un select donde cargamos las provincias que tenemos en un array con onload()
let nombresProvincias = ['Zaragoza', 'Huesca, 'Madrid']

Cuando el usuario seleccione una provincia, cargar el select de las poblaciones
'Zaragoza', 'Tauste', 'Ejea de los Caballeros'.
'Barbastro', 'Jaca', 'Sabiñanigo'.
'Las Rozas', 'Torrejon', 'Alcobendas'.

usar evento onchange */



function selectProvincias() {
    let nombresProvincias = ['Zaragoza', 'Huesca', 'Madrid'];

    for (let i in nombresProvincias) {
        // document.getElementById("provincias").innerHTML += '<option value="' + i + '">' + i + '</option>';  

        let opcion = new Option(nombresProvincias[i], i);
        document.getElementById('provincias').appendChild(opcion);
    }
    
}

function selectPoblaciones() {
    
    let nombresPoblaciones;

    switch(document.getElementById('provincias').value){
        case'0':
            nombresPoblaciones = ['Zaragoza', 'Tauste', 'Ejea de los Caballeros']
            break;
        case'1':
            nombresPoblaciones = ['Barbastro', 'Jaca', 'Sabiñanigo'];
            break;
        case'2':
            nombresPoblaciones = ['Las Rozas', 'Torrejon', 'Alcobendas'];
            break;
    }

    document.getElementById('poblaciones').options.length = 0
    //.innerHTML = '';
    let opcion = new Option('--selecciona---')
    opcion.disable = true;
    opcion.selected = true;
    document.getElementById('poblaciones').appendChild(opcion);
    
    for (let i in nombresPoblaciones) {
        let opcion = new Option(nombresPoblaciones[i], i);
        document.getElementById('poblaciones').appendChild(opcion);
    }
}

