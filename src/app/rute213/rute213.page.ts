import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute213',
  templateUrl: './rute213.page.html',
  styleUrls: ['./rute213.page.scss'],
})
export class Rute213Page implements OnInit {

  ComponentRoute213: ComponentRoute[] = [
    {
      answer: 'The study of history',
      redirecTo: '/score'
    },
    {
      answer: 'The study of anthropology',
      redirecTo: '/score'
    },
    {
      answer: 'Promoting letters and the arts',
      redirecTo: '/score'
    },
    {
      answer: 'All are correct',
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
