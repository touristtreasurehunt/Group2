import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Geolocation221PageRoutingModule } from './geolocation221-routing.module';

import { Geolocation221Page } from './geolocation221.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Geolocation221PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Geolocation221Page]
})
export class Geolocation221PageModule {}
