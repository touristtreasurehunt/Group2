import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute122',
  templateUrl: './rute122.page.html',
  styleUrls: ['./rute122.page.scss'],
})
export class Rute122Page implements OnInit {

  ComponentRoute122: ComponentRoute[] = [
    {
      answer: 'By James M. McLaren and Secundino Zuazo Ugalde.',
      redirecTo: '/geolocation123'
    },
    {
      answer: 'For the brothers Miguel and Néstor Martín Fernández de la Torre.', // correcta
      redirecTo: '/geolocation123'
    },
    {
      answer: 'By Eduardo Laforet and Carlos Flores López.',
      redirecTo: '/geolocation123'
    },
    {
      answer: 'By José Blasco Robles and Richard Von Oppel.',
      redirecTo: '/geolocation123'
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
