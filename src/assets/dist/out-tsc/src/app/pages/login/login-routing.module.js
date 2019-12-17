import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginPage } from './login.page';
const routes = [
    {
        path: '',
        component: LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], LoginPageRoutingModule);
export { LoginPageRoutingModule };
//# sourceMappingURL=login-routing.module.js.map