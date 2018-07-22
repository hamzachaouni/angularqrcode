import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../../services/jarwis.service';
import { TokenService } from '../../../services/token.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register:any = "../assets/register.jpg";

  public error = [];

  public form = {
    email: null,
    name: null,
    password: null,
    passwordconfirmation: null
  };
  
  constructor(
    private flashMessage: FlashMessagesService,
    private route: Router,
    private jarwis: JarwisService,
    private token: TokenService
  ) { }

  ngOnInit() {
  }
  image = "https://www.planwallpaper.com/static/images/95173766a548557b034587f5b0b8bb63--wallpaper-iphone-winter-pinapple-wallpap_tgcuPDN.jpg"
  
  onSubmit() {
    this.jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.token.handle(data.access_token);
    this.route.navigate(['/home']);
  }

  handleError(error) {
    this.error = error.error.errors;
  }

}
