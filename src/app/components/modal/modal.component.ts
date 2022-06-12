import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contacto } from 'src/app/model/contacto';
import { ContactoService } from 'src/app/servicios/contacto.service';
import { LoginService } from 'src/app/servicios/login.service';
import { ModalSwitchService } from 'src/app/servicios/modal-switch.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  contactos: Contacto[];
  form: FormGroup;
  id_contacto: number | undefined;

  constructor(private modalS: ModalSwitchService  ,public loginService: LoginService,private router:Router, private contactoServicio: ContactoService, private fb: FormBuilder, private toastr: ToastrService) {
  this.form = this.fb.group({
      nombre: ['', Validators.required],
      url: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  closeModal(){
    this.modalS.$modal.emit(false);
  }

  guardarContacto() {
    const Contacto: any = {
      nombre: this.form.get('nombre')?.value,
      url: this.form.get('url')?.value,
    }
    if (this.id_contacto == undefined) {
      // Agregamos una nueva contacto
      this.contactoServicio.saveContacto(Contacto).subscribe(data => {
        this.toastr.success('El contacto fue registrad0 con exito!', 'Contacto Registrado');
        this.form.reset();
        location.reload();
      }, error => {
        this.toastr.error('Opss.. ocurrio un error', 'Error')
        console.log(error);
      })
    } 
  }
}
