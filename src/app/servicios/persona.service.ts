import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';
import { Tecnologia } from '../model/tecnologia';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private baseURL = "https://backendargprog.herokuapp.com/api/v1/";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los empleados
  getListaPersonas():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(`${this.baseURL+'personas/getPersonas'}`);
  }

  updatePersona(id_persona: number, persona: any): Observable<any> {
    return this.httpClient.put(this.baseURL +"personas/actualizar/"+  id_persona, persona, {responseType: 'text'});
  }

}
