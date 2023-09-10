import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  saludo:string=""
  mostrarMensaje: boolean = true;
  usuarios:any=[]
  anuncio:any=[]
 imagen="";
 imagenf=""
  constructor(private http:HttpClient){

  }
ngOnInit(): void {
  this.buscarUsuario()
}
  saludar(){
    this.saludo="Hola mundo"
    console.log("Hola desde consola")
  }
buscarUsuario(){
  this.servicioBuscarUsuario().subscribe(a=>{this.usuarios=a;  console.log(this.usuarios)
  })
}

ingresarAnuncio(){

}
  servicioBuscarUsuario():Observable <any>{
    return this.http.get("http://localhost:8080/usuario/buscar")
  }
}
