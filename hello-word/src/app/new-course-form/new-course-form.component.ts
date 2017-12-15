import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms/';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  form;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: [],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    }); // formulario
  }

addTopic(topic: HTMLInputElement) {
    console.log(this.form.get('topics'));
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }
  removeTopic(topic: FormControl) {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
  get topics() {
    return this.form.get('topics') as FormArray;
  }
}// class
