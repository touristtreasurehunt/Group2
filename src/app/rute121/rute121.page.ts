import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute121',
  templateUrl: './rute121.page.html',
  styleUrls: ['./rute121.page.scss'],
})
export class Rute121Page implements OnInit {

  ComponentRoute121: ComponentRoute[] = [
    {
      answer: 'lorem1',
      redirecTo: '/geolocation122'
    },
    {
      answer: 'lorem2',
      redirecTo: '/geolocation122'
    },
    {
      answer: 'lorem3',
      redirecTo: '/geolocation122'
    },
    {
      answer: 'lorem4',
      redirecTo: '/geolocation122'
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

