import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute122',
  templateUrl: './rute122.page.html',
  styleUrls: ['./rute122.page.scss'],
})
export class Rute122Page implements OnInit {

  ComponentRoute122: ComponentRoute[] = [
    {
      answer: 'lorem1',
      redirecTo: '/rute123'
    },
    {
      answer: 'lorem2',
      redirecTo: '/rute123'
    },
    {
      answer: 'lorem3',
      redirecTo: '/rute123'
    },
    {
      answer: 'lorem4',
      redirecTo: '/rute123'
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
