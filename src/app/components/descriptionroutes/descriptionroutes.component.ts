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
      message: 'orem ipsum dolor sit, amet consectetur adipisicing elit. Et, laudantium veritatis adipisci vel earum quam suscipit quasi. Totam, non sapiente!',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {}

}
