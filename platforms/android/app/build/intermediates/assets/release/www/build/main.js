webpackJsonp([19],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPass1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(50);
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
 * Generated class for the ResetPass1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetPass1Page = /** @class */ (function () {
    function ResetPass1Page(http, navCtrl, navParams, formBuilder) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.userEmail = {};
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email.' }
            ]
        };
        this.ResetPasswordForm = this.formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ]))
        });
    }
    ResetPass1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetPass1Page');
    };
    ResetPass1Page.prototype.doResetPass = function () {
        var _this = this;
        this.http.post("http://spaceappscairo.com/2018/spaceapps/resetpass2.php", this.userEmail).subscribe(function (data) {
            console.log(_this.userEmail);
            _this.navCtrl.push('ResetPass2Page');
        }, function (err) {
            alert(err.message);
        });
    };
    ResetPass1Page.prototype.goto = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    ResetPass1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reset-pass1',template:/*ion-inline-start:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\reset-pass1\reset-pass1.html"*/'\n\n\n\n<ion-content padding>\n  <div class="one">\n    <a (click)="goto()">  <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>  </a>\n    <h3>Reset password</h3>\n  </div>\n  <br> \n  <form class="form"  [formGroup]= "ResetPasswordForm" padding (ngSubmit)="doResetPass(ResetPasswordForm.value)">\n        \n  <ion-item>\n      <ion-label stacked>Enter Your Email Here </ion-label>\n      <ion-input required formControlName="email" type="email" value="" [(ngModel)]="userEmail.email" ></ion-input>\n    </ion-item>\n\n    <div class="validation-errors" padding>\n      <ng-container *ngFor="let validation of validation_messages.email">\n        <div class="error-message" *ngIf="ResetPasswordForm.get(\'email\').hasError(validation.type) && (ResetPasswordForm.get(\'email\').dirty || ResetPasswordForm.get(\'email\').touched)" >\n          {{ validation.message }}\n        </div>\n      </ng-container>\n</div>\n \n    <button ion-button id="button1" type="submit" [disabled]="!ResetPasswordForm.valid" >reset</button>\n  </form>\n\n  </ion-content>\n'/*ion-inline-end:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\reset-pass1\reset-pass1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ResetPass1Page);
    return ResetPass1Page;
}());

//# sourceMappingURL=reset-pass1.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_more_more__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(27);
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
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactusPage = /** @class */ (function () {
    function ContactusPage(storage, emailComposer, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.emailComposer = emailComposer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toEmail = 'feryalhisham@gmail.com';
        storage.get('user_email').then(function (val) {
            console.log('Your email is', val);
            _this.fromEmail = val;
        });
    }
    ContactusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactusPage');
    };
    ContactusPage.prototype.composeEmail = function () {
        var _this = this;
        console.log('open email');
        var email = {
            from: this.fromEmail,
            to: this.toEmail,
            subject: this.emailSubject,
            body: this.emailBody,
            isHtml: true
        };
        this.emailComposer.isAvailable().then(function (available) {
            //if(available) {
            //this.showAlert("email")
            //Now we know we can send
            _this.emailComposer.open(email);
            //}
        });
    };
    ContactusPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_more_more__["a" /* MorePage */]);
    };
    ContactusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contactus',template:/*ion-inline-start:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\contactus\contactus.html"*/'\n<ion-content padding class="body">\n  <div class="one">\n    <a (click)="back()">  <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>  </a>\n    <p class="header"> Contact Us </p>\n  </div>\n\n\n  <div class="main">\n    <img src="../../assets/imgs/satellite.png">\n    <br> <br>\n    <ion-item>\n      <ion-label stacked>Title</ion-label>\n      <ion-input type="text" value=""  [(ngModel)]="emailSubject"></ion-input>\n    </ion-item>\n\n\n    <br>\n    <ion-item>\n      <ion-label stacked>Message</ion-label>\n      <ion-input type="text" value=""  [(ngModel)]="emailBody"></ion-input>\n    </ion-item>\n\n\n    <div class="nav">\n    <img (click)="composeEmail()" src="../../assets/imgs/send.png">\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\contactus\contactus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ContactusPage);
    return ContactusPage;
}());

//# sourceMappingURL=contactus.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreeventinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(39);
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
 * Generated class for the MoreeventinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MoreeventinfoPage = /** @class */ (function () {
    function MoreeventinfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MoreeventinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MoreeventinfoPage');
    };
    MoreeventinfoPage.prototype.goto = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    MoreeventinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-moreeventinfo',template:/*ion-inline-start:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\moreeventinfo\moreeventinfo.html"*/'<ion-content padding class="body">\n\n    <div class="one">\n        <a (click)="goto()">  <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>  </a>\n        <h3>More Information </h3>\n      </div>\n\n      <div class="main">\n          this is a dumpy text  this is a dumpy text  this is a dumpy text  this is a dumpy text  this is a dumpy text  this is a dumpy text  this is a dumpy text \n          this is a dumpy text  this is a dumpy text  this is a dumpy text  this is a dumpy text  this is a dumpy text  this is a dumpy text  this is a dumpy text \n          this is a dumpy text  this is a dumpy text  this is a dumpy text  this is a dumpy text  this is a dumpy text  this is a dumpy text  this is a dumpy text \n          this is a dumpy text  this is a dumpy text  this is a dumpy text  this is a dumpy text  this is a dumpy text  this is a dumpy text  this is a dumpy text \n          this is a dumpy text  this is a dumpy text  this is a dumpy text  this is a dumpy text  this is a dumpy text  this is a dumpy text  this is a dumpy text \n        this is a dumpy text  this is a dumpy text  this is a dumpy text  this is a dumpy text  this is a dumpy text  this is a dumpy text  this is a dumpy text \n      </div>\n</ion-content>'/*ion-inline-end:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\moreeventinfo\moreeventinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MoreeventinfoPage);
    return MoreeventinfoPage;
}());

//# sourceMappingURL=moreeventinfo.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(39);
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
 * Generated class for the TitlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TitlePage = /** @class */ (function () {
    function TitlePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = navParams.get('title');
        // console.log(this.title);
    }
    TitlePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TitlePage');
    };
    TitlePage.prototype.goback = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    TitlePage.prototype.facebook = function () {
    };
    TitlePage.prototype.twitter = function () {
    };
    TitlePage.prototype.linkedin = function () {
    };
    TitlePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-title',template:/*ion-inline-start:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\title\title.html"*/'<ion-content padding class="body">\n   <ion-img src="../../assets/imgs/events.jpg"class="image" ></ion-img>\n   <div class="layer">\n    </div>\n    \n\n    <div class="header">\n        <a (click)="goback()">  <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>  </a>\n        <label> New Title </label>\n    </div>\n\n    <p class="nasa"> #SpaceAppcairo</p>\n    <p class="nasa" style="position:relative;top:-240px;">2016</p>\n\n\n    <p class="txt">\n        {{title}}\n    </p>\n    <hr>\n\n   <div class="iocons">\n    <img src="../../assets/imgs/facebook.png"style="position:relative;top:3px;" (click)="facebook()">\n    <img src="../../assets/imgs/twitter.png" (click)="twitter()">\n    <img src="../../assets/imgs/linkedin.png" (click)="linkedin()">\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\title\title.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TitlePage);
    return TitlePage;
}());

//# sourceMappingURL=title.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_more_more__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(27);
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
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditprofilePage = /** @class */ (function () {
    function EditprofilePage(storage, alertCtrl, http, navCtrl, navParams, toastCtrl) {
        //this.Data.Email="feryalhisham19@gmail.com" ;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.Data = {};
        this.getParticipantInfo();
    }
    EditprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditprofilePage');
        //this.getParticipantInfo();
    };
    EditprofilePage.prototype.goto = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_more_more__["a" /* MorePage */]);
    };
    EditprofilePage.prototype.getParticipantInfo = function () {
        var _this = this;
        this.Data.action = "getUserInfo";
        this.storage.get('user_email').then(function (val) {
            console.log('Your email is', val);
            _this.Data.Email = val;
        });
        this.http.post("http://spaceappscairo.com/2018/spaceapps/getParticipantInfo.php", this.Data).subscribe(function (data) {
            console.log(data);
            var index = data["_body"].indexOf("{\"7laeen");
            var clean_data = data["_body"].substring(index, data["_body"].length);
            console.log(clean_data);
            var result = JSON.parse(clean_data);
            //let result = JSON.parse( data["_body"]);
            console.log(result[0]);
            _this.Data.Name = result[0].Name;
            _this.Data.team = result[0].team;
            _this.Data.edu_institute = result[0].edu_institute;
            //document.getElementById('Name').setAttribute("value",result[0].Name);
        });
    };
    EditprofilePage.prototype.EditProfile = function () {
        var _this = this;
        this.Data.action = "editProfile";
        this.http.post("http://spaceappscairo.com/2018/spaceapps/editProfile.php", this.Data).subscribe(function (data) {
            console.log(data);
            var index = data["_body"].indexOf("{\"7laeen");
            var clean_data = data["_body"].substring(index, data["_body"].length);
            console.log(clean_data);
            var result = JSON.parse(clean_data);
            if (result.status == "this team not exist!") {
                //console.log("This team is not exist!");
                _this.showAlert("This team is not exist!");
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: "Your profile is succesfully updated",
                    duration: 4000
                });
                toast.present();
                _this.storage.set("user_name", _this.Data.Name);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_more_more__["a" /* MorePage */]);
            }
        });
    };
    EditprofilePage.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Info',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    EditprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editprofile',template:/*ion-inline-start:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\editprofile\editprofile.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n\n\n<ion-content paddingclass="body">\n  <div class="one">\n    <p (click)="goto()"> Cancel</p>\n    <p class="header">  Edit Profile  </p>\n    <p style="position:relative;left: 105px;"  (click)="EditProfile()">Save</p>\n  </div>\n\n  <div>\n    <img src="../../assets/imgs/transparent.png" class="avatar">\n    <label> {{Data.Name}} </label>\n  </div>\n\n\n  <hr>\n  <br>\n  <p class="email">{{Data.Email}}</p>\n\n\n   \n     <ion-item>\n       <ion-label stacked>Username</ion-label>\n       <ion-input type="text" #scannerInput [(ngModel)]="Data.Name"></ion-input>\n     </ion-item>\n    \n   \n     <ion-item>\n       <ion-label stacked>Company/uiversity</ion-label>\n       <ion-input type="text" #scannerInput [(ngModel)]="Data.edu_institute"></ion-input>\n     </ion-item>\n     \n     <ion-item>\n       <ion-label stacked>Team name</ion-label>\n       <ion-input type="text"scannerInput [(ngModel)]="Data.team"></ion-input>\n     </ion-item>\n   </ion-content>\n   \n   \n'/*ion-inline-end:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\editprofile\editprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], EditprofilePage);
    return EditprofilePage;
}());

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__more_more__ = __webpack_require__(28);
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
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestionsPage = /** @class */ (function () {
    function QuestionsPage(alertCtrl, navCtrl, navParams, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    QuestionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionsPage');
    };
    QuestionsPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__more_more__["a" /* MorePage */]);
    };
    QuestionsPage.prototype.showToastWithCloseButton = function (answer) {
        var toast = this.toastCtrl.create({
            message: answer,
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    QuestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-questions',template:/*ion-inline-start:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\questions\questions.html"*/'\n<ion-content padding class="body">\n  <div class="one">\n    <a (click)="back()">  <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>  </a>\n    <p class="header">  FAQs  </p>\n  </div>\n\n\n\n \n  <button ion-button block (click)="showToastWithCloseButton(\'You can choose any challenge that captures your imagination and uses your skills. \n  you can work on any of the offered projects (or create-your-own if you need to). \')" class="button">How do i choose a challenge? </button>\n  <button ion-button block (click)="showToastWithCloseButton(\'No. This event is 100% FREE and open to the public.\')" class="button"> is there a fee to participate?</button> \n  <button ion-button block (click)="showToastWithCloseButton(\'When you arrive at your event, there will be a number of focus challenges, and teams will \n  be created from participants interested in working on particular projects.\')" class="button">How do i find a team?</button>\n  <button ion-button block (click)="showToastWithCloseButton(\'We want to encourage your enthusiasm, so you are welcome to form teams before\n   the event and to start planning how to tackle the challenges. Of course, there is no need to do anything in advance; it is entirely up to you. The two-day event gives your team a chance to work together in person and we hope you will do most of the work over the weekend so that you can work collaboratively with others. The goal is not just to build the best solution, but also create a team who will do something better than any individual can do on their own.\')" class="button">Can i start now?</button>\n  <button ion-button block (click)="showToastWithCloseButton(\'Registered participants will be able to submit their projects online for judging at www.spaceappschallenge.org during the event weekend on 29th & 30th April, 2017. \')" class="button">How will i submit a solution?</button>\n  <button ion-button block (click)="showToastWithCloseButton(\'Just prepare your sleeping bag!\')" class="button">Can i take a nap at night? </button>\n  <button ion-button block (click)="showToastWithCloseButton(\'Projects will be judged at the local level first and then 2 teams will be nominated for global judging. The global level judging is performed by a NASA panel. \')" class="button">How will projects be judged? </button>\n  <button ion-button block (click)="showToastWithCloseButton(\'Yes. There will be numerous challenges geared towards people with no programming experience.\')" class="button">I don\'t code, can I still participate? </button>\n\n\n\n</ion-content>\n'/*ion-inline-end:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\questions\questions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], QuestionsPage);
    return QuestionsPage;
}());

//# sourceMappingURL=questions.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__more_more__ = __webpack_require__(28);
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
 * Generated class for the SponsorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SponsorPage = /** @class */ (function () {
    function SponsorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SponsorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SponsorPage');
    };
    SponsorPage.prototype.goto = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__more_more__["a" /* MorePage */]);
    };
    SponsorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sponsor',template:/*ion-inline-start:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\sponsor\sponsor.html"*/'\n<ion-content padding class="body">\n    <div class="one">\n        <a (click)="goto()">  <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>  </a>\n        <p class="header"> Sponsors/Partners </p>\n      </div>\n\n      <div class="main">\n           <p> Main Sponsors</p>\n           <img src="../../assets/imgs/vodafone.png">\n      </div>\n\n      <hr>\n      <div class="gold">\n          <p> Gold Sponsor</p>\n          <img src="../../assets/imgs/careem.png" >\n          <img src="../../assets/imgs/pepsi.jpg" >\n     </div>\n\n     <hr>\n     <div class="silver">\n        <p> Silver Sponsor</p>\n        <img src="../../assets/imgs/google.png" >\n        <img src="../../assets/imgs/Samsung-Logo.jpg" >\n   </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\sponsor\sponsor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SponsorPage);
    return SponsorPage;
}());

//# sourceMappingURL=sponsor.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__more_more__ = __webpack_require__(28);
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
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__more_more__["a" /* MorePage */]);
    };
    SettingsPage.prototype.ischecked = function () {
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\settings\settings.html"*/'\n\n<ion-content padding class="body">\n  <div class="one">\n    <a (click)="back()">  <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>  </a>\n    <p class="header">  Settings  </p>\n  </div>\n\n  <p class="notify">Notifications </p>\n  <ion-toggle checked="false" (ionChange)="ischecked($event)" id=\'1\'></ion-toggle>\n  <hr>\n\n  <p class="share">Share app </p>\n\n</ion-content>\n'/*ion-inline-end:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_more_more__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_speakers_speakers__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_schedule_schedule__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(182);
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
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    // titlesList:any;
    function TabsPage(alertCtrl, transfer, file, storage, http, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.transfer = transfer;
        this.file = file;
        this.storage = storage;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_5__pages_schedule_schedule__["a" /* SchedulePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__pages_speakers_speakers__["a" /* SpeakersPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__pages_more_more__["a" /* MorePage */];
        this.fileTransfer = this.transfer.create();
        this.user_id = navParams.get('user_id');
        this.user_email = navParams.get('Email');
        this.user_name = navParams.get('Name');
        console.log("tabs " + this.user_id + this.user_email);
        this.storage.set('user_email', this.user_email);
        this.storage.set('user_id', this.user_id);
        this.storage.set('user_name', this.user_name);
        //  this.download();
    }
    /*download() {
      const url = 'http://spaceappscairo.com/2018/speakers_img/heba.jpg';
      this.fileTransfer.download(url, this.file.dataDirectory+'heba.jpg').then((entry) => {
        this.showAlert('download complete: ' + entry.toURL());
        this.img_src=entry.toURL();
      }, (error) => {
        // handle error
     this.showAlert(error.message);
      });
    }*/
    TabsPage.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Info',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
        // this.getData();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", Object)
    ], TabsPage.prototype, "tabRef", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\tabs\tabs.html"*/'<ion-tabs #myTabs>\n  <ion-tab [root]="tab1Root" tabIcon="home" tabTitle="Home" [rootParams]="{user_id:user_id}">\n  </ion-tab>\n  <ion-tab [root]="tab2Root" tabIcon="calendar" tabTitle="schedule"></ion-tab>\n  <ion-tab [root]="tab3Root" tabIcon="people" tabTitle="Speakers"></ion-tab>\n  <ion-tab [root]="tab4Root" tabIcon="more" tabTitle="More"></ion-tab>\n\n</ion-tabs>\n\n\n'/*ion-inline-end:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_schedule__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__speaker_speaker__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(17);
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
 * Generated class for the SessionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SessionPage = /** @class */ (function () {
    function SessionPage(http, navCtrl, navParams) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Data = {};
        this.session_name = navParams.get('session_name');
        this.session_date = navParams.get('session_date');
        this.start_time = navParams.get('start_time');
        this.end_time = navParams.get('end_time');
        this.location = navParams.get('location');
        this.speaker_name = navParams.get('speaker_name');
        this.getSpeaker();
    }
    SessionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SessionPage');
    };
    SessionPage.prototype.goto = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__schedule_schedule__["a" /* SchedulePage */]);
    };
    SessionPage.prototype.gotospeaker = function () {
        //console.log(this.speaker_data[0]);
        var data = { "name": this.speaker_name, "location": this.location, "email": this.speaker_email, "brief_description": this.description,
            "from": "session" };
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__speaker_speaker__["a" /* SpeakerPage */], data);
    };
    SessionPage.prototype.getSpeaker = function () {
        // console.log("get data");
        var _this = this;
        this.Data.action = "getSpeaker";
        this.Data.name = this.speaker_name;
        console.log(this.Data.name);
        this.http.post("http://spaceappscairo.com/2018/spaceapps/getSpeaker.php", this.Data).subscribe(function (data) {
            console.log(data);
            _this.speaker_data = JSON.parse(data["_body"]);
            _this.description = _this.speaker_data[0].brief_description;
            //this.speaker_email=this.speaker_data[0].email;
            console.log(_this.description);
        }, function (err) {
            console.log(err);
        });
    };
    SessionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-session',template:/*ion-inline-start:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\session\session.html"*/'\n<ion-content padding class="body">\n  <div class="one">\n    <a (click)="goto()">  <ion-icon ios="ios-arrow-back" md="md-arrow-back" ></ion-icon>  </a>\n    <p class="header">{{session_name}}</p>\n  </div>\n\n  <div class="two">\n     <img src="../../assets/imgs/calendar22.png">\n     <label> {{session_date}}</label>\n\n     <img src="../../assets/imgs/clock22.png">\n     <label> {{start_time}} TO {{end_time}} </label>\n   \n     <br> <br>\n     <img src="../../assets/imgs/map22.png">\n     <label>{{location}}</label>\n  </div>\n\n  <br>\n\n  <div class="three">\n     <img src="../../assets/imgs/speaker.jpg" class="speaker"(click)="gotospeaker()">\n     <p> {{speaker_name}}</p>\n  </div>\n\n  <div class="four">\n      <p>\n       {{description}}\n      </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\session\session.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SessionPage);
    return SessionPage;
}());

//# sourceMappingURL=session.js.map

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 137;

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contactus/contactus.module": [
		328,
		18
	],
	"../pages/editprofile/editprofile.module": [
		329,
		17
	],
	"../pages/login/login.module": [
		330,
		16
	],
	"../pages/more/more.module": [
		331,
		15
	],
	"../pages/moreeventinfo/moreeventinfo.module": [
		332,
		14
	],
	"../pages/questions/questions.module": [
		333,
		13
	],
	"../pages/register/register.module": [
		334,
		12
	],
	"../pages/reset-pass1/reset-pass1.module": [
		335,
		11
	],
	"../pages/reset-pass2/reset-pass2.module": [
		336,
		0
	],
	"../pages/schedule/schedule.module": [
		337,
		10
	],
	"../pages/session/session.module": [
		338,
		9
	],
	"../pages/settings/settings.module": [
		339,
		8
	],
	"../pages/speaker/speaker.module": [
		340,
		7
	],
	"../pages/speakers/speakers.module": [
		341,
		6
	],
	"../pages/sponsor/sponsor.module": [
		342,
		5
	],
	"../pages/tabs/tabs.module": [
		343,
		4
	],
	"../pages/ticket/ticket.module": [
		344,
		3
	],
	"../pages/title/title.module": [
		345,
		2
	],
	"../pages/welcome/welcome.module": [
		346,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 178;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(251);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_more_more__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_speaker_speaker__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_speakers_speakers__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_schedule_schedule__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_moreeventinfo_moreeventinfo__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_alert_alert__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_ticket_ticket__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_session_session__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_qrcode2__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_register_register__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_welcome_welcome__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_reset_pass1_reset_pass1__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_title_title__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_http__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_barcode_scanner__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_sponsor_sponsor__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_local_notifications__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_background_mode__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_email_composer__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_contactus_contactus__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_questions_questions__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_editprofile_editprofile__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_settings_settings__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_file_transfer__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_file__ = __webpack_require__(182);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/*import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseService } from '../services/firebase.service';*/













//import { FirstPage } from '../pages/first/first';




//import { ResetPass2Page } from '../pages/reset-pass2/reset-pass2';




//import { AuthService } from '../providers/auth-service/auth-service';










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                // FirstPage,
                __WEBPACK_IMPORTED_MODULE_18__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_reset_pass1_reset_pass1__["a" /* ResetPass1Page */],
                //ResetPass2Page,
                __WEBPACK_IMPORTED_MODULE_19__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_speaker_speaker__["a" /* SpeakerPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_moreeventinfo_moreeventinfo__["a" /* MoreeventinfoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_alert_alert__["a" /* AlertPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_ticket_ticket__["a" /* TicketPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_title_title__["a" /* TitlePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_speakers_speakers__["a" /* SpeakersPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_session_session__["a" /* SessionPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_sponsor_sponsor__["a" /* SponsorPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_contactus_contactus__["a" /* ContactusPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_questions_questions__["a" /* QuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_editprofile_editprofile__["a" /* EditprofilePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_settings_settings__["a" /* SettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/contactus/contactus.module#ContactusPageModule', name: 'ContactusPage', segment: 'contactus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/more/more.module#MorePageModule', name: 'MorePage', segment: 'more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/moreeventinfo/moreeventinfo.module#MoreeventinfoPageModule', name: 'MoreeventinfoPage', segment: 'moreeventinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/questions/questions.module#QuestionsPageModule', name: 'QuestionsPage', segment: 'questions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-pass1/reset-pass1.module#ResetPass1PageModule', name: 'ResetPass1Page', segment: 'reset-pass1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-pass2/reset-pass2.module#ResetPass2PageModule', name: 'ResetPass2Page', segment: 'reset-pass2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schedule/schedule.module#SchedulePageModule', name: 'SchedulePage', segment: 'schedule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/session/session.module#SessionPageModule', name: 'SessionPage', segment: 'session', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/speaker/speaker.module#SpeakerPageModule', name: 'SpeakerPage', segment: 'speaker', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/speakers/speakers.module#SpeakersPageModule', name: 'SpeakersPage', segment: 'speakers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sponsor/sponsor.module#SponsorPageModule', name: 'SponsorPage', segment: 'sponsor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ticket/ticket.module#TicketPageModule', name: 'TicketPage', segment: 'ticket', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/title/title.module#TitlePageModule', name: 'TitlePage', segment: 'title', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                /*AngularFireModule.initializeApp(firebaseAuth),
                AngularFireAuthModule,
                 AngularFirestoreModule,*/
                __WEBPACK_IMPORTED_MODULE_22__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_17_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                //FirstPage,
                __WEBPACK_IMPORTED_MODULE_20__pages_reset_pass1_reset_pass1__["a" /* ResetPass1Page */],
                //ResetPass2Page,
                __WEBPACK_IMPORTED_MODULE_18__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_speaker_speaker__["a" /* SpeakerPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_moreeventinfo_moreeventinfo__["a" /* MoreeventinfoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_alert_alert__["a" /* AlertPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_ticket_ticket__["a" /* TicketPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_title_title__["a" /* TitlePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_speakers_speakers__["a" /* SpeakersPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_session_session__["a" /* SessionPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_sponsor_sponsor__["a" /* SponsorPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_contactus_contactus__["a" /* ContactusPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_questions_questions__["a" /* QuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_editprofile_editprofile__["a" /* EditprofilePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_settings_settings__["a" /* SettingsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_background_mode__["a" /* BackgroundMode */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_file__["a" /* File */]
                // AngularFireAuth,
                // AuthService
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_ticket_ticket__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editprofile_editprofile__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contactus_contactus__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__questions_questions__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sponsor_sponsor__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings_settings__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {SponsorPage} from '../../pages/sponsor/sponsor';







/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MorePage = /** @class */ (function () {
    function MorePage(storage, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        storage.get('user_name').then(function (val) {
            console.log('Your user_name is', val);
            _this.userName = val;
        });
    }
    MorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MorePage');
    };
    MorePage.prototype.gotosponsor = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__sponsor_sponsor__["a" /* SponsorPage */]);
    };
    MorePage.prototype.gototicket = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_ticket_ticket__["a" /* TicketPage */]);
    };
    MorePage.prototype.gotoEditProfile = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__editprofile_editprofile__["a" /* EditprofilePage */]);
    };
    MorePage.prototype.gotoFAQs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__questions_questions__["a" /* QuestionsPage */]);
    };
    MorePage.prototype.gotoContactUs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__contactus_contactus__["a" /* ContactusPage */]);
    };
    MorePage.prototype.gotoSettings = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__settings_settings__["a" /* SettingsPage */]);
    };
    MorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-more',template:/*ion-inline-start:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\more\more.html"*/'\n<ion-content padding class="body">\n  <div class="one">\n    <img src="assets/imgs/profilephoto.jpg" class="profile">\n   <p class="two"> {{userName}} </p>\n   <a class="three"(click)="gotoEditProfile()"> Edit Profile ?</a>\n  </div>\n <hr>\n  <div class="middle">\n    <img src="assets/imgs/ticket.png" class="icon" >\n    <a class="links" (click)="gototicket()"> My Ticket</a>\n  </div>\n     \n    \n  <div class="middle">\n    <img src="assets/imgs/partnership.png" class="icon" >\n    <a class="links" (click)="gotosponsor()"> Sponsors / Partners</a>\n  </div>\n   \n  <div class="middle">\n    <a class="links2"  (click)="gotoSettings()"> Settings</a>\n  </div>\n   \n  <div class="middle">\n    <a class="links2" (click)="gotoContactUs()"> Contact Us </a>\n  </div>\n   \n  <div class="middle">\n    <a class="links2" (click)="gotoFAQs()">  FAQs</a>\n  </div>\n\n\n  <br> <br>\n  <img src="assets/imgs/transparent.png" width="70"  height="70" style="margin: 15px 0px 0px 112px;">\n  <div class="m">\n    <img src="assets/imgs/facebook.png"  style="position:relative;top:-1px;">\n    <img src="assets/imgs/twitter.png" style="position:relative;top:-4px;"  >\n    <img src="assets/imgs/linkedin.png" style="position:relative;top:-4px;" >\n    <img src="assets/imgs/googleplus.png"style="position:relative;top:-4px;" >\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\more\more.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MorePage);
    return MorePage;
}());

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { FirstPage } from '../pages/first/first';

//import { BackgroundMode } from '@ionic-native/background-mode';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__moreeventinfo_moreeventinfo__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_alert__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ticket_ticket__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__title_title__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(http, navCtrl, navParams) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Data = {};
        this.user_id = navParams.get('user_id');
        console.log("home " + this.user_id);
    }
    HomePage.prototype.ionViewDidLoad = function () {
        //console.log("i am home");
        this.getTitles();
    };
    HomePage.prototype.gotopage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__alert_alert__["a" /* AlertPage */]);
    };
    HomePage.prototype.gotomore = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__moreeventinfo_moreeventinfo__["a" /* MoreeventinfoPage */]);
    };
    HomePage.prototype.gototicket = function () {
        var to_ticket = { "user_id": this.user_id };
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__ticket_ticket__["a" /* TicketPage */], to_ticket);
    };
    HomePage.prototype.gotoTitle = function (thetitle) {
        //console.log(thetitle);
        var title = {
            "title": thetitle
        };
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__title_title__["a" /* TitlePage */], title);
    };
    HomePage.prototype.getTitles = function () {
        // console.log("get data");
        var _this = this;
        this.Data.action = "getTitles";
        this.http.post("http://spaceappscairo.com/2018/spaceapps/getTitles.php", this.Data).subscribe(function (data) {
            _this.titlesList = JSON.parse(data["_body"]);
            // console.log(this.titlesList);
        }, function (err) {
            console.log(err);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\home\home.html"*/'\n<ion-content padding class="body">\n  <div class="one">\n    <!-- <a (click)="goto()">  <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>  </a> -->\n    <p class="header"> Spaceapp<span>cairo</span></p>\n   <a (click)="gotopage()"> <img src="../../assets/imgs/alarmbell.png"></a>\n  </div>\n <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->\n   <div class="two">\n    <img src="../../assets/imgs/map.png" style="position:relative;left:20px;top:15px;">\n    <div style="display: inline;">\n    <label> ITI ,Smart village cairo ,<br>  </label>\n    <label style="margin-left:30px;"> 6 october city</label>\n  </div>\n  <a class="links" href="https://www.google.com.eg/maps/place/Smart+Villages+Development+and+Management+Company/@30.0700987,31.0188232,20.85z/data=!4m5!3m4!1s0x14585ba3024b8275:0x9fbd976cf0e573b1!8m2!3d30.0700074!4d31.0189419&output=embed"  target="_blank" > Open map </a>\n  <ion-icon ios="ios-arrow-dropright" md="md-arrow-dropright" style="color:#33adff;" class="arrow"></ion-icon>\n  <br>\n  <img src="../../assets/imgs/time.png" style="position:relative;left:20px;top:15px;">\n  <label style="position:relative;top:7px;"> 29 OCT 2018 , 30 OCT 2018</label>\n  <br> <br>\n  <hr>\n    <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->\n    <p style="color:black;font-size: 12px;position: relative;left: 9px;">Event information </p>\n    <p class="moreinfo" style=" word-wrap: break-word;" >this is just some talking this isjust some talking this is just some talking this is just some talking this is just some talking this is just some talking\n        this is just some talking this is just some talking this is just some talking this is just some talking this is just some talking .\n    </p>\n\n    <a class="links" (click)="gotomore()" style="position:relative;left:270px;">  more </a>\n  <ion-icon ios="ios-arrow-dropright" md="md-arrow-dropright" style="color:#33adff;" class="arrow2"></ion-icon>\n  </div>\n  <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->\n\n\n\n  <div class="events" *ngFor="let title of titlesList" (click)="gotoTitle(title.title_body)">\n   <p class="time">{{title.time}}</p>\n   <br>\n   <img src="../../assets/imgs/events.jpg" height="70" width="70" class="eventimg"> \n   <p  class="eventtitle"> {{title.title_name}} </p>\n   <p class="description">{{title.sub_title}} </p>\n  </div>\n\n\n <!--///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->\n\n <div class="ticket" (click)="gototicket()">\n   <img src="assets/imgs/ticket3.png" style="postion:relative;left:13px;top:13px;">\n </div>\n <!--//////////////////////////////////////////////////////////tabs/////////////////////////////////////////////////////////////////////////////////////-->\n \n</ion-content>\n'/*ion-inline-end:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(27);
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
 * Generated class for the TicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TicketPage = /** @class */ (function () {
    function TicketPage(storage, navCtrl, navParams, barcodeScanner) {
        //this.user_id= navParams.get('user_id');;
        var _this = this;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.qrData = null;
        this.createdCode = null;
        this.scannedCode = null;
        this.storage.get('user_id').then(function (val) {
            console.log('Your user_id is', val);
            _this.user_id = val;
        });
    }
    /////////////////////////////
    TicketPage.prototype.createCode = function () {
        // this.createdCode = this.qrData;
        //7aga standard keda we 5alas ///////////////////////////
        this.createdCode = this.user_id;
        console.log(this.user_id);
    };
    TicketPage.prototype.scanCode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.scannedCode = barcodeData.text;
        }, function (err) {
            console.log('Error: ', err);
        });
    };
    ////////////////////////////////////
    TicketPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TicketPage');
    };
    TicketPage.prototype.goto = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    TicketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ticket',template:/*ion-inline-start:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\ticket\ticket.html"*/' <ion-content class="body">\n  <div class="one">\n    <a (click)="goto()">  <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>  </a>\n    <p class="header">My Ticket </p>\n  </div>\n\n  \n  <div class="ticket">\n    <p  id="number"> Ticket No.</p>\n\n    <p id="name">{{user_id}}</p>\n  \n\n  <!--QR SCANNER --------------------------------------------------------------------------------->\n \n  \n  <button ion-button  icon-left (click)="createCode()">Show QR Code</button>\n  <br><br> <br> <br>\n  <ion-card *ngIf="createdCode">\n    <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n    <ion-card-content>\n      <!-- <p>Value: {{ createdCode }}</p> -->\n    </ion-card-content>\n  </ion-card>\n\n</div>\n \n</ion-content>  \n\n'/*ion-inline-end:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\ticket\ticket.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], TicketPage);
    return TicketPage;
}());

//# sourceMappingURL=ticket.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welcome_welcome__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reset_pass1_reset_pass1__ = __webpack_require__(119);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(alertCtrl, http, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = {};
    }
    LoginPage.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Info',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.isEmail(this.userData.Email)) {
            this.userData.action = "login";
            this.http.post("http://spaceappscairo.com/2018/spaceapps/login.php", this.userData).subscribe(function (data) {
                var index = data["_body"].indexOf("{\"7laeen");
                var clean_data = data["_body"].substring(index, data["_body"].length);
                console.log(clean_data);
                var result = JSON.parse(clean_data);
                console.log(result);
                if (result.status == "success") {
                    var user_data = result[0];
                    console.log(user_data);
                    _this.showAlert("Sucssess! you are logged in..");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], user_data);
                }
                else {
                    _this.showAlert("Wrong Email or password!");
                }
            }, function (err) {
                _this.showAlert(err);
            });
        }
        else {
            this.showAlert("Email is invalid!");
        }
    };
    LoginPage.prototype.isEmail = function (search) {
        var serchfind;
        var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        serchfind = regexp.test(search);
        console.log(serchfind);
        return serchfind;
    };
    LoginPage.prototype.forgetpass = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__reset_pass1_reset_pass1__["a" /* ResetPass1Page */]);
    };
    LoginPage.prototype.Register = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.gotowelcome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__welcome_welcome__["a" /* WelcomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\login\login.html"*/'\n\n<ion-content padding>\n\n  <a (click)="gotowelcome()"><ion-icon ios="ios-arrow-back" md="md-arrow-back" ></ion-icon></a>\n \n   <br> \n   <br> \n   <br> \n   <br>\n   <img src="assets/imgs/nasaCairologo.png" width="100"  height="100">\n <ion-list>\n \n   \n   <ion-item>\n     <ion-label stacked>Email</ion-label>\n     <ion-input type="email" value="" [(ngModel)]="userData.Email" ></ion-input>\n   </ion-item>\n \n   <ion-item>\n     <ion-label stacked>Password</ion-label>\n     <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n   </ion-item>\n   \n  \n    <button ion-button id="button1" (click)="login()" >Log in </button>\n </ion-list>\n  <a (click)="forgetpass()" class="xo"> forget the password ?</a>\n  \n  <p style="color:#666666;" class="fixed"> Don\'t have an account ? <a class="span" (click)="Register()"> register</a> </p>\n </ion-content>\n '/*ion-inline-end:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_alert__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ticket_ticket__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_session__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(27);
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
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SchedulePage = /** @class */ (function () {
    function SchedulePage(storage, http, alertCtrl, navCtrl, navParams, toastCtrl) {
        // this.str="heba"
        this.storage = storage;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.Data = {};
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        //console.log("i am home");
        this.getSchedules();
    };
    SchedulePage.prototype.gotopage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__alert_alert__["a" /* AlertPage */]);
        //this.storage.set('name', 'Max');
    };
    SchedulePage.prototype.gototicket = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__ticket_ticket__["a" /* TicketPage */]);
    };
    SchedulePage.prototype.go = function (event) {
        //alert(event.target.id);
        if (event.target.id == "25oct") {
            this.display_list = this.schedule1List;
            this.index = 1;
        }
        else if (event.target.id == "26oct") {
            this.display_list = this.schedule2List;
            this.index = 2;
        }
        else {
            this.display_list = this.schedule3List;
            this.index = 3;
        }
        // document.getElementById("nehal").innerHTML= event.target.id;
    };
    SchedulePage.prototype.go_to_session = function (session_name, session_date, start_time, end_time, location, speaker_name) {
        var data = { "session_date": session_date,
            "start_time": start_time,
            "end_time": end_time,
            "location": location,
            "speaker_name": speaker_name,
            "session_name": session_name
        };
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__session_session__["a" /* SessionPage */], data);
    };
    SchedulePage.prototype.ischecked = function (event, session_id, session_name, indexx) {
        if (event.checked == true) {
            //////////////////add here ya heba /////////////////////////////////
            this.showToast(' Added successfully to your schedule');
            //call create notification
            this.change_list_checked(true, indexx);
        }
        else {
            /////////////////remove it from the global variable here ya heba /////////////////////////////
            this.showToast(' Removed successfully from your schedule');
            //call delete notification
            this.change_list_checked(false, indexx);
        }
    };
    SchedulePage.prototype.change_list_checked = function (check_state, my_index) {
        if (this.index == 1) {
            this.schedule1List[my_index].is_checked = check_state;
            this.storage.set('schedule1List', this.schedule1List);
        }
        else if (this.index == 2) {
            this.schedule2List[my_index].is_checked = check_state;
            this.storage.set('schedule2List', this.schedule2List);
        }
        else if (this.index == 3) {
            this.schedule3List[my_index].is_checked = check_state;
            this.storage.set('schedule3List', this.schedule3List);
        }
    };
    SchedulePage.prototype.fill_index_is_checked = function () {
        for (var i = 0; i < this.schedule1List.length; i++) {
            this.schedule1List[i].is_checked = false;
            this.schedule1List[i].index = i;
        }
        for (var i = 0; i < this.schedule2List.length; i++) {
            this.schedule2List[i].is_checked = false;
            this.schedule2List[i].index = i;
        }
        for (var i = 0; i < this.schedule3List.length; i++) {
            this.schedule3List[i].is_checked = false;
            this.schedule3List[i].index = i;
        }
    };
    SchedulePage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SchedulePage.prototype.getSchedules = function () {
        var _this = this;
        this.storage.get('schedulesList').then(function (val) {
            console.log('Your age is', val);
            _this.schedulesList = val;
            if (_this.schedulesList == null) {
                _this.Data.action = "getSchedules";
                _this.http.post("http://spaceappscairo.com/2018/spaceapps/getSchedules.php", _this.Data).subscribe(function (data) {
                    _this.schedulesList = JSON.parse(data["_body"]);
                    _this.schedule1List = _this.schedulesList[0];
                    _this.schedule2List = _this.schedulesList[1];
                    _this.schedule3List = _this.schedulesList[2];
                    _this.fill_index_is_checked();
                    _this.display_list = _this.schedule1List;
                    //console.log( this.schedulesList);
                    // console.log( this.schedule1List);
                    _this.storage.set('schedulesList', _this.schedulesList);
                    _this.storage.set('schedule1List', _this.schedule1List);
                    _this.storage.set('schedule2List', _this.schedule2List);
                    _this.storage.set('schedule3List', _this.schedule3List);
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                _this.storage.get('schedule1List').then(function (val) {
                    _this.schedule1List = val;
                    _this.display_list = _this.schedule1List;
                });
                _this.storage.get('schedule2List').then(function (val) {
                    _this.schedule2List = val;
                });
                _this.storage.get('schedule3List').then(function (val) {
                    _this.schedule3List = val;
                });
            }
        });
    };
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule',template:/*ion-inline-start:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\schedule\schedule.html"*/'\n\n<ion-content padding class="body" ng-app="myApp" ng-controller="myCtrl">\n  <div class="one">\n    <p class="header"> Schedule </p>\n   <a (click)="gotopage()"> <img src="../../assets/imgs/alarmbell.png"></a>\n  </div>\n\n  <div class="ticket" (click)="gototicket()">\n    <img src="assets/imgs/ticket3.png" style="postion:relative;left:13px;top:13px;">\n  </div>\n  <!--///////////////////////////////////////////////////////////////////////////////////////////-->\n\n  <ion-segment>\n      <ion-segment-button value="25oct" style="color: white;" id="25oct" (click)="go($event)">\n          25oct, 2018\n      </ion-segment-button>\n      <ion-segment-button value="26oct" style="color: white;" id="26oct"  (click)="go($event)">\n          26oct, 2018\n      </ion-segment-button>\n      <ion-segment-button value="27oct" style="color: white;" id="27oct"  (click)="go($event)">\n          27oct, 2018\n        </ion-segment-button>\n    </ion-segment>\n      <!--///////////////////////////////////////////////////////////////////////////////////////////-->\n\n\n      <div class="info">\n       <div  *ngFor="let schedule of display_list" (click)=go_to_session(schedule.session_name,schedule.session_date,schedule.start_time,schedule.end_time,schedule.location,schedule.speaker_name)>\n          <!-- <ion-icon ios="ios-done-all" md="md-done-all" class="icon1"></ion-icon> -->\n          <ion-icon ios="ios-done-all" md="md-done-all" class="icon1" style="color:blue;"></ion-icon>\n          <div class="divinner">\n            <p class="time"> {{schedule.start_time}} : {{schedule.end_time}}</p>\n            <p class="inform"> {{schedule.session_name}} </p>\n          </div>\n          <ion-toggle checked="{{schedule.is_checked}}" id="{{schedule.session_id}}" (ionChange)="ischecked($event,schedule.session_id,schedule.session_name,schedule.index)" ></ion-toggle>\n     \n       <br> <br> <br> <br> <br> <br> <br>\n       </div>\n\n      </div>\n   \n     <!-- <hr style="position:relative;top:-180px;"> -->\n </ion-content>\n '/*ion-inline-end:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\schedule\schedule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(65);
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
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = /** @class */ (function () {
    // tabBarElement: any;
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.splash = true;
        //  this.tabBarElement = document.querySelector('.tabbar');
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // this.tabBarElement.style.display = 'none';
        setTimeout(function () {
            _this.splash = false;
            //    this.tabBarElement.style.display = 'flex';
        }, 4000);
    };
    WelcomePage.prototype.ionViewWillEnter = function () {
        var tabBarElement = document.querySelector('.tabbar.show-tabbar');
        if (tabBarElement != null) {
            //      this.tabBarElement.style.display = 'none'; // or whichever property which you want to access
        }
    };
    WelcomePage.prototype.tologin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.toregister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\welcome\welcome.html"*/'\n  <div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'"> \n    <div class="flb">\n     <div class="Aligner-item Aligner-item--top"></div>\n     <img src="assets/imgs/trial.png">\n     <div class="Aligner-item Aligner-item--bottom"></div>\n   </div>\n </div> \n \n \n <ion-content>\n <div class="splash-bg">\n   <div class="splash-logo">\n     </div>\n \n\n <img src="assets/imgs/trial.png" width="100"  height="100"> \n<div class="zeft">\n <button class="logbtn" (click)="tologin()"> log in</button>\n <button class="logbtn2" (click)="toregister()"> register now</button>\n</div>\n     </div>\n     \n   </ion-content>\n'/*ion-inline-end:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
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
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlertPage = /** @class */ (function () {
    function AlertPage(http, navCtrl, navParams) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Data = {};
    }
    AlertPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad AlertPage');
        this.getPromotions();
        this.getAlerts();
    };
    AlertPage.prototype.goto_alert = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    AlertPage.prototype.getAlerts = function () {
        var _this = this;
        this.Data.action = "getAlerts";
        this.http.post("http://spaceappscairo.com/2018/spaceapps/getAlerts.php", this.Data).subscribe(function (data) {
            //console.log(data);
            _this.AlertList = JSON.parse(data["_body"]);
            console.log("Alist" + _this.AlertList);
        });
    };
    AlertPage.prototype.getPromotions = function () {
        var _this = this;
        this.Data.action = "getPromotions";
        this.http.post("http://spaceappscairo.com/2018/spaceapps/getPromotions.php", this.Data).subscribe(function (data) {
            //console.log(data);
            _this.PromotionList = JSON.parse(data["_body"]);
            //console.log("Plist"+this.PromotionList);
        });
    };
    AlertPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alert',template:/*ion-inline-start:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\alert\alert.html"*/'<ion-content padding class="body">\n  <div class="one">\n    <a (click)="goto_alert()">  <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>  </a>\n    <p class="header"> Alert </p>\n  </div>\n\n  <!-- <div class="speaker">\n    <img src="../../assets/imgs/speaker.png" class="speakerimg">\n    <label><span style="font-weight:bold;">Session name</span> will start after five minutes</label>\n  </div> -->\n  <div class="speaker" *ngFor="let alert of AlertList" >\n    <img src="../../assets/imgs/speaker.png" class="speakerimg"> \n    <div style="margin-left: 40px;position:relative;top: -20px;">\n    <label> {{alert.description}}</label>\n  </div>\n    <br>\n    <hr>\n    \n   </div>\n  \n  <!-- <div>\n    <img src="../../assets/imgs/alarm-clock.png" class="alarmimg" >\n    <div id="any">\n    <p class="alarm">\n      this is adumpy text  this is adumpy text  this is adumpy text  this is adumpy text  this is adumpy text  this is adumpy text  this is adumpy text\n      this is adumpy text this is adumpy text this is adumpy text this is adumpy text \n     {{Alert.description}}\n    </p>\n  </div>\n  </div> -->\n  <div *ngFor="let promotion of PromotionList">\n    <div class="xx">\n     <img src="../../assets/imgs/{{promotion.sponsor}}.jpg" class="avatar">\n     <div class="div">\n     <p  id="nn">Promotions</p>\n     <p id="nnn"> \n       <!-- this is a dumpy text thdumpy text this is a dumpy text this is a dumpy text this is a dumpy text this is a dumpy text -->\n            {{promotion.description}}\n    </p>\n    </div>\n    <br>\n  </div>\n</div>\n  \n    <!-- <div *ngFor="let promotion of PromotionList">\n     <img  src="../../assets/imgs/{{promotion.sponsor}}.jpg"   class="avatar">\n     <div class="div">\n     <p  id="nn">Promotions</p>\n     <p id="nnn"> \n       this is a dumpy text this is a dumpy text this is a dumpy text this is a dumpy text this is a dumpy text this is a dumpy text this is a dumpy text \n      {{promotion.description}}\n      </p>\n    </div>\n    <hr>\n    <br>\n  </div> -->\n\n</ion-content>\n'/*ion-inline-end:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\alert\alert.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AlertPage);
    return AlertPage;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_alert__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ticket_ticket__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__speaker_speaker__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(17);
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
 * Generated class for the SpeakersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SpeakersPage = /** @class */ (function () {
    function SpeakersPage(http, navCtrl, navParams) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Data = {};
    }
    SpeakersPage.prototype.ionViewDidLoad = function () {
        this.getSpeakers();
    };
    SpeakersPage.prototype.gotopage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__alert_alert__["a" /* AlertPage */]);
    };
    SpeakersPage.prototype.gototicket = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__ticket_ticket__["a" /* TicketPage */]);
    };
    SpeakersPage.prototype.gotospeaker = function (name, jop_title, brief_description, email) {
        var data = {
            "name": name,
            "jop_title": jop_title,
            "brief_description": brief_description,
            "email": email,
            "from": "speakers"
        };
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__speaker_speaker__["a" /* SpeakerPage */], data);
    };
    SpeakersPage.prototype.go = function (event) {
        //alert(event.target.id);
        if (event.target.id == "Speakers") {
            this.display_list = this.speaker1List;
        }
        else if (event.target.id == "Mentors") {
            this.display_list = this.speaker2List;
        }
        else {
            this.display_list = this.speaker3List;
        }
        // document.getElementById("nehal").innerHTML= event.target.id;
    };
    SpeakersPage.prototype.getSpeakers = function () {
        var _this = this;
        this.Data.action = "getSpeakers";
        this.http.post("http://spaceappscairo.com/2018/spaceapps/getSpeakers.php", this.Data).subscribe(function (data) {
            _this.speakersList = JSON.parse(data["_body"]);
            _this.speaker1List = _this.speakersList[0];
            _this.speaker2List = _this.speakersList[1];
            _this.speaker3List = _this.speakersList[2];
            _this.display_list = _this.speaker1List;
        }, function (err) {
            console.log(err);
        });
    };
    SpeakersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-speakers',template:/*ion-inline-start:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\speakers\speakers.html"*/'\n<ion-content padding class="body">\n  <div class="one">\n    <p class="header"> Speakers </p>\n   <a (click)="gotopage()"> <img src="../../assets/imgs/alarmbell.png" class="x"></a>\n  </div>\n\n  <div class="ticket" (click)="gototicket()">\n    <img src="assets/imgs/ticket3.png" style="postion:relative;left:13px;top:13px;" class="x">\n  </div>\n  <!--///////////////////////////////////////////////////////////////////////////////////////////-->\n\n  <ion-segment>\n      <ion-segment-button value="Speakers" style="color: white;" id="Speakers" (click)="go($event)">\n      Speakers   \n      </ion-segment-button>\n      <ion-segment-button value="Mentors" style="color: white;" id="Mentors"  (click)="go($event)">\n         Mentors\n      </ion-segment-button>\n      <ion-segment-button value="Judges" style="color: white;" id="Judges"  (click)="go($event)">\n         Judges\n        </ion-segment-button>\n    </ion-segment>\n\n<br>\n<!-- the divs are repeated just for testing the look -->\n\n<div *ngFor="let speaker of display_list">\n    <div class="spe" (click)="gotospeaker(speaker.name,speaker.jop_title,speaker.brief_description,speaker.email)">\n        <img src="../../assets/imgs/speaker.jpg">\n        <p class="name"> {{speaker.name}} </p>\n        <p> {{speaker.jop_title}}</p>\n    </div>\n\n\n</div>\n</ion-content>\n'/*ion-inline-end:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\speakers\speakers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SpeakersPage);
    return SpeakersPage;
}());

//# sourceMappingURL=speakers.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_schedule__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__speakers_speakers__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(27);
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
 * Generated class for the SpeakerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SpeakerPage = /** @class */ (function () {
    function SpeakerPage(storage, alertCtrl, emailComposer, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.emailComposer = emailComposer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.speaker_name = navParams.get('name');
        this.description = navParams.get('brief_description');
        this.speaker_email = navParams.get('email');
        this.jop_title = navParams.get('jop_title');
        this.from = navParams.get('from');
        storage.get('user_email').then(function (val) {
            console.log('Your email is', val);
            _this.user_email = val;
        });
    }
    SpeakerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SpeakerPage');
    };
    SpeakerPage.prototype.goto = function () {
        if (this.from == "session")
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__schedule_schedule__["a" /* SchedulePage */]);
        else if (this.from == "speakers")
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__speakers_speakers__["a" /* SpeakersPage */]);
    };
    SpeakerPage.prototype.composeEmail = function () {
        var _this = this;
        console.log('open email');
        var email = {
            from: this.user_email,
            to: this.speaker_email,
            isHtml: true
        };
        this.emailComposer.isAvailable().then(function (available) {
            //if(available) {
            //this.showAlert("email")
            //Now we know we can send
            _this.emailComposer.open(email);
            //}
        });
    };
    SpeakerPage.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Info',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    SpeakerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-speaker',template:/*ion-inline-start:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\speaker\speaker.html"*/'<ion-content padding class="body">\n\n  <div class="one">\n    <a (click)="goto()">  <ion-icon ios="ios-arrow-back" md="md-arrow-back" ></ion-icon>  </a>\n    <p class="header"> {{speaker_name}}</p>\n  </div>\n\n  <div class="two">\n       <img src="../../assets/imgs/speaker.jpg" class="ion-avatar">\n     <p class="position">\n     {{jop_title}}\n    </p>\n  </div>\n\n  <div class="three">\n     <p style="color: #33ccff;">Biography</p>\n     <p style="color:gray;"> {{description}}\n     </p>\n  </div>\n\n  <br>\n  \n  <div class="four">\n   <hr>\n     <img (click)="composeEmail()" src="../../assets/imgs/email.png">\n   \n  </div>\n\n \n</ion-content>\n'/*ion-inline-end:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\speaker\speaker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SpeakerPage);
    return SpeakerPage;
}());

//# sourceMappingURL=speaker.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(52);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(http, alertCtrl, navCtrl, navParams) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = {};
    }
    RegisterPage.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Info',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    RegisterPage.prototype.signup = function () {
        var _this = this;
        this.userData.Email = this.userData.Email.toLowerCase();
        if (this.isEmail(this.userData.Email)) {
            this.userData.action = "signup";
            console.log("in sign up");
            this.http.post("http://spaceappscairo.com/2018/spaceapps/signup3.php", this.userData).subscribe(function (data) {
                console.log("no error ocur");
                var index = data["_body"].indexOf("{\"7laeen");
                var clean_data = data["_body"].substring(index, data["_body"].length);
                console.log(clean_data);
                var result = JSON.parse(clean_data);
                if (result.status == "success") {
                    var user_data = result[0];
                    console.log(user_data);
                    _this.showAlert("Suceess! you are Registered go to your mail to know the password and log in..");
                    //this.navCtrl.setRoot(HomePage, user_data);
                }
                else if (result.status == "this team not exist!") {
                    _this.showAlert("This team is not exist!");
                }
                else if (result.status == "register first") {
                    _this.showAlert("Please register first on the website!");
                }
            }, function (err) {
                console.log("error ocur");
                _this.showAlert(err);
            });
        }
        else {
            this.showAlert("Email is invalid!");
        }
    };
    RegisterPage.prototype.isEmail = function (search) {
        var serchfind;
        var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        serchfind = regexp.test(search);
        console.log(serchfind);
        return serchfind;
    };
    RegisterPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.gotopage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* WelcomePage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n\n\n<ion-content padding>\n\n <a (click)="gotopage()"><ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon></a>\n\n  <br> \n  <br> \n  <br> \n  <br>\n  <img src="assets/imgs/nasaCairologo.png" width="100"  height="90">\n<ion-list>\n\n  <ion-item>\n    <ion-label stacked>Username</ion-label>\n    <ion-input type="text" value="" [(ngModel)]="userData.Name"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label stacked>Email</ion-label>\n    <ion-input type="email" value="" [(ngModel)]="userData.Email"></ion-input>\n  </ion-item>\n\n  \n  <ion-item>\n    <ion-label stacked>Company/uiversity</ion-label>\n    <ion-input type="text" value="" [(ngModel)]="userData.edu_institute"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label stacked>Team name</ion-label>\n    <ion-input type="text" value="" [(ngModel)]="userData.team"></ion-input>\n  </ion-item>\n   <button ion-button id="button1" (click)="signup()">Register</button>\n</ion-list>\n  <p> Do you have an account ? <a (click)="login()">  login </a></p>\n</ion-content>\n\n'/*ion-inline-end:"E:\COMPUTER_ENGINEERING\ionic\spaceapps_proj\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

/*register()
  {
    

    this.fire.auth.createUserWithEmailAndPassword("heba@gmail.com","1234hebaahmed").then(
        data => {
              this.showAlert("Suceess! you are Registered with just email..");
        
        
        }
        )
       .catch(
        error => {
             this.showAlert(error.message);
        }
        );
  }
*/ 
//# sourceMappingURL=register.js.map

/***/ })

},[228]);
//# sourceMappingURL=main.js.map