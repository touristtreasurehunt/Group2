import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute222',
  templateUrl: './rute222.page.html',
  styleUrls: ['./rute222.page.scss'],
})
export class Rute222Page implements OnInit {

  ComponentRoute222: ComponentRoute[] = [
    {
      answer: 'lorem1',
      redirecTo: '/rute223'
    },
    {
      answer: 'lorem2',
      redirecTo: '/rute223'
    },
    {
      answer: 'lorem3',
      redirecTo: '/rute223'
    },
    {
      answer: 'lorem4',
      redirecTo: '/rute223'
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
