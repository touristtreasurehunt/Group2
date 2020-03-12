import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute223',
  templateUrl: './rute223.page.html',
  styleUrls: ['./rute223.page.scss'],
})
export class Rute223Page implements OnInit {

  ComponentRoute223: ComponentRoute[] = [
    {
      answer: 'lorem1',
      redirecTo: '/score'
    },
    {
      answer: 'lorem2',
      redirecTo: '/score'
    },
    {
      answer: 'lorem3',
      redirecTo: '/score'
    },
    {
      answer: 'lorem4',
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
