import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnologia-page',
  templateUrl: './tecnologia-page.component.html',
  styleUrls: ['./tecnologia-page.component.css']
})
export class TecnologiaPageComponent implements OnInit {

  constructor() { }

  titulo:string = 'Tecnología';
  
  ngOnInit() {
  }

}
