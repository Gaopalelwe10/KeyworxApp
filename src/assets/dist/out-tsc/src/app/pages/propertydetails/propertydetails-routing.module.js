import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PropertydetailsPage } from './propertydetails.page';
const routes = [
    {
        path: '',
        component: PropertydetailsPage
    }
];
let PropertydetailsPageRoutingModule = class PropertydetailsPageRoutingModule {
};
PropertydetailsPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PropertydetailsPageRoutingModule);
export { PropertydetailsPageRoutingModule };
//# sourceMappingURL=propertydetails-routing.module.js.map