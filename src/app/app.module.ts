import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule,HttpHeaders} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CalificacionComponent } from './calificacion/calificacion.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ViajesComponent } from './viajes/viajes.component';
import { EstadosPipe } from './estados.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { ViajesPipe } from './viajes.pipe';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    CalificacionComponent,
    BienvenidaComponent,
    LugaresComponent,
    ViajesComponent,
    EstadosPipe,
    MiPerfilComponent,
    ViajesPipe
  ],
  imports: [
    BrowserModule,
    MatPaginatorModule,         
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
