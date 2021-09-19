import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // creamos un array con los modelos de bicicletas que se podran seleccionar
  models: string[] = [
    'bike mistica 2021',
    'bike bizarra',
    'bike covid',
    'bike spidey',
  ];

  // este mensaje lo utilizaremos para mostrar al user si su formulario se pudo enviar al backend o no
  validMessage: string = '';

  bikeForm: FormGroup;

  constructor() {
    this.bikeForm = new FormGroup({});
  }

  ngOnInit(): void {}

  // esta funcion sera invocada cuando se intente enviar el form al backend
  submitRegistration() {}
}
