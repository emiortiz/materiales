import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {
  anio:any;
  constructor() { 
    let fecha = new Date();
    this.anio = fecha.getFullYear();

  }

  ngOnInit() {
  }

}
