import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rute222PageRoutingModule } from './rute222-routing.module';

import { Rute222Page } from './rute222.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rute222PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Rute222Page]
})
export class Rute222PageModule {}
