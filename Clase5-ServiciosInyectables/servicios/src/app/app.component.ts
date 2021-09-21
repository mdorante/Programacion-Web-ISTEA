import { Component } from '@angular/core';
import { Productos } from './models/producto';

// importamos el servicio
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'servicios';
  productos: Productos;

  // inyectamos el servicio de productos en el constructor
  constructor(private ps: ProductosService) {
    // utilizamos el servicio inyectado
    console.log('Esto vino desde el servicio inyectado');
    this.productos = ps.productos;
    console.dir(this.productos);
  }
}
