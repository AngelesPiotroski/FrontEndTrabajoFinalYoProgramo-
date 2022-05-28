import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/model/persona';
import { LoginService } from 'src/app/servicios/login.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  personas: Persona[];
  accion = 'Editar';
  form: FormGroup;
  form_trab: FormGroup;
  id_persona: number | undefined;
  ulogged:string = "";
  edad:number;
  per:Persona;

  constructor(public loginService: LoginService,private router:Router, private personaServicio: PersonaService, private fb: FormBuilder, private toastr: ToastrService) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      fotoPortada: ['', Validators.required],
      telefono: ['', Validators.required],
      lugarNacimiento: ['', Validators.required],
      dni: ['', Validators.required],
      domicilio: ['', Validators.required],
      fotoPerfil: ['', Validators.required],
      aboutMe: ['',[ Validators.required, Validators.maxLength(230)]],
      fechaNacimiento: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    this.obtenerPersonas();
    this.ulogged = this.loginService.getUserLogged();
  }

  
  public divAgregar() {
    if ($('#agregarPer').is(":hidden")) {
      $('#agregarPer').css('display', 'block');
    } else {
      $('#agregarPer').css('display', 'none');
    }
  }

  private obtenerPersonas() {
    this.personaServicio.getListaPersonas().subscribe(dato => {
      this.personas = dato;
      const today: Date = new Date();

      this.personas.forEach(p =>  this.per=p);
      const birthDate: Date = new Date(this.per.fechaNacimiento);
      let age: number = today.getFullYear() - birthDate.getFullYear();
      const month: number = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      this.edad = age;
    })
  }

  editarPersona(Persona: any) {
    this.divAgregar();
    this.accion = 'Editar';
    this.id_persona = Persona.id_persona;

    this.form.patchValue({
      nombre: Persona.nombre,
      apellido: Persona.apellido,
      email: Persona.email,
      fotoPortada: Persona.fotoPortada,
      telefono: Persona.telefono,
      lugarNacimiento: Persona.lugarNacimiento,
      dni: Persona.dni,
      domicilio: Persona.domicilio,
      fotoPerfil: Persona.fotoPerfil,
      aboutMe: Persona.aboutMe,
      fechaNacimiento: Persona.fechaNacimiento
    })
  }

  updatePersona() {
    const Persona: any = {
      nombre: this.form.get('nombre')?.value,
      apellido: this.form.get('apellido')?.value,
      email: this.form.get('email')?.value,
      fotoPortada: this.form.get('fotoPortada')?.value,
      telefono: this.form.get('telefono')?.value,
      lugarNacimiento: this.form.get('lugarNacimiento')?.value,
      dni: this.form.get('dni')?.value,
      domicilio: this.form.get('domicilio')?.value,
      fotoPerfil: this.form.get('fotoPerfil')?.value,
      aboutMe: this.form.get('aboutMe')?.value,
      fechaNacimiento: this.form.get('fechaNacimiento')?.value,
    }

    if (this.id_persona == undefined) {
      this.toastr.info('No se encontro a la persona', 'Error');
    } else {
      Persona.id_persona = this.id_persona;
      // Editamos Persona
      this.personaServicio.updatePersona(this.id_persona, Persona).subscribe(data => {
        this.form.reset();
        this.id_persona = undefined;
        this.toastr.info('La Persona fue actualizada con exito!', 'Persona Actualizada');
        this.obtenerPersonas();
        window.location.reload();  
      }, error => {
        console.log(error);
      })
    }


  }
}
