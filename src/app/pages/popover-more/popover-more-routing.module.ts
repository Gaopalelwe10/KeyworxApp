import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverMorePage } from './popover-more.page';

const routes: Routes = [
  {
    path: '',
    component: PopoverMorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverMorePageRoutingModule {}
