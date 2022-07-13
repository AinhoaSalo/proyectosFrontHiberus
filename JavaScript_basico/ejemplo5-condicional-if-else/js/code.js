/*********Ejemplo*********/

// Mostrar un número si es par o es impar

let numero = 7;

if (numero % 2 == 0) {
    console.log("El número es par")
}else{
    console.log("El número es impar")
}

//Condicional anidado
/*if (condition) {
    
}else if(condition){
    
}else if (condition) {
        
}else {
    
}*/

/*********Ejercicio*********/

//variable que indica si tenemos el borde puesto o no

let estiloBorde = false;
let estiloColor = false;
let cuadrado = document.getElementById("cuadrado");
let btnBorde = document.getElementById("btnBorde");
let btncolor = document.getElementById("btnColor")
let btnSombra = document.getElementsById("btnSombra")


function borde() {
    if (!estiloBorde) {
        cuadrado.style.border = "5px solid blue";
        btnBorde.innerText = "Quitar borde";

        estiloBorde = true;

    }else {
        cuadrado.style.border = "none";
        document.getElementById("btnBorde").innerText = "Aplicar borde";
        estiloBorde = false;
    }
    
}

function color() {
    if (!estiloColor) {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        // cuadrado.style.backgroundColor = "pink";

        //Cambiar dinámicamente el color, ojo el número debe ser este
        // 16777215 valor de FFFFFF
        document.getElementById("cuadrado").style.backgroundColor = "#" + randomColor;

        btnColor.innerText = "Restaurar color";
        
    }else {
        cuadrado.style.backgroundColor = "darkgray";
        btnColor.innerText = "Cambiar el color";
    }

    estiloColor = !estiloColor //para camiar a lo contrario. Si es true cambia a false y al revés. REVISAR
    
}

//MIRAR QUE ESTÁ MAL
function sombra() {
    cuadrado.classList.toggle("sombra")
    if (cuadrado.classList.contains("sombra")) {
        btnSombra.innerText = "Quitar sombra";
    } else {
        btnSombra.innerText = "Poner sombra"
    }
}

function restaurarEstilo() {
    //Recargar la página
    //location.reload();

    cuadrado.removeAttribute("style");
    cuadrado.className = 'restaurar';
}