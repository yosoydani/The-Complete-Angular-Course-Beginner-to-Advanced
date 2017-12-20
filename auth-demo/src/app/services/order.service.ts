import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class OrderService {

  // constructor(private http: Http) {
  // }
  constructor(private authHttp: AuthHttp){}

  getOrders() {
    // Se cambia http por Atuhthhp todo esto no es necesario y no hay 
    // const header = new Headers();
    // const token = localStorage.getItem('token');
    // header.append('Authorization', 'Bearer ' + token);
    // const options = new RequestOptions({headers: header});
    // return this.http.get('/api/orders',options)
    //   .map(response => response.json());
    return this.authHttp.get('/api/orders')
    .map(response => response.json());

  }
}
