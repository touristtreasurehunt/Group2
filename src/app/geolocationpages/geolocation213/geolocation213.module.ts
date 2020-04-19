import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Geolocation213PageRoutingModule } from './geolocation213-routing.module';

import { Geolocation213Page } from './geolocation213.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Geolocation213PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Geolocation213Page]
})
export class Geolocation213PageModule {}
