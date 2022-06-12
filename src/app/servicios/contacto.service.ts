import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../model/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
 
  private baseURL = "https://backendargprog.herokuapp.com/api/v1/";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los empleados
  getListaContactos():Observable<Contacto[]>{
    return this.httpClient.get<Contacto[]>(this.baseURL + "getContactos");
  }

  deleteContacto(id_contacto: number): Observable<any> {
    return this.httpClient.delete(this.baseURL +"contacto/"+ id_contacto, {responseType: 'text'})
  }

  saveContacto(contacto: any): Observable<any> {
    return this.httpClient.post(this.baseURL +"contactos", contacto, {responseType: 'text'});
  }

  updateContacto(id_contacto: number, contacto: any): Observable<any> {
    return this.httpClient.put(this.baseURL +"contacto/"+  id_contacto, contacto, {responseType: 'text'});
  }
}
