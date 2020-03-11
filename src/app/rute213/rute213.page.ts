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
      redirecTo: '/ruteFinaly'
    },
    {
      answer: 'lorem2',
      redirecTo: '/ruteFinaly'
    },
    {
      answer: 'lorem3',
      redirecTo: '/ruteFinaly'
    },
    {
      answer: 'lorem4',
      redirecTo: '/ruteFinaly'
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
