import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  IsLoginView: boolean = true;
  
  loginObj: any = {
    userName: '',
    emailId: '',
    password:''
  }

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const { userName, password } = this.loginObj;
    if (this.authService.login(userName, password)) {
      // Redireciona para o dashboard após login bem-sucedido
      this.router.navigate(['/dashboard']);
    } else {
      // Exibe mensagem de erro (implemente conforme necessário)
      alert('Credenciais inválidas!');
    }
  }

  signup() {
    const signedUp = this.authService.signup(this.loginObj.userName, this.loginObj.password, this.loginObj.emailId);
    if (signedUp) {
      alert('Cadastro realizado com sucesso! Agora você pode fazer login.');
      this.IsLoginView = true; // Volta para a tela de login
    } else {
      alert('Usuário já existe');
    }
  }


  
}