import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-contactame',
  templateUrl: './contactame.component.html',
  styleUrls: ['./contactame.component.css']
})
export class ContactameComponent implements OnInit {

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
