import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ImagesPageRoutingModule } from './images-routing.module';
import { ImagesPage } from './images.page';
let ImagesPageModule = class ImagesPageModule {
};
ImagesPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ImagesPageRoutingModule
        ],
        declarations: [ImagesPage]
    })
], ImagesPageModule);
export { ImagesPageModule };
//# sourceMappingURL=images.module.js.map