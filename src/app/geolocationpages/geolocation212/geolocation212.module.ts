import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Geolocation212PageRoutingModule } from './geolocation212-routing.module';

import { Geolocation212Page } from './geolocation212.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Geolocation212PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Geolocation212Page]
})
export class Geolocation212PageModule {}
