import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  submit() {
    console.log('submint clicked');
    this.router.navigate(['/followers'], {
      queryParams: { page: '1', oder: 'newest'}
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    // this.route.paramMap
    // .subscribe(params => {
    //   const id = params.get('id');
    //   console.log(id);
    // });
  }

}
