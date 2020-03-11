import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute113',
  templateUrl: './rute113.page.html',
  styleUrls: ['./rute113.page.scss'],
})
export class Rute113Page implements OnInit {

  ComponentRoute113: ComponentRoute[] = [
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
      redirecTo: '/ruteFinlay'
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

