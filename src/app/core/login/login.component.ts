import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  IsLoginView: boolean = true; // Altera entre login e signup view
  
  loginObj: any = {
    userName: '',
    emailId: '',
    password:''
  };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const { userName, password } = this.loginObj;
    this.authService.login(userName, password).then(isAuthenticated => {
      
      if (isAuthenticated) {
        // Redireciona para o dashboard após login bem-sucedido
        this.router.navigate(['/dashboard']);
      } else {
        // Exibe mensagem de erro
        alert('Credenciais inválidas!');
      }
    })
  }

  signup() {
    const { userName, password, emailId } = this.loginObj;
    this.authService.signup(userName, password, emailId).then(signedUp => {

      if (signedUp) {
        alert('Cadastro realizado com sucesso! Agora você pode fazer login.');
        this.IsLoginView = true; // Volta para a tela de login
      } else {
        alert('Usuário já existe');
      }
    });
  }
  
}