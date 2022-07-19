// Asociar los eventos mediante js
document.getElementById('arrastra').ondragstart = start;
arrastra.ondragend = end;
//arrastra.draggable = 'true'; también funciona así

contenedor.ondragover = over;
contenedor.ondragleave = leave;
//addEventListener('evento', funcion)
contenedor.addEventListener('drop', drop);

inicio.ondrop = iniciar;
inicio.ondragover = function () {
    event.preventDefault();
}


function start() {
    event.target.style.opacity = '0.3';
}

function end() {
    event.target.style.opacity = '1';
}

function over() {
    event.target.style.border = '3px solid blue';
    // Cancelo el evento para que detecte el evento drop
    event.preventDefault();
}

function leave() {
    event.target.style.border= 'none';
}

function drop() {
    // event.target.appendChild(document.getElementById('arrastra'))   
    event.target.appendChild(arrastra)  // no necesito document.getElementById 
    event.target.style.border= 'none';

}

function iniciar() {
    event.target.appendChild(arrastra);
    event.target.style.border= 'none';   
}