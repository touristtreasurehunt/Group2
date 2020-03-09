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
