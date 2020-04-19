import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute121',
  templateUrl: './rute121.page.html',
  styleUrls: ['./rute121.page.scss'],
})
export class Rute121Page implements OnInit {

  ComponentRoute121: ComponentRoute[] = [
    {
      answer: ' It was a Hotel',
      redirecTo: '/geolocation122'
    },
    {
      answer: 'It was a library',
      redirecTo: '/geolocation122'
    },
    {
      answer: 'It was the residence of a notable',
      redirecTo: '/geolocation122'
    },
    {
      answer: 'It was a Theater', // correcta
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

