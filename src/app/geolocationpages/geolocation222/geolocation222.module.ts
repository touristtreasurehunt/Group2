import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Geolocation222PageRoutingModule } from './geolocation222-routing.module';

import { Geolocation222Page } from './geolocation222.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Geolocation222PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Geolocation222Page]
})
export class Geolocation222PageModule {}
