import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-wifi',
  templateUrl: './form-wifi.component.html',
  styleUrls: ['./form-wifi.component.css']
})
export class FormWifiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  security = [
    "WPA",
    "WEP",
    "Unencrypted"
  ]

}
