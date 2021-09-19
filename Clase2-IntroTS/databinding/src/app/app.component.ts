import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'databinding';

  persona: any = {
    Nombre: 'Lionel',
    Apellido: 'Messi',
    Edad: 34,
    Documento: 1234567890,
  };

  eventoBoton() {
    console.log(
      'Presionaste el boton y disparaste una funcion del app.component.ts'
    );
    console.dir(this.persona);
  }
}
