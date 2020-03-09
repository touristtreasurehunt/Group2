import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rute121PageRoutingModule } from './rute121-routing.module';

import { Rute121Page } from './rute121.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rute121PageRoutingModule
  ],
  declarations: [Rute121Page]
})
export class Rute121PageModule {}
