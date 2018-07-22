import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  imagei:any = "../assets/timage.jpg";
  gostart:any = "../assets/gostart.jpg";
  qrcodelogo:any = "../assets/qrcodelogo.jpg";
  qrcodecolor:any = "../assets/qrcodecolor.jpg";
  comqrcode:any = "../assets/comqrcode.jpg";

  env:any = "../assets/env.png";

  image = "https://www.planwallpaper.com/static/images/95173766a548557b034587f5b0b8bb63--wallpaper-iphone-winter-pinapple-wallpap_tgcuPDN.jpg"


  constructor() { }

  ngOnInit() {
  }

}
