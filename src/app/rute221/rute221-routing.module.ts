import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rute221Page } from './rute221.page';

const routes: Routes = [
  {
    path: '',
    component: Rute221Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rute221PageRoutingModule {}
