let cliente1 = new Cliente('Jesus Ruiz', 'A-50268794', new Direccion('Anton Fernandez, SL', 5, 'Valencia'))

let productos = [new Producto(123, 'Dibujo Grogu', 19.90), new Producto(144, 'Sello Bender', 24.95), new Producto(184, 'Pendientes cactus', 15.90)];

let importe = 0;
for (const prod of productos) {
    importe += prod.getPrecio();
}

let fecha = new FechaEncapsulada(21,7,2022);

// document.getElementById('productos').innerHTML = `<ul><li>${prod1.mostrarProducto()}</li><li>${prod2.mostrarProducto()}</li></ul>` 

let factura1 = new Factura (cliente1, productos, importe, fecha);

document.getElementById('factura').innerHTML = `<div id='cliente'>${factura1.getCliente().mostrarCliente()}<div/><div id='producto'>${factura1.getProducto()}<div/>` 