import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute213',
  templateUrl: './rute213.page.html',
  styleUrls: ['./rute213.page.scss'],
})
export class Rute213Page implements OnInit {

  ComponentRoute213: ComponentRoute[] = [
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
