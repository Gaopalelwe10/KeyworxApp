(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"bgp\">\r\n    <div class=\"mmm\">\r\n        <!-- <ion-row>\r\n            <ion-col text-center> -->\r\n        <br>\r\n        <div id=\"logo\" text-center>\r\n            <img src=\"../../../assets/img/darker_logo.png\" alt=\"Avatar\" class=\"imgC\" width=\"280\" height=\"130\">\r\n        </div>\r\n        <br><br>\r\n        <form [formGroup]=\"register\" class=\"ff\" text-center>\r\n            <ion-item color=\"transparent\" class=\"group\">\r\n                <ion-label position=\"floating\">Name</ion-label>\r\n                <ion-input color=\"medium\" type=\"text\" formControlName=\"name\" required></ion-input>\r\n            </ion-item>\r\n            <div class=\"error\" *ngIf=\"register.get('name').hasError('required') && register.get('name').touched\">\r\n                &nbsp;&nbsp;&nbsp; <b>Please input your name</b>\r\n            </div>\r\n            <div class=\"error\" *ngIf=\"register.get('name').hasError('minlength') && register.get('name').touched\">\r\n                &nbsp;&nbsp;&nbsp; <b>Minimum 4 characters</b>\r\n            </div>\r\n            <div class=\"error\" *ngIf=\"register.get('name').hasError('maxlength') && register.get('name').touched\">\r\n                &nbsp;&nbsp;&nbsp; <b>Maximum 30 characters</b>\r\n            </div>\r\n\r\n            <ion-item color=\"transparent\" class=\"group\">\r\n                <ion-label position=\"floating\">Email</ion-label>\r\n                <ion-input color=\"medium\" type=\"email\" formControlName=\"email\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"error\" *ngIf=\"register.get('email').hasError('required') && register.get('email').touched\">\r\n                &nbsp;&nbsp;&nbsp; <b>Please input your email</b>\r\n            </div>\r\n            <div class=\"error\" *ngIf=\"register.get('email').hasError('pattern') && register.get('email').touched\">\r\n                &nbsp;&nbsp;&nbsp; <b>Email address invalid</b>\r\n            </div>\r\n\r\n            <ion-item color=\"transparent\" class=\"group\">\r\n                <ion-label position=\"floating\">Password</ion-label>\r\n                <ion-input color=\"medium\" type=\"password\" formControlName=\"password\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"error\" *ngIf=\"register.get('password').hasError('required') && register.get('password').touched\">\r\n                &nbsp;&nbsp;&nbsp; <b>Please input your password</b>\r\n            </div>\r\n\r\n            <div class=\"error\" *ngIf=\"register.get('password').hasError('minlength') && register.get('password').touched\">\r\n                &nbsp;&nbsp;&nbsp;<b> Minimum 6 characters</b>\r\n            </div>\r\n\r\n            <div class=\"error\" *ngIf=\"register.get('password').hasError('maxlength') && register.get('password').touched\">\r\n                &nbsp;&nbsp;&nbsp; <b>Maximum 12 characters</b>\r\n            </div>\r\n\r\n            <ion-item color=\"transparent\" class=\"group\">\r\n                <ion-label position=\"floating\">Confirm Password</ion-label>\r\n                <ion-input color=\"medium\" type=\"password\" formControlName=\"cpassword\"></ion-input>\r\n            </ion-item>\r\n\r\n            <div class=\"error\" *ngIf=\"register.get('cpassword').hasError('required') && register.get('cpassword').touched\">\r\n                &nbsp;&nbsp;&nbsp; <b>Please confirm you password</b>\r\n            </div>\r\n\r\n            <div class=\"error\" *ngIf=\"register.get('cpassword').hasError('minlength') && register.get('cpassword').touched\">\r\n                &nbsp;&nbsp;&nbsp; <b>Minimum 6 characters</b>\r\n            </div>\r\n\r\n            <div class=\"error\" *ngIf=\"register.get('cpassword').hasError('maxlength') && register.get('cpassword').touched\">\r\n                &nbsp;&nbsp;&nbsp; <b>Maximum 12 characters</b>\r\n            </div>\r\n\r\n            <div class=\"error\" *ngIf=\"register.get('cpassword').hasError('mustMatch') \">Passwords must match</div>\r\n            <br>\r\n            <ion-button expand=\"block\" color=\"primary\" [disabled]=\"!register.valid\" (click)=\"PersonRegister()\">Register\r\n            </ion-button>\r\n            <p>Already have Account? <a (click)=\"login()\">Sign In</a></p>\r\n\r\n        </form>\r\n        <!-- </ion-col>\r\n        </ion-row> -->\r\n    </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/module/must-match.ts":
/*!**************************************!*\
  !*** ./src/app/module/must-match.ts ***!
  \**************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/pages/register/register-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");




var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
var RegisterPageRoutingModule = /** @class */ (function () {
    function RegisterPageRoutingModule() {
    }
    RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RegisterPageRoutingModule);
    return RegisterPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/pages/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");







var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#logo {\n  position: relative;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 15px;\n  width: 100%;\n}\n#logo img {\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 15px;\n}\n.error {\n  color: rgba(175, 4, 4, 0.945);\n  text-align: left;\n}\n.bgp {\n  --background: url('Capture.PNG')0 0/120% 110% no-repeat rgba(65, 64, 64, 0.11);\n}\n.mmm {\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.397);\n  height: 100%;\n}\nion-label {\n  -webkit-text-fill-color: aliceblue;\n}\na {\n  -webkit-text-fill-color: aliceblue;\n}\np {\n  -webkit-text-fill-color: #b6afaf;\n}\nion-item {\n  color: #fcf8f8;\n}\n.ff {\n  background-color: rgba(0, 0, 0, 0.74);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvQzpcXFVzZXJzXFxDb2RlVHJpYmVcXERlc2t0b3BcXENvZGVUcmliZVxcaW9uaWNcXEtleXdvcnhBcHAvc3JjXFxhcHBcXHBhZ2VzXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDRVI7QURFQTtFQUNJLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREVBO0VBQ0ksOEVBQUE7QUNDSjtBREVBO0VBQ0ksa0JBQUE7RUFFQSxzQ0FBQTtFQUNBLFlBQUE7QUNBSjtBREdBO0VBQ0ksa0NBQUE7QUNBSjtBREdBO0VBQ0ksa0NBQUE7QUNBSjtBREdBO0VBQ0ksZ0NBQUE7QUNBSjtBREdBO0VBQ0ksY0FBQTtBQ0FKO0FER0E7RUFDSSxxQ0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ28ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gICAgY29sb3I6IHJnYmEoMTc1LCA0LCA0LCAwLjk0NSk7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uYmdwIHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL0NhcHR1cmUuUE5HJykwIDAvMTIwJSAxMTAlIG5vLXJlcGVhdCByZ2JhKDY1LCA2NCwgNjQsIDAuMTEpO1xyXG59XHJcblxyXG4ubW1tIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzk3KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5cclxucCB7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogcmdiKDE4MiwgMTc1LCAxNzUpO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICBjb2xvcjogI2ZjZjhmODtcclxufVxyXG5cclxuLmZmIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NCk7XHJcbn0iLCIjbG9nbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4jbG9nbyBpbWcge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmdiYSgxNzUsIDQsIDQsIDAuOTQ1KTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmJncCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9DYXB0dXJlLlBOR1wiKTAgMC8xMjAlIDExMCUgbm8tcmVwZWF0IHJnYmEoNjUsIDY0LCA2NCwgMC4xMSk7XG59XG5cbi5tbW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOTcpO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1sYWJlbCB7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBhbGljZWJsdWU7XG59XG5cbmEge1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogYWxpY2VibHVlO1xufVxuXG5wIHtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICNiNmFmYWY7XG59XG5cbmlvbi1pdGVtIHtcbiAgY29sb3I6ICNmY2Y4Zjg7XG59XG5cbi5mZiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NCk7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_module_must_match__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/module/must-match */ "./src/app/module/must-match.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");







var RegisterPage = /** @class */ (function () {
    function RegisterPage(fb, route, loadingCtrl, profileService) {
        this.fb = fb;
        this.route = route;
        this.loadingCtrl = loadingCtrl;
        this.profileService = profileService;
        this.registerdetails = {
            name: '',
            email: '',
            uid: '',
            created: 0,
            role: 'client'
        };
        this.register = fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z0-9-.]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            cpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validator: Object(src_app_module_must_match__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('password', 'cpassword')
        });
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.PersonRegister = function () {
        this.registerdetails.name = this.register.value.name;
        this.registerdetails.email = this.register.value.email;
        this.registerdetails.created = Date.now();
        this.profileService.addAdmin(this.registerdetails, this.register.value.password);
    };
    RegisterPage.prototype.login = function () {
        this.route.navigateByUrl('login');
    };
    RegisterPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] }
    ]; };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module.js.map