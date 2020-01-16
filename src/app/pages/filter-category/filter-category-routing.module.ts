import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterCategoryPage } from './filter-category.page';

const routes: Routes = [
  {
    path: '',
    component: FilterCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterCategoryPageRoutingModule {}
