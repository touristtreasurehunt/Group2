import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute121',
  templateUrl: './rute121.page.html',
  styleUrls: ['./rute121.page.scss'],
})
export class Rute121Page implements OnInit {

  ComponentRoute121: ComponentRoute[] = [
    {
      answer: 'lorem1',
      redirecTo: '/src/app/rute122'
    },
    {
      answer: 'lorem2',
      redirecTo: '/src/app/rute122'
    },
    {
      answer: 'lorem3',
      redirecTo: '/src/app/rute122'
    },
    {
      answer: 'lorem4',
      redirecTo: '/src/app/rute122'
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

