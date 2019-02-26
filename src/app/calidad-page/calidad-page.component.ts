import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calidad-page',
  templateUrl: './calidad-page.component.html',
  styleUrls: ['./calidad-page.component.css']
})
export class CalidadPageComponent implements OnInit {

  constructor() { }

  titulo:string = 'Calidad y Garantía';

  ngOnInit() {
  }

}
