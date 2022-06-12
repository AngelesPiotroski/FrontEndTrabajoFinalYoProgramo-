import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contacto } from 'src/app/model/contacto';
import { Persona } from 'src/app/model/persona';
import { ContactoService } from 'src/app/servicios/contacto.service';
import { LoginService } from 'src/app/servicios/login.service';
import { ModalSwitchService } from 'src/app/servicios/modal-switch.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contactos:Contacto[];
  personas:Persona[];
  accion = 'Agregar';
  form: FormGroup;
  id_contacto: number | undefined;
  ulogged:string = "";
  modalSwitch: boolean;
  constructor(public loginService: LoginService,private router:Router, private modalS: ModalSwitchService, 
              private contactoServicio: ContactoService, private personaServicio: PersonaService,  private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenercontactos();
    this.obtenerPersonas();
    this.ulogged = this.loginService.getUserLogged();
    this.modalS.$modal.subscribe((valor)=>{this.modalSwitch = valor })
  }

  openModal(){
    this.modalSwitch= true;
  }

  public divAgregar() {
    if( $('#agregarTrab').is(":hidden") ) {
      $('#agregarTrab').css('display', 'block'); 
      $('#agregarEdu').css('display', 'block'); 
    } else {
      $('#agregarTrab').css('display', 'none');
      $('#agregarEdu').css('display', 'none');
    }
}

  private obtenercontactos() {
    this.contactoServicio.getListaContactos().subscribe(dato => {
      this.contactos = dato;
    })
  }
  private obtenerPersonas(){
    this.personaServicio.getListaPersonas().subscribe(dato =>{
      this.personas = dato;
    })
  }

  eliminarContacto(id_contacto: number | any) {
    this.contactoServicio.deleteContacto(id_contacto).subscribe(data => {
      this.toastr.error('El contacto fue eliminado con exito!', 'Contacto eliminado');
      this.obtenercontactos();
      location.reload();
    }, error => {
      console.log(error);
    })
  }

}
