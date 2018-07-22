import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-paypal',
  templateUrl: './form-paypal.component.html',
  styleUrls: ['./form-paypal.component.css']
})
export class FormPaypalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currency = [
    "USD",
    "AUD",
    "CAD",
    "CHF",
    "EUR",
    "GBP",
    "HKD",
    "JPY",
    "NZD",
    "SGD",
    "TWD",
  ]

}
