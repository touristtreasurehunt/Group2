import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  componentsTriana: ComponentMainPage[] = [
    {
      icon: 'walk',
      name: 'Route 1',
      redirecTo: '/rute111'
    },
    {
      icon: 'walk',
      name: 'Route 2',
      redirecTo: '/rute121'
    }
  ];

  componentsVegueta: ComponentMainPage[] = [
    {
      icon: 'walk',
      name: 'Route 1',
      redirecTo: '/rute211'
    },
    {
      icon: 'walk',
      name: 'Route 2',
      redirecTo: '/rute221'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}


interface ComponentMainPage {
  icon: string;
  name: string;
  redirecTo: string;
}
