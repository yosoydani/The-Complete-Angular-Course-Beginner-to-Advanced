import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppError } from '../common/app-errors';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {


  constructor(private url: string , private http: Http) { }

  getAll() {
    return this.http.get(this.url)
    .map(response => response.json())
    .catch(this.handlerError);
  }

  create(resources) {
   // return Observable.throw(new AppError());
    return this.http.post(this.url, JSON.stringify(resources))
    .map(response => response.json())
    .catch(this.handlerError);
  }// create Post

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRed: true}))
    .map(response => response.json())
    .catch(this.handlerError);
   // this.http.put(this.url,JSON.stringify(post));
  }

  delete(id) {
    return Observable.throw(new AppError());

  }

  private handlerError(error: Response) {
    if (error.status === 404) {
      return Observable.throw(new NotFoundError() );
    }
    if (error.status === 400) {
      return Observable.throw(new BadRequestError(error.json())); // information about the form
    }
    return Observable.throw(new AppError(error));
  }


}
