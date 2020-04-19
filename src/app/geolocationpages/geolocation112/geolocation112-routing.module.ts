import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Geolocation112Page } from './geolocation112.page';

const routes: Routes = [
  {
    path: '',
    component: Geolocation112Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Geolocation112PageRoutingModule {}
