"use strict";
exports.__esModule = true;
var Persona_1 = require("./Persona");
// Instanciar un objeto de la clase Persona
var persona = new Persona_1.Persona("Manuel", "Dorante", 25, 100);
// llamar al metodo caminar()
persona.caminar();
// Instanciar un objeto de la interfaz MortyObject
var myJson = {
    id: 20,
    name: "Earth (Replacement Dimension)",
    type: "Planet",
    dimension: "Replacement Dimension"
};
// modificar propiedades de myJson
myJson.id = 48;
myJson.dimension = "Fourth Dimension";
var complexJson = {
    info: {
        count: 671,
        pages: 34,
        next: "https://rickandmortyapi.com/api/character/?page=2",
        prev: null
    },
    results: [
        {
            id: 1,
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            type: "",
            gender: "Male",
            origin: {
                name: "Earth",
                url: "https://rickandmortyapi.com/api/location/1"
            },
            location: {
                name: "Earth",
                url: "https://rickandmortyapi.com/api/location/20"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/1",
                "https://rickandmortyapi.com/api/episode/2",
                // ...
            ],
            url: "https://rickandmortyapi.com/api/character/1",
            created: "2017-11-04T18:48:46.250Z"
        },
        // ...
    ]
};
// ---------------------------------------------------------------------------------------------------------------------------------
console.log("Hola Mundo ISTEA");
// var  -> para variables globales
var foo1 = 123;
if (true) {
    var foo1 = 456;
}
console.log(foo1); // 456
// let -> para variables locales
if (true) {
    var foo = 123;
    if (true) {
        var foo_1 = 456;
    }
    console.log(foo); // 123
}
// const -> constantes (tambien son locales)
var bar = 123;
// bar = 456 no se puede cambiar el valor de una constante
if (true) {
    console.log(bar); // 123
}
// admiten objetos literales
var bar2 = { myKey: "value" };
// bar = {myKey: "value2"} no se puede cambiar el objeto literal
// si se puede modificar una propiedad del objeto literal
bar2.myKey = "newValue";
//  TIPOS DE DATOS
// Boolean
var isDone = false;
console.log(isDone);
// Numbers -> todo tipo de dato numerico
var decimal = 6;
var hex = 0xf00d;
var bin = 10;
var octal = 508;
// String
var fullName = "Manuel Dorante";
var age = 26;
var sentence = "My name is " + fullName + ", and I'll be " + age + " years old next year";
// Any -> puede contener cualquier tipo de dato
var anyVar = "hi";
anyVar = 4;
anyVar = true;
// Arrays
var list = [1, 2, 3];
var list2 = [1, 2, 3];
