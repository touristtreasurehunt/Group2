import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Geolocation211PageRoutingModule } from './geolocation211-routing.module';

import { Geolocation211Page } from './geolocation211.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Geolocation211PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Geolocation211Page]
})
export class Geolocation211PageModule {}
