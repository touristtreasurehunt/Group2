import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Geolocation221Page } from './geolocation221.page';

const routes: Routes = [
  {
    path: '',
    component: Geolocation221Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Geolocation221PageRoutingModule {}
