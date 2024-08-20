import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  }, {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  }, {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth-routing.module').then(m => m.AuthRoutingModule)
  }
];
