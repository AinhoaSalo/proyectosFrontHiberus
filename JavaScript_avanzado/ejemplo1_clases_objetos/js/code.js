// Crea objetos de Alumno
let alumno1 = new Alumno();// new Alumno() es un constructor vacio

alumno1.nombre = 'Maria';
alumno1.apellido = 'Perez';
alumno1.nota = 8.25;

let alumno2 = new Alumno();

alumno2.nombre = 'Juan';
alumno2.apellido = 'Lopez';
alumno2.nota = 9.5;

console.log(alumno1.nombre);
console.log(alumno2);

document.write(alumno1.mostrarInformacion() + '<br/>');
document.write(alumno2.mostrarInformacion() + '<br/>');

let alumno3 = new Alumno('Lucas','Sanchez', 3.5);
document.write(alumno3.mostrarInformacion() + '<br/>');

// Composicion
let direccion1 = new Direccion('Calle de la piruleta', 4, 'Villa inventada');

let alumno4 = new Alumno('Elena', 'Rodriguez', 6.8, direccion1)

document.write(alumno4.mostrarInformacion() + '<br/>');

let alumno5 = new Alumno('Federico', 'Fernandez', 5.9, 
              new Direccion('Diagonal', 33 ,'Barcelona'));
document.write(alumno5.mostrarInformacion() + '<br/>');

// Acceso a los recursos del objeto
alumno3.nota = 5
document.write(alumno3.mostrarInformacion() + '<br/>');

// Elena cambia de direccion Gran Vía, 37
alumno4.direccion.calle = 'Gran Vía';
alumno4.direccion.numero = 37;
document.write(alumno4.mostrarInformacion() + '<br/>');