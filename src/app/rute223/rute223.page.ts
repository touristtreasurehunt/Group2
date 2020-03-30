import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute223',
  templateUrl: './rute223.page.html',
  styleUrls: ['./rute223.page.scss'],
})
export class Rute223Page implements OnInit {

  ComponentRoute223: ComponentRoute[] = [
    {
      answer: 'The study of history',
      redirecTo: '/score'
    },
    {
      answer: 'The study of anthropology',
      redirecTo: '/score'
    },
    {
      answer: 'The promotion of letters and the arts',
      redirecTo: '/score'
    },
    {
      answer: 'They are all correct', // correcta
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
