export class Contacto {
    id?: number;
    nombre: String;
    url: String;
    
    constructor(nombre: String, url: String, ) {
        this.nombre = nombre;
        this.url = url;
    }
}