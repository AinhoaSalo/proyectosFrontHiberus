let persona = new Persona ('Pablo', 25, 'Hombre');
let empleado = new Empleado('Marina', 40, 'Mujer', 25000);
let jefe = new Jefe('Ainhoa', 31, 'Mujer', 50000, 'Tarjeta restarurante, Coche', '1234AHS')


document.write('Persona:' + persona.mostrarDetalle() + '<br/>');
document.write('Empleado:' + empleado.mostrarDetalle() + '<br/>');
document.write('Jefa:' + jefe.mostrarDetalle() + '<br/>');
