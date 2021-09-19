import { Component, OnInit } from '@angular/core';
import { Alumno } from '../entities/alumno';

const ALUMNOS = [
  new Alumno('Jose', 'Martinez', 'Python', '../../assets/images/foto.jpg'),
  new Alumno('Martina', 'Perez', 'Angular', '../../assets/images/foto.jpg'),
  new Alumno('Robert', 'Fernandez', 'Go', '../../assets/images/foto.jpg'),
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

  constructor() {}

  ngOnInit(): void {}
}
