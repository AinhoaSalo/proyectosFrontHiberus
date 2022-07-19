function start(event) {
    event.target.style.opacity = '0.3';
}

function end(event) {
    event.target.style.opacity = '1';
}

function over(event) {
    event.target.style.border = '3px solid blue';
    // Cancelo el evento para que detecte el evento drop
    event.preventDefault();
}

function leave(event) {
    event.target.style.border= 'none';
}

function drop(event) {
    // event.target.appendChild(document.getElementById('arrastra'))   
    event.target.appendChild(arrastra)   
    event.target.style.border= 'none';

}

function iniciar(event) {
    event.target.appendChild(arrastra);
    event.target.style.border= 'none';   
}