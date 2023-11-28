import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapturalistaPage } from './capturalista.page';

const routes: Routes = [
  {
    path: '',
    component: CapturalistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapturalistaPageRoutingModule {}
