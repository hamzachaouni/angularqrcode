import { FlashMessagesService } from 'angular2-flash-messages';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn: boolean;
  
  
  userloggeIn: string;
  constructor(
    private flashMessage: FlashMessagesService,
    private route: Router,
    private token: TokenService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.token.remove();
    this.auth.changeAuthStatus(false);
    this.route.navigate(['/login']);
  }

  

  

}
