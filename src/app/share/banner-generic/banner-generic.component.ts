import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-generic',
  templateUrl: './banner-generic.component.html',
  styleUrls: ['./banner-generic.component.css']
})
export class BannerGenericComponent implements OnInit {

  constructor() { }

  @Input() titulo: string ;

  ngOnInit() {
  }

}
