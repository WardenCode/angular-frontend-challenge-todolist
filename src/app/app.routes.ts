import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/todos',
  },
  {
    path: 'todos',
    loadChildren: () => import('./views/layouts/layout.routes').then((mod) => mod.routes),
  },
  {
    path: '404',
    loadComponent: () => import('./views/pages/not-found-page/not-found-page.component').then((c) => c.NotFoundPageComponent),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '404',
  },
];
