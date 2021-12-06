import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '@progress/kendo-angular-notification';
import { User } from '../../services/users-service/user';
import { UsersServiceService } from '../../services/users-service/users-service.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  errorMessage: string = '';
  clienteForm: FormGroup
  dataUserLog: User
  eventUser: any = {
    id: 0,
    username: "",
    password: "",
    name: "",
    mail: ""
  }
  roles: string[] = ['Administrador', 'Usuario'];

  //Recibe el usuario y el servicio que hace la notificación de cambio exitoso.
  constructor(private userSs:UsersServiceService, private notificationService: NotificationService) {
      this.dataUserLog = this.userSs.userLog
   }

  //Carga validaciones del formulario.
  ngOnInit(): void {
    this.clienteForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[^!@"*#$%&\\/()]*$')]),
      username: new FormControl(''),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('[?.!@#$%^&*]\d{2}[a-zA-z]{6,}')])
    });
    this.cargaForm()
  }

  get controles(){
    return this.clienteForm.controls;
  }

  //Grabo los cambios con los elementos del atributo independiente a el servicio que contiene la info original.
  submitModif(){
    if (this.clienteForm.valid) {
      this.dataUserLog.username = this.clienteForm.value.username
      this.dataUserLog.password = this.clienteForm.value.password
      this.dataUserLog.name = this.clienteForm.value.name
      this.dataUserLog.email = this.clienteForm.value.email
      this.errorMessage = ""
      //Muestra notificación exitoso.
      this.show()
      //alert("Datos modificados")
    }else{
      this.errorMessage = "Formulario incorrecto."
    }
  }

  //Contra el div que notifica cambio realizado con éxito.
  public show(): void {
    this.notificationService.show({
        content: 'Cambios realizados con éxito.',
        cssClass: 'button-notification',
        animation: { type: 'slide', duration: 400 },
        position: { horizontal: 'center', vertical: 'bottom' },
        type: { style: 'success', icon: true },
        hideAfter: 2000
    });
  }

  //Cargo los datos del servicio usuario en un atributo independiente.
  cargaForm(){
    this.eventUser.id = this.dataUserLog.id
    this.eventUser.username = this.dataUserLog.username
    this.eventUser.password = this.dataUserLog.password
    this.eventUser.name = this.dataUserLog.name
    this.eventUser.email = this.dataUserLog.email
  }

}
