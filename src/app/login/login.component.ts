import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
usuario:any={};
invalido:string=""
invalidado=false;
ngOnInit(): void {
}
constructor(private http:HttpClient,private route:Router){

}

entrar(){
  let formularioValido:any= document.getElementById("loginForm");
  if(formularioValido.reportValidity){
    this.servicioLogin().subscribe(
      (a)=>{
        this.darBienvenida(a);
      }
      )
  }

  console.log(this.usuario)

}

darBienvenida(usuario:any){
  if(usuario){
      location.href=("/inicio")
  }else{
    this.invalidado=true;
   this.invalido="Correo o password incorrectos"
  }
}
servicioLogin(){
  let httpOptions = {
    headers:new HttpHeaders({
      "Content-Type":"application/json",
    })

  }
  return this.http.post
  ("http://localhost:8080/usuario/login",this.usuario,httpOptions)
}
}
