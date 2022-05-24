import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

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
