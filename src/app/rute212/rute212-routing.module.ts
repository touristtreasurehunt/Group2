import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rute212Page } from './rute212.page';

const routes: Routes = [
  {
    path: '',
    component: Rute212Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rute212PageRoutingModule {}
