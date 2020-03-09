import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rute223PageRoutingModule } from './rute223-routing.module';

import { Rute223Page } from './rute223.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rute223PageRoutingModule
  ],
  declarations: [Rute223Page]
})
export class Rute223PageModule {}
