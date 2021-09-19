import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Soy la variable title de app.component.ts';

  datos: Object = {
    Nombre: 'Manuel',
    Apellido: 'Dorante',
    Edad: 25,
    Documento: 95837491,
  };
}
