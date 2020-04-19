import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rute211PageRoutingModule } from './rute211-routing.module';

import { Rute211Page } from './rute211.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rute211PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Rute211Page]
})
export class Rute211PageModule {}
