import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Crie este serviço
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ButtonModule],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class LoginComponent {
  credentials = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.credentials).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token); // Armazena o token
        this.router.navigate(['/dashboard']); // Redireciona após login
      },
      (error) => {
        // Lida com erros de login
      }
    );
  }
}
