import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Geolocation121Page } from './geolocation121.page';

const routes: Routes = [
  {
    path: '',
    component: Geolocation121Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Geolocation121PageRoutingModule {}
