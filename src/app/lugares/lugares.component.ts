import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiciosService } from '../servicios.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MatTableDataSource } from '@angular/material/table';

declare var window: any;
@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit{
  lugares: any[] = [];
  formulario: FormGroup;
  imageUrl: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;
  formModal:any


  datos: any[] = []; // Debes definir el tipo de datos adecuado

  dataSource = new MatTableDataSource<any>(this.datos);


  ngOnInit(): void {
    this.getLugares();
    this.formModal= new window.bootstrap.Modal(document.getElementById('modalLugares'), {
    })
  }

  constructor(private servicio: ServiciosService,private domSanitizer: DomSanitizer) {
         this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      imagen: new FormControl('', Validators.required)
    });
  }

  openModal(){

    this.formModal.show();  }
  closeModal(){
      
      this.formModal.hide();  }
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


    

  guardarLugar() {
  
    const form =this.formulario.value
    form.imagen = this.imageUrl;
    console.log(form);
 

    this.servicio.postLugares(form).subscribe((data: any) => {
      console.log(data);
      // Realizar cualquier acción adicional después de guardar
    });
  }
  getLugares() {
    this.servicio.getLugares().subscribe((data: any) => {
      this.lugares = data;
      this.dataSource.data = this.lugares; // Actualiza la fuente de datos de la tabla
    });
  }

eliminarLugar(id){
  this.servicio.deleteLugar(id.idLugar).subscribe((data: any) => {
    console.log(data);
    this.getLugares();
    // Realizar cualquier acción adicional después de guardar
  }
  );

}

editarLugar(id){
  

}

}





