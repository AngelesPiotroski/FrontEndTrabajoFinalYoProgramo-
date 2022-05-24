export class Trabajo {
    id_trabajo?: number;
    nombre: String;
    puesto: String;
    ubicacion: String;
    fechaInicio: Date;
    fechaFin: Date;
    
    constructor(nombre: String, puesto: String,ubicacion: String, fechaInicio: Date, fechaFin: Date) {
        this.nombre = nombre;
        this.puesto = puesto;      
        this.ubicacion=ubicacion;
        this.fechaInicio= fechaInicio;
        this.fechaFin= fechaFin;
    }
}