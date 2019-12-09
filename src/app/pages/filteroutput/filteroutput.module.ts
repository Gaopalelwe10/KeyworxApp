import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilteroutputPageRoutingModule } from './filteroutput-routing.module';

import { FilteroutputPage } from './filteroutput.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilteroutputPageRoutingModule
  ],
  declarations: [FilteroutputPage]
})
export class FilteroutputPageModule {}
