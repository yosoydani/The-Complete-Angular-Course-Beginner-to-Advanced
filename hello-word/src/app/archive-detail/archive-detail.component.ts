import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive-detail',
  templateUrl: './archive-detail.component.html',
  styleUrls: ['./archive-detail.component.css']
})
export class ArchiveDetailComponent implements OnInit {

  year: number;
  month: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.year = +this.route.snapshot.paramMap.get('year');
    this.month = +this.route.snapshot.paramMap.get('month');
    console.log(this.year + ',' + this.month);
  }

  buttonClicked() {
    this.router.navigate(['/archives']);
  }

}
