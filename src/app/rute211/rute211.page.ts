import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute211',
  templateUrl: './rute211.page.html',
  styleUrls: ['./rute211.page.scss'],
})
export class Rute211Page implements OnInit {

  ComponentRoute211: ComponentRoute[] = [
    {
      answer1: 'Gives more resonance',
      answer2: 'to the bells',
      redirecTo: '/geolocation212'
    },
    {
      answer1: 'Gain visibility from',
      answer2: 'a greater distance',
      redirecTo: '/geolocation212'
    },
    {
      answer1: ' It is tied to', // Correcta
      answer2: 'the summer solstice',
      redirecTo: '/geolocation212'
    },
    {
      answer1: 'Deceive about',
      answer2: 'the interior dimensions',
      redirecTo: '/geolocation212'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

interface ComponentRoute {
  answer1: string;
  answer2: string;
  redirecTo: string;
}
