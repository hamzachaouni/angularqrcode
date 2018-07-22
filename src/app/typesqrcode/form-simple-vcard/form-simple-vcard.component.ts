import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-simple-vcard',
  templateUrl: './form-simple-vcard.component.html',
  styleUrls: ['./form-simple-vcard.component.css']
})
export class FormSimpleVcardComponent implements OnInit {
  
  svcard:any = "../assets/svcard.jpg";

  constructor() { }

  ngOnInit() {
  }

}
