import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute111',
  templateUrl: './rute111.page.html',
  styleUrls: ['./rute111.page.scss'],
})
export class Rute111Page implements OnInit {

ComponentRoute111: ComponentRoute[] = [
  {
    answer: 'In the year 2018',
    redirecTo: '/geolocation112'
  },
  {
    answer: 'In the year 2015', // correcta
    redirecTo: '/geolocation112'
  },
  {
    answer: 'In the year 2005',
    redirecTo: '/geolocation112'
  },
  {
    answer: 'In the year 2010',
    redirecTo: '/geolocation112'
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
