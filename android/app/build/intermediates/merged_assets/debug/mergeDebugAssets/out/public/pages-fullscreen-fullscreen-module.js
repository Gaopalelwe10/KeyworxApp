(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fullscreen-fullscreen-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fullscreen/fullscreen.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fullscreen/fullscreen.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button>\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title align=\"center\">Bond Calculator</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <br>\r\n    <ion-item>\r\n        <ion-label position=\"stacked\">Purchase Price</ion-label>\r\n        <ion-input type='number' [(ngModel)]=\"p\" placeholder=\"10000000\">R &nbsp; </ion-input>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item>\r\n        <ion-label position=\"stacked\">Interest rate</ion-label>\r\n        <ion-input type='number' [(ngModel)]=\"i\" placeholder=\"20.5%\"></ion-input>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item>\r\n        <ion-label position=\"stacked\">Years to repay</ion-label>\r\n        <ion-select [(ngModel)]=\"t\" placeholder=\"e.g 20\">\r\n            <ion-select-option value=\"5\">5</ion-select-option>\r\n            <ion-select-option value=\"10\">10</ion-select-option>\r\n            <ion-select-option value=\"20\">20</ion-select-option>\r\n            <ion-select-option value=\"30\">30</ion-select-option>\r\n        </ion-select>\r\n    </ion-item>\r\n    <!-- <form [formGroup]=\"calculator\"> -->\r\n    <ion-item>\r\n        <ion-label position=\"stacked\">Deposit</ion-label>\r\n        <ion-input type='number' [(ngModel)]=\"deposit\">R &nbsp;</ion-input>\r\n    </ion-item>\r\n    <!-- <div class=\"error\" *ngIf=\"calculator.get('deposit').hasError('minlength') && calculator.get('deposit').touched\">\r\n            Minimum 1 characters\r\n        </div>\r\n        <div class=\"error\" *ngIf=\"calculator.get('deposit').hasError('maxlength') && calculator.get('deposit').touched\">\r\n            Maximum 10 characters\r\n        </div>\r\n    </form> -->\r\n\r\n    <div class=\"ion-padding\">\r\n        <ion-button expand=\"block\" class=\"ion-no-margin\" (click)=\"calculate()\" onclick=\"document.getElementById('id01').style.display='block'\">\r\n            Calculate\r\n        </ion-button>\r\n    </div>\r\n    <div id=\"id01\" class=\"w3-modal\">\r\n        <div class=\"w3-modal-content\">\r\n            <div class=\"w3-container\">\r\n                <h2> <span float-right onclick=\"document.getElementById('id01').style.display='none'\" class=\"w3-closebtn\">&times;</span>\r\n                </h2>\r\n                <br>\r\n                <div align=\"center\">\r\n                    <h5> Your monthly repayments</h5>\r\n                    <h3>\r\n                        <ion-label>\r\n                            R {{M|number : '1.0-0'}}\r\n                        </ion-label>\r\n                    </h3>\r\n\r\n                    <h5> Total amount repayable</h5>\r\n\r\n                    <h3>\r\n                        <ion-label>\r\n                            R {{total|number : '1.0-0'}}\r\n                        </ion-label>\r\n                    </h3>\r\n                </div>\r\n                <br>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/fullscreen/fullscreen-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/fullscreen/fullscreen-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: FullscreenPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenPageRoutingModule", function() { return FullscreenPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fullscreen_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fullscreen.page */ "./src/app/pages/fullscreen/fullscreen.page.ts");




var routes = [
    {
        path: '',
        component: _fullscreen_page__WEBPACK_IMPORTED_MODULE_3__["FullscreenPage"]
    }
];
var FullscreenPageRoutingModule = /** @class */ (function () {
    function FullscreenPageRoutingModule() {
    }
    FullscreenPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FullscreenPageRoutingModule);
    return FullscreenPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/fullscreen/fullscreen.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/fullscreen/fullscreen.module.ts ***!
  \*******************************************************/
/*! exports provided: FullscreenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenPageModule", function() { return FullscreenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fullscreen_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fullscreen-routing.module */ "./src/app/pages/fullscreen/fullscreen-routing.module.ts");
/* harmony import */ var _fullscreen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fullscreen.page */ "./src/app/pages/fullscreen/fullscreen.page.ts");







var FullscreenPageModule = /** @class */ (function () {
    function FullscreenPageModule() {
    }
    FullscreenPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _fullscreen_routing_module__WEBPACK_IMPORTED_MODULE_5__["FullscreenPageRoutingModule"]
            ],
            declarations: [_fullscreen_page__WEBPACK_IMPORTED_MODULE_6__["FullscreenPage"]]
        })
    ], FullscreenPageModule);
    return FullscreenPageModule;
}());



/***/ }),

/***/ "./src/app/pages/fullscreen/fullscreen.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/fullscreen/fullscreen.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".w3-modal-content {\n  top: 30%;\n  margin: 0 auto;\n  background-color: #f6f4f4;\n}\n.w3-modal-content h3 {\n  color: #630707;\n}\n.w3-modal-content h5 {\n  color: #413e3e;\n}\n/* The Modal (background) */\n.modal {\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.9);\n  /* Black w/ opacity */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZnVsbHNjcmVlbi9DOlxcVXNlcnNcXENvZGVUcmliZVxcRGVza3RvcFxcQ29kZVRyaWJlXFxpb25pY1xcS2V5d29yeEFwcC9zcmNcXGFwcFxccGFnZXNcXGZ1bGxzY3JlZW5cXGZ1bGxzY3JlZW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mdWxsc2NyZWVuL2Z1bGxzY3JlZW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBS0ksUUFBQTtFQUNBLGNBQUE7RUFHQSx5QkFBQTtBQ2RKO0FEZUk7RUFDSSxjQUFBO0FDYlI7QURlSTtFQUNJLGNBQUE7QUNiUjtBRGtCQSwyQkFBQTtBQUVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtBQ2hCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Z1bGxzY3JlZW4vZnVsbHNjcmVlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tY29udGVudCB7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICBsZWZ0OiAxMCU7XHJcbi8vICAgICByaWdodDogNTAlO1xyXG4vLyAgICAgbWFyZ2luOiAwIGF1dG87XHJcbi8vICAgICBtYXJnaW4tdG9wOiAwO1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbi8vICAgICB0b3A6IDEwJTtcclxuLy8gfVxyXG4udzMtbW9kYWwtY29udGVudCB7XHJcbiAgICAvLyBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgLy8gd2lkdGg6IDE2MDBweDtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIGxlZnQ6IDEwJTtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAtNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDI0NCwgMjQ0KTtcclxuICAgIGgzIHtcclxuICAgICAgICBjb2xvcjogIzYzMDcwNztcclxuICAgIH1cclxuICAgIGg1IHtcclxuICAgICAgICBjb2xvcjogIzQxM2UzZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cclxuXHJcbi5tb2RhbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIEZ1bGwgd2lkdGggKi9cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gICAgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xyXG59IiwiLnczLW1vZGFsLWNvbnRlbnQge1xuICB0b3A6IDMwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY0ZjQ7XG59XG4udzMtbW9kYWwtY29udGVudCBoMyB7XG4gIGNvbG9yOiAjNjMwNzA3O1xufVxuLnczLW1vZGFsLWNvbnRlbnQgaDUge1xuICBjb2xvcjogIzQxM2UzZTtcbn1cblxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xuLm1vZGFsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEZ1bGwgd2lkdGggKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBGdWxsIGhlaWdodCAqL1xuICBvdmVyZmxvdzogYXV0bztcbiAgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIC8qIEZhbGxiYWNrIGNvbG9yICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/fullscreen/fullscreen.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/fullscreen/fullscreen.page.ts ***!
  \*****************************************************/
/*! exports provided: FullscreenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenPage", function() { return FullscreenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FullscreenPage = /** @class */ (function () {
    function FullscreenPage(route) {
        var _this = this;
        this.route = route;
        this.pic = {
            downloadURL: "",
        };
        this.deposit = 0;
        this.route.queryParams
            .subscribe(function (params) {
            _this.pic.downloadURL = params.downloadURL;
            console.log(_this.pic.downloadURL);
        });
        // this.calculator = fb.group({
        //   deposit: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.minLength(1), Validators.maxLength(10), Validators.required])],
        //   // email: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
        // });
    }
    FullscreenPage.prototype.ngOnInit = function () {
        this.r = (this.i / 100) / 12;
        this.n = this.t * 12;
    };
    FullscreenPage.prototype.calculate = function () {
        this.r = (this.i / 100) / 12;
        console.log(this.r);
        this.n = this.t * 12;
        console.log(this.i);
        this.p = this.p - this.deposit;
        console.log(this.p);
        this.c = this.r * (Math.pow((1 + this.r), this.n));
        this.d = (Math.pow((1 + this.r), this.n)) - 1;
        this.a = this.c / this.d;
        console.log(this.a);
        this.M = this.p * this.a;
        console.log(this.M);
        this.total = this.M * this.n;
        console.log(this.total);
    };
    FullscreenPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    FullscreenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fullscreen',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fullscreen.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fullscreen/fullscreen.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fullscreen.page.scss */ "./src/app/pages/fullscreen/fullscreen.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FullscreenPage);
    return FullscreenPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-fullscreen-fullscreen-module.js.map