import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 {path:"",component:LoginComponent},
 {path:"inicio", component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
