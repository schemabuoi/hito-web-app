import { routingConstants } from './../constants';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthState } from '../state-management/auth.state';
import { Select, Store } from '@ngxs/store';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  @Select(AuthState.loggedInUser)
  loggedInUser$: Observable<User>;

  constructor(private router: Router) {}

  canActivate() {
    return this.loggedInUser$
    .pipe(
      map(loggedInUser => {
        console.log("TUD");
        if (loggedInUser === undefined) {
          this.router.navigate(['/' + routingConstants.login]);
          return false;
        }
        console.log("TUO");
        return true;
    }));
  }
}
