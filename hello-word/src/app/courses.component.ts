import { Component } from '@angular/core';
import { CoursesService } from './services/courses.service';
import { AuthorsService } from './services/authors.service';

@Component({
    selector: 'app-courses',
    template: `
    <h2>{{"title: " + title }}</h2>
    <p>[]<- atribute binding <br />
     ()<- event bindings</p> <br />
     [(NgModel)] <- twoways binding. Banana in box
    <img [src]="imageUrl" />
    <ul>
        <li *ngFor= "let course of courses">{{course}}</li>
    </ul>
    <table>
        <tr>
            <td [attr.colspan]="colspan"></td>
        </tr>
    </table>
    <div (click)="onClickDiv()">
        <label>Filter event</label>
        <input (keyup.enter)="onKeyUp($event)" /> <br />

        <label>template variables</label>
        <input #email (keyup.enter)="onEmailKeyUp(email.value)" /> <br />

        <label>template variables</label>
        <input (keyup.enter)="onEmailKeyUp(email.value)" /> <br />

        <label>two way binding</label> <br />
        bad way <input [value]="bEmail" (keyup.enter) = "bEmail=$event.target.value; onTwoWayKeyUp()" /><br />
        good way <input [(ngModel)]= "bEmail" (keyup.enter)="onTwoWayKeyUp()"  /> <br />

        <button class="btn btn-primary" (click)="onSave($event)" [class.active]="isActive" >Save</button>
        <button class="btn btn-warning" [style.backgroundColor]="isActive ? 'orange':'red'" >Reiniciar</button>
    </div>
    <div>
        {{course.title | uppercase}} <br />
        {{course.students | number}} <br />
        {{course.rating | number:'1.2-2'}} <br />
        {{course.price | currency:'EUR':true:'3.2-2'}} <br />
        {{course.releaseDate | date:'shortDate'}} <br />
    </div>
    <p>{{ text | summary:25 }}<p>
    `
})
export class CoursesComponent {
    // tslint:disable-next-line:max-line-length
    text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.tae officiis. Modi fuga totam nemo, odit rerum beatae quibusdam nostrum labore accusamus optio quo minima, ratione nisi perferendis maiores hic illo officia omnis. Porro minus dignissimos error temporibus, tempora consequatur eos minima suscipit repellendus excepturi atque asperiores illum officia quae optio aperiam! Animi, nesciunt cumque. Explicabo reprehenderit ipsum natus sequi';
    course = {
        title: 'the complete angular course',
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 2, 6)
    };
    title = 'List of courses';
    imageUrl = 'http://lorempixel.com/400/200/';
    colspan = 2;
    isActive = false;
    bEmail = 'just@example.com';
    courses;
    authors;
    constructor(service: CoursesService) {
        // const service = new CoursesService();
        this.courses = service.getCourses();
    }
    onSave($event) {
        $event.stopPropagation();
        console.log('the button was clicked ', $event);
    }
    onClickDiv() {
        console.log('the div was clicked');
    }
    onKeyUp($event) {
        console.log('Enter was pressed');
        console.log($event.target.value);
    }
    onEmailKeyUp(email) {
        console.log('Enter was pressed');
        console.log('Template variables ' + email);
    }
    onTwoWayKeyUp() {
        console.log('Enter was pressed');
        console.log('two way binding ');
    }
}
