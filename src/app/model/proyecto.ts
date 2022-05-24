export class Proyecto {
    id_proyecto?: number;
    nombre: String;
    descripcion: String;
    url: String;
    urlImagen: String;
    fechaRealizacion:Date;
   
    
    constructor(nombre: String, descripcion: String,url: String, urlImagen:String,fechaRealizacion:Date) {
        this.nombre = nombre;
        this.descripcion = descripcion;      
        this.url=url;
        this.fechaRealizacion=fechaRealizacion;
        this.urlImagen=urlImagen;
    }
}