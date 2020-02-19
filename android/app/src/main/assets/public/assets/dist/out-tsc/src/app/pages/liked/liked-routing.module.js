import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LikedPage } from './liked.page';
const routes = [
    {
        path: '',
        component: LikedPage
    }
];
let LikedPageRoutingModule = class LikedPageRoutingModule {
};
LikedPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], LikedPageRoutingModule);
export { LikedPageRoutingModule };
//# sourceMappingURL=liked-routing.module.js.map