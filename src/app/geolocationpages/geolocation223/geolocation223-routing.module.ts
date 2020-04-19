import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Geolocation223Page } from './geolocation223.page';

const routes: Routes = [
  {
    path: '',
    component: Geolocation223Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Geolocation223PageRoutingModule {}
