export class Usuario {
    id_usuario?: number;
    email: String;
    contrasena: String;
    
    constructor(email: String, contrasena: String) {
        this.email = email;
        this.contrasena = contrasena;      
    }
}