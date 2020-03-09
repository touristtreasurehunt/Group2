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
