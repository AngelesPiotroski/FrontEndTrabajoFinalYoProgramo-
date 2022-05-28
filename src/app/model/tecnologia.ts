export class Tecnologia {
    id_tecnologia?: number;
    nombre: String;
    descripcion: String;
    porcentaje: String;
   
    
    constructor(nombre: String, descripcion: String,porcentaje: String) {
        this.nombre = nombre;
        this.descripcion = descripcion;      
        this.porcentaje=porcentaje;
    }
}