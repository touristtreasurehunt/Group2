import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Geolocation213Page } from './geolocation213.page';

const routes: Routes = [
  {
    path: '',
    component: Geolocation213Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Geolocation213PageRoutingModule {}
