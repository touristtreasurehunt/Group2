import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  components: ComponentMainPage[] = [
    {
      icon: 'walk',
      name: 'Route 1',
      redirecTo: '/home' 
    },
    {
      icon: 'walk',
      name: 'Route 2',
      redirecTo: '/home' 
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