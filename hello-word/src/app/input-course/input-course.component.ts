import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-course',
  templateUrl: './input-course.component.html',
  styleUrls: ['./input-course.component.css']
})
export class InputCourseComponent {
categories = [
  {id: 1, name: 'Development'},
  {id: 2, name: 'Desing'},
  {id: 3, name: 'Art'}
];

submit(f) {
  console.log(f);
}

}
