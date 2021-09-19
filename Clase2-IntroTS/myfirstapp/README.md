# Myapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## NOTAS

- Componentes

  - El archivo `app.<nombre del componente>.component.ts` define la logica del componente
    `app.mycomponent.component.ts`

    ```typescript
    import { Component, OnInit } from "@angular/core";

    // decorador
    @Component({
      // nombre del tag html de este componente (<app-mycomponent></app-mycomponent>)
      selector: "app-mycomponent",

      // vinculamos la vista con la logica
      templateUrl: "./mycomponent.component.html",

      // vinculamos el style con la logica
      styleUrls: ["./mycomponent.component.css"],
    })
    export class MycomponentComponent implements OnInit {
      constructor() {}

      ngOnInit(): void {}
    }
    ```

- El archivo `src/app/app.module.ts` es el encargado de entender que componentes y dependencias tenemos en nuestra app. Si el componente es creado pero no esta declarado ahi, no podra ser utilizado.

  ```typescript
  @NgModule({
    declarations: [
      // vistas que pertenecen a tu modulo
      AppComponent,
      MycomponentComponent,
    ],
    imports: [
      // modulos importados (otros ngModules cuyas clases exportadas son requeridas por templates de este modulo)
      BrowserModule,
      AppRoutingModule,
    ],

    // servicios que necesita este modulo y que estaran disponibles para toda la app
    providers: [],

    // componente principal (define la vista root)
    bootstrap: [AppComponent],
    // exports: serian los conjuntos de declaraciones que deben ser accesibles desde otros modulos
  })
  export class AppModule {}
  ```

```

```
