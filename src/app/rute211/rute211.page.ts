import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute211',
  templateUrl: './rute211.page.html',
  styleUrls: ['./rute211.page.scss'],
})
export class Rute211Page implements OnInit {

  ComponentRoute211: ComponentRoute[] = [
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
