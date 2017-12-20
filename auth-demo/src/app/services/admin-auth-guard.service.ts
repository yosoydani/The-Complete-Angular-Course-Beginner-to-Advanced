import { CanActivate } from '@angular/router/src/interfaces';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminAuthGuard implements CanActivate {
  canActivate() {
    const user = this.authservice.currentUser;
  // tslint:disable-next-line:curly
  if (user && user.admin) return true

  this.router.navigate(['/no-access'])
  return false;
}

  constructor(
    private router: Router,
    private authservice: AuthService
  ) { }

}
