import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../servicios/productos.service'

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  // animations: [
  //   trigger('flyInOut', [
  //     state('in', style({transform: 'translateX(0)'})),
  //     transition('void => *', [
  //       style({transform: 'translateX(-100%)'}),
  //       animate(100)
  //     ]),
  //     transition(':enter', [
  //       animate(100, style({transform: 'translateX(100%)'}))
  //     ]),
  //     transition(':leave', [
  //       animate(100, style({transform: 'translateX(100%)'}))
  //     ])
  //   ])
  // ]
})

export class ProductosComponent implements OnInit {

  productosDeA3:any;

  todos = true;
  cortes;
  otros;
  
  constructor(private productosService:ProductosService) { 
    this.productosDeA3 = this.chunk(productosService.getAll(), 3);
  }

  filtro(tipo){
    if(tipo == 'corte,doblado y armado'){
      this.todos = this.otros = false;
      this.cortes = true;
    }else{
      this.todos = this.cortes = false;
      this.otros = true; 
    }
    this.productosDeA3 = this.chunk( this.productosService.getByTipo(tipo), 3 );  
  }

  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  };

  all(){
    this.cortes = this.otros = false;
    this.todos = true;
    this.productosDeA3 = this.chunk(this.productosService.getAll(), 3);
  }
  ngOnInit() {
  }

}
