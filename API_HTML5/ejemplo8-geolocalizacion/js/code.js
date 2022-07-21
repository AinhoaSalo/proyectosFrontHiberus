let zoomMap = 12;

function mostrar_mapa() {
    // Comprobamos que el navegador soporta geolocalización
    if (navigator.geolocation) {
        // Obtener la posicion
        navigator.geolocation.getCurrentPosition(mostrarLocalizacion, manejarError);
    }else {
        alert('Tu navegador no soporta geolocalizacion')
    }
}

function mostrarLocalizacion(posicion) {
    // Obtener las coordenadas y generar el objeto googlemaps
    // alert(posicion.coords.longitude + '\n' + posicion.coords.latitude);
    let pos = new google.maps.LatLng(posicion.coords.latitude, posicion.coords.longitude)

    // Configuracion del mapa
    let opciones = {
        zoom:zoomMap,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    }

    //Crear el mapa
    let mapa = new google.maps.Map(document.getElementById('seccion_mapa'), opciones);

    //Mostrar la ubicacion en el mapa
    new google.maps.InfoWindow({map: mapa, position: pos, content: 'Estas aqui'});

    // Pedir que nos centre el mapa
    mapa.setCenter(pos);
    btnAcercar.onclikc = acercarZoom;
    btnAlejar.onclikc = alejarZoom;

    function acercarZoom() {  
        zoomMap++
        mostrar_mapa()
    }

    function alejarZoom() {  

    }

    ti
}

function manejarError(error) {
    switch(error.code){
        case error.PERMISSION_DENIED:
            alert('No tienes permiso del usuario');
            break;
        case error.POSITION_UNAVAILABLE:
            alert('No tienes permiso del usuario');
            break;
        case error.UNKNOWN_ERROR:
            alert('Error desconocido');
            break;
    }
}

// Alternativa al <body onload='mostrar_mapa()''>

google.maps.event.addDomListener(window, 'load', mostrar_mapa);

