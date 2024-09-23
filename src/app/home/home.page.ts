import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { heart, home, pin, documentTextOutline, personCircleOutline, idCardOutline } from 'ionicons/icons';

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

  // Inicializa selectTabs
  selectTabs: string = 'home'; // Asegúrate de que este valor sea el que quieres

  constructor(private router: Router) {
    addIcons({ heart, home, pin, documentTextOutline, personCircleOutline, idCardOutline });
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    console.log('Email:', this.userForm.email);
    console.log('Password:', this.userForm.password);
    
    this.router.navigate(['/vista2']);
  }
}
