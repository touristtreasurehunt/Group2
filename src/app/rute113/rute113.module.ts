import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rute113PageRoutingModule } from './rute113-routing.module';

import { Rute113Page } from './rute113.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rute113PageRoutingModule
  ],
  declarations: [Rute113Page]
})
export class Rute113PageModule {}
