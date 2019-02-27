import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../servicios/email.service'
@Component({
  selector: 'app-contactenos-page',
  templateUrl: './contactenos-page.component.html',
  styleUrls: ['./contactenos-page.component.css']
})
export class ContactenosPageComponent implements OnInit {
  form: FormGroup;
  submitted:boolean = false;
  enviado:boolean =false;

  constructor(private formBuilder: FormBuilder,
    private emailService: EmailService) {

    this.form = this.formBuilder.group({
      empresa: ['', Validators.required],
      telefono: '',
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      consulta: ['', Validators.required]

    });
  }

  titulo: string = 'Contactenos';

  get f() { return this.form.controls; }

  onSubmit(value) {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.enviado = true;
    this.emailService.sendEmail(value);
    this.form.reset(); 
    this.submitted = false;
  }
  ngOnInit() {
  }

}
