import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilteroutputPage } from './filteroutput.page';

const routes: Routes = [
  {
    path: '',
    component: FilteroutputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilteroutputPageRoutingModule {}
