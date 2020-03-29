import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute112',
  templateUrl: './rute112.page.html',
  styleUrls: ['./rute112.page.scss'],
})
export class Rute112Page implements OnInit {

  ComponentRoute112: ComponentRoute[] = [
    {
      answer: 'The union of two insurance brokerages',
      redirecTo: '/geolocation113'
    },
    {
      answer: 'Breaking the bindings',
      redirecTo: '/geolocation113'
    },
    {
      answer: 'The Rapture of Ganimedes', // correcta
      redirecTo: '/geolocation113'
    },
    {
      answer: 'Renaissance and Freedom',
      redirecTo: '/geolocation113'
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

