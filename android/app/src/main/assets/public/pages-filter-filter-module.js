(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-filter-filter-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filter/filter.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filter/filter.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\r\n    <ion-toolbar>\r\n        <!-- <ion-buttons (click)=\"cancel()\" slot=\"start\">\r\n            Cancel\r\n        </ion-buttons> -->\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"Cancel\" icon=\"\" color=\"primary\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-button color=\"primary\" slot=\"end\" (click)=\"filter()\" class=\"lastbutton\">Done</ion-button>\r\n\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n        <ion-searchbar (ionInput)=\"search($event)\" [(ngModel)]=\"selectedAddress\" placeholder=\"Address\"></ion-searchbar>\r\n\r\n        <!-- <ion-input type=\"text\" formControlName=\"Address\" (ionInput)=\"search($event)\" [value]=\"selectedAddress\" clearInput></ion-input> -->\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <!-- <div style=\"position: absolute; max-width: 90%; min-width: 90%; z-index: 999; \" class=\"search\">\r\n        <ion-list lines=\"none\" *ngIf=\"addresses.length > 0\" color=\"lightb\" style=\"background: var(--ion-item-background,var(--ion-background-color, black)); \">\r\n\r\n            <ion-item *ngFor=\"let address of addresses ; let i=index\" (click)=\"onSelect(address, i)\" color=\"dark\">\r\n\r\n                <ion-icon name=\"pin\"></ion-icon>\r\n                <p class=\"searchv\">{{ address}}</p>\r\n            </ion-item>\r\n\r\n        </ion-list>\r\n\r\n    </div> -->\r\n\r\n\r\n    <ion-list position=\"floating\" style=\"position: absolute; max-width: 100%; min-width: 100%; z-index: 999; \">\r\n        <!-- <ion-item *ngFor=\"let album of albums | filtro: textBuscar: 'title'\"> -->\r\n\r\n        <ion-item *ngFor=\"let address of addresses ; let i=index\" (click)=\"onSelect(address, i)\">\r\n            <ion-label>{{ address}}</ion-label>\r\n        </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-item lines=\"none\">\r\n        <ion-label>Price</ion-label>\r\n    </ion-item>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col size=\"5\">\r\n                <ion-select (ionChange)=\"onSelectChangeMin($event)\" [compareWith]=\"compareWithFnMin\" value=\"{{MyDefaultMinPriceValue}}\">\r\n                    <div *ngFor=\"let price of pricesMin\">\r\n                        <ion-select-option *ngIf=\"price.value == 0\" value=\"{{price.value}}\"> Any </ion-select-option>\r\n                        <ion-select-option *ngIf=\"price.value != 0\" value=\"{{price.value}}\"> {{ price.value | currency : 'R' : 'symbol' : '1.0-0' }} </ion-select-option>\r\n\r\n                    </div>\r\n                </ion-select>\r\n\r\n                <hr width=\"100%\" color=\"dark\">\r\n                <p style=\"text-align: center;\">min</p>\r\n\r\n            </ion-col>\r\n            <ion-col size=\"2\" text-center>\r\n\r\n                <p style=\"text-align: center;\">To</p>\r\n\r\n            </ion-col>\r\n            <ion-col size=\"5\">\r\n                <ion-select (ionChange)=\"onSelectChangeMax($event)\" [compareWith]=\"compareWithMax\" value=\"{{MyDefaultMaxPriceValue}}\">\r\n\r\n                    <div *ngFor=\"let price of pricesMax\">\r\n                        <ion-select-option *ngIf=\"price.value == 1000000000000000000\" value=\"{{price.value}}\"> Any </ion-select-option>\r\n                        <ion-select-option *ngIf=\"price.value != 1000000000000000000\" value=\"{{price.value}}\"> {{ price.value | currency : 'R' : 'symbol' : '1.0-0' }} </ion-select-option>\r\n\r\n                    </div>\r\n                </ion-select>\r\n                <hr width=\"100%\" color=\"dark\">\r\n                <p style=\"text-align: center;\">max</p>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-item lines=\"none\">\r\n        <ion-label>BEDROOMS</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n        <div *ngFor=\"let value of list\">\r\n            <ion-button *ngIf=\"value == 0\" shape=\"round\" [ngClass]=\"{'my-css-class': bedrooms === value}\" (click)=\"BedButton(value)\">Any</ion-button>\r\n            <ion-button *ngIf=\"value != 0\" shape=\"round\" [ngClass]=\"{'my-css-class': bedrooms === value}\" (click)=\"BedButton(value)\">{{value}} + </ion-button>\r\n\r\n            <!-- <ion-row>\r\n                <ion-col *ngFor=\"let value of list\" size=\"2\">\r\n                    <ion-button *ngIf=\"value == 0\" shape=\"round\" [ngClass]=\"{'my-css-class': bedrooms === value}\" (click)=\"BedButton(value)\">Any</ion-button>\r\n                    <ion-button *ngIf=\"value != 0\" shape=\"round\" [ngClass]=\"{'my-css-class': bedrooms === value}\" (click)=\"BedButton(value)\">{{value}} + </ion-button>\r\n                </ion-col>\r\n            </ion-row> -->\r\n        </div>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\">\r\n        <ion-label>BATHROOMS</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\">\r\n        <div *ngFor=\"let value of list | slice:0:5\">\r\n            <ion-button *ngIf=\"value == 0\" shape=\"round\" [ngClass]=\"{'my-css-class': bathrooms === value}\" (click)=\"BathButton(value)\">Any</ion-button>\r\n            <ion-button *ngIf=\"value != 0\" shape=\"round\" [ngClass]=\"{'my-css-class':  bathrooms === value}\" (click)=\"BathButton(value)\">{{value}} + </ion-button>\r\n        </div>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\">\r\n        <ion-label>GARAGES</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n        <div *ngFor=\"let value of list |slice:0:4\">\r\n            <ion-button *ngIf=\"value == 0\" shape=\"round\" [ngClass]=\"{'my-css-class': garages === value}\" (click)=\"GARAGEButton(null)\">Any</ion-button>\r\n            <ion-button *ngIf=\"value != 0\" shape=\"round\" [ngClass]=\"{'my-css-class':  garages === value}\" (click)=\"GARAGEButton(value)\">{{value}} + </ion-button>\r\n        </div>\r\n        <!-- <ion-button shape=\"round\" class=\"like\" [class.liked]=\"garages == null\" (click)=\"GARAGEButton($event,null)\" value=\"1\">Any</ion-button>\r\n        <ion-button shape=\"round\" (click)=\"GARAGEButton($event,'1')\" value=\"1\">1+</ion-button>\r\n        <ion-button shape=\"round\" (click)=\"GARAGEButton($event,'2')\" value=\"2\">2+</ion-button>\r\n        <ion-button shape=\"round\" (click)=\"GARAGEButton($event,'3')\" value=\"3\">3+</ion-button>\r\n        <ion-button shape=\"round\" (click)=\"GARAGEButton($event,'4')\" value=\"4\">4+</ion-button> -->\r\n    </ion-item>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/filter/filter-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/filter/filter-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: FilterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPageRoutingModule", function() { return FilterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _filter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter.page */ "./src/app/pages/filter/filter.page.ts");




var routes = [
    {
        path: '',
        component: _filter_page__WEBPACK_IMPORTED_MODULE_3__["FilterPage"]
    }
];
var FilterPageRoutingModule = /** @class */ (function () {
    function FilterPageRoutingModule() {
    }
    FilterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FilterPageRoutingModule);
    return FilterPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/filter/filter.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/filter/filter.module.ts ***!
  \***********************************************/
/*! exports provided: FilterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPageModule", function() { return FilterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _filter_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter-routing.module */ "./src/app/pages/filter/filter-routing.module.ts");
/* harmony import */ var _filter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter.page */ "./src/app/pages/filter/filter.page.ts");







var FilterPageModule = /** @class */ (function () {
    function FilterPageModule() {
    }
    FilterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _filter_routing_module__WEBPACK_IMPORTED_MODULE_5__["FilterPageRoutingModule"]
            ],
            declarations: [_filter_page__WEBPACK_IMPORTED_MODULE_6__["FilterPage"]]
        })
    ], FilterPageModule);
    return FilterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/filter/filter.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/filter/filter.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolber {\n  --background: transparent !important;\n}\n\nion-item ion-button {\n  padding-right: 5px;\n  height: 50px;\n}\n\n.lastbutton {\n  padding-right: 10px;\n}\n\nion-button.active {\n  --background: #a02b2d !important;\n  --color: #ffffff !important;\n  --color-activated: #ffffff !important;\n}\n\n.my-css-class {\n  --background: #a02b2d !important;\n  --color: #ffffff !important;\n  --color-activated: #ffffff !important;\n}\n\n:host ion-item ion-button {\n  --background-activated: #ffffff;\n  --box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 9), 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.4);\n}\n\n:host ion-item ion-button {\n  --background: #ffffff;\n  --background-focused: #ffffff;\n  --color-activated: #ffffff;\n  --color: black;\n  --color-focused: #ffffff;\n}\n\nhr {\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmlsdGVyL0M6XFxVc2Vyc1xcQ29kZVRyaWJlXFxEZXNrdG9wXFxDb2RlVHJpYmVcXGlvbmljXFxLZXl3b3J4QXBwL3NyY1xcYXBwXFxwYWdlc1xcZmlsdGVyXFxmaWx0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9maWx0ZXIvZmlsdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FDQ0Y7O0FER0U7RUFDRSxrQkFBQTtFQUVBLFlBQUE7QUNESjs7QURPQTtFQUNFLG1CQUFBO0FDSkY7O0FETUE7RUFFRSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7QUNKRjs7QURNQTtFQUNJLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtBQ0hKOztBRE9JO0VBQ0UsK0JBQUE7RUFJRSw2R0FBQTtBQ1BSOztBRFNJO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FDUE47O0FEWUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQ1RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmlsdGVyL2ZpbHRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJlciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAvLyB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIC8vIHdpZHRoOiAxNTBweDtcclxuICAgIC8vIGhlaWdodDogNDBweDtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLmxhc3RidXR0b24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuaW9uLWJ1dHRvbi5hY3RpdmUge1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjYTAyYjJkICFpbXBvcnRhbnQ7XHJcbiAgLS1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLm15LWNzcy1jbGFzcyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNhMDJiMmQgIWltcG9ydGFudDtcclxuICAgIC0tY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3Qge1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmZmZmO1xyXG4gICAgLy8gICAtLWJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4zKSxcclxuICAgIC8vICAgICAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCk7XHJcblxyXG4gICAgICAgIC0tYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCA5KSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZmZmZjtcclxuICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmZmZmY7XHJcbiAgICAgIC0tY29sb3I6IGJsYWNrO1xyXG4gICAgICAtLWNvbG9yLWZvY3VzZWQ6ICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5ocntcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn0iLCJpb24tdG9vbGJlciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0gaW9uLWJ1dHRvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ubGFzdGJ1dHRvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbmlvbi1idXR0b24uYWN0aXZlIHtcbiAgLS1iYWNrZ3JvdW5kOiAjYTAyYjJkICFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLm15LWNzcy1jbGFzcyB7XG4gIC0tYmFja2dyb3VuZDogI2EwMmIyZCAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IGlvbi1pdGVtIGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAtLWJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgOSksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuOmhvc3QgaW9uLWl0ZW0gaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmZmZmY7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAtLWNvbG9yOiBibGFjaztcbiAgLS1jb2xvci1mb2N1c2VkOiAjZmZmZmZmO1xufVxuXG5ociB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/filter/filter.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/filter/filter.page.ts ***!
  \*********************************************/
/*! exports provided: FilterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPage", function() { return FilterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/property.service */ "./src/app/services/property.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_mapbox_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/mapbox.service */ "./src/app/services/mapbox.service.ts");







var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Storage;
var FilterPage = /** @class */ (function () {
    function FilterPage(router, propertyService, navC, mapboxService) {
        this.router = router;
        this.propertyService = propertyService;
        this.navC = navC;
        this.mapboxService = mapboxService;
        this.SeachLocation = '';
        this.min = 100000;
        this.list = [0, 1, 2, 3, 4, 5];
        // prices = [100000, 150000, 200000, 250000, 300000, 350000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000, 4000000, 4500000, 5000000, 6000000, 7000000, 8000000, 10000000, 15000000]
        this.pricesMin = [{ id: 0, value: 0 }, { id: 1, value: 100000 }, { id: 2, value: 150000 }, { id: 3, value: 200000 }, { id: 4, value: 250000 }, { id: 5, value: 300000 }, { id: 6, value: 350000 }, { id: 7, value: 400000 }, { id: 8, value: 500000 }, { id: 9, value: 600000 }, { id: 10, value: 700000 }, { id: 11, value: 800000 }, { id: 12, value: 900000 }, { id: 13, value: 1000000 }, { id: 14, value: 1500000 }, { id: 15, value: 2000000 }, { id: 16, value: 2500000 }, { id: 17, value: 3000000 }, { id: 18, value: 4000000 }, { id: 19, value: 4500000 }, { id: 20, value: 5000000 }, { id: 21, value: 5500000 }, { id: 22, value: 6000000 }, { id: 23, value: 7000000 }, { id: 24, value: 8000000 }, { id: 25, value: 9000000 }, { id: 26, value: 10000000 }, { id: 27, value: 15000000 }];
        this.pricesMax = [{ id: 0, value: 1000000000000000000 }, { id: 1, value: 100000 }, { id: 2, value: 150000 }, { id: 3, value: 200000 }, { id: 4, value: 250000 }, { id: 5, value: 300000 }, { id: 6, value: 350000 }, { id: 7, value: 400000 }, { id: 8, value: 500000 }, { id: 9, value: 600000 }, { id: 10, value: 700000 }, { id: 11, value: 800000 }, { id: 12, value: 900000 }, { id: 13, value: 1000000 }, { id: 14, value: 1500000 }, { id: 15, value: 2000000 }, { id: 16, value: 2500000 }, { id: 17, value: 3000000 }, { id: 18, value: 4000000 }, { id: 19, value: 4500000 }, { id: 20, value: 5000000 }, { id: 21, value: 5500000 }, { id: 22, value: 6000000 }, { id: 23, value: 7000000 }, { id: 24, value: 8000000 }, { id: 25, value: 9000000 }, { id: 26, value: 10000000 }, { id: 27, value: 15000000 }];
        this.addresses = [];
        this.coodinateses = [];
        this.selectedAddress = null;
        this.selectedcoodinates = null;
        this.getFilterValues();
    }
    FilterPage.prototype.ngOnInit = function () {
        // this.clickedButton(event, 1)
        this.MyDefaultMinPriceValue = String(this.propertyService.min);
        this.compareWithMin = this.compareWithFnMin;
        this.SelectedMinPriceValue = this.MyDefaultMinPriceValue;
        this.MyDefaultMaxPriceValue = String(this.propertyService.max);
        this.compareWithMax = this.compareWithFnMax;
        this.SelectedMaxPriceValue = this.MyDefaultMaxPriceValue;
    };
    FilterPage.prototype.getFilterValues = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // const { value }: any = await Storage.get({ key: 'Bed' });
                this.selectedAddress = this.propertyService.searchL;
                this.bedrooms = Number(this.propertyService.bed);
                this.bathrooms = Number(this.propertyService.bath);
                this.garages = Number(this.propertyService.garage);
                console.log('Bed ' + this.bedrooms);
                console.log('Bath ' + this.bathrooms);
                console.log('Garage ' + this.garages);
                return [2 /*return*/];
            });
        });
    };
    FilterPage.prototype.cancel = function () {
        this.router.navigateByUrl("tabs/home");
    };
    FilterPage.prototype.search = function (event) {
        var _this = this;
        var searchTerm = event.target.value.toLowerCase();
        if (searchTerm && searchTerm.length > 0) {
            this.mapboxService.search_word(searchTerm)
                .subscribe(function (features) {
                _this.addresses = features.map(function (feat) { return feat.place_name; });
                _this.coodinateses = features.map(function (feat) { return feat.geometry; });
                _this.listMabox = features;
                _this.listMaboxText = features.map(function (feat) { return feat.text; });
                console.log(_this.listMabox);
            });
        }
        else {
            this.addresses = [];
        }
    };
    FilterPage.prototype.onSelect = function (address, i) {
        //  selectedcoodinates=
        console.log("lng:" + JSON.stringify(this.listMabox[i].geometry.coordinates[0]));
        console.log("lat:" + JSON.stringify(this.listMabox[i].geometry.coordinates[1]));
        this.lng = JSON.stringify(this.listMabox[i].geometry.coordinates[0]);
        this.lat = JSON.stringify(this.listMabox[i].geometry.coordinates[1]);
        console.log("index =" + i);
        console.log(address);
        console.log(this.listMabox[i].text);
        this.selectedAddress = this.listMabox[i].text;
        this.addresses = [];
    };
    FilterPage.prototype.BedButton = function (value1) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.bedrooms = Number(value1);
                this.propertyService.bed = this.bedrooms;
                return [2 /*return*/];
            });
        });
    };
    FilterPage.prototype.BathButton = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.bathrooms = Number(value);
                this.propertyService.bath = this.bathrooms;
                return [2 /*return*/];
            });
        });
    };
    FilterPage.prototype.GARAGEButton = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.garages = Number(value);
                this.propertyService.garage = this.garages;
                return [2 /*return*/];
            });
        });
    };
    FilterPage.prototype.compareWithFnMin = function (o1, o2) {
        return o1 === o2;
    };
    ;
    FilterPage.prototype.compareWithFnMax = function (o1, o2) {
        return o1 === o2;
    };
    ;
    FilterPage.prototype.onSelectChangeMin = function (selectedValue) {
        this.SelectedMinPriceValue = selectedValue.detail.value;
        console.log('minv' + this.SelectedMinPriceValue);
        this.propertyService.min = this.SelectedMinPriceValue;
    };
    FilterPage.prototype.onSelectChangeMax = function (selectedValue) {
        this.SelectedMaxPriceValue = selectedValue.detail.value;
        console.log('maxv' + this.SelectedMaxPriceValue);
        this.propertyService.max = this.SelectedMaxPriceValue;
    };
    FilterPage.prototype.filter = function () {
        var bedroomsValues;
        var bathroomsValues;
        var garagesValues;
        this.min = Number(this.SelectedMinPriceValue);
        this.max = Number(this.SelectedMaxPriceValue);
        this.propertyService.searchL = this.selectedAddress;
        console.log("min " + this.min);
        console.log("max " + this.max);
        console.log("bedrooms " + this.bedrooms);
        if (this.bedrooms == 0) {
            bedroomsValues = null;
        }
        else {
            bedroomsValues = String(this.bedrooms);
        }
        if (this.bathrooms == 0) {
            bathroomsValues = null;
        }
        else {
            bathroomsValues = String(this.bathrooms);
        }
        if (this.garages == 0) {
            garagesValues = null;
        }
        else {
            garagesValues = String(this.garages);
        }
        this.propertyService.filterBySize(bedroomsValues, bathroomsValues, garagesValues, this.min, this.max);
        this.router.navigateByUrl('filteroutput');
    };
    FilterPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_3__["PropertyService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: src_app_services_mapbox_service__WEBPACK_IMPORTED_MODULE_6__["MapboxService"] }
    ]; };
    FilterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filter',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./filter.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filter/filter.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./filter.page.scss */ "./src/app/pages/filter/filter.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_property_service__WEBPACK_IMPORTED_MODULE_3__["PropertyService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            src_app_services_mapbox_service__WEBPACK_IMPORTED_MODULE_6__["MapboxService"]])
    ], FilterPage);
    return FilterPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-filter-filter-module.js.map