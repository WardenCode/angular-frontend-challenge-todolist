import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

export const numericIdGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject<Router>(Router);
  const id: string = route.params['id'];

  if (isNaN(Number(id)) && !Number.isInteger(Number(id))) {
    router.navigateByUrl('404');
    return false;
  }

  return true;
};
