import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute221',
  templateUrl: './rute221.page.html',
  styleUrls: ['./rute221.page.scss'],
})
export class Rute221Page implements OnInit {

  ComponentRoute221: ComponentRoute[] = [
    {
      answer: 'lorem1',
      redirecTo: '/src/app/rute222'
    },
    {
      answer: 'lorem2',
      redirecTo: '/src/app/rute222'
    },
    {
      answer: 'lorem3',
      redirecTo: '/src/app/rute222'
    },
    {
      answer: 'lorem4',
      redirecTo: '/src/app/rute222'
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
