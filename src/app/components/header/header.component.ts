import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() checkMainPage: string;
  

  constructor(public alertController: AlertController) {}


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Tourist Treasure Hunt',
      subHeader: 'Information Game',
      message: '<p>Ready to <b><i>sightsee</i></b> and get to know iconic places playing treasure hunt?</p><p>This game consists of choosing one of the routes available on this page and following the directions to get to the destination</p><p>Upon arrival at the requested destination, a question with a series of answers will appear. Try to get the right answer!</p><p>At the end of the game a certain amount of points will be achieved. With so many points there can be prizemoney!</p>',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {}

}
