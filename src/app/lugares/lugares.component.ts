import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit{
  ngOnInit(): void {
    this.getLugares();
  }
  lugares: any[] = [];
  formulario: FormGroup;
  imageUrl: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;

  constructor(private servicio: ServiciosService) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      imagen: new FormControl('', Validators.required)
    });
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const blob: Blob = new Blob([new Uint8Array(reader.result as ArrayBuffer)], { type: file.type });
        this.blobToBase64(blob);
      };
      reader.readAsArrayBuffer(file);
    }
  }
  blobToBase64(blob: Blob) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64String: string | ArrayBuffer | null = e.target?.result;
      if (typeof base64String === 'string') {
        this.imageUrl = base64String; // Asigna la cadena Base64 a tu variable de imagen
      }
    };
    reader.readAsDataURL(blob);
  }
    

  guardarLugar() {
  
    const form =this.formulario.value
 

    this.servicio.postLugares(form).subscribe((data: any) => {
      console.log(data);
      // Realizar cualquier acción adicional después de guardar
    });
  }
  getLugares() {
    this.servicio.getLugares().subscribe((data: any) => {
      this.lugares = data;
    });
  }

eliminarLugar(id){
    console.log(id) 
}

editar(id){
  console.log(id)
}

}





