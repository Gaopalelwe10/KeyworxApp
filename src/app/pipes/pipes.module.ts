import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyFilterPipePipe } from './property-filter-pipe.pipe';
import { LocationFiterPipePipe } from './location-fiter-pipe.pipe';
import { CategoryFilterPipePipe } from './category-filter-pipe.pipe';



@NgModule({
  declarations: [PropertyFilterPipePipe, LocationFiterPipePipe, CategoryFilterPipePipe],
  exports:[PropertyFilterPipePipe, LocationFiterPipePipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
