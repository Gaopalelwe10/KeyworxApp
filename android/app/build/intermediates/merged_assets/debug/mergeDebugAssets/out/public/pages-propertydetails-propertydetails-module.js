(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-propertydetails-propertydetails-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/propertydetails/propertydetails.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/propertydetails/propertydetails.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>propertydetails</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/propertydetails/propertydetails-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/propertydetails/propertydetails-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: PropertydetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertydetailsPageRoutingModule", function() { return PropertydetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _propertydetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./propertydetails.page */ "./src/app/pages/propertydetails/propertydetails.page.ts");




var routes = [
    {
        path: '',
        component: _propertydetails_page__WEBPACK_IMPORTED_MODULE_3__["PropertydetailsPage"]
    }
];
var PropertydetailsPageRoutingModule = /** @class */ (function () {
    function PropertydetailsPageRoutingModule() {
    }
    PropertydetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PropertydetailsPageRoutingModule);
    return PropertydetailsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/propertydetails/propertydetails.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/propertydetails/propertydetails.module.ts ***!
  \*****************************************************************/
/*! exports provided: PropertydetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertydetailsPageModule", function() { return PropertydetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _propertydetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./propertydetails-routing.module */ "./src/app/pages/propertydetails/propertydetails-routing.module.ts");
/* harmony import */ var _propertydetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./propertydetails.page */ "./src/app/pages/propertydetails/propertydetails.page.ts");







var PropertydetailsPageModule = /** @class */ (function () {
    function PropertydetailsPageModule() {
    }
    PropertydetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _propertydetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["PropertydetailsPageRoutingModule"]
            ],
            declarations: [_propertydetails_page__WEBPACK_IMPORTED_MODULE_6__["PropertydetailsPage"]]
        })
    ], PropertydetailsPageModule);
    return PropertydetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/propertydetails/propertydetails.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/propertydetails/propertydetails.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb3BlcnR5ZGV0YWlscy9wcm9wZXJ0eWRldGFpbHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/propertydetails/propertydetails.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/propertydetails/propertydetails.page.ts ***!
  \***************************************************************/
/*! exports provided: PropertydetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertydetailsPage", function() { return PropertydetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PropertydetailsPage = /** @class */ (function () {
    function PropertydetailsPage() {
    }
    PropertydetailsPage.prototype.ngOnInit = function () {
    };
    PropertydetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-propertydetails',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./propertydetails.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/propertydetails/propertydetails.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./propertydetails.page.scss */ "./src/app/pages/propertydetails/propertydetails.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PropertydetailsPage);
    return PropertydetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-propertydetails-propertydetails-module.js.map