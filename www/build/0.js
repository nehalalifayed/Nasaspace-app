webpackJsonp([0],{

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPass2PageModule", function() { return ResetPass2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset_pass2__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResetPass2PageModule = /** @class */ (function () {
    function ResetPass2PageModule() {
    }
    ResetPass2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reset_pass2__["a" /* ResetPass2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reset_pass2__["a" /* ResetPass2Page */]),
            ],
        })
    ], ResetPass2PageModule);
    return ResetPass2PageModule;
}());

//# sourceMappingURL=reset-pass2.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPass2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset_pass1_reset_pass1__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ResetPass2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetPass2Page = /** @class */ (function () {
    function ResetPass2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ResetPass2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetPass2Page');
    };
    ResetPass2Page.prototype.goto = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__reset_pass1_reset_pass1__["a" /* ResetPass1Page */]);
    };
    ResetPass2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reset-pass2',template:/*ion-inline-start:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\reset-pass2\reset-pass2.html"*/'\n\n<ion-content padding>\n    <div class="one">\n      <a (click)="goto()">  <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>  </a>\n      <h3>Reset password</h3>\n    </div>\n\n  \n  <p>To reset your password , please check your email address</p>\n</ion-content>'/*ion-inline-end:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\reset-pass2\reset-pass2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ResetPass2Page);
    return ResetPass2Page;
}());

//# sourceMappingURL=reset-pass2.js.map

/***/ })

});
//# sourceMappingURL=0.js.map