btnIniciar.onclick = arrancarWorker;
btnParar.onclick = pararWorker;

let worker;
let workerDos;

function arrancarWorker() {
    if (typeof(worker) == 'undefined') {
        // Crear el worker
        worker = new Worker('./js/tarea1.js')


        // Escuchar los mensajes recibidos
        worker.onmessage = function(event){
            tarea1.innerHTML = event.data;
            //guardar en el navegador

        }
    }

    if (typeof(workerDos) == 'undefined') {
        workerDos = new Worker('./js/tarea2.js')



        workerDos.onmessage = function(event){
            tarea2.innerHTML = event.data;
        }
    }
}

function pararWorker() {
    // Finalizar el worker
    worker.terminate()
    worker = undefined;
    
    workerDos.terminate()
    workerDos = undefined;
}