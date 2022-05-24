import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { Trabajo } from 'src/app/model/trabajo';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TrabajoService } from 'src/app/servicios/trabajo.service';
import { ToastrService } from 'ngx-toastr';
import { DOCUMENT } from '@angular/common';
import * as $ from 'jquery'
import { LoginService } from 'src/app/servicios/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educaciones: Educacion[];
  trabajos: Trabajo[];
  accionTrab = 'Agregar';
  accionEdu = 'Agregar';
  form: FormGroup;
  form_trab: FormGroup;
  id_educacion: number | undefined;
  id_trabajo: number | undefined;
  route: any;
  ulogged: string = "";

  constructor(public loginService: LoginService, private router: Router, private educacionServicio: EducacionService, private trabajoServicio: TrabajoService, private fb: FormBuilder, private toastr: ToastrService) {
    this.form = this.fb.group({
      instituto: ['', Validators.required],
      ubicacion: ['', Validators.required],
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaInicio: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      fechaFin: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
    });

    this.form_trab = this.fb.group({
      nombreTrabajo: ['', Validators.required],
      ubicacionTrabajo: ['', Validators.required],
      puesto: ['', Validators.required],
      fechaInicioTrabajo: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      fechaFinTrabajo: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
    })
  }

  ngOnInit(): void {
    this.ulogged = this.loginService.getUserLogged();
    this.obtenerEducaciones();
    this.obtenerTrabajos();
  }

  public divAgregar() {
    if ($('#agregarTrab').is(":hidden")) {
      $('#agregarTrab').css('display', 'block');
      $('#agregarEdu').css('display', 'block');
    } else {
      $('#agregarTrab').css('display', 'none');
      $('#agregarEdu').css('display', 'none');
    }
  }

  private obtenerEducaciones() {
    this.educacionServicio.getListaEducacion().subscribe(dato => {
      this.educaciones = dato;
    })
  }

  private obtenerTrabajos() {
    this.trabajoServicio.getListaTrabajos().subscribe(dato => {
      this.trabajos = dato;
    })
  }

  guardarEducacion() {
    const Educacion: any = {
      instituto: this.form.get('instituto')?.value,
      titulo: this.form.get('titulo')?.value,
      ubicacion: this.form.get('ubicacion')?.value,
      descripcion: this.form.get('descripcion')?.value,
      fechaFin: this.form.get('fechaFin')?.value,
      fechaInicio: this.form.get('fechaInicio')?.value,
    }

    if (this.id_educacion == undefined) {
      // Agregamos una nueva Educacion
      this.educacionServicio.saveEducacion(Educacion).subscribe(data => {
        this.toastr.success('La Educacion fue registrada con exito!', 'Educacion Registrada');
        this.obtenerEducaciones();
        this.form.reset();
        window.location.reload();
      }, error => {
        this.toastr.error('Opss.. ocurrio un error', 'Error')
        console.log(error);
      })
    } else {

      Educacion.id_educacion = this.id_educacion;
      // Editamos Educacion
      this.educacionServicio.updateEducacion(this.id_educacion, Educacion).subscribe(data => {
        this.form.reset();
        this.accionEdu = 'Agregar';
        this.id_educacion = undefined;
        this.toastr.info('La Educacion fue actualizada con exito!', 'Educacion Actualizada');
        this.obtenerEducaciones();
        window.location.reload();
      }, error => {
        console.log(error);
      })

    }
  }

  eliminarEducacion(id_educacion: number | any) {
    this.educacionServicio.deleteEducacion(id_educacion).subscribe(data => {
      this.toastr.error('La Educacion fue eliminada con exito!', 'Educacion eliminada');
      this.obtenerEducaciones();
    }, error => {
      console.log(error);
    })

  }

  editarEducacion(Educacion: any) {
    this.accionEdu = 'Editar';
    this.divAgregar();
    this.id_educacion = Educacion.id_educacion;

    this.form.patchValue({
      instituto: Educacion.instituto,
      titulo: Educacion.titulo,
      ubicacion: Educacion.ubicacion,
      descripcion: Educacion.descripcion,
      fechaFin: Educacion.fechaFin,
      fechaInicio: Educacion.fechaInicio

    })
  }

  guardarTrabajo() {
    const Trabajo: any = {
      nombre: this.form_trab.get('nombreTrabajo')?.value,
      ubicacion: this.form_trab.get('ubicacionTrabajo')?.value,
      puesto: this.form_trab.get('puesto')?.value,
      fechaFin: this.form_trab.get('fechaFinTrabajo')?.value,
      fechaInicio: this.form_trab.get('fechaInicioTrabajo')?.value,
    }

    if (this.id_trabajo == undefined) {
      // Agregamos un nuevo trabjo
      this.trabajoServicio.saveTrabajo(Trabajo).subscribe(data => {
        this.toastr.success('El trabajo fue registrada con exito!', 'Trabajo Registrada');
        this.obtenerTrabajos();
        this.form_trab.reset();
        window.location.reload();
      }, error => {
        this.toastr.error('Opss.. ocurrio un error', 'Error')
        console.log(error);
      })
    } else {
      Trabajo.id_trabajo = this.id_trabajo;
      // Editamos trabajo
      this.trabajoServicio.updateTrabajo(this.id_trabajo, Trabajo).subscribe(data => {
        this.form_trab.reset();
        this.accionTrab = 'Agregar';
        this.id_trabajo = undefined;
        this.toastr.info('El trabajo fue actualizada con exito!', 'Trabajo Actualizada');
        this.obtenerTrabajos();
        window.location.reload();
      }, error => {
        console.log(error);
      })

    }
  }

  eliminarTrabajo(id_trabajo: number | any) {
    this.trabajoServicio.deleteTrabajo(id_trabajo).subscribe(data => {
      this.toastr.error('El trabajo fue eliminada con exito!', 'Trabajo eliminada');
      this.obtenerTrabajos();
    }, error => {
      console.log(error);
    })

  }

  editarTrabajo(Trabajo: any) {
    this.accionTrab = 'Editar';
    this.divAgregar();
    this.id_trabajo = Trabajo.id_trabajo;

    this.form_trab.patchValue({
      nombreTrabajo: Trabajo.nombre,
      ubicacionTrabajo: Trabajo.ubicacion,
      puesto: Trabajo.puesto,
      fechaFinTrabajo: Trabajo.fechaFin,
      fechaInicioTrabajo: Trabajo.fechaInicio
    })
  }

}



