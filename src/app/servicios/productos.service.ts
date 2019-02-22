import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  private products:any = [
    {id:0, nombre:'Pasadores', img:'pasadores.jpg', tipo:'corte,doblado y armado', informacion:''},
    {id:1, nombre:'Pilotes', img:'pilotes.jpg', tipo:'corte,doblado y armado', informacion:''},
    {id:2, nombre:'Servicio de Cortado y Doblado', img:'corta-doblado-armado.jpg', tipo:'corte,doblado y armado', informacion:''},
    {id:3, nombre:'Corte a medida de Viga', img:'vigas.jpg', tipo:'corte,doblado y armado', informacion:''},
    {id:4, nombre:'Corte a medida de Perfileria', img:'perfiles.jpg', tipo:'corte,doblado y armado', informacion:''},
    {id:5, nombre:'Corte a medida de Acero Corrugado', img:'acero-corrugado.jpg', tipo:'corte,doblado y armado', informacion:''},
    {id:6, nombre:'Perfiles y Angulos', img:'angulos.jpg', tipo:'otros', informacion:''},
    {id:7, nombre:'Clavos', img:'clavos-de-acero.jpg', tipo:'otros', informacion:''},
    {id:8, nombre:'Alambre Recocido', img:'Alambre-Recocido.jpg', tipo:'otros', informacion:''},
    {id:9, nombre:'Hierro liso de construccion', img:'hierro.jpg', tipo:'otros', informacion:''},
    {id:10, nombre:'Hierro de construccion Nervurado', img:'hierro-nervurado.jpg', tipo:'otros', informacion:''},
    {id:11, nombre:'Malla Electrosoldada', img:'malla-electrosoldada.jpg', tipo:'otros', informacion:''},
  ]
  
  constructor() { }
  
  getAll(){
    return this.products;
  }

  getById(id){
    return this.products[id];
  }

  getByTipo(tipo){
    let productsTipo = [];
    for( let i = 0; i < this.products.lenght ; i++){
      if( this.products[i].tipo == tipo){
        productsTipo.push( this.products[i] );
      }
    }
    return productsTipo;
  }

}
