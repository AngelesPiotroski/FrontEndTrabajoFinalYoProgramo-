import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnologia } from '../model/tecnologia';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {
  private baseURL = "http://localhost:8080/api/v1/";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los empleados
  getListaTecnologias():Observable<Tecnologia[]>{
    return this.httpClient.get<Tecnologia[]>(`${this.baseURL+'persona/getTecnologias/1'}`);
  }

  deleteTecnologia(id_tecnologia: number): Observable<any> {
    return this.httpClient.delete(this.baseURL +"personas/eliminarTecnologia/1/"+ id_tecnologia,  {responseType: 'text'})
  }

  saveTecnologia(tecnologia: any): Observable<any> {
    return this.httpClient.post(this.baseURL +"personas/agregarTecnologia/1", tecnologia,  {responseType: 'text'});
  }

  updateTecnologia(id_tecnologia: number, tecnologia: any): Observable<any> {
    return this.httpClient.put(this.baseURL +"tecnologia/"+  id_tecnologia, tecnologia,  {responseType: 'text'});
  }
}
