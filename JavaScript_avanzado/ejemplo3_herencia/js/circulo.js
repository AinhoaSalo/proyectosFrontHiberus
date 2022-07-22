class Circulo extends Figura{
    // Propiedades
    radio;

    constructor(x, y, radio){
        // Estamos pasando X e Y al constructor de la superclase. En ee momento se crea el objeto de figura.
        super(x,y);
        this.radio = radio;
    }

    // Sobreescribimos los metodos heredados
    area(){
        return Math.PI * Math.pow(this.radio, 2);
    }

    mostrarDatos(){
        // MALA PRACTICA: return 'x:' + this.x + ', y:' + this.y + 'radio:' + this.radio;
        //super.mostrarDatos() llamamos al metodo de la superclase
        return super.mostrarDatos() + ' radio: ' + this.radio;
    }
}