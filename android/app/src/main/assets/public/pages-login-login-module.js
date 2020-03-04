(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"bgp\">\r\n    <div class=\"mmm\">\r\n        <ion-row>\r\n            <ion-col text-center>\r\n                <br>\r\n                <div id=\"logo\">\r\n                    <img src=\"../../../assets/img/darker_logo.png\" alt=\"Avatar\" class=\"imgC\" width=\"280\" height=\"130\">\r\n                </div>\r\n                <br><br><br>\r\n                <form [formGroup]=\"loginForm\" *ngIf=\"isForgotPassword\">\r\n                    <div class=\"shipping-card\">\r\n\r\n                        <ion-item color=\"transparent\" class=\"group\">\r\n                            <ion-label position=\"floating\">Email</ion-label>\r\n                            <ion-input type=\"email\" formControlName=\"email\"></ion-input>\r\n                        </ion-item>\r\n                        <div class=\"error\" *ngIf=\"loginForm.get('email').hasError('required') && loginForm.get('email').touched\">\r\n                            Please input your email\r\n                        </div>\r\n                        <div class=\"error\" *ngIf=\"loginForm.get('email').hasError('pattern') && loginForm.get('email').touched\">\r\n                            Email address invalid\r\n                        </div>\r\n                        <ion-item color=\"transparent\" class=\"group\">\r\n                            <ion-label position=\"floating\">Password</ion-label>\r\n                            <ion-input color=\"medium\" type=\"password\" formControlName=\"password\"></ion-input>\r\n                        </ion-item>\r\n                        <div class=\"error\" *ngIf=\"loginForm.get('password').hasError('required') && loginForm.get('password').touched\">\r\n                            Please input your password\r\n                        </div>\r\n                        <div class=\"error\" *ngIf=\"loginForm.get('password').hasError('minlength') && loginForm.get('password').touched\">\r\n                            Minimum 6 characters\r\n                        </div>\r\n                        <div class=\"error\" *ngIf=\"loginForm.get('password').hasError('maxlength') && loginForm.get('password').touched\">\r\n                            Maximum 12 characters\r\n                        </div>\r\n                        <br>\r\n                        <ion-button expand=\"block\" color=\"primary\" [disabled]=\"!loginForm.valid\" (click)=\"login()\">login</ion-button>\r\n                        <p> <a (click)=\"isForgotPassword = false\">Forgot Password?</a></p>\r\n                        <p> <a (click)=\"registerPage()\">Sign Up</a></p>\r\n                    </div>\r\n                </form>\r\n\r\n\r\n\r\n                <form [formGroup]=\"forgotpasswordForm\" *ngIf=\"!isForgotPassword\">\r\n                    <ion-item color=\"transparent\" class=\"group\">\r\n                        <ion-label position=\"floating\">Enter Email</ion-label>\r\n                        <ion-input type=\"email\" formControlName=\"email\"></ion-input>\r\n                    </ion-item>\r\n                    <div class=\"error\" *ngIf=\"forgotpasswordForm.get('email').hasError('required') && forgotpasswordForm.get('email').touched\">\r\n                        Please input your email\r\n                    </div>\r\n                    <div class=\"error\" *ngIf=\"forgotpasswordForm.get('email').hasError('pattern') && forgotpasswordForm.get('email').touched\">\r\n                        Email address invalid\r\n                    </div>\r\n                    <br>\r\n                    <ion-grid>\r\n                        <ion-row>\r\n                            <ion-col>\r\n                                <ion-button expand=\"block\" color=\"primary\" (click)=\"isForgotPassword = true\">Cancel</ion-button>\r\n                            </ion-col>\r\n                            <ion-col>\r\n                                <ion-button expand=\"block\" color=\"primary\" [disabled]=\"!forgotpasswordForm.valid\" (click)=\"reset()\">Reset</ion-button>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-grid>\r\n\r\n                </form>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
var LoginPageRoutingModule = /** @class */ (function () {
    function LoginPageRoutingModule() {
    }
    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoginPageRoutingModule);
    return LoginPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#logo {\n  position: relative;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 15px;\n  width: 100%;\n}\n#logo img {\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 15px;\n}\n.error {\n  color: red;\n  text-align: left;\n}\n.bgp {\n  --background: url('Capture.PNG')0 0/130% 110% no-repeat rgba(65, 64, 64, 0.11);\n}\n.mmm {\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.397);\n  height: 100%;\n}\nion-label {\n  -webkit-text-fill-color: #f9fafa;\n}\na {\n  -webkit-text-fill-color: aliceblue;\n}\nion-item {\n  color: #fcf8f8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxDb2RlVHJpYmVcXERlc2t0b3BcXENvZGVUcmliZVxcaW9uaWNcXEtleXdvcnhBcHAvc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDRVI7QURFQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ0NKO0FERUE7RUFDSSw4RUFBQTtBQ0NKO0FERUE7RUFDSSxrQkFBQTtFQUVBLHNDQUFBO0VBQ0EsWUFBQTtBQ0FKO0FER0E7RUFDSSxnQ0FBQTtBQ0FKO0FER0E7RUFDSSxrQ0FBQTtBQ0FKO0FER0E7RUFDSSxjQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9nbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGltZyB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmJncCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9DYXB0dXJlLlBORycpMCAwLzEzMCUgMTEwJSBuby1yZXBlYXQgcmdiYSg2NSwgNjQsIDY0LCAwLjExKTtcclxufVxyXG5cclxuLm1tbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogYWxpY2VibHVlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM5Nyk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogcmdiKDI0OSwgMjUwLCAyNTApO1xyXG59XHJcblxyXG5hIHtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIGNvbG9yOiAjZmNmOGY4O1xyXG59IiwiI2xvZ28ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuI2xvZ28gaW1nIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmJncCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9DYXB0dXJlLlBOR1wiKTAgMC8xMzAlIDExMCUgbm8tcmVwZWF0IHJnYmEoNjUsIDY0LCA2NCwgMC4xMSk7XG59XG5cbi5tbW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOTcpO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1sYWJlbCB7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjZjlmYWZhO1xufVxuXG5hIHtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGFsaWNlYmx1ZTtcbn1cblxuaW9uLWl0ZW0ge1xuICBjb2xvcjogI2ZjZjhmODtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");






var LoginPage = /** @class */ (function () {
    function LoginPage(fb, route, alertCtrl, menuCtrl, loadingCtrl, profileService) {
        this.fb = fb;
        this.route = route;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.profileService = profileService;
        this.isForgotPassword = true;
        this.loginForm = fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z0-9-.]+$')]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
        this.forgotpasswordForm = fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z0-9-.]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            // message: 'Signing in, Please wait...',
                            // showBackdrop: false,
                            cssClass: 'custom-loader',
                            spinner: "crescent",
                        });
                        return [4 /*yield*/, loading];
                    case 1:
                        (_a.sent()).present();
                        this.profileService.login(this.loginForm.value.email, this.loginForm.value.password).then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        localStorage.setItem("user", this.loginForm.value.email);
                                        return [4 /*yield*/, loading];
                                    case 1:
                                        (_a.sent()).dismiss();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.reset = function () {
        var _this = this;
        this.profileService.sendPasswordResetEmail(this.forgotpasswordForm.value.email)
            .then(function (success) {
            _this.alertCtrl.create({
                // message: 'You can not order more than six',
                subHeader: 'Check your Email account',
                buttons: ['Ok']
            }).then(function (alert) { return alert.present(); });
            _this.isForgotPassword = true;
        }).catch(function (error) {
            _this.alertCtrl.create({
                // message: 'You can not order more than six',
                subHeader: 'There is no user record corresponding to this identifier. The user may have been deleted',
                buttons: ['Ok']
            }).then(function (alert) { return alert.present(); });
        });
    };
    LoginPage.prototype.registerPage = function () {
        this.route.navigateByUrl("register");
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map