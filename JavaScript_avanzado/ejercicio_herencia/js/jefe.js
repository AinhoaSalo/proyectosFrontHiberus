class Jefe extends Empleado {
    #bonus;
    #matricula;

    constructor(nombre, edad, sexo, sueldo, bonus, matricula) {
        super(nombre, edad, sexo, sueldo);
        this.setBonus(bonus);
        this.setMatricula(matricula);
    }

    getBonus(){
        return this.#bonus
    }

    setBonus(bonus){
        this.#bonus = bonus;
    }

    getMatricula(){
        return this.#matricula
    }

    setMatricula(matricula){
        this.#matricula = matricula;
    }

    mostrarDetalle(){
        return super.mostrarDetalle() + ' Bonus: ' + this.#bonus + ' Matricula: ' + this.#matricula;
    }
}