import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute211',
  templateUrl: './rute211.page.html',
  styleUrls: ['./rute211.page.scss'],
})
export class Rute211Page implements OnInit {

  ComponentRoute211: ComponentRoute[] = [
    {
      answer: 'Gives more resonance to the bells.',
      redirecTo: '/geolocation212'
    },
    {
      answer: 'Gain visibility from a greater distance',
      redirecTo: '/geolocation212'
    },
    {
      answer: ' It is tied to the summer solstice', // Correcta
      redirecTo: '/geolocation212'
    },
    {
      answer: 'Deceive about the interior dimensions of the temple',
      redirecTo: '/geolocation212'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

interface ComponentRoute {
  answer: string;
  redirecTo: string;
}
