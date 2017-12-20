import { AuthService } from './auth.service';
import { Injectable, state } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { Router } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router/src/router_state';

@Injectable()
export class AthGuard implements CanActivate {

  canActivate(route, state:RouterStateSnapshot) {
    // tslint:disable-next-line:curly
    if (this.authService.isLoggedIn()) return true;

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url}});
    return false
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

}
