import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-youtube',
  templateUrl: './form-youtube.component.html',
  styleUrls: ['./form-youtube.component.css']
})
export class FormYoutubeComponent implements OnInit {
  
  sml:any = "../assets/sml.jpg";
  
  constructor() { }

  ngOnInit() {
  }
  image = "https://www.planwallpaper.com/static/images/95173766a548557b034587f5b0b8bb63--wallpaper-iphone-winter-pinapple-wallpap_tgcuPDN.jpg"

}
