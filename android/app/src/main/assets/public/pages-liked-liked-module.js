(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-liked-liked-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/liked/liked.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/liked/liked.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n\r\n        <ion-title>My Favorites</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <!-- <ion-grid style=\"height: 100%\" *ngIf=\"data == true && show==false\">\r\n        <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column; text-align: center;\">\r\n\r\n            <p class=\"centerT\">\r\n                Your currently don't have properties liked, Your liked properties will appear here.\r\n            </p>\r\n        </ion-row>\r\n    </ion-grid> -->\r\n\r\n\r\n    <div *ngIf=\"data==true\">\r\n        <div *ngFor=\"let favourite of favouriteList\">\r\n            <div class=\"row\">\r\n\r\n                <div class=\"column\" *ngFor=\"let items of propertyList\">\r\n\r\n                    <ion-card class=\"card\" *ngIf=\"favourite.key === items.key\">\r\n                        {{this.hide(2)}}\r\n                        <img src=\"{{items.mainImage}}\" style=\"width:100%\" (click)=\"detail(items)\">\r\n\r\n                        <ion-card-content>\r\n                            <div class=\"action\" class=\"like\" (click)=\"react(items.key, items.userReaction)\" [class.liked]=\"items.userReaction != null\">\r\n                                <ion-icon class=\"ion-float-right\" name=\"heart\"></ion-icon>\r\n                            </div>\r\n                            <div (click)=\"detail(items)\">\r\n                                <p>{{items.price | currency:'R'}}</p>\r\n                                <p>{{items.location}}</p>\r\n                                <i class=\"fa fa-bed\" aria-hidden=\"true\" *ngIf=\"items.bedrooms!=0\">\r\n                                    <span class=\"pad-value\">{{items.bedrooms}}</span>\r\n                                </i>\r\n                                <i class=\"fa fa-bath\" aria-hidden=\"true\" *ngIf=\"items.bathrooms!=0\">\r\n                                    <span class=\"pad-value\"> {{items.bathrooms}}</span>\r\n                                </i>\r\n                                <i class=\"fa fa-car\" aria-hidden=\"true\" *ngIf=\"items.garage!=0\"> \r\n                                    <span class=\"pad-value\">  {{items.garage}}</span>\r\n                                </i>\r\n                            </div>\r\n                        </ion-card-content>\r\n                    </ion-card>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\" *ngIf=\"data == false\">\r\n        <div class=\"column\" *ngFor=\"let i of [1,2,3,4]\">\r\n            <ion-card class=\"catt\">\r\n                <ion-skeleton-text animated style=\"width: 100%; height: 170px;\"></ion-skeleton-text>\r\n                <ion-card-content>\r\n\r\n                    <ion-skeleton-text animated style=\"width: 5%; float: right;\"></ion-skeleton-text>\r\n\r\n                    <div>\r\n                        <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\r\n                        <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n\r\n                        <ion-grid class=\"ion-no-padding\">\r\n                            <ion-row>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n\r\n                            </ion-row>\r\n                        </ion-grid>\r\n                    </div>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </div>\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/liked/liked-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/liked/liked-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LikedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikedPageRoutingModule", function() { return LikedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _liked_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./liked.page */ "./src/app/pages/liked/liked.page.ts");




var routes = [
    {
        path: '',
        component: _liked_page__WEBPACK_IMPORTED_MODULE_3__["LikedPage"]
    }
];
var LikedPageRoutingModule = /** @class */ (function () {
    function LikedPageRoutingModule() {
    }
    LikedPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LikedPageRoutingModule);
    return LikedPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/liked/liked.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/liked/liked.module.ts ***!
  \*********************************************/
/*! exports provided: LikedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikedPageModule", function() { return LikedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _liked_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./liked-routing.module */ "./src/app/pages/liked/liked-routing.module.ts");
/* harmony import */ var _liked_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./liked.page */ "./src/app/pages/liked/liked.page.ts");







var LikedPageModule = /** @class */ (function () {
    function LikedPageModule() {
    }
    LikedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _liked_routing_module__WEBPACK_IMPORTED_MODULE_5__["LikedPageRoutingModule"]
            ],
            declarations: [_liked_page__WEBPACK_IMPORTED_MODULE_6__["LikedPage"]]
        })
    ], LikedPageModule);
    return LikedPageModule;
}());



/***/ }),

/***/ "./src/app/pages/liked/liked.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/liked/liked.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  box-sizing: border-box;\n}\n\nion-header {\n  --background: #a02b2d;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.column {\n  float: left;\n  width: 25%;\n}\n\n@media screen and (max-width: 1650px) {\n  .column {\n    float: left;\n    width: 33.33%;\n  }\n}\n\n@media screen and (max-width: 1150px) {\n  .column {\n    float: left;\n    width: 50%;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .column {\n    float: left;\n    width: 100%;\n  }\n}\n\nion-header {\n  --background: #a02b2d;\n}\n\nion-title {\n  text-align: center;\n}\n\ni {\n  padding-right: 10px;\n}\n\ni .pad-value {\n  padding-left: 5px;\n}\n\nion-card img {\n  background-size: auto 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 200px;\n}\n\nion-card-content {\n  color: black;\n  margin-left: 3px;\n  margin-right: 3px;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n\ni {\n  padding-right: 10px;\n}\n\ni .pad-value {\n  padding-left: 5px;\n}\n\n.action ion-icon {\n  font-size: 20px;\n}\n\n.like {\n  cursor: pointer;\n  font-size: 20px;\n}\n\n.like.liked {\n  font-weight: bold;\n  color: #a02b2d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlrZWQvQzpcXFVzZXJzXFxDb2RlVHJpYmVcXERlc2t0b3BcXENvZGVUcmliZVxcaW9uaWNcXEtleXdvcnhBcHAvc3JjXFxhcHBcXHBhZ2VzXFxsaWtlZFxcbGlrZWQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9saWtlZC9saWtlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGFBQUE7RUNDTjtBQUNGOztBREVBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsVUFBQTtFQ0FOO0FBQ0Y7O0FER0E7RUFDSTtJQUNJLFdBQUE7SUFDQSxXQUFBO0VDRE47QUFDRjs7QURJQTtFQUNJLHFCQUFBO0FDRko7O0FES0E7RUFDSSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksbUJBQUE7QUNGSjs7QURHSTtFQUNJLGlCQUFBO0FDRFI7O0FET0k7RUFDSSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FDSlI7O0FEUUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNMSjs7QURRQTtFQUNJLG1CQUFBO0FDTEo7O0FETUk7RUFDSSxpQkFBQTtBQ0pSOztBRFNJO0VBQ0ksZUFBQTtBQ05SOztBRFVBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNQSjs7QURRSTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQ05SIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGlrZWQvbGlrZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2EwMmIyZDtcclxufVxyXG5cclxuLnJvdzphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2NTBweCkge1xyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMzJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MHB4KSB7XHJcbiAgICAuY29sdW1uIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjYTAyYjJkO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAucGFkLXZhbHVlIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGltZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxufVxyXG5cclxuaSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgLnBhZC12YWx1ZSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3Rpb24ge1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmxpa2Uge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgJi5saWtlZCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICNhMDJiMmQ7XHJcbiAgICB9XHJcbn0iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogI2EwMmIyZDtcbn1cblxuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNvbHVtbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjUlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjUwcHgpIHtcbiAgLmNvbHVtbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDMzLjMzJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MHB4KSB7XG4gIC5jb2x1bW4ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb2x1bW4ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5pb24taGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjYTAyYjJkO1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmkge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuaSAucGFkLXZhbHVlIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbmlvbi1jYXJkIGltZyB7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgcGFkZGluZy1yaWdodDogM3B4O1xufVxuXG5pIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbmkgLnBhZC12YWx1ZSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4uYWN0aW9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubGlrZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmxpa2UubGlrZWQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNhMDJiMmQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/liked/liked.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/liked/liked.page.ts ***!
  \*******************************************/
/*! exports provided: LikedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikedPage", function() { return LikedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_favourite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/favourite.service */ "./src/app/services/favourite.service.ts");
/* harmony import */ var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/property.service */ "./src/app/services/property.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LikedPage = /** @class */ (function () {
    function LikedPage(favouriteService, propertyService, profileService, router) {
        var _this = this;
        this.favouriteService = favouriteService;
        this.propertyService = propertyService;
        this.profileService = profileService;
        this.router = router;
        this.data = false;
        this.show = false;
        this.propertyService.propertyList().subscribe(function (data) {
            _this.propertyList = data.map(function (e) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: e.payload.doc.id }, e.payload.doc.data());
            });
            _this.favouriteService.getfavouriteUser().subscribe(function (data) {
                _this.favouriteList = data.map(function (e) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: e.payload.doc.id }, e.payload.doc.data());
                });
                for (var _i = 0, _a = _this.favouriteList; _i < _a.length; _i++) {
                    var reactionInfo = _a[_i];
                    var _loop_1 = function (property) {
                        if (reactionInfo.key === property.key) {
                            _this.favouriteService.count(property.key).subscribe(function (data) {
                                property.userReaction = _this.favouriteService.userfavourite(data);
                            });
                        }
                    };
                    for (var _b = 0, _c = _this.propertyList; _b < _c.length; _b++) {
                        var property = _c[_b];
                        _loop_1(property);
                    }
                }
            });
            console.log(_this.propertyList);
            _this.data = true;
        });
    }
    LikedPage.prototype.ngOnInit = function () {
    };
    LikedPage.prototype.hide = function (v) {
        this.count = v;
        // if (this.count == 2) {
        //   this.show = true
        // }
    };
    LikedPage.prototype.react = function (key, val) {
        var userID = this.profileService.getUID();
        if (val != 0) {
            this.favouriteService.updatefavourite(key, userID, 0);
        }
        else {
            this.favouriteService.removefavourite(key, userID);
        }
    };
    LikedPage.prototype.detail = function (items) {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify(items),
            }
        };
        this.router.navigate(['details'], navigationExtras);
    };
    LikedPage.ctorParameters = function () { return [
        { type: src_app_services_favourite_service__WEBPACK_IMPORTED_MODULE_2__["FavouriteService"] },
        { type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_3__["PropertyService"] },
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    LikedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-liked',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./liked.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/liked/liked.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./liked.page.scss */ "./src/app/pages/liked/liked.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_favourite_service__WEBPACK_IMPORTED_MODULE_2__["FavouriteService"],
            src_app_services_property_service__WEBPACK_IMPORTED_MODULE_3__["PropertyService"],
            src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LikedPage);
    return LikedPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-liked-liked-module.js.map