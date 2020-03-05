import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rute211Page } from './rute211.page';

const routes: Routes = [
  {
    path: '',
    component: Rute211Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rute211PageRoutingModule {}
