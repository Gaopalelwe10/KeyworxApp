(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-filter-category-filter-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filter-category/filter-category.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filter-category/filter-category.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\r\n    <ion-toolbar>\r\n        <!-- <ion-buttons (click)=\"cancel()\" slot=\"start\">\r\n          Cancel\r\n      </ion-buttons> -->\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"Cancel\" icon=\"\" color=\"primary\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-button color=\"primary\" slot=\"end\" (click)=\"filter()\" class=\"lastbutton\">Done</ion-button>\r\n\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n        <ion-searchbar (ionInput)=\"search($event)\" [(ngModel)]=\"selectedAddress\" placeholder=\"Address\"></ion-searchbar>\r\n\r\n        <!-- <ion-input type=\"text\" formControlName=\"Address\" (ionInput)=\"search($event)\" [value]=\"selectedAddress\" clearInput></ion-input> -->\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list position=\"floating\" style=\"position: absolute; max-width: 100%; min-width: 100%; z-index: 999; \">\r\n        <!-- <ion-item *ngFor=\"let album of albums | filtro: textBuscar: 'title'\"> -->\r\n\r\n        <ion-item *ngFor=\"let address of addresses ; let i=index\" (click)=\"onSelect(address, i)\">\r\n            <ion-label>{{ address}}</ion-label>\r\n        </ion-item>\r\n    </ion-list>\r\n    <ion-item lines=\"none\">\r\n        <ion-label>Price</ion-label>\r\n    </ion-item>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col size=\"5\">\r\n                <ion-select (ionChange)=\"onSelectChangeMin($event)\" [compareWith]=\"compareWithFnMin\" value=\"{{MyDefaultMinPriceValue}}\">\r\n                    <div *ngFor=\"let price of pricesMin\">\r\n                        <ion-select-option *ngIf=\"price.value == 0\" value=\"{{price.value}}\"> Any </ion-select-option>\r\n                        <ion-select-option *ngIf=\"price.value != 0\" value=\"{{price.value}}\"> {{ price.value | currency : 'R' : 'symbol' : '1.0-0' }} </ion-select-option>\r\n\r\n                    </div>\r\n                </ion-select>\r\n\r\n                <hr width=\"100%\" color=\"dark\">\r\n                <p style=\"text-align: center;\">min</p>\r\n\r\n            </ion-col>\r\n            <ion-col size=\"2\" text-center>\r\n\r\n                <p style=\"text-align: center;\">To</p>\r\n\r\n            </ion-col>\r\n            <ion-col size=\"5\">\r\n                <ion-select (ionChange)=\"onSelectChangeMax($event)\" [compareWith]=\"compareWithMax\" value=\"{{MyDefaultMaxPriceValue}}\">\r\n\r\n                    <div *ngFor=\"let price of pricesMax\">\r\n                        <ion-select-option *ngIf=\"price.value == 1000000000000000000\" value=\"{{price.value}}\"> Any </ion-select-option>\r\n                        <ion-select-option *ngIf=\"price.value != 1000000000000000000\" value=\"{{price.value}}\"> {{ price.value | currency : 'R' : 'symbol' : '1.0-0' }} </ion-select-option>\r\n\r\n                    </div>\r\n                </ion-select>\r\n                <hr width=\"100%\" color=\"dark\">\r\n                <p style=\"text-align: center;\">max</p>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-item lines=\"none\">\r\n        <ion-label>BEDROOMS</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n        <div *ngFor=\"let value of list\">\r\n            <ion-button *ngIf=\"value == 0\" shape=\"round\" [ngClass]=\"{'my-css-class': bedrooms === value}\" (click)=\"BedButton(value)\">Any</ion-button>\r\n            <ion-button *ngIf=\"value != 0\" shape=\"round\" [ngClass]=\"{'my-css-class': bedrooms === value}\" (click)=\"BedButton(value)\">{{value}} + </ion-button>\r\n        </div>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\">\r\n        <ion-label>BATHROOMS</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\">\r\n        <div *ngFor=\"let value of list | slice:0:5\">\r\n            <ion-button *ngIf=\"value == 0\" shape=\"round\" [ngClass]=\"{'my-css-class': bathrooms === value}\" (click)=\"BathButton(value)\">Any</ion-button>\r\n            <ion-button *ngIf=\"value != 0\" shape=\"round\" [ngClass]=\"{'my-css-class':  bathrooms === value}\" (click)=\"BathButton(value)\">{{value}} + </ion-button>\r\n        </div>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\">\r\n        <ion-label>GARAGES</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n        <div *ngFor=\"let value of list | slice:0:4\">\r\n            <ion-button *ngIf=\"value == 0\" shape=\"round\" [ngClass]=\"{'my-css-class': garages === value}\" (click)=\"GARAGEButton(null)\">Any</ion-button>\r\n            <ion-button *ngIf=\"value != 0\" shape=\"round\" [ngClass]=\"{'my-css-class':  garages === value}\" (click)=\"GARAGEButton(value)\">{{value}} + </ion-button>\r\n        </div>\r\n        <!-- <ion-button shape=\"round\" class=\"like\" [class.liked]=\"garages == null\" (click)=\"GARAGEButton($event,null)\" value=\"1\">Any</ion-button>\r\n      <ion-button shape=\"round\" (click)=\"GARAGEButton($event,'1')\" value=\"1\">1+</ion-button>\r\n      <ion-button shape=\"round\" (click)=\"GARAGEButton($event,'2')\" value=\"2\">2+</ion-button>\r\n      <ion-button shape=\"round\" (click)=\"GARAGEButton($event,'3')\" value=\"3\">3+</ion-button>\r\n      <ion-button shape=\"round\" (click)=\"GARAGEButton($event,'4')\" value=\"4\">4+</ion-button> -->\r\n    </ion-item>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/filter-category/filter-category-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/filter-category/filter-category-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: FilterCategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCategoryPageRoutingModule", function() { return FilterCategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _filter_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-category.page */ "./src/app/pages/filter-category/filter-category.page.ts");




var routes = [
    {
        path: '',
        component: _filter_category_page__WEBPACK_IMPORTED_MODULE_3__["FilterCategoryPage"]
    }
];
var FilterCategoryPageRoutingModule = /** @class */ (function () {
    function FilterCategoryPageRoutingModule() {
    }
    FilterCategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FilterCategoryPageRoutingModule);
    return FilterCategoryPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/filter-category/filter-category.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/filter-category/filter-category.module.ts ***!
  \*****************************************************************/
/*! exports provided: FilterCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCategoryPageModule", function() { return FilterCategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _filter_category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter-category-routing.module */ "./src/app/pages/filter-category/filter-category-routing.module.ts");
/* harmony import */ var _filter_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter-category.page */ "./src/app/pages/filter-category/filter-category.page.ts");







var FilterCategoryPageModule = /** @class */ (function () {
    function FilterCategoryPageModule() {
    }
    FilterCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _filter_category_routing_module__WEBPACK_IMPORTED_MODULE_5__["FilterCategoryPageRoutingModule"]
            ],
            declarations: [_filter_category_page__WEBPACK_IMPORTED_MODULE_6__["FilterCategoryPage"]]
        })
    ], FilterCategoryPageModule);
    return FilterCategoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/filter-category/filter-category.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/filter-category/filter-category.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolber {\n  --background: transparent !important;\n}\n\nion-item ion-button {\n  padding-right: 5px;\n  height: 50px;\n}\n\n.lastbutton {\n  padding-right: 10px;\n}\n\nion-button.active {\n  --background: #a02b2d !important;\n  --color: #ffffff !important;\n  --color-activated: #ffffff !important;\n}\n\n.my-css-class {\n  --background: #a02b2d !important;\n  --color: #ffffff !important;\n  --color-activated: #ffffff !important;\n}\n\n:host ion-item ion-button {\n  --background-activated: #ffffff;\n  --box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 9), 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.4);\n}\n\n:host ion-item ion-button {\n  --background: #ffffff;\n  --background-focused: #ffffff;\n  --color-activated: #ffffff;\n  --color: black;\n  --color-focused: #ffffff;\n}\n\nhr {\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmlsdGVyLWNhdGVnb3J5L0M6XFxVc2Vyc1xcQ29kZVRyaWJlXFxEZXNrdG9wXFxDb2RlVHJpYmVcXGlvbmljXFxLZXl3b3J4QXBwL3NyY1xcYXBwXFxwYWdlc1xcZmlsdGVyLWNhdGVnb3J5XFxmaWx0ZXItY2F0ZWdvcnkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9maWx0ZXItY2F0ZWdvcnkvZmlsdGVyLWNhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0FDQ0o7O0FER0k7RUFDRSxrQkFBQTtFQUVBLFlBQUE7QUNETjs7QURPRTtFQUNFLG1CQUFBO0FDSko7O0FETUU7RUFFRSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7QUNKSjs7QURNRTtFQUNJLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtBQ0hOOztBRE9NO0VBQ0UsK0JBQUE7RUFJRSw2R0FBQTtBQ1BWOztBRFNNO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FDUFI7O0FEWUU7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQ1ROIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmlsdGVyLWNhdGVnb3J5L2ZpbHRlci1jYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJlciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pdGVtIHtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgIC8vIHdpZHRoOiA1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIC8vIHdpZHRoOiAxNTBweDtcclxuICAgICAgLy8gaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAvLyAtLWJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5sYXN0YnV0dG9uIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIGlvbi1idXR0b24uYWN0aXZlIHtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNhMDJiMmQgIWltcG9ydGFudDtcclxuICAgIC0tY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5teS1jc3MtY2xhc3Mge1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICNhMDJiMmQgIWltcG9ydGFudDtcclxuICAgICAgLS1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAtLWNvbG9yLWFjdGl2YXRlZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCB7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmZmZmY7XHJcbiAgICAgIC8vICAgLS1ib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMyksXHJcbiAgICAgIC8vICAgICAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCk7XHJcbiAgXHJcbiAgICAgICAgICAtLWJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgOSksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZmZmZjtcclxuICAgICAgICAtLWNvbG9yLWFjdGl2YXRlZDogI2ZmZmZmZjtcclxuICAgICAgICAtLWNvbG9yOiBibGFjaztcclxuICAgICAgICAtLWNvbG9yLWZvY3VzZWQ6ICNmZmZmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaHJ7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICB9IiwiaW9uLXRvb2xiZXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIGlvbi1idXR0b24ge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmxhc3RidXR0b24ge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG5pb24tYnV0dG9uLmFjdGl2ZSB7XG4gIC0tYmFja2dyb3VuZDogI2EwMmIyZCAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5teS1jc3MtY2xhc3Mge1xuICAtLWJhY2tncm91bmQ6ICNhMDJiMmQgIWltcG9ydGFudDtcbiAgLS1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAtLWNvbG9yLWFjdGl2YXRlZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCBpb24taXRlbSBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZmZmZjtcbiAgLS1ib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDkpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbjpob3N0IGlvbi1pdGVtIGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmZmZmO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogI2ZmZmZmZjtcbiAgLS1jb2xvcjogYmxhY2s7XG4gIC0tY29sb3ItZm9jdXNlZDogI2ZmZmZmZjtcbn1cblxuaHIge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/filter-category/filter-category.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/filter-category/filter-category.page.ts ***!
  \***************************************************************/
/*! exports provided: FilterCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCategoryPage", function() { return FilterCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var src_app_services_mapbox_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/mapbox.service */ "./src/app/services/mapbox.service.ts");






var FilterCategoryPage = /** @class */ (function () {
    function FilterCategoryPage(router, categoryService, navC, mapboxService) {
        this.router = router;
        this.categoryService = categoryService;
        this.navC = navC;
        this.mapboxService = mapboxService;
        this.SeachLocation = '';
        this.min = 100000;
        this.category = "sale";
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
    FilterCategoryPage.prototype.ngOnInit = function () {
        // this.clickedButton(event, 1)
        this.MyDefaultMinPriceValue = String(this.categoryService.min);
        this.compareWithMin = this.compareWithFnMin;
        this.SelectedMinPriceValue = this.MyDefaultMinPriceValue;
        this.MyDefaultMaxPriceValue = String(this.categoryService.max);
        this.compareWithMax = this.compareWithFnMax;
        this.SelectedMaxPriceValue = this.MyDefaultMaxPriceValue;
    };
    FilterCategoryPage.prototype.getFilterValues = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // const { value }: any = await Storage.get({ key: 'Bed' });
                // this.SeachLocation = this.categoryService.searchL
                this.selectedAddress = this.categoryService.searchL;
                this.bedrooms = Number(this.categoryService.bed);
                this.bathrooms = Number(this.categoryService.bath);
                this.garages = Number(this.categoryService.garage);
                console.log('Bed ' + this.bedrooms);
                console.log('Bath ' + this.bathrooms);
                console.log('Garage ' + this.garages);
                return [2 /*return*/];
            });
        });
    };
    FilterCategoryPage.prototype.cancel = function () {
        this.router.navigateByUrl("tabs/home");
    };
    FilterCategoryPage.prototype.search = function (event) {
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
    FilterCategoryPage.prototype.onSelect = function (address, i) {
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
    FilterCategoryPage.prototype.BedButton = function (value1) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.bedrooms = Number(value1);
                this.categoryService.bed = this.bedrooms;
                return [2 /*return*/];
            });
        });
    };
    FilterCategoryPage.prototype.BathButton = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.bathrooms = Number(value);
                this.categoryService.bath = this.bathrooms;
                return [2 /*return*/];
            });
        });
    };
    FilterCategoryPage.prototype.GARAGEButton = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.garages = Number(value);
                this.categoryService.garage = this.garages;
                return [2 /*return*/];
            });
        });
    };
    FilterCategoryPage.prototype.compareWithFnMin = function (o1, o2) {
        return o1 === o2;
    };
    ;
    FilterCategoryPage.prototype.compareWithFnMax = function (o1, o2) {
        return o1 === o2;
    };
    ;
    FilterCategoryPage.prototype.onSelectChangeMin = function (selectedValue) {
        this.SelectedMinPriceValue = selectedValue.detail.value;
        console.log('minv' + this.SelectedMinPriceValue);
        this.categoryService.min = this.SelectedMinPriceValue;
    };
    FilterCategoryPage.prototype.onSelectChangeMax = function (selectedValue) {
        this.SelectedMaxPriceValue = selectedValue.detail.value;
        console.log('maxv' + this.SelectedMaxPriceValue);
        this.categoryService.max = this.SelectedMaxPriceValue;
    };
    FilterCategoryPage.prototype.filter = function () {
        var bedroomsValues;
        var bathroomsValues;
        var garagesValues;
        this.min = Number(this.SelectedMinPriceValue);
        this.max = Number(this.SelectedMaxPriceValue);
        this.categoryService.searchL = this.selectedAddress;
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
        this.categoryService.filterBySizeCategory(this.category, bedroomsValues, bathroomsValues, garagesValues, this.min, this.max);
        this.router.navigateByUrl('category');
    };
    FilterCategoryPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: src_app_services_mapbox_service__WEBPACK_IMPORTED_MODULE_5__["MapboxService"] }
    ]; };
    FilterCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filter-category',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./filter-category.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filter-category/filter-category.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./filter-category.page.scss */ "./src/app/pages/filter-category/filter-category.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            src_app_services_mapbox_service__WEBPACK_IMPORTED_MODULE_5__["MapboxService"]])
    ], FilterCategoryPage);
    return FilterCategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-filter-category-filter-category-module.js.map