import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = "http://localhost:8080/api/v1/";

  constructor(private httpClient: HttpClient,private cookies: CookieService) { }

  login(user:any): Observable<any> {
    return this.httpClient.post(this.baseURL +"login", user, {responseType: 'text'});
  }

  getUser(id:number):Observable<any>{ 
    return this.httpClient.get(this.baseURL+"/"+id); 
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }

  getToken() {
    return this.cookies.get("token");
  }
  
  deleteToken(){
    this.cookies.delete("token");
  }

  getUserLogged() {
    const token = this.getToken();
    return token;
  }

}
