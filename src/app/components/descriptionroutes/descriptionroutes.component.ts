import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-descriptionroutes',
  templateUrl: './descriptionroutes.component.html',
  styleUrls: ['./descriptionroutes.component.scss'],
})
export class DescriptionroutesComponent implements OnInit {

  @Input() descriptionFunction: string;

  constructor(public descriptionRoute: AlertController) {}

  async descriptionRoute111() {
    const alert = await this.descriptionRoute.create({
      header: 'Catedral de Santa Ana',
      subHeader: 'The oldest Something Something on Gran Canaria',
      // tslint:disable-next-line: max-line-length
      message: '<p>It is the founding district of the city of Las Palmas de Gran Canaria.</p> <p>The neighborhood of Vegueta was declared A Historic Artistic National by Decree 1973. It was the first Castilian site in the Atlantic, as well as the place where the Crown of Castile began the Conquista de Canarias.</p> <p>The neighborhood owes its name to the Vega that stretched around the Real de las Tres Palmas, called La Vegueta de Santa Ana. Since then it would be the center of the political, religious and administrative life of the island.</p> <p>Today this urban center is the center best preserved historical of the Canary Islands and past and present shake hands.</p>',
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
      message: '<p>Juan Rejón was the head of the Castilian expedition that, accompanied by deán Bermudez and his troops, arrived on the island for his conquest. He founded the camp of the Royal De las Tres Palmas in 1478.</p><p>At this point a fortified enclosure was erected inside which a small church dedicated to St. Anne was built, probably on the Aboriginal house in which the first campaign mass was officiated, and which, supposedly, should have been located in the back of the Cathedral.</p><p>All the data suggest that this facility would be carried out on or near a settlemen aboriginal.</p>',
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
      header: 'Catedral de Santa Ana',
      subHeader: 'The oldest Something Something on Gran Canaria',
      // tslint:disable-next-line: max-line-length
      message: '<p>It is the founding district of the city of Las Palmas de Gran Canaria.</p> <p>The neighborhood of Vegueta was declared A Historic Artistic National by Decree 1973. It was the first Castilian site in the Atlantic, as well as the place where the Crown of Castile began the Conquista de Canarias.</p> <p>The neighborhood owes its name to the Vega that stretched around the Real de las Tres Palmas, called La Vegueta de Santa Ana. Since then it would be the center of the political, religious and administrative life of the island.</p> <p>Today this urban center is the center best preserved historical of the Canary Islands and past and present shake hands.</p>',
      buttons: ['OK']
    });

    await alert.present();
  }

  async descriptionRoute212() {
    const alert = await this.descriptionRoute.create({
      header: 'Real de Las Palmas',
      // subHeader: 'The oldest Something Something on Gran Canaria',
      // tslint:disable-next-line: max-line-length
      message: '<p>Juan Rejón was the head of the Castilian expedition that, accompanied by deán Bermudez and his troops, arrived on the island for his conquest. He founded the camp of the Royal De las Tres Palmas in 1478.</p><p>At this point a fortified enclosure was erected inside which a small church dedicated to St. Anne was built, probably on the Aboriginal house in which the first campaign mass was officiated, and which, supposedly, should have been located in the back of the Cathedral.</p><p>All the data suggest that this facility would be carried out on or near a settlemen aboriginal.</p>',
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
