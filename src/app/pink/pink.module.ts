import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinkPageRoutingModule } from './pink-routing.module';

import { PinkPage } from './pink.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinkPageRoutingModule
  ],
  declarations: [PinkPage]
})
export class PinkPageModule {}
