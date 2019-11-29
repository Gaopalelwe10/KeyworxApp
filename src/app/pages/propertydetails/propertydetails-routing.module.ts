import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertydetailsPage } from './propertydetails.page';

const routes: Routes = [
  {
    path: '',
    component: PropertydetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertydetailsPageRoutingModule {}
