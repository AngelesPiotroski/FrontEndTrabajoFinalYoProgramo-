import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  ulogged: string = "";

  constructor(public loginService: LoginService,private router:Router) { }

  ngOnInit(): void {
    
    this.ulogged = this.loginService.getUserLogged();
  }

  salir():void {
    this.loginService.deleteToken();
    this.ulogged = "";
    window.location.reload();  
  }

  loggin():void {
  
    this.router.navigate(['/login'])
  }
}
