import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vista2PageRoutingModule } from './vista2-routing.module';

import { Vista2Page } from './vista2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vista2PageRoutingModule
  ],
  declarations: [Vista2Page]
})
export class Vista2PageModule {}
