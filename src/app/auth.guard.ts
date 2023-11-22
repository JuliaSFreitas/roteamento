import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export const authGuard : CanActivateFn = 
(route : ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  private auth: AuthService,
  private router: Router;

  if(!this.auth.estaAutenticado()){
    this.router.navigate(["login"]);
    return false;
  }
  
  return true;
};
