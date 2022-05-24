import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../model/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
 
  private baseURL = "http://localhost:8080/api/v1/getContactos";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los empleados
  getListaContactos():Observable<Contacto[]>{
    return this.httpClient.get<Contacto[]>(`${this.baseURL}`);
  }
}
