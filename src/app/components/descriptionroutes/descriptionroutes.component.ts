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
      header: 'Castillo de Mata',
      subHeader: '',
      // tslint:disable-next-line: max-line-length
      message: '<p>As a result of various buildings over its more than four centuries, it originally had the function of defending the Canarian coasts from pirate attacks, such as that of dutchman Van Der Does in 1599.</p><p>Its use was extended well into the twentieth century when it closed its doors to the defense of the island to give way to a cultural space.</p>',
      buttons: ['OK']
    });

    await alert.present();
  }

  async descriptionRoute112() {
    const alert = await this.descriptionRoute.create({
      header: 'La union y el fénix',
      subHeader: '',
      // tslint:disable-next-line: max-line-length
      message: '<p>The union and the phoenix was an insurance company of the late nineteenth century (1879). Most of its buildings were crowned with the figure of the abduction of ganymede, a myth that can be seen as allegory to homosexuality and its acceptance by society, since the eagle (phoenix) would represent Zeus or Jupiter, turning the young epheme into his lover and butler after his abduction.</p>',
      buttons: ['OK']
    });

    await alert.present();
  }

  async descriptionRoute113() {
    const alert = await this.descriptionRoute.create({
      header: 'Tranvia La pepa',
      subHeader: '',
      // tslint:disable-next-line: max-line-length
      message: '<p>In 1942, and due to the shortage of fuel due to the 2st world war, the town hall again took old wagons and a steam locomotive back from the old airport station and a steam locomotive that had circulated for a short time.</p>',
      buttons: ['OK']
    });

    await alert.present();
  }

  async descriptionRoute121() {
    const alert = await this.descriptionRoute.create({
      header: 'Gabinete literario',
      subHeader: '',
      // tslint:disable-next-line: max-line-length
      message: '<p>From its beginning to the present day, it has played a leading role in the literary, cultural and scientific development of the Canary Archipelago. It is considered one of the main assets of the Canary Islands, both for its construction and for its contents.</p>',
      buttons: ['OK']
    });

    await alert.present();
  }

  async descriptionRoute122() {
    const alert = await this.descriptionRoute.create({
      header: 'Teatro Pérez Galdós',
      // subHeader: '',
      // tslint:disable-next-line: max-line-length
      message: '<p>Being one of the most emblematic buildings of the island, it is the main theatrical venue of the same. stands majestically at the mouth of the guiniguada, it lends itself as the venue of the Opera de Las Palmas de Gran Canaria Alfredo Kraus festival.</p>',
      buttons: ['OK']
    });

    await alert.present();
  }

  async descriptionRoute123() {
    const alert = await this.descriptionRoute.create({
      header: 'Puente de Palo (Barranco Guiniguada)',
      // subHeader: 'The oldest Something Something on Gran Canaria',
      // tslint:disable-next-line: max-line-length
      message: '<p>Named after its first road most likely out of wood, after its destruction by a strong flood, it was rebuilt in stone thanks to the important economic contribution made by Bishop Manuel Verdugo in the late eighteenth century. The bridge would permanently link the neighborhoods of triana and vegueta.</p>',
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
      message: '<p>The history of the city of Las Palmas de Gran Canaria begins on June 24, 1478 when Juan Rejón founded the Real de Las Palmas. This small military camp, which will give rise to the neighborhood of Vegueta, was located on the banks of the Guiniguada ravine.</p>',
      buttons: ['OK']
    });

    await alert.present();
  }

  async descriptionRoute213() {
    const alert = await this.descriptionRoute.create({
      header: 'Casa Colon',
      // subHeader: 'The oldest Something Something on Gran Canaria',
      // tslint:disable-next-line: max-line-length
      message: '<p>Former house of the governor built in the royal palms in the middle of the twentieth century, it was remodeled on the initiative of the lobby of Gran Canaria in the late 1940s, using the old building as a space for cultural outreach</p>',
      buttons: ['OK']
    });

    await alert.present();
  }

  async descriptionRoute221() {
    const alert = await this.descriptionRoute.create({
      header: 'Ermita San Antonio Abad',
      // subHeader: 'The oldest Something Something on Gran Canaria',
      // tslint:disable-next-line: max-line-length
      message: '<p>Building dating from the eighteenth century, occupies the place of the old chapel built in the twentieth century in the military camp that was erected for the conquest of the island by Juan Rejón. On its facade you can see an inscription indicating the high that Cristobal Colón made to pray in it, on his first journey to what he thought were the East Indies.</p>',
      buttons: ['OK']
    });

    await alert.present();
  }

  async descriptionRoute222() {
    const alert = await this.descriptionRoute.create({
      header: 'Mercado de Vegueta',
      // subHeader: 'The oldest Something Something on Gran Canaria',
      // tslint:disable-next-line: max-line-length
      message: 'Opened in 1858, due to poor communications with the archipelago and the serious supply problem suffered by the islands, it was decided to create a supply market in the largest population core of the archipelago.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async descriptionRoute223() {
    const alert = await this.descriptionRoute.create({
      header: 'Museo Canario',
      // subHeader: 'The oldest Something Something on Gran Canaria',
      // tslint:disable-next-line: max-line-length
      message: '<p>As a result of the initiative of a group of intellectuals, the museum emerged in 1879 as an initiative to promote the scientific and cultural development of Las Palmas de Gran Canaria. However, it was not only prehistory and anthropology that were the only interests of the initiative, as it was conceived as a society that promotes lyrics and art in general, giving special prominence to the arch-skin.</p>',
      buttons: ['OK']
    });

    await alert.present();
  }


  ngOnInit() {}

}
