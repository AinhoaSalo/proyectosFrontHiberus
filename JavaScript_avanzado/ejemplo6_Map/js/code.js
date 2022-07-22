// Map -> Son colecciones donde los elementos se almacenan key=value.
// Son iterables (se pueden recorrer)
// Las claves (key) no se pueden repetir pero los value si

// Crear el mapa

let mapa = new Map();

// Agregar elementos al mapa
mapa.set('Pera', 1.30);
mapa.set('Melon', 0.96);
mapa.set('Naranja', 0.78);
mapa.set('Sandia', 1.05);

// Que pasa si repito una clave? Se sobreescribe el valor
mapa.set('Naranja', 0.88);
console.log(mapa);

// Recuperar un elemento
console.log('Precio de la sandia: ' + mapa.get('Sandia'));

// Tamaño
console.log('Cuantas frutas tengo?: ' + mapa.size);

// Metodos utiles
for (const fruta of mapa.keys()) {
    document.write(fruta + '<br/>')
}

for (const precio of mapa.values()) {
    document.write(precio + '<br/>')
}

for (const [clave,valor] of mapa.entries()) {
    document.write('Hoy tengo ' + clave + ' a precio: ' + valor + '<br/>')
}

mapa.forEach(item => {
    document.write(item + '<br/>')
});

// Borrar un elemento
mapa.delete('Naranja');
console.log(mapa)

// Borrar todos los elementos de la coleccion
mapa.clear();
console.log(mapa);
