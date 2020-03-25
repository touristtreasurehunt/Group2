import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Geolocation122PageRoutingModule } from './geolocation122-routing.module';

import { Geolocation122Page } from './geolocation122.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Geolocation122PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Geolocation122Page]
})
export class Geolocation122PageModule {}
