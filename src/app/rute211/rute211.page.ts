import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute211',
  templateUrl: './rute211.page.html',
  styleUrls: ['./rute211.page.scss'],
})
export class Rute211Page implements OnInit {

  ComponentRoute211: ComponentRoute[] = [
    {
      answer: 'Winter solstice',
      redirecTo: '/rute212'
    },
    {
      answer: 'Spring solstice',
      redirecTo: '/rute212'
    },
    {
      answer: 'Summer solstice',
      redirecTo: '/rute212'
    },
    {
      answer: 'Autumn solstice',
      redirecTo: '/rute212'
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
