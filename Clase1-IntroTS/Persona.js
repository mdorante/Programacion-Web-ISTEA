"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad, kilometros) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.kilometros = kilometros;
    }
    Persona.prototype.caminar = function () {
        return "Hola, soy " + this.nombre + " " + this.apellido + ", voy a caminar " + this.kilometros + "km!";
    };
    return Persona;
}());
exports.Persona = Persona;
