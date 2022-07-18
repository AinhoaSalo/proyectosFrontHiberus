function parImpar() {
    let numero = parseInt(prompt("Introduce un número"));
    if (numero % 2 == 0) {
        alert("El numero introducido es par");
        
    } else {
        alert("El numero introducido es impar");
    }
}

function compararNumeros2() {
    let numero1 = parseInt(prompt("Introduce un número"));
    let numero2 = parseInt(prompt("Introduce un número"));

    if (numero1 > numero2) {
        alert(`${numero1} es mayor que ${numero2}`);
    } else {
        alert(`${numero2} es mayor que ${numero1}`)
    }
}

function compararNumeros3() {
    let numero1 = parseInt(prompt("Introduce un número"));
    let numero2 = parseInt(prompt("Introduce un número"));
    let numero3 = parseInt(prompt("Introduce un número"));

    if (numero1 > numero2 && numero1 > numero3) {
        alert(`${numero1} es mayor que ${numero2} y ${numero3}`);
    } else if (numero2 > numero1 && numero2 > numero3) {
        alert(`${numero2} es mayor que ${numero1} y ${numero3}`);
    } else if (numero3 > numero1 && numero3 > numero2){
        alert(`${numero3} es mayor que ${numero1} y ${numero2}`);
    }
}

