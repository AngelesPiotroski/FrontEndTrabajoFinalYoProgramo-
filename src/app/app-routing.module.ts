import { registerLocaleData } from '@angular/common';
import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { parseHTML } from 'jquery';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';
import { LoginComponent } from './components/login/login.component';
import { MiPortfolioComponent } from './components/mi-portfolio/mi-portfolio.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  // {path : 'personas', component:ListaPersonasComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mi-portfolio', component: MiPortfolioComponent },
  { path: '', redirectTo: 'mi-portfolio', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
