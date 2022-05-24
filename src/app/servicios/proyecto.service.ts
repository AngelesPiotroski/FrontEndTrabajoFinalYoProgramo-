import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private baseURL = "http://localhost:8080/api/v1/";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los empleados
  getListaProyectos():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(`${this.baseURL+'persona/getProyectos/1'}`);
  }

  deleteProyecto(id_proyecto: number): Observable<any> {
    return this.httpClient.delete(this.baseURL +"personas/eliminarProyecto/1/"+ id_proyecto,  {responseType: 'text'})
  }

  saveProyecto(proyecto: any): Observable<any> {
    return this.httpClient.post(this.baseURL +"personas/agregarProyecto/1", proyecto, {responseType: 'text'});
  }

  updateProyecto(id_proyecto: number, proyecto: any): Observable<any> {
    return this.httpClient.put(this.baseURL +"personas/actualizarProyecto/1/proyecto/"+  id_proyecto, proyecto, {responseType: 'text'});
  }
}
