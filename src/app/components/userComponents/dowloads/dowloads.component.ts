import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';
import { JarwisService } from '../../../services/jarwis.service';
import { TokenService } from '../../../services/token.service';



@Component({
  selector: 'app-dowloads',
  templateUrl: './dowloads.component.html',
  styleUrls: ['./dowloads.component.css']
})
export class DowloadsComponent implements OnInit {

  public loggedIn: boolean;
  public error = null;

  public form = {
    email: null,
    password: null
  };
 
  
  constructor(
    private flashMessage: FlashMessagesService,
    private route: Router,
    private auth: AuthService,
    private http: HttpClient,
    private jarwis: JarwisService,
    private token: TokenService,
  ) { }

 ngOnInit() {
  this.auth.authStatus.subscribe(value => this.loggedIn = value);
  }
  
  nologin: boolean = false;
  static: boolean = false;
  image = "https://www.planwallpaper.com/static/images/95173766a548557b034587f5b0b8bb63--wallpaper-iphone-winter-pinapple-wallpap_tgcuPDN.jpg"

  onSubmit() {
    this.jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.route.navigate(['/home']);
  }

  handleError(error) {
    this.error = error.error.error;
  }

  
}
