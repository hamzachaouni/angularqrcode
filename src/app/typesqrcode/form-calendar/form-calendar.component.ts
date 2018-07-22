import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-calendar',
  templateUrl: './form-calendar.component.html',
  styleUrls: ['./form-calendar.component.css']
})
export class FormCalendarComponent implements OnInit {

  date: string;
    constructor() {
        this.date = new Date().toISOString().slice(0, 16);
    }

  ngOnInit() {
  }

}
