import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: any[] = []; // Armazena usuários cadastrados

  constructor(private router: Router) {}

  // Simula login, retorna uma Promise
  login(userName: string, password: string): Promise<boolean> {
    return new Promise((resolve) => {
      const user = this.users.find(u => u.userName === userName && u.password === password);
      if (user) {
        localStorage.setItem('authToken', 'some_token'); // Simula o token
        resolve(true); // Login bem-sucedido
      } else {
        resolve(false); // Login falhou
      }
    });
  }

  // Simula o processo de cadastro
  signup(userName: string, password: string, emailId: string): Promise<boolean> {
    return new Promise((resolve) => {
      const userExists = this.users.some(u => u.userName === userName || u.emailId === emailId);
      if (userExists) {
        resolve(false); // Cadastro falhou, usuário já existe
      } else {
        this.users.push({ userName, password, emailId }); // Cadastra o novo usuário
        resolve(true); // Cadastro bem-sucedido
      }
    });
  }

  // Método de logout
  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }
}
