import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute211',
  templateUrl: './rute211.page.html',
  styleUrls: ['./rute211.page.scss'],
})
export class Rute211Page implements OnInit {

  ComponentRoute211: ComponentRoute[] = [
    {
      answer: 'lorem1',
      redirecTo: '/rute212'
    },
    {
      answer: 'Summer solstice',
      redirecTo: '/rute212'
    },
    {
      answer: 'lorem3',
      redirecTo: '/rute212'
    },
    {
      answer: 'lorem4',
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
