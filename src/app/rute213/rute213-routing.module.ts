import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rute213Page } from './rute213.page';

const routes: Routes = [
  {
    path: '',
    component: Rute213Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rute213PageRoutingModule {}
