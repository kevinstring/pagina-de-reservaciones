import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  postLugares(formulario: any) {
    return this.http.post(this.url + '/lugar/guardar', formulario);
  }

  getLugares() {
    return this.http.get(this.url + '/lugar/buscar');
  }
  deleteLugar(id: any) {
    return this.http.delete(this.url + '/lugar/eliminar/' + id);
  }
  
  postViaje(viaje: any) { 
    return this.http.post(this.url + '/viaje/guardar', viaje);
  }

  getEstados() { 
    //usar backticks
    return this.http.get(this.url + '/estado/buscar/tabla/viaje/campo/estado');


  }
    getViajes() {
    return this.http.get(this.url + '/viaje/buscar');
  }
  deleteViaje(id: any) {
    return this.http.delete(this.url + '/viaje/eliminar/' + id);
  }

  getViaje(id: any) {
    return this.http.get(this.url + '/viaje/buscar/' + id);
  }
  postUsuario(usuario: any) {
    return this.http.post(this.url + '/usuario/guardar', usuario);
  }

  getUsuario() {
    return this.http.get(this.url + '/usuario/buscar');
  }



}
