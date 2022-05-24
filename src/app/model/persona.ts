
export class Persona {
    id?: number;
    nombre: String;
    apellido: String;
    dni: number;
    domicilio: String;
    fotoPerfil: String;
    fotoPortada: String;
    aboutMe: String;
    fechaNacimiento: Date;
    lugarNacimiento: String;
    telefono: number;
    email: String;

    constructor(nombre: String, apellido: String,fotoPortada: String, dni: number, domicilio: String, fotoPerfil: String, aboutMe: String, fechaNacimiento: Date, lugarNacimiento: String, telefono: number, email: String) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.domicilio = domicilio;
        this.aboutMe = aboutMe;
        this.fotoPerfil = fotoPerfil;
        this.fechaNacimiento = fechaNacimiento;
        this.lugarNacimiento= lugarNacimiento;
        this.telefono= telefono;
        this.email= email;
        this.fotoPortada= fotoPortada
    }
}
