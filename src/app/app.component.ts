import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Necessario, pq ele roteia toada a aplicacao no componente HTML
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Health-Monitor'; // por ser a base, ela carrega o titulo da aplicacao
}
