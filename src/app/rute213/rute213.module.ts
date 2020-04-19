import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rute213PageRoutingModule } from './rute213-routing.module';

import { Rute213Page } from './rute213.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rute213PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Rute213Page]
})
export class Rute213PageModule {}
