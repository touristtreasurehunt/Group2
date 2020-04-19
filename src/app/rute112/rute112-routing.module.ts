import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rute112Page } from './rute112.page';

const routes: Routes = [
  {
    path: '',
    component: Rute112Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rute112PageRoutingModule {}
