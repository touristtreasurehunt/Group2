import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rute122PageRoutingModule } from './rute122-routing.module';

import { Rute122Page } from './rute122.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rute122PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Rute122Page]
})
export class Rute122PageModule {}
