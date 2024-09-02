import { Component } from '@angular/core';

// Define la interfaz UserForm aquí o impórtala desde otro archivo
interface UserForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Define el modelo de los datos del formulario
  userForm: UserForm = {
    email: '',
    password: ''
  };

  constructor() {}

  // Método para manejar el envío del formulario
  onSubmit() {
    console.log('Email:', this.userForm.email);
    console.log('Password:', this.userForm.password);
  }
}

