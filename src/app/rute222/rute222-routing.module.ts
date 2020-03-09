import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rute222Page } from './rute222.page';

const routes: Routes = [
  {
    path: '',
    component: Rute222Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rute222PageRoutingModule {}
