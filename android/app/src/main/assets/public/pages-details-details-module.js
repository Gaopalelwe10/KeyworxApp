(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-details-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/details/details.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/details/details.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border no-shadow id=\"my-ion-header\" class=\"mystyle\">\r\n    <ion-toolbar color=\"primary\">\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <!-- <ion-title>Details</ion-title> -->\r\n\r\n        <ion-buttons slot=\"end\" class=\"action\" class=\"like\" (click)=\"react(propertyList.key, propertyList.userReaction)\" [class.liked]=\"propertyList.userReaction != null\">\r\n            <ion-icon name=\"heart\" class=\"ion-icons\"></ion-icon>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"end\" (click)=\"share()\">\r\n            <ion-icon name=\"share\"></ion-icon>\r\n        </ion-buttons>\r\n\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen [scrollEvents]=\"true\" (ionScroll)=\"myScroll($event)\">\r\n\r\n    <ion-card>\r\n\r\n        <div class=\"container\">\r\n            <img src=\"{{propertyList.mainImage}}\">\r\n            <div class=\"bottom-right\" (click)=\"view(1)\">\r\n                <i class=\"fa fa-picture-o\" aria-hidden=\"true\">\r\n                    Pictures\r\n                </i>\r\n            </div>\r\n        </div>\r\n        <!-- <ion-slides pager [options]=\"slidesOptions \">\r\n                <ion-slide>\r\n                    <img src=\"{{propertyList.mainImage}}\">\r\n                </ion-slide>\r\n                <ion-slide *ngFor=\"let pic of imageList; let i = index \">\r\n                    <img src=\"{{pic.downloadURL}}\" (click)=\"view(i)\">\r\n                </ion-slide>\r\n            </ion-slides> -->\r\n\r\n        <!-- <div class=\"content\">\r\n                <h1>View Gallery</h1>\r\n\r\n                <div (click)=\"detail(items)\">\r\n                    <div>{{items?.price | currency:'R'}} {{items?.location}}</div>\r\n\r\n                    <i class=\"fa fa-bed\" aria-hidden=\"true\">\r\n                        <span class=\"pad-value\">{{propertyList?.bedrooms}}</span>\r\n                    </i>\r\n                    <i class=\"fa fa-bath\" aria-hidden=\"true\">\r\n                        <span class=\"pad-value\"> {{propertyList?.bathrooms}}</span>\r\n                    </i>\r\n                    <i class=\"fa fa-car\" aria-hidden=\"true\">\r\n                        <span class=\"pad-value\"> {{propertyList?.garage}}</span>\r\n                    </i>\r\n                </div>\r\n            </div> -->\r\n\r\n\r\n\r\n\r\n\r\n        <ion-card-content>\r\n            <!-- <ion-slides [options]=\"slidesOptions2 \">\r\n                    <ion-slide *ngFor=\"let pic of imageList; let i = index \">\r\n                        <ion-card class=\"cat\">\r\n                            <img src=\"{{pic.downloadURL}}\" (click)=\"view(i)\">\r\n                        </ion-card>\r\n                    </ion-slide>\r\n                </ion-slides> -->\r\n            <div>\r\n                <p>{{propertyList?.price | currency:'R'}}</p>\r\n                <p> {{propertyList?.location}}</p>\r\n\r\n                <i class=\"fa fa-bed\" aria-hidden=\"true\" *ngIf=\"propertyList.bedrooms!=0\">\r\n                        <span class=\"pad-value\">{{propertyList?.bedrooms}} Bed</span>\r\n                    </i>\r\n                <i class=\"fa fa-bath\" aria-hidden=\"true\" *ngIf=\"propertyList.bathrooms!=0\">\r\n                        <span class=\"pad-value\"> {{propertyList?.bathrooms}} Bath</span>\r\n                    </i>\r\n                <i class=\"fa fa-car\" aria-hidden=\"true\" *ngIf=\"propertyList.garage!=0\">\r\n                        <span class=\"pad-value\"> {{propertyList?.garage}} Garage</span>\r\n                    </i>\r\n            </div>\r\n\r\n\r\n            <!-- <hr> -->\r\n\r\n\r\n            <!-- <p>Description : {{propertyList?.description}}</p> -->\r\n\r\n            <!-- <p>Type of Property : {{propertyList?.typeofproperty}}</p> -->\r\n\r\n\r\n        </ion-card-content>\r\n\r\n\r\n    </ion-card>\r\n\r\n\r\n    <ion-card>\r\n        <ion-card-content class=\"textArea\">\r\n            <div class=\"ion-text-start\">\r\n                <ion-textarea readonly disabled='true'>\r\n                    {{propertyList?.description}}\r\n                </ion-textarea>\r\n            </div>\r\n        </ion-card-content>\r\n    </ion-card>\r\n\r\n\r\n\r\n    <ion-card>\r\n\r\n        <ion-card-content>\r\n            <b>Property Overview</b>\r\n        </ion-card-content>\r\n\r\n        <ion-list lines=\"none\">\r\n            <ion-item>\r\n                <ion-note slot=\"end\" color=\"primary\">{{propertyList?.typeofproperty}}</ion-note>\r\n                <ion-label>Type of Property</ion-label>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"propertyList.kitchens!=0\">\r\n                <ion-note slot=\"end\" color=\"primary\">{{propertyList?.kitchens}}</ion-note>\r\n                <ion-label>Kitchen</ion-label>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"propertyList.garden!=0\">\r\n                <ion-note slot=\"end\" color=\"primary\">{{propertyList?.garden}}</ion-note>\r\n                <ion-label>Garden</ion-label>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"propertyList.diningroom!=0\">\r\n                <ion-note slot=\"end\" color=\"primary\">{{propertyList?.diningroom}}</ion-note>\r\n                <ion-label>Dining Room</ion-label>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"propertyList.pool!=0\">\r\n                <ion-note slot=\"end\" color=\"primary\">{{propertyList?.pool}}</ion-note>\r\n                <ion-label>Pool</ion-label>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"propertyList.lounges!=0\">\r\n                <ion-note slot=\"end\" color=\"primary\">{{propertyList?.lounges}}</ion-note>\r\n                <ion-label>Lounge</ion-label>\r\n            </ion-item>\r\n        </ion-list>\r\n\r\n    </ion-card>\r\n\r\n    <ion-card #triggerElement>\r\n        <ion-card-content>\r\n            <ion-list>\r\n                <ion-item>\r\n                    <ion-thumbnail slot=\"start\">\r\n                        <img src=\"{{profileData?.photoURL}}\">\r\n                    </ion-thumbnail>\r\n                    <ion-label>\r\n                        <h2>{{profileData?.name}}</h2>\r\n                        <h3>{{profileData?.number}}</h3>\r\n                        <p>{{profileData?.email}}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-list>\r\n        </ion-card-content>\r\n    </ion-card>\r\n\r\n\r\n    <br>\r\n    <br>\r\n    <br>\r\n</ion-content>\r\n<ion-footer>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-button color=\"primary\" expand=\"full\" (click)=\"callAgent()\">\r\n                    <ion-icon name=\"call\"></ion-icon>\r\n                    &nbsp; Call\r\n                </ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-button color=\"primary\" expand=\"full\" (click)=\"message()\">\r\n                    <ion-icon name=\"mail\"></ion-icon>\r\n                    &nbsp; Message\r\n                </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-footer>\r\n\r\n\r\n\r\n\r\n\r\n<!-- \r\n\r\n<ion-content>\r\n\r\n    <ion-card class=\"ion-no-padding\">\r\n        <div class=\"container\">\r\n            <img src=\"{{items.mainImage}}\">\r\n            <div class=\"content\" (click)=\"image(items)\">\r\n                <h1>View Gallery</h1>\r\n            </div>\r\n        </div>\r\n        <ion-card-content>\r\n            <ion-text color=\"primary\">\r\n                <h4>{{items.price | currency:'R'}}</h4>\r\n            </ion-text>\r\n            <ion-text color=\"dark\">\r\n                <h4>{{items.description}}</h4>\r\n                <ion-grid>\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <h4>\r\n                                <ion-icon name=\"bed\"></ion-icon> {{items.bedrooms}}\r\n                                <ion-icon name=\"body\"></ion-icon> {{items.bathrooms}}\r\n                                <ion-icon name=\"car\"></ion-icon> {{items.garage}} </h4>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n\r\n            </ion-text>\r\n        </ion-card-content>\r\n        <ion-slides  [options]=\"slidesOptions \">\r\n            <ion-slide *ngFor=\"let pic of imageList  \">\r\n                <ion-card class=\"cat\">\r\n                    <div (click)=\"detail(items)\">\r\n                        <img src=\"{{pic.downloadURL}}\">\r\n                        \r\n                    </div>\r\n                </ion-card>\r\n            </ion-slide>\r\n        </ion-slides>\r\n    </ion-card>\r\n  \r\n    <ion-card>\r\n\r\n        <ion-card-content>\r\n\r\n        </ion-card-content>\r\n    </ion-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n<ion-footer>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-button color=\"primary\" expand=\"full\">\r\n                    <ion-icon name=\"call\"></ion-icon>\r\n                    Call </ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-button color=\"primary\" expand=\"full\">\r\n                    <ion-icon name=\"mail\"></ion-icon>\r\n                    Email</ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-footer> -->");

/***/ }),

/***/ "./src/app/pages/details/details-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/details/details-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function() { return DetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details.page */ "./src/app/pages/details/details.page.ts");




var routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"]
    }
];
var DetailsPageRoutingModule = /** @class */ (function () {
    function DetailsPageRoutingModule() {
    }
    DetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DetailsPageRoutingModule);
    return DetailsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/details/details.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/details/details.module.ts ***!
  \*************************************************/
/*! exports provided: DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-routing.module */ "./src/app/pages/details/details-routing.module.ts");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details.page */ "./src/app/pages/details/details.page.ts");







var DetailsPageModule = /** @class */ (function () {
    function DetailsPageModule() {
    }
    DetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPageRoutingModule"]
            ],
            declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
        })
    ], DetailsPageModule);
    return DetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/details/details.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/details/details.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: transparent;\n  --background-color: transparent;\n  --ion-color-base: transparent !important;\n}\n\n:host .mystyle ion-toolbar {\n  --background: #a02b2d !important;\n  --background-color: #a02b2d !important;\n  --ion-color-base: #a02b2d !important;\n}\n\n:host .mystyle .like {\n  cursor: pointer;\n  font-size: 20px;\n}\n\n:host .mystyle .like.liked {\n  font-weight: bold;\n  color: black;\n}\n\nion-buttons {\n  padding-left: 2px;\n  padding-right: 2px;\n  font-size: 30px !important;\n}\n\nion-card {\n  top: 0;\n}\n\nion-content {\n  top: 0;\n  position: absolute;\n}\n\nion-card-content {\n  color: black;\n}\n\nion-card-content p {\n  font-size: 5vw;\n}\n\nion-card-content i {\n  padding-right: 10px;\n  font-size: 5vw;\n  color: #a02b2d;\n}\n\nion-card-content i .pad-value {\n  color: black;\n  padding-left: 5px;\n}\n\nhr {\n  background-color: gray;\n  width: 100%;\n}\n\nion-card {\n  width: 100%;\n  top: 0;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.container {\n  position: relative;\n}\n\n.container .bottom-right {\n  position: absolute;\n  bottom: 8px;\n  right: 16px;\n  background: #a02b2d;\n  color: white;\n  padding: 4px;\n}\n\n.container img {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.like {\n  cursor: pointer;\n  font-size: 20px;\n}\n\n.like.liked {\n  font-weight: bold;\n  color: #a02b2d;\n}\n\n.no-transfrom {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV0YWlscy9DOlxcVXNlcnNcXENvZGVUcmliZVxcRGVza3RvcFxcQ29kZVRyaWJlXFxpb25pY1xcS2V5d29yeEFwcC9zcmNcXGFwcFxccGFnZXNcXGRldGFpbHNcXGRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSwrQkFBQTtFQUNBLHdDQUFBO0FDQ0o7O0FESVE7RUFDSSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esb0NBQUE7QUNEWjs7QURHUTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDRFo7O0FERVk7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUNBaEI7O0FETUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUNISjs7QURNQTtFQUNJLE1BQUE7QUNISjs7QURNQTtFQUNJLE1BQUE7RUFDQSxrQkFBQTtBQ0hKOztBRE1BO0VBQ0ksWUFBQTtBQ0hKOztBRElJO0VBQ0ksY0FBQTtBQ0ZSOztBRElJO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0ZSOztBREdRO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDRFo7O0FETUE7RUFDSSxzQkFBQTtFQUNBLFdBQUE7QUNISjs7QURNQTtFQUNJLFdBQUE7RUFDQSxNQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQ0hKOztBRE1BO0VBQ0ksa0JBQUE7QUNISjs7QURJSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDRlI7O0FESUk7RUFDSSwrQkFBQTtFQUNBLGdDQUFBO0FDRlI7O0FETUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQ0hKOztBRElJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDRlI7O0FETUE7RUFDSSxVQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgICAubXlzdHlsZSB7XHJcbiAgICAgICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNhMDJiMmQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjYTAyYjJkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0taW9uLWNvbG9yLWJhc2U6ICNhMDJiMmQgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpa2Uge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgJi5saWtlZCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWJ1dHRvbnMge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbiAgICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1dnc7XHJcbiAgICB9XHJcbiAgICBpIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4gICAgICAgIGNvbG9yOiAjYTAyYjJkO1xyXG4gICAgICAgIC5wYWQtdmFsdWUge1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaHIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5ib3R0b20tcmlnaHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDhweDtcclxuICAgICAgICByaWdodDogMTZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYTAyYjJkO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5saWtlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICYubGlrZWQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjYTAyYjJkO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubm8tdHJhbnNmcm9tIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0iLCJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IC5teXN0eWxlIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjYTAyYjJkICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2EwMmIyZCAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlOiAjYTAyYjJkICFpbXBvcnRhbnQ7XG59XG46aG9zdCAubXlzdHlsZSAubGlrZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuOmhvc3QgLm15c3R5bGUgLmxpa2UubGlrZWQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24tYnV0dG9ucyB7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZCB7XG4gIHRvcDogMDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICB0b3A6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIGNvbG9yOiBibGFjaztcbn1cbmlvbi1jYXJkLWNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogNXZ3O1xufVxuaW9uLWNhcmQtY29udGVudCBpIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiA1dnc7XG4gIGNvbG9yOiAjYTAyYjJkO1xufVxuaW9uLWNhcmQtY29udGVudCBpIC5wYWQtdmFsdWUge1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG5ociB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGFpbmVyIC5ib3R0b20tcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogOHB4O1xuICByaWdodDogMTZweDtcbiAgYmFja2dyb3VuZDogI2EwMmIyZDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA0cHg7XG59XG4uY29udGFpbmVyIGltZyB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4ubGlrZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmxpa2UubGlrZWQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNhMDJiMmQ7XG59XG5cbi5uby10cmFuc2Zyb20ge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/details/details.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/details/details.page.ts ***!
  \***********************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/property.service */ "./src/app/services/property.service.ts");
/* harmony import */ var src_app_services_favourite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/favourite.service */ "./src/app/services/favourite.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");









var Share = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"].Share;
var DetailsPage = /** @class */ (function () {
    function DetailsPage(router, propertyService, profileService, modalController, route, favouriteService, render, callNumber) {
        var _this = this;
        this.router = router;
        this.propertyService = propertyService;
        this.profileService = profileService;
        this.modalController = modalController;
        this.route = route;
        this.favouriteService = favouriteService;
        this.render = render;
        this.callNumber = callNumber;
        this.items = {
            mainImage: "",
            location: "",
            description: "",
            price: "",
            bedrooms: "",
            bathrooms: "",
            garage: "",
            propertyid: "",
        };
        this.slidesOptions = {
            initialSlide: 1,
            speed: 400,
        };
        this.slidesOptions2 = {
            slidesPerView: 2.6,
            speed: 400,
        };
        this.route.queryParams.subscribe(function (params) {
            if (params && params.data) {
                _this.propertyList = JSON.parse(params.data);
                _this.propertyid = _this.propertyList.propertyid;
                _this.agentUid = _this.propertyList.uid;
                console.log(_this.propertyList);
            }
        });
        this.favouriteService.getfavourite().subscribe(function (data) {
            _this.favouriteList = data.map(function (e) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: e.payload.doc.id }, e.payload.doc.data());
            });
            for (var _i = 0, _a = _this.favouriteList; _i < _a.length; _i++) {
                var reactionInfo = _a[_i];
                if (reactionInfo.key === _this.propertyid) {
                    _this.favouriteService.count(_this.propertyid).subscribe(function (data) {
                        _this.propertyList.userReaction = _this.favouriteService.userfavourite(data);
                    });
                }
            }
        });
    }
    DetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        var element = document.getElementById("my-ion-header");
        element.classList.remove("mystyle");
        this.propertyService.imageList(this.propertyid).subscribe(function (data) {
            _this.imageList = data.map(function (e) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: e.payload.doc.id }, e.payload.doc.data());
            });
            console.log(_this.imageList);
        });
        this.profileService.agentProfile(this.agentUid).subscribe(function (data) {
            _this.profileData = data;
            console.log(data);
        });
    };
    DetailsPage.prototype.myScroll = function (ev) {
        var element = document.getElementById("my-ion-header");
        if (ev.detail.scrollTop >= 215) {
            element.classList.add("mystyle");
        }
        if (ev.detail.scrollTop < 215) {
            element.classList.remove("mystyle");
        }
    };
    DetailsPage.prototype.share = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var shareRet;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Share.share({
                            title: this.propertyList.bedrooms + "  Bedroom " + this.propertyList.typeofproperty + " for Sale in " + this.propertyList.location + " on Keyworkx",
                            text: "I found this " + this.propertyList.bedrooms + "  Bedroom " + this.propertyList.typeofproperty + " on  Keyworx App. Check it out:",
                            url: this.propertyList.mainImage,
                            dialogTitle: 'Share with buddies'
                        })];
                    case 1:
                        shareRet = _a.sent();
                        console.log(this.propertyList.bedrooms + "  Bedroom " + this.propertyList.typeofproperty + " for Sale in " + this.propertyList.location + " on Keyworkx");
                        console.log("I found this " + this.propertyList.bedrooms + "  Bedroom " + this.propertyList.typeofproperty + " on Keyworx App. Check it out:");
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailsPage.prototype.image = function (items) {
        this.router.navigate(['/images'], {
            queryParams: {
                propertyid: items.propertyid,
            }
        });
    };
    DetailsPage.prototype.view = function (i) {
        console.log("index");
        console.log(i);
        var navigationExtras = {
            queryParams: {
                imageList: JSON.stringify(this.imageList),
                index: i,
            }
        };
        this.router.navigate(['images'], navigationExtras);
    };
    DetailsPage.prototype.message = function () {
        var navigationExtras = {
            queryParams: {
                propertyList: JSON.stringify(this.propertyList),
            }
        };
        this.router.navigate(['message'], navigationExtras);
    };
    DetailsPage.prototype.react = function (key, val) {
        var userID = this.profileService.getUID();
        if (val != 0) {
            this.favouriteService.updatefavourite(key, userID, 0);
        }
        else {
            this.favouriteService.removefavourite(key, userID);
        }
    };
    DetailsPage.prototype.callAgent = function () {
        this.callNumber.callNumber(this.profileData.number, true).
            then(function (res) { return console.log('Launched dialer!', res); }).
            catch(function (err) { return console.log('Error launching dialer', err); });
    };
    DetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_5__["PropertyService"] },
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_favourite_service__WEBPACK_IMPORTED_MODULE_6__["FavouriteService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"])
    ], DetailsPage.prototype, "slides", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DetailsPage.prototype, "contentArea", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("triggerElement", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DetailsPage.prototype, "triggerElement", void 0);
    DetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/details/details.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./details.page.scss */ "./src/app/pages/details/details.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_property_service__WEBPACK_IMPORTED_MODULE_5__["PropertyService"],
            src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_favourite_service__WEBPACK_IMPORTED_MODULE_6__["FavouriteService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"]])
    ], DetailsPage);
    return DetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-details-details-module.js.map