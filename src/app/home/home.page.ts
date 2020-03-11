import { Component } from '@angular/core';
import { from } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }

  gotoDetails() {
    console.log("hello")
    this.router.navigateByUrl('/main');

  }

  start() {
    let triggerButton = document.getElementById('triggerButton');
    let triggerTop = document.getElementById('triggerTop');
    let triggerBottom = document.getElementById('triggerBottom');
    triggerButton.style.animationPlayState = 'running';
    triggerTop.style.animationPlayState = 'running';
    triggerBottom.style.animationPlayState = 'running';

    setTimeout(() => {
      this.gotoDetails();
    }, 3000);
    // this.gotoDetails();
  }

}
