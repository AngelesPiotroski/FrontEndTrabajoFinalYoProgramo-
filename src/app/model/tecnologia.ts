export class Tecnologia {
    id_tecnologia?: number;
    nombre: String;
    descripcion: String;
    porcentaje: number;
   
    
    constructor(nombre: String, descripcion: String,porcentaje: number) {
        this.nombre = nombre;
        this.descripcion = descripcion;      
        this.porcentaje=porcentaje;
    }
}