import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute123',
  templateUrl: './rute123.page.html',
  styleUrls: ['./rute123.page.scss'],
})
export class Rute123Page implements OnInit {

  ComponentRoute123: ComponentRoute[] = [
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
