import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent implements OnInit{
  calificacion:any={}
  verCalificacion:any=[]

ngOnInit(): void {
this.servicioConsultarCalificacion()
}
constructor( private http:HttpClient,){

}


ingresar(){
  console.log(this.calificacion)
this.servicioAgregarCalificacion(this.calificacion).subscribe(a=>console.log(a))

}

servicioConsultarCalificacion(){
  return this.http.get("http://localhost:8080/calificacion/buscar").subscribe(a=>this.verCalificacion=a)

}

servicioAgregarCalificacion(calificacion:any):Observable <any>{
  let httpOptions = {
    headers:new HttpHeaders({
      "Content-Type":"application/json",
    })
  }
  
  return this.http.post
  ("http://localhost:8080/calificacion/guardar",calificacion)
}

}
