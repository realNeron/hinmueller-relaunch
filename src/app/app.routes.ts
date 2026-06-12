import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ClaimsComponent } from './pages/claims/claims.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LegalComponent } from './pages/legal/legal.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'claims', component: ClaimsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'legal', component: LegalComponent },
  { path: '**', redirectTo: 'home' }
];

