import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute113',
  templateUrl: './rute113.page.html',
  styleUrls: ['./rute113.page.scss'],
})
export class Rute113Page implements OnInit {

  ComponentRoute113: ComponentRoute[] = [
    {
      class: 'class1',
      answer1: 'For sharing the name with the president',
      answer2: 'of the government elected at the time',
      redirecTo: '/score'
    },
    {
      class: 'class2',
      answer1: 'For a joke made',
      answer2: 'among workers',
      redirecTo: '/score'
    },
    {
      class: 'class2',
      answer1: 'For the Day',
      answer2: '"San José"',
      redirecTo: '/score'
    },
    {
      class: 'class2',
      answer1: 'Name of first female',
      answer2: 'tram driver',
      redirecTo: '/score'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface ComponentRoute {
  class: string;
  answer1: string;
  answer2: string;
  redirecTo: string;
}

