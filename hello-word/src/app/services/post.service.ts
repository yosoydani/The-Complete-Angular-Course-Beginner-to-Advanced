import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data-service';

@Injectable()
 export class PostService extends DataService {
  constructor(http: Http) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }
 }

// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import { AppError } from '../common/app-errors';
// import { NotFoundError } from '../common/not-found-error';
// import { BadRequestError } from '../common/bad-request-error';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

// @Injectable()
// export class PostService {

//   private url = 'https://jsonplaceholder.typicode.com/posts';
//   constructor(private http: Http) { }
//   getPosts() {
//     return this.http.get(this.url)
//     .catch(this.handlerError);
//   }

//   createPost(post) {
//     return this.http.post(this.url, JSON.stringify(post))
//     .catch(this.handlerError);
//   }// create Post

//   updatePost(post) {
//     return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRed: true}))
//     .catch(this.handlerError);
//    // this.http.put(this.url,JSON.stringify(post));
//   }

//   deletePost(id) {
//     return this.http.delete(this.url + '/' + id)
//     .catch(this.handlerError);
//   }

//   private handlerError(error: Response){
//     if (error.status === 404) {
//       return Observable.throw(new NotFoundError() );
//     }
//     if (error.status === 400) {
//       return Observable.throw(new BadRequestError(error.json())); // information about the form
//     }
//     return Observable.throw(new AppError(error));
//   }


// }
