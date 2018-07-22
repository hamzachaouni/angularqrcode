import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JarwisService {

  private url = 'http://localhost:8000/api'

  constructor(private http: HttpClient) { }

  signup(data) {
    return this.http.post(`${this.url}/signup`, data)
  }

  login(data) {
    return this.http.post(`${this.url}/login`, data)
  }

  sendPasswordResetLink(data) {
    return this.http.post(`${this.url}/sendPasswordResetLink`, data)
  }

}
