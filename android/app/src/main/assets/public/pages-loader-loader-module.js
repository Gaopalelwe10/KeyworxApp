(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-loader-loader-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loader/loader.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loader/loader.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n    <ion-grid style=\"height: 100%\">\n        <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column; text-align: center;\">\n            <ion-spinner name=\"dots\" color=\"primary\"></ion-spinner>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/loader/loader-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/loader/loader-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LoaderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderPageRoutingModule", function() { return LoaderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _loader_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader.page */ "./src/app/pages/loader/loader.page.ts");




var routes = [
    {
        path: '',
        component: _loader_page__WEBPACK_IMPORTED_MODULE_3__["LoaderPage"]
    }
];
var LoaderPageRoutingModule = /** @class */ (function () {
    function LoaderPageRoutingModule() {
    }
    LoaderPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoaderPageRoutingModule);
    return LoaderPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/loader/loader.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/loader/loader.module.ts ***!
  \***********************************************/
/*! exports provided: LoaderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderPageModule", function() { return LoaderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _loader_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader-routing.module */ "./src/app/pages/loader/loader-routing.module.ts");
/* harmony import */ var _loader_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loader.page */ "./src/app/pages/loader/loader.page.ts");







var LoaderPageModule = /** @class */ (function () {
    function LoaderPageModule() {
    }
    LoaderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _loader_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoaderPageRoutingModule"]
            ],
            declarations: [_loader_page__WEBPACK_IMPORTED_MODULE_6__["LoaderPage"]]
        })
    ], LoaderPageModule);
    return LoaderPageModule;
}());



/***/ }),

/***/ "./src/app/pages/loader/loader.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/loader/loader.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvYWRlci9sb2FkZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/loader/loader.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/loader/loader.page.ts ***!
  \*********************************************/
/*! exports provided: LoaderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderPage", function() { return LoaderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var LoaderPage = /** @class */ (function () {
    function LoaderPage(loadingController) {
        this.loadingController = loadingController;
        // this.presentLoading()
    }
    LoaderPage.prototype.ngOnInit = function () {
    };
    LoaderPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
                            duration: 2000
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    LoaderPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    LoaderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loader.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loader/loader.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loader.page.scss */ "./src/app/pages/loader/loader.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], LoaderPage);
    return LoaderPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-loader-loader-module.js.map