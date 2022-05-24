import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tecnologia } from 'src/app/model/tecnologia';
import { LoginService } from 'src/app/servicios/login.service';
import { TecnologiaService } from 'src/app/servicios/tecnologia.service';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {

  tecnologias: Tecnologia[];
  accion = 'Agregar';
  form: FormGroup;
  id_tecnologia: number | undefined;
  ulogged: string = "";

  constructor(public loginService: LoginService, private router: Router, private tecnologiaServicio: TecnologiaService, private fb: FormBuilder, private toastr: ToastrService) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      porcentaje: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.ulogged = this.loginService.getUserLogged();
    this.obtenerTecnologias();
  }

  public divAgregar() {
    if ($('#agregarTec').is(":hidden")) {
      $('#agregarTec').css('display', 'block');

    } else {
      $('#agregarTec').css('display', 'none');

    }
  }

  private obtenerTecnologias() {
    this.tecnologiaServicio.getListaTecnologias().subscribe(dato => {
      this.tecnologias = dato;
    })
  }

  guardarTecnologia() {
    const Tecnologia: any = {
      nombre: this.form.get('nombre')?.value,
      porcentaje: this.form.get('porcentaje')?.value,
      descripcion: this.form.get('descripcion')?.value,

    }

    if (this.id_tecnologia == undefined) {
      // Agregamos una nueva Tecnologia
      this.tecnologiaServicio.saveTecnologia(Tecnologia).subscribe(data => {
        this.toastr.success('La Tecnologia fue registrada con exito!', 'Tecnologia Registrada');
        this.form.reset();
        this.obtenerTecnologias();
        window.location.reload();

      }, error => {
        this.toastr.error('Opss.. ocurrio un error', 'Error')
        console.log(error);
      })
    } else {

      Tecnologia.id_tecnologia = this.id_tecnologia;
      // Editamos Tecnologia
      this.tecnologiaServicio.updateTecnologia(this.id_tecnologia, Tecnologia).subscribe(data => {
        this.form.reset();
        this.accion = 'Agregar';
        this.id_tecnologia = undefined;
        this.toastr.info('La Tecnologia fue actualizada con exito!', 'Tecnologia Actualizada');
        this.obtenerTecnologias();
        window.location.reload();
      }, error => {
        console.log(error);
      })

    }
  }

  eliminarTecnologia(id_tecnologia: number | any) {

    this.tecnologiaServicio.deleteTecnologia(id_tecnologia).subscribe(data => {
      this.toastr.error('La Tecnologia fue eliminada con exito!', 'Tecnologia eliminada');
      this.obtenerTecnologias();
    }, error => {
      console.log(error);
    })

  }

  editarTecnologia(Tecnologia: any) {
    this.accion = 'Editar';
    this.divAgregar();
    this.id_tecnologia = Tecnologia.id_tecnologia;

    this.form.patchValue({
      nombre: Tecnologia.nombre,
      descripcion: Tecnologia.descripcion,
      porcentaje: Tecnologia.porcentaje
    })
  }

}
