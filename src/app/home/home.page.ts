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
    console.log('hello');
    this.router.navigateByUrl('/main');
  }

  start() {
    const triggerButton = document.getElementById('triggerButton');
    const triggerTop = document.getElementById('triggerTop');
    const triggerBottom = document.getElementById('triggerBottom');
    triggerButton.style.animationPlayState = 'running';
    triggerTop.style.animationPlayState = 'running';
    triggerBottom.style.animationPlayState = 'running';

    setTimeout(() => {
      this.gotoDetails();
    }, 1500);

  }

}
