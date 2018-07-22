import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whyqrcodes',
  templateUrl: './whyqrcodes.component.html',
  styleUrls: ['./whyqrcodes.component.css']
})
export class WhyqrcodesComponent implements OnInit {
  
  watchvide:any = "../assets/watchvide.png";
  watchvidee:any = "../assets/watchvidee.png";
  shareyoutube:any = "../assets/shareyoutube.png";
  sharetext:any = "../assets/sharetext.png";
  sharemaps:any = "../assets/sharemaps.png";
  sharemedia:any = "../assets/sharemedia.png";
  sharefb:any = "../assets/sharefb.png";
  sharetw:any = "../assets/sharetw.png";
  sharevcard:any = "../assets/sharevcard.png";
  sharesvcard:any = "../assets/sharesvcard.png";
  sharepaypal:any = "../assets/sharepaypal.png";
  gostart:any = "../assets/gostart.jpg";
  qrcodelogo:any = "../assets/qrcodelogo.jpg";
  qrcodecolor:any = "../assets/qrcodecolor.jpg";
  comqrcode:any = "../assets/comqrcode.jpg";

  drive:any = "../assets/drivetraffic.png";

  constructor() { }

  ngOnInit() {
  }

}
