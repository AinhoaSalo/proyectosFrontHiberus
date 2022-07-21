let i=0;

function contador() {
    // Recoger el mensaje recibido desde el hilo principal
    onmessage = function (event) {
        i = parseInt(event.data);
    }

    //Temporizador
    //setTimeout(funcion, tiempo);
    // setTimeout((que_recibo) => {que hago con esos datos}, 500);
    setTimeout(() => {
        i++;
        postMessage(i);  // Enviar el valor de i al hilo principal
        contador(); // Volvemos a llamar a contador
    }, 500);
}

contador();