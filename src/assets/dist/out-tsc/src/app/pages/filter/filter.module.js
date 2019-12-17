import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FilterPageRoutingModule } from './filter-routing.module';
import { FilterPage } from './filter.page';
let FilterPageModule = class FilterPageModule {
};
FilterPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            FilterPageRoutingModule
        ],
        declarations: [FilterPage]
    })
], FilterPageModule);
export { FilterPageModule };
//# sourceMappingURL=filter.module.js.map