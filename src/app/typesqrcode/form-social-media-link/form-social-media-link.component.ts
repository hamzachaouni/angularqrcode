import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-social-media-link',
  templateUrl: './form-social-media-link.component.html',
  styleUrls: ['./form-social-media-link.component.css']
})
export class FormSocialMediaLinkComponent implements OnInit {

  sm:any = "../assets/sml.jpg";

  constructor() { }

  ngOnInit() {
  }
  image = "https://www.planwallpaper.com/static/images/95173766a548557b034587f5b0b8bb63--wallpaper-iphone-winter-pinapple-wallpap_tgcuPDN.jpg"
  
  socialize: boolean = true;
  facebook: boolean = true;
  youtube: boolean = true;
  twitter: boolean = true;
  google: boolean = true;
  linkein: boolean = true;
  pinterest: boolean = true;
  instagram: boolean = true;
  website: boolean = true;
}
