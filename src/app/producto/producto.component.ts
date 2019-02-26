import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductosService } from '../servicios/productos.service'

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  id:any;
  producto:any;
  constructor(private route:ActivatedRoute,
    private productosService:ProductosService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.producto = this.productosService.getById(this.id);
    console.log(this.producto);
   }

  ngOnInit() {
  }

}
