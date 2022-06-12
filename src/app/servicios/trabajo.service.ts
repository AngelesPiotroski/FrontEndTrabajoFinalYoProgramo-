import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trabajo } from '../model/trabajo';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {

  private baseURL = "https://backendargprog.herokuapp.com/api/v1/";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los empleados
  getListaTrabajos():Observable<Trabajo[]>{
    return this.httpClient.get<Trabajo[]>(`${this.baseURL+'personas/getTrabajos/1'}`);
  }

  deleteTrabajo(id_trabajo: number): Observable<any> {
    return this.httpClient.delete(this.baseURL +"personas/eliminarTrabajo/1/"+ id_trabajo,  {responseType: 'text'});
  }

  saveTrabajo(trabajo: any): Observable<any> {
    return this.httpClient.post(this.baseURL +"personas/agregarTrabajo/1", trabajo,  {responseType: 'text'});
  }

  updateTrabajo(id_trabajo: number, trabajo: any): Observable<any> {
    return this.httpClient.put(this.baseURL +"personas/actualizarTrabajo/1/trabajo/"+  id_trabajo, trabajo,  {responseType: 'text'});
  }

}
