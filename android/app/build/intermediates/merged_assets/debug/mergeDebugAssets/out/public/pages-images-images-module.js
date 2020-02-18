(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-images-images-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/images/images.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/images/images.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title align=\"center\">images</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <!-- npm install --save screenfull@3.3.0 -->\r\n    <!-- <div class=\"row\">\r\n        <mdb-image-modal [modalImages]=\"imagesBasic\" type=\"no-margin\"></mdb-image-modal>\r\n      </div> -->\r\n    <!-- <div zoom=\"true\" maxZoom=\"20\" style='width: 100%; height: 100%;'> -->\r\n\r\n    <ion-grid>\r\n\r\n        <ion-row>\r\n            <ion-col size=\"6\" class=\"gallery-lightboxes\" *ngFor=\"let pic of imageList\">\r\n\r\n                <img src=\"{{pic.downloadURL}}\" tappable (click)=\"OpenPreview(pic)\">\r\n                <!-- <img src=\"{{pic.downloadURL}}\"  size=\"100%\" accept=\".png,.jpg\" imageViewer onclick=\"document.getElementById('id01').style.display='block'\" > -->\r\n                <!-- <ion-img-viewer width=\"50\" height=\"50\" [src]=\"pic.downloadURL\" [slideOptions]=\"{ zoom: { maxRatio: 8}}\" style='width: 50%; height: 50%'>\r\n\r\n                </ion-img-viewer> -->\r\n\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n    </ion-grid>\r\n    <!-- <ion-slides  pager [options]=\"slidesOptions \" #slides>\r\n        <ion-slide *ngFor=\"let pic of imageList; let i = index \">\r\n            <ion-card  >\r\n                <div class=\"swiper-zoom-container\">\r\n                    <img src=\"{{pic.downloadURL}}\"  >\r\n\r\n                </div>\r\n            </ion-card>\r\n        </ion-slide>\r\n    </ion-slides> -->\r\n    <div id=\"id01\" class=\"w3-modal\">\r\n        <div class=\"w3-modal-content w3-animate-zoom\">\r\n            <div class=\"w3-container\">\r\n                <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"w3-button w3-display-topright\">&times;</span>\r\n                <br><br>\r\n                <ion-slides pager [options]=\"slidesOptions1 \">\r\n                    <ion-slide *ngFor=\"let pic of imageList;let i = index\" padding>\r\n\r\n                        <!-- <a class=\"w3-button w3-black w3-display-left\">&#10094;</a> -->\r\n                        <img src=\"{{pic.downloadURL}}\" style='width: 100%; ' size=\"100%\" accept=\".png,.jpg\">\r\n                        <!-- <a class=\"w3-button w3-black w3-display-right\">&#10095;</a> -->\r\n\r\n                    </ion-slide>\r\n\r\n                </ion-slides>\r\n\r\n                <br><br>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/images/images-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/images/images-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ImagesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesPageRoutingModule", function() { return ImagesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _images_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images.page */ "./src/app/pages/images/images.page.ts");




var routes = [
    {
        path: '',
        component: _images_page__WEBPACK_IMPORTED_MODULE_3__["ImagesPage"]
    }
];
var ImagesPageRoutingModule = /** @class */ (function () {
    function ImagesPageRoutingModule() {
    }
    ImagesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ImagesPageRoutingModule);
    return ImagesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/images/images.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/images/images.module.ts ***!
  \***********************************************/
/*! exports provided: ImagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesPageModule", function() { return ImagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _images_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images-routing.module */ "./src/app/pages/images/images-routing.module.ts");
/* harmony import */ var _images_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images.page */ "./src/app/pages/images/images.page.ts");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "./node_modules/ngx-ionic-image-viewer/fesm5/ngx-ionic-image-viewer.js");








var ImagesPageModule = /** @class */ (function () {
    function ImagesPageModule() {
    }
    ImagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _images_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImagesPageRoutingModule"],
                ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__["NgxIonicImageViewerModule"]
            ],
            declarations: [_images_page__WEBPACK_IMPORTED_MODULE_6__["ImagesPage"]]
        })
    ], ImagesPageModule);
    return ImagesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/images/images.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/images/images.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@-webkit-keyframes zoominoutsinglefeatured {\n  0% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  50% {\n    -webkit-transform: scale(1.2, 1.2);\n            transform: scale(1.2, 1.2);\n  }\n  100% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@keyframes zoominoutsinglefeatured {\n  0% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  50% {\n    -webkit-transform: scale(1.2, 1.2);\n            transform: scale(1.2, 1.2);\n  }\n  100% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n.single-featured-image-header img {\n  -webkit-animation: zoominoutsinglefeatured 15s forwards;\n          animation: zoominoutsinglefeatured 15s forwards;\n}\n.w3-modal-content {\n  height: 400px;\n  position: absolute;\n  left: 40%;\n  top: 50%;\n  margin-left: -150px;\n  margin-top: -150px;\n}\n.w3-modal-content img {\n  width: 400px;\n  height: 300px;\n}\n.modal-content {\n  margin: auto;\n  display: block;\n  width: 80%;\n  max-width: 700px;\n}\n#myImg {\n  border-radius: 5px;\n  cursor: pointer;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n#myImg:hover {\n  opacity: 0.9;\n}\n/* The Modal (background) */\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.9);\n  /* Black w/ opacity */\n}\n/* Modal Content (Image) */\n/* The Close Button */\n.close {\n  position: absolute;\n  top: 15px;\n  right: 35px;\n  color: #f1f1f1;\n  font-size: 40px;\n  font-weight: bold;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n.close:hover,\n.close:focus {\n  color: #bbb;\n  text-decoration: none;\n  cursor: pointer;\n}\n/* 100% Image Width on Smaller Screens */\n@media only screen and (max-width: 700px) {\n  .modal-content {\n    width: 100%;\n  }\n}\nion-slides {\n  margin-top: 30%;\n  background: rgba(212, 202, 202, 0.199);\n}\nion-slides img {\n  padding-top: 30px;\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW1hZ2VzL0M6XFxVc2Vyc1xcQ29kZVRyaWJlXFxEZXNrdG9wXFxDb2RlVHJpYmVcXGlvbmljXFxLZXl3b3J4QXBwL3NyY1xcYXBwXFxwYWdlc1xcaW1hZ2VzXFxpbWFnZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9pbWFnZXMvaW1hZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksOEJBQUE7WUFBQSxzQkFBQTtFQ0NOO0VEQ0U7SUFDSSxrQ0FBQTtZQUFBLDBCQUFBO0VDQ047RURDRTtJQUNJLDhCQUFBO1lBQUEsc0JBQUE7RUNDTjtBQUNGO0FEVkE7RUFDSTtJQUNJLDhCQUFBO1lBQUEsc0JBQUE7RUNDTjtFRENFO0lBQ0ksa0NBQUE7WUFBQSwwQkFBQTtFQ0NOO0VEQ0U7SUFDSSw4QkFBQTtZQUFBLHNCQUFBO0VDQ047QUFDRjtBREVBO0VBQ0ksdURBQUE7VUFBQSwrQ0FBQTtBQ0FKO0FEVUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNQSjtBRFFJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNOUjtBRFdBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNSSjtBRFdBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ1JKO0FEV0E7RUFDSSxZQUFBO0FDUko7QURZQSwyQkFBQTtBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0FDVko7QURjQSwwQkFBQTtBQWtDQSxxQkFBQTtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDN0NKO0FEZ0RBOztFQUVJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUM3Q0o7QURpREEsd0NBQUE7QUFFQTtFQUNJO0lBQ0ksV0FBQTtFQy9DTjtBQUNGO0FEa0RBO0VBQ0ksZUFBQTtFQUNBLHNDQUFBO0FDaERKO0FEaURJO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQy9DUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ltYWdlcy9pbWFnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyB6b29taW5vdXRzaW5nbGVmZWF0dXJlZCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2luZ2xlLWZlYXR1cmVkLWltYWdlLWhlYWRlciBpbWcge1xyXG4gICAgYW5pbWF0aW9uOiB6b29taW5vdXRzaW5nbGVmZWF0dXJlZCAxNXMgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi8vIGlvbi1zbGlkZXMge1xyXG4vLyAgICAgLy8gICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICAvLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gfVxyXG4udzMtbW9kYWwtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE1MHB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAvLyBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbn1cclxuXHJcbiNteUltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4jbXlJbWc6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG5cclxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xyXG5cclxuLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIC8qIFNpdCBvbiB0b3AgKi9cclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgIC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIEZ1bGwgd2lkdGggKi9cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gICAgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xyXG59XHJcblxyXG5cclxuLyogTW9kYWwgQ29udGVudCAoSW1hZ2UpICovXHJcblxyXG4vLyAubW9kYWwtY29udGVudCB7XHJcbi8vICAgICBtYXJnaW46IGF1dG87XHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgIHdpZHRoOiA4MCU7XHJcbi8vICAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4vLyB9XHJcbi8vIC8qIENhcHRpb24gb2YgTW9kYWwgSW1hZ2UgKEltYWdlIFRleHQpIC0gU2FtZSBXaWR0aCBhcyB0aGUgSW1hZ2UgKi9cclxuLy8gI2NhcHRpb24ge1xyXG4vLyAgICAgbWFyZ2luOiBhdXRvO1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICB3aWR0aDogODAlO1xyXG4vLyAgICAgbWF4LXdpZHRoOiA3MDBweDtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIGNvbG9yOiAjY2NjO1xyXG4vLyAgICAgcGFkZGluZzogMTBweCAwO1xyXG4vLyAgICAgaGVpZ2h0OiAxNTBweDtcclxuLy8gfVxyXG4vLyAvKiBBZGQgQW5pbWF0aW9uIC0gWm9vbSBpbiB0aGUgTW9kYWwgKi9cclxuLy8gLm1vZGFsLWNvbnRlbnQsXHJcbi8vICNjYXB0aW9uIHtcclxuLy8gICAgIGFuaW1hdGlvbi1uYW1lOiB6b29tO1xyXG4vLyAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xyXG4vLyB9XHJcbi8vIEBrZXlmcmFtZXMgem9vbSB7XHJcbi8vICAgICBmcm9tIHtcclxuLy8gICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApXHJcbi8vICAgICB9XHJcbi8vICAgICB0byB7XHJcbi8vICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcblxyXG4uY2xvc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgcmlnaHQ6IDM1cHg7XHJcbiAgICBjb2xvcjogI2YxZjFmMTtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyLFxyXG4uY2xvc2U6Zm9jdXMge1xyXG4gICAgY29sb3I6ICNiYmI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4vKiAxMDAlIEltYWdlIFdpZHRoIG9uIFNtYWxsZXIgU2NyZWVucyAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICAgIG1hcmdpbi10b3A6IDMwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjEyLCAyMDIsIDIwMiwgMC4xOTkpO1xyXG4gICAgaW1nIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IiwiQGtleWZyYW1lcyB6b29taW5vdXRzaW5nbGVmZWF0dXJlZCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgfVxufVxuLnNpbmdsZS1mZWF0dXJlZC1pbWFnZS1oZWFkZXIgaW1nIHtcbiAgYW5pbWF0aW9uOiB6b29taW5vdXRzaW5nbGVmZWF0dXJlZCAxNXMgZm9yd2FyZHM7XG59XG5cbi53My1tb2RhbC1jb250ZW50IHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0MCU7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTE1MHB4O1xuICBtYXJnaW4tdG9wOiAtMTUwcHg7XG59XG4udzMtbW9kYWwtY29udGVudCBpbWcge1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDgwJTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbn1cblxuI215SW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbiNteUltZzpob3ZlciB7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xuLm1vZGFsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTdGF5IGluIHBsYWNlICovXG4gIHotaW5kZXg6IDE7XG4gIC8qIFNpdCBvbiB0b3AgKi9cbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEZ1bGwgd2lkdGggKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBGdWxsIGhlaWdodCAqL1xuICBvdmVyZmxvdzogYXV0bztcbiAgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIC8qIEZhbGxiYWNrIGNvbG9yICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xufVxuXG4vKiBNb2RhbCBDb250ZW50IChJbWFnZSkgKi9cbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cbi5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICByaWdodDogMzVweDtcbiAgY29sb3I6ICNmMWYxZjE7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5jbG9zZTpob3Zlcixcbi5jbG9zZTpmb2N1cyB7XG4gIGNvbG9yOiAjYmJiO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogMTAwJSBJbWFnZSBXaWR0aCBvbiBTbWFsbGVyIFNjcmVlbnMgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5pb24tc2xpZGVzIHtcbiAgbWFyZ2luLXRvcDogMzAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMiwgMjAyLCAyMDIsIDAuMTk5KTtcbn1cbmlvbi1zbGlkZXMgaW1nIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/images/images.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/images/images.page.ts ***!
  \*********************************************/
/*! exports provided: ImagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesPage", function() { return ImagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/property.service */ "./src/app/services/property.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../image-modal/image-modal.page */ "./src/app/pages/image-modal/image-modal.page.ts");





// import { FullScreenImage, FullScreenImageOriginal } from '@ionic-native/full-screen-image';


var ImagesPage = /** @class */ (function () {
    function ImagesPage(route, propertyService, router, modalController) {
        var _this = this;
        this.route = route;
        this.propertyService = propertyService;
        this.router = router;
        this.modalController = modalController;
        this.items = {
            mainImage: "",
            location: "",
            description: "",
            price: "",
            bedrooms: "",
            bathrooms: "",
            garage: "",
        };
        this.prefersDark = false;
        // imgUrl = `./../../assets/img/silhoutte.jpg`; // Use for local development
        this.imgUrl = "https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?&q=80";
        this.slidesOptions1 = {
            initialSlide: 1,
            speed: 400,
        };
        this.slideIndex = 1;
        this.sliderOpts = {
            zoom: false,
            slidesPerView: 1.5,
            centeredslides: true,
            spaceBetween: 20
        };
        this.index = 0;
        this.slideOptions = { zoom: { maxRatio: 7 } };
        this.pic = {
            downloadURL: "",
        };
        this.route.queryParams.subscribe(function (params) {
            if (params && params.imageList) {
                _this.index = JSON.parse(params.index);
                _this.imageList = JSON.parse(params.imageList);
                console.log(_this.imageList);
                console.log(_this.index);
            }
        });
    }
    ImagesPage.prototype.OpenPreview = function (pic) {
        this.modalController.create({
            component: _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_5__["ImageModalPage"],
            componentProps: {
                pic: pic
            }
        }).then(function (modal) { return modal.present(); });
    };
    ImagesPage.prototype.ngOnInit = function () {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // this.toggleTheme();
        }
        // this.propertyService.imageList(this.propertyid).subscribe((data)=>{
        //   this.imageList = data.map(e => {
        //     return {
        //       key: e.payload.doc.id,
        //       ...e.payload.doc.data()
        //     }
        //   })
        //   console.log(this.imageList);
        // })
        // this.slides.slideTo(this.index)
    };
    // toggleTheme() {
    //   this.prefersDark = !this.prefersDark;
    //   document.body.classList.toggle('dark', this.prefersDark);
    // }
    // full(){
    //   this.fullScreenImage.showImageURL('imageList.key.downloadURL')
    //   // .then((data: any) => console.log(res))
    //   // .catch((error: any) => console.error(error));
    // }
    ImagesPage.prototype.full = function (pic) {
        this.router.navigate(['/fullscreen'], {
            queryParams: {
                downloadURL: pic.downloadURL,
            }
        });
    };
    ImagesPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_3__["PropertyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"])
    ], ImagesPage.prototype, "slides", void 0);
    ImagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-images',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./images.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/images/images.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./images.page.scss */ "./src/app/pages/images/images.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_property_service__WEBPACK_IMPORTED_MODULE_3__["PropertyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], ImagesPage);
    return ImagesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-images-images-module.js.map