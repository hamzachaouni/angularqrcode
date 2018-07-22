import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imagei:any = "../assets/timage.jpg";
  gostart:any = "../assets/gostart.jpg";
  qrcodelogo:any = "../assets/qrcodelogo.jpg";
  qrcodecolor:any = "../assets/qrcodecolor.jpg";
  comqrcode:any = "../assets/comqrcode.jpg";
  watchvide:any = "../assets/watchvide.png";
  watchvidee:any = "../assets/watchvidee.png";



  icone_23:any = "../assets/23.png";
  chita:any = "../assets/chita.png";
  sahm:any = "../assets/sahm.png";
  tele:any = "../assets/tele.png";
  users:any = "../assets/users.png";
  dynamic:any = "../assets/dynamic.png";

  constructor() { }

  ngOnInit() {
  }

  navbar_top_active = "home";

  bar_active = "";
  image = "https://www.planwallpaper.com/static/images/95173766a548557b034587f5b0b8bb63--wallpaper-iphone-winter-pinapple-wallpap_tgcuPDN.jpg"


}
