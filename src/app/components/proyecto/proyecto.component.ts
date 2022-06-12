import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proyecto } from 'src/app/model/proyecto';
import { LoginService } from 'src/app/servicios/login.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  proyectos: Proyecto[];
  accion = 'Agregar';
  form: FormGroup;
  id_proyecto: number | undefined;
  ulogged: string = "";

  constructor(public loginService: LoginService,private router:Router,private proyectoServicio: ProyectoService, private fb: FormBuilder, private toastr: ToastrService) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      url: ['', Validators.required],
      urlImagen: [''],
      descripcion: ['', Validators.required],
      fechaRealizacion: ['', Validators.required],
    });

    this.obtenerProyectos();
   }

  ngOnInit(): void {
    this.ulogged = this.loginService.getUserLogged();
    this.obtenerProyectos();
  }

  public divAgregar() {
    if ($('#agregarProy').is(":hidden")) {
      $('#agregarProy').css('display', 'block');

    } else {
      $('#agregarProy').css('display', 'none');
    }
  }

  private obtenerProyectos() {
    this.proyectoServicio.getListaProyectos().subscribe(dato => {
      this.proyectos = dato;

    })
  }

  guardarProyecto() {
    const Proyecto: any = {
      nombre: this.form.get('nombre')?.value,
      url: this.form.get('url')?.value,
      urlImagen: this.form.get('urlImagen')?.value,
      descripcion: this.form.get('descripcion')?.value,
      fechaRealizacion: this.form.get('fechaRealizacion')?.value,
    }

    if (this.id_proyecto == undefined) {
      // Agregamos un nuevo proyecto
      this.proyectoServicio.saveProyecto(Proyecto).subscribe(data => {
        this.toastr.success('El proyecto fue registrada con exito!', 'Proyecto Registrada');
        this.obtenerProyectos();
        this.form.reset();
      }, error => {
        this.toastr.error('Opss.. ocurrio un error', 'Error')
        console.log(error);
      })
    } else {

      Proyecto.id_proyecto = this.id_proyecto;
      // Editamos proyecto
      this.proyectoServicio.updateProyecto(this.id_proyecto, Proyecto).subscribe(data => {
        this.form.reset();
        this.accion = 'Agregar';
        this.id_proyecto = undefined;
        this.toastr.info('El proyecto fue actualizada con exito!', 'Proyecto Actualizada');
        this.obtenerProyectos();
        window.location.reload();  
      }, error => {
        console.log(error);
      })

    }
  }

  eliminarProyecto(id_proyecto: number|any) {
    this.proyectoServicio.deleteProyecto(id_proyecto).subscribe(data => {
      this.toastr.error('El proyecto fue eliminada con exito!', 'Proyecto eliminada');
      this.obtenerProyectos();
    }, error => {
      console.log(error);
    })

  }

  editarProyecto(Proyecto: any) {
    this.accion = 'Editar';
    this.divAgregar();
    this.id_proyecto = Proyecto.id_proyecto;

    this.form.patchValue({
      nombre:Proyecto.nombre,
      url: Proyecto.url,
      urlImagen: Proyecto.urlImagen,
      descripcion: Proyecto.descripcion,
      fechaRealizacion: Proyecto.fechaRealizacion
    })
  }

}
