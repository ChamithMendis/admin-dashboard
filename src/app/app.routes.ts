import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/home/routes').then((m) => m.routes),
      },
    ],
  },
];
