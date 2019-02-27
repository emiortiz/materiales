import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor( private http:HttpClient) { }

  sendEmail(datos){

    this.http.post('/formulario', datos).subscribe(() =>{
      data => console.log(data);
      err => console.log(err);
    })
  }
}
