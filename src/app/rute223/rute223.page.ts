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
      redirecTo: '/src/app/rute223'
    },
    {
      answer: 'lorem2',
      redirecTo: '/src/app/rute223'
    },
    {
      answer: 'lorem3',
      redirecTo: '/src/app/rute223'
    },
    {
      answer: 'lorem4',
      redirecTo: '/src/app/rute223'
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
