(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-featured-featured-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/featured/featured.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/featured/featured.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title align=\"center\">Featured</ion-title>\r\n        <ion-buttons slot=\"end\" (click)=\"fliter()\">\r\n            <ion-icon name=\"options\"></ion-icon>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-searchbar (ionInput)=\"filterList($event)\" placeholder=\"location\"></ion-searchbar>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"column\" *ngFor=\"let items of propertyList\">\r\n\r\n            <ion-card class=\"card\">\r\n                <img src=\"{{items.mainImage}}\" style=\"width:100%\" (click)=\"detail(items)\">\r\n\r\n                <ion-card-content>\r\n                    <div class=\"action\" class=\"like\" (click)=\"react(items.key, items.userReaction)\" [class.liked]=\"items.userReaction != null\">\r\n                        <ion-icon class=\"ion-float-right\" name=\"heart\"></ion-icon>\r\n                    </div>\r\n                    <div (click)=\"detail(items)\">\r\n                        <p>{{items.price | currency:'R'}}</p>\r\n                        <p>{{items.location}}</p>\r\n                        <div>\r\n                            <i class=\"fa fa-bed\" aria-hidden=\"true\">\r\n                                        <span class=\"pad-value\">{{items.bedrooms}}</span>\r\n                                    </i>\r\n                            <i class=\"fa fa-bath\" aria-hidden=\"true\">\r\n                                        <span class=\"pad-value\"> {{items.bathrooms}}</span>\r\n                                    </i>\r\n                            <i class=\"fa fa-car\" aria-hidden=\"true\">\r\n                                        <span class=\"pad-value\">  {{items.garage}}</span>\r\n                                    </i>\r\n                        </div>\r\n                    </div>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </div>\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/featured/featured-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/featured/featured-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: FeaturedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedPageRoutingModule", function() { return FeaturedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _featured_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./featured.page */ "./src/app/pages/featured/featured.page.ts");




var routes = [
    {
        path: '',
        component: _featured_page__WEBPACK_IMPORTED_MODULE_3__["FeaturedPage"]
    }
];
var FeaturedPageRoutingModule = /** @class */ (function () {
    function FeaturedPageRoutingModule() {
    }
    FeaturedPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FeaturedPageRoutingModule);
    return FeaturedPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/featured/featured.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/featured/featured.module.ts ***!
  \***************************************************/
/*! exports provided: FeaturedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedPageModule", function() { return FeaturedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _featured_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./featured-routing.module */ "./src/app/pages/featured/featured-routing.module.ts");
/* harmony import */ var _featured_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./featured.page */ "./src/app/pages/featured/featured.page.ts");







var FeaturedPageModule = /** @class */ (function () {
    function FeaturedPageModule() {
    }
    FeaturedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _featured_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeaturedPageRoutingModule"]
            ],
            declarations: [_featured_page__WEBPACK_IMPORTED_MODULE_6__["FeaturedPage"]]
        })
    ], FeaturedPageModule);
    return FeaturedPageModule;
}());



/***/ }),

/***/ "./src/app/pages/featured/featured.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/featured/featured.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  box-sizing: border-box;\n}\n\nion-header {\n  --background: #a02b2d;\n}\n\n.column {\n  float: left;\n  width: 25%;\n  padding: 10px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n@media screen and (max-width: 1650px) {\n  .column {\n    float: left;\n    width: 33.33%;\n    padding: 10px;\n  }\n}\n\n@media screen and (max-width: 1150px) {\n  .column {\n    float: left;\n    width: 50%;\n    padding: 10px;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .column {\n    float: left;\n    width: 100%;\n    padding: 10px;\n  }\n}\n\nion-card img {\n  background-size: auto 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 200px;\n}\n\nion-card-content {\n  color: black;\n}\n\ni {\n  padding-right: 10px;\n}\n\ni .pad-value {\n  padding-left: 5px;\n}\n\n.action ion-icon {\n  font-size: 20px;\n}\n\n.like {\n  cursor: pointer;\n  font-size: 20px;\n}\n\n.like.liked {\n  font-weight: bold;\n  color: #a02b2d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmVhdHVyZWQvQzpcXFVzZXJzXFxDb2RlVHJpYmVcXERlc2t0b3BcXENvZGVUcmliZVxcaW9uaWNcXEtleXdvcnhBcHAvc3JjXFxhcHBcXHBhZ2VzXFxmZWF0dXJlZFxcZmVhdHVyZWQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mZWF0dXJlZC9mZWF0dXJlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLFdBQUE7SUFDQSxhQUFBO0lBQ0EsYUFBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSTtJQUNJLFdBQUE7SUFDQSxVQUFBO0lBQ0EsYUFBQTtFQ0FOO0FBQ0Y7O0FER0E7RUFDSTtJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtFQ0ROO0FBQ0Y7O0FETUk7RUFDSSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FDSlI7O0FEUUE7RUFDSSxZQUFBO0FDTEo7O0FEUUE7RUFDSSxtQkFBQTtBQ0xKOztBRE1JO0VBQ0ksaUJBQUE7QUNKUjs7QURTSTtFQUNJLGVBQUE7QUNOUjs7QURVQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDUEo7O0FEUUk7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNOUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlYXR1cmVkL2ZlYXR1cmVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNhMDJiMmQ7XHJcbn1cclxuXHJcbi5jb2x1bW4ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnJvdzphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY1MHB4KSB7XHJcbiAgICAuY29sdW1uIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMzMuMzMlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTBweCkge1xyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGltZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmkge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIC5wYWQtdmFsdWUge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aW9uIHtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5saWtlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICYubGlrZWQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjYTAyYjJkO1xyXG4gICAgfVxyXG59IiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICNhMDJiMmQ7XG59XG5cbi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDI1JTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY1MHB4KSB7XG4gIC5jb2x1bW4ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAzMy4zMyU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MHB4KSB7XG4gIC5jb2x1bW4ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbHVtbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufVxuaW9uLWNhcmQgaW1nIHtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5pIC5wYWQtdmFsdWUge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLmFjdGlvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmxpa2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5saWtlLmxpa2VkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjYTAyYjJkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/featured/featured.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/featured/featured.page.ts ***!
  \*************************************************/
/*! exports provided: FeaturedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedPage", function() { return FeaturedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/property.service */ "./src/app/services/property.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_services_favourite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/favourite.service */ "./src/app/services/favourite.service.ts");






var FeaturedPage = /** @class */ (function () {
    function FeaturedPage(router, propertyService, profileService, favouriteService) {
        var _this = this;
        this.router = router;
        this.propertyService = propertyService;
        this.profileService = profileService;
        this.favouriteService = favouriteService;
        this.propertyService.propertyList().subscribe(function (data) {
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
                    };
                    for (var _b = 0, _c = _this.propertyList; _b < _c.length; _b++) {
                        var property = _c[_b];
                        _loop_1(property);
                    }
                    var _loop_2 = function (property) {
                        if (reactionInfo.key === property.key) {
                            _this.favouriteService.count(property.key).subscribe(function (data) {
                                // property.reactionCount = this.favouriteService.countfavourite(data)[0];
                                property.userReaction = _this.favouriteService.userfavourite(data);
                            });
                        }
                    };
                    for (var _d = 0, _e = _this.propertyListLoaded; _d < _e.length; _d++) {
                        var property = _e[_d];
                        _loop_2(property);
                    }
                }
            });
            console.log(_this.propertyList);
        });
    }
    FeaturedPage.prototype.ngOnInit = function () {
    };
    FeaturedPage.prototype.initializeItems = function () {
        this.propertyList = this.propertyListLoaded;
    };
    FeaturedPage.prototype.detail = function (items) {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify(items),
            }
        };
        this.router.navigate(['details'], navigationExtras);
    };
    FeaturedPage.prototype.filterList = function (evt) {
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
    FeaturedPage.prototype.fliter = function () {
        this.router.navigateByUrl("filter");
    };
    FeaturedPage.prototype.react = function (key, val) {
        var userID = this.profileService.getUID();
        if (val != 0) {
            this.favouriteService.updatefavourite(key, userID, 0);
        }
        else {
            this.favouriteService.removefavourite(key, userID);
        }
    };
    FeaturedPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_3__["PropertyService"] },
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
        { type: src_app_services_favourite_service__WEBPACK_IMPORTED_MODULE_5__["FavouriteService"] }
    ]; };
    FeaturedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-featured',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./featured.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/featured/featured.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./featured.page.scss */ "./src/app/pages/featured/featured.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_property_service__WEBPACK_IMPORTED_MODULE_3__["PropertyService"],
            src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
            src_app_services_favourite_service__WEBPACK_IMPORTED_MODULE_5__["FavouriteService"]])
    ], FeaturedPage);
    return FeaturedPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-featured-featured-module.js.map