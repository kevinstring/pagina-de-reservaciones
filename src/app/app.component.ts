import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    let t = localStorage.getItem("usuario");
    if(t){
      this.sesionIniciada=true;
    }else{
      this.sesionIniciada=false;
    }
  }
  cerrarSesion(){
    localStorage.removeItem("usuario");
    location.href=("/")
  }
  sesionIniciada:boolean=false;
 

  title = 'my-first-project';
}
