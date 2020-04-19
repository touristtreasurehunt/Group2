import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Geolocation121PageRoutingModule } from './geolocation121-routing.module';

import { Geolocation121Page } from './geolocation121.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Geolocation121PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Geolocation121Page]
})
export class Geolocation121PageModule {}
