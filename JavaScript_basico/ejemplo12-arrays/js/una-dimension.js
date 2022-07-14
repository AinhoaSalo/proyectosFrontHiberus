// Crear un array

let array1 = new Array(); // creamos un array vacio
let array2 = []; //creamos un array vacio
let array3 = new Array(2); // crear un array de 2 elementos
let array4 = new Array('Luis', 'Paula', 'Jorge', 'Andres');
let array5 = ['Luis', 'Paula', 'Jorge', 'Andres'];

// Agregar elementos al array
array3[0] = 'Pera';
array3[1] = 'Melocoton';
// los arrays de JavaScript son dinamicos, permiten agregar mas elementos
array3[2] = 'Fresa'; 
console.log(array3);

array3.push('Naranja');
console.log(array3)

// (0-> posicion, numeroElementosBorrar, valor)
// sustituyo la fresa por melon
array3.splice(2,1,'Melon')
console.log(array3)

//inserto uva en la primera posicion
array3.splice(0,0,'Uva')
console.log(array3)

//para borrar a partir de una posición
array3.splice(2)
console.log(array3);

console.log(array3.pop())

/*Formas de recorrer un array
for tradicional
for in
for of
array.forEach
*/ 

document.write("Reverse: " + array4.reverse() + '<br/>');
document.write("Sort: " + array4.sort() + '<br/>');
document.write("Sort ascendente: " + [5,2,7,9].sort() + '<br/>');
document.write("Sort descendente: " + [5,2,7,9].sort().reverse() + '<br/>');
document.write("Sort: " + [5,2,7,9,25].sort() + '<br/>');
document.write("Join: " + [5,2,7,9].join() + '<br/>');
document.write("Join: " + [5,2,7,9].join(" | ") + '<br/>');
document.write("Slice 1,3: " + [5,2,7,9].slice(1,3) + '<br/>');
document.write("Slice 1: " + [5,2,7,9].slice(1) + '<br/>');
document.write("Concat: " + [5,2,7,9].concat(array4) + '<br/>');
document.write("Concat: " + array4.concat([5,2,7,9]) + '<br/>');