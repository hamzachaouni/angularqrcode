import { SettingQrcodeService } from './../../../services/adminServices/setting-qrcode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-qrcode',
  templateUrl: './setting-qrcode.component.html',
  styleUrls: ['./setting-qrcode.component.css']
})
export class SettingQrcodeComponent implements OnInit {
  
  form: boolean = false;
  onForm() {
    this.form = !this.form;
  }
  checkbox = [
    {id: 1, label: "Recomended", name: "recomended"},
    {id: 2, label: "Promotion", name: "promotion"},
    {id: 3, label: "Social", name: "social"},
    {id: 4, label: "Product/Service", name: "product"},
    {id: 5, label: "Business", name: "business"},
    {id: 6, label: "Personal", name: "personal"}
  ];
  
  status: boolean = true;
  sqrcodes: any[] = [];
  sqrcode = {
    id: 0,
    title: '',
    description: '',
    shorttitle: '',
    shortdescription: '',
    inputs: '',
    image: '',
    recomended: '',
    promotion: '',
    social: '',
    product: '',
    business: '',
    personal: '',
  }

  constructor(private settingQrcode: SettingQrcodeService) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.settingQrcode.getAll()
    .subscribe( sqrcodes => this.sqrcodes = sqrcodes.data
    , error => {
      alert('erreur inattendu');
      console.log(error)
    }
  )
  }

  create() {
    this.settingQrcode.create(this.sqrcode)
    .subscribe(newPost => { this.sqrcode.id = newPost.id;
      this.sqrcodes.unshift(this.sqrcode);
      this.sqrcode = {
        id: 0,
        title: '',
        description: '',
        shorttitle: '',
        shortdescription: '',
        inputs: '',
        image: '',
        recomended: '',
        promotion: '',
        social: '',
        product: '',
        business: '',
        personal: '',
      }
    })
    this.form = false;
    
  }


  edit(sqrcode) {
    this.status = false;
    this.sqrcode = sqrcode;
    this.form = true;
  }

  update() {
    this.settingQrcode.update(this.sqrcode)
    .subscribe(() => {
      this.sqrcode = {
        id: 0,
        title: '',
        description: '',
        shorttitle: '',
        shortdescription: '',
        inputs: '',
        image: '',
        recomended: '',
        promotion: '',
        social: '',
        product: '',
        business: '',
        personal: '',
      }
      this.status = true;
    }, error => {
      alert('erreur inattendu');
      console.log(error)
    })
    this.form = false;
    
    
  }

  delete(sqrcode) {
    this.settingQrcode.delete(sqrcode)
    .subscribe(() => {
      let index = this.sqrcodes.indexOf(sqrcode);
      this.sqrcodes.splice(index, 1);
    })
    this.form = false;
  }

}
