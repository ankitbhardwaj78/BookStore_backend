(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/addlisting/addlisting.component.css":
/*!*****************************************************!*\
  !*** ./src/app/addlisting/addlisting.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    background: #384047;\n    font-family: sans-serif;\n    font-size: 10px\n  }\n  \n  form {\n    background: #fff;\n    padding: 4em 4em 2em;\n    max-width: 50%;\n    margin: auto;\n    margin-top: 4%;\n    box-shadow: 0 0 1em #222;\n    border-radius: 5px;\n  }\n  \n  p {\n    margin: 0 0 3em 0;\n    position: relative;\n  }\n  \n  label {\n    display: block;\n    font-size: 1.6em;\n    margin: 0 0 .5em;\n    color: #333;\n  }\n  \n  input {\n    display: block;\n    box-sizing: border-box;\n    width: 100%;\n    outline: none\n  }\n  \n  input[type=\"text\"],\n  input[type=\"password\"],select, input[type=\"file\"], input[type=\"number\"]{\n    background: #f5f5f5;\n    border: 1px solid #e5e5e5;\n    font-size: 1.6em;\n    padding: 10px;\n    border-radius: 5px;\n  }\n  \n  input[type=\"text\"]:focus,\n  input[type=\"password\"]:focus {\n    background: #fff\n  }\n  \n  button[type=\"submit\"] {\n    background: #2F558E;\n    box-shadow: 0 3px 0 0 #1D3C6A;\n    border-radius: 10px;\n    border: none;\n    color: #fff;\n    cursor: pointer;\n    display: block;\n    font-size: 2em;\n    line-height: 1.6em;\n    outline: none;\n    padding: 13px;\n    margin: auto;\n    margin-top: 5%;\n    text-shadow: 0 1px #68B25B;\n  }\n  \n  button[type=\"submit\"]:disabled {\n    background: #dddddd;\n}\n"

/***/ }),

/***/ "./src/app/addlisting/addlisting.component.html":
/*!******************************************************!*\
  !*** ./src/app/addlisting/addlisting.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"margin-left: 40%;color: cadetblue;padding-top: 3%;padding-bottom: 0px;\">Provide The Details</h1>\n<div class=\"col-md-8 col-md-offset-2\" style=\"height: 800px;\">\n  <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n          <label for=\"Bookname\">Book Name</label>\n          <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"bookname\" required>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"Authorname\">Author Name</label>\n          <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"authorname\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"Price\">Price</label>\n        <input\n                type=\"number\"\n                class=\"form-control\"\n                formControlName=\"price\" required>\n     </div>\n     <div class=\"form-group\">\n        <label for=\"Condition\">Condition</label>\n        <select id=\"power\"  formControlName=\"condition\" required>\n            <option class=\"form-control\" *ngFor=\"let pow of condition\" [value]=\"pow\" >{{pow}}</option>\n        </select>\n     </div>\n     <div>\n            <label for=\"image\">Image</label>\n            <input\n                    type=\"file\"\n                    (change)=\"onFileSelected($event)\" #image required>\n        </div>\n      <button\n              class=\"btn btn-primary\"\n              type=\"submit\"\n              [disabled]=\"!myForm.valid || image.value==''\">Submit</button>\n  </form>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/addlisting/addlisting.component.ts":
/*!****************************************************!*\
  !*** ./src/app/addlisting/addlisting.component.ts ***!
  \****************************************************/
/*! exports provided: AddlistingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddlistingComponent", function() { return AddlistingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listing.service */ "./src/app/listing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddlistingComponent = /** @class */ (function () {
    function AddlistingComponent(listingservice) {
        this.listingservice = listingservice;
        this.condition = ['New', 'Almost new', 'Slight Damage', 'Worn'];
        this.selectedFile = null;
        this.fd = new FormData();
    }
    AddlistingComponent.prototype.onSubmit = function () {
        this.fd.append('bookname', this.myForm.value.bookname);
        this.fd.append('authorname', this.myForm.value.authorname);
        this.fd.append('price', this.myForm.value.price);
        this.fd.append('condition', this.myForm.value.condition);
        this.listingservice.addlisting(this.fd).subscribe(function (data) {
            alert("Listing added Successfully");
        });
        this.myForm.reset();
    };
    AddlistingComponent.prototype.onFileSelected = function (event) {
        console.log(event);
        this.selectedFile = event.target.files[0];
        this.fd.append('bookimage', this.selectedFile, this.selectedFile.name);
    };
    AddlistingComponent.prototype.ngOnInit = function () {
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            bookname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            authorname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            condition: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    };
    AddlistingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addlisting',
            template: __webpack_require__(/*! ./addlisting.component.html */ "./src/app/addlisting/addlisting.component.html"),
            styles: [__webpack_require__(/*! ./addlisting.component.css */ "./src/app/addlisting/addlisting.component.css")]
        }),
        __metadata("design:paramtypes", [_listing_service__WEBPACK_IMPORTED_MODULE_2__["ListingService"]])
    ], AddlistingComponent);
    return AddlistingComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _listing_listing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./listing/listing.component */ "./src/app/listing/listing.component.ts");
/* harmony import */ var _addlisting_addlisting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addlisting/addlisting.component */ "./src/app/addlisting/addlisting.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _displaylisting_displaylisting_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./displaylisting/displaylisting.component */ "./src/app/displaylisting/displaylisting.component.ts");
/* harmony import */ var _bookdetail_bookdetail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bookdetail/bookdetail.component */ "./src/app/bookdetail/bookdetail.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
                _listing_listing_component__WEBPACK_IMPORTED_MODULE_8__["ListingComponent"],
                _addlisting_addlisting_component__WEBPACK_IMPORTED_MODULE_9__["AddlistingComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _displaylisting_displaylisting_component__WEBPACK_IMPORTED_MODULE_12__["DisplaylistingComponent"],
                _bookdetail_bookdetail_component__WEBPACK_IMPORTED_MODULE_13__["BookdetailComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_14__["MessageComponent"],
                _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_15__["WishlistComponent"],
                _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_16__["MainpageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_10__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"]
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _listing_listing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listing/listing.component */ "./src/app/listing/listing.component.ts");
/* harmony import */ var _addlisting_addlisting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addlisting/addlisting.component */ "./src/app/addlisting/addlisting.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _displaylisting_displaylisting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./displaylisting/displaylisting.component */ "./src/app/displaylisting/displaylisting.component.ts");
/* harmony import */ var _bookdetail_bookdetail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bookdetail/bookdetail.component */ "./src/app/bookdetail/bookdetail.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");











var APP_ROUTES = [
    {
        path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], children: [
            { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_5__["SigninComponent"] },
            { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__["SignupComponent"] },
            { path: '', component: _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_10__["MainpageComponent"] },
        ]
    },
    {
        path: '', component: _listing_listing_component__WEBPACK_IMPORTED_MODULE_2__["ListingComponent"], children: [
            { path: 'listing/add', component: _addlisting_addlisting_component__WEBPACK_IMPORTED_MODULE_3__["AddlistingComponent"] },
            { path: 'listing', component: _displaylisting_displaylisting_component__WEBPACK_IMPORTED_MODULE_6__["DisplaylistingComponent"] },
            { path: 'listing/:id', component: _bookdetail_bookdetail_component__WEBPACK_IMPORTED_MODULE_7__["BookdetailComponent"] },
            { path: 'messages', component: _message_message_component__WEBPACK_IMPORTED_MODULE_8__["MessageComponent"] },
            { path: 'wishlist', component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_9__["WishlistComponent"] }
        ]
    },
    { path: 'listing/:id', component: _bookdetail_bookdetail_component__WEBPACK_IMPORTED_MODULE_7__["BookdetailComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.signup = function (user) {
        return this.http.post('/api/users', user);
    };
    AuthService.prototype.signin = function (user) {
        return this.http.post('/api/users/signin', user);
    };
    AuthService.prototype.logout = function () {
        return this.http.get('/api/users/logout');
    };
    AuthService.prototype.isloggedin = function () {
        return this.http.get('/api/users/isloggedin');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/bookdetail/bookdetail.component.css":
/*!*****************************************************!*\
  !*** ./src/app/bookdetail/bookdetail.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\n    width: 100%;\n    margin: 0;\n    font-family: 'Open Sans', sans-serif;\n  }\n  .container {\n    max-width: 1200px;\n    position: relative;\n    margin: 0 auto;\n    padding: 15px;\n    display: flex;\n      align-items: center;\n      justify-content: center;\n      margin: 0 auto;\n      width: 80%;\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#294954', endColorstr='#4e5a44', GradientType=1 );\n  \n  }\n  .wrapper{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    width: 100%;\n  }\n  /* Columns */\n  .left-column {\n    width: 35%;\n    height: 405px;\n    position: relative;\n    background: #058cb1;\n    background: linear-gradient(to top right, #058cb1 0%, #9ad06e 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#058cb1', endColorstr='#9ad06e', GradientType=1 );\n    box-shadow: 18px 18px 47px 16px rgba(0,0,0,0.5);\n  }\n  .right-column {\n    width: 35%;\n    height: 410px;\n    background: #fff;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    z-index: 9999;\n    box-shadow: 18px 18px 47px 16px rgba(0,0,0,0.5);\n  }\n  /* Left Column */\n  .left-column img {\n    width: 120%;\n  }\n  .left-column a {\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    right: 20px;\n    top: 20px;\n    transition: all 0.3s ease;\n    background: #fff;\n    border-radius: 50%;\n    text-align: center;\n    z-index: 999999999;\n  }\n  .left-column a i{\n    line-height: 40px;\n    color: #74bb8f;\n  }\n  .left-column img.active {\n    opacity: 1;\n  }\n  /* Product Description */\n  .product-description span {\n    color: #000;\n    letter-spacing: 1px;\n    text-decoration: none;\n  }\n  .product-description h1 {\n    font-weight: 700;\n    font-size: 30px;\n    color: #000;\n    letter-spacing: 1px;\n    margin: 0;\n  }\n  /* Product Color */\n  .product-color {\n    margin-bottom: 30px;\n  }\n  .color-choose div {\n    display: inline-block;\n  }\n  .color-choose input[type=\"radio\"] {\n    display: none;\n  }\n  .color-choose input[type=\"radio\"] + label span {\n    display: inline-block;\n    width: 25px;\n    height: 25px;\n    margin: -1px 4px 0 0;\n    vertical-align: middle;\n    cursor: pointer;\n    border-radius: 50%;\n  }\n  .color-choose input[type=\"radio\"] + label span {\n    border: 2px solid #FFFFFF;\n    \n  }\n  .color-choose input[type=\"radio\"]#lightblue + label span {\n    background-color: #60d1f1;\n  }\n  .color-choose input[type=\"radio\"]#darkblue + label span {\n    background-color: #0497ca;\n  }\n  .color-choose input[type=\"radio\"]#green + label span {\n    background-color: #89d99a;\n  }\n  .color-choose input[type=\"radio\"]#yellow + label span {\n    background-color: #f6d03f;\n  }\n  .color-choose input[type=\"radio\"]#purpple + label span {\n    background-color: #6e72d5;\n  }\n  .color-choose input[type=\"radio\"]#lightblue:checked + label span {\n    box-shadow:  0 0 0 1px #60d1f1;\n  }\n  .color-choose input[type=\"radio\"]#darkblue:checked + label span{\n    box-shadow:  0 0 0 1px #0497ca;\n  }\n  .color-choose input[type=\"radio\"]#green:checked + label span {\n    box-shadow:  0 0 0 1px #89d99a;\n  }\n  .color-choose input[type=\"radio\"]#yellow:checked + label span {\n    box-shadow:  0 0 0 1px #f6d03f;\n  }\n  .color-choose input[type=\"radio\"]#purpple:checked + label span {\n    box-shadow:  0 0 0 1px #6e72d5;\n  }\n  /* Product Price */\n  .product-price {\n    width: 50%;\n    font-size: 42px;\n    font-weight: 100;\n    color: #43474D;\n    text-align: right;\n  }\n  .ratprice{\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n  }\n  #rateYo{\n    width: 50% !important;\n    margin-top: 20px;\n   }\n  .size{\n      display: flex;\n    }\n  .buttons{\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n    }\n  button{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 45px;\n    background: #00a1d5;\n    border: none;\n    border-radius: 25px;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    font-weight: bold;\n    color: #fff;\n    cursor: pointer;\n    box-shadow: -1px 8px 20px -6px rgba(0,161,213,1); \n  }\n  .buttons a{\n    text-align: center;\n    margin-top: 10px;\n    font-size: 12px;\n    color: #00a1d5;\n  }\n  .button{\n    font-size: 15px;\n    padding: 5px;\n    border: 1px solid #86939E;\n    cursor: pointer;\n    color: #86939E;\n  }\n  .inc{\n    border-top-left-radius: 15px;\n    border-bottom-left-radius: 15px;\n    border-right: none;\n  }\n  .dec{\n    border-top-right-radius: 15px;\n    border-bottom-right-radius: 15px;\n    border-left: none;\n  }\n  #size-wrapper{\n    width: 45px;\n    border: 1px solid #86939E;\n  }\n  #size{\n    width: 100%;\n    font-size: 15px;\n    font-weight: 900;\n    line-height: 35px;\n    text-align: center;\n    border: none;\n  }\n  .product-color,\n  .size-config{\n    text-transform: uppercase;\n    color: #86939E;\n  }\n  @media screen and (max-width: 415px)  {\n    .container{\n      width: 100%;\n      padding: 0;\n    }\n    .wrapper{\n    flex-direction: column;\n    \n  }\n  .left-column,\n  .right-column {\n    width: 80%;\n    margin: 0 auto;\n    padding: 30px;\n    box-shadow: none;\n  }\n  .left-column {\n    height: 300px;\n    overflow: hidden;\n  }\n  .left-column img{\n    left: 20px;\n    width: 100%;\n  }\n  }\n  body {\n    font-family: \"Noto Sans\", sans-serif;\n    text-rendering: optimizeLegibility;\n    color: #1F1F21;\n    background: linear-gradient(90deg, #2B2B2B, #4A4A4A);\n    background-size: cover;\n    background-repeat: repeat-y;\n    overflow: hidden;\n  }\n  .compose {\n    box-sizing: border-box;\n    width: 100%;\n    min-width: 320px;\n    height: 120px;\n    text-align: center;\n  }\n  .compose a {\n    font-size: 18px;\n    line-height: 18px;\n    color: #F7F7F7;\n    margin: 24px 0 0 0;\n    padding: 0;\n    text-transform: uppercase;\n    text-decoration: none;\n    display: inline-block;\n    opacity: 0.8;\n    transition: opacity 0.2s ease-in-out;\n    -webkit-transform: translateZ(0);\n            transform: translateZ(0);\n  }\n  .compose a:hover {\n    opacity: 1;\n  }\n  .compose a i.material-icons {\n    font-size: 40px;\n  }\n  #modal {\n    box-sizing: border-box;\n    background: #F7F7F7;\n    color: #1F1F21;\n    border-top-right-radius: 2px;\n    border-top-left-radius: 2px;\n    transition: top 0.4s ease-in-out;\n    -webkit-transform: translateZ(0);\n            transform: translateZ(0);\n    overflow: hidden;\n    min-width: 320px;\n    padding: 60px 20px 0 20px;\n    top: 100%;\n    bottom: 0;\n    left: 10px;\n    right: 10px;\n  }\n  #modal.open {\n    top: 120px;\n  }\n  #modal .modal_content {\n    overflow-y: auto;\n    height: 100%;\n  }\n  #modal i.closer {\n    cursor: pointer;\n    position: absolute;\n    top: 20px;\n    right: 20px;\n  }\n  #modal input, #modal textarea {\n    border-radius: 2px;\n    box-sizing: border-box;\n    color: #8E8E93;\n    background: #F7F7F7;\n    width: 100%;\n    padding: 20px;\n    margin: 0 auto 20px auto;\n    outline: none;\n    border: 1px solid #C7C7CC;\n  }\n  #modal input.half {\n    width: 50%;\n    float: left;\n    border-radius: 0;\n    border-top-left-radius: 2px;\n    border-bottom-left-radius: 2px;\n  }\n  #modal input.half:nth-child(2) {\n    border-top-right-radius: 2px;\n    border-top-left-radius: 0;\n    border-bottom-right-radius: 2px;\n    border-bottom-left-radius: 0;\n  }\n  #modal input.btn {\n    color: #F7F7F7;\n    text-transform: uppercase;\n    font-weight: normal;\n    font-size: 18px;\n    line-height: 18px;\n    background: #4CD964;\n    border: 1px solid #4CD964;\n  }\n  #modal .clear {\n    clear: both;\n  }\n  #modal textarea {\n    min-height: 150px;\n  }\n  #modal input[type=\"submit\"]:disabled {\n    background: #dddddd;\n}\n  "

/***/ }),

/***/ "./src/app/bookdetail/bookdetail.component.html":
/*!******************************************************!*\
  !*** ./src/app/bookdetail/bookdetail.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n\n  <div class=\"wrapper\">\n\n    <!-- Left Column / Headphones Image -->\n    <div class=\"left-column\">\n      <img data-image=\"lightblue\" src=\"\" alt=\"\">\n      <img data-image=\"darkblue\" src=\"\" alt=\"\">\n      <img data-image=\"green\" class=\"active\" src=\"https://ankitbookstore.herokuapp.com/{{listing.image}}\" alt=\"\" height=\"100%\">\n      <img data-image=\"yellow\" src=\"\" alt=\"\">\n      <img data-image=\"purpple\" src=\"\" alt=\"\">\n    </div>\n\n\n    <!-- Right Column -->\n    <div class=\"right-column\">\n      <!-- Product Ratings and Price -->\n      <div class=\"ratprice\">\n        <div id=\"rateYo\"></div>\n        <div class=\"product-price\">\n         {{listing.price}} Rs\n        </div>\n      </div>\n      <!-- Product Description -->\n      <div class=\"product-description\">\n        <h1>{{listing.bookname}}</h1><br>\n      </div>\n\n      <!-- Product Configuration -->\n      <div class=\"product-configuration\">\n\n        <!-- Product Color -->\n        <div class=\"product-color\">\n            <span>By</span> <h3 style=\"color: black\">{{listing.authorname}}</h3>\n        </div>\n\n        <!-- Size Configuration -->\n        <div class=\"size-config\">\n            <span>Seller</span> <h3 style=\"color: black\">{{listing.sellerName}}</h3>\n            <span>Condition</span> <h3 style=\"color: black\">{{listing.condition}}</h3>\n        </div>  \n      </div>\n\n      \n      <!-- Product Pricing -->\n      <div class=\"buttons\">\n        <button (click)=\"addToWishlist()\">Add to Wishlist &nbsp; <i class=\"far fa-hand-point-right fa-2x\"></i></button>\n      </div>\n    </div>\n  </div>\n</main>\n\n\n<div class=\"compose\">\n  <a style=\"color: black\">\n    <i class=\"fas fa-envelope fa-3x\" style=\"color: black\"></i>\n    <br>Contact Seller</a>\n</div>\n<div id=\"modal\">\n  <div class=\"modal_content\">\n    <form  [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit(message.value)\">\n      <textarea placeholder=\"Type your message here...\"  #message  required  formControlName=\"message\" style=\"color: black;\"></textarea>\n      <input class=\"btn\" type=\"submit\" value=\"Send Message\" [disabled]=\"!myForm.valid || message.value==' '\"/>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/bookdetail/bookdetail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/bookdetail/bookdetail.component.ts ***!
  \****************************************************/
/*! exports provided: BookdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookdetailComponent", function() { return BookdetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listing.service */ "./src/app/listing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _wishlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../wishlist.service */ "./src/app/wishlist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookdetailComponent = /** @class */ (function () {
    function BookdetailComponent(listingservice, router, messageService, wishlistservice) {
        this.listingservice = listingservice;
        this.router = router;
        this.messageService = messageService;
        this.wishlistservice = wishlistservice;
        this.listing = {};
    }
    BookdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.paramMap.subscribe(function (params) {
            _this.listingservice.singleBookDetail(+(params.get('id')))
                .subscribe(function (data) {
                _this.listing = JSON.parse(data["_body"]);
                console.log(_this.listing);
            });
        });
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    };
    BookdetailComponent.prototype.onSubmit = function (message) {
        this.messageService.sendMessage(this.listing["sellerName"], message)
            .subscribe(function (data) {
            alert("Message Sent SuccessFully");
        }, function (error) {
            alert("message Cant Be sent");
        });
        this.myForm.reset();
    };
    BookdetailComponent.prototype.addToWishlist = function () {
        this.wishlistservice.addItem(this.listing)
            .subscribe(function (data) {
            alert("Added To Your Wishlist successfully");
        }, function (error) {
            alert("cannot be added to your wishlist");
        });
    };
    BookdetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bookdetail',
            template: __webpack_require__(/*! ./bookdetail.component.html */ "./src/app/bookdetail/bookdetail.component.html"),
            styles: [__webpack_require__(/*! ./bookdetail.component.css */ "./src/app/bookdetail/bookdetail.component.css")]
        }),
        __metadata("design:paramtypes", [_listing_service__WEBPACK_IMPORTED_MODULE_2__["ListingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _wishlist_service__WEBPACK_IMPORTED_MODULE_5__["WishlistService"]])
    ], BookdetailComponent);
    return BookdetailComponent;
}());



/***/ }),

/***/ "./src/app/displaylisting/displaylisting.component.css":
/*!*************************************************************!*\
  !*** ./src/app/displaylisting/displaylisting.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"utf-8\";\n/* RESET */\n*, :before, :after {\n    box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6, p, dt, dd, th, td, li, a {\n    line-height: 1;\n    font-weight: normal;\n}\nbody, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, table, tr, thead, tbody, th, td, ul, li, a {\n    margin: 0;\n    padding: 0;\n}\np {\n    line-height: 1.5;\n}\nul {\n  list-style: none;\n}\na, a:hover, a:focus, a:visited {\n    display: inline-block;\n    text-decoration: none;\n}\na {\n    color: inherit;\n    font-size: inherit;\n    font-weight: inherit;\n    line-height: inherit;\n}\nspan, label {\n    display: inline-block;\n}\ninput, textarea, select, button {\n    font-size: 1em;\n    border: 1px solid #ccc;\n    outline: none;\n    padding: 0.5em 1em;\n    vertical-align: top;\n}\nselect {\n    padding: calc(0.5em - 1px) 1em;\n}\ninput[type=\"submit\"], button {\n    cursor: pointer;\n}\ninput[type=\"file\"] {\n    max-width: 13.2em;\n    border: none;\n    padding: 0;\n}\nimg {\n    display: inline-block; \n    max-width: 100%;\n}\nbody {\n    font-family: Arial, sans-serif;\n}\n/* COLOR */\n.bg-fff {\n    background-color: #fff;\n}\n.bg-000 {\n    background-color: #000;\n}\n.text-fff {\n    color: #fff;\n}\n.text-center {\n    text-align: center !important;\n}\n.text-left {\n    text-align: left !important;\n}\n.text-right {\n    text-align: right !important;\n}\n.text-bold {\n    font-weight: bold;\n}\n.text-uppercase {\n    text-transform: uppercase;\n}\nstrike {\n    text-decoration: line-through;\n    color: #ccc;\n}\n/* GRID */\n.row:before, .row:after {\n    content: \"\";\n    display: table;\n}\n.row:after {\n    clear: both;\n}\n[class~=\"column\"] {\n    float: left;\n    width: 100%;\n    overflow: hidden;\n}\n.wrap {\n    max-width: 1200px;\n    margin: 0 auto;\n}\n@media (max-width: 1200px) {\n    .wrap {\n        max-width: 100%;\n        padding: 0 15px;\n    }\n}\n/* eXtra small Grid */\n@media (min-width: 481px) {\n    .column.x-1 {\n        width: 8.33%;\n    }\n    .column.x-2 {\n        width: 16.66%;\n    }\n    .column.x-3 {\n        width: 25%;\n    }\n    .column.x-4 {\n        width: 33.33%;\n    }\n    .column.x-5 {\n        width: 41.66%;\n    }\n    .column.x-6 {\n        width: 50%;\n    }\n    .column.x-7 {\n        width: 58.33%;\n    }\n    .column.x-8 {\n        width: 66.66%;\n    }\n    .column.x-9 {\n        width: 75%;\n    }\n    .column.x-10 {\n        width: 83.33%;\n    }\n    .column.x-11 {\n        width: 91.66%;\n    }\n    .column.x-12 {\n        width: 100%;\n    }\n    .list-x-1>[class~=\"column\"] {\n        width: 100%;\n    }\n    .list-x-2>[class~=\"column\"] {\n        width: 50%;\n    }\n    .list-x-3>[class~=\"column\"] {\n        width: 33.33%;\n    }\n    .list-x-4>[class~=\"column\"] {\n        width: 25%;\n    }\n    .list-x-5>[class~=\"column\"] {\n        width: 20%;\n    }\n    .list-x-6>[class~=\"column\"] {\n         width: 16.66%;\n    }\n    .list-x-7>[class~=\"column\"] {\n        width: 14.2857%;\n    }\n    .list-x-8>[class~=\"column\"] {\n        width: 12.5%;\n    }\n    .list-x-9>[class~=\"column\"] {\n        width: 11.11%;\n    }\n    .list-x-10>[class~=\"column\"] {\n        width: 10%;\n    }\n    .list-x-11>[class~=\"column\"] {\n        width: 9.091%;\n    }\n    .list-x-12>[class~=\"column\"] {\n        width: 8.33%;\n    }\n}\n/* Small Grid */\n@media (min-width: 769px) {\n    .column.s-1 {\n      width: 8.33%;\n    }\n    .column.s-2 {\n      width: 16.66%;\n    }\n    .column.s-3 {\n      width: 25%;\n    }\n    .column.s-4 {\n      width: 33.33%;\n    }\n    .column.s-5 {\n      width: 41.66%;\n    }\n    .column.s-6 {\n      width: 50%;\n    }\n    .column.s-7 {\n      width: 58.33%;\n    }\n    .column.s-8 {\n      width: 66.66%;\n    }\n    .column.s-9 {\n      width: 75%;\n    }\n    .column.s-10 {\n      width: 83.33%;\n    }\n    .column.s-11 {\n      width: 91.66%;\n    }\n    .column.s-12 {\n      width: 100%;\n    }\n    .list-s-1>[class~=\"column\"] {\n      width: 100%;\n    }\n    .list-s-2>[class~=\"column\"] {\n      width: 50%;\n    }\n    .list-s-3>[class~=\"column\"] {\n      width: 33.33%;\n    }\n    .list-s-4>[class~=\"column\"] {\n      width: 25%;\n    }\n    .list-s-5>[class~=\"column\"] {\n      width: 20%;\n    }\n    .list-s-6>[class~=\"column\"] {\n      width: 16.66%;\n    }\n    .list-s-7>[class~=\"column\"] {\n      width: 14.2857%;\n    }\n    .list-s-8>[class~=\"column\"] {\n      width: 12.5%;\n    }\n    .list-s-9>[class~=\"column\"] {\n      width: 11.11%;\n    }\n    .list-s-10>[class~=\"column\"] {\n      width: 10%;\n    }\n    .list-s-11>[class~=\"column\"] {\n      width: 9.091%;\n    }\n    .list-s-12>[class~=\"column\"] {\n      width: 8.33%;\n    }\n}\n/* Medium Grid */\n@media (min-width: 993px) {\n    .column.m-1 {\n      width: 8.33%;\n    }\n    .column.m-2 {\n      width: 16.66%;\n    }\n    .column.m-3 {\n      width: 25%;\n    }\n    .column.m-4 {\n      width: 33.33%;\n    }\n    .column.m-5 {\n      width: 41.66%;\n    }\n    .column.m-6 {\n      width: 50%;\n    }\n    .column.m-7 {\n      width: 58.33%;\n    }\n    .column.m-8 {\n      width: 66.66%;\n    }\n    .column.m-9 {\n      width: 75%;\n    }\n    .column.m-10 {\n      width: 83.33%;\n    }\n    .column.m-11 {\n      width: 91.66%;\n    }\n    .column.m-12 {\n      width: 100%;\n    }\n    .list-m-1>[class~=\"column\"] {\n      width: 100%;\n    }\n    .list-m-2>[class~=\"column\"] {\n      width: 50%;\n    }\n    .list-m-3>[class~=\"column\"] {\n      width: 33.33%;\n    }\n    .list-m-4>[class~=\"column\"] {\n      width: 25%;\n    }\n    .list-m-5>[class~=\"column\"] {\n      width: 20%;\n    }\n    .list-m-6>[class~=\"column\"] {\n      width: 16.66%;\n    }\n    .list-m-7>[class~=\"column\"] {\n      width: 14.2857%;\n    }\n    .list-m-8>[class~=\"column\"] {\n      width: 12.5%;\n    }\n    .list-m-9>[class~=\"column\"] {\n      width: 11.11%;\n    }\n    .list-m-10>[class~=\"column\"] {\n      width: 10%;\n    }\n    .list-m-11>[class~=\"column\"] {\n      width: 9.091%;\n    }\n    .list-m-12>[class~=\"column\"] {\n      width: 8.33%;\n    }\n}\n/* Large Grid */\n@media (min-width: 1201px) {\n    .column.l-1 {\n      width: 8.33%;\n    }\n    .column.l-2 {\n      width: 16.66%;\n    }\n    .column.l-3 {\n      width: 25%;\n    }\n    .column.l-4 {\n      width: 33.33%;\n    }\n    .column.l-5 {\n      width: 41.66%;\n    }\n    .column.l-6 {\n      width: 50%;\n    }\n    .column.l-7 {\n      width: 58.33%;\n    }\n    .column.l-8 {\n      width: 66.66%;\n    }\n    .column.l-9 {\n      width: 75%;\n    }\n    .column.l-10 {\n      width: 83.33%;\n    }\n    .column.l-11 {\n      width: 91.66%;\n    }\n    .column.l-12 {\n      width: 100%;\n    }\n    .list-l-1>[class~=\"column\"] {\n      width: 100%;\n    }\n    .list-l-2>[class~=\"column\"] {\n      width: 50%;\n    }\n    .list-l-3>[class~=\"column\"] {\n      width: 33.33%;\n    }\n    .list-l-4>[class~=\"column\"] {\n      width: 25%;\n    }\n    .list-l-5>[class~=\"column\"] {\n      width: 20%;\n    }\n    .list-l-6>[class~=\"column\"] {\n      width: 16.66%;\n    }\n    .list-l-7>[class~=\"column\"] {\n      width: 14.2857%;\n    }\n    .list-l-8>[class~=\"column\"] {\n      width: 12.5%;\n    }\n    .list-l-9>[class~=\"column\"] {\n      width: 11.11%;\n    }\n    .list-l-10>[class~=\"column\"] {\n      width: 10%;\n    }\n    .list-l-11>[class~=\"column\"] {\n      width: 9.091%;\n    }\n    .list-l-12>[class~=\"column\"] {\n      width: 8.33%;\n    }\n}\n/* CLASSES */\n.fl {\n    float: left;\n}\n.fr {\n    float: right;\n}\n@media (min-width: 481px) {\n    .fl-x {\n        float: left;\n    }\n    .fr-x {\n        float: right;\n    }\n}\n@media (min-width: 769px) {\n    .fl-s {\n        float: left;\n    }\n    .fr-s {\n        float: right;\n    }\n}\n@media (min-width: 993px) {\n    .fl-m {\n        float: left;\n    }\n    .fr-m {\n        float: right;\n    }\n}\n@media (min-width: 1201px) {\n    .fl-l {\n      float: left;\n    }\n    .fr-l {\n      float: right;\n    }\n}\n/* LIST */\n.nav>li {\n    float: left;\n}\n.nav>li>a {\n    display: block;\n}\n.list-inline>li {\n    display: inline-block;\n    vertical-align: top;\n}\n.list-flex {\n    display: flex;\n    -webkit-display: flex;\n    justify-content: space-between;\n    -webkit-justify-content: space-between;\n    align-items: flex-start;\n    -webkit-align-items: flex-start;\n    flex-wrap: wrap;\n    -webkit-flex-wrap: wrap;\n}\n/* CARD */\n.oh {\n    position: relative;\n    overflow: hidden;\n}\n.center {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n.m0a {\n    margin: 0 auto;\n}\n.hide {\n    display: none !important;\n}\n.disable {\n    pointer-events: none;\n}\nstrike {\n    text-decoration: line-through;\n}\nbody {\n    font-family: 'SFU Futura', Arial, sans-serif;\n    font-size: 14px;\n    color: #2a3f54;\n    background: #f7f7f7;\n}\n.bg-1 {\n    background: #557daa;\n}\n.text-1 {\n    color: #557daa;\n}\n/* ADMIN PAGE */\n/* FORM & INPUT */\nspan {\n    display: inline-block;\n}\nlabel {\n    display: inline-block;\n    cursor: pointer;\n}\n.checkbox {\n    font-size: 20px;\n    display: inline-block;\n    position: relative;\n    width: 1em;\n    height: 1em;\n    background: #557daa;\n    vertical-align: middle;\n}\n.checkbox:before {\n    content: \"\";\n    display: block;\n    width: 1em;\n    height: 1em;\n    background: #fff;\n    border: 1px solid #557daa;\n    border-radius: 2px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    cursor: pointer;\n}\n.checkbox:after {\n    content: \"\";\n    width: 0.7em;\n    height: 0.5em;\n    position: absolute;\n    top: 0.14em;\n    left: 0.16em;\n    border-left: 0.15em solid #fff;\n    border-bottom: 0.15em solid #fff;\n    background-position: top left, bottom left;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    display: none;\n    cursor: pointer;\n}\n.checkbox:checked:before {\n    background: #557daa;\n}\n.checkbox:checked:after {\n    display: block;\n}\n/* SWITCH BUTTON */\n.btnSwitch {\n    font-size: 16px;\n    width: 5em;\n    height: 0.5em;\n    cursor: pointer;\n    position: relative;\n}\n.btnSwitch:before {\n    content: \"\";\n    display: block;\n    line-height: 2.1em;\n    width: 100%;\n    height: 100%;\n    background: #dedede;\n    transition: background 0.2s;\n}\n.btnSwitch:after {\n    content: \"OFF\";\n    display: block;\n    width: 3em;\n    height: 3em;\n    border: 1px solid #dedede;\n    background: #fff;\n    position: absolute;\n    left: 0;\n    top: 50%;\n    -webkit-transform: translate(0,-50%);\n            transform: translate(0,-50%);\n    text-align: center;\n    line-height: 3em;\n    color: #777;\n    transition: left 0.2s;\n}\n.btnSwitch:checked:before {\n    background: #557daa;\n}\n.btnSwitch:checked:after {\n    content: \"ON\";\n    background: #557daa;\n    color: #fff;\n    border: none;\n    left: calc(100% - 2em);\n}\n/* PAGINATION */\n.pagination a {\n    width: 2em;\n    height: 2em;\n    text-align: center;\n    line-height: 2em;\n    border: 1px solid #ccc;\n    color: #ccc;\n    background: #fff;\n}\n.pagination a:hover {\n    border-color: #557daa;\n    color: #557daa;\n}\n.pagination li {\n    margin: 0 2px;\n}\n.pagination li.is-active a {\n    background: #557daa;\n    color: #fff;\n    border: none;\n    pointer-events: none;\n}\n/*CONTENTS CSS */\n.container {\n    display: flex;\n    display: -webkit-flex;\n    padding-left: 200px;\n    transition: 0.5s;\n}\n.container.is-click {\n    padding-left: 0;\n}\n.avatar {\n    margin: 50px 1em;\n    position: relative;\n    display: table;\n}\n.avatar img {\n    display: table-cell;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    background: #fff;\n    border: 2px solid #fff;\n    overflow: hidden;\n}\n.avatarName {\n    display: table-cell;\n    vertical-align: middle;\n    padding-left: 1em;\n    color: #fff;\n    line-height: 1.5;\n}\n/* SIDE CSS */\n.sideArea {\n    width: 200px;\n    min-width: 200px;\n    background: #2A3F54;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    transition: 0.5s;\n}\n.container.is-click .sideArea {\n    left: -200px;\n}\n.sideArea li>a {\n    display: block;\n    color: #fff;\n    padding: 1em;\n    border-bottom: 1px solid rgba(255,255,255,0.2);\n}\n.sideArea li>a:hover {\n    background: rgba(255,255,255,0.1);\n}\n.sideArea li>a>.fa {\n    width: 1em;\n    text-align: center;\n    margin-right: 10px;\n}\n.submenu {\n    display: none;\n    border-bottom: 1px solid rgba(255,255,255,0.2);\n}\n.submenu li>a {\n    padding-left: 2em;\n    border-bottom: none;\n}\n.sideMenu {\n    border-top: 1px solid rgba(255,255,255,0.2);\n}\n/* MAIN CSS */\n.mainArea {\n    width: 100%;\n    overflow: hidden;\n}\n.navTop {\n    background: #ededed;\n    border-bottom: 1px solid #dedede;\n    padding: 0 1em;\n}\n.menuIcon {\n    font-size: 1.5em;\n    padding: 0.4em;\n    cursor: pointer;\n}\n.account {\n    position: relative;\n    padding: 0 1em;\n}\n.name{\n    color: #2A3F54;\n    padding: 1em 0;\n    cursor: pointer;\n}\n.name>span {\n    margin-left: 10px;\n}\n.accountLinks {\n    width: calc(200px - 2em);\n    position: absolute;\n    top: 100%;\n    right: 0;\n    background: #fff;\n    border: 1px solid #dedede;\n    z-index: 999;\n}\n.accountLinks li {\n    border: none !important;\n}\n.accountLinks li a {\n    display: block;\n    color: #2A3F54;\n    padding: 0.7em 1em;\n}\n.account:hover, .accountLinks li a:hover {\n    background: rgba(42,63,84,0.1);\n}\n.mainContent {\n    padding: 20px;\n}\n@media (max-width: 768px){\n    .container {\n        padding-left: 0; \n    }\n    .container .sideArea {\n        left: -200px;\n    }\n    .container.is-click {\n        padding-left: 200px;\n    }\n    .container.is-click .sideArea {\n        left: 0;\n    }\n}\n/* ADMIN FORM */\n.form {\n    background: #fff;\n    border: 1px solid #dedede;\n}\n.formHeader {\n    padding: 1em;\n    background: #fff;\n    border-bottom: 1px solid #dedede;\n}\n.formBody {\n    width: 100%;\n    padding: 20px 20px 10px 20px;\n}\n/* LIST FORM */\n.btnAdd, .btnSave, .btnEdit, .btnRemove {\n    padding: 0.5em;\n    margin: 0 2px;\n}\n.btnSave {\n    border: none;\n    outline: none;\n    cursor: pointer;\n    font-size: 0.95em;\n}\n.btnSwitch {\n    font-size: 10px;\n}\n.btnSwitch.all {\n    position: absolute;\n    bottom: calc(100% + 3.7em);\n    left: calc(50% - 4em);\n}\n.scrollX {\n    width: 100%;\n    overflow-x: scroll;\n}\n/* TABLE */\n.table {\n    width: 100%;\n    min-width: 768px;\n}\n.table .row {\n    width: 100%;\n}\n.table .row .cell {\n    display: table-cell;\n    padding: 10px;\n    vertical-align: middle;\n}\n.table>ul>li {\n    border-bottom: 1px solid #dedede;\n}\n.table .cell-50 {\n    max-width: 50px;\n    min-width: 50px;\n}\n.table .cell-100 {\n    max-width: 100px;\n    min-width: 100px;\n}\n.table .cell-150 {\n    max-width: 150px;\n    min-width: 150px;\n}\n.table .cell-200 {\n    max-width: 200px;\n    min-width: 200px;\n}\n.table .cell-100p {\n    width: 100%;\n}\n/* DETAIL FORM */\n.inputGroup {\n    display: block;\n    margin-bottom: 10px;\n}\n.inputGroup>span:first-child {\n    width: 100px;\n    padding-bottom: 10px;\n    text-align: right;\n    padding-right: 10px;\n    vertical-align: top;\n}\n.inputGroup>span {\n    display: table-cell;\n}\n.inputGroup input, .inputGroup select {\n    margin-bottom: 10px;\n}\n.form textarea {\n    width: 100%;\n    min-height: 20em;\n}\n#pagination {\n    margin-top: 20px;\n}\n.btnNewInput {\n    padding: 0.6em;\n}\n.inputNumber {\n    max-width: 3em;\n    padding: 0.5em 0;\n    text-align: center;\n}\n/* SUB LIST */\n.sublist {\n    width: 100%;\n    display: none;\n}\n.row.is-active>.sublist {\n    display: block;\n}\n.btnCaret {\n    font-size: 20px;\n    width: 1em;\n    height: 1em;\n    cursor: pointer;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    transition: 0.2s;\n}\n.row.is-active>div>.btnCaret {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n.sublist>li:nth-child(2n+1) {\n    background: rgba(42,63,84,0.05);\n}\n/* FILTER */\n.filterGroup {\n    margin-bottom: 20px;\n}\n/* SEARCH */\n.formSearch {\n    position: relative;\n}\n.inputSearch {\n    padding-right: 3em;\n}\n.btnSearch {\n    padding: 0.5em 1em;\n    position: absolute;\n    top: 0;\n    right: 0;\n    background: transparent;\n    border: none;\n}\n/* SORT */\n.boxSelect {\n    min-width: 12em;\n    background: #fff;\n    position: relative;\n}\n.titleSelect {\n    background-repeat: no-repeat;\n    background-image: linear-gradient(#000,#000);\n    background-size: 0 1px;\n    background-position: bottom left;\n    transition: background-size 0.5s;\n    padding: 0.4em 1em;\n    border: 1px solid #ccc;\n    cursor: pointer;\n}\n.titleSelect.is-active {\n    background-size: 100% 1px;\n}\n.optionSelect {\n    width: 100%;\n    position: absolute;\n    background: rgba(255,255,255,0.95);\n    border: 1px solid #ccc;\n    border-top: none;\n    z-index: 100;\n    visibility: hidden;\n    overflow: hidden;\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    transition: 0.2s;\n}\n.titleSelect.is-active+.optionSelect {\n  visibility: visible;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n.optionSelect li a {\n    width: 100%;\n    padding: 0.5em 1em;\n    cursor: pointer;\n}\n.optionSelect li a:hover {\n    background: rgba(42,63,84,0.1);\n}\n/* FILTER */\n.btnFilter {\n    padding: 0.4em 1em;\n    border: 1px solid #ccc;\n    margin-right: 10px;\n    cursor: pointer;\n}\n.boxFilter .btnFilter {\n    padding: 0;\n    margin: 0;\n    border: none;\n}\n.btnFilter>.fa {\n    margin-right: 0.5em;\n}\n.boxFilter {\n    width: 200px;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: -200px;\n    background: #fff;\n    padding: 20px;\n    border-left: 1px solid #ccc;\n    z-index: 800;\n    transition: right 0.5s;\n}\n.boxFilter.is-active {\n    right: 0;\n}\n.boxFilter .groupInput {\n    padding-top: 20px;\n    margin-top: 20px;\n    border-top: 1px solid #ccc;\n}\n.boxFilter select {\n    margin-bottom: 20px;\n}\n.boxFilter select {\n    width: 100%;\n}\n.boxFilter .btnClose {\n    margin-bottom: 20px;\n    cursor: pointer;\n}\n.boxFilter .btnClose>.fa {\n    margin-right: 1em;\n}\n/* FILTER PRICE */\n#filterPrice {\n    width: 100%;\n    height: 5px;\n    margin: 1em 0;\n}\n.areaValue {\n    margin-top: 2em;\n}\n.rangeValue {\n    display: block;\n    width: 100%;\n    height: 2em;\n    text-align: center;\n}\n#filterPrice .rangeValue:nth-child(1) {\n    left: 0;\n}\n#filterPrice .rangeValue:nth-child(2) {\n    right: 0;\n}\n.noUi-base {\n    background: #ccc;\n}\n.noUi-connect {\n    background: #2a3f54;\n}\n.noUi-handle {\n    outline: none;\n    top: -0.75em !important;\n    width: 1.5em !important;\n    height: 1.5em !important;\n    border-radius: 0;\n}\n.noUi-handle.noUi-handle-lower {\n    left: -1px;\n}\n.noUi-handle.noUi-handle-upper {\n    left: -20px;\n}\n.noUi-handle:before, .noUi-handle:after {\n    display: none;\n}\n/* @import url(https://fonts.googleapis.com/css?family=Satisfy);\n@import url(https://fonts.googleapis.com/css?family=Acme); */\n#view_book{\n    background-color: #06D6A0;\n    border-radius: 50px;\n}\n#view_book:hover{\n    background-color: #fff;\n    color: #06D6A0;\n    font-weight: bold;\n}\n.box-wrapper {\n  background-color: #fff;\n  overflow: hidden;\n  max-width: 320px;\n  box-shadow: 0px 5px 43px rgba(0, 0, 0, 0.48);\n  padding: 0;\n  text-align: center;\n  margin-left: 10%;\n}\n.box-wrapper img {\n  max-width: 100%;\n}\n.box-wrapper .success {\n  position: absolute;\n  top: 50%;\n  left: 37%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  opacity: 0;\n  z-index: 999;\n}\n.expanded .box-wrapper .success {\n  opacity: 1;\n  transition: opacity 0.3s 0.6s;\n}\n.box-wrapper .success:before, .box-wrapper .success:after {\n  content: '';\n  display: block;\n  position: absolute;\n  background-color: #fff;\n}\n.box-wrapper .success:before {\n  width: 40px;\n  height: 20px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.box-wrapper .success:after {\n  width: 88px;\n  height: 20px;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  top: -16px;\n  left: 8px;\n}\n.title {\n  font-size: 2em;\n  font-weight: 900;\n  text-transform: uppercase;\n  margin: 0;\n  font-family: 'Acme', sans-serif;\n}\n.desc {\n  font-family: 'Satisfy', cursive;\n  font-size: 1.2em;\n}\n.box-content {\n  position: relative;\n  z-index: 1;\n}\n.box-content:before {\n  content: '';\n  width: 200%;\n  height: 100px;\n  position: absolute;\n  display: block;\n  background-color: #fff;\n  -webkit-transform: rotate(-8deg);\n          transform: rotate(-8deg);\n  top: -50px;\n  left: -10%;\n  z-index: -1;\n}\n.box-content .buy {\n  display: block;\n  top: -80px;\n  right: 30px;\n  z-index: 2;\n  width: 70px;\n  height: 70px;\n  position: absolute;\n}\n.box-content .buy span {\n  width: 70px;\n  height: 70px;\n  background-color: #06D6A0;\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  font-size: 36px;\n  color: #fff;\n  transition: all 0.3s ease;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n}\n.box-content .buy span i {\n  padding: 15px;\n}\n.expanded .box-content .buy span {\n  width: 750px;\n  height: 750px;\n}\n.expanded .box-content .buy span i {\n  display: none;\n}\n.box-content .price {\n  font-size: 2em;\n  font-weight: 900;\n  display: block;\n  width: 100px;\n  margin: 20px auto 0;\n  position: relative;\n  font-family: 'Satisfy', cursive;\n}\n.box-content .price:after, .box-content .price:before {\n  content: '';\n  height: 1px;\n  width: 50px;\n  display: block;\n  position: absolute;\n  background-color: #ddd;\n  top: 18px;\n}\n.box-content .price:before {\n  left: -50px;\n}\n.box-content .price:after {\n  right: -50px;\n}\n.box-content .footer ul {\n  list-style: none;\n  padding: 0;\n  margin: 1em 0;\n}\n.box-content .footer ul li {\n  color: #EFD829;\n}\n"

/***/ }),

/***/ "./src/app/displaylisting/displaylisting.component.html":
/*!**************************************************************!*\
  !*** ./src/app/displaylisting/displaylisting.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- CONTAINER  -->\n<div class=\"mainContent\">\n  <!-- LIST FORM -->\n  <div class=\"row filterGroup\">\n    <form  class=\"formSearch fl\">\n      <input type=\"text\" class=\"inputSearch\" placeholder=\"Search\" #query>\n      <button type=\"submit\" class=\"btnSearch\" (click)=\"search(query.value)\">\n        <i class=\"fa fa-search\"></i>\n      </button>\n    </form>\n    <div class=\"areaFilter fr row\">\n      <div class=\"boxSelect fr\">\n        <ul class=\"optionSelect\">\n          <li sortIndex=\"0\">\n            <a (click)=\"sortbyprice()\">Price</a>\n          </li>\n          <li sortIndex=\"1\">\n            <a (click)=\"sortByCondition()\">Condition</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"boxFilter\">\n        <div class=\"btnFilter\"><span class=\"fa fa-close\"></span>Close</div>\n  <!--             GROUP -->\n        <div class=\"row\">\n            <p><b>By Condition</b></p><br>\n            <select name=\"Condition\" #condition>\n                <option value=\"New\">New</option>\n                <option value=\"Almost new\">Almost new</option>\n                <option value=\"Slight damge\">Slight damage</option>\n                <option value=\"Worn\">Worn</option>\n            </select> \n            <button (click)=\"filterByCondition(condition.value)\">Filter</button><br><br>\n            <p class=\"titleInput\"><b>By Price</b></p> \n            <div class=\"areaValue\">\n                <p>From</p>\n                <input type=\"text\" class=\"rangeValue\" #from>\n                <p>To</p>\n                <input type=\"text\" class=\"rangeValue\" #to><br>\n            </div>\n            <button (click)=\"filterByPrice(from.value,to.value)\">Filter</button>\n        </div>\n  </div>            \n\n  <!-- CATE LIST    -->\n  <form action=\"\" method=\"GET\" name=\"listForm\" class=\"form scrollX\">\n    <div class=\"formHeader row\" style=\"display: flex; justify-content: space-between\">\n      <div style=\"display: flex;\">\n      <p style=\"margin: auto;\"><b>Filter By Condition</b></p>&nbsp;&nbsp;\n      <select name=\"Condition\" #condition style=\"background: transparent;margin-top: 5px;\">\n          <option value=\"New\">New</option>\n          <option value=\"Almost new\">Almost new</option>\n          <option value=\"Slight damge\">Slight damage</option>\n          <option value=\"Worn\">Worn</option>\n      </select>&nbsp;\n      <button (click)=\"filterByCondition(condition.value)\" style=\"background-color:#2a3f54;color:white;border-radius: 10px;\">Filter</button><br><br>\n      </div>\n      <div>\n      \n      <div class=\"areaValue\" style=\"display: flex;margin: 0px;\">\n          <p style=\"margin: auto;\"><b>By Price</b></p>&nbsp;&nbsp;\n          <p>From</p>&nbsp;\n          <input type=\"number\" class=\"rangeValue\" #from>&nbsp;\n          <p>To</p>&nbsp;\n          <input type=\"number\" class=\"rangeValue\" #to>&nbsp;\n          <button (click)=\"filterByPrice(from.value,to.value)\"  style=\"background-color:#2a3f54;color:white;border-radius: 10px;\">Filter</button>\n      </div>\n    \n      </div>\n    </div>\n  </form>\n\n  <!-- listing card -->\n  <div class=\"row\" style=\"background-color: #eaebee;\">\n    <div class=\"box-wrapper column\" *ngFor=\"let listing of listings\" style=\"margin-top: 5%;\">\n      <img src=\"https://ankitbookstore.herokuapp.com/{{listing.image}}\" alt=\"rhcp\" height=\"200px\" width=\"100%\" />\n      <div class=\"box-content\">\n        <a class=\"buy\" href=\"javascript:void(0)\">\n          <span>\n            <i class=\"fa fa-cart-plus\" (click)=\"addToWishlist(listing)\"></i>\n          </span>\n        </a>\n        <div class=\"title\">{{listing.bookname}}</div>\n        <div class=\"desc\"><b><span>By : </span></b>{{listing.authorname}}</div>\n        <span class=\"price\">{{listing.price}}Rs</span>\n        <div class=\"footer\">\n          <ul>\n            <button id=\"view_book\" (click)=\"bookdetail(listing.id)\"><i class=\"fas fa-eye\"></i>View Book</button>\n          </ul>\n        </div>\n      </div>\n      <div class=\"success\"></div>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/displaylisting/displaylisting.component.ts":
/*!************************************************************!*\
  !*** ./src/app/displaylisting/displaylisting.component.ts ***!
  \************************************************************/
/*! exports provided: DisplaylistingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplaylistingComponent", function() { return DisplaylistingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listing.service */ "./src/app/listing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wishlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wishlist.service */ "./src/app/wishlist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisplaylistingComponent = /** @class */ (function () {
    function DisplaylistingComponent(listingservice, router, route, wishlistservice) {
        this.listingservice = listingservice;
        this.router = router;
        this.route = route;
        this.wishlistservice = wishlistservice;
        this.priority = { "New": 3, "Almost new": 2, "Slight damage": 1, "Worn": 0 };
        this.listings = [];
    }
    DisplaylistingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listingservice.getlisting()
            .subscribe(function (data) {
            console.log(data["_body"]);
            _this.listings = JSON.parse(data["_body"]);
            console.log(_this.listings);
        });
    };
    DisplaylistingComponent.prototype.sortbyprice = function () {
        console.log("in sort");
        this.listings.sort(function (x, y) {
            return Number(x.price) - Number(y.price);
        });
        console.log(this.listings);
    };
    DisplaylistingComponent.prototype.sortByCondition = function () {
        //console.log(this.priority["New"]);
        for (var i = 0; i < this.listings.length; i++) {
            for (var j = i + 1; j < this.listings.length; j++) {
                if (this.priority[this.listings[i].condition] < this.priority[this.listings[j].condition]) {
                    var temp = this.listings[j];
                    this.listings[j] = this.listings[i];
                    this.listings[i] = temp;
                }
                // console.log(this.priority[this.listings[j + 1].condition]);
            }
        }
        console.log(this.listings);
    };
    DisplaylistingComponent.prototype.filterByCondition = function (condition) {
        var _this = this;
        this.listingservice.filterByCondition(condition)
            .subscribe(function (data) {
            if (JSON.parse(data["_body"]) < 1) {
                alert("No item found ");
            }
            else {
                _this.listings = JSON.parse(data["_body"]);
            }
        });
    };
    DisplaylistingComponent.prototype.filterByPrice = function (from, to) {
        var _this = this;
        this.listingservice.filterByPrice(from, to)
            .subscribe(function (data) {
            if (JSON.parse(data["_body"]) < 1) {
                alert("No item found for this range");
            }
            else {
                _this.listings = JSON.parse(data["_body"]);
            }
        });
    };
    DisplaylistingComponent.prototype.search = function (query) {
        var _this = this;
        this.listingservice.search(query)
            .subscribe(function (data) {
            console.log(data);
            if (JSON.parse(data["_body"]) < 1) {
                alert("Not found");
            }
            else {
                _this.listings = JSON.parse(data["_body"]);
            }
        });
    };
    DisplaylistingComponent.prototype.bookdetail = function (id) {
        console.log(id);
        this.route.navigate(['listing', id]);
    };
    DisplaylistingComponent.prototype.addToWishlist = function (book) {
        this.wishlistservice.addItem(book)
            .subscribe(function (data) {
            alert("Added To Your Wishlist successfully");
        }, function (error) {
            alert("Cannot Be Addded To your wishlist");
        });
    };
    DisplaylistingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-displaylisting',
            template: __webpack_require__(/*! ./displaylisting.component.html */ "./src/app/displaylisting/displaylisting.component.html"),
            styles: [__webpack_require__(/*! ./displaylisting.component.css */ "./src/app/displaylisting/displaylisting.component.css")]
        }),
        __metadata("design:paramtypes", [_listing_service__WEBPACK_IMPORTED_MODULE_1__["ListingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _wishlist_service__WEBPACK_IMPORTED_MODULE_3__["WishlistService"]])
    ], DisplaylistingComponent);
    return DisplaylistingComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Cookie|Montserrat:400,700|Roboto+Slab|Vollkorn:400,400i');\n\nbody {\n  margin: 0;\n  font-size: 62.5%;\n  text-align: center;\n  min-width: 900px;\n}\n\nheader {\n  position: fixed;\n  width: 100%;\n  min-height: 100px;\n  background: linear-gradient(0deg, rgba(53,52,55,0.7), rgba(18,17,26,0.7));\n  z-index: 10;\n}\n\n.center-block {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  max-width: 940px;\n  min-width: 900px;\n}\n\n.logo {\n  position: absolute;\n  top: 27px;\n  left: 0.85%;\n  font-size: 3.6em;\n  font-family: cookie;\n  text-decoration: none;\n  color: #fed136;\n  letter-spacing: 0.04em;\n}\n\nheader ul {\n  position: absolute;\n  top: 32px;\n  right: 0.14%;\n}\n\nheader li {\n  display: inline-block;\n  list-style-type: none;\n}\n\nheader li a {\n  font-family: montserrat;\n  font-size: 1.4em;\n  text-decoration: none;\n  text-transform: uppercase;\n  color: white;\n  margin-left: 40px;\n  letter-spacing: -0.3px;\n}\n\nheader li a:hover {\n  color: #fed136;\n  transition: 0.5s;\n  cursor: pointer;\n}\n\n.home {\n  padding-top: 100px;\n  background: url('home.webp') no-repeat;\n  background-color: rgba(0, 0, 0, 0.5);\n  background-size: cover;\n  background-blend-mode: hue;\n}\n\n.home p {\n  padding-top: 125px;\n  margin-bottom: 0;\n  font-family: vollkorn;\n  font-size: 4.5em;\n  font-style: italic;\n  line-height: 1.2em;\n  color: white;\n  letter-spacing: 0.45px;\n}\n\nh1 {\n  margin: 0 0 40px;\n  padding-top: 0.25em;\n  font-family: montserrat;\n  font-size: 7.5em;\n  text-transform: uppercase;\n  color: white;\n  letter-spacing: -2.9px;\n}\n\n.button {\n  display: inline-block;\n  padding: 21px 49px;\n  margin-bottom: 161px;\n  font-family: montserrat;\n  text-decoration: none;\n  color: white;\n  font-size: 1.8em;\n  text-transform: uppercase;\n  font-weight: 700;\n  background-color: #fed136;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\n.button:hover {\n  background-color: #fec136;\n  transition: 0.5s;\n}\n\n.button:active {\n  background-color: #feb136;\n  transition: 0.2s;\n}\n\nh2 {\n  margin: 110px 0 0;\n  font-family: montserrat;\n  font-size: 4em;\n  text-transform: uppercase;\n  font-weight: 700;\n  letter-spacing: -2.4px;\n  color: #222222;\n}\n\n.title p {\n  margin-top: 4px;\n  font-family: vollkorn;\n  font-size: 2em;\n  font-style: italic;\n  color: #777777;\n}\n\n/* В этом блоке у меня не получилось нормально подгрузить иконки из спрайта. Я не понял, как разместить фон по центру относительно нужной иконки. Из-за этого высота иконок получилась разная и блоки поехали. Сделал отдельным фиайлами, спрайты оставил для соцсетей */\n\n.services .center-block {\n  text-align: justify;\n}\n\n.services .center-block:after{\n  content: \"\";\n  display: inline-block;\n  width: 100%;\n}\n\n.services-item {\n  display: inline-block;\n  width: 30%;\n  margin-top: 54px;\n  padding: 0 5px 90px;\n  vertical-align: top;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.icon-wrap {\n  display: inline-block;\n  padding: 13px;\n  width: 40px;\n  height: 40px;\n  border: #fed136 3px solid;\n  border-radius: 45px;\n}\n\nh3 {\n  font-family: montserrat;\n  font-size: 1.8em;\n  letter-spacing: -0.8px;\n  margin-bottom: 0;\n  color: #222222;\n}\n\n.services-item p {\n  margin-top: 10px;\n  font-family: roboto slab;\n  font-size: 1.4em;\n  color: #777777;\n  letter-spacing: -0.5px;\n  line-height: 1.5em;\n}\n\n.portfolio {\n  background-color: #f7f7f7;\n}\n\n/*Два селектора ниже делают сетку таким образом, чтобы между блоками было пустое пространство. Когда я сделал text-align:justify родительскому блоку, первый ряд выстроился с пространством, а второй прилип к левому краю. Я добавил псевдокласс after к родительскому блоку (так было в лекции) и все заработало. Почему оно заработало - я не понял */\n\n.portfolio .center-block {\n  text-align: justify;\n  padding-bottom: 113px;\n}\n\n.portfolio .center-block:after {\n  content: \"\";\n  display: inline-block;\n  width: 100%;\n}\n\n.title,\n.portfolio-item {\n  text-align: center;\n}\n\n.portfolio-item {\n  display: inline-block;\n  margin-top: 51px;\n  width: 31%;\n  overflow: hidden;\n  background-color: white;\n}\n\n.portfolio-item h3 {\n  color: #333333;\n  margin: 23px 0 0;\n}\n\n.portfolio-item p {\n  font-family: vollkorn;\n  font-size: 1.7em;\n  color: #737373;\n  font-style: italic;\n  margin-top: 0;\n}\n\n.about-item {\n  position: relative;\n  margin: 57px 0 68px 0;\n}\n\n.about ul {\n  list-style-type: none;\n  margin-bottom: 133px;\n}\n\n.about ul:before {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background: #f1f1f1;\n  top: 20%;\n  left: 50%;\n  bottom: 10%;\n}\n\n.about-item-text {\n  display: inline-block;\n  max-width: 32%;\n  padding: 0 40px 0 0;\n  text-align: right;\n  box-sizing: border-box;\n}\n\n.about li:nth-of-type(even) .about-item-text {\n  text-align: left;\n  padding: 0 0 0 35px;\n}\n\n.about h3 {\n  text-transform: uppercase;\n}\n\nh4 {\n  font-family: montserrat;\n  font-size: 1.8em;\n  font-weight: 700;\n  margin: 4px 0 10px 0;\n  letter-spacing: -1.1px;\n  color: #222222;\n}\n\n/* В <p> текст не получилось настроить так, чтобы переносы совпадали с макетом. В ширине блока доходил до милионных долей писелей, но текст так и не встал*/\n\n.about-item-text p {\n  display: inline;\n  font-family: roboto slab;\n  font-size: 1.4em;\n  color: #777777;\n  letter-spacing: -0.5px;\n  line-height: 1.6em;\n}\n\n/* Я долго пытался сделать прямоугольные картинки из макета вписанными в скругленные границы без изменения пропорций - но ничего не получилось. Использовал background */\n\n.about-item-img-first {\n  background: url(\"https://i.lensdump.com/i/8TSsqc.jpg\");\n}\n\n.about-item-img-second {\n  background: url(\"https://i.lensdump.com/i/8TS3YK.jpg\");\n}\n\n.about-item-img-third {\n  background: url(\"https://i.lensdump.com/i/8TSXBD.jpg\");\n}\n\n.about-item-img-first,\n.about-item-img-second,\n.about-item-img-third,\n.about-item-img-fourth {\n  position: relative;\n  display: inline-block;\n  width: 170px;\n  height: 170px;\n  border: 7px #f1f1f1 solid;\n  border-radius: 50%;\n  top: -2px;\n  background-position: bottom center;\n}\n\n.about li:nth-of-type(odd) .image {\n  margin-right: 37%;\n}\n\n.about li:nth-of-type(even) .image {\n  margin-left: 27.8%;\n}\n\n.about-item-img-fourth {\n  background: url(\"https://i.lensdump.com/i/8TScI0.jpg\");\n}\n\n.about li:last-child {\n  position: relative;\n  display: inline-block;\n  margin: 0 4.5% 0 0;\n  width: 170px;\n  height: 170px;\n  border: 7px #f1f1f1 solid;\n  border-radius: 50%;\n  background: #fed136;\n  top: 13px;\n}\n\n.about li:last-child h3 {\n  text-align: center;\n  padding: 19px 36px 0 32px;\n  color: white;\n  letter-spacing: -0.9px;\n  line-height: 1.45em;\n}\n\n.team {\n  background-color: #f7f7f7;\n}\n\n.team .title p {\n  margin-top: 10px;\n}\n\n.team-item {\n  display: inline-block;\n  width: 29.5%;\n  margin-top: 50px;\n}\n\n.team-item img {\n  max-width: 220px;\n  max-height: 220px;\n  border: 7px white solid;\n  border-radius: 50%;\n}\n\n.team-item p {\n  font-family: montserrat;\n  font-size: 1.6em;\n  font-weight: 700;\n  color: #222222;\n  letter-spacing: -0.6px;\n  margin-bottom: 0;\n}\n\n.team-item span,\n.team .center-block>p {\n  display: block;\n  font-family: roboto slab;\n  color: #777777;\n}\n\n.team-item>span {\n  margin: 2px 0 11px;\n  font-size: 1.4em;\n}\n\n.team .center-block>p {\n  font-size: 1.6em;\n  margin: 45px 150px 115px;\n  letter-spacing: -0.4px;\n  line-height: 1.5em;\n}\n\n.team-item a,\nfooter .socmedia-wrap a {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  border: 3px #222222 solid;\n  border-radius: 50%;\n  box-sizing: border-box;\n  margin: 0 4px 0;\n}\n\n.twitter:hover {\n  background-color: #00aced;\n  border-style: none;\n  transition: 0.5s;\n}\n\n.facebook:hover {\n  background-color: #3b5998;\n  border-style: none;\n  transition: 0.5s;\n}\n\n.pinterest:hover {\n  background-color: #cb2028;\n  border-style: none;\n  transition: 0.5s;\n}\n\n.google:hover {\n  background-color: #d95232;\n  border-style: none;\n  transition: 0.5s;\n}\n\na span {\n  display: block;\n  position: relative;\n  z-index: 1000;\n}\n\n/* Далее полный набор стилей спрайта */\n\n.facebook-still, .google-still, .pinterest-still, .twitter-still, .facebook-footer, .google-footer, .pinterest-footer, .twitter-footer {\n\tbackground: url(https://i.lensdump.com/i/8TSm01.png) no-repeat;\n}\n\n.facebook-still {\n\tbackground-position: -57px -10px;\n}\n\n.google-still {\n\tbackground-position: -107px -10px;\n}\n\n.pinterest-still {\n\tbackground-position: -160px -9px;\n}\n\n.twitter-still {\n\tbackground-position: -8px -11px;\n}\n\n.facebook-still:hover {\n\tbackground-position: -53px -51px ;\n  transition: 0.5s;\n}\n\n.google-still:hover {\n\tbackground-position: -104px -54px ;\n  transition: 0.5s;\n}\n\n.pinterest-still:hover {\n\tbackground-position: -156px -54px;\n  transition: 0.5s;\n}\n\n.twitter-still:hover {\n\tbackground-position: -5px -55px ;\n  transition: 0.5s;\n}\n\n/* Стили спрайта закончились */\n\n.logos-links {\n  margin: 60px 0 58px;\n  padding: 0 65px 0px 60px;\n}\n\n.logos a {\n  display: inline-block;\n  margin: 0 18px;  \n  vertical-align: middle;\n}\n\n.contacts {\n  padding-top: 0px;\n  background: url(https://i.lensdump.com/i/8TSn0v.png) no-repeat;\n\tbackground-position: 787px 118px;\n  background-color: #222222;\n}\n\n.contacts h2 {\n  color: #ffffff;\n  margin-top: 100px;\n}\n\n.form {\n  margin: 74px 0 31px;\n  text-align: left;\n}\n\n.form>div {\n  position: relative;\n  display: inline-block;\n  width: 48.4%;\n  vertical-align: top;\n}\n\n.field {\n  font-family: montserrat;\n  font-size: 1.4em;\n  font-weight: 700;\n  color: black;\n  text-transform: uppercase;\n  letter-spacing: -0.3px;\n  display: block;\n  border: 1px #cccccc solid;\n  border-radius: 3px;\n  box-sizing: border-box;\n  padding: 20px;\n  width: 100%;\n  height: 210px;\n}\n\n.personal {\n  margin-right: 2.7%;\n}\n\n.personal .field {\n  height: 50px;\n}\n\n.field:nth-of-type(n+2) {\n  margin-top: 30px;\n}\n\n.message .field {\n  padding-top: 15px;\n}\n\n.contacts .button {\n  margin: 30px 36.8% 86px;\n  border: none;\n}\n\nfooter {\n  position: relative;\n}\n\nfooter p {\n  position: absolute;\n  top: 20%;\n  font-family: montserrat;\n  font-size: 1.4em;\n  color: #555555;\n  letter-spacing: -0.3px;\n}\n\nfooter .socmedia-wrap a {\n  margin: 19px 4px 28px;\n  background-color: #222222;\n  border: none;\n}\n\n.facebook-footer {\n\tbackground-position: -52px -51px;\n}\n\n.google-footer {\n\tbackground-position: -103px -54px;\n}\n\n.pinterest-footer {\n\tbackground-position: -156px -53px;\n}\n\n.twitter-footer {\n\tbackground-position: -4px -54px;\n}\n\nfooter p a {\n  text-decoration: none;\n  color: #fed136;\n}\n\nfooter p a:hover {\n  color: #fec136;\n  transition: 0.5s;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>Book Bazaar\"</title>\n  </head>\n  <body>\n    <header>\n      <div class=\"center-block\">\n        <a class=\"logo\" href=\"/home\">BOOK BAZAR</a>\n        <nav>\n          <ul class=\"main-nav\">\n            <li><a (click)=\"home()\">Home</a></li>\n            <li><a (click)=\"signup()\">Sign Up</a></li>\n            <li><a (click)=\"signin()\">Sign In</a></li>\n          </ul>\n        </nav>\n      </div>\n    </header>\n    <router-outlet></router-outlet>\n   </body>\n</html>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, route, auth) {
        this.router = router;
        this.route = route;
        this.auth = auth;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.isloggedin()
            .subscribe(function (data) {
            if (JSON.parse(data["_body"]).done) {
                _this.route.navigate(['/listing']);
            }
        });
    };
    HomeComponent.prototype.signup = function () {
        this.route.navigate(['signup'], { relativeTo: this.router });
    };
    HomeComponent.prototype.signin = function () {
        this.route.navigate(['signin'], { relativeTo: this.router });
    };
    HomeComponent.prototype.home = function () {
        this.route.navigate(['/home']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/listing.service.ts":
/*!************************************!*\
  !*** ./src/app/listing.service.ts ***!
  \************************************/
/*! exports provided: ListingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingService", function() { return ListingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListingService = /** @class */ (function () {
    function ListingService(http) {
        this.http = http;
    }
    ListingService.prototype.addlisting = function (formdata) {
        console.log("in add");
        return this.http.post('/api/listings/add', formdata);
    };
    ListingService.prototype.getlisting = function () {
        return this.http.get('/api/listings');
    };
    ListingService.prototype.filterByCondition = function (condition) {
        return this.http.post('/api/listings/filterByCondition', { condition: condition });
    };
    ListingService.prototype.filterByPrice = function (from, to) {
        return this.http.post('/api/listings/filterByPrice', { from: from, to: to });
    };
    ListingService.prototype.search = function (query) {
        return this.http.post('/api/listings/search', { query: query });
    };
    ListingService.prototype.singleBookDetail = function (id) {
        console.log("in", '/api/listings/' + id);
        return this.http.get('/api/listings/' + id);
    };
    ListingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ListingService);
    return ListingService;
}());



/***/ }),

/***/ "./src/app/listing/listing.component.css":
/*!***********************************************!*\
  !*** ./src/app/listing/listing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"utf-8\";\n/* RESET */\n*, :before, :after {\n    box-sizing: border-box;\n}\nh1, h2, h3, h4, h5, h6, p, dt, dd, th, td, li, a {\n    line-height: 1;\n    font-weight: normal;\n}\nbody, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, table, tr, thead, tbody, th, td, ul, li, a {\n    margin: 0;\n    padding: 0;\n}\np {\n    line-height: 1.5;\n}\nul {\n  list-style: none;\n}\na, a:hover, a:focus, a:visited {\n    display: inline-block;\n    text-decoration: none;\n}\na {\n    color: inherit;\n    font-size: inherit;\n    font-weight: inherit;\n    line-height: inherit;\n}\nspan, label {\n    display: inline-block;\n}\ninput, textarea, select, button {\n    font-size: 1em;\n    border: 1px solid #ccc;\n    outline: none;\n    padding: 0.5em 1em;\n    vertical-align: top;\n}\nselect {\n    padding: calc(0.5em - 1px) 1em;\n}\ninput[type=\"submit\"], button {\n    cursor: pointer;\n}\ninput[type=\"file\"] {\n    max-width: 13.2em;\n    border: none;\n    padding: 0;\n}\nimg {\n    display: inline-block; \n    max-width: 100%;\n}\nbody {\n    font-family: Arial, sans-serif;\n}\n/* COLOR */\n.bg-fff {\n    background-color: #fff;\n}\n.bg-000 {\n    background-color: #000;\n}\n.text-fff {\n    color: #fff;\n}\n.text-center {\n    text-align: center !important;\n}\n.text-left {\n    text-align: left !important;\n}\n.text-right {\n    text-align: right !important;\n}\n.text-bold {\n    font-weight: bold;\n}\n.text-uppercase {\n    text-transform: uppercase;\n}\nstrike {\n    text-decoration: line-through;\n    color: #ccc;\n}\n/* GRID */\n.row:before, .row:after {\n    content: \"\";\n    display: table;\n}\n.row:after {\n    clear: both;\n}\n[class~=\"column\"] {\n    float: left;\n    width: 100%;\n    overflow: hidden;\n}\n.wrap {\n    max-width: 1200px;\n    margin: 0 auto;\n}\n@media (max-width: 1200px) {\n    .wrap {\n        max-width: 100%;\n        padding: 0 15px;\n    }\n}\n/* eXtra small Grid */\n@media (min-width: 481px) {\n    .column.x-1 {\n        width: 8.33%;\n    }\n    .column.x-2 {\n        width: 16.66%;\n    }\n    .column.x-3 {\n        width: 25%;\n    }\n    .column.x-4 {\n        width: 33.33%;\n    }\n    .column.x-5 {\n        width: 41.66%;\n    }\n    .column.x-6 {\n        width: 50%;\n    }\n    .column.x-7 {\n        width: 58.33%;\n    }\n    .column.x-8 {\n        width: 66.66%;\n    }\n    .column.x-9 {\n        width: 75%;\n    }\n    .column.x-10 {\n        width: 83.33%;\n    }\n    .column.x-11 {\n        width: 91.66%;\n    }\n    .column.x-12 {\n        width: 100%;\n    }\n    .list-x-1>[class~=\"column\"] {\n        width: 100%;\n    }\n    .list-x-2>[class~=\"column\"] {\n        width: 50%;\n    }\n    .list-x-3>[class~=\"column\"] {\n        width: 33.33%;\n    }\n    .list-x-4>[class~=\"column\"] {\n        width: 25%;\n    }\n    .list-x-5>[class~=\"column\"] {\n        width: 20%;\n    }\n    .list-x-6>[class~=\"column\"] {\n         width: 16.66%;\n    }\n    .list-x-7>[class~=\"column\"] {\n        width: 14.2857%;\n    }\n    .list-x-8>[class~=\"column\"] {\n        width: 12.5%;\n    }\n    .list-x-9>[class~=\"column\"] {\n        width: 11.11%;\n    }\n    .list-x-10>[class~=\"column\"] {\n        width: 10%;\n    }\n    .list-x-11>[class~=\"column\"] {\n        width: 9.091%;\n    }\n    .list-x-12>[class~=\"column\"] {\n        width: 8.33%;\n    }\n}\n/* Small Grid */\n@media (min-width: 769px) {\n    .column.s-1 {\n      width: 8.33%;\n    }\n    .column.s-2 {\n      width: 16.66%;\n    }\n    .column.s-3 {\n      width: 25%;\n    }\n    .column.s-4 {\n      width: 33.33%;\n    }\n    .column.s-5 {\n      width: 41.66%;\n    }\n    .column.s-6 {\n      width: 50%;\n    }\n    .column.s-7 {\n      width: 58.33%;\n    }\n    .column.s-8 {\n      width: 66.66%;\n    }\n    .column.s-9 {\n      width: 75%;\n    }\n    .column.s-10 {\n      width: 83.33%;\n    }\n    .column.s-11 {\n      width: 91.66%;\n    }\n    .column.s-12 {\n      width: 100%;\n    }\n    .list-s-1>[class~=\"column\"] {\n      width: 100%;\n    }\n    .list-s-2>[class~=\"column\"] {\n      width: 50%;\n    }\n    .list-s-3>[class~=\"column\"] {\n      width: 33.33%;\n    }\n    .list-s-4>[class~=\"column\"] {\n      width: 25%;\n    }\n    .list-s-5>[class~=\"column\"] {\n      width: 20%;\n    }\n    .list-s-6>[class~=\"column\"] {\n      width: 16.66%;\n    }\n    .list-s-7>[class~=\"column\"] {\n      width: 14.2857%;\n    }\n    .list-s-8>[class~=\"column\"] {\n      width: 12.5%;\n    }\n    .list-s-9>[class~=\"column\"] {\n      width: 11.11%;\n    }\n    .list-s-10>[class~=\"column\"] {\n      width: 10%;\n    }\n    .list-s-11>[class~=\"column\"] {\n      width: 9.091%;\n    }\n    .list-s-12>[class~=\"column\"] {\n      width: 8.33%;\n    }\n}\n/* Medium Grid */\n@media (min-width: 993px) {\n    .column.m-1 {\n      width: 8.33%;\n    }\n    .column.m-2 {\n      width: 16.66%;\n    }\n    .column.m-3 {\n      width: 25%;\n    }\n    .column.m-4 {\n      width: 33.33%;\n    }\n    .column.m-5 {\n      width: 41.66%;\n    }\n    .column.m-6 {\n      width: 50%;\n    }\n    .column.m-7 {\n      width: 58.33%;\n    }\n    .column.m-8 {\n      width: 66.66%;\n    }\n    .column.m-9 {\n      width: 75%;\n    }\n    .column.m-10 {\n      width: 83.33%;\n    }\n    .column.m-11 {\n      width: 91.66%;\n    }\n    .column.m-12 {\n      width: 100%;\n    }\n    .list-m-1>[class~=\"column\"] {\n      width: 100%;\n    }\n    .list-m-2>[class~=\"column\"] {\n      width: 50%;\n    }\n    .list-m-3>[class~=\"column\"] {\n      width: 33.33%;\n    }\n    .list-m-4>[class~=\"column\"] {\n      width: 25%;\n    }\n    .list-m-5>[class~=\"column\"] {\n      width: 20%;\n    }\n    .list-m-6>[class~=\"column\"] {\n      width: 16.66%;\n    }\n    .list-m-7>[class~=\"column\"] {\n      width: 14.2857%;\n    }\n    .list-m-8>[class~=\"column\"] {\n      width: 12.5%;\n    }\n    .list-m-9>[class~=\"column\"] {\n      width: 11.11%;\n    }\n    .list-m-10>[class~=\"column\"] {\n      width: 10%;\n    }\n    .list-m-11>[class~=\"column\"] {\n      width: 9.091%;\n    }\n    .list-m-12>[class~=\"column\"] {\n      width: 8.33%;\n    }\n}\n/* Large Grid */\n@media (min-width: 1201px) {\n    .column.l-1 {\n      width: 8.33%;\n    }\n    .column.l-2 {\n      width: 16.66%;\n    }\n    .column.l-3 {\n      width: 25%;\n    }\n    .column.l-4 {\n      width: 33.33%;\n    }\n    .column.l-5 {\n      width: 41.66%;\n    }\n    .column.l-6 {\n      width: 50%;\n    }\n    .column.l-7 {\n      width: 58.33%;\n    }\n    .column.l-8 {\n      width: 66.66%;\n    }\n    .column.l-9 {\n      width: 75%;\n    }\n    .column.l-10 {\n      width: 83.33%;\n    }\n    .column.l-11 {\n      width: 91.66%;\n    }\n    .column.l-12 {\n      width: 100%;\n    }\n    .list-l-1>[class~=\"column\"] {\n      width: 100%;\n    }\n    .list-l-2>[class~=\"column\"] {\n      width: 50%;\n    }\n    .list-l-3>[class~=\"column\"] {\n      width: 33.33%;\n    }\n    .list-l-4>[class~=\"column\"] {\n      width: 25%;\n    }\n    .list-l-5>[class~=\"column\"] {\n      width: 20%;\n    }\n    .list-l-6>[class~=\"column\"] {\n      width: 16.66%;\n    }\n    .list-l-7>[class~=\"column\"] {\n      width: 14.2857%;\n    }\n    .list-l-8>[class~=\"column\"] {\n      width: 12.5%;\n    }\n    .list-l-9>[class~=\"column\"] {\n      width: 11.11%;\n    }\n    .list-l-10>[class~=\"column\"] {\n      width: 10%;\n    }\n    .list-l-11>[class~=\"column\"] {\n      width: 9.091%;\n    }\n    .list-l-12>[class~=\"column\"] {\n      width: 8.33%;\n    }\n}\n/* CLASSES */\n.fl {\n    float: left;\n}\n.fr {\n    float: right;\n}\n@media (min-width: 481px) {\n    .fl-x {\n        float: left;\n    }\n    .fr-x {\n        float: right;\n    }\n}\n@media (min-width: 769px) {\n    .fl-s {\n        float: left;\n    }\n    .fr-s {\n        float: right;\n    }\n}\n@media (min-width: 993px) {\n    .fl-m {\n        float: left;\n    }\n    .fr-m {\n        float: right;\n    }\n}\n@media (min-width: 1201px) {\n    .fl-l {\n      float: left;\n    }\n    .fr-l {\n      float: right;\n    }\n}\n/* LIST */\n.nav>li {\n    float: left;\n}\n.nav>li>a {\n    display: block;\n}\n.list-inline>li {\n    display: inline-block;\n    vertical-align: top;\n}\n.list-flex {\n    display: flex;\n    -webkit-display: flex;\n    justify-content: space-between;\n    -webkit-justify-content: space-between;\n    align-items: flex-start;\n    -webkit-align-items: flex-start;\n    flex-wrap: wrap;\n    -webkit-flex-wrap: wrap;\n}\n/* CARD */\n.oh {\n    position: relative;\n    overflow: hidden;\n}\n.center {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n.m0a {\n    margin: 0 auto;\n}\n.hide {\n    display: none !important;\n}\n.disable {\n    pointer-events: none;\n}\nstrike {\n    text-decoration: line-through;\n}\nbody {\n    font-family: 'SFU Futura', Arial, sans-serif;\n    font-size: 14px;\n    color: #2a3f54;\n    background: #f7f7f7;\n}\n.bg-1 {\n    background: #557daa;\n}\n.text-1 {\n    color: #557daa;\n}\n/* ADMIN PAGE */\n/* FORM & INPUT */\nspan {\n    display: inline-block;\n}\nlabel {\n    display: inline-block;\n    cursor: pointer;\n}\n.checkbox {\n    font-size: 20px;\n    display: inline-block;\n    position: relative;\n    width: 1em;\n    height: 1em;\n    background: #557daa;\n    vertical-align: middle;\n}\n.checkbox:before {\n    content: \"\";\n    display: block;\n    width: 1em;\n    height: 1em;\n    background: #fff;\n    border: 1px solid #557daa;\n    border-radius: 2px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    cursor: pointer;\n}\n.checkbox:after {\n    content: \"\";\n    width: 0.7em;\n    height: 0.5em;\n    position: absolute;\n    top: 0.14em;\n    left: 0.16em;\n    border-left: 0.15em solid #fff;\n    border-bottom: 0.15em solid #fff;\n    background-position: top left, bottom left;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    display: none;\n    cursor: pointer;\n}\n.checkbox:checked:before {\n    background: #557daa;\n}\n.checkbox:checked:after {\n    display: block;\n}\n/* SWITCH BUTTON */\n.btnSwitch {\n    font-size: 16px;\n    width: 5em;\n    height: 0.5em;\n    cursor: pointer;\n    position: relative;\n}\n.btnSwitch:before {\n    content: \"\";\n    display: block;\n    line-height: 2.1em;\n    width: 100%;\n    height: 100%;\n    background: #dedede;\n    transition: background 0.2s;\n}\n.btnSwitch:after {\n    content: \"OFF\";\n    display: block;\n    width: 3em;\n    height: 3em;\n    border: 1px solid #dedede;\n    background: #fff;\n    position: absolute;\n    left: 0;\n    top: 50%;\n    -webkit-transform: translate(0,-50%);\n            transform: translate(0,-50%);\n    text-align: center;\n    line-height: 3em;\n    color: #777;\n    transition: left 0.2s;\n}\n.btnSwitch:checked:before {\n    background: #557daa;\n}\n.btnSwitch:checked:after {\n    content: \"ON\";\n    background: #557daa;\n    color: #fff;\n    border: none;\n    left: calc(100% - 2em);\n}\n/* PAGINATION */\n.pagination a {\n    width: 2em;\n    height: 2em;\n    text-align: center;\n    line-height: 2em;\n    border: 1px solid #ccc;\n    color: #ccc;\n    background: #fff;\n}\n.pagination a:hover {\n    border-color: #557daa;\n    color: #557daa;\n}\n.pagination li {\n    margin: 0 2px;\n}\n.pagination li.is-active a {\n    background: #557daa;\n    color: #fff;\n    border: none;\n    pointer-events: none;\n}\n/*CONTENTS CSS */\n.container {\n    display: flex;\n    display: -webkit-flex;\n    padding-left: 200px;\n    transition: 0.5s;\n}\n.container.is-click {\n    padding-left: 0;\n}\n.avatar {\n    margin: 50px 1em;\n    position: relative;\n    display: table;\n}\n.avatar img {\n    display: table-cell;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    background: #fff;\n    border: 2px solid #fff;\n    overflow: hidden;\n}\n.avatarName {\n    display: table-cell;\n    vertical-align: middle;\n    padding-left: 1em;\n    color: #fff;\n    line-height: 1.5;\n}\n/* SIDE CSS */\n.sideArea {\n    width: 200px;\n    min-width: 200px;\n    background: #2A3F54;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    transition: 0.5s;\n}\n.container.is-click .sideArea {\n    left: -200px;\n}\n.sideArea li>a {\n    display: block;\n    color: #fff;\n    padding: 1em;\n    border-bottom: 1px solid rgba(255,255,255,0.2);\n}\n.sideArea li>a:hover {\n    cursor: pointer;\n    background: rgba(255,255,255,0.1);\n}\n.sideArea li>a>.fa {\n    width: 1em;\n    text-align: center;\n    margin-right: 10px;\n}\n.submenu {\n    display: none;\n    border-bottom: 1px solid rgba(255,255,255,0.2);\n}\n.submenu li>a {\n    padding-left: 2em;\n    border-bottom: none;\n}\n.sideMenu {\n    border-top: 1px solid rgba(255,255,255,0.2);\n}\n/* MAIN CSS */\n.mainArea {\n    width: 100%;\n    overflow: hidden;\n}\n.navTop {\n    background: #ededed;\n    border-bottom: 1px solid #dedede;\n    padding: 0 1em;\n}\n.menuIcon {\n    font-size: 1.5em;\n    padding: 0.4em;\n    cursor: pointer;\n}\n.account {\n    position: relative;\n    padding: 0 1em;\n}\n.name{\n    color: #2A3F54;\n    padding: 1em 0;\n    cursor: pointer;\n}\n.name>span {\n    margin-left: 10px;\n}\n.accountLinks {\n    width: calc(200px - 2em);\n    position: absolute;\n    top: 100%;\n    right: 0;\n    background: #fff;\n    border: 1px solid #dedede;\n    z-index: 999;\n}\n.accountLinks li {\n    border: none !important;\n}\n.accountLinks li a {\n    display: block;\n    color: #2A3F54;\n    padding: 0.7em 1em;\n}\n.account:hover, .accountLinks li a:hover {\n    background: rgba(42,63,84,0.1);\n}\n.mainContent {\n    padding: 20px;\n}\n@media (max-width: 768px){\n    .container {\n        padding-left: 0; \n    }\n    .container .sideArea {\n        left: -200px;\n    }\n    .container.is-click {\n        padding-left: 200px;\n    }\n    .container.is-click .sideArea {\n        left: 0;\n    }\n}\n/* ADMIN FORM */\n.form {\n    background: #fff;\n    border: 1px solid #dedede;\n}\n.formHeader {\n    padding: 1em;\n    background: #fff;\n    border-bottom: 1px solid #dedede;\n}\n.formBody {\n    width: 100%;\n    padding: 20px 20px 10px 20px;\n}\n/* LIST FORM */\n.btnAdd, .btnSave, .btnEdit, .btnRemove {\n    padding: 0.5em;\n    margin: 0 2px;\n}\n.btnSave {\n    border: none;\n    outline: none;\n    cursor: pointer;\n    font-size: 0.95em;\n}\n.btnSwitch {\n    font-size: 10px;\n}\n.btnSwitch.all {\n    position: absolute;\n    bottom: calc(100% + 3.7em);\n    left: calc(50% - 4em);\n}\n.scrollX {\n    width: 100%;\n    overflow-x: scroll;\n}\n/* TABLE */\n.table {\n    width: 100%;\n    min-width: 768px;\n}\n.table .row {\n    width: 100%;\n}\n.table .row .cell {\n    display: table-cell;\n    padding: 10px;\n    vertical-align: middle;\n}\n.table>ul>li {\n    border-bottom: 1px solid #dedede;\n}\n.table .cell-50 {\n    max-width: 50px;\n    min-width: 50px;\n}\n.table .cell-100 {\n    max-width: 100px;\n    min-width: 100px;\n}\n.table .cell-150 {\n    max-width: 150px;\n    min-width: 150px;\n}\n.table .cell-200 {\n    max-width: 200px;\n    min-width: 200px;\n}\n.table .cell-100p {\n    width: 100%;\n}\n/* DETAIL FORM */\n.inputGroup {\n    display: block;\n    margin-bottom: 10px;\n}\n.inputGroup>span:first-child {\n    width: 100px;\n    padding-bottom: 10px;\n    text-align: right;\n    padding-right: 10px;\n    vertical-align: top;\n}\n.inputGroup>span {\n    display: table-cell;\n}\n.inputGroup input, .inputGroup select {\n    margin-bottom: 10px;\n}\n.form textarea {\n    width: 100%;\n    min-height: 20em;\n}\n#pagination {\n    margin-top: 20px;\n}\n.btnNewInput {\n    padding: 0.6em;\n}\n.inputNumber {\n    max-width: 3em;\n    padding: 0.5em 0;\n    text-align: center;\n}\n/* SUB LIST */\n.sublist {\n    width: 100%;\n    display: none;\n}\n.row.is-active>.sublist {\n    display: block;\n}\n.btnCaret {\n    font-size: 20px;\n    width: 1em;\n    height: 1em;\n    cursor: pointer;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    transition: 0.2s;\n}\n.row.is-active>div>.btnCaret {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n.sublist>li:nth-child(2n+1) {\n    background: rgba(42,63,84,0.05);\n}\n/* FILTER */\n.filterGroup {\n    margin-bottom: 20px;\n}\n/* SEARCH */\n.formSearch {\n    position: relative;\n}\n.inputSearch {\n    padding-right: 3em;\n}\n.btnSearch {\n    padding: 0.5em 1em;\n    position: absolute;\n    top: 0;\n    right: 0;\n    background: transparent;\n    border: none;\n}\n/* SORT */\n.boxSelect {\n    min-width: 12em;\n    background: #fff;\n    position: relative;\n}\n.titleSelect {\n    background-repeat: no-repeat;\n    background-image: linear-gradient(#000,#000);\n    background-size: 0 1px;\n    background-position: bottom left;\n    transition: background-size 0.5s;\n    padding: 0.4em 1em;\n    border: 1px solid #ccc;\n    cursor: pointer;\n}\n.titleSelect.is-active {\n    background-size: 100% 1px;\n}\n.optionSelect {\n    width: 100%;\n    position: absolute;\n    background: rgba(255,255,255,0.95);\n    border: 1px solid #ccc;\n    border-top: none;\n    z-index: 100;\n    visibility: hidden;\n    overflow: hidden;\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    transition: 0.2s;\n}\n.titleSelect.is-active+.optionSelect {\n  visibility: visible;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n.optionSelect li a {\n    width: 100%;\n    padding: 0.5em 1em;\n    cursor: pointer;\n}\n.optionSelect li a:hover {\n    background: rgba(42,63,84,0.1);\n}\n/* FILTER */\n.btnFilter {\n    padding: 0.4em 1em;\n    border: 1px solid #ccc;\n    margin-right: 10px;\n    cursor: pointer;\n}\n.boxFilter .btnFilter {\n    padding: 0;\n    margin: 0;\n    border: none;\n}\n.btnFilter>.fa {\n    margin-right: 0.5em;\n}\n.boxFilter {\n    width: 200px;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: -200px;\n    background: #fff;\n    padding: 20px;\n    border-left: 1px solid #ccc;\n    z-index: 800;\n    transition: right 0.5s;\n}\n.boxFilter.is-active {\n    right: 0;\n}\n.boxFilter .groupInput {\n    padding-top: 20px;\n    margin-top: 20px;\n    border-top: 1px solid #ccc;\n}\n.boxFilter select {\n    margin-bottom: 20px;\n}\n.boxFilter select {\n    width: 100%;\n}\n.boxFilter .btnClose {\n    margin-bottom: 20px;\n    cursor: pointer;\n}\n.boxFilter .btnClose>.fa {\n    margin-right: 1em;\n}\n/* FILTER PRICE */\n#filterPrice {\n    width: 100%;\n    height: 5px;\n    margin: 1em 0;\n}\n.areaValue {\n    margin-top: 2em;\n}\n.rangeValue {\n    display: block;\n    width: 100%;\n    height: 2em;\n    text-align: center;\n}\n#filterPrice .rangeValue:nth-child(1) {\n    left: 0;\n}\n#filterPrice .rangeValue:nth-child(2) {\n    right: 0;\n}\n.noUi-base {\n    background: #ccc;\n}\n.noUi-connect {\n    background: #2a3f54;\n}\n.noUi-handle {\n    outline: none;\n    top: -0.75em !important;\n    width: 1.5em !important;\n    height: 1.5em !important;\n    border-radius: 0;\n}\n.noUi-handle.noUi-handle-lower {\n    left: -1px;\n}\n.noUi-handle.noUi-handle-upper {\n    left: -20px;\n}\n.noUi-handle:before, .noUi-handle:after {\n    display: none;\n}\n"

/***/ }),

/***/ "./src/app/listing/listing.component.html":
/*!************************************************!*\
  !*** ./src/app/listing/listing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!--     SIDE AREA -->\n  <div class=\"sideArea\">\n    <div class=\"avatar\">\n      <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCNOdyoIXDDBztO_GC8MFLmG_p6lZ2lTDh1ZnxSDawl1TZY_Zw\" alt=\"\">\n      <div class=\"avatarName\">Welcome,\n        <br>{{currentUser}}</div>\n    </div>\n    <ul class=\"sideMenu\">\n      <li>\n        <a (click) = \"displayListingPage()\">\n          <span class=\"fa fa-table\"></span>PRODUCT</a>\n      </li>\n      <li>\n        <a (click) = \"wishlistPage()\">\n            <i class=\"fas fa-clipboard-list fa-lg\"></i> YOUR WISHLIST</a>\n      </li>\n      <li>\n        <a (click) = \"addListingPage()\">\n            <i class=\"fas fa-book fa-lg\"></i> SELL YOUR BOOK</a>\n      </li>\n      <li>\n        <a (click)=\"displayMessage()\">\n            <i class=\"fas fa-comment fa-lg\"></i> MESSAGES</a>\n      </li>\n      <li>\n        <a (click)=\"logout()\">\n            <i class=\"fas fa-sign-out-alt fa-lg\"></i> LOG OUT</a>\n      </li>\n    </ul>\n  </div>\n  <!--     SIDE AREA -->\n  <div class=\"mainArea\">\n    <!-- BEGIN NAV -->\n    <nav class=\"navTop row\">\n      <div class=\"menuIcon fl\">\n      </div>\n      <div class=\"account fr\">\n        <div class=\"name has-submenu\">{{currentUser}}\n          <span class=\"fa fa-angle-down\"></span>\n        </div>\n      </div>\n    </nav>\n    <!-- END NAV -->\n <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/listing/listing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/listing/listing.component.ts ***!
  \**********************************************/
/*! exports provided: ListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingComponent", function() { return ListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listing.service */ "./src/app/listing.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListingComponent = /** @class */ (function () {
    function ListingComponent(router, route, listingservice, auth) {
        this.router = router;
        this.route = route;
        this.listingservice = listingservice;
        this.auth = auth;
        this.listings = [];
        this.currentUser = "";
    }
    ListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.isloggedin()
            .subscribe(function (data) {
            if (!JSON.parse(data["_body"]).done) {
                _this.route.navigate(['/home']);
            }
            _this.currentUser = JSON.parse(data["_body"]).name;
        });
        this.listingservice.getlisting()
            .subscribe(function (data) {
            console.log(data["_body"]);
            _this.listings = JSON.parse(data["_body"]);
            console.log(_this.listings);
        });
        this.route.navigate(['/listing']);
    };
    ListingComponent.prototype.addListingPage = function () {
        console.log("working");
        this.route.navigate(['listing/add']);
    };
    ListingComponent.prototype.displayListingPage = function () {
        this.route.navigate(['/home']);
    };
    ListingComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout()
            .subscribe(function (data) {
            _this.route.navigate(['/home']);
        });
    };
    ListingComponent.prototype.displayMessage = function () {
        this.route.navigate(['messages']);
    };
    ListingComponent.prototype.wishlistPage = function () {
        this.route.navigate(['wishlist']);
    };
    ListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listing',
            template: __webpack_require__(/*! ./listing.component.html */ "./src/app/listing/listing.component.html"),
            styles: [__webpack_require__(/*! ./listing.component.css */ "./src/app/listing/listing.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _listing_service__WEBPACK_IMPORTED_MODULE_2__["ListingService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ListingComponent);
    return ListingComponent;
}());



/***/ }),

/***/ "./src/app/mainpage/mainpage.component.css":
/*!*************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Cookie|Montserrat:400,700|Roboto+Slab|Vollkorn:400,400i');\n\nbody {\n  margin: 0;\n  font-size: 62.5%;\n  text-align: center;\n  min-width: 900px;\n}\n\nheader {\n  position: fixed;\n  width: 100%;\n  min-height: 100px;\n  background: linear-gradient(0deg, rgba(53,52,55,0.7), rgba(18,17,26,0.7));\n  z-index: 10;\n}\n\n.center-block {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  max-width: 940px;\n  min-width: 900px;\n}\n\n.logo {\n  position: absolute;\n  top: 27px;\n  left: 0.85%;\n  font-size: 3.6em;\n  font-family: cookie;\n  text-decoration: none;\n  color: #fed136;\n  letter-spacing: 0.04em;\n}\n\nheader ul {\n  position: absolute;\n  top: 32px;\n  right: 0.14%;\n}\n\nheader li {\n  display: inline-block;\n  list-style-type: none;\n}\n\nheader li a {\n  font-family: montserrat;\n  font-size: 1.4em;\n  text-decoration: none;\n  text-transform: uppercase;\n  color: white;\n  margin-left: 40px;\n  letter-spacing: -0.3px;\n}\n\nheader li a:hover {\n  color: #fed136;\n  transition: 0.5s;\n}\n\n.home {\n  padding-top: 100px;\n  background: url('home.webp') no-repeat;\n  background-color: rgba(0, 0, 0, 0.5);\n  background-size: cover;\n  background-blend-mode: hue;\n}\n\n.home p {\n  padding-top: 125px;\n  margin-bottom: 0;\n  font-family: vollkorn;\n  font-size: 4.5em;\n  font-style: italic;\n  line-height: 1.2em;\n  color: white;\n  letter-spacing: 0.45px;\n}\n\nh1 {\n  margin: 0 0 40px;\n  padding-top: 0.25em;\n  font-family: montserrat;\n  font-size: 7.5em;\n  text-transform: uppercase;\n  color: white;\n  letter-spacing: -2.9px;\n}\n\n.button {\n  display: inline-block;\n  padding: 21px 49px;\n  margin-bottom: 161px;\n  font-family: montserrat;\n  text-decoration: none;\n  color: white;\n  font-size: 1.8em;\n  text-transform: uppercase;\n  font-weight: 700;\n  background-color: #fed136;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\n.button:hover {\n  background-color: #fec136;\n  transition: 0.5s;\n}\n\n.button:active {\n  background-color: #feb136;\n  transition: 0.2s;\n}\n\nh2 {\n  margin: 110px 0 0;\n  font-family: montserrat;\n  font-size: 4em;\n  text-transform: uppercase;\n  font-weight: 700;\n  letter-spacing: -2.4px;\n  color: #222222;\n}\n\n.title p {\n  margin-top: 4px;\n  font-family: vollkorn;\n  font-size: 2em;\n  font-style: italic;\n  color: #777777;\n}\n\n/* В этом блоке у меня не получилось нормально подгрузить иконки из спрайта. Я не понял, как разместить фон по центру относительно нужной иконки. Из-за этого высота иконок получилась разная и блоки поехали. Сделал отдельным фиайлами, спрайты оставил для соцсетей */\n\n.services .center-block {\n  text-align: justify;\n}\n\n.services .center-block:after{\n  content: \"\";\n  display: inline-block;\n  width: 100%;\n}\n\n.services-item {\n  display: inline-block;\n  width: 30%;\n  margin-top: 54px;\n  padding: 0 5px 90px;\n  vertical-align: top;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.icon-wrap {\n  display: inline-block;\n  padding: 13px;\n  width: 40px;\n  height: 40px;\n  border: #fed136 3px solid;\n  border-radius: 45px;\n}\n\nh3 {\n  font-family: montserrat;\n  font-size: 1.8em;\n  letter-spacing: -0.8px;\n  margin-bottom: 0;\n  color: #222222;\n}\n\n.services-item p {\n  margin-top: 10px;\n  font-family: roboto slab;\n  font-size: 1.4em;\n  color: #777777;\n  letter-spacing: -0.5px;\n  line-height: 1.5em;\n}\n\n.portfolio {\n  background-color: #f7f7f7;\n}\n\n/*Два селектора ниже делают сетку таким образом, чтобы между блоками было пустое пространство. Когда я сделал text-align:justify родительскому блоку, первый ряд выстроился с пространством, а второй прилип к левому краю. Я добавил псевдокласс after к родительскому блоку (так было в лекции) и все заработало. Почему оно заработало - я не понял */\n\n.portfolio .center-block {\n  text-align: justify;\n  padding-bottom: 113px;\n}\n\n.portfolio .center-block:after {\n  content: \"\";\n  display: inline-block;\n  width: 100%;\n}\n\n.title,\n.portfolio-item {\n  text-align: center;\n}\n\n.portfolio-item {\n  display: inline-block;\n  margin-top: 51px;\n  width: 31%;\n  overflow: hidden;\n  background-color: white;\n}\n\n.portfolio-item h3 {\n  color: #333333;\n  margin: 23px 0 0;\n}\n\n.portfolio-item p {\n  font-family: vollkorn;\n  font-size: 1.7em;\n  color: #737373;\n  font-style: italic;\n  margin-top: 0;\n}\n\n.about-item {\n  position: relative;\n  margin: 57px 0 68px 0;\n}\n\n.about ul {\n  list-style-type: none;\n  margin-bottom: 133px;\n}\n\n.about ul:before {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background: #f1f1f1;\n  top: 20%;\n  left: 50%;\n  bottom: 10%;\n}\n\n.about-item-text {\n  display: inline-block;\n  max-width: 32%;\n  padding: 0 40px 0 0;\n  text-align: right;\n  box-sizing: border-box;\n}\n\n.about li:nth-of-type(even) .about-item-text {\n  text-align: left;\n  padding: 0 0 0 35px;\n}\n\n.about h3 {\n  text-transform: uppercase;\n}\n\nh4 {\n  font-family: montserrat;\n  font-size: 1.8em;\n  font-weight: 700;\n  margin: 4px 0 10px 0;\n  letter-spacing: -1.1px;\n  color: #222222;\n}\n\n/* В <p> текст не получилось настроить так, чтобы переносы совпадали с макетом. В ширине блока доходил до милионных долей писелей, но текст так и не встал*/\n\n.about-item-text p {\n  display: inline;\n  font-family: roboto slab;\n  font-size: 1.4em;\n  color: #777777;\n  letter-spacing: -0.5px;\n  line-height: 1.6em;\n}\n\n/* Я долго пытался сделать прямоугольные картинки из макета вписанными в скругленные границы без изменения пропорций - но ничего не получилось. Использовал background */\n\n.about-item-img-first {\n  background: url(\"https://i.lensdump.com/i/8TSsqc.jpg\");\n}\n\n.about-item-img-second {\n  background: url(\"https://i.lensdump.com/i/8TS3YK.jpg\");\n}\n\n.about-item-img-third {\n  background: url(\"https://i.lensdump.com/i/8TSXBD.jpg\");\n}\n\n.about-item-img-first,\n.about-item-img-second,\n.about-item-img-third,\n.about-item-img-fourth {\n  position: relative;\n  display: inline-block;\n  width: 170px;\n  height: 170px;\n  border: 7px #f1f1f1 solid;\n  border-radius: 50%;\n  top: -2px;\n  background-position: bottom center;\n}\n\n.about li:nth-of-type(odd) .image {\n  margin-right: 37%;\n}\n\n.about li:nth-of-type(even) .image {\n  margin-left: 27.8%;\n}\n\n.about-item-img-fourth {\n  background: url(\"https://i.lensdump.com/i/8TScI0.jpg\");\n}\n\n.about li:last-child {\n  position: relative;\n  display: inline-block;\n  margin: 0 4.5% 0 0;\n  width: 170px;\n  height: 170px;\n  border: 7px #f1f1f1 solid;\n  border-radius: 50%;\n  background: #fed136;\n  top: 13px;\n}\n\n.about li:last-child h3 {\n  text-align: center;\n  padding: 19px 36px 0 32px;\n  color: white;\n  letter-spacing: -0.9px;\n  line-height: 1.45em;\n}\n\n.team {\n  background-color: #f7f7f7;\n}\n\n.team .title p {\n  margin-top: 10px;\n}\n\n.team-item {\n  display: inline-block;\n  width: 29.5%;\n  margin-top: 50px;\n}\n\n.team-item img {\n  max-width: 220px;\n  max-height: 220px;\n  border: 7px white solid;\n  border-radius: 50%;\n}\n\n.team-item p {\n  font-family: montserrat;\n  font-size: 1.6em;\n  font-weight: 700;\n  color: #222222;\n  letter-spacing: -0.6px;\n  margin-bottom: 0;\n}\n\n.team-item span,\n.team .center-block>p {\n  display: block;\n  font-family: roboto slab;\n  color: #777777;\n}\n\n.team-item>span {\n  margin: 2px 0 11px;\n  font-size: 1.4em;\n}\n\n.team .center-block>p {\n  font-size: 1.6em;\n  margin: 45px 150px 115px;\n  letter-spacing: -0.4px;\n  line-height: 1.5em;\n}\n\n.team-item a,\nfooter .socmedia-wrap a {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  border: 3px #222222 solid;\n  border-radius: 50%;\n  box-sizing: border-box;\n  margin: 0 4px 0;\n}\n\n.twitter:hover {\n  background-color: #00aced;\n  border-style: none;\n  transition: 0.5s;\n}\n\n.facebook:hover {\n  background-color: #3b5998;\n  border-style: none;\n  transition: 0.5s;\n}\n\n.pinterest:hover {\n  background-color: #cb2028;\n  border-style: none;\n  transition: 0.5s;\n}\n\n.google:hover {\n  background-color: #d95232;\n  border-style: none;\n  transition: 0.5s;\n}\n\na span {\n  display: block;\n  position: relative;\n  z-index: 1000;\n}\n\n/* Далее полный набор стилей спрайта */\n\n.facebook-still, .google-still, .pinterest-still, .twitter-still, .facebook-footer, .google-footer, .pinterest-footer, .twitter-footer {\n\tbackground: url(https://i.lensdump.com/i/8TSm01.png) no-repeat;\n}\n\n.facebook-still {\n\tbackground-position: -57px -10px;\n}\n\n.google-still {\n\tbackground-position: -107px -10px;\n}\n\n.pinterest-still {\n\tbackground-position: -160px -9px;\n}\n\n.twitter-still {\n\tbackground-position: -8px -11px;\n}\n\n.facebook-still:hover {\n\tbackground-position: -53px -51px ;\n  transition: 0.5s;\n}\n\n.google-still:hover {\n\tbackground-position: -104px -54px ;\n  transition: 0.5s;\n}\n\n.pinterest-still:hover {\n\tbackground-position: -156px -54px;\n  transition: 0.5s;\n}\n\n.twitter-still:hover {\n\tbackground-position: -5px -55px ;\n  transition: 0.5s;\n}\n\n/* Стили спрайта закончились */\n\n.logos-links {\n  margin: 60px 0 58px;\n  padding: 0 65px 0px 60px;\n}\n\n.logos a {\n  display: inline-block;\n  margin: 0 18px;  \n  vertical-align: middle;\n}\n\n.contacts {\n  padding-top: 0px;\n  background: url(https://i.lensdump.com/i/8TSn0v.png) no-repeat;\n\tbackground-position: 787px 118px;\n  background-color: #222222;\n}\n\n.contacts h2 {\n  color: #ffffff;\n  margin-top: 100px;\n}\n\n.form {\n  margin: 74px 0 31px;\n  text-align: left;\n}\n\n.form>div {\n  position: relative;\n  display: inline-block;\n  width: 48.4%;\n  vertical-align: top;\n}\n\n.field {\n  font-family: montserrat;\n  font-size: 1.4em;\n  font-weight: 700;\n  color: black;\n  text-transform: uppercase;\n  letter-spacing: -0.3px;\n  display: block;\n  border: 1px #cccccc solid;\n  border-radius: 3px;\n  box-sizing: border-box;\n  padding: 20px;\n  width: 100%;\n  height: 210px;\n}\n\n.personal {\n  margin-right: 2.7%;\n}\n\n.personal .field {\n  height: 50px;\n}\n\n.field:nth-of-type(n+2) {\n  margin-top: 30px;\n}\n\n.message .field {\n  padding-top: 15px;\n}\n\n.contacts .button {\n  margin: 30px 36.8% 86px;\n  border: none;\n}\n\nfooter {\n  position: relative;\n}\n\nfooter p {\n  position: absolute;\n  top: 20%;\n  font-family: montserrat;\n  font-size: 1.4em;\n  color: #555555;\n  letter-spacing: -0.3px;\n}\n\nfooter .socmedia-wrap a {\n  margin: 19px 4px 28px;\n  background-color: #222222;\n  border: none;\n}\n\n.facebook-footer {\n\tbackground-position: -52px -51px;\n}\n\n.google-footer {\n\tbackground-position: -103px -54px;\n}\n\n.pinterest-footer {\n\tbackground-position: -156px -53px;\n}\n\n.twitter-footer {\n\tbackground-position: -4px -54px;\n}\n\nfooter p a {\n  text-decoration: none;\n  color: #fed136;\n}\n\nfooter p a:hover {\n  color: #fec136;\n  transition: 0.5s;\n}"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.html":
/*!**************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"home\">\n    <div class=\"center-block\">\n      <p>Welcome To Book Bazaar!</p>\n      <h1>It’s nice to Meet you</h1>\n      <a class=\"button\" (click)=\"signin()\">Sign In to Continue</a>\n    </div>\n  </section>\n  \n  <section class=\"services\">\n    <div class=\"center-block\">\n      <div class=\"title\">\n        <h2>What We Provide</h2>\n        <p>An online platform to buy and sell old books</p>\n      </div>\n      <div class=\"services-item\">\n        <div class=\"icon-wrap\">\n          <img class=\"services-item-icon\" src=\"https://i.lensdump.com/i/8TSY2z.png\" alt=\"service icon\">\n        </div>\n        <h3>Sell Your Books</h3>\n        <p>We provide an onlien platform to sell your old or new books</p>\n      </div>\n      <div class=\"services-item\">\n        <div class=\"icon-wrap\">\n          <img class=\"services-item-icon\" src=\"https://i.lensdump.com/i/8TSLY5.png\" alt=\"service icon\">\n        </div>\n        <h3>Buy Books</h3>\n        <p>We provide an onlien platform to buy old, new a large variety of books</p>\n      </div>\n      <div class=\"services-item\">\n        <div class=\"icon-wrap\">\n          <img class=\"services-item-icon\" src=\"https://i.lensdump.com/i/8TSvBC.png\" alt=\"service icon\">\n        </div>\n        <h3>Web Security</h3>\n        <p>Proin iaculis purus consequat sem cure \ndigni ssim. Donec porttitora entum suscipit \naenean rhoncus posuere odio in tincidunt.</p>\n      </div>\n    </div>\n  </section>\n  \n \n  \n    \n  <section class=\"team\">\n    <div class=\"center-block\">\n      <div class=\"title\">\n        <h2>Developed By</h2>\n      </div>\n      <div class=\"team-item\">\n        <img src=\"../../assets/ankit.jpg\">\n        <p>Ankit Bhardwaj</p>\n        <span>Full Stack Developer</span>\n        <div class=\"socmedia-wrap\">\n          <a class=\"twitter twitter-still\" href=\"https://twitter.com/AnkitBh39021891\"></a>\n          <a class=\"facebook facebook-still\" href=\"https://www.facebook.com/ankit.bhardwaj.50702\"></a>\n          <a class=\"google google-still\"></a>\n        </div>\n      </div>\n      <p>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt proin iaculis.</p>\n    </div>\n  </section>\n  \n  <section class=\"logos\">\n    <div class=\"center-block\">\n      <div class=\"logos-links\">\n        <a><img src=\"https://i.lensdump.com/i/8TSK2Z.png\" alt=\"partner logo\"></a>\n        <a><img src=\"https://i.lensdump.com/i/8TSfpF.png\" alt=\"partner logo\"></a>\n        <a><img src=\"https://i.lensdump.com/i/8TSFF3.png\" alt=\"partner logo\"></a>\n        <a><img src=\"https://i.lensdump.com/i/8TSpCP.png\" alt=\"partner logo\"></a>\n      </div>\n    </div>\n  </section>\n  \n  <section class=\"contacts\">\n    <div class=\"center-block\">\n      <div class=\"title\">\n        <h2>contact us</h2>\n        <p>You Can contact us through email or through any social platform.</p>\n      </div>\n    </div>\n  </section>\n  \n  <footer>\n    <div class=\"center-block\">\n      <p>© Copyright 2018 </p>\n      <div class=\"socmedia-wrap\">\n        <a class=\"twitter twitter-footer\" href=\"https://twitter.com/AnkitBh39021891\"></a>\n        <a class=\"facebook facebook-footer\" href=\"https://www.facebook.com/ankit.bhardwaj.50702\"></a>\n        <a class=\"google google-footer\"></a>\n      </div>\n    </div> \n  </footer>"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.ts ***!
  \************************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return MainpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainpageComponent = /** @class */ (function () {
    function MainpageComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    MainpageComponent.prototype.ngOnInit = function () {
    };
    MainpageComponent.prototype.signin = function () {
        this.route.navigate(['home/signin']);
    };
    MainpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainpage',
            template: __webpack_require__(/*! ./mainpage.component.html */ "./src/app/mainpage/mainpage.component.html"),
            styles: [__webpack_require__(/*! ./mainpage.component.css */ "./src/app/mainpage/mainpage.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MainpageComponent);
    return MainpageComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.getMessage = function () {
        return this.http.get('/api/messages');
    };
    MessageService.prototype.sendMessage = function (name, message) {
        return this.http.post('/api/messages', { name: name, message: message });
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n    margin: 0;\n    padding: 0;\n    outline: none;\n    border: none;\n      box-sizing: border-box;\n  }\n  *:before,\n  *:after{\n      box-sizing: border-box;\t\n  }\n  html,body{\n      min-height: 100%;\n  }\n  body{\n      background-image: radial-gradient(mintcream 0%, gray 100%);\n      font-family: \"Trebuchet MS\";\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n  }\n  .wrap{\n      width: 80%;\n      height: 800px;\n      margin: 50px auto;\n      border-radius: 20px;\n      border: solid 8px #2c3033;\n      background: white;\n      box-shadow: 0 0 0px 1px rgba(255,255,255,.4),\n                          0 0 0px 3px #2c3033;\n  }\n  .header{\n      width: 100%;\n      height: 50px;\n  \n      border-radius: 10px 10px 0 0px;\n      background-image: linear-gradient(#687480 0%, #3b4755 100%);\n      font: bold 18px/50px arial;\n      text-align: center;\n      color: white;\n      box-shadow: inset 0 -2px 3px 2px rgba(0,0,0,.4),\n                          0 2px 2px 2px rgba(0,0,0,.4);\n  }\n  span{\n      display: block;\n      width: 100%;\n      height: 90%;\n      border-bottom: dashed 2px #54687a;\n  }\n  .wrap-list{\n      height: 90%;\n      padding: 20px 0px;\n      box-shadow: inset 0 0px 5px black;\n      border-radius: 0 0 10px 10px;\n      background-image: linear-gradient(transparent 97%, gray 100%);\n  }\n  input[type=\"checkbox\"]{\n    position: relative;\n    top: 14px;\n    right: 12px;\n      float: right;\n  }\n  input[type=\"checkbox\"]:checked + label{\n      text-decoration: line-through;\n      color: rgba(0,0,0,.3);\n  }\n  .list{\n      list-style: none;\n      color: rgba(0,0,0,.7);\n  }\n  .list li:nth-child(odd){\n      background: rgba(0,0,50,.1);\n  }\n  .list li{\n      float: left;\n      width: 100%;\n  }\n  label{\n    padding: 10px;\n      cursor: pointer;\n      float: left;\n      width: 95%;\n      transition: all .3s ease;\n  }\n  ol{\n    height: 650px;\n    overflow-y:scroll;\n    \n    }\n  ::-webkit-scrollbar {\n        width: 12px;\n    }\n  ::-webkit-scrollbar-track {\n        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n        border-radius: 10px;\n    }\n  ::-webkit-scrollbar-thumb {\n        border-radius: 10px;\n        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);\n    }"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\n        <div class=\"header\"><span>YOUR MESSAGES</span></div>\n          <div class=\"wrap-list\">\n                <h2 *ngIf=\"messages.length < 1\" style=\"font-weight: bold;font-size: 50px;padding-top: 20px;margin-left: 20px;\">No Message</h2>\n              <ol class=\"list\"  *ngIf=\"messages.length > 0\">\n                 <li *ngFor=\"let message of messages\" style=\"padding: 10px;\">\n                     <h2>{{message.senderName}}</h2><br>\n                     {{message.message}}\n                 </li>\n              </ol>\n          </div>\n      </div>"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageComponent = /** @class */ (function () {
    function MessageComponent(messageservice) {
        this.messageservice = messageservice;
        this.messages = [];
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageservice.getMessage()
            .subscribe(function (data) {
            _this.messages = JSON.parse(data["_body"]);
        });
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    margin: 0;\n    padding: 0;\n    background: url('home.webp');\n    background-size: cover;\n    font-family: 'Open Sans', sans-serif;\n    z-index: -10;\n}\n\n#overlay{\n    position: absolute;\n    /* background-color: rgba(0,0,0,0.7); */\n    background: url('loginback.jpg');\n    background-size: cover;\n    z-index: -5;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    bottom: 0;\n    \n}\n\n.loginbox{\n    width: 320px;\n    height: 360px;\n    color: #000;\n    top: 50%;\n    left: 50%;\n    padding: 60px 30px;\n    position: absolute;\n    -webkit-transform: translate(-50%,  -50%);\n            transform: translate(-50%,  -50%);\n    box-sizing: border-box;\n    border-radius: 3%;\n    box-shadow: 8px 8px 50px #000;\n}\n\nh1{\n    color: #000;\n    margin: 0;\n    padding: 0 0 0px;\n    text-align: center;\n    font-size: 22px;\n    font-weight: bold;\n}\n\n.loginbox p {\n    margin: 0;\n    padding: 0;\n    font-weight: bold;\n    font-size: 13px;\n}\n\n.loginbox input{\n    width: 100%;\n    margin-bottom: 20px;\n}\n\n.loginbox input[type=\"text\"], input[type=\"password\"]{\n    border: none;\n    border-bottom: 1px solid #bdc3c7;\n    background: transparent;\n    outline: none;\n    height: 30px;\n    font-size: 16px;\n    opacity: 1;\n    color: black;\n}\n\n.loginbox input[type=\"submit\"]{\n    border: none;\n    outline: none;\n    height: 40px;\n    background: #2ecc71;\n    color: #fff;\n    font-size: 14px;\n    font-weight: bold;\n    border-radius: 20px;\n    font-family: 'Open Sans', sans-serif;\n}\n\n.loginbox input[type=\"submit\"]:hover {\n    cursor: pointer;\n    /* background: #27ae60;\n    color: #fff; */\n    \n}\n\n.loginbox a {\n    font-size: 14px;\n    text-decoration: none;\n    color: #fff;\n    opacity: 0.8;\n}\n\n.loginbox a:hover {\n    color: #fff;\n    opacity: 1;\n}\n\n#text-account {\n    font-size: 14px;\n    color: #fff;\n    opacity: 0.4;\n}\n\nform input[type=\"submit\"]:disabled {\n    background: #dddddd;\n}\n\n\n"

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"overlay\"></div>\n<div class=\"loginbox\">\n    <h1>Sign in</h1><br>\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n        <input type=\"text\" placeholder=\"Username\" formControlName=\"email\" required><br>\n        <input type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\n        <input type=\"submit\" value=\"LOGIN\" [disabled]=\"!myForm.valid\">\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.model */ "./src/app/user.model.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new _user_model__WEBPACK_IMPORTED_MODULE_2__["User"](this.myForm.value.email, this.myForm.value.password);
        this.authService.signin(user)
            .subscribe(function (data) {
            _this.router.navigateByUrl('');
        }, function (error) {
            console.log(JSON.parse(error["_body"]));
            alert(JSON.parse(error["_body"]).error);
        });
        this.myForm.reset();
    };
    SigninComponent.prototype.ngOnInit = function () {
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    };
    SigninComponent.prototype.logout = function () {
        console.log("in logout");
        this.authService.logout().subscribe(function (data) {
            console.log(data);
        });
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Reset Css */\n\nbody{\n  background-color: #666;\n}\n\nhtml, body, div, form, input, label, ul, li, h1, h2, p{\n  margin: 0;\n  padding: 0;\n\tbox-sizing: border-box; }\n\nul, li{\n\tlist-style: none;\n}\n\nimg{\n\tborder: 0;\n}\n\n/* css */\n\nhtml, body{\n\tfont-family: 'Open Sans', sans-serif;\n  background:black;\n}\n\n/* signup form */\n\n/* center css */\n\n.main{\n\tdisplay: table;\n\twidth: 100%;\n  height: 1000px;\n  background-image: url('signupback.jpg');\n  background-size: cover;\n}\n\n.container{\n\tdisplay: table-cell;\n\ttext-align: center;\n\tvertical-align: middle\n}\n\n/* signup */\n\n.signup{\n\tbackground: #FFF;\n\tmax-width: 40%;\n\tmargin: 0 auto;\n\tposition: relative;\n\tpadding: 60px 0;\n\tbackground: linear-gradient(0deg, rgba(53,52,55,0.7), rgba(18,17,26,0.7));\n\tbox-shadow: 0 6px 12px rgba(0, 0, 0, 0.053), 0 10px 40px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  \n}\n\n.signup:after{\n\tcontent: \" \";\n\tdisplay: table;\n\tclear: both;\n}\n\n/* from */\n\n.signup .form, \n.signup .features{\n\tdisplay: inline-block;\n\tfloat: left;\n\tposition: relative;\n\ttext-align: left;\n}\n\n.signup .form{\n\twidth: 70%;\n\tbackground: #fff;\n\tleft: -100px;\n\tbox-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.1);\n\tpadding: 40px 45px;\n\tborder-radius: 4px;\n\tz-index: 2\n}\n\n.signup .features{\n\twidth: 30%;\n\tleft: -80px\n}\n\n/* form */\n\n.signup h1{\n\tfont-size: 36px;\n}\n\n.signup p{\n\tfont-size: 16px;\n\tcolor: #666;\n\tfont-weight: 300;\n\tpadding: 15px 0;\n}\n\n.signup label{\n\tdisplay: block;\n}\n\n.signup form{\n\tmargin-top: 15px;\n}\n\n.signup input{\n\twidth: 100%;\n\theight: 45px;\n\tpadding: 0 35px;\n\tbordr-radius: 2px;\n\tmargin-bottom: 10px;\n\tborder: 1.5px solid #d0d0d0;\n\tfont-family: 'Open Sans', sans-serif;\n}\n\n.signup input.email{\n\tbackground: url(https://res.cloudinary.com/fazurrehman/image/upload/v1485168692/dailyui/email.png) left 10px center no-repeat;\n}\n\n.signup input.password{\n\tbackground: url(https://res.cloudinary.com/fazurrehman/image/upload/v1485168692/dailyui/password.png) left 5px center no-repeat;\n}\n\n.signup input[type=submit]{\n\ttext-transform: uppercase;\n\tfont-weight: 700;\n\tborder: 0;\n\tmargin-top: 15px;\n\tbackground-image: linear-gradient(-255deg, #63C9F0 0%, #3DA2DF 80%, #3498DB 100%);\n\tbox-shadow: 0 10px 20px rgba(99, 201, 240, 0.1), 0 14px 56px rgba(99, 201, 240, 0.024);\n\tcolor: #fff;\n\n}\n\n/* features */\n\n.features{\n\tpadding-top: 15px;\n}\n\n.features h3{\n\tfont-size: 28px;\n\tcolor: #fff;\n\tfont-weight: 600\n}\n\n.features li{\n\tfont-weight: 100;\n\tfont-size: 16px;\n\tcolor: #fff;\n\tpadding-bottom: 15px;\n\tbackground: url(https://res.cloudinary.com/fazurrehman/image/upload/v1485170272/dailyui/check.png) left top no-repeat;\n\tpadding-left: 30px;\n\tmargin-bottom: 5px;\n}\n\n/* plan */\n\n.plan{\n\tposition: absolute;\n\tbottom: 0;\n\tright: -130px;\n\tz-index: 1\n}\n\nform input[type=\"submit\"]:disabled {\n  background: #dddddd;\n}\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"container\">\n    <div class=\"signup\">\n      <div class=\"form\">\n        <h1>Sign up</h1>\n        <p>Create your account to get free gift cards!\n          <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n            <label>\n              <input type=\"text\" placeholder=\"Enter Your Name\" class=\"name\" formControlName=\"name\" />\n            </label>\n            <label>\n              <input type=\"email\" placeholder=\"Enter Your Email\" class=\"email\" formControlName=\"email\" />\n            </label>\n            <label>\n              <input type=\"password\" placeholder=\"Enter Your Password\" class=\"password\" formControlName=\"password\" />\n            </label>\n            <label>\n              <input type=\"text\" placeholder=\"Enter Your college\" class=\"college\" formControlName=\"college\" />\n            </label>\n            <label>\n              <input type=\"text\" placeholder=\"Enter Your Address\" class=\"address\" formControlName=\"address\" />\n            </label>\n            <label>\n              <input type=\"text\" placeholder=\"Enter Your Phone Number\" class=\"phonenumber\" formControlName=\"phoneNumber\" />\n            </label>\n            <label>\n              <input type=\"submit\" value=\"Create Account\" [disabled]=\"!myForm.valid\" />\n            </label>\n          </form>\n      </div>\n      <div class=\"features\">\n        <h3>Features</h3>\n        <ul>\n          <li>100% Free Signup </li>\n          <li>Buy Books At cheaper price</li>\n          <li>Sell Your Old Books</li>\n          <li>Contact with the seller</li>\n        </ul>\n      </div>\n\n      <div class=\"plan\">\n        <img src=\"https://res.cloudinary.com/fazurrehman/image/upload/v1484818922/dailyui/send-msg.png\" alt=\"hi your welcome to sign up! get free gift cards here!\"\n        />\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.model */ "./src/app/user.model.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new _user_model__WEBPACK_IMPORTED_MODULE_2__["User"](this.myForm.value.email, this.myForm.value.password, this.myForm.value.name, this.myForm.value.college, this.myForm.value.address, this.myForm.value.phoneNumber);
        console.log(user);
        this.authService.signup(user)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigateByUrl('/home/signin');
        }, function (error) {
            alert(JSON.parse(error["_body"]).error[0].message);
        });
        this.myForm.reset();
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            college: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user.model.ts":
/*!*******************************!*\
  !*** ./src/app/user.model.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(email, password, name, college, address, phoneNumber) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.college = college;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/wishlist.service.ts":
/*!*************************************!*\
  !*** ./src/app/wishlist.service.ts ***!
  \*************************************/
/*! exports provided: WishlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistService", function() { return WishlistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WishlistService = /** @class */ (function () {
    function WishlistService(http) {
        this.http = http;
    }
    WishlistService.prototype.addItem = function (product) {
        return this.http.post('/api/wishlists', { product: product });
    };
    WishlistService.prototype.getItem = function () {
        return this.http.get('/api/wishlists');
    };
    WishlistService.prototype.removeItem = function (item) {
        return this.http.post('/api/wishlists/remove', { item: item });
    };
    WishlistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], WishlistService);
    return WishlistService;
}());



/***/ }),

/***/ "./src/app/wishlist/wishlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Droid+Serif:400,400italic|Montserrat:400,700);\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n}\nhtml {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ncaption, th, td {\n  text-align: left;\n  font-weight: normal;\n  vertical-align: middle;\n}\nq, blockquote {\n  quotes: none;\n}\nq:before, q:after, blockquote:before, blockquote:after {\n  content: \"\";\n  content: none;\n}\na img {\n  border: none;\n}\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {\n  display: block;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  color: #333;\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Droid Serif\", serif;\n}\nimg {\n  max-width: 100%;\n}\n.cf:before, .cf:after {\n  content: \" \";\n  display: table;\n}\n.cf:after {\n  clear: both;\n}\n.cf {\n  *zoom: 1;\n}\n.wrap {\n  width: 75%;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 5% 0;\n  margin-bottom: 5em;\n}\n.projTitle {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: bold;\n  text-align: center;\n  font-size: 2em;\n  padding: 1em 0;\n  border-bottom: 1px solid #dadada;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n}\n.projTitle span {\n  font-family: \"Droid Serif\", serif;\n  font-weight: normal;\n  font-style: italic;\n  text-transform: lowercase;\n  color: #777;\n}\n.heading {\n  padding: 1em 0;\n  border-bottom: 1px solid #D0D0D0;\n}\n.heading h1 {\n  font-family: \"Droid Serif\", serif;\n  font-size: 2em;\n  float: left;\n}\n.heading a.continue:link, .heading a.continue:visited {\n  text-decoration: none;\n  font-family: \"Montserrat\", sans-serif;\n  letter-spacing: -.015em;\n  font-size: .75em;\n  padding: 1em;\n  color: #fff;\n  background: #82ca9c;\n  font-weight: bold;\n  border-radius: 50px;\n  float: right;\n  text-align: right;\n  transition: all 0.25s linear;\n}\n.heading a.continue:after {\n  content: \"\\276f\";\n  padding: .5em;\n  position: relative;\n  right: 0;\n  transition: all 0.15s linear;\n}\n.heading a.continue:hover, .heading a.continue:focus, .heading a.continue:active {\n  background: #f69679;\n}\n.heading a.continue:hover:after, .heading a.continue:focus:after, .heading a.continue:active:after {\n  right: -10px;\n}\n.tableHead {\n  display: table;\n  width: 100%;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: .75em;\n}\n.tableHead li {\n  display: table-cell;\n  padding: 1em 0;\n  text-align: center;\n}\n.tableHead li.prodHeader {\n  text-align: left;\n}\n.cart {\n  padding: 1em 0;\n}\n.cart .items {\n  display: block;\n  width: 100%;\n  padding: 1.5em;\n  border-bottom: 1px solid #fafafa;\n}\n.cart .items.even {\n  background: #fafafa;\n}\n.cart .items .infoWrap {\n  display: table;\n  width: 100%;\n}\n.cart .items .cartSection {\n  display: table-cell;\n  vertical-align: middle;\n}\n.cart .items .cartSection .itemNumber {\n  font-size: .75em;\n  color: #777;\n  margin-bottom: .5em;\n}\n.cart .items .cartSection h3 {\n  font-size: 1em;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: .025em;\n}\n.cart .items .cartSection p {\n  display: inline-block;\n  font-size: .85em;\n  color: #777777;\n  font-family: \"Montserrat\", sans-serif;\n}\n.cart .items .cartSection p .quantity {\n  font-weight: bold;\n  color: #333;\n}\n.cart .items .cartSection p.stockStatus {\n  color: #82CA9C;\n  font-weight: bold;\n  padding: .5em 0 0 1em;\n  text-transform: uppercase;\n}\n.cart .items .cartSection p.stockStatus.out {\n  color: #F69679;\n}\n.cart .items .cartSection .itemImg {\n  width: 4em;\n  float: left;\n}\n.cart .items .cartSection.qtyWrap, .cart .items .cartSection.prodTotal {\n  text-align: center;\n}\n.cart .items .cartSection.qtyWrap p, .cart .items .cartSection.prodTotal p {\n  font-weight: bold;\n  font-size: 1.25em;\n}\n.cart .items .cartSection input.qty {\n  width: 2em;\n  text-align: center;\n  font-size: 1em;\n  padding: .25em;\n  margin: 1em .5em 0 0;\n}\n.cart .items .cartSection .itemImg {\n  width: 8em;\n  display: inline;\n  padding-right: 1em;\n}\n.special {\n  display: block;\n  font-family: \"Montserrat\", sans-serif;\n}\n.special .specialContent {\n  padding: 1em 1em 0;\n  display: block;\n  margin-top: .5em;\n  border-top: 1px solid #dadada;\n}\n.special .specialContent:before {\n  content: \"\\21b3\";\n  font-size: 1.5em;\n  margin-right: 1em;\n  color: #6f6f6f;\n  font-family: helvetica, arial, sans-serif;\n}\na.remove {\n  text-decoration: none;\n  font-family: \"Montserrat\", sans-serif;\n  color: #ffffff;\n  font-weight: bold;\n  background: #e0e0e0;\n  padding: .5em;\n  font-size: .75em;\n  display: inline-block;\n  border-radius: 100%;\n  line-height: .85;\n  transition: all 0.25s linear;\n}\na.remove:hover {\n  background: #f30;\n}\n.promoCode {\n  border: 2px solid #efefef;\n  float: left;\n  width: 35%;\n  padding: 2%;\n}\n.promoCode label {\n  display: block;\n  width: 100%;\n  font-style: italic;\n  font-size: 1.15em;\n  margin-bottom: .5em;\n  letter-spacing: -.025em;\n}\n.promoCode input {\n  width: 85%;\n  font-size: 1em;\n  padding: .5em;\n  float: left;\n  border: 1px solid #dadada;\n}\n.promoCode input:active, .promoCode input:focus {\n  outline: 0;\n}\n.promoCode a.btn {\n  float: left;\n  width: 15%;\n  padding: .75em 0;\n  border-radius: 0 1em 1em 0;\n  text-align: center;\n  border: 1px solid #82ca9c;\n}\n.promoCode a.btn:hover {\n  border: 1px solid #f69679;\n  background: #f69679;\n}\n.btn:link, .btn:visited {\n  text-decoration: none;\n  font-family: \"Montserrat\", sans-serif;\n  letter-spacing: -.015em;\n  font-size: 1em;\n  padding: 1em 3em;\n  color: #fff;\n  background: #82ca9c;\n  font-weight: bold;\n  border-radius: 50px;\n  float: right;\n  text-align: right;\n}\n.btn:after {\n  content: \"\\276f\";\n  padding: .5em;\n  right: 0;\n}\n.btn{\n    right:0px; \n    padding-left: 10px; \n    height: 50px; \n    background-color: #d43f3a;\n    border: none;\n    border-radius: 50px;\n    color: white;\n    font-weight: bold;\n    font-size: 20px;\n}\n.btn:hover, .btn:focus, .btn:active {\n  background: #db4545;\n  cursor: pointer;\n}\n.btn:hover:after, .btn:focus:after, .btn:active:after {\n  right: -10px;\n}\n.promoCode .btn {\n  font-size: .85em;\n  padding: .5em 2em;\n}\n/* TOTAL AND CHECKOUT  */\n.subtotal {\n  float: right;\n  width: 35%;\n}\n.subtotal .totalRow {\n  padding: .5em;\n  text-align: right;\n}\n.subtotal .totalRow.final {\n  font-size: 1.25em;\n  font-weight: bold;\n}\n.subtotal .totalRow span {\n  display: inline-block;\n  padding: 0 0 0 1em;\n  text-align: right;\n}\n.subtotal .totalRow .label {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: .85em;\n  text-transform: uppercase;\n  color: #777;\n}\n.subtotal .totalRow .value {\n  letter-spacing: -.025em;\n  width: 35%;\n}\n@media only screen and (max-width: 39.375em) {\n  .wrap {\n    width: 98%;\n    padding: 2% 0;\n  }\n\n  .projTitle {\n    font-size: 1.5em;\n    padding: 10% 5%;\n  }\n\n  .heading {\n    padding: 1em;\n    font-size: 90%;\n  }\n\n  .cart .items .cartSection {\n    width: 90%;\n    display: block;\n    float: left;\n  }\n  .cart .items .cartSection.qtyWrap {\n    width: 10%;\n    text-align: center;\n    padding: .5em 0;\n    float: right;\n  }\n  .cart .items .cartSection.qtyWrap:before {\n    content: \"QTY\";\n    display: block;\n    font-family: \"Montserrat\", sans-serif;\n    padding: .25em;\n    font-size: .75em;\n  }\n  .cart .items .cartSection.prodTotal, .cart .items .cartSection.removeWrap {\n    display: none;\n  }\n  .cart .items .cartSection .itemImg {\n    width: 25%;\n  }\n\n  .promoCode, .subtotal {\n    width: 100%;\n  }\n\n  a.btn.continue {\n    width: 100%;\n    text-align: center;\n  }\n}\n"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap cf\">\n  <h1 class=\"projTitle\">Your Wishlist</h1>\n  <div class=\"heading cf\" style=\"display:flex;justify-content:space-between;\">\n    <h1>Your Items</h1>\n    <button class=\"btn btn-danger\" style=\"background-color: cadetblue\" (click)=\"home()\">\n      Back\n    </button>\n  </div>\n  <h2 *ngIf=\"wishlist.length < 1\" style=\"font-weight: bold;font-size: 50px;padding-top: 20px;margin-left: 20px;\">Your Wishlist Is Empty</h2>\n  <div class=\"cart\" *ngIf=\"wishlist.length>0\">\n    <ul class=\"cartWrap\" id=\"cart_detail\">\n      <li class=\"items odd\" *ngFor=\"let item of wishlist\">\n        <div class=\"infoWrap\">\n          <div class=\"cartSection\">\n            <img src=\"http://localhost:3000/{{item.image}}\" alt=\"\" class=\"itemImg\" />\n            <h3>{{item.bookname}}</h3>\n            <p class=\"itemNumber\" style=\"font-size: 15px;\">BY {{item.authorname}}</p>\n            <h4>{{item.price}} RS</h4>\n          </div>\n          <div class=\"prodTotal cartSection\">\n            \n          </div>\n          <div class=\"cartSection removeWrap\">\n              <button class=\"btn btn-danger\" style=\"border-radius: 20px;\" (click)=\"remove(item)\">\n                  X\n                </button>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.ts ***!
  \************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wishlist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wishlist.service */ "./src/app/wishlist.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(route, wishlistservice) {
        this.route = route;
        this.wishlistservice = wishlistservice;
        this.wishlist = [];
    }
    WishlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wishlistservice.getItem()
            .subscribe(function (data) {
            console.log(data);
            _this.wishlist = JSON.parse(data["_body"]);
        });
        console.log("yo", this.wishlist);
    };
    WishlistComponent.prototype.home = function () {
        this.route.navigate(['listing']);
    };
    WishlistComponent.prototype.remove = function (item) {
        var _this = this;
        this.wishlistservice.removeItem(item)
            .subscribe(function (data) {
            alert("Item Removed Successfully");
            _this.wishlistservice.getItem()
                .subscribe(function (data) {
                console.log(data);
                _this.wishlist = JSON.parse(data["_body"]);
            });
        }, function (error) {
            alert("Cannot be removed");
        });
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.css */ "./src/app/wishlist/wishlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _wishlist_service__WEBPACK_IMPORTED_MODULE_1__["WishlistService"]])
    ], WishlistComponent);
    return WishlistComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ankit/Desktop/bookstore-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map