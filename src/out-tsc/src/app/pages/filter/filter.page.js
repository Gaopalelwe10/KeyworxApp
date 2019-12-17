import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
let FilterPage = class FilterPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    cancel() {
        this.router.navigateByUrl("tabs/home");
    }
};
FilterPage = tslib_1.__decorate([
    Component({
        selector: 'app-filter',
        templateUrl: './filter.page.html',
        styleUrls: ['./filter.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], FilterPage);
export { FilterPage };
//# sourceMappingURL=filter.page.js.map