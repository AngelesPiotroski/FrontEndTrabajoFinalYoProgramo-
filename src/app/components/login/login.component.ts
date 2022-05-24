import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/model/usuario';
import { LoginService } from 'src/app/servicios/login.service';
import { UserService } from '../../servicios/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios: Usuario[];
  accion = 'Agregar';
  form: FormGroup;
  id_usuario: number | undefined;

  constructor(private router: Router, private loginService: LoginService, private route: ActivatedRoute, private fb: FormBuilder, private toastr: ToastrService) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      contrasena: ['', Validators.required],
    });
  }

  login() {
    const Usuario: any = {
      email: this.form.get('email')?.value,
      contrasena: this.form.get('contrasena')?.value,
    }

    this.loginService.login(Usuario).subscribe(data => {
      if (data == null) this.toastr.error('No se encontró al usuario ', 'Error');

      else {
        this.loginService.setToken(data.id);
        this.router.navigate(['/mi-portfolio'])
      }
    });
  }

  ngOnInit(): void {

  }

  // constructor(private userServicio: UserService, private fb: FormBuilder, private toastr: ToastrService, private router: Router) {
  //   this.form = this.fb.group({
  //     email: ['', Validators.required],
  //     contrasena: ['', Validators.required],
  //   });
  // }

  // login() {
  //   const Usuario: any = {
  //     email: this.form.get('email')?.value,
  //     contrasena: this.form.get('contrasena')?.value,
  //   }

  //   this.userServicio.login(Usuario).subscribe(dato => {
  //     let myObjStr = JSON.stringify(dato);
  //     let result= JSON.parse(myObjStr);

  //     if(result != null){
  //       this.toastr.success('Bienvenido', 'Sesion iniciada');
  //       this.router.navigate(['mi-portfolio/']);
  //     }else{
  //       this.toastr.error('No se encontró al usuario ', 'Error');
  //     }
  //   }, error => {
  //     this.toastr.error('Opss.. ocurrio un error al iniciar sesion', 'Error');
  //     console.log(error);
  //   })
  // }


}
