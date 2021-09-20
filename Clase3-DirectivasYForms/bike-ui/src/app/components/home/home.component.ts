import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

      username: new FormControl('@username', [
        // validamos una regex para un username que comience con un @ seguido de max 15 chars
        Validators.pattern('@[A-Za-z0-9_]{1,15}'),
        Validators.required,
      ]),
      email: new FormControl('mail@example.com', [
        Validators.email,
        Validators.required,
      ]),

      // validaremos el telefono con un regex
      // el formato valido: +54 0223 12349876
      phone: new FormControl('+54 1115 46372817', [
        Validators.required,
        Validators.pattern('\\+54\\s[0-9]{2,4}\\s[0-9]{8}'),
      ]),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', [
        Validators.required,
        Validators.min(111111),
        Validators.max(999999),
      ]),
      purchasePrice: new FormControl('', [
        Validators.required,
        Validators.min(1000),
        Validators.max(100000),
      ]),
      purchaseDate: new FormControl('', [
        Validators.pattern(
          '(0[1-9]|1[0-2])/(0[1-9]|[1-2][0-9]|3[0-1])/[0-9]{4}'
        ),
        Validators.required,
      ]),
      contact: new FormControl('seleccione', Validators.required),
    });
  }

  ngOnInit(): void {}

  // un getter para que nos sea mas comodo acceder a cada uno de los templates desde el template (home.component.html)
  get controles() {
    return this.bikeForm.controls;
  }

  // func para mostrar errores de validacion
  public getError(controlName: string): string {
    let error = '';
    const control = this.bikeForm.get(controlName);
    if (control?.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }

  // esta funcion sera invocada cuando se intente enviar el form al backend
  submitRegistration() {
    console.dir(this.bikeForm);
    if (this.bikeForm.valid) {
      this.validMessage = 'Su formulario se envio con exito al backend';
      this.bikeForm.reset();
    } else {
      this.validMessage = 'Su formulario esta mal';
    }
  }
}
