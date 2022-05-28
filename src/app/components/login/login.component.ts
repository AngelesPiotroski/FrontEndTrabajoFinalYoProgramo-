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
}
