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
      redirecTo: '/geolocation111'
    },
    {
      icon: 'walk',
      name: 'Route 2',
      redirecTo: '/geolocation121'
    }
  ];

  componentsVegueta: ComponentMainPage[] = [
    {
      icon: 'walk',
      name: 'Route 1',
      redirecTo: '/geolocation211'
    },
    {
      icon: 'walk',
      name: 'Route 2',
      redirecTo: '/geolocation221'
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
