import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute221',
  templateUrl: './rute221.page.html',
  styleUrls: ['./rute221.page.scss'],
})
export class Rute221Page implements OnInit {

  ComponentRoute221: ComponentRoute[] = [
    {
      answer: 'In 1858', // correcto
      redirecTo: '/geolocation222'
    },
    {
      answer: 'In 1598',
      redirecTo: '/geolocation222'
    },
    {
      answer: 'In 1645',
      redirecTo: '/geolocation222'
    },
    {
      answer: ' In 1492',
      redirecTo: '/geolocation222'
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
