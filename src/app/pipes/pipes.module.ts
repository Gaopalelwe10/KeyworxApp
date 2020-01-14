import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyFilterPipePipe } from './property-filter-pipe.pipe';



@NgModule({
  declarations: [PropertyFilterPipePipe],
  exports:[PropertyFilterPipePipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
