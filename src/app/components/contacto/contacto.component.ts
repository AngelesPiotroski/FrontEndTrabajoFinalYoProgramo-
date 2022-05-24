import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Contacto } from 'src/app/model/contacto';
import { Persona } from 'src/app/model/persona';
import { ContactoService } from 'src/app/servicios/contacto.service';
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
  constructor(private contactoServicio: ContactoService, private personaServicio: PersonaService) { }

  ngOnInit(): void {
    this.obtenercontactos();
    this.obtenerPersonas();
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

guardarContacto(){
  
}

}
