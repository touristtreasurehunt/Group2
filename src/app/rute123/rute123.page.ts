import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute123',
  templateUrl: './rute123.page.html',
  styleUrls: ['./rute123.page.scss'],
})
export class Rute123Page implements OnInit {

  ComponentRoute123: ComponentRoute[] = [
    {
      answer: 'Executioners Bridge or Stone Bridge.',
      redirecTo: '/score'
    },
    {
      answer: 'Passage bridge or Guiniguada Bridge.',
      redirecTo: '/score'
    },
    {
      answer: 'Medianías Bridge or Vegueta Bridge.',
      redirecTo: '/score'
    },
    {
      answer: 'Statues Bridge or the Cathedral Bridge.',
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
