import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-descriptionroutes',
  templateUrl: './descriptionroutes.component.html',
  styleUrls: ['./descriptionroutes.component.scss'],
})
export class DescriptionroutesComponent implements OnInit {

  @Input() descriptionFuction: string;

  constructor(public descriptionRoute: AlertController) {}

  async descriptionRoute111() {
    const alert = await this.descriptionRoute.create({
      header: 'Santa Ana',
      subHeader: 'The oldest Something Something on Gran Canaria',
      // tslint:disable-next-line: max-line-length
      message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, laudantium veritatis adipisci vel earum quam suscipit quasi. Totam, non sapiente!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async descriptionRoute112() {
    const alert = await this.descriptionRoute.create({
      header: 'Santa Ana',
      subHeader: 'The oldest Something Something on Gran Canaria',
      // tslint:disable-next-line: max-line-length
      message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, laudantium veritatis adipisci vel earum quam suscipit quasi. Totam, non sapiente!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async descriptionRoute113() {
    const alert = await this.descriptionRoute.create({
      header: 'Santa Ana',
      subHeader: 'The oldest Something Something on Gran Canaria',
      // tslint:disable-next-line: max-line-length
      message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, laudantium veritatis adipisci vel earum quam suscipit quasi. Totam, non sapiente!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async descriptionRoute121() {
    const alert = await this.descriptionRoute.create({
      header: 'Santa Ana',
      subHeader: 'The oldest Something Something on Gran Canaria',
      // tslint:disable-next-line: max-line-length
      message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, laudantium veritatis adipisci vel earum quam suscipit quasi. Totam, non sapiente!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async descriptionRoute122() {
    const alert = await this.descriptionRoute.create({
      header: 'Santa Ana',
      subHeader: 'The oldest Something Something on Gran Canaria',
      // tslint:disable-next-line: max-line-length
      message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, laudantium veritatis adipisci vel earum quam suscipit quasi. Totam, non sapiente!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async descriptionRoute123() {
    const alert = await this.descriptionRoute.create({
      header: 'Santa Ana',
      subHeader: 'The oldest Something Something on Gran Canaria',
      // tslint:disable-next-line: max-line-length
      message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, laudantium veritatis adipisci vel earum quam suscipit quasi. Totam, non sapiente!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async descriptionRoute211() {
    const alert = await this.descriptionRoute.create({
      header: 'Santa Ana',
      subHeader: 'The oldest Something Something on Gran Canaria',
      // tslint:disable-next-line: max-line-length
      message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, laudantium veritatis adipisci vel earum quam suscipit quasi. Totam, non sapiente!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async descriptionRoute212() {
    const alert = await this.descriptionRoute.create({
      header: 'Santa Ana',
      subHeader: 'The oldest Something Something on Gran Canaria',
      // tslint:disable-next-line: max-line-length
      message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, laudantium veritatis adipisci vel earum quam suscipit quasi. Totam, non sapiente!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async descriptionRoute213() {
    const alert = await this.descriptionRoute.create({
      header: 'Santa Ana',
      subHeader: 'The oldest Something Something on Gran Canaria',
      // tslint:disable-next-line: max-line-length
      message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, laudantium veritatis adipisci vel earum quam suscipit quasi. Totam, non sapiente!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async descriptionRoute221() {
    const alert = await this.descriptionRoute.create({
      header: 'Santa Ana',
      subHeader: 'The oldest Something Something on Gran Canaria',
      // tslint:disable-next-line: max-line-length
      message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, laudantium veritatis adipisci vel earum quam suscipit quasi. Totam, non sapiente!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async descriptionRoute222() {
    const alert = await this.descriptionRoute.create({
      header: 'Santa Ana',
      subHeader: 'The oldest Something Something on Gran Canaria',
      // tslint:disable-next-line: max-line-length
      message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, laudantium veritatis adipisci vel earum quam suscipit quasi. Totam, non sapiente!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async descriptionRoute223() {
    const alert = await this.descriptionRoute.create({
      header: 'Santa Ana',
      subHeader: 'The oldest Something Something on Gran Canaria',
      // tslint:disable-next-line: max-line-length
      message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, laudantium veritatis adipisci vel earum quam suscipit quasi. Totam, non sapiente!',
      buttons: ['OK']
    });

    await alert.present();
  }


  ngOnInit() {}

}
