import { Routes } from '@angular/router';
import { numericIdGuard } from '../../guards/numeric-id.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./general-layout/general-layout.component').then((c) => c.GeneralLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('../pages/main-todo-page/main-todo-page.component').then((c) => c.MainTodoPageComponent),
      },
      {
        path: ':id',
        canActivate: [numericIdGuard],
        loadComponent: () => import('../pages/detail-todo-page/detail-todo-page.component').then((c) => c.DetailTodoPageComponent),
      },
    ],
  },
];
