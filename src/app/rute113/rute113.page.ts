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
      redirecTo: '/src/app/rute112'
    },
    {
      answer: 'lorem2',
      redirecTo: '/src/app/rute112'
    },
    {
      answer: 'lorem3',
      redirecTo: '/src/app/rute112'
    },
    {
      answer: 'lorem4',
      redirecTo: '/src/app/rute112'
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

