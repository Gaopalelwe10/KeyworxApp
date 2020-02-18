import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterPage } from './register.page';
const routes = [
    {
        path: '',
        component: RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], RegisterPageRoutingModule);
export { RegisterPageRoutingModule };
//# sourceMappingURL=register-routing.module.js.map