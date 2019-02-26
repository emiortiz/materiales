import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotos-page',
  templateUrl: './nosotos-page.component.html',
  styleUrls: ['./nosotos-page.component.css']
})
export class NosotosPageComponent implements OnInit {

  constructor() { }

  titulo:string = 'Nosotros';

  ngOnInit() {
  }

}
