import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rute111Page } from './rute111.page';

const routes: Routes = [
  {
    path: '',
    component: Rute111Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rute111PageRoutingModule {}
