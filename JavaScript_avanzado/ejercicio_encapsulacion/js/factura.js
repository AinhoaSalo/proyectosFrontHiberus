class Factura {
    #cliente;
    #producto;
    #importe;
    #fecha;

    constructor(cliente, producto, importe, fecha){
        this.setCliente(cliente);
        this.setProducto(producto);
        this.setImporte(importe);
        this.setFecha(fecha);
    }

    getCliente(){
        return this.#cliente;
    }

    setCliente(cliente){
        this.#cliente = cliente;
    }

    getProducto(){
        return this.#producto;
    }

    setProducto(producto){
        this.#producto = producto;
    }

    getImporte(){
        return this.#importe;
    }

    setImporte(importe){
        (importe > 0) ? this.#importe = importe : alert('El importe debe ser positivo');
    }

    getFecha(){
        return this.#fecha;
    }

    setFecha(fecha){
        this.#fecha = fecha;
    }

    // mostrarFactura(){
    //     return `<div id='cliente'>${this.#cliente?.mostrarCliente()}<div/><div id='producto'> ${this.#producto?.mostrarProducto()}<div/> <div id='importe'>${this.#importe}<div/><div id='fecha'>${this.#fecha?.mostrarFecha()}<div/>`;
    // }

    //€
}