import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rute212PageRoutingModule } from './rute212-routing.module';

import { Rute212Page } from './rute212.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rute212PageRoutingModule
  ],
  declarations: [Rute212Page]
})
export class Rute212PageModule {}
