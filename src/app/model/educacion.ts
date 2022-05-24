
export class Educacion {
    id_educacion?: number;
    instituto: String;
    ubicacion: String;
    titulo: String;
    descripcion: String;
    fechaInicio: Date;
    fechaFin: Date;

    constructor(instituto: String, ubicacion: String, titulo: String, descripcion: String, fechaInicio: Date, fechaFin: Date) {
        this.instituto = instituto;
        this.ubicacion = ubicacion;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
}