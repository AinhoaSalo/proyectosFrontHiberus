class Empleado extends Persona {
    #sueldo;

    constructor(nombre, edad, sexo, sueldo) {
        super(nombre, edad, sexo, sueldo);
        this.setSueldo(sueldo);
    }

    getSueldo(){
        return this.#sueldo
    }

    setSueldo(sueldo){
        this.#sueldo = sueldo;
    }

    mostrarDetalle(){
        return super.mostrarDetalle() + ' Sueldo: ' + this.#sueldo
    }
}