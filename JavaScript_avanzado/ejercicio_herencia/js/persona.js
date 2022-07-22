class Persona{
    #nombre;
    #edad;
    #sexo;

    constructor(nombre, edad, sexo){
        this.setNombre(nombre);
        this.setEdad(edad);
        this.setSexo(sexo);
    }

    getNombre(){
        return this.#nombre
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getEdad(){
        return this.#edad
    }

    setEdad(edad){
        if (edad > 0) {
            this.#edad = edad;
        }else{
            alert('Por favor, introduzca una edad válida')
        }
        
    }

    getSexo(){
        return this.#sexo
    }

    setSexo(sexo){
        if (sexo == 'mujer' || sexo == 'Mujer') {
            this.#sexo = sexo; 
        }else if(sexo == 'hombre' || sexo == 'Hombre'){
            this.#sexo = sexo;
        } else{
            alert('Por favor, introduzca hombre o mujer')
        }
        
    }

    mostrarDetalle(){
        return ' Nombre: ' + this.#nombre + ',' + ' Edad: ' + this.#edad + ',' + ' Sexo:' + this.#sexo;
    }
}