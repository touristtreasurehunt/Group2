import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute112',
  templateUrl: './rute112.page.html',
  styleUrls: ['./rute112.page.scss'],
})
export class Rute112Page implements OnInit {

  ComponentRoute112: ComponentRoute[] = [
    {
      answer: 'lorem1',
      redirecTo: '/rute113'
    },
    {
      answer: 'lorem2',
      redirecTo: '/rute113'
    },
    {
      answer: 'lorem3',
      redirecTo: '/rute113'
    },
    {
      answer: 'lorem4',
      redirecTo: '/rute113'
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

