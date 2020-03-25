import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Geolocation123Page } from './geolocation123.page';

const routes: Routes = [
  {
    path: '',
    component: Geolocation123Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Geolocation123PageRoutingModule {}
