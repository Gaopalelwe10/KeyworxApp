import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilteroutputPageRoutingModule } from './filteroutput-routing.module';

import { FilteroutputPage } from './filteroutput.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    FilteroutputPageRoutingModule
  ],
  declarations: [FilteroutputPage]
})
export class FilteroutputPageModule {}
