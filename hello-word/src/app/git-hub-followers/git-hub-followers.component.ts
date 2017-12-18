import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GitHubFollowersService } from '../services/git-hub-followers.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-git-hub-followers',
  templateUrl: './git-hub-followers.component.html',
  styleUrls: ['./git-hub-followers.component.css']
})
export class GitHubFollowersComponent implements OnInit {

  followers: any = [];

  constructor(
    private route: ActivatedRoute,
    private service: GitHubFollowersService) { }

  ngOnInit() {
    // combinar multiple observable
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
     .switchMap(combined => {
      const id = combined[0].get('id');
      const page = combined[1].get('page');
      return this.service.getAll();
    }) // suscribirse al obsevable combinado
    .subscribe(followers => this.followers = followers);
  }

}
      // combined => {
      // const id = combined[0].get('id');
      // const page = combined[1].get('page');
      // // this.service.getAll({id: id. page: page});
      // this.service.getAll() // usar servicie para recuperar datos
      //   .subscribe(follwers => this.followers = follwers);
    // })
    // (this.service instanceof DataService) ? console.log('instancia de data service') : console.log('Error instacia') ;
   //  parametros normales
    // this.route.paramMap
    // .subscribe(params => {

    // });
    //  this.route.snapshot.paramMap.get('id');
    // query paramams
    // this.route.snapshot.queryParamMap.get('pageNumber');
    // dos obsevables no combinados.
    // this.route.queryParamMap.subscribe(params => {

    // });

    // this.service.getAll().subscribe(followers => {
    //  this.followers = followers;
    // // console.log('followers recibidos: ' + followers);
    // console.log('this. followers: ' + this.followers );
    // });

