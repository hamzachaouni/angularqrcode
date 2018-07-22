import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Http } from '@angular/http';

@Injectable()
export class SettingQrcodeService extends DataService{

  constructor(http: Http) { 
    super('http://localhost:8000/api/setting-qrcode', http)
   }

}
