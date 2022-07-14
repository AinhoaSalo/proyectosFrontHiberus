// Crear una matriz de 3filas x 2 columnas

let matriz1 = new Array(3);
matriz1[0] = new Array(2)
matriz1[1] = new Array(2)
matriz1[2] = new Array(2)

let matriz2 = new Array(new Array('Luis', 'Paula'), 
                        new Array('Jorge', 'Andres'), 
                        new Array('Alicia', 'Pedro'));
console.log(matriz2)

let matriz3 = [['Luis', 'Paula'], 
                ['Jorge', 'Andres'], 
                ['Alicia', 'Pedro']];
console.log(matriz3)

// Agregar elementos al array

matriz1[0][0] = 'Luis';
matriz1[0][1] = 'Paula';
matriz1[1][0] = 'Jorge';
matriz1[1][1] = 'Andres';
matriz1[2][0] = 'Alicia';
matriz1[2][1] = 'Pedro';

console.table(matriz3)

//for tradicional
for (let fila = 0; fila < matriz1.length; fila++) {
    let nombres1 = matriz1[fila]
    for (let columna = 0; columna < nombres1.length; columna++) {
        console.log('for ' + nombres1[columna])
    }
}

//for in
for (const fila in matriz1) {
    let nombres1 = matriz1[fila]
    for (const columna in nombres1) {
        console.log('In ' + nombres1[columna])
    }
}

//for of
for (const nombres of matriz1) {
    for (const nombresFinal of nombres) {
        console.log('Of ' + nombresFinal)
    }
}

//array.forEach

matriz1.forEach(nombres => {
    nombres.forEach(nombresFinal => {
        console.log('Each ' + nombresFinal);
    });
});

console.log("---Reverse---")
console.table(matriz3.reverse());
console.log("---Sort---")
console.table(matriz3.sort());
console.log("---Join---")
console.log(matriz3.join(" | "));

console.log("Slice 0,1: " + matriz3.slice(0,1) + '<br/>');


console.log("---Contact---");
console.log(matriz3.concat(matriz2));
