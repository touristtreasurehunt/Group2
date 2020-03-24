import { GeolocationComponent } from './geolocation/geolocation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { DescriptionroutesComponent } from './descriptionroutes/descriptionroutes.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DescriptionroutesComponent,
    GeolocationComponent
  ],

  exports: [
    HeaderComponent,
    DescriptionroutesComponent,
    GeolocationComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
