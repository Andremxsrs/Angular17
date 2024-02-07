import { Routes } from '@angular/router';
import { PracticaComponent } from './pages/practica/practica.component'; 
import { HomeComponent } from './pages/home/home.component';



export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'practica', component: PracticaComponent }
];
