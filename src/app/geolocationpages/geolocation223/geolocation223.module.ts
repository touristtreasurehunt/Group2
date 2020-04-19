import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Geolocation223PageRoutingModule } from './geolocation223-routing.module';

import { Geolocation223Page } from './geolocation223.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Geolocation223PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Geolocation223Page]
})
export class Geolocation223PageModule {}
