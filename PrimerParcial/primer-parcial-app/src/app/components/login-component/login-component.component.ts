import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersServiceService } from '../../services/users-service/users-service.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent implements OnInit {
  userList: any[] = [];

  errorMessage: string = '';

  loginForm: FormGroup;

  constructor(private usersService: UsersServiceService, private router: Router) {
    this.userList = usersService.getAllUsers();
    console.log(this.userList)

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required, 
        // Validators.pattern('[?.!@#$%^&*]\d{2}[a-zA-z]{6,}')
      ]),
    });
  }

  ngOnInit(): void {}

  submitLogin() {
    if (this.loginForm.valid) {
      if (
        this.validLogin(
          this.loginForm.value.email,
          this.loginForm.value.password
        )
      ) {
        this.usersService.userLog = this.usersService.getUser(this.loginForm.value.email)
        this.router.navigate(['/home'])
      }
    } else {
      this.errorMessage = 'Los campos username y password son obligatorios';
    }
  }

  private validLogin(email: string, pass: string) {
    let emailFlag: boolean = false
    let passFlag: boolean = false

    this.userList.forEach(item => {

    if (email == item.email) {
      emailFlag = true
    }

    if (pass == item.password) {
      passFlag = true
    }

    if (emailFlag == false){
      this.errorMessage = "Usuario invalido"
    }

    if (passFlag == false){
      this.errorMessage = "Contraseña invalido"
    }

    if (!emailFlag && !passFlag) {
      this.errorMessage = "Usuario y contraseña incorrecta"
    }
    })
    return (emailFlag && passFlag)
  
  }
}
