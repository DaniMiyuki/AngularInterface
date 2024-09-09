import { Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '', redirectTo:'login', pathMatch: 'full'
    },
    { 
        path: 'login', component: LoginComponent
    },

    { 
        path: '', component: LayoutComponent, canActivate:[AuthGuard], // Protege todas as rotas dentro deste layout
        children:[
            {
                path: 'dashboard', 
                component: DashboardComponent
            },
            {
                path: 'profile', 
                component: ProfileComponent
            }
        ]
    },
    { path: '**', redirectTo: '/login' }
      
];
