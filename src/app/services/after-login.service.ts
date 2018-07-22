import { TokenService } from './token.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AfterLoginService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | 
  Observable<boolean> | Promise<boolean> {
    return this.token.loggedIn();
  }
  constructor(
    private token: TokenService
  ) { }

}
