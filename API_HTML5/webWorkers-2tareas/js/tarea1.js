let i= 100;

function contador() {
    
    setTimeout(() => {
        i++;
        postMessage(`Hola ${i} desde Tarea 1`); 
        contador(); 
    }, 1000);
}

contador();