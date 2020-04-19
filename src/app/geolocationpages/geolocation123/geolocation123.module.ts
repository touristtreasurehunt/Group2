import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Geolocation123PageRoutingModule } from './geolocation123-routing.module';

import { Geolocation123Page } from './geolocation123.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Geolocation123PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Geolocation123Page]
})
export class Geolocation123PageModule {}
