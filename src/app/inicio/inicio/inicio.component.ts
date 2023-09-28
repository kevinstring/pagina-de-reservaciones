import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  constructor(private http:HttpClient,private ruta:Router){

  }
ngOnInit(): void {
  this.ingresarAnuncio()
}
onFileSelected(event: any) {
  this.selectedFile = event.target.files[0] as File;
  console.log(event.target.files[0].name)
  this.imagenF=`asdasdsad`
}


saludar(){
    this.saludo="Hola mundo"
    console.log("Hola desde consola")
  }


trackByAnuncio(anuncio: any): number {

  return anuncio.idAnuncio; 
}


uploadFile() {

  this.servicioAgregarAnuncio(this.anuncio).subscribe(a=>{this.ingresarAnuncio();console.log(a)})
}

ingresarAnuncio(){
return this.http.get("http://localhost:8080/anuncio/buscar").subscribe(a=>this.verAnuncio=a)
}

servicioAgregarAnuncio(anuncio:any):Observable <any>{
  let httpOptions = {
    headers:new HttpHeaders({
      "Content-Type":"application/json",
    })
  }
  
  return this.http.post
  ("http://localhost:8080/anuncio/guardar",anuncio)
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



