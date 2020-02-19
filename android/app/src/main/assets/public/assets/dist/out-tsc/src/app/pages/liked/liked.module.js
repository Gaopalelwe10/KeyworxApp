import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LikedPageRoutingModule } from './liked-routing.module';
import { LikedPage } from './liked.page';
let LikedPageModule = class LikedPageModule {
};
LikedPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            LikedPageRoutingModule
        ],
        declarations: [LikedPage]
    })
], LikedPageModule);
export { LikedPageModule };
//# sourceMappingURL=liked.module.js.map