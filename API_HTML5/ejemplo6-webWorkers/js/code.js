btnArrancar.onclick = arrancarWorker;
btnParar.onclick = pararWorker;

let worker;

function arrancarWorker() {
    if (typeof(worker) == 'undefined') {
        // Crear el worker
        worker = new Worker('./js/tarea.js')

        // Tomar el valor almacenado y se lo pasamos a la tarea
        if (localStorage.numero != undefined) {
            worker.postMessage(localStorage.numero);
        }

        // Escuchar los mensajes recibidos
        worker.onmessage = function(event){
            resultado.innerHTML = event.data;
            //guardar en el navegador
            localStorage.numero = event.data
        }
    }
}

function pararWorker() {
    // Finalizar el worker
    worker.terminate()

    //Eliminar el worker
    worker = undefined;
}