import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Geolocation122Page } from './geolocation122.page';

const routes: Routes = [
  {
    path: '',
    component: Geolocation122Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Geolocation122PageRoutingModule {}
