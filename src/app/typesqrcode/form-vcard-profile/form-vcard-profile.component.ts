import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-vcard-profile',
  templateUrl: './form-vcard-profile.component.html',
  styleUrls: ['./form-vcard-profile.component.css']
})
export class FormVcardProfileComponent implements OnInit {
  
  vcard:any = "../assets/vcard.jpg";

  constructor() { }

  ngOnInit() {
  }
  image = "https://www.planwallpaper.com/static/images/95173766a548557b034587f5b0b8bb63--wallpaper-iphone-winter-pinapple-wallpap_tgcuPDN.jpg"

}
