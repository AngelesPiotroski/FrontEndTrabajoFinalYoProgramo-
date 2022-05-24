import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseURL = "http://localhost:8080/api/v1/";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los empleados
  getListaUsuarios():Observable<any>{
    return this.httpClient.get(`${this.baseURL+"usuarios/buscar/1"}`);
  }
  deleteUsuario(id_usuario: number): Observable<any> {
    return this.httpClient.delete(this.baseURL +"usuario/eliminar/"+ id_usuario, {responseType: 'text'})
  }

  saveUsuario(usuario: any): Observable<any> {
    return this.httpClient.post(this.baseURL +"usuarios/crear", usuario, {responseType: 'text'});
  }

  updateUsuario(id_usuario: number, usuario: any): Observable<any> {
    return this.httpClient.put(this.baseURL +"usuario/actualizar/"+  id_usuario, usuario, {responseType: 'text'});
  }

}
