import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PatientComponent } from './pages/patient/patient.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo:'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'header', component: HeaderComponent},
    { path: 'footer', component: FooterComponent},
    { path: 'home', component: HomeComponent}, 
    { path: 'patient', component: PatientComponent},
    { path: 'settings', component: SettingsComponent}    
];
