import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertydetailsPageRoutingModule } from './propertydetails-routing.module';

import { PropertydetailsPage } from './propertydetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertydetailsPageRoutingModule
  ],
  declarations: [PropertydetailsPage]
})
export class PropertydetailsPageModule {}
