(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title align=\"center\">POPULAR</ion-title>\r\n        <ion-buttons slot=\"end\" (click)=\"fliter()\">\r\n            <ion-icon name=\"options\"></ion-icon>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-grid style=\"height: 100%\" *ngIf=\"data == true && show==true && propertyList?.length >0\">\r\n        <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column; text-align: center;\">\r\n            <p class=\"centerT\">\r\n                There are currently no properties found at <span class=\"color\"> \" {{SeachLocation}} \" </span> try a different location\r\n            </p>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <ion-grid style=\"height: 100%\" *ngIf=\"data == true && !(propertyList?.length >0) \">\r\n        <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column; text-align: center;\">\r\n\r\n            <p class=\"centerT\">\r\n                Please reduce your filter in order to see the property\r\n            </p>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n\r\n    <div class=\"row\" *ngIf=\"data == true\">\r\n\r\n        <!-- <div *ngIf=\"show==true && propertyList.length >0\">\r\n            <ion-card class=\"warning-card\">\r\n                <ion-card-content>\r\n                    There are currently no properties found at \"{{SeachLocation}}\" try a different location\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </div>\r\n\r\n        <div *ngIf=\" !(propertyList.length >0) \">\r\n            <ion-card class=\"warning-card\">\r\n                <ion-card-content>\r\n                    Please reduce your filter in order to see the property\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </div> -->\r\n\r\n        <div class=\"column\" *ngFor=\"let items of propertyList  | propertyFilterPipe:{ property: 'reactionCount', descending: true }  |  categoryFilterPipe: SeachLocation\">\r\n            <!-- <div class=\"column\" *ngFor=\"let items of propertyList  | categoryFilterPipe: SeachLocation\"> -->\r\n            {{this.hide(2)}}\r\n            <ion-card class=\"card\">\r\n                <img src=\"{{items.mainImage}}\" style=\"width:100%\" (click)=\"detail(items)\">\r\n\r\n                <ion-card-content>\r\n                    <div class=\"action\" class=\"like\" (click)=\"react(items.key, items.userReaction)\" [class.liked]=\"items.userReaction != null\">\r\n                        <ion-icon class=\"ion-float-right\" name=\"heart\"></ion-icon>\r\n                    </div>\r\n                    <div (click)=\"detail(items)\">\r\n                        <p>{{items.price | currency:'R'}}</p>\r\n                        <p>{{items.location}}</p>\r\n                        <div>\r\n                            <i class=\"fa fa-bed\" aria-hidden=\"true\" *ngIf=\"items.bedrooms!=0\">\r\n                                <span class=\"pad-value\">{{items.bedrooms}}</span>\r\n                            </i>\r\n                            <i class=\"fa fa-bath\" aria-hidden=\"true\" *ngIf=\"items.bathrooms!=0\">\r\n                                <span class=\"pad-value\"> {{items.bathrooms}}</span>\r\n                            </i>\r\n                            <i class=\"fa fa-car\" aria-hidden=\"true\" *ngIf=\"items.garage!=0\"> \r\n                                <span class=\"pad-value\">  {{items.garage}}</span>\r\n                            </i>\r\n                        </div>\r\n                    </div>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"data == false\">\r\n        <div class=\"column\" *ngFor=\"let i of [1,2,3,4]\">\r\n            <ion-card class=\"catt\">\r\n                <ion-skeleton-text animated style=\"width: 100%; height: 170px;\"></ion-skeleton-text>\r\n                <ion-card-content>\r\n\r\n                    <ion-skeleton-text animated style=\"width: 5%; float: right;\"></ion-skeleton-text>\r\n\r\n                    <div>\r\n                        <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\r\n                        <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n\r\n                        <ion-grid class=\"ion-no-padding\">\r\n                            <ion-row>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n\r\n                            </ion-row>\r\n                        </ion-grid>\r\n                    </div>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </div>\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/category/category-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/category/category-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageRoutingModule", function() { return CategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.page */ "./src/app/pages/category/category.page.ts");




var routes = [
    {
        path: '',
        component: _category_page__WEBPACK_IMPORTED_MODULE_3__["CategoryPage"]
    }
];
var CategoryPageRoutingModule = /** @class */ (function () {
    function CategoryPageRoutingModule() {
    }
    CategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CategoryPageRoutingModule);
    return CategoryPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/category/category.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.module.ts ***!
  \***************************************************/
/*! exports provided: CategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-routing.module */ "./src/app/pages/category/category-routing.module.ts");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category.page */ "./src/app/pages/category/category.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








var CategoryPageModule = /** @class */ (function () {
    function CategoryPageModule() {
    }
    CategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _category_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryPageRoutingModule"]
            ],
            declarations: [_category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]]
        })
    ], CategoryPageModule);
    return CategoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/category/category.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  box-sizing: border-box;\n}\n\nion-header {\n  --background: #a02b2d;\n}\n\nion-buttons {\n  padding-right: 2px;\n  font-size: 25px !important;\n}\n\n.column {\n  float: left;\n  width: 25%;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n@media screen and (max-width: 1650px) {\n  .column {\n    float: left;\n    width: 33.33%;\n  }\n}\n\n@media screen and (max-width: 1150px) {\n  .column {\n    float: left;\n    width: 50%;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .column {\n    float: left;\n    width: 100%;\n  }\n}\n\nion-card img {\n  background-size: auto 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 200px;\n}\n\nion-card-content {\n  color: black;\n  margin-left: 3px;\n  margin-right: 3px;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n\ni {\n  padding-right: 10px;\n}\n\ni .pad-value {\n  padding-left: 5px;\n}\n\n.action ion-icon {\n  font-size: 20px;\n}\n\n.like {\n  cursor: pointer;\n  font-size: 20px;\n}\n\n.like.liked {\n  font-weight: bold;\n  color: #a02b2d;\n}\n\n.color {\n  color: #a02b2d;\n}\n\n.location {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n.centerT {\n  width: 100% !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvQzpcXFVzZXJzXFxDb2RlVHJpYmVcXERlc2t0b3BcXENvZGVUcmliZVxcaW9uaWNcXEtleXdvcnhBcHAvc3JjXFxhcHBcXHBhZ2VzXFxjYXRlZ29yeVxcY2F0ZWdvcnkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXRlZ29yeS9jYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUVJLGtCQUFBO0VBQ0EsMEJBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FDQUo7O0FETUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNISjs7QURNQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGFBQUE7RUNITjtBQUNGOztBRE1BO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsVUFBQTtFQ0pOO0FBQ0Y7O0FET0E7RUFDSTtJQUNJLFdBQUE7SUFDQSxXQUFBO0VDTE47QUFDRjs7QURVSTtFQUNJLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7QUNSUjs7QURZQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1RKOztBRFlBO0VBQ0ksbUJBQUE7QUNUSjs7QURVSTtFQUNJLGlCQUFBO0FDUlI7O0FEYUk7RUFDSSxlQUFBO0FDVlI7O0FEY0E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQ1hKOztBRFlJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDVlI7O0FEY0E7RUFDSSxjQUFBO0FDWEo7O0FEY0E7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0FDWEo7O0FEY0E7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDWEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXRlZ29yeS9jYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjYTAyYjJkO1xyXG59XHJcblxyXG5pb24tYnV0dG9ucyB7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29sdW1uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLy8gLnNjLWlvbi1jYXJkLWlvcy1oIHtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuLy8gfVxyXG4ucm93OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjUwcHgpIHtcclxuICAgIC5jb2x1bW4ge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTBweCkge1xyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5jb2x1bW4ge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG59XHJcblxyXG5pIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAucGFkLXZhbHVlIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGlvbiB7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGlrZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAmLmxpa2VkIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogI2EwMmIyZDtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbG9yIHtcclxuICAgIGNvbG9yOiAjYTAyYjJkO1xyXG59XHJcblxyXG4ubG9jYXRpb24ge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZW50ZXJUIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59IiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICNhMDJiMmQ7XG59XG5cbmlvbi1idXR0b25zIHtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xuICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbn1cblxuLmNvbHVtbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjUlO1xufVxuXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjUwcHgpIHtcbiAgLmNvbHVtbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDMzLjMzJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MHB4KSB7XG4gIC5jb2x1bW4ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb2x1bW4ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5pb24tY2FyZCBpbWcge1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cblxuaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5pIC5wYWQtdmFsdWUge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLmFjdGlvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmxpa2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5saWtlLmxpa2VkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjYTAyYjJkO1xufVxuXG4uY29sb3Ige1xuICBjb2xvcjogI2EwMmIyZDtcbn1cblxuLmxvY2F0aW9uIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLmNlbnRlclQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/category/category.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/category/category.page.ts ***!
  \*************************************************/
/*! exports provided: CategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPage", function() { return CategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_services_favourite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/favourite.service */ "./src/app/services/favourite.service.ts");






var CategoryPage = /** @class */ (function () {
    function CategoryPage(categoryService, profileService, favouriteService, router) {
        this.categoryService = categoryService;
        this.profileService = profileService;
        this.favouriteService = favouriteService;
        this.router = router;
        this.SeachLocation = "";
        this.data = false;
        this.show = false;
    }
    CategoryPage.prototype.ngOnInit = function () {
    };
    CategoryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.hide(0);
        this.categoryService.filterproperty().subscribe(function (data) {
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
            _this.data = true;
            console.log(_this.propertyList);
        });
        this.SeachLocation = this.categoryService.searchL;
        this.show = false;
        if (this.SeachLocation == null || this.SeachLocation == '') {
            this.hide(2);
            this.propertyAfterFilter();
        }
        else {
            this.propertyAfterFilter();
        }
    };
    CategoryPage.prototype.initializeItems = function () {
        this.propertyList = this.propertyListLoaded;
    };
    CategoryPage.prototype.hide = function (v) {
        this.count = v;
    };
    CategoryPage.prototype.substring = function (str) {
        var slug = str.indexOf(',', str.indexOf(',') + 1);
        return str.substring(0, slug);
    };
    CategoryPage.prototype.propertyAfterFilter = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.count != 2 || _this.count != "2") {
                console.log("i jjj");
                _this.show = true;
            }
            else {
                console.log("sad");
            }
        }, 1000);
    };
    CategoryPage.prototype.fliter = function () {
        this.router.navigateByUrl("filter-category");
    };
    CategoryPage.prototype.detail = function (items) {
        // this.router.navigate(['/details'], {
        //   queryParams: {
        //     mainImage: items.mainImage,
        //     uid: items.uid, propertyid: items.propertyid,
        //     location: items.location, price: items.price, description: items.description
        //   }
        // });
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify(items),
            }
        };
        this.router.navigate(['details'], navigationExtras);
    };
    CategoryPage.prototype.react = function (key, val) {
        var userID = this.profileService.getUID();
        if (val != 0) {
            this.favouriteService.updatefavourite(key, userID, 0);
        }
        else {
            this.favouriteService.removefavourite(key, userID);
        }
    };
    CategoryPage.prototype.filterList = function (evt) {
        this.initializeItems();
        var searchTerm = evt.srcElement.value;
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
    CategoryPage.ctorParameters = function () { return [
        { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
        { type: src_app_services_favourite_service__WEBPACK_IMPORTED_MODULE_5__["FavouriteService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category.page.scss */ "./src/app/pages/category/category.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
            src_app_services_favourite_service__WEBPACK_IMPORTED_MODULE_5__["FavouriteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CategoryPage);
    return CategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-category-category-module.js.map