import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PatientComponent } from './pages/patient/patient.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

export const routes: Routes = [
    { path: 'header', component: HeaderComponent},
    { path: 'footer', component: FooterComponent},
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'patient', component: PatientComponent},
    { path: 'schedule', component: ScheduleComponent},
    { path: 'settings', component: SettingsComponent},
    { path: 'contact', component: ContactComponent},
];
