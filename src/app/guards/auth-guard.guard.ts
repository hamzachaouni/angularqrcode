import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthGuardGuard implements CanActivate {

  constructor(
    private qrcodeauth: AngularFireAuth,
    private route: Router
  ) {}
  canActivate(): Observable<boolean> {
    return this.qrcodeauth.authState.map(auth => {
      if(!auth) {
        this.route.navigate(['/login']);
        return false;
      }
      else {
        return true;
      }
    })
    
  }
}
