import { Component } from '@angular/core';
import { FavoriteChangedEventARgs } from './favorite-star/favorite-star.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task = {
    title: 'Review aplications',
    assingee: {
      name: 'John Smith'
    }
  };
  // courses ;

  // onAdd(){
  //   this.courses.push({id: 4, name: 'course04'});
  // }

  // onRemove(course) {
  //    const index = this.courses.indexOf(course);
  //    this.courses.splice(index,1);
  // }

  // onChange(course) {
  //   course.name = 'UPDATE';
  // }

  // loadCourses() {
  //   this.courses = [
  //     {id: 1, name: 'course01'},
  //     {id: 2, name: 'course02'},
  //     {id: 3, name: 'course03'}
  //   ];
  // }

  // trackCourse(index, course) {
  //   return course ? course.id : undefined;
  // }

      // title = 'app';
  post = {
    title: 'post 01',
    isFavorite: false
  };
  // tweet = {
  //   body: 'Here is the body of the tweet',
  //   isLiked: false,
  //   likesCount: 0
  // };

  onFavoriteChange(eventArgs: FavoriteChangedEventARgs) {
    console.log(`favorite has changed from ${!eventArgs.newValue}` , eventArgs);
  }

  // Directives
  // ngIf
//  courses = [1,2];
 // courses = [];
 // ngswitch
//  viewMode = 'mjap';

} // class AppComponent
