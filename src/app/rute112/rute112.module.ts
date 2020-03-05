import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rute112PageRoutingModule } from './rute112-routing.module';

import { Rute112Page } from './rute112.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rute112PageRoutingModule
  ],
  declarations: [Rute112Page]
})
export class Rute112PageModule {}
