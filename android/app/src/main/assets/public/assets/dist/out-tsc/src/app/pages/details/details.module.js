import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetailsPageRoutingModule } from './details-routing.module';
import { DetailsPage } from './details.page';
let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            DetailsPageRoutingModule
        ],
        declarations: [DetailsPage]
    })
], DetailsPageModule);
export { DetailsPageModule };
//# sourceMappingURL=details.module.js.map