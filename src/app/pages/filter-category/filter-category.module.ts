import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterCategoryPageRoutingModule } from './filter-category-routing.module';

import { FilterCategoryPage } from './filter-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterCategoryPageRoutingModule
  ],
  declarations: [FilterCategoryPage]
})
export class FilterCategoryPageModule {}
