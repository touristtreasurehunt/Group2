import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute122',
  templateUrl: './rute122.page.html',
  styleUrls: ['./rute122.page.scss'],
})
export class Rute122Page implements OnInit {

  ComponentRoute122: ComponentRoute[] = [
    {
      answer1: 'By James M. McLaren and',
      answer2: 'Secundino Zuazo Ugalde',
      redirecTo: '/geolocation123'
    },
    {
      answer1: 'For the brothers Miguel and', // correcta
      answer2: 'Néstor Martín Fernández de la Torre',
      redirecTo: '/geolocation123'
    },
    {
      answer1: 'By Eduardo Laforet and',
      answer2: 'Carlos Flores López',
      redirecTo: '/geolocation123'
    },
    {
      answer1: 'By José Blasco Robles and',
      answer2: 'Richard Von Oppel',
      redirecTo: '/geolocation123'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface ComponentRoute {
  answer1: string;
  answer2: string;
  redirecTo: string;
}
