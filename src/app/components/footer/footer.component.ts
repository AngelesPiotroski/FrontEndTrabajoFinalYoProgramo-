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

  public divAgregar() {
    if ($('#btnLogin').is(":hidden")) {
      $('#btnLogin').css('display', 'block');
      $('#btnLogout').css('display', 'none');
    } else {
      $('#btnLogin').css('display', 'none');
      $('#btnLogout').css('display', 'block');
    }
  }

  // loguearse() {
  //   this.divAgregar();
  // }

  // desloguearse() {
  //  this.divAgregar();
  // }

  salir():void {
    this.loginService.deleteToken();
    this.ulogged = "";
    window.location.reload();  
  }

  loggin():void {
  
    this.router.navigate(['/login'])
  }


}
