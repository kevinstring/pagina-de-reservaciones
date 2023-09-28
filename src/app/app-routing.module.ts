import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { CalificacionComponent } from './calificacion/calificacion.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';

const routes: Routes = [
 {path:"",component:LoginComponent},
 {path:"inicio", component:InicioComponent},
  {path:"inicio/:id", component:InicioComponent},
  {path:"calificacion", component:CalificacionComponent},
  {path:"bienvenida",component:BienvenidaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
