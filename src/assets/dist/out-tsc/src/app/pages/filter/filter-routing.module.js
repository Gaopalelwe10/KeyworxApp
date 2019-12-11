import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilterPage } from './filter.page';
const routes = [
    {
        path: '',
        component: FilterPage
    }
];
let FilterPageRoutingModule = class FilterPageRoutingModule {
};
FilterPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], FilterPageRoutingModule);
export { FilterPageRoutingModule };
//# sourceMappingURL=filter-routing.module.js.map