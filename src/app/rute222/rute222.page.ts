import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute222',
  templateUrl: './rute222.page.html',
  styleUrls: ['./rute222.page.scss'],
})
export class Rute222Page implements OnInit {

  ComponentRoute222: ComponentRoute[] = [
    {
      answer: ' In 1858', // correcta
      redirecTo: '/geolocation223'
    },
    {
      answer: 'In 1598',
      redirecTo: '/geolocation223'
    },
    {
      answer: 'In 1645',
      redirecTo: '/geolocation223'
    },
    {
      answer: 'In 1492',
      redirecTo: '/geolocation223'
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
