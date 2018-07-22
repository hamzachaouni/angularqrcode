import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { JarwisService } from '../../../services/jarwis.service';
import { TokenService } from '../../../services/token.service';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:any = "../assets/login.jpg";
  
  public error = null;

  public form = {
    email: null,
    password: null
  };

  constructor(
    private flashMessage: FlashMessagesService,
    private route: Router,
    private http: HttpClient,
    private jarwis: JarwisService,
    private token: TokenService,
    private auth: AuthService
  ) { }

  ngOnInit() {

  }
  
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
