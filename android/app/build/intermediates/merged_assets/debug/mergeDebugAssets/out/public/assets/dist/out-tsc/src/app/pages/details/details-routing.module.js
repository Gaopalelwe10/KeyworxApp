import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailsPage } from './details.page';
const routes = [
    {
        path: '',
        component: DetailsPage
    }
];
let DetailsPageRoutingModule = class DetailsPageRoutingModule {
};
DetailsPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], DetailsPageRoutingModule);
export { DetailsPageRoutingModule };
//# sourceMappingURL=details-routing.module.js.map