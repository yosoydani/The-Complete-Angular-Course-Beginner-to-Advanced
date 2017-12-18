import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive-main',
  templateUrl: './archive-main.component.html',
  styleUrls: ['./archive-main.component.css']
})
export class ArchiveMainComponent implements OnInit {

  archives: any;
  constructor() {
    this.archives = [
      {year: 2017, month: '01'},
      {year: 2017, month: '02'},
      {year: 2017, month: '03'}
    ];
   }

  ngOnInit() {
  }

}
