import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute213',
  templateUrl: './rute213.page.html',
  styleUrls: ['./rute213.page.scss'],
})
export class Rute213Page implements OnInit {

  ComponentRoute213: ComponentRoute[] = [
    {
      answer: ' Juan Rejón',
      redirecTo: '/score'
    },
    {
      answer: 'Christopher Columbus', // correcto
      redirecTo: '/score'
    },
    {
      answer: 'Bishop Frías.',
      redirecTo: '/score'
    },
    {
      answer: ' Cardinal Cisneros.',
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
