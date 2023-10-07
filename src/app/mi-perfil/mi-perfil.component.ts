import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent {
  usuario:any={};
constructor(){
  let t = localStorage.getItem("usuario");
  if(t){
    this.usuario=JSON.parse(t);
    console.log(this.usuario)
  }

  



}
}
