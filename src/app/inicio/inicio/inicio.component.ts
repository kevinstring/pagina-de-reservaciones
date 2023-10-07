import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  saludo:string=""
  editarVal=false;
  mostrarMensaje: boolean = true;
  usuarios:any=[]
  anuncio:any={}
  verAnuncio:any=[]
  selectedFile:any
  imageUrl: string | null = null;
 imagen="";
 imagenF=""
  constructor(private http:HttpClient,private ruta:Router,private domSanitizer: DomSanitizer){

  }
ngOnInit(): void {
  this.ingresarAnuncio()
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


saludar(){
    this.saludo="Hola mundo"
    console.log("Hola desde consola")
  }


trackByAnuncio(anuncio: any): number {

  return anuncio.idAnuncio; 
}


ingresarAnuncio(){

return this.http.get("http://localhost:8080/anuncio/buscar").subscribe(a=>this.verAnuncio=a)
}

servicioAgregarAnuncio(anuncio:any){
  this.anuncio.imagen=this.imageUrl
  let httpOptions = {
    headers:new HttpHeaders({
      "Content-Type":"application/json",
    })
  }
  
   this.http.post
  ("http://localhost:8080/anuncio/guardar",anuncio).subscribe( a=>this.ingresarAnuncio());
}

eliminarAnuncio(id:any){
  this.servicioEliminarAnuncio(id).subscribe(a=>this.ingresarAnuncio())
}


editar(id:any){
  this.editarVal=!this.editarVal
  console.log(id)
}


servicioEliminarAnuncio(id:any){
  let httpOptions = {
    headers:new HttpHeaders({
      "Content-Type":"application/json",
    })
  }
  
  return this.http.delete
  (`http://localhost:8080/anuncio/eliminar/${id}`)
}

}



