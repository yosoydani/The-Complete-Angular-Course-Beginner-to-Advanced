import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  signIn(credentials) {
    // console.log(credentials);
    this.authService.login(credentials)
      .subscribe(result => {
        if (result){
            const url = this.route.snapshot.queryParamMap.get('returnUrl');
            this.router.navigate([url || '/']);
        }
        // tslint:disable-next-line:curly
        else
          this.invalidLogin = true;
      });
  }
}
