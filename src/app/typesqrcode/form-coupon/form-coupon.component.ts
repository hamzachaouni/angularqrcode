import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-coupon',
  templateUrl: './form-coupon.component.html',
  styleUrls: ['./form-coupon.component.css']
})
export class FormCouponComponent implements OnInit {
  
  coupon:any = "../assets/coupon.jpg";

  constructor() { }

  ngOnInit() {
  }
  image = "https://www.planwallpaper.com/static/images/95173766a548557b034587f5b0b8bb63--wallpaper-iphone-winter-pinapple-wallpap_tgcuPDN.jpg"

}
