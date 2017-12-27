import { Observable } from 'rxjs/Observable';
import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireObject  } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database/interfaces';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnDestroy {
  courses: Observable<any[]>;
  courses2: AngularFireList<any[]>;
  course$: Observable<any>;
  author$: Observable<any>;
  itemRef: AngularFireObject<any>;
  id: number;
  constructor(private db: AngularFireDatabase) {

    this.courses = db.list('Courses').valueChanges();
    this.courses2 = db.list('Courses');

    this.course$ = db.object('Courses/1').valueChanges();
    this.author$ = db.object('authors/1').valueChanges();
    this.itemRef = db.object('Courses');
  }

  add(course: HTMLInputElement) {
    // this.itemRef.push(course.value);
    this.itemRef.update({
      name: course.value,
      sections : ['components', 'comments', 'notes'],
      isPremium: true
    });
    course.value = '';
  }

  update (course) {
    // this.db.object('Courses/' + course).set(course + 'Updated');
  // console.log(this.db.list('Courses/' + course).update(course.key, course + 'Updated'));
  console.log(course);
  }

  ngOnDestroy(): void {
    console.log('Destroy !!!');
  }




}
