import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute113',
  templateUrl: './rute113.page.html',
  styleUrls: ['./rute113.page.scss'],
})
export class Rute113Page implements OnInit {

  ComponentRoute113: ComponentRoute[] = [
    {
      answer: 'For sharing the name with the president of the government elected at the time.',
      redirecTo: '/score'
    },
    {
      answer: 'For sharing the name with the president of the government elected at the time.',
      redirecTo: '/score'
    },
    {
      answer: 'For the Day "San José"',
      redirecTo: '/score'
    },
    {
      answer: 'Name of first female tram driver',
      redirecTo: '/score'
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

