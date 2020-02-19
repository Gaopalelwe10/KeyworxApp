(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-filteroutput-filteroutput-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filteroutput/filteroutput.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filteroutput/filteroutput.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\" (click)=\"home()\">\r\n            <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-buttons>\r\n        <ion-title align=\"center\">Featured</ion-title>\r\n        <ion-buttons slot=\"end\" (click)=\"fliter()\">\r\n            <ion-icon name=\"options\"></ion-icon>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n    <ion-grid style=\"height: 100%\" *ngIf=\"data == true && show==true && propertyList?.length >0\">\r\n        <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column; text-align: center;\">\r\n            <p class=\"centerT\">\r\n                There are currently no properties found at <span class=\"color\"> \" {{SeachLocation}} \" </span> try a different location\r\n            </p>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <ion-grid style=\"height: 100%\" *ngIf=\"data == true && !(propertyList?.length >0) \">\r\n        <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column; text-align: center;\">\r\n\r\n            <p class=\"centerT\">\r\n                Please reduce your filter in order to see the property\r\n            </p>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n    <div class=\"row\" *ngIf=\"data == true\">\r\n\r\n        <!-- <div *ngIf=\"show == true && !(propertyList.length >0) \">\r\n            <ion-card class=\"warning-card\">\r\n                <ion-card-content>\r\n                    Please reduce your filter in order to see the property\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </div> -->\r\n\r\n\r\n        <div class=\"column\" *ngFor=\"let items of propertyList | locationFiterPipe: SeachLocation\">\r\n            {{this.hide(2)}}\r\n            <ion-card class=\"card\">\r\n                <img src=\"{{items.mainImage}}\" style=\"width:100%\" (click)=\"detail(items)\">\r\n\r\n                <ion-card-content>\r\n                    <div class=\"action\" class=\"like\" (click)=\"react(items.key, items.userReaction)\" [class.liked]=\"items.userReaction != null\">\r\n                        <ion-icon class=\"ion-float-right\" name=\"heart\"></ion-icon>\r\n                    </div>\r\n                    <div (click)=\"detail(items)\">\r\n                        <p>{{items.price | currency:'R'}}</p>\r\n                        <p>{{items.location}}</p>\r\n                        <div>\r\n                            <i class=\"fa fa-bed\" aria-hidden=\"true\" *ngIf=\"items.bedrooms!=0\">\r\n                                <span class=\"pad-value\">{{items.bedrooms}}</span>\r\n                            </i>\r\n                            <i class=\"fa fa-bath\" aria-hidden=\"true\" *ngIf=\"items.bathrooms!=0\">\r\n                                <span class=\"pad-value\"> {{items.bathrooms}}</span>\r\n                            </i>\r\n                            <i class=\"fa fa-car\" aria-hidden=\"true\" *ngIf=\"items.garage!=0\"> \r\n                                <span class=\"pad-value\">  {{items.garage}}</span>\r\n                            </i>\r\n                        </div>\r\n                    </div>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </div>\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/filteroutput/filteroutput-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/filteroutput/filteroutput-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: FilteroutputPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilteroutputPageRoutingModule", function() { return FilteroutputPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _filteroutput_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filteroutput.page */ "./src/app/pages/filteroutput/filteroutput.page.ts");




var routes = [
    {
        path: '',
        component: _filteroutput_page__WEBPACK_IMPORTED_MODULE_3__["FilteroutputPage"]
    }
];
var FilteroutputPageRoutingModule = /** @class */ (function () {
    function FilteroutputPageRoutingModule() {
    }
    FilteroutputPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FilteroutputPageRoutingModule);
    return FilteroutputPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/filteroutput/filteroutput.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/filteroutput/filteroutput.module.ts ***!
  \***********************************************************/
/*! exports provided: FilteroutputPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilteroutputPageModule", function() { return FilteroutputPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _filteroutput_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filteroutput-routing.module */ "./src/app/pages/filteroutput/filteroutput-routing.module.ts");
/* harmony import */ var _filteroutput_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filteroutput.page */ "./src/app/pages/filteroutput/filteroutput.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








var FilteroutputPageModule = /** @class */ (function () {
    function FilteroutputPageModule() {
    }
    FilteroutputPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _filteroutput_routing_module__WEBPACK_IMPORTED_MODULE_5__["FilteroutputPageRoutingModule"]
            ],
            declarations: [_filteroutput_page__WEBPACK_IMPORTED_MODULE_6__["FilteroutputPage"]]
        })
    ], FilteroutputPageModule);
    return FilteroutputPageModule;
}());



/***/ }),

/***/ "./src/app/pages/filteroutput/filteroutput.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/filteroutput/filteroutput.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  box-sizing: border-box;\n}\n\nion-header {\n  --background: #a02b2d;\n}\n\n.column {\n  float: left;\n  width: 25%;\n  padding: 10px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n@media screen and (max-width: 1650px) {\n  .column {\n    float: left;\n    width: 33.33%;\n    padding: 10px;\n  }\n}\n\n@media screen and (max-width: 1150px) {\n  .column {\n    float: left;\n    width: 50%;\n    padding: 10px;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .column {\n    float: left;\n    width: 100%;\n    padding: 10px;\n  }\n}\n\nion-card img {\n  background-size: auto 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 200px;\n}\n\nion-card-content {\n  color: black;\n  margin-left: 3px;\n  margin-right: 3px;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n\ni {\n  padding-right: 10px;\n}\n\ni .pad-value {\n  padding-left: 5px;\n}\n\n.action ion-icon {\n  font-size: 20px;\n}\n\n.like {\n  cursor: pointer;\n  font-size: 20px;\n}\n\n.like.liked {\n  font-weight: bold;\n  color: #a02b2d;\n}\n\n.centerT {\n  width: 70%;\n  text-align: center !important;\n}\n\n.color {\n  color: #a02b2d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmlsdGVyb3V0cHV0L0M6XFxVc2Vyc1xcQ29kZVRyaWJlXFxEZXNrdG9wXFxDb2RlVHJpYmVcXGlvbmljXFxLZXl3b3J4QXBwL3NyY1xcYXBwXFxwYWdlc1xcZmlsdGVyb3V0cHV0XFxmaWx0ZXJvdXRwdXQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9maWx0ZXJvdXRwdXQvZmlsdGVyb3V0cHV0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0VDQ047QUFDRjs7QURFQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLFVBQUE7SUFDQSxhQUFBO0VDQU47QUFDRjs7QURHQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0VDRE47QUFDRjs7QURNSTtFQUNJLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7QUNKUjs7QURRQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0xKOztBRFFBO0VBQ0ksbUJBQUE7QUNMSjs7QURNSTtFQUNJLGlCQUFBO0FDSlI7O0FEU0k7RUFDSSxlQUFBO0FDTlI7O0FEVUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQ1BKOztBRFFJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDTlI7O0FEYUE7RUFDSSxVQUFBO0VBQ0EsNkJBQUE7QUNWSjs7QURhQTtFQUNJLGNBQUE7QUNWSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpbHRlcm91dHB1dC9maWx0ZXJvdXRwdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2EwMmIyZDtcclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ucm93OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjUwcHgpIHtcclxuICAgIC5jb2x1bW4ge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MHB4KSB7XHJcbiAgICAuY29sdW1uIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuY29sdW1uIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG59XHJcblxyXG5pIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAucGFkLXZhbHVlIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGlvbiB7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGlrZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAmLmxpa2VkIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogI2EwMmIyZDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLndhcm5pbmctY2FyZCB7XHJcbi8vICAgICBoZWlnaHQ6IDMzNnB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLmNlbnRlclQge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29sb3Ige1xyXG4gICAgY29sb3I6ICNhMDJiMmQ7XHJcbn0iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogI2EwMmIyZDtcbn1cblxuLmNvbHVtbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjUlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjUwcHgpIHtcbiAgLmNvbHVtbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDMzLjMzJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTUwcHgpIHtcbiAgLmNvbHVtbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29sdW1uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG59XG5pb24tY2FyZCBpbWcge1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cblxuaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5pIC5wYWQtdmFsdWUge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLmFjdGlvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmxpa2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5saWtlLmxpa2VkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjYTAyYjJkO1xufVxuXG4uY2VudGVyVCB7XG4gIHdpZHRoOiA3MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3Ige1xuICBjb2xvcjogI2EwMmIyZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/filteroutput/filteroutput.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/filteroutput/filteroutput.page.ts ***!
  \*********************************************************/
/*! exports provided: FilteroutputPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilteroutputPage", function() { return FilteroutputPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/property.service */ "./src/app/services/property.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_favourite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/favourite.service */ "./src/app/services/favourite.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var FilteroutputPage = /** @class */ (function () {
    function FilteroutputPage(router, propertyService, profileService, favouriteService, navC) {
        this.router = router;
        this.propertyService = propertyService;
        this.profileService = profileService;
        this.favouriteService = favouriteService;
        this.navC = navC;
        this.SeachLocation = '';
        this.data = false;
        this.show = false;
    }
    FilteroutputPage.prototype.ngOnInit = function () {
    };
    FilteroutputPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.hide(0);
        this.propertyService.filterproperty().subscribe(function (data) {
            _this.propertyList = data.map(function (e) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: e.payload.doc.id }, e.payload.doc.data());
            });
            _this.propertyListLoaded = data.map(function (e) {
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
                                // property.reactionCount = this.favouriteService.countfavourite(data)[0];
                                property.userReaction = _this.favouriteService.userfavourite(data);
                            });
                        }
                        var _loop_2 = function (property_1) {
                            if (reactionInfo.key === property_1.key) {
                                _this.favouriteService.count(property_1.key).subscribe(function (data) {
                                    // property.reactionCount = this.favouriteService.countfavourite(data)[0];
                                    property_1.userReaction = _this.favouriteService.userfavourite(data);
                                });
                            }
                        };
                        for (var _i = 0, _a = _this.propertyListLoaded; _i < _a.length; _i++) {
                            var property_1 = _a[_i];
                            _loop_2(property_1);
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
        this.SeachLocation = this.propertyService.searchL;
        this.show = false;
        if (this.SeachLocation == null || this.SeachLocation == '') {
            this.hide(2);
            this.propertyAfterFilter();
        }
        else {
            this.propertyAfterFilter();
        }
    };
    FilteroutputPage.prototype.hide = function (v) {
        this.count = v;
    };
    FilteroutputPage.prototype.propertyAfterFilter = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.count != 2) {
                _this.show = true;
            }
        }, 1000);
    };
    FilteroutputPage.prototype.initializeItems = function () {
        this.propertyList = this.propertyListLoaded;
    };
    FilteroutputPage.prototype.detail = function (items) {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify(items),
            }
        };
        this.router.navigate(['details'], navigationExtras);
    };
    FilteroutputPage.prototype.filterList = function (evt) {
        this.initializeItems();
        var searchTerm = evt;
        if (!searchTerm) {
            return;
        }
        this.propertyList = this.propertyList.filter(function (currentProperty) {
            if (currentProperty.location && searchTerm) {
                if (currentProperty.location.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    FilteroutputPage.prototype.fliter = function () {
        this.router.navigateByUrl("filter");
    };
    FilteroutputPage.prototype.home = function () {
        this.router.navigateByUrl("tabs/home");
    };
    FilteroutputPage.prototype.react = function (key, val) {
        var userID = this.profileService.getUID();
        if (val != 0) {
            this.favouriteService.updatefavourite(key, userID, 0);
        }
        else {
            this.favouriteService.removefavourite(key, userID);
        }
    };
    FilteroutputPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_2__["PropertyService"] },
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] },
        { type: src_app_services_favourite_service__WEBPACK_IMPORTED_MODULE_5__["FavouriteService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
    ]; };
    FilteroutputPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filteroutput',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./filteroutput.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filteroutput/filteroutput.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./filteroutput.page.scss */ "./src/app/pages/filteroutput/filteroutput.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_property_service__WEBPACK_IMPORTED_MODULE_2__["PropertyService"],
            src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
            src_app_services_favourite_service__WEBPACK_IMPORTED_MODULE_5__["FavouriteService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])
    ], FilteroutputPage);
    return FilteroutputPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-filteroutput-filteroutput-module.js.map