import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

    // el FormGroup representa el conjunto de todos los FormControls como una sola entidad
    this.bikeForm = new FormGroup({  
      // cada FormControl representa un solo campo del formulario
      // encapsula el valor y el estado (valido, sucio, error) del campo 
      buyerName: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      model: new FormControl(),
      serialNumber: new FormControl(),
      purchasePrice: new FormControl(),
      purchaseDate: new FormControl(),
      contact: new FormControl(),
    });
  }

  ngOnInit(): void {}

  // esta funcion sera invocada cuando se intente enviar el form al backend
  submitRegistration() {}
}
