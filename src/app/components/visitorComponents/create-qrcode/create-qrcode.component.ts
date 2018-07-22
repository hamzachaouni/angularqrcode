import { Component, OnInit } from '@angular/core';
import { ShowQrcodeService } from '../../../services/visitorServices/show-qrcode.service';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-create-qrcode',
  templateUrl: './create-qrcode.component.html',
  styleUrls: ['./create-qrcode.component.css']
})
export class CreateQrcodeComponent implements OnInit {
  
  id: number;
  //posts: {} = {};
  posts: any[] = [];

  constructor(
    private showService: ShowQrcodeService,
    private route: ActivatedRoute,
    private http: Http
  ) { 
    this.http.get('http://localhost:8000/api/setting-qrcode/21')
    .subscribe(
      response => {
        //this.posts = response.json().inputs;
        console.log(response.json().data)
      }
    )
   }
  

  ngOnInit() {
    this.recupereId();
  }

  recupereId() {
    this.route.paramMap.subscribe(params => {

      this.id = +params.get('id');
  })}

  

  

  

}
