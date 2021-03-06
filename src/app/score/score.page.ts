import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {

  constructor(private router: Router) { }

  gotoToMainPage() {
    this.router.navigateByUrl('/main');
  }

  ngOnInit() {
  }

}
