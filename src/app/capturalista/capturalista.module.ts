import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapturalistaPageRoutingModule } from './capturalista-routing.module';

import { CapturalistaPage } from './capturalista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapturalistaPageRoutingModule
  ],
  declarations: [CapturalistaPage]
})
export class CapturalistaPageModule {}
