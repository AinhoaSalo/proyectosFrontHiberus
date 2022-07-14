let frutas = ['Pera','Manzana','Plátano','Naranja','Melón'];

// Formas de recorrer un array

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

for (const i in frutas) {
    console.log(frutas[i]);
}

for (const fruta of frutas) {
    console.log(fruta);
}

//coleccion.forEach(que_recibo => {como lo proceso})
frutas.forEach(itemFruta => {
    console.log(itemFruta);
});

//coleccion.map(que_recibo => que_devuelvoModificado)
let frutasMayusculas = frutas.map(item => item.toUpperCase());
console.log(frutasMayusculas);

//Principio de inmutabilidad
console.log(frutas);

//coleccion.fulter(que_recibo => condicion_de_filtro)
console.log(frutas.filter(item => item.length > 5))
console.log(frutas.filter(item => item.charAt(0) == "P"))
console.log(frutas.filter(item => item.charAt(item.length - 1) == "a")) //para que filtre por las palabras terminadas por a (para indicar el final de la palabra "item.length - 1")

// Coleccion.reduce((acumulador, que_recibo) => lo que quiero hacer con el dato)

console.log([2,8,5,3,7].reduce((suma, num)=>suma + num));
console.log(frutas.reduce((cadenaFrutas, itemFruta)=> cadenaFrutas + ' ' + itemFruta));

//Ejercicio
//1. Poner las frutas en mayusculas
//2. Filtrar por las que terminan en a
//3. devolver una cadena

let resultado = frutas
    .map(item => item.toUpperCase())
    .filter((item => item.charAt(item.length - 1) == "A"))
    .reduce((cadenaFrutas, itemFruta)=> cadenaFrutas + ' ' + itemFruta)
console.log(resultado)

//dado un array de caracteres de numeros, devolver la suma de los numeros pares

let charNum = ['3','5','8','1','7','2'];

let enteros = charNum.map(numeros => parseInt(numeros))

let pares = enteros.filter(item => item % 2 == 0)

let sumaPares = pares.reduce((suma, num)=> suma + num)


console.log(enteros)
console.log(pares)
console.log(sumaPares)


//Con un array de nombres, devolver una cadena con los nombres en mayusculas

let nombres = ['María', 'Pablo', 'Juan']
    .map(item => item.toUpperCase())
    .reduce((cadenaNombres, nombre)=> cadenaNombres + ' ' + nombre)
console.log(nombres);

let nombresSinMap = ['María', 'Pablo', 'Juan']
    .map(item => item.toUpperCase())
    .reduce((cadenaNombres, nombre)=> cadenaNombres.toUpperCase() + ' | ' + nombre)
console.log(nombresSinMap);