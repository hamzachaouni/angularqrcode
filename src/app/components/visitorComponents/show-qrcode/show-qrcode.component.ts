import { Component, OnInit } from '@angular/core';
import { ShowQrcodeService } from '../../../services/visitorServices/show-qrcode.service';

@Component({
  selector: 'app-show-qrcode',
  templateUrl: './show-qrcode.component.html',
  styleUrls: ['./show-qrcode.component.css']
})
export class ShowQrcodeComponent implements OnInit {

  constructor(private showQrcode: ShowQrcodeService) { }
  sqrcodes: any[] = [];

  ngOnInit() {
    this.get();
  }

  get() {
    this.showQrcode.getAll()
    .subscribe( sqrcodes => this.sqrcodes = sqrcodes.data
    , error => {
      alert('erreur inattendu');
      console.log(error)
    }
  )
  }

}
