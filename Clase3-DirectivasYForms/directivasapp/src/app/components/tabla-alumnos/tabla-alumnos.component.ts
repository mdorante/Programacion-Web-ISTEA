import { Component, OnInit } from '@angular/core';
import { Alumno } from '../entities/alumno';

const ALUMNOS = [
  new Alumno('Jose', 'Martinez', 'Python', '../../assets/images/foto1.jpeg'),
  new Alumno('Martina', 'Perez', 'Angular', '../../assets/images/foto2.jpeg'),
  new Alumno('Robert', 'Fernandez', 'Go', '../../assets/images/foto3.jpeg'),
];

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css'],
})
export class TablaAlumnosComponent implements OnInit {
  alumnos: Alumno[] = ALUMNOS;
  saludar: boolean = true;
  alumnoSeleccionado: Alumno;

  btnOk = 'btn- btn-success';
  btnNo = 'btn btn-danger';

  constructor() {}

  ngOnInit(): void {}

  establecerSaludo() {
    if (this.saludar) {
      this.saludar = false;
    } else {
      this.saludar = true;
    }
  }

  varAlumno(alumno: Alumno) {
    console.log('Seleccionaste el siguiente alumno al hacer click');
    console.dir(alumno);
    this.alumnoSeleccionado = alumno;
  }
}
