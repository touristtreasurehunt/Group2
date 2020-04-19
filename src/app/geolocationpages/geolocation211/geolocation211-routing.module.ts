import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Geolocation211Page } from './geolocation211.page';

const routes: Routes = [
  {
    path: '',
    component: Geolocation211Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Geolocation211PageRoutingModule {}
