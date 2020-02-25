(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-title>\r\n            Home\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\" (click)=\" fliter()\">\r\n            <ion-icon name=\"options\" style=\"zoom:1.7;\"></ion-icon>&nbsp;&nbsp;\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n    <ion-item lines=\"none\">\r\n        <p slot=\"start\"><b>PROMOTED HOUSE</b></p>\r\n        <p slot=\"end\" color=\"medium\" (click)=\"viewFeatuered()\">View all</p>\r\n    </ion-item>\r\n\r\n    <ion-slides [options]=\"slidesOptions\" *ngIf=\"data == false || !(propertyList?.length >0)\">\r\n        <ion-slide *ngFor=\"let i of [1,2,3,4,5,6,7] \">\r\n\r\n            <ion-card class=\"cat\">\r\n                <ion-skeleton-text animated style=\"width: 100%; height: 90px\"></ion-skeleton-text>\r\n                <ion-card-content>\r\n\r\n                    <ion-skeleton-text animated style=\"width: 5%; float: right;\"></ion-skeleton-text>\r\n\r\n                    <div>\r\n                        <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n                        <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n\r\n                        <ion-grid class=\"ion-no-padding\">\r\n                            <ion-row>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n\r\n                            </ion-row>\r\n                        </ion-grid>\r\n                    </div>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </ion-slide>\r\n    </ion-slides>\r\n\r\n\r\n    <ion-slides [options]=\"slidesOptions\">\r\n        <ion-slide *ngFor=\"let details of propertyList\">\r\n            <ion-card class=\"cat\">\r\n                <div>\r\n                    <img src=\"{{details.mainImage}}\" (click)=\"detail(details)\">\r\n                    <!-- <ion-img [src]=\"details.mainImage\" (click)=\"detail(details)\"></ion-img> -->\r\n                    <ion-card-content slot=\"start\">\r\n                        <div class=\"action\" class=\"like\" (click)=\"react(details.key, details.userReaction)\" [class.liked]=\"details.userReaction != null\">\r\n                            <ion-icon class=\"ion-float-right\" name=\"heart\"></ion-icon>\r\n                        </div>\r\n                        <div (click)=\"detail(details)\">\r\n                            <p>{{details.price | currency:'R'}}</p>\r\n                            <p>{{details.location | slice:0:12}}...</p>\r\n\r\n                            <i class=\"fa fa-bed\" aria-hidden=\"true\" *ngIf=\"details.bedrooms!=0\">\r\n                                                <span class=\"pad-value\">{{details.bedrooms}}</span>\r\n                                            </i>\r\n                            <i class=\"fa fa-bath\" aria-hidden=\"true\" *ngIf=\"details.bathrooms!=0\">\r\n                                                <span class=\"pad-value\"> {{details.bathrooms}}</span>\r\n                                            </i>\r\n                            <i class=\"fa fa-car\" aria-hidden=\"true\" *ngIf=\"details.garage!=0\"> \r\n                                                <span class=\"pad-value\">  {{details.garage}}</span>\r\n                                            </i>\r\n                        </div>\r\n                    </ion-card-content>\r\n                </div>\r\n            </ion-card>\r\n        </ion-slide>\r\n    </ion-slides>\r\n\r\n\r\n    <ion-item lines=\"none\">\r\n        <p slot=\"start\"><b>POPULAR</b></p>\r\n        <p slot=\"end\" color=\"medium\" (click)=\"view()\">View all</p>\r\n    </ion-item>\r\n\r\n\r\n    <ion-slides [options]=\"slidesOptions\">\r\n        <ion-slide *ngFor=\"let details of propertyPopularList | propertyFilterPipe:{ property: 'reactionCount', descending: true }\">\r\n            <ion-card class=\"cat\">\r\n                <div>\r\n                    <!-- <ion-img [src]=\"details.mainImage\" (click)=\"detail(details)\"></ion-img> -->\r\n                    <img src=\"{{details.mainImage}}\" (click)=\"detail(details)\">\r\n                    <!-- <ion-img [src]=\"details.mainImage\" (ionImgDidLoad)=\"imageLoaded()\"></ion-img> -->\r\n                    <!-- <ion-spinner></ion-spinner> -->\r\n                    <ion-card-content slot=\"start\">\r\n                        <div class=\"action\" class=\"like\" (click)=\"react(details.key, details.userReaction)\" [class.liked]=\"details.userReaction != null\">\r\n                            <ion-icon class=\"ion-float-right\" name=\"heart\"></ion-icon>\r\n                        </div>\r\n                        <div (click)=\"detail(details)\">\r\n                            <p>{{details.price | currency:'R'}}</p>\r\n                            <p>{{details.location | slice:0:12}}...</p>\r\n                            <!-- <ion-item class=\"ion-no-padding ion-no-margin location\" lines=\"none\" style=\"font-size:13px ;\">\r\n                                <ion-label class=\"ion-no-padding ion-no-margin location\">{{details.location}}</ion-label>\r\n                            </ion-item> -->\r\n\r\n\r\n                            <i class=\"fa fa-bed\" aria-hidden=\"true\" *ngIf=\"details.bedrooms!=0\">\r\n                                <span class=\"pad-value\">{{details.bedrooms}}</span>\r\n                            </i>\r\n                            <i class=\"fa fa-bath\" aria-hidden=\"true\" *ngIf=\"details.bathrooms!=0\">\r\n                                <span class=\"pad-value\"> {{details.bathrooms}}</span>\r\n                            </i>\r\n                            <i class=\"fa fa-car\" aria-hidden=\"true\" *ngIf=\"details.garage!=0\"> \r\n                                <span class=\"pad-value\">  {{details.garage}}</span>\r\n                            </i>\r\n                        </div>\r\n                    </ion-card-content>\r\n                </div>\r\n            </ion-card>\r\n        </ion-slide>\r\n    </ion-slides>\r\n\r\n    <ion-slides [options]=\"slidesOptions\" *ngIf=\"data == false || !(propertyList?.length >0)\">\r\n        <ion-slide *ngFor=\"let i of [1,2,3,4,5,6,7] \">\r\n\r\n            <ion-card class=\"cat\">\r\n                <ion-skeleton-text animated style=\"width: 100%; height: 90px\"></ion-skeleton-text>\r\n                <ion-card-content>\r\n\r\n                    <ion-skeleton-text animated style=\"width: 5%; float: right;\"></ion-skeleton-text>\r\n\r\n                    <div>\r\n                        <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n                        <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n\r\n                        <ion-grid class=\"ion-no-padding\">\r\n                            <ion-row>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n\r\n                            </ion-row>\r\n                        </ion-grid>\r\n                    </div>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </ion-slide>\r\n    </ion-slides>\r\n\r\n    <!-- \r\n    <ion-item lines=\"none\">\r\n        <p slot=\"start\"><b>POPULAR</b></p>\r\n        <p slot=\"end\" color=\"medium\" (click)=\"view()\">View all</p>\r\n    </ion-item>\r\n\r\n\r\n    <ion-slides [options]=\"slidesOpt\" *ngIf=\"data == true\">\r\n\r\n        <ion-slide *ngFor=\"let details of propertyList \">\r\n            <ion-card class=\"catt\">\r\n\r\n                <img src=\"{{details.mainImage}}\" (click)=\"detail(details)\">\r\n                <ion-card-content>\r\n                    <div class=\"action\" class=\"like\" (click)=\"react(details.key, details.userReaction)\" [class.liked]=\"details.userReaction != null\">\r\n                        <ion-icon class=\"ion-float-right\" name=\"heart\"></ion-icon>\r\n                    </div>\r\n                    <div (click)=\"detail(details)\">\r\n                        <p>{{details.price | currency:'R'}}</p>\r\n                        <p>{{details.location}}</p>\r\n\r\n                        <i class=\"fa fa-bed\" aria-hidden=\"true\">\r\n                                                <span class=\"pad-value\">{{details.bedrooms}}</span>\r\n                                            </i>\r\n                        <i class=\"fa fa-bath\" aria-hidden=\"true\">\r\n                                                <span class=\"pad-value\"> {{details.bathrooms}}</span>\r\n                                            </i>\r\n                        <i class=\"fa fa-car\" aria-hidden=\"true\"> \r\n                                                <span class=\"pad-value\">  {{details.garage}}</span>\r\n                                            </i>\r\n                    </div>\r\n                </ion-card-content>\r\n\r\n            </ion-card>\r\n        </ion-slide>\r\n\r\n    </ion-slides>\r\n\r\n\r\n\r\n    <ion-slides [options]=\"slidesOpt\" *ngIf=\"data == false\">\r\n        <ion-slide *ngFor=\"let i of [1,2,3,4,5,6,7]\">\r\n\r\n            <ion-card class=\"catt\">\r\n                <ion-skeleton-text animated style=\"width: 100%; height: 170px;\"></ion-skeleton-text>\r\n                <ion-card-content>\r\n\r\n                    <ion-skeleton-text animated style=\"width: 5%; float: right;\"></ion-skeleton-text>\r\n\r\n                    <div>\r\n                        <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n                        <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n\r\n                        <ion-grid class=\"ion-no-padding\">\r\n                            <ion-row>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                                </ion-col>\r\n\r\n                            </ion-row>\r\n                        </ion-grid>\r\n                    </div>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </ion-slide>\r\n    </ion-slides> -->\r\n\r\n\r\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  text-align: center;\n}\n\n.cat {\n  width: 140px;\n  margin: 5px;\n  text-align: start;\n  --color: black;\n}\n\n.cat p {\n  font-size: 13px;\n}\n\n.cat ion-img {\n  width: 100% !important;\n  height: 90px !important;\n}\n\n.cat img {\n  width: 100% !important;\n  height: 90px !important;\n}\n\n.cat i {\n  font-size: 13px;\n  padding-right: 6px;\n}\n\n.cat i .pad-value {\n  padding-left: 3px;\n}\n\n.cat .like {\n  cursor: pointer;\n  font-size: 18px;\n}\n\n.cat .like.liked {\n  font-weight: bold;\n  color: #a02b2d;\n}\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\nion-card-content {\n  margin-left: 3px;\n  margin-right: 3px;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n\n.catt {\n  width: 290px;\n  height: 270px;\n  margin: 5px;\n  text-align: start;\n  color: black;\n}\n\n.catt img {\n  width: 100% !important;\n  height: 170px;\n}\n\n.catt .like {\n  cursor: pointer;\n  font-size: 20px;\n}\n\n.catt .like.liked {\n  font-weight: bold;\n  color: #a02b2d;\n}\n\ni {\n  padding-right: 10px;\n}\n\ni .pad-value {\n  padding-left: 5px;\n}\n\n@media screen and (max-width: 321px) {\n  .cat p {\n    font-size: 9px;\n  }\n  .cat i {\n    font-size: 9px;\n    padding-right: 6px;\n  }\n  .cat i .pad-value {\n    padding-left: 3px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXENvZGVUcmliZVxcRGVza3RvcFxcQ29kZVRyaWJlXFxpb25pY1xcS2V5d29yeEFwcC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURBSTtFQUNJLGVBQUE7QUNFUjs7QURBSTtFQUdJLHNCQUFBO0VBQ0EsdUJBQUE7QUNBUjs7QURFSTtFQUdJLHNCQUFBO0VBQ0EsdUJBQUE7QUNGUjs7QURJSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0ZSOztBREdRO0VBQ0ksaUJBQUE7QUNEWjs7QURJSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDRlI7O0FER1E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNEWjs7QURPQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDSko7O0FET0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0pKOztBRE9BO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDSko7O0FES0k7RUFDSSxzQkFBQTtFQUNBLGFBQUE7QUNIUjs7QURLSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDSFI7O0FESVE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNGWjs7QURPQTtFQUNJLG1CQUFBO0FDSko7O0FES0k7RUFDSSxpQkFBQTtBQ0hSOztBRE9BO0VBRVE7SUFDSSxjQUFBO0VDTFY7RURPTTtJQUNJLGNBQUE7SUFDQSxrQkFBQTtFQ0xWO0VETVU7SUFDSSxpQkFBQTtFQ0pkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhdCB7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgLS1jb2xvcjogYmxhY2s7XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbiAgICBpb24taW1nIHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDkwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbiAgICAgICAgLnBhZC12YWx1ZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5saWtlIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICYubGlrZWQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6ICNhMDJiMmQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyAuY2VudGVyIGluIG15IGNhc2UgdG8gbWFrZSB0aGUgc3Bpbm5lciBhdCB0aGUgY2VudGVyXHJcbi5jZW50ZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxufVxyXG5cclxuLmNhdHQge1xyXG4gICAgd2lkdGg6IDI5MHB4O1xyXG4gICAgaGVpZ2h0OiAyNzBweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxNzBweDtcclxuICAgIH1cclxuICAgIC5saWtlIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICYubGlrZWQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6ICNhMDJiMmQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAucGFkLXZhbHVlIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIxcHgpIHtcclxuICAgIC5jYXQge1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbiAgICAgICAgICAgIC5wYWQtdmFsdWUge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXQge1xuICB3aWR0aDogMTQwcHg7XG4gIG1hcmdpbjogNXB4O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgLS1jb2xvcjogYmxhY2s7XG59XG4uY2F0IHAge1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uY2F0IGlvbi1pbWcge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDkwcHggIWltcG9ydGFudDtcbn1cbi5jYXQgaW1nIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA5MHB4ICFpbXBvcnRhbnQ7XG59XG4uY2F0IGkge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcbn1cbi5jYXQgaSAucGFkLXZhbHVlIHtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG59XG4uY2F0IC5saWtlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uY2F0IC5saWtlLmxpa2VkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjYTAyYjJkO1xufVxuXG4uY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cblxuLmNhdHQge1xuICB3aWR0aDogMjkwcHg7XG4gIGhlaWdodDogMjcwcHg7XG4gIG1hcmdpbjogNXB4O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmNhdHQgaW1nIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNzBweDtcbn1cbi5jYXR0IC5saWtlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uY2F0dCAubGlrZS5saWtlZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2EwMmIyZDtcbn1cblxuaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5pIC5wYWQtdmFsdWUge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIxcHgpIHtcbiAgLmNhdCBwIHtcbiAgICBmb250LXNpemU6IDlweDtcbiAgfVxuICAuY2F0IGkge1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgfVxuICAuY2F0IGkgLnBhZC12YWx1ZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIH1cbn0iXX0= */");

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
        this.loaded = false;
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
    HomePage.prototype.imageLoaded = function () {
        console.log('loaded');
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