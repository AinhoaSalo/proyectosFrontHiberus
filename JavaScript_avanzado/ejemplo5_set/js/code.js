// Set -> Son colecciones dinamicas, son iterables.
// No admiten elementos repetidos

// Crear un set

let conjunto = new Set();

// Agregar valores a un set
conjunto.add('Pera');
conjunto.add('Melocoton');
conjunto.add('Melon');
conjunto.add('Sandia');
conjunto.add('Platano');

//Los elementos repetidos no se agregan
conjunto.add('Melocoton');

console.log(conjunto)

//Metodos interesantes de la clase set
console.log('Cuantos elementos hay? ' + conjunto.size);

// Comprobar si ya existe un valor
console.log('Tengo pera? ' + conjunto.has('Pera'));

//Borrar un elemento
conjunto.delete('Sandia');
console.log(conjunto)

// Formas de recorrer un set
for (const fruta of conjunto) {
    console.log(fruta);
}

//Otra forma de recorrer un set programacion funcional
conjunto.forEach(fruta => {
    console.log(fruta);
});

//Borrar todos los elementos de la coleccion
conjunto.clear();
console.log(conjunto);