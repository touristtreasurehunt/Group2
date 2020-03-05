import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rute111PageRoutingModule } from './rute111-routing.module';

import { Rute111Page } from './rute111.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rute111PageRoutingModule
  ],
  declarations: [Rute111Page]
})
export class Rute111PageModule {}
