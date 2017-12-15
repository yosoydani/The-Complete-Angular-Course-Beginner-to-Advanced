import { Component, OnInit } from '@angular/core';
import { GitHubFollowersService } from '../services/git-hub-followers.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-git-hub-followers',
  templateUrl: './git-hub-followers.component.html',
  styleUrls: ['./git-hub-followers.component.css']
})
export class GitHubFollowersComponent implements OnInit {

  followers: any = [];

  constructor(private service: GitHubFollowersService) { }

  ngOnInit() {
    // (this.service instanceof DataService) ? console.log('instancia de data service') : console.log('Error instacia') ;
   this.service.getAll().subscribe(followers => {
     this.followers = followers;
    // console.log('followers recibidos: ' + followers);
    // console.log('this. followers: ' + this.followers );
    });
  }

}
