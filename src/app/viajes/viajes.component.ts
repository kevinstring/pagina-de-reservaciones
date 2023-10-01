import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiciosService } from '../servicios.service';
declare var window: any;

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit {
  lugares: any[] = [];
  estados;
  formModal:any
  viajes: any[] = [];
  openModal(){

    this.formModal.show();  }
  closeModal(){

    this.formModal.hide();  }

  ngOnInit(): void {
    this.formModal= new window.bootstrap.Modal(document.getElementById('modalViaje'), {
    })


    this.getOrigenes()
    this.getEstados();
    this.getViajes();
    this.formulario = new FormGroup({
      fechaPartida: new FormControl('', Validators.required), // Campo fecha de partida
      fechaRegreso: new FormControl('', Validators.required), // Campo fecha de regreso
      descripcion: new FormControl('', Validators.required), // Campo descripción
      cupo: new FormControl('', Validators.required), // Campo cupo
      idEstado: new FormControl(0, Validators.required), // Campo estado
      origen: new FormControl(0, Validators.required), // Campo origen
      destino: new FormControl(0, Validators.required) // Campo destino
    });
    
  }
  formulario:any;

  constructor(  private servicio:ServiciosService) { }


getEstados(){
  this.servicio.getEstados().subscribe((data: any) => {
    this.estados = data;
    console.log(this.estados);

  }
  );
}



  guardarLugar(){

      const viajeData = this.formulario.value;
        //convertir viajeData.Origen a number
        viajeData.origen = parseInt(viajeData.origen);
        //convertir viajeData.Destino a number
        viajeData.destino = parseInt(viajeData.destino);
        //convertir viajeData.cupo a number
        viajeData.cupo = parseInt(viajeData.cupo);

      ;

      // Llama al servicio para guardar el viaje
      this.servicio.postViaje(viajeData).subscribe((data: any) => {
        console.log(data);
       this.getViajes()
       this.closeModal() // Realiza cualquier acción adicional después de guardar el viaje
      });
    

  }


  getOrigenes(){
    this.servicio.getLugares().subscribe((data: any) => {
      this.lugares = data;
    console.log(this.lugares);

    }
    );

  }

  getViajes(){
    this.servicio.getViajes().subscribe((data: any) => {
      this.viajes = data;
    console.log(this.viajes);
    }
    );

  }


}
