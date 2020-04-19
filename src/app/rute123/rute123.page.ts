import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute123',
  templateUrl: './rute123.page.html',
  styleUrls: ['./rute123.page.scss'],
})
export class Rute123Page implements OnInit {

  ComponentRoute123: ComponentRoute[] = [
    {
      answer1: 'Executioners Bridge or',
      answer2: 'Stone Bridge',
      redirecTo: '/score'
    },
    {
      answer1: 'Passage bridge or',
      answer2: 'Guiniguada Bridge',
      redirecTo: '/score'
    },
    {
      answer1: 'Medianías Bridge or',
      answer2: 'Vegueta Bridge',
      redirecTo: '/score'
    },
    {
      answer1: 'Statues Bridge or',
      answer2: 'the Cathedral Bridge',
      redirecTo: '/score'
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
