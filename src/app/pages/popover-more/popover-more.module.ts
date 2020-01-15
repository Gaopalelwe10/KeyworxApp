import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverMorePageRoutingModule } from './popover-more-routing.module';

import { PopoverMorePage } from './popover-more.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverMorePageRoutingModule
  ],
  declarations: [PopoverMorePage]
})
export class PopoverMorePageModule {}
