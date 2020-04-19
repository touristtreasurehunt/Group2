import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rute223Page } from './rute223.page';

const routes: Routes = [
  {
    path: '',
    component: Rute223Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rute223PageRoutingModule {}
