import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit {
  lugares: any[] = [];
  ngOnInit(): void {
    this.getOrigenes()

    this.formulario = new FormGroup({
      fechaPartida: new FormControl('', Validators.required), // Campo fecha de partida
      fechaRegreso: new FormControl('', Validators.required), // Campo fecha de regreso
      descripcion: new FormControl('', Validators.required), // Campo descripción
      cupo: new FormControl('', Validators.required), // Campo cupo
      idEstado: new FormControl('', Validators.required), // Campo estado
      origen: new FormControl('', Validators.required), // Campo origen
      destino: new FormControl('', Validators.required) // Campo destino
    });
    
  }
  formulario:any;

  constructor(  private servicio:ServiciosService) { }


  guardarLugar(){

      const viajeData = this.formulario.value;
  
      // Llama al servicio para guardar el viaje
      this.servicio.postViaje(viajeData).subscribe((data: any) => {
        console.log(data);
        // Realiza cualquier acción adicional después de guardar el viaje
      });
    

  }


  getOrigenes(){
    this.servicio.getLugares().subscribe((data: any) => {
      this.lugares = data;
    console.log(this.lugares);
    }
    );

  }

}
