import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute212',
  templateUrl: './rute212.page.html',
  styleUrls: ['./rute212.page.scss'],
})
export class Rute212Page implements OnInit {

  ComponentRoute212: ComponentRoute[] = [
    {
      answer: 'lorem1',
      redirecTo: '/src/app/rute213'
    },
    {
      answer: 'lorem2',
      redirecTo: '/src/app/rute213'
    },
    {
      answer: 'lorem3',
      redirecTo: '/src/app/rute213'
    },
    {
      answer: 'lorem4',
      redirecTo: '/src/app/rute213'
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
