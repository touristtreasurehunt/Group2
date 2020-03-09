import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rute221PageRoutingModule } from './rute221-routing.module';

import { Rute221Page } from './rute221.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rute221PageRoutingModule
  ],
  declarations: [Rute221Page]
})
export class Rute221PageModule {}
