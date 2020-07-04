import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Calcu2Page } from './calcu2.page';

const routes: Routes = [
  {
    path: '',
    component: Calcu2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Calcu2PageRoutingModule {}
