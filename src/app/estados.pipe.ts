import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estados'
})
export class EstadosPipe implements PipeTransform {

  transform(value: number, estados:any[]): unknown {
    let e : any;
    for(e of estados){
      if(e.id==value){
        return e.valor;
      }
    }

    return "no hay informacion";
  }

}
