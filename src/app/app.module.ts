import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { MiPortfolioComponent } from './components/mi-portfolio/mi-portfolio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MeComponent } from './components/me/me.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { TecnologiaComponent } from './components/tecnologia/tecnologia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ContactameComponent } from './components/contactame/contactame.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonasComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ContactoComponent,
    MiPortfolioComponent,
    NavbarComponent,
    MeComponent,
    AboutMeComponent,
    TecnologiaComponent,
    EducacionComponent,
    ProyectoComponent,
    ContactameComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
