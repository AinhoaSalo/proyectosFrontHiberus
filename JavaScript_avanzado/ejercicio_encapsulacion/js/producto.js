class Producto {
    #id;
    #descripcion;
    #precio;

    constructor(id, descripcion, precio){
        this.setId(id);
        this.setDescripcion(descripcion);
        this.setPrecio(precio);
    }

    getId(){
        return this.#id;
    }

    setId(id){
        this.#id = id;
    }

    getDescripcion(){
        return this.#descripcion;
    }

    setDescripcion(descripcion){
        this.#descripcion = descripcion;
    }

    getPrecio(){
        return this.#precio;
    }

    setPrecio(precio){
        // Ternaria --> condicion ? si es true : si es false
        (precio > 0) ? this.#precio = precio : alert('El precio debe ser positivo');
    }

    mostrarProducto(){
        return `${this.#id} ${this.#descripcion} ${this.#precio}`;
    }
    
}