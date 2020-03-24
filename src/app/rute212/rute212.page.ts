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
      redirecTo: '/rute213'
    },
    {
      answer: 'Dean Bermúdez',
      redirecTo: '/rute213'
    },
    {
      answer: 'Luján Pérez',
      redirecTo: '/rute213'
    },
    {
      answer: 'Artemi Semidán',
      redirecTo: '/rute213'
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
