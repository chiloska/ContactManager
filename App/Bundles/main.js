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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_components_index_home_index_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/components/index-home/index-home.component */ "./src/app/home/components/index-home/index-home.component.ts");
/* harmony import */ var _home_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/components/login/login.component */ "./src/app/home/components/login/login.component.ts");
/* harmony import */ var _home_components_email_email_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/components/email/email.component */ "./src/app/home/components/email/email.component.ts");
/* harmony import */ var _home_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/components/signup/signup.component */ "./src/app/home/components/signup/signup.component.ts");
/* harmony import */ var _dashboard_components_index_dash_index_dash_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/components/index-dash/index-dash.component */ "./src/app/dashboard/components/index-dash/index-dash.component.ts");
/* harmony import */ var _services_accces_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/accces-guard.service */ "./src/app/services/accces-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _home_components_index_home_index_home_component__WEBPACK_IMPORTED_MODULE_2__["IndexHomeComponent"] },
    { path: 'login', component: _home_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _home_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'email', component: _home_components_email_email_component__WEBPACK_IMPORTED_MODULE_4__["EmailComponent"] },
    { path: 'dashboard', component: _dashboard_components_index_dash_index_dash_component__WEBPACK_IMPORTED_MODULE_6__["IndexDashComponent"], canActivate: [_services_accces_guard_service__WEBPACK_IMPORTED_MODULE_7__["AcccesGuardService"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
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

module.exports = "<router-outlet></router-outlet>\n"

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
/*! exports provided: config, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_accces_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/accces-guard.service */ "./src/app/services/accces-guard.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var config = {
    apiKey: "AIzaSyDMOMlwMEae32k3gb1Q0p3HFPGmyL5p6fU",
    authDomain: "learfirebase101.firebaseapp.com",
    databaseURL: "https://learfirebase101.firebaseio.com",
    projectId: "learfirebase101",
    storageBucket: "learfirebase101.appspot.com",
    messagingSenderId: "536944026455"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            ],
            imports: [
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_8__["DashboardModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(config), angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _services_accces_guard_service__WEBPACK_IMPORTED_MODULE_11__["AcccesGuardService"], _services_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/components/index-dash/index-dash.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/components/index-dash/index-dash.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-avatar {\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 24px;\r\n  }\r\n\r\n  .page-content{height:100vh; background:#ff0000;}"

/***/ }),

/***/ "./src/app/dashboard/components/index-dash/index-dash.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/components/index-dash/index-dash.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header page-content\">\n  <header class=\"demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600\">\n    <div class=\"mdl-layout__header-row\">\n      <span class=\"mdl-layout-title\">Home</span>\n      <div class=\"mdl-layout-spacer\"></div>\n      <label class=\"mdl-button mdl-js-button mdl-button--icon\" for=\"search\">\n        <i class=\"material-icons\">search</i>\n      </label>\n      <div class=\"\">\n        <input class=\"mdl-textfield__input\" type=\"text\" id=\"search\">\n        <label class=\"mdl-textfield__label\" for=\"search\" aria-placeholder=\"Find Contact\"></label>\n      </div>\n      <button (click)=\"newContactDialog()\" class=\"mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored\">\n        <i class=\"material-icons\">add</i>\n      </button>\n    </div>\n  </header>\n  <div class=\"demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50\">\n    <header class=\"demo-drawer-header\" style=\"margin-top: 20px; margin-bottom: 20px; text-align: center;\">\n      <img src=\"{{user.photoURL}}\" class=\"demo-avatar\">\n      <div class=\"demo-avatar-dropdown\">\n        <span>{{user.email}}</span>\n        <div class=\"mdl-layout-spacer\"></div>\n      </div>\n    </header>\n    <nav class=\"demo-navigation mdl-navigation mdl-color--blue-grey-800\">\n      <a class=\"mdl-navigation__link\" routerLink=\"/dashboard\">\n        <i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">home</i>Home</a>\n      <a class=\"mdl-navigation__link\" (click)=\"logout()\">\n        <i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">settings_power</i>Logout</a>\n    </nav>\n  </div>\n  <main class=\"mdl-layout__content mdl-color--grey-100 page-content\">\n    <div class=\"mdl-grid demo-content\">\n      <div *ngFor=\"let contact of contacts\" class=\"demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing\">\n        <div class=\"demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop\">\n          <div class=\"mdl-card__title mdl-card--expand mdl-color--teal-300\">\n            <div class=\"mdl-grid\" style=\"margin: 0px;width: 100%;\">\n              <div class=\"mdl-cell--4-col\">\n                <img class=\"demo-avatar\" src=\"http://firstaidertraining.org.uk/wp-content/uploads/2017/09/anon.png\" />\n              </div>\n              <div class=\"mdl-cell--8-col\">\n                <h4 class=\"mdl-card__title-text\">{{contact.firstName}} {{contact.lastName}}</h4>\n              </div>\n            </div>\n          </div>\n          <div class=\"mdl-card__supporting-text mdl-color-text--grey-600\">\n            <div *ngFor=\"let phone of contact.phones; let i=index\">\n              <div class=\"mdl-grid\">\n                <div class=\"mdl-cell mdl-cell--8-col\">\n                  <i></i>Phone: {{phone.number}}\n                </div>\n                <div class=\"mdl-cell mdl-cell--4-col\">\n                  <i (click)=\"updatePhoneDialog(phone)\" class=\"material-icons\" style=\"font-size: 18px; text-align: right; padding-right: 10px;\">edit</i>\n                  <i (click)=\"deletePhoneDialog(phone, i)\" class=\"material-icons\" style=\"font-size: 18px; text-align: right;\">remove_circle_outline</i>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button (click)=\"editContactDialog(contact.contactId)\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect\">Edit</button>\n            <button (click)=\"deleteContactDialog(contact.contactId)\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect\">Delete</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n\n<div id=\"demo-snackbar-example\" class=\"mdl-js-snackbar mdl-snackbar\">\n  <div class=\"mdl-snackbar__text\">{{snackBarMess}}</div>\n  <button class=\"mdl-snackbar__action\" type=\"button\"></button>\n</div>\n\n<dialog class=\"mdl-dialog\" id=\"dialogEdit\">\n  <form #newForm=\"ngForm\" (ngSubmit)=\"editContact(newForm)\">\n    <h4 class=\"mdl-dialog__title\">Update Info</h4>\n    <div class=\"mdl-dialog__content\">\n      <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n        <input placeholder=\"First Name\" class=\"mdl-textfield__input\" type=\"text\" id=\"newFirstName\" [(ngModel)]=\"newContact.firstName\"\n          name=\"firstName\" required>\n      </div>\n      <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n        <input placeholder=\"Last Name\" class=\"mdl-textfield__input\" type=\"text\" id=\"newLastName\" [(ngModel)]=\"newContact.lastName\"\n          name=\"lastName\" required>\n      </div>\n    </div>\n    <div class=\"mdl-dialog__actions\">\n      <button type=\"submit\" class=\"mdl-button\" id=\"save\">Update</button>\n      <button type=\"button\" class=\"mdl-button close\" id=\"cancelNew\" (click)=\"cancelDialog('update')\">Cancel</button>\n    </div>\n  </form>\n</dialog>\n\n<dialog class=\"mdl-dialog\" id=\"dialogNew\">\n  <form #newForm=\"ngForm\" (ngSubmit)=\"createContact(newForm)\">\n    <h4 class=\"mdl-dialog__title\">New Contact</h4>\n    <div class=\"mdl-dialog__content\">\n      <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n        <input placeholder=\"First Name\" class=\"mdl-textfield__input\" type=\"text\" id=\"newFirstName\" [(ngModel)]=\"newContact.firstName\"\n          name=\"firstName\" required>\n      </div>\n      <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n        <input placeholder=\"Last Name\" class=\"mdl-textfield__input\" type=\"text\" id=\"newLastName\" [(ngModel)]=\"newContact.lastName\"\n          name=\"lastName\" required>\n      </div>\n      <div *ngFor=\"let newPhone of newContact.phones; let i=index\" class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n        {{newContact.phones[i].number}}\n        <a style=\"margin-left: 70px;\" (click)=\"removeNumber(i)\" class=\"mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab\">\n          <i class=\"material-icons\">clear</i>\n        </a>\n      </div>\n      <div>\n        <input style=\"margin-left: 50px; width: 180px;\" placeholder=\"123-123-1234\" class=\"mdl-textfield__input\" type=\"text\" [(ngModel)]=\"newPhone.number\"\n          name=\"number\" pattern=\"\\d{3}[\\-]\\d{3}[\\-]\\d{4}\" required>\n        <a (click)=\"addNumber(newPhone.number)\" class=\"mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab\">\n          <i class=\"material-icons\">add</i>\n        </a>\n      </div>\n    </div>\n    <div class=\"mdl-dialog__actions\">\n      <button type=\"submit\" class=\"mdl-button\" id=\"save\">Save</button>\n      <button type=\"button\" class=\"mdl-button close\" id=\"cancelNew\" (click)=\"cancelDialog('new')\">Cancel</button>\n    </div>\n  </form>\n</dialog>\n\n<dialog class=\"mdl-dialog\" id=\"dialogUpdatePhone\">\n  <form #newForm=\"ngForm\" (ngSubmit)=\"updatePhone(newForm)\">\n    <h4 class=\"mdl-dialog__title\">Update Phone</h4>\n    <div class=\"mdl-dialog__content\">\n      <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n        <input style=\"margin-left: 50px; width: 180px;\" placeholder=\"123-123-1234\" class=\"mdl-textfield__input\" type=\"text\" [(ngModel)]=\"updatePhoneRecord.number\"\n          name=\"number\" pattern=\"\\d{3}[\\-]\\d{3}[\\-]\\d{4}\" required>\n      </div>\n    </div>\n    <div class=\"mdl-dialog__actions\">\n      <button type=\"submit\" class=\"mdl-button\" id=\"save\">Update</button>\n      <button type=\"button\" class=\"mdl-button close\" id=\"cancelNew\" (click)=\"cancelDialog('phoneUpdate')\">Cancel</button>\n    </div>\n  </form>\n</dialog>\n\n<dialog class=\"mdl-dialog\" id=\"dialogDeletePhone\">\n  <h4 class=\"mdl-dialog__title\">Are you sure?</h4>\n  <div class=\"mdl-dialog__content\">\n    <p style=\"text-align: center\">\n      Agree to delete the Phone Number\n    </p>\n  </div>\n  <div class=\"mdl-dialog__actions\">\n    <button type=\"button\" class=\"mdl-button\" (click)=\"deletePhoneNumber()\">Agree</button>\n    <button type=\"button\" class=\"mdl-button close\" (click)=\"cancelDialog('phoneDelete')\">Disagree</button>\n  </div>\n</dialog>\n\n<dialog class=\"mdl-dialog\" id=\"dialogDeleteContact\">\n  <h4 class=\"mdl-dialog__title\">Are you sure?</h4>\n  <div class=\"mdl-dialog__content\">\n    <p style=\"text-align: center\">\n      We will delete this contact from your list. After you Agree, there's no turn back!\n    </p>\n  </div>\n  <div class=\"mdl-dialog__actions\">\n    <button type=\"button\" class=\"mdl-button\" (click)=\"deleteContact()\">Agree</button>\n    <button type=\"button\" class=\"mdl-button close\" (click)=\"cancelDialog('contactDelete')\">Disagree</button>\n  </div>\n</dialog>"

/***/ }),

/***/ "./src/app/dashboard/components/index-dash/index-dash.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/components/index-dash/index-dash.component.ts ***!
  \*************************************************************************/
/*! exports provided: IndexDashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexDashComponent", function() { return IndexDashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IndexDashComponent = /** @class */ (function () {
    function IndexDashComponent(_auth, fbAuth, dataService) {
        this._auth = _auth;
        this.fbAuth = fbAuth;
        this.dataService = dataService;
        this.contacts = new Array();
        this.newPhone = { number: '' };
        this.newContact = { UserUid: '', firstName: '', lastName: '', phones: [] };
        this.updatePhoneRecord = { number: '' };
        this.snackBarMess = '';
        this.user = {
            name: 'No Name',
            email: 'example@example.com',
            photoURL: 'http://firstaidertraining.org.uk/wp-content/uploads/2017/09/anon.png'
        };
    }
    IndexDashComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fbAuth.user.subscribe(function (fbuser) {
            _this.user = {
                id: fbuser.uid,
                name: fbuser.displayName || 'No Name',
                email: fbuser.email,
                photoURL: fbuser.photoURL || 'http://firstaidertraining.org.uk/wp-content/uploads/2017/09/anon.png'
            };
            _this.getdata();
        }, function (err) {
            alert('Error to retrieve data');
        });
    };
    IndexDashComponent.prototype.logout = function () {
        this._auth.signOut();
    };
    IndexDashComponent.prototype.newContactDialog = function () {
        var dialog = document.querySelector('#dialogNew');
        dialog.showModal();
    };
    IndexDashComponent.prototype.createContact = function (newForm) {
        var _this = this;
        this.newContact.UserUid = this.user.id;
        console.log(this.newContact);
        this.dataService.createContact(this.newContact)
            .then(function (res) {
            _this.contacts.push(res);
            newForm.reset();
            _this.newContact.phones = [];
            _this.cancelDialog('new');
        })
            .catch(function (err) {
            console.error(err);
            alert('Unable to Save Contact');
        });
    };
    IndexDashComponent.prototype.editContactDialog = function (contactId) {
        this.newContact = this.contacts.find(function (x) { return x.contactId == contactId; });
        var dialog = document.querySelector('#dialogEdit');
        dialog.showModal();
    };
    IndexDashComponent.prototype.editContact = function (updateForm) {
        var _this = this;
        console.log(this.newContact);
        this.dataService.updateContact(this.newContact)
            .then(function (res) {
            console.log(res);
            _this.cancelDialog('update');
        })
            .catch(function (err) {
            console.error(err);
            alert('Unable to Update User');
        });
    };
    IndexDashComponent.prototype.deleteContactDialog = function (contactId) {
        this.contactId = contactId;
        var dialog = document.querySelector('#dialogDeleteContact');
        dialog.showModal();
    };
    IndexDashComponent.prototype.deleteContact = function () {
        var _this = this;
        this.dataService.deleteContact(this.contactId)
            .then(function (res) {
            _this.getdata();
            _this.contactId = null;
            _this.cancelDialog('contactDelete');
        })
            .catch(function (err) {
            console.log(err);
            _this.contactId = null;
            _this.cancelDialog('contactDelete');
            alert('Unable to Delete Contact');
        });
    };
    IndexDashComponent.prototype.updatePhoneDialog = function (phone) {
        this.updatePhoneRecord = phone;
        var dialog = document.querySelector('#dialogUpdatePhone');
        dialog.showModal();
    };
    IndexDashComponent.prototype.updatePhone = function () {
        var _this = this;
        this.dataService.updatePhone(this.updatePhoneRecord)
            .then(function (res) {
            console.log(res);
            _this.updatePhoneRecord = { number: '' };
            _this.cancelDialog('phoneUpdate');
        })
            .catch(function (err) {
            console.log(err);
            alert('Unable to Update Phone');
        });
    };
    IndexDashComponent.prototype.deletePhoneDialog = function (phone) {
        this.updatePhoneRecord = phone;
        var dialog = document.querySelector('#dialogDeletePhone');
        dialog.showModal();
    };
    IndexDashComponent.prototype.deletePhoneNumber = function () {
        var _this = this;
        this.dataService.deletePhoneNumber(this.updatePhoneRecord)
            .then(function (res) {
            _this.getdata();
            _this.cancelDialog('phoneDelete');
        })
            .catch(function (err) {
            console.error(err);
            alert('Unable to delete the Phone Number');
        });
    };
    IndexDashComponent.prototype.cancelDialog = function (name) {
        if (name == 'new') {
            var dialog = document.querySelector('#dialogNew');
            dialog.close();
            this.newContact = { UserUid: '', firstName: '', lastName: '', phones: [] };
        }
        else if (name == 'phoneUpdate') {
            var dialog = document.querySelector('#dialogUpdatePhone');
            dialog.close();
        }
        else if (name == 'phoneDelete') {
            var dialog = document.querySelector('#dialogDeletePhone');
            dialog.close();
            this.updatePhoneRecord = { number: '' };
        }
        else if (name == 'contactDelete') {
            var dialog = document.querySelector('#dialogDeleteContact');
            dialog.close();
            this.newContact = { UserUid: '', firstName: '', lastName: '', phones: [] };
        }
        else {
            var dialog = document.querySelector('#dialogEdit');
            dialog.close();
            this.newContact = { UserUid: '', firstName: '', lastName: '', phones: [] };
        }
    };
    IndexDashComponent.prototype.addNumber = function (phone) {
        this.newContact.phones.push({ number: phone });
        this.newPhone.number = '';
    };
    IndexDashComponent.prototype.removeNumber = function (i) {
        this.newContact.phones.splice(i, 1);
    };
    IndexDashComponent.prototype.getdata = function () {
        var _this = this;
        this.dataService.getContacts(0, this.user.id).then(function (res) { return _this.contacts = res.json(); });
    };
    IndexDashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index-dash',
            template: __webpack_require__(/*! ./index-dash.component.html */ "./src/app/dashboard/components/index-dash/index-dash.component.html"),
            styles: [__webpack_require__(/*! ./index-dash.component.css */ "./src/app/dashboard/components/index-dash/index-dash.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], IndexDashComponent);
    return IndexDashComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_index_dash_index_dash_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/index-dash/index-dash.component */ "./src/app/dashboard/components/index-dash/index-dash.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [_components_index_dash_index_dash_component__WEBPACK_IMPORTED_MODULE_3__["IndexDashComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/home/components/email/email.component.css":
/*!***********************************************************!*\
  !*** ./src/app/home/components/email/email.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\r\n    background:white;\r\n    padding:3.5em;\r\n    width:400px;\r\n    position:fixed;\r\n    left:50%;\r\n    margin-left:-150px;\r\n}\r\n\r\n\r\n.material-icons.md-48 { font-size: 48px; }"

/***/ }),

/***/ "./src/app/home/components/email/email.component.html":
/*!************************************************************!*\
  !*** ./src/app/home/components/email/email.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--12-col\">\n    <div class=\"mdl-card mdl-shadow--2dp form-container\">\n      <a routerLink=\"/login\" id=\"goback\">Go back</a>\n      <br />\n      <div class=\"mdl-card__title\">\n        <h2 class=\"mdl-card__title-text\" style=\"font-size: 48px;\">\n          <i class=\"material-icons md-48\">\n            email\n          </i>\n          LOGIN\n        </h2>\n      </div>\n      <div class=\"mdl-card__supporting-text\">\n        <form #formData=\"ngForm\" (ngSubmit)=\"login(formData)\">\n          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n            <input placeholder=\"Email\" class=\"mdl-textfield__input\" type=\"text\" id=\"email\" (ngModel)=\"email\" name=\"email\" required>\n          </div>\n          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n            <input placeholder=\"Password\" class=\"mdl-textfield__input\" type=\"password\" id=\"password\" (ngModel)=\"password\" name=\"password\" required>\n          </div>\n          <input type=\"submit\" [disabled]=\"!formData.valid\" class=\"mdl-button mdl-js-button mdl-button--raised\">\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/components/email/email.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/components/email/email.component.ts ***!
  \**********************************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailComponent = /** @class */ (function () {
    function EmailComponent(_auth, router) {
        this._auth = _auth;
        this.router = router;
    }
    EmailComponent.prototype.ngOnInit = function () {
    };
    EmailComponent.prototype.login = function (formData) {
        var _this = this;
        console.log(formData);
        if (formData.valid) {
            console.log(formData.value);
            this._auth.emailLogin(formData.value)
                .then(function (success) {
                console.log(success);
                _this.router.navigate(['/dashboard']);
            })
                .catch(function (err) {
                if (err.code = 'auth/email-already-in-use') {
                    alert(err.message);
                    _this.form.reset();
                }
                console.log(err);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('formData'),
        __metadata("design:type", Object)
    ], EmailComponent.prototype, "form", void 0);
    EmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email',
            template: __webpack_require__(/*! ./email.component.html */ "./src/app/home/components/email/email.component.html"),
            styles: [__webpack_require__(/*! ./email.component.css */ "./src/app/home/components/email/email.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EmailComponent);
    return EmailComponent;
}());



/***/ }),

/***/ "./src/app/home/components/index-home/index-home.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/home/components/index-home/index-home.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 920px) {\r\n    #main{\r\n        margin-top: 35px;\r\n    }\r\n}\r\n\r\n.btn{\r\n    display: inline-block;\r\n    background-image: none;\r\n    background-color: transparent;\r\n    padding: 0.5rem 18px;\r\n    font-size: 20px;\r\n    border-color: black;\r\n    border-style: solid;\r\n    border-radius: 30px;\r\n    font-weight: 600;\r\n    border-width: 2px;\r\n    margin: 10px;\r\n}"

/***/ }),

/***/ "./src/app/home/components/index-home/index-home.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/home/components/index-home/index-home.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-layout mdl-js-layout\">\n  <header class=\"mdl-layout__header mdl-color--primary\">\n    <div class=\"mdl-layout__header-row\">\n      <span class=\"mdl-layout-title\">CRM</span>\n      <div class=\"mdl-layout-spacer\"></div>\n      <nav class=\"mdl-navigation\">\n        <a class=\"mdl-navigation__link\" routerLink=\"/login\">Login</a>\n        <a class=\"mdl-navigation__link\" routerLink=\"/signup\">Signup</a>\n      </nav>\n    </div>\n  </header>\n  <div class=\"mdl-layout__drawer\">\n    <span class=\"mdl-layout-title\">CRM</span>\n    <nav class=\"mdl-navigation\">\n      <a class=\"mdl-navigation__link\" routerLink=\"/login\">Login</a>\n      <a class=\"mdl-navigation__link\" routerLink=\"/signup\">Signup</a>\n    </nav>\n  </div>\n  <main class=\"mdl-layout__content\">\n    <div class=\"mdl-grid\">\n      <!--Landing page-->\n      <section id=\"main\" class=\"mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp\" style=\"padding-bottom: 30px;\">\n        <div>\n          <h1 style=\"text-align: center;\">CRM</h1>\n          <h4 style=\"text-align: center;\">Best App ever!!</h4>\n          <br/>\n          <div style=\"text-align: center!important\">\n            <a class=\"btn\" routerLink=\"/\">WATCH VIDEO</a>\n            <a class=\"btn\" routerLink=\"/signup\">SIGN IN</a>\n          </div>\n        </div>\n      </section>\n      <section class=\"mdl-cell mdl-cell--2-col\"></section>\n      <!--Product Information Section-->\n      <section id=\"info\" class=\"mdl-cell mdl-cell--8-col \" style=\"text-align: center!important\">\n        <h1 style=\"text-align: center;\">Let's talk product</h1>\n        <h5 style=\"text-align: center; color: #9A9A9A\">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful\n          information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button\n          if you want the user to see more.\n        </h5>\n      </section>\n      <!--Product Information Section-->\n      <section id=\"info1\" class=\"mdl-cell mdl-cell--12-col\">\n        <div class=\"mdl-grid\">\n          <div class=\"mdl-cell mdl-cell--3-col mdl-card mdl-shadow--2dp\">\n            <div class=\"description\">\n              <h4 class=\"info-title\" style=\"text-align: center\">Beautiful Gallery</h4>\n              <p style=\"text-align: center; color: #9A9A9A;font-size: 15px;\">Spend your time generating new ideas. You don't have to think of implementing.</p>\n              <a routerLink=\"/\" class=\"btn btn-link btn-danger\">See more</a>\n            </div>\n          </div>\n          <div class=\"mdl-cell mdl-cell--3-col mdl-card mdl-shadow--2dp\">\n            <div class=\"description\">\n              <h4 class=\"info-title\" style=\"text-align: center\">New Ideas</h4>\n              <p style=\"text-align: center; color: #9A9A9A;font-size: 15px\">Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>\n              <a routerLink=\"/\" class=\"btn btn-link btn-danger\">See more</a>\n            </div>\n          </div>\n          <div class=\"mdl-cell mdl-cell--3-col mdl-card mdl-shadow--2dp\">\n            <div class=\"description\">\n              <h4 class=\"info-title\" style=\"text-align: center\">Statistics</h4>\n              <p style=\"text-align: center; color: #9A9A9A;font-size: 15px\">Choose from a veriety of many colors resembling sugar paper pastels.</p>\n              <a routerLink=\"/\" class=\"btn btn-link btn-danger\">See more</a>\n            </div>\n          </div>\n          <div class=\"mdl-cell mdl-cell--3-col mdl-card mdl-shadow--2dp\">\n            <div class=\"description\">\n              <h4 class=\"info-title\" style=\"text-align: center\">Delightful design</h4>\n              <p style=\"text-align: center; color: #9A9A9A;font-size: 15px\">Find unique elightful designs related items directly from our sellers.</p>\n              <a routerLink=\"/\" class=\"btn btn-link btn-danger\" style=\"text-align: center!important\">See more</a>\n            </div>\n          </div>\n        </div>\n      </section>\n      <!--Contact Section-->\n      <section id=\"contact\" class=\"mdl-cell mdl-cell--12-col \">\n        <div class=\"mdl-grid\">\n          <div class=\"mdl-cell mdl-cell--4-col\"></div>\n          <div class=\"mdl-cell mdl-cell--4-col\">\n            <h1 class=\"text-align:center; color:#9A9A9A\">Keep in touch?</h1>\n            <div class=\"mdl-card mdl-shadow--2dp\">\n\n            </div>\n          </div>\n        </div>\n      </section>\n      <section id=\"footer\" class=\"mdl-cell mdl-cell--12-col\">\n        <footer class=\"mdl-mini-footer\">\n          <div class=\"mdl-mini-footer__left-section\">\n            <div class=\"mdl-logo\">Title</div>\n            <ul class=\"mdl-mini-footer__link-list\">\n              <li>\n                <a href=\"#\">Help</a>\n              </li>\n              <li>\n                <a href=\"#\">Privacy & Terms</a>\n              </li>\n            </ul>\n          </div>\n        </footer>\n      </section>\n\n    </div>\n  </main>\n</div>"

/***/ }),

/***/ "./src/app/home/components/index-home/index-home.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/home/components/index-home/index-home.component.ts ***!
  \********************************************************************/
/*! exports provided: IndexHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexHomeComponent", function() { return IndexHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexHomeComponent = /** @class */ (function () {
    function IndexHomeComponent() {
    }
    IndexHomeComponent.prototype.ngOnInit = function () {
        // var rellax = new Rellax('.rellax');
        // console.log(rellax)
    };
    IndexHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index-home',
            template: __webpack_require__(/*! ./index-home.component.html */ "./src/app/home/components/index-home/index-home.component.html"),
            styles: [__webpack_require__(/*! ./index-home.component.css */ "./src/app/home/components/index-home/index-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexHomeComponent);
    return IndexHomeComponent;
}());



/***/ }),

/***/ "./src/app/home/components/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/home/components/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\r\n    background:white;\r\n    padding:3.5em;\r\n    width:400px;\r\n    position:fixed;\r\n    left:50%;\r\n    margin-left:-150px;\r\n}\r\n\r\n.material-icons.md-48 { font-size: 48px; }\r\n\r\n.google {\r\n    border: 1px solid #95989A;\r\n    background-size: 25px;\r\n}\r\n\r\n.btnpadding{\r\n    margin: 15px;\r\n    width: 250px;\r\n}"

/***/ }),

/***/ "./src/app/home/components/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/home/components/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--12-col\">\n    <div class=\"mdl-card mdl-shadow--2dp form-container\">\n        <a routerLink=\"/\" id=\"goback\">Go back</a>\n        <br />\n      <div class=\"mdl-card__title\">\n        <h2 class=\"mdl-card__title-text\" style=\"font-size: 48px;\">\n          <i class=\"material-icons md-48\">\n            lock\n          </i>\n          LOGIN\n        </h2>\n      </div>\n      <div class=\"mdl-card__supporting-text\">\n        <button class=\"mdl-button mdl-js-button mdl-button--raised google btnpadding\" (click)=\"googleLogin()\">\n          <img style=\"width: 20px;height: 20px;\" src=\"https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png\"> Login with Google</button>\n        <button class=\"mdl-button mdl-js-button mdl-button--raised google btnpadding\" routerLink=\"/email\">\n          <i class=\"material-icons\">\n            email\n          </i> Login with Email</button>\n      </div>\n      <div style=\"text-align: center;\">\n          <a routerLink=\"/signup\" >Don't have an account?</a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_auth, router) {
        var _this = this;
        this._auth = _auth;
        this.router = router;
        this._auth.isLogginActive().subscribe(function (loggin) {
            console.log(loggin);
            if (loggin)
                _this.router.navigate(['/dashboard']);
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.googleLogin = function () {
        var _this = this;
        //console.log('Login')
        this._auth.googleLogin()
            .then(function (success) {
            console.log(success);
            _this.router.navigate(['/dashboard']);
        })
            .catch(function (err) {
            alert('Error to login');
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/home/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/home/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/home/components/signup/signup.component.css":
/*!*************************************************************!*\
  !*** ./src/app/home/components/signup/signup.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\r\n    background:white;\r\n    padding:3.5em;\r\n    width:400px;\r\n    position:fixed;\r\n    left:50%;\r\n    margin-left:-150px;\r\n}\r\n\r\n\r\n.material-icons.md-48 { font-size: 48px; }"

/***/ }),

/***/ "./src/app/home/components/signup/signup.component.html":
/*!**************************************************************!*\
  !*** ./src/app/home/components/signup/signup.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--12-col\">\n    <div class=\"mdl-card mdl-shadow--2dp form-container\">\n      <a routerLink=\"/login\" id=\"goback\">Go back</a>\n      <br />\n      <div class=\"mdl-card__title\">\n        <h2 class=\"mdl-card__title-text\" style=\"font-size: 48px;\">\n          <i class=\"material-icons md-48\">\n            email\n          </i>\n          SIGN UP\n        </h2>\n      </div>\n      <div class=\"mdl-card__supporting-text\">\n        <form #formData=\"ngForm\" (ngSubmit)=\"create(formData)\">\n          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n            <input placeholder=\"Email\" class=\"mdl-textfield__input\" type=\"text\" id=\"email\" (ngModel)=\"email\" name=\"email\" required>\n          </div>\n          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n            <input placeholder=\"Password\" class=\"mdl-textfield__input\" type=\"password\" id=\"password\" (ngModel)=\"password\" name=\"password\" required>\n          </div>\n          <input type=\"submit\" [disabled]=\"!formData.valid\" class=\"mdl-button mdl-js-button mdl-button--raised\">\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/components/signup/signup.component.ts":
/*!************************************************************!*\
  !*** ./src/app/home/components/signup/signup.component.ts ***!
  \************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
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
    function SignupComponent(_auth, fbAuth, router) {
        var _this = this;
        this._auth = _auth;
        this.fbAuth = fbAuth;
        this.router = router;
        this.fbAuth.user.subscribe(function (user) {
            console.log(user);
            if (user != null) {
                _this.router.navigate(['/dashboard']);
            }
        }, function (err) {
            console.log(err);
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.create = function (formData) {
        var _this = this;
        console.log(formData);
        if (formData.valid) {
            console.log(formData.value);
            this._auth.emailCreate(formData.value)
                .then(function (success) {
                console.log(success);
                _this.router.navigate(['/dashboard']);
            })
                .catch(function (err) {
                if (err.code = 'auth/email-already-in-use') {
                    alert(err.message);
                    _this.form.reset();
                }
                console.log(err);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('formData'),
        __metadata("design:type", Object)
    ], SignupComponent.prototype, "form", void 0);
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/home/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/home/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_index_home_index_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/index-home/index-home.component */ "./src/app/home/components/index-home/index-home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/home/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/home/components/signup/signup.component.ts");
/* harmony import */ var _components_email_email_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/email/email.component */ "./src/app/home/components/email/email.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_components_index_home_index_home_component__WEBPACK_IMPORTED_MODULE_4__["IndexHomeComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], _components_email_email_component__WEBPACK_IMPORTED_MODULE_7__["EmailComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/services/accces-guard.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/accces-guard.service.ts ***!
  \**************************************************/
/*! exports provided: AcccesGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcccesGuardService", function() { return AcccesGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AcccesGuardService = /** @class */ (function () {
    function AcccesGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AcccesGuardService.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.auth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (authState) { return !!authState; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (authenticated) {
            console.log(authenticated);
            if (!authenticated)
                _this.router.navigate(['/login']);
        }));
    };
    AcccesGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AcccesGuardService);
    return AcccesGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
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
    function AuthService(afAuth, afs, router) {
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
    }
    AuthService.prototype.isLogginActive = function () {
        var _this = this;
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (authState) { return !!authState; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (authenticated) {
            if (!authenticated)
                _this.router.navigate(['/login']);
        }));
    };
    AuthService.prototype.googleLogin = function () {
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
        return this.afAuth.auth.signInWithPopup(provider);
    };
    AuthService.prototype.emailCreate = function (user) {
        return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    };
    AuthService.prototype.emailLogin = function (user) {
        return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['/']);
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(_http) {
        this._http = _http;
    }
    DataService.prototype.getContacts = function (page, userId) {
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiServer + 'GetContacts/' + userId + '?page=' + page)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    DataService.prototype.getContact = function (id) {
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiServer + 'GetContact/' + id)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.createContact = function (contact) {
        return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiServer + 'CreateContact', contact)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.createNewPhone = function (phone) {
        return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiServer + 'AddPhoneNumber', phone)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.updateContact = function (contact) {
        return this._http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiServer + 'UpdateContactInfo/' + contact.contactId, contact)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.updatePhone = function (phone) {
        return this._http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiServer + 'UpdatePhoneNumber/' + phone.phoneId, phone)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.deleteContact = function (id) {
        return this._http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiServer + 'DeleteContact/' + id)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.deletePhoneNumber = function (phone) {
        return this._http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiServer + 'DeletePhone/' + phone.phoneId)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DataService);
    return DataService;
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
    production: false,
    apiServer: 'http://localhost:59108/api/contacts/'
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

module.exports = __webpack_require__(/*! C:\Users\lmerespi\source\repos\App\App\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map