btnArrancar.onclick = arrancarWorker;
btnParar.onclick = pararWorker;

let worker;

function arrancarWorker() {
    if (typeof(worker) == 'undefined') {
        // Crear el worker
        worker = new Worker('./js/tarea.js')

        // Escuchar los mensajes recibidos
        worker.onmessage = function(event){
            resultado.innerHTML = event.data;
        }
    }
}

function pararWorker() {
    // Finalizar el worker
    worker.terminate()

    //Eliminar el worker
    worker = undefined;
}