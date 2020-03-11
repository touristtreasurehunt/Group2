import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute111',
  templateUrl: './rute111.page.html',
  styleUrls: ['./rute111.page.scss'],
})
export class Rute111Page implements OnInit {

ComponentRoute111: ComponentRoute[] = [
  {
    answer: 'lorem1',
    redirecTo: '/rute112'
  },
  {
    answer: 'lorem2',
    redirecTo: '/rute112'
  },
  {
    answer: 'lorem3',
    redirecTo: '/rute112'
  },
  {
    answer: 'lorem4',
    redirecTo: '/rute112'
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
