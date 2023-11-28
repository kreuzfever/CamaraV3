import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TomarcapturaPageRoutingModule } from './tomarcaptura-routing.module';

import { TomarcapturaPage } from './tomarcaptura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TomarcapturaPageRoutingModule
  ],
  declarations: [TomarcapturaPage]
})
export class TomarcapturaPageModule {}
