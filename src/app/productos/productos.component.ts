import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../servicios/productos.service'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productosDeA3:any;

  constructor(private productosService:ProductosService) { 
    this.productosDeA3 = this.chunk(productosService.getAll(), 3);
  }

  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  };


  ngOnInit() {
  }

}
