import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Geolocation113Page } from './geolocation113.page';

const routes: Routes = [
  {
    path: '',
    component: Geolocation113Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Geolocation113PageRoutingModule {}
