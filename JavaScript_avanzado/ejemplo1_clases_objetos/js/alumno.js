class Alumno{
    // Propiedades
    nombre;
    apellido;
    nota;
    direccion;

    // Constructor 
    // Importate! En JS no se permite sobrecarga de constructores
    // El constructor se ejecuta cada vez que hacemos un new
    constructor(nombre, apellido, nota, direccion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nota = nota;
        this.direccion = direccion;
    }

    // Metodos
    mostrarInformacion(){
        return 'Nombre:' + this.nombre + ' Apellido: ' + this.apellido + ' Nota: ' + this.nota + ' Direccion:' + this.direccion?.mostrarInfo();
    }
}

//el . es un operador de acceso