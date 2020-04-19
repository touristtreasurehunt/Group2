import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Geolocation111PageRoutingModule } from './geolocation111-routing.module';

import { Geolocation111Page } from './geolocation111.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Geolocation111PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Geolocation111Page]
})
export class Geolocation111PageModule {}
