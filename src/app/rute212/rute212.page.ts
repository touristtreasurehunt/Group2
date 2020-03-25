import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute212',
  templateUrl: './rute212.page.html',
  styleUrls: ['./rute212.page.scss'],
})
export class Rute212Page implements OnInit {

  ComponentRoute212: ComponentRoute[] = [
    {
      answer: 'Juan Rejón',
      redirecTo: '/geolocation213'
    },
    {
      answer: 'Dean Bermúdez',
      redirecTo: '/geolocation213'
    },
    {
      answer: 'Luján Pérez',
      redirecTo: '/geolocation213'
    },
    {
      answer: 'Artemi Semidán',
      redirecTo: '/geolocation213'
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
