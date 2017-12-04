import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  active = false;
  @Input('title') title: string;

  onClick() {
    this.active = !this.active;
  }
}
