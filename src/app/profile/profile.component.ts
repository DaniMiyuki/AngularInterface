import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user = {
    name: 'João Silva',
    email: 'joao.silva@example.com',
    idade: 29,
    altura: 1.75,
    peso: 72
  };

  updateUser() {
    console.log('Dados do usuário atualizados:', this.user);
  }

}
