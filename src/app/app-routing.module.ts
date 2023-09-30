import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { CalificacionComponent } from './calificacion/calificacion.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ViajesComponent } from './viajes/viajes.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';

const routes: Routes = [
 {path:"",component:LoginComponent},
 {path:"inicio", component:InicioComponent},
  {path:"inicio/:id", component:InicioComponent},
  {path:"calificacion", component:CalificacionComponent},
  {path:"bienvenida",component:BienvenidaComponent},
  {path:"lugares",component:LugaresComponent},
  {path:"viajes",component:ViajesComponent},
  {path:"miPerfil",component:MiPerfilComponent},	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
