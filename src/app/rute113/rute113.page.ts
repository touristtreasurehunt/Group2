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

