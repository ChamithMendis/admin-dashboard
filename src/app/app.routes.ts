import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/home/routes').then((m) => m.routes),
      },
      {
        path: 'user',
        loadChildren: () => import('./pages/user/routes').then((m) => m.routes),
      },
    ],
  },
];
