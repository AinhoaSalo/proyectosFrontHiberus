let j= 200;

function contador() {
    setTimeout(() => {
        j+=2;
        postMessage(`Holi ${j} desde Tarea 2`); 
        contador(); 
    }, 500);
}

contador();