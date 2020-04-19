import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Geolocation222Page } from './geolocation222.page';

const routes: Routes = [
  {
    path: '',
    component: Geolocation222Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Geolocation222PageRoutingModule {}
