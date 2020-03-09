import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rute121Page } from './rute121.page';

const routes: Routes = [
  {
    path: '',
    component: Rute121Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rute121PageRoutingModule {}
