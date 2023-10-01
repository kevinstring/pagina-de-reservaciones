import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent {
  estado=""
  imageUrl: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;

  usuarios:any = [];
  estados:any = [];
  usuario:any = {};
  constructor(private http:HttpClient,private domSanitizer: DomSanitizer){
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

  getEstado(id:number){
    let estado = this.estados.find((e:any)=>e.idestado == id);
    return estado.nombre;
  }


  guardarUsuario(){
    let validarFormulario:any = document.getElementById("guardarUsuarioForm");
    if(validarFormulario.reportValidity()){
      this.usuario.fechaCreacion = new Date();
      this.usuario.estado = this.estado;
        this.usuario.foto = this.imageUrl;
      console.log(this.usuario)
      this.servicioGuardar().subscribe(
        (u:any)=> this.actualizar(u)
      )
    }
  }

  actualizar(usuario:any){
    this.buscarUsuarios();
    this.usuario = {};
  }
llamarEstado(evento:any){
  this.estado= evento.target.value;
console.log(evento.target.value);}

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
    console.log(u)
    this.servicioEliminarUsuario(u).subscribe(
      (us:any) => this.actualizar(us)
    )
  }

  servicioEliminarUsuario(u:any):Observable<any>{
    
    return this.http.delete("http://localhost:8080/usuario/eliminar/"+u.correo);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.selectedFile = file;
    this.extraerBase64(this.selectedFile).then((imagen: any) => {
      this.imageUrl = imagen.base64;
      console.log(this.imageUrl);
    });
    

  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
  const image = this.domSanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base64: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base64: ''
        });
      };
    } catch (e) {
      return null;
    }
  }
  );
}
