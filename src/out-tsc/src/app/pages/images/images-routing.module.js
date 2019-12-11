import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImagesPage } from './images.page';
const routes = [
    {
        path: '',
        component: ImagesPage
    }
];
let ImagesPageRoutingModule = class ImagesPageRoutingModule {
};
ImagesPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ImagesPageRoutingModule);
export { ImagesPageRoutingModule };
//# sourceMappingURL=images-routing.module.js.map