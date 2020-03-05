import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rute122Page } from './rute122.page';

const routes: Routes = [
  {
    path: '',
    component: Rute122Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rute122PageRoutingModule {}
