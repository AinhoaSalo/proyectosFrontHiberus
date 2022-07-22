class Producto {
    
    //Propiedades de instancia privadas
    // Cada instancia u objeto mantiene una copia de estas variables
    #id;
    #descripcion;
    #precio;
    
    //Propiedades de clase
    // Solo existe una variable y reside en la clase
    // La información de los recursos estaticos se comparten en los objetos
    static #contador = 0;

    constructor(descripcion, precio){
        Producto.#contador++;
        this.#id = Producto.#contador //No hay que poner this, hay que poner el nombre de la clase (Producto)

        //this.#id = ++Producto.#contador;

        this.setDescripcion(descripcion);
        this.setPrecio(precio);
    }

    static getContador(){
        return Producto.#contador
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