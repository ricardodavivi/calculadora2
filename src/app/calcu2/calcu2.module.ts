import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Calcu2PageRoutingModule } from './calcu2-routing.module';

import { Calcu2Page } from './calcu2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Calcu2PageRoutingModule
  ],
  declarations: [Calcu2Page]
})
export class Calcu2PageModule {}
