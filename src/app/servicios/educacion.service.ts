import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private baseURL = "http://localhost:8080/api/v1/";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los empleados
  getListaEducacion():Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(`${this.baseURL+"personas/getEducaciones/1"}`);
  }
  deleteEducacion(id_educacion: number): Observable<any> {
    return this.httpClient.delete(this.baseURL +"personas/eliminarEducacion/1/"+ id_educacion, {responseType: 'text'})
  }

  saveEducacion(educacion: any): Observable<any> {
    return this.httpClient.post(this.baseURL +"personas/agregarEducacion/1", educacion, {responseType: 'text'});
  }

  updateEducacion(id_educacion: number, educacion: any): Observable<any> {
    return this.httpClient.put(this.baseURL +"personas/actualizarEducacion/1/educacion/"+  id_educacion, educacion, {responseType: 'text'});
  }

}
