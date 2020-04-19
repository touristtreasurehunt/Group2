import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Geolocation212Page } from './geolocation212.page';

const routes: Routes = [
  {
    path: '',
    component: Geolocation212Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Geolocation212PageRoutingModule {}
