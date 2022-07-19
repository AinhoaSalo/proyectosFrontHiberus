//Start y end lo utilizo para la transición cuando muevo el elemento a transportar
document.getElementById('madrid').ondragstart = start;
document.getElementById('lisboa').ondragstart = start;
document.getElementById('paris').ondragstart = start;

madrid.ondragend = end;
lisboa.ondragend = end;
paris.ondragend = end;
//


spain.ondragover = over;
portugal.ondragover = over;
francia.ondragover = over;

spain.ondragleave = leave;
portugal.ondragleave = leave;
francia.ondragleave = leave;

spain.addEventListener('drop', drop);
portugal.addEventListener('drop', drop);
francia.addEventListener('drop', drop);


inicio.ondrop = iniciar;
inicio.ondragover = function () {
    event.preventDefault();
}

//variable global que almacena el id de la capital que estoy arrastrando
let capital;

function start() {
    capital = event.target.id;
    event.target.style.opacity = '0.3';
}

function end() {
    event.target.style.opacity = '1';
}

function over() {
    let pais = event.target.id;

    if ((pais == 'spain' && capital == 'madrid') || (pais == 'francia' && capital == 'paris') || (pais == 'portugal' && capital == 'lisboa')) {
        event.target.style.border = '3px solid green'
    } else {
        event.target.style.border = '3px solid red';
    }
    
    // Cancelo el evento para que detecte el evento drop
    event.preventDefault();
}

function leave() {
    event.target.style.border= 'none';
}

function drop() {
    let pais = event.target.id;

    if ((pais == 'spain' && capital == 'madrid') || (pais == 'francia' && capital == 'paris') || (pais == 'portugal' && capital == 'lisboa')) {
        event.target.appendChild(document.getElementById(capital));
        
    } 

    event.target.style.border= 'none';

}

function iniciar() {
    event.target.appendChild(document.getElementById(capital));
    event.target.style.border= 'none';   
}


