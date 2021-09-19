export class Persona {
  // atributos de la clase
  nombre: string;
  apellido: string;
  edad: number;
  kilometros: number;

  constructor(
    nombre: string,
    apellido: string,
    edad: number,
    kilometros: number
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.kilometros = kilometros;
  }

  caminar(): string {
    return `Hola, soy ${this.nombre} ${this.apellido}, voy a caminar ${this.kilometros}km!`;
  }
}

