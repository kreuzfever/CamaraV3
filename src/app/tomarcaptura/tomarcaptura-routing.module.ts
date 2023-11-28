import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TomarcapturaPage } from './tomarcaptura.page';

const routes: Routes = [
  {
    path: '',
    component: TomarcapturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TomarcapturaPageRoutingModule {}
