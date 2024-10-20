import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  metrics = [
    { title: 'Frequência Cardíaca', value: '75 BPM', icon: '❤️', bgColor: 'bg-red-200 text-red-800', textColor: 'text-red-600', hoverShadow: 'hover:shadow-red-300' },
    { title: 'Pressão Arterial', value: '120/80 mmHg', icon: '💉', bgColor: 'bg-blue-200 text-blue-800', textColor: 'text-blue-600', hoverShadow: 'hover:shadow-blue-300' },
    { title: 'Qualidade do Sono', value: '8h 15m', icon: '💤', bgColor: 'bg-purple-200 text-purple-800', textColor: 'text-purple-600', hoverShadow: 'hover:shadow-purple-300' },
    { title: 'Níveis de Glicose', value: '95 mg/dL', icon: '🍬', bgColor: 'bg-green-200 text-green-800', textColor: 'text-green-600', hoverShadow: 'hover:shadow-green-300' },
    { title: 'Consumo de Água', value: '2.5 Litros', icon: '💧', bgColor: 'bg-teal-200 text-teal-800', textColor: 'text-teal-600', hoverShadow: 'hover:shadow-teal-300' },
    { title: 'Calorias Queimadas', value: '500 kcal', icon: '🔥', bgColor: 'bg-yellow-200 text-yellow-800', textColor: 'text-yellow-600', hoverShadow: 'hover:shadow-yellow-300' }
  ];
}
  

