let fecha1 = new Fecha(21,7,2022);
document.write(fecha1.mostrarFecha() + '<br/>');

let fecha2 = new Fecha();
fecha2.dia = 21;
fecha2.mes = 7;
fecha2.anyo = 2022;

document.write(fecha2.mostrarFecha() + '<br/>');

let fecha3 = new FechaEncapsulada(216,-7,202);
document.write(fecha3.mostrarFecha() + '<br/>');

let fecha4 = new FechaEncapsulada(21,7,2022);
document.write(fecha4.mostrarFecha() + '<br/>');