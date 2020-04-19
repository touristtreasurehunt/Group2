import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Geolocation113PageRoutingModule } from './geolocation113-routing.module';

import { Geolocation113Page } from './geolocation113.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Geolocation113PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Geolocation113Page]
})
export class Geolocation113PageModule {}
