import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rute123Page } from './rute123.page';

const routes: Routes = [
  {
    path: '',
    component: Rute123Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rute123PageRoutingModule {}
