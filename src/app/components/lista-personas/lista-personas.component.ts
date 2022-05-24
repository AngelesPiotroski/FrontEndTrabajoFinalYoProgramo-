import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {

  personas:Persona[];

  constructor(private personaServicio:PersonaService) { }

  ngOnInit(): void {
    this.obtenerPersonas();
  }

  private obtenerPersonas(){
    this.personaServicio.getListaPersonas().subscribe(dato =>{
      this.personas = dato;
    })
  }
}
