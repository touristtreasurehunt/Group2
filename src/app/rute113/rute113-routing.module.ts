import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rute113Page } from './rute113.page';

const routes: Routes = [
  {
    path: '',
    component: Rute113Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rute113PageRoutingModule {}
