/*********Ejemplo*********/

// Crea un array con 4 nombres
let nombres = ['Luis', 'María', 'Pedro', 'Sara']; //array de strings

// Recorrer el array con for tradicional
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

// Recorrer el array con for-in
let lista = document.createElement("ul");
document.getElementsByTagName("body")[0].appendChild(lista);

for (const i in nombres) {
    let elemento = document.createElement("li");
    elemento.innerText = nombres[i];
    lista.appendChild(elemento);
}

// Recorrer el array con for-of
for (const nombre of nombres) {
    console.log(nombre)
}