(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fullscreen-fullscreen-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fullscreen/fullscreen.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fullscreen/fullscreen.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button>\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title align=\"center\">Bond Calculator</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <form [formGroup]=\"bondCalulatorForm\">\r\n        <br>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">Purchase Price</ion-label>\r\n            <ion-input formControlName=\"p\" [(ngModel)]=\"p\" required>R {{propertyList?.price}}</ion-input>\r\n        </ion-item>\r\n\r\n        <div class=\"error\" *ngIf=\"bondCalulatorForm.get('p').hasError('required') && bondCalulatorForm.get('p').touched\">\r\n            This field is required\r\n        </div>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">Interest rate</ion-label>\r\n            <ion-input type='number' formControlName=\"i\" [(ngModel)]=\"i\" placeholder=\"20.5%\" required></ion-input>\r\n        </ion-item>\r\n        <div class=\"error\" *ngIf=\"bondCalulatorForm.get('i').hasError('required') && bondCalulatorForm.get('i').touched\">\r\n            This field is required\r\n        </div>\r\n\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">Years to repay</ion-label>\r\n            <ion-select formControlName=\"t\" [(ngModel)]=\"t\" placeholder=\"e.g 20\" required>\r\n                <ion-select-option value=\"5\">5</ion-select-option>\r\n                <ion-select-option value=\"10\">10</ion-select-option>\r\n                <ion-select-option value=\"20\">20</ion-select-option>\r\n                <ion-select-option value=\"30\">30</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n        <div class=\"error\" *ngIf=\"bondCalulatorForm.get('t').hasError('required') && bondCalulatorForm.get('t').touched\">\r\n            This field is required\r\n        </div>\r\n        <!-- <form [formGroup]=\"calculator\"> -->\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">Deposit</ion-label>\r\n            <ion-input type='number' formControlName=\"deposit\" [(ngModel)]=\"deposit\">R &nbsp;</ion-input>\r\n        </ion-item>\r\n        <!-- <div class=\"error\" *ngIf=\"calculator.get('deposit').hasError('minlength') && calculator.get('deposit').touched\">\r\n                Minimum 1 characters\r\n            </div>\r\n            <div class=\"error\" *ngIf=\"calculator.get('deposit').hasError('maxlength') && calculator.get('deposit').touched\">\r\n                Maximum 10 characters\r\n            </div>\r\n        </form> -->\r\n\r\n        <div class=\"ion-padding\">\r\n            <ion-button expand=\"block\" class=\"ion-no-margin\" [disabled]=\"!bondCalulatorForm.valid\" (click)=\"calculate()\" onclick=\"document.getElementById('id01').style.display='block'\">\r\n                Calculate\r\n            </ion-button>\r\n        </div>\r\n    </form>\r\n\r\n    <div id=\"id01\" class=\"w3-modal\">\r\n        <div class=\"w3-modal-content\">\r\n            <div class=\"w3-container\">\r\n                <h2> <span float-right onclick=\"document.getElementById('id01').style.display='none'\" class=\"w3-closebtn\">&times;</span>\r\n                </h2>\r\n                <br>\r\n                <div align=\"center\">\r\n                    <h5> Your monthly repayments</h5>\r\n                    <h3>\r\n                        <ion-label>\r\n                            R {{M|number : '1.0-0'}}\r\n                        </ion-label>\r\n                    </h3>\r\n\r\n                    <h5> Total amount repayable</h5>\r\n\r\n                    <h3>\r\n                        <ion-label>\r\n                            R {{total|number : '1.0-0'}}\r\n                        </ion-label>\r\n                    </h3>\r\n                </div>\r\n                <br>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n</ion-content>");

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
                _fullscreen_routing_module__WEBPACK_IMPORTED_MODULE_5__["FullscreenPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
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
/* harmony default export */ __webpack_exports__["default"] = (".w3-modal-content {\n  top: 30%;\n  margin: 0 auto;\n  background-color: #f6f4f4;\n}\n.w3-modal-content h3 {\n  color: #630707;\n}\n.w3-modal-content h5 {\n  color: #413e3e;\n}\n/* The Modal (background) */\n.modal {\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.9);\n  /* Black w/ opacity */\n}\n.error {\n  color: red;\n  text-align: left;\n  padding-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZnVsbHNjcmVlbi9DOlxcVXNlcnNcXENvZGVUcmliZVxcRGVza3RvcFxcQ29kZVRyaWJlXFxpb25pY1xcS2V5d29yeEFwcC9zcmNcXGFwcFxccGFnZXNcXGZ1bGxzY3JlZW5cXGZ1bGxzY3JlZW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mdWxsc2NyZWVuL2Z1bGxzY3JlZW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBS0ksUUFBQTtFQUNBLGNBQUE7RUFHQSx5QkFBQTtBQ2RKO0FEZUk7RUFDSSxjQUFBO0FDYlI7QURlSTtFQUNJLGNBQUE7QUNiUjtBRGtCQSwyQkFBQTtBQUVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtBQ2hCSjtBRG1CQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDaEJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZnVsbHNjcmVlbi9mdWxsc2NyZWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1jb250ZW50IHtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIGxlZnQ6IDEwJTtcclxuLy8gICAgIHJpZ2h0OiA1MCU7XHJcbi8vICAgICBtYXJnaW46IDAgYXV0bztcclxuLy8gICAgIG1hcmdpbi10b3A6IDA7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogMDtcclxuLy8gICAgIHRvcDogMTAlO1xyXG4vLyB9XHJcbi53My1tb2RhbC1jb250ZW50IHtcclxuICAgIC8vIGhlaWdodDogMjUwcHg7XHJcbiAgICAvLyB3aWR0aDogMTYwMHB4O1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gbGVmdDogMTAlO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAtNTBweDtcclxuICAgIC8vIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwgMjQ0LCAyNDQpO1xyXG4gICAgaDMge1xyXG4gICAgICAgIGNvbG9yOiAjNjMwNzA3O1xyXG4gICAgfVxyXG4gICAgaDUge1xyXG4gICAgICAgIGNvbG9yOiAjNDEzZTNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xyXG5cclxuLm1vZGFsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogRnVsbCB3aWR0aCAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLyogRnVsbCBoZWlnaHQgKi9cclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbiAgICAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxufSIsIi53My1tb2RhbC1jb250ZW50IHtcbiAgdG9wOiAzMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNGY0O1xufVxuLnczLW1vZGFsLWNvbnRlbnQgaDMge1xuICBjb2xvcjogIzYzMDcwNztcbn1cbi53My1tb2RhbC1jb250ZW50IGg1IHtcbiAgY29sb3I6ICM0MTNlM2U7XG59XG5cbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cbi5tb2RhbCB7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBGdWxsIHdpZHRoICovXG4gIGhlaWdodDogMTAwJTtcbiAgLyogRnVsbCBoZWlnaHQgKi9cbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAvKiBGYWxsYmFjayBjb2xvciAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufSJdfQ== */");

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var FullscreenPage = /** @class */ (function () {
    // items = {
    //   uid:"",
    //   propertyid:"",
    //   price:""
    // }
    function FullscreenPage(routeA, fb
    // private fb: FormBuilder,
    ) {
        var _this = this;
        this.routeA = routeA;
        this.fb = fb;
        this.pic = {
            downloadURL: "",
        };
        this.deposit = 0;
        // this.route.queryParams
        //   .subscribe(params => {
        //     this.items.uid = params.uid;
        //      this.items.propertyid = params.propertyid;
        //     this.items.price = params.price;
        //     console.log(this.items.uid, this.items.propertyid,
        //       this.items.price )
        //   });
        this.bondCalulatorForm = fb.group({
            p: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            i: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            t: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            deposit: ['']
        });
        this.routeA.queryParams.subscribe(function (params) {
            if (params && params.data) {
                _this.propertyList = JSON.parse(params.data);
                _this.propertyid = _this.propertyList.propertyid;
                _this.agentUid = _this.propertyList.uid;
                console.log(_this.propertyList);
                console.log(params);
            }
        });
        this.routeA.queryParams.subscribe(function (params) {
            _this.p = params.price;
        });
    }
    FullscreenPage.prototype.ngOnInit = function () {
        var _this = this;
        this.routeA.queryParams.subscribe(function (params) {
            if (params && params.data) {
                _this.propertyList = JSON.parse(params.data);
                _this.propertyid = _this.propertyList.propertyid;
                _this.agentUid = _this.propertyList.uid;
                console.log(_this.propertyList);
            }
        });
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
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    FullscreenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fullscreen',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fullscreen.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fullscreen/fullscreen.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fullscreen.page.scss */ "./src/app/pages/fullscreen/fullscreen.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
            // private fb: FormBuilder,
        ])
    ], FullscreenPage);
    return FullscreenPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-fullscreen-fullscreen-module.js.map