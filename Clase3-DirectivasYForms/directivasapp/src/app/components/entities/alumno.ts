export class Alumno {
  // public nombre: string;
  // public apellido: string;
  // public curso: string;
  // public foto: string;

  // constructor(nombre: string, apellido: string, curso: string, foto: string) {
  //   this.nombre = nombre;
  //   this.apellido = apellido;
  //   this.curso = curso;
  //   this.foto = foto;
  // }

  // tambien se puede hacer de esta manera
  constructor(
    public nombre: string,
    public apellido: string,
    public curso: string,
    public foto: string
  ) {}
}
