import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PinkPage } from './pink.page';

const routes: Routes = [
  {
    path: '',
    component: PinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinkPageRoutingModule {}
