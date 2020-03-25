import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Geolocation112PageRoutingModule } from './geolocation112-routing.module';

import { Geolocation112Page } from './geolocation112.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Geolocation112PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Geolocation112Page]
})
export class Geolocation112PageModule {}
