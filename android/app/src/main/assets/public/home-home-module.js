(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-title>\r\n            Home\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\" (click)=\" fliter()\">\r\n            <ion-icon name=\"options\"></ion-icon>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n    <ion-item lines=\"none\">\r\n        <p slot=\"start\"><b>FEATURED</b></p>\r\n        <p slot=\"end\" color=\"medium\" (click)=\"viewFeatuered()\">View all</p>\r\n    </ion-item>\r\n\r\n    <ion-slides [options]=\"slidesOptions\" *ngIf=\"data == false || !(propertyList?.length >0)\">\r\n        <ion-slide *ngFor=\"let i of [1,2,3,4,5,6,7] \">\r\n\r\n            <ion-card class=\"cat\">\r\n                <ion-skeleton-text animated style=\"width: 100%; height: 90px\"></ion-skeleton-text>\r\n                <ion-card-content>\r\n\r\n                    <ion-skeleton-text animated style=\"width: 5%; float: right;\"></ion-skeleton-text>\r\n\r\n                    <div>\r\n                        <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n                        <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n\r\n                        <ion-grid class=\"ion-no-padding\">\r\n                            <ion-row>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n\r\n                            </ion-row>\r\n                        </ion-grid>\r\n                    </div>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </ion-slide>\r\n    </ion-slides>\r\n\r\n\r\n    <ion-slides [options]=\"slidesOptions\">\r\n        <ion-slide *ngFor=\"let details of propertyList\">\r\n            <ion-card class=\"cat\">\r\n                <div>\r\n                    <img src=\"{{details.mainImage}}\" (click)=\"detail(details)\">\r\n                    <ion-card-content slot=\"start\">\r\n                        <div class=\"action\" class=\"like\" (click)=\"react(details.key, details.userReaction)\" [class.liked]=\"details.userReaction != null\">\r\n                            <ion-icon class=\"ion-float-right\" name=\"heart\"></ion-icon>\r\n                        </div>\r\n                        <div (click)=\"detail(details)\">\r\n                            <p>{{details.price | currency:'R'}}</p>\r\n                            <p>{{details.location | slice:0:12}}...</p>\r\n\r\n                            <i class=\"fa fa-bed\" aria-hidden=\"true\" *ngIf=\"details.bedrooms!=0\">\r\n                                                <span class=\"pad-value\">{{details.bedrooms}}</span>\r\n                                            </i>\r\n                            <i class=\"fa fa-bath\" aria-hidden=\"true\" *ngIf=\"details.bathrooms!=0\">\r\n                                                <span class=\"pad-value\"> {{details.bathrooms}}</span>\r\n                                            </i>\r\n                            <i class=\"fa fa-car\" aria-hidden=\"true\" *ngIf=\"details.garage!=0\"> \r\n                                                <span class=\"pad-value\">  {{details.garage}}</span>\r\n                                            </i>\r\n                        </div>\r\n                    </ion-card-content>\r\n                </div>\r\n            </ion-card>\r\n        </ion-slide>\r\n    </ion-slides>\r\n\r\n\r\n    <ion-item lines=\"none\">\r\n        <p slot=\"start\"><b>POPULAR</b></p>\r\n        <p slot=\"end\" color=\"medium\" (click)=\"view()\">View all</p>\r\n    </ion-item>\r\n\r\n\r\n    <ion-slides [options]=\"slidesOptions\">\r\n        <ion-slide *ngFor=\"let details of propertyPopularList | propertyFilterPipe:{ property: 'reactionCount', descending: true }\">\r\n            <ion-card class=\"cat\">\r\n                <div>\r\n                    <img src=\"{{details.mainImage}}\" (click)=\"detail(details)\">\r\n                    <!-- <ion-img [src]=\"details.mainImage\"></ion-img> -->\r\n                    <ion-card-content slot=\"start\">\r\n                        <div class=\"action\" class=\"like\" (click)=\"react(details.key, details.userReaction)\" [class.liked]=\"details.userReaction != null\">\r\n                            <ion-icon class=\"ion-float-right\" name=\"heart\"></ion-icon>\r\n                        </div>\r\n                        <div (click)=\"detail(details)\">\r\n                            <p>{{details.price | currency:'R'}}</p>\r\n                            <p>{{details.location | slice:0:12}}...</p>\r\n                            <!-- <ion-item class=\"ion-no-padding ion-no-margin location\" lines=\"none\" style=\"font-size:13px ;\">\r\n                                <ion-label class=\"ion-no-padding ion-no-margin location\">{{details.location}}</ion-label>\r\n                            </ion-item> -->\r\n\r\n\r\n                            <i class=\"fa fa-bed\" aria-hidden=\"true\" *ngIf=\"details.bedrooms!=0\">\r\n                                <span class=\"pad-value\">{{details.bedrooms}}</span>\r\n                            </i>\r\n                            <i class=\"fa fa-bath\" aria-hidden=\"true\" *ngIf=\"details.bathrooms!=0\">\r\n                                <span class=\"pad-value\"> {{details.bathrooms}}</span>\r\n                            </i>\r\n                            <i class=\"fa fa-car\" aria-hidden=\"true\" *ngIf=\"details.garage!=0\"> \r\n                                <span class=\"pad-value\">  {{details.garage}}</span>\r\n                            </i>\r\n                        </div>\r\n                    </ion-card-content>\r\n                </div>\r\n            </ion-card>\r\n        </ion-slide>\r\n    </ion-slides>\r\n\r\n    <ion-slides [options]=\"slidesOptions\" *ngIf=\"data == false || !(propertyList?.length >0)\">\r\n        <ion-slide *ngFor=\"let i of [1,2,3,4,5,6,7] \">\r\n\r\n            <ion-card class=\"cat\">\r\n                <ion-skeleton-text animated style=\"width: 100%; height: 90px\"></ion-skeleton-text>\r\n                <ion-card-content>\r\n\r\n                    <ion-skeleton-text animated style=\"width: 5%; float: right;\"></ion-skeleton-text>\r\n\r\n                    <div>\r\n                        <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n                        <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n\r\n                        <ion-grid class=\"ion-no-padding\">\r\n                            <ion-row>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n\r\n                            </ion-row>\r\n                        </ion-grid>\r\n                    </div>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </ion-slide>\r\n    </ion-slides>\r\n\r\n    <!-- \r\n    <ion-item lines=\"none\">\r\n        <p slot=\"start\"><b>POPULAR</b></p>\r\n        <p slot=\"end\" color=\"medium\" (click)=\"view()\">View all</p>\r\n    </ion-item>\r\n\r\n\r\n    <ion-slides [options]=\"slidesOpt\" *ngIf=\"data == true\">\r\n\r\n        <ion-slide *ngFor=\"let details of propertyList \">\r\n            <ion-card class=\"catt\">\r\n\r\n                <img src=\"{{details.mainImage}}\" (click)=\"detail(details)\">\r\n                <ion-card-content>\r\n                    <div class=\"action\" class=\"like\" (click)=\"react(details.key, details.userReaction)\" [class.liked]=\"details.userReaction != null\">\r\n                        <ion-icon class=\"ion-float-right\" name=\"heart\"></ion-icon>\r\n                    </div>\r\n                    <div (click)=\"detail(details)\">\r\n                        <p>{{details.price | currency:'R'}}</p>\r\n                        <p>{{details.location}}</p>\r\n\r\n                        <i class=\"fa fa-bed\" aria-hidden=\"true\">\r\n                                                <span class=\"pad-value\">{{details.bedrooms}}</span>\r\n                                            </i>\r\n                        <i class=\"fa fa-bath\" aria-hidden=\"true\">\r\n                                                <span class=\"pad-value\"> {{details.bathrooms}}</span>\r\n                                            </i>\r\n                        <i class=\"fa fa-car\" aria-hidden=\"true\"> \r\n                                                <span class=\"pad-value\">  {{details.garage}}</span>\r\n                                            </i>\r\n                    </div>\r\n                </ion-card-content>\r\n\r\n            </ion-card>\r\n        </ion-slide>\r\n\r\n    </ion-slides>\r\n\r\n\r\n\r\n    <ion-slides [options]=\"slidesOpt\" *ngIf=\"data == false\">\r\n        <ion-slide *ngFor=\"let i of [1,2,3,4,5,6,7]\">\r\n\r\n            <ion-card class=\"catt\">\r\n                <ion-skeleton-text animated style=\"width: 100%; height: 170px;\"></ion-skeleton-text>\r\n                <ion-card-content>\r\n\r\n                    <ion-skeleton-text animated style=\"width: 5%; float: right;\"></ion-skeleton-text>\r\n\r\n                    <div>\r\n                        <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n                        <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n\r\n                        <ion-grid class=\"ion-no-padding\">\r\n                            <ion-row>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n\r\n                            </ion-row>\r\n                        </ion-grid>\r\n                    </div>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </ion-slide>\r\n    </ion-slides> -->\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  text-align: center;\n}\n\n.cat {\n  width: 140px;\n  margin: 5px;\n  text-align: start;\n  --color: black;\n}\n\n.cat p {\n  font-size: 13px;\n}\n\n.cat img {\n  width: 100% !important;\n  height: 90px;\n}\n\n.cat i {\n  font-size: 13px;\n  padding-right: 6px;\n}\n\n.cat i .pad-value {\n  padding-left: 3px;\n}\n\n.cat .like {\n  cursor: pointer;\n  font-size: 18px;\n}\n\n.cat .like.liked {\n  font-weight: bold;\n  color: #a02b2d;\n}\n\nion-card-content {\n  margin-left: 3px;\n  margin-right: 3px;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n\n.catt {\n  width: 290px;\n  height: 270px;\n  margin: 5px;\n  text-align: start;\n  color: black;\n}\n\n.catt img {\n  width: 100% !important;\n  height: 170px;\n}\n\n.catt .like {\n  cursor: pointer;\n  font-size: 20px;\n}\n\n.catt .like.liked {\n  font-weight: bold;\n  color: #a02b2d;\n}\n\ni {\n  padding-right: 10px;\n}\n\ni .pad-value {\n  padding-left: 5px;\n}\n\n@media screen and (max-width: 321px) {\n  .cat p {\n    font-size: 9px;\n  }\n  .cat i {\n    font-size: 9px;\n    padding-right: 6px;\n  }\n  .cat i .pad-value {\n    padding-left: 3px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXENvZGVUcmliZVxcRGVza3RvcFxcQ29kZVRyaWJlXFxpb25pY1xcS2V5d29yeEFwcC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURBSTtFQUNJLGVBQUE7QUNFUjs7QURBSTtFQUdJLHNCQUFBO0VBQ0EsWUFBQTtBQ0FSOztBREVJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDQVI7O0FEQ1E7RUFDSSxpQkFBQTtBQ0NaOztBREVJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNBUjs7QURDUTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQ0NaOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREVJO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0FDQVI7O0FERUk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQ0FSOztBRENRO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDQ1o7O0FESUE7RUFDSSxtQkFBQTtBQ0RKOztBREVJO0VBQ0ksaUJBQUE7QUNBUjs7QURJQTtFQUVRO0lBQ0ksY0FBQTtFQ0ZWO0VESU07SUFDSSxjQUFBO0lBQ0Esa0JBQUE7RUNGVjtFREdVO0lBQ0ksaUJBQUE7RUNEZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXQge1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIC0tY29sb3I6IGJsYWNrO1xyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgfVxyXG4gICAgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcclxuICAgICAgICAucGFkLXZhbHVlIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxpa2Uge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgJi5saWtlZCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBjb2xvcjogI2EwMmIyZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbn1cclxuXHJcbi5jYXR0IHtcclxuICAgIHdpZHRoOiAyOTBweDtcclxuICAgIGhlaWdodDogMjcwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICB9XHJcbiAgICAubGlrZSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAmLmxpa2VkIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYTAyYjJkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgLnBhZC12YWx1ZSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMXB4KSB7XHJcbiAgICAuY2F0IHtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG4gICAgICAgICAgICAucGFkLXZhbHVlIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2F0IHtcbiAgd2lkdGg6IDE0MHB4O1xuICBtYXJnaW46IDVweDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIC0tY29sb3I6IGJsYWNrO1xufVxuLmNhdCBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmNhdCBpbWcge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDkwcHg7XG59XG4uY2F0IGkge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcbn1cbi5jYXQgaSAucGFkLXZhbHVlIHtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG59XG4uY2F0IC5saWtlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uY2F0IC5saWtlLmxpa2VkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjYTAyYjJkO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG59XG5cbi5jYXR0IHtcbiAgd2lkdGg6IDI5MHB4O1xuICBoZWlnaHQ6IDI3MHB4O1xuICBtYXJnaW46IDVweDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5jYXR0IGltZyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTcwcHg7XG59XG4uY2F0dCAubGlrZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmNhdHQgLmxpa2UubGlrZWQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNhMDJiMmQ7XG59XG5cbmkge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuaSAucGFkLXZhbHVlIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMXB4KSB7XG4gIC5jYXQgcCB7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gIH1cbiAgLmNhdCBpIHtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gIH1cbiAgLmNhdCBpIC5wYWQtdmFsdWUge1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _services_property_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/property.service */ "./src/app/services/property.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_favourite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/favourite.service */ "./src/app/services/favourite.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/category.service */ "./src/app/services/category.service.ts");









// import { popoverController } from '@ionic/core';
var HomePage = /** @class */ (function () {
    function HomePage(router, propertyService, profileService, platform, favouriteService, categoryService, actionSheetController, navC) {
        var _this = this;
        this.router = router;
        this.propertyService = propertyService;
        this.profileService = profileService;
        this.platform = platform;
        this.favouriteService = favouriteService;
        this.categoryService = categoryService;
        this.actionSheetController = actionSheetController;
        this.navC = navC;
        this.slidesOptions = {
            slidesPerView: 2.3,
        };
        this.slidesOpt = {
            slidesPerView: 1.2,
            centerSlides: true,
        };
        this.userReaction = null;
        this.data = false;
        if (this.platform.is("ipad")) {
            this.slidesOptions = {
                slidesPerView: 4.2,
            };
            this.slidesOpt = {
                slidesPerView: 2.2,
                centerSlides: true,
            };
        }
        this.propertyService.propertyList().subscribe(function (data) {
            _this.propertyPopularList = data.map(function (e) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: e.payload.doc.id }, e.payload.doc.data());
            });
            _this.propertyList = data.map(function (e) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: e.payload.doc.id }, e.payload.doc.data());
            }).reverse();
            _this.favouriteService.getfavourite().subscribe(function (data) {
                _this.favouriteList = data.map(function (e) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: e.payload.doc.id }, e.payload.doc.data());
                });
                for (var _i = 0, _a = _this.favouriteList; _i < _a.length; _i++) {
                    var reactionInfo = _a[_i];
                    var _loop_1 = function (property) {
                        if (reactionInfo.key === property.key) {
                            _this.favouriteService.count(property.key).subscribe(function (data) {
                                property.reactionCount = _this.favouriteService.countfavourite(data)[0];
                                property.userReaction = _this.favouriteService.userfavourite(data);
                            });
                        }
                    };
                    for (var _b = 0, _c = _this.propertyList; _b < _c.length; _b++) {
                        var property = _c[_b];
                        _loop_1(property);
                    }
                }
                for (var _d = 0, _e = _this.favouriteList; _d < _e.length; _d++) {
                    var reactionInfo = _e[_d];
                    var _loop_2 = function (property) {
                        if (reactionInfo.key === property.key) {
                            _this.favouriteService.count(property.key).subscribe(function (data) {
                                property.reactionCount = _this.favouriteService.countfavourite(data)[0];
                                property.userReaction = _this.favouriteService.userfavourite(data);
                            });
                        }
                    };
                    for (var _f = 0, _g = _this.propertyPopularList; _f < _g.length; _f++) {
                        var property = _g[_f];
                        _loop_2(property);
                    }
                }
            });
            console.log(_this.propertyList);
            console.log(_this.propertyPopularList);
            _this.data = true;
        });
    }
    HomePage.prototype.ngOnInit = function () {
        this.textSearch = "sale";
    };
    HomePage.prototype.fliter = function () {
        // this.router.navigateByUrl("filter")
        this.navC.navigateForward("filter");
    };
    HomePage.prototype.logout = function () {
        this.profileService.logout();
    };
    HomePage.prototype.detail = function (items) {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify(items),
            }
        };
        // this.router.navigate(['details'], navigationExtras);
        this.navC.navigateForward(['details'], navigationExtras);
    };
    HomePage.prototype.viewFeatuered = function () {
        // this.router.navigateByUrl("filteroutput")
        this.navC.navigateForward("filteroutput");
    };
    HomePage.prototype.view = function () {
        this.navC.navigateForward("category");
        // this.router.navigateByUrl('category')
    };
    HomePage.prototype.react = function (key, val) {
        var userID = this.profileService.getUID();
        if (val != 0) {
            this.favouriteService.updatefavourite(key, userID, 0);
        }
        else {
            this.favouriteService.removefavourite(key, userID);
        }
    };
    HomePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_property_service__WEBPACK_IMPORTED_MODULE_3__["PropertyService"] },
        { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
        { type: _services_favourite_service__WEBPACK_IMPORTED_MODULE_6__["FavouriteService"] },
        { type: _services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_property_service__WEBPACK_IMPORTED_MODULE_3__["PropertyService"],
            _services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _services_favourite_service__WEBPACK_IMPORTED_MODULE_6__["FavouriteService"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map