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
  
  postViaje(viaje: any) { 
    return this.http.post(this.url + '/viaje/guardar', viaje);
  }
}
