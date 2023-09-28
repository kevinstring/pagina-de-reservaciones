import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent {

  usuarios:any = [];
  estados:any = [];
  usuario:any = {};
  constructor(private http:HttpClient){
    this.buscarUsuarios();
    this.buscarEstados();
  }

  buscarUsuarios(){
    this.servicioBuscarUsuarios().subscribe(
      (us:any) => this.usuarios = us
    )
  }

  servicioBuscarUsuarios():Observable<any>{
    return this.http.get("http://localhost:8080/usuario/buscar");
  }

  guardarUsuario(){
    let validarFormulario:any = document.getElementById("guardarUsuarioForm");
    if(validarFormulario.reportValidity()){
      this.usuario.fechaCreacion = new Date();
      this.servicioGuardar().subscribe(
        (u:any)=> this.actualizar(u)
      )
    }
  }

  actualizar(usuario:any){
    this.buscarUsuarios();
    this.usuario = {};
  }

  servicioGuardar(){
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.post<any>
    ("http://localhost:8080/usuario/guardar",this.usuario,httpOptions);
  }

  buscarEstados(){
    this.servicioBuscarEstados().subscribe(
      (us:any) => this.estados = us
    )
  }

  servicioBuscarEstados():Observable<any>{
    return this.http.get("http://localhost:8080/estado/buscar/tabla/usuario/campo/estado");
  }

  modificar(u:any){
    this.usuario = u;
  }

  limpiarFormulario(){
    this.usuario = {};
  }

  eliminar(u:any){
    this.servicioEliminarUsuario(u).subscribe(
      (us:any) => this.actualizar(us)
    )
  }

  servicioEliminarUsuario(u:any):Observable<any>{
    return this.http.delete("http://localhost:8080/usuario/eliminar/"+u.idusuario);
  }

}
