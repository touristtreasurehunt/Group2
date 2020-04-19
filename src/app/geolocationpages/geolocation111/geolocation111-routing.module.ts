import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Geolocation111Page } from './geolocation111.page';

const routes: Routes = [
  {
    path: '',
    component: Geolocation111Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Geolocation111PageRoutingModule {}
