import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rute123PageRoutingModule } from './rute123-routing.module';

import { Rute123Page } from './rute123.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rute123PageRoutingModule
  ],
  declarations: [Rute123Page]
})
export class Rute123PageModule {}
