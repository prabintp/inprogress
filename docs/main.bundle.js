webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./access-denied/access-denied.module": [
		"../../../../../src/app/access-denied/access-denied.module.ts",
		"access-denied.module"
	],
	"./accounts/accounts.module": [
		"../../../../../src/app/layout/accounts/accounts.module.ts",
		"common",
		"accounts.module"
	],
	"./blank-page/blank-page.module": [
		"../../../../../src/app/layout/blank-page/blank-page.module.ts",
		"blank-page.module"
	],
	"./bs-component/bs-component.module": [
		"../../../../../src/app/layout/bs-component/bs-component.module.ts",
		"common",
		"bs-component.module"
	],
	"./bs-element/bs-element.module": [
		"../../../../../src/app/layout/bs-element/bs-element.module.ts",
		"common",
		"bs-element.module"
	],
	"./category/category.module": [
		"../../../../../src/app/layout/category/category.module.ts",
		"common",
		"category.module"
	],
	"./charts/charts.module": [
		"../../../../../src/app/layout/charts/charts.module.ts",
		"charts.module",
		"common"
	],
	"./contacts/contacts.module": [
		"../../../../../src/app/layout/contacts/contacts.module.ts",
		"common",
		"contacts.module"
	],
	"./dashboard/dashboard.module": [
		"../../../../../src/app/layout/dashboard/dashboard.module.ts",
		"common",
		"dashboard.module"
	],
	"./form/form.module": [
		"../../../../../src/app/layout/form/form.module.ts",
		"common",
		"form.module"
	],
	"./grid/grid.module": [
		"../../../../../src/app/layout/grid/grid.module.ts",
		"common",
		"grid.module"
	],
	"./invoices/invoices.module": [
		"../../../../../src/app/layout/invoices/invoices.module.ts",
		"common",
		"invoices.module"
	],
	"./items/items.module": [
		"../../../../../src/app/layout/items/items.module.ts",
		"common",
		"items.module"
	],
	"./layout/layout.module": [
		"../../../../../src/app/layout/layout.module.ts",
		"common",
		"layout.module"
	],
	"./login/login.module": [
		"../../../../../src/app/login/login.module.ts",
		"common",
		"login.module"
	],
	"./not-found/not-found.module": [
		"../../../../../src/app/not-found/not-found.module.ts",
		"not-found.module"
	],
	"./organisation/organisation.module": [
		"../../../../../src/app/layout/organisation/organisation.module.ts",
		"common",
		"organisation.module"
	],
	"./server-error/server-error.module": [
		"../../../../../src/app/server-error/server-error.module.ts",
		"server-error.module"
	],
	"./signup/signup.module": [
		"../../../../../src/app/signup/signup.module.ts",
		"common",
		"signup.module"
	],
	"./tables/tables.module": [
		"../../../../../src/app/layout/tables/tables.module.ts",
		"common",
		"tables.module"
	],
	"./tax/tax.module": [
		"../../../../../src/app/layout/tax/tax.module.ts",
		"common",
		"tax.module"
	],
	"./users/users.module": [
		"../../../../../src/app/layout/users/users.module.ts",
		"common",
		"users.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_token_auth_token_service__ = __webpack_require__("../../../../../src/app/auth-token/auth-token.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { AuthGuard } from './shared';

var routes = [
    { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_token_auth_token_service__["a" /* AuthTokenService */]] },
    //  { path: '', loadChildren: './layout/layout.module#LayoutModule' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ngx-datatable.bootstrap {\n  box-shadow: none;\n  font-size: 13px; }\n\n.ngx-datatable.bootstrap .datatable-header {\n  height: unset !important; }\n\n.ngx-datatable.bootstrap .datatable-header .datatable-header-cell {\n  vertical-align: bottom;\n  padding: 0.75rem;\n  border-bottom: 1px solid #d1d4d7; }\n\n.ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label {\n  line-height: 24px; }\n\n.ngx-datatable.bootstrap .datatable-body .datatable-body-row {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #d1d4d7; }\n\n.ngx-datatable.bootstrap .datatable-body .datatable-body-row.datatable-row-even {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.ngx-datatable.bootstrap .datatable-body .datatable-body-row.active {\n  background-color: #1483ff;\n  color: #FFF; }\n\n.ngx-datatable.bootstrap .datatable-body .datatable-body-row .datatable-body-cell {\n  text-align: left;\n  vertical-align: top; }\n\n.ngx-datatable.bootstrap .datatable-footer {\n  background: #424242;\n  color: #ededed;\n  margin-top: -1px; }\n\n.ngx-datatable.bootstrap .datatable-footer .page-count {\n  line-height: 50px;\n  height: 50px;\n  padding: 0 1.2rem; }\n\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager {\n  margin: 0 10px;\n  vertical-align: top; }\n\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li {\n  margin: 10px 0px; }\n\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\n  background-color: #545454;\n  font-weight: bold; }\n\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager a {\n  height: 22px;\n  min-width: 24px;\n  line-height: 22px;\n  padding: 0;\n  border-radius: 3px;\n  margin: 0 3px;\n  text-align: center;\n  vertical-align: top;\n  text-decoration: none;\n  vertical-align: bottom;\n  color: #ededed; }\n\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev {\n  font-size: 18px;\n  line-height: 27px;\n  padding: 0 3px; }\n\n/* bootstrap over */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_token_auth_token_service__ = __webpack_require__("../../../../../src/app/auth-token/auth-token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {Angular2TokenService} from 'angular2-token';


var AppComponent = (function () {
    function AppComponent(authToken) {
        this.authToken = authToken;
        this.authToken.init(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].token_auth_config);
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_token_auth_token_service__["a" /* AuthTokenService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_token_auth_token_service__ = __webpack_require__("../../../../../src/app/auth-token/auth-token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layout_invoices_invoices_id_uniqe_directive__ = __webpack_require__("../../../../../src/app/layout/invoices/invoices-id-uniqe.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngui_auto_complete__ = __webpack_require__("../../../../@ngui/auto-complete/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngui_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__ngui_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_image_upload__ = __webpack_require__("../../../../angular2-image-upload/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// import { FormsModule }   from '@angular/forms';



// AoT requires an exported function for factories
function createTranslateLoader(http) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_13__ngui_auto_complete__["NguiAutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                // UniqueInvoiceValidatorDirective,
                __WEBPACK_IMPORTED_MODULE_14_angular2_image_upload__["a" /* ImageUploadModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_10__auth_token_auth_token_service__["a" /* AuthTokenService */], __WEBPACK_IMPORTED_MODULE_11__layout_invoices_invoices_id_uniqe_directive__["b" /* UniqueInvoiceValidatorDirective */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth-token/auth-token.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthTokenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_pluck__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/pluck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var AuthTokenService = (function () {
    function AuthTokenService(http, activatedRoute, router) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    Object.defineProperty(AuthTokenService.prototype, "currentUserType", {
        get: function () {
            if (this.atCurrentUserType != null)
                return this.atCurrentUserType.name;
            else
                return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthTokenService.prototype, "currentUserData", {
        get: function () {
            return this.atCurrentUserData;
        },
        set: function (res) {
            this.atCurrentUserData = res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthTokenService.prototype, "currentAuthData", {
        get: function () {
            return this.atCurrentAuthData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthTokenService.prototype, "currentAuthHeaders", {
        get: function () {
            if (this.atCurrentAuthData != null) {
                return new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({
                    'access-token': this.atCurrentAuthData.accessToken,
                    'client': this.atCurrentAuthData.client,
                    'expiry': this.atCurrentAuthData.expiry,
                    'token-type': this.atCurrentAuthData.tokenType,
                    'uid': this.atCurrentAuthData.uid
                });
            }
            return new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"];
        },
        enumerable: true,
        configurable: true
    });
    AuthTokenService.prototype.userSignedIn = function () {
        return !!this.atCurrentAuthData;
    };
    AuthTokenService.prototype.canActivate = function () {
        //  alert('init canavtive');
        if (this.userSignedIn())
            return true;
        else {
            // Store current location in storage (usefull for redirection after signing in)
            if (this.atOptions.signInStoredUrlStorageKey) {
                localStorage.setItem(this.atOptions.signInStoredUrlStorageKey, window.location.pathname + window.location.search);
            }
            // Redirect user to sign in if signInRedirect is set
            if (this.router && this.atOptions.signInRedirect)
                this.router.navigate([this.atOptions.signInRedirect]);
            return false;
        }
    };
    // Inital configuration
    AuthTokenService.prototype.init = function (options) {
        var defaultOptions = {
            apiPath: null,
            apiBase: null,
            authBase: false,
            signInPath: 'auth',
            signInRedirect: 'login',
            signInStoredUrlStorageKey: null,
            signOutPath: 'auth/sign_out',
            validateTokenPath: 'users/me',
            signOutFailedValidate: false,
            registerAccountPath: 'auth',
            deleteAccountPath: 'auth',
            registerAccountCallback: window.location.href,
            updatePasswordPath: 'auth',
            resetPasswordPath: 'auth/password',
            resetPasswordCallback: window.location.href,
            userTypes: null,
            oAuthBase: window.location.origin,
            oAuthPaths: {
                github: 'auth/github'
            },
            oAuthCallbackPath: 'oauth_callback',
            oAuthWindowType: 'newWindow',
            oAuthWindowOptions: null,
            globalOptions: {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        };
        this.atOptions = Object.assign(defaultOptions, options);
        this.tryLoadAuthData();
    };
    /**
     *
     * Actions
     *
     */
    // Register request
    AuthTokenService.prototype.registerAccount = function (registerData) {
        if (registerData.userType == null)
            this.atCurrentUserType = null;
        else {
            this.atCurrentUserType = this.getUserTypeByName(registerData.userType);
            delete registerData.userType;
        }
        registerData.password_confirmation = registerData.passwordConfirmation;
        delete registerData.passwordConfirmation;
        registerData.confirm_success_url = this.atOptions.registerAccountCallback;
        return this.post(this.getUserPath() + this.atOptions.registerAccountPath, JSON.stringify(registerData));
    };
    // Delete Account
    AuthTokenService.prototype.deleteAccount = function () {
        return this.delete(this.getUserPath() + this.atOptions.deleteAccountPath);
    };
    // Sign in request and set storage
    AuthTokenService.prototype.signIn = function (signInData) {
        var _this = this;
        if (signInData.userType == null)
            this.atCurrentUserType = null;
        else
            this.atCurrentUserType = this.getUserTypeByName(signInData.userType);
        /*    let body = JSON.stringify({
                email:      signInData.email,
                password:   signInData.password,
                access_token: signInData.access_token
            }); */
        this.atOptions.authBase = true;
        this.atOptions.globalOptions.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        var observ = this.post(this.getUserPath() + this.atOptions.signInPath, JSON.stringify(signInData));
        observ.subscribe(function (res) { return _this.currentUserData = res.json().user; }, function (_error) { return null; });
        this.atOptions.globalOptions.headers = {
            'Content-Type': 'application/json'
        };
        //  currentUserData();
        console.log(this.atCurrentUserData);
        return observ;
    };
    AuthTokenService.prototype.signInOAuth = function (oAuthType) {
        var oAuthPath = this.getOAuthPath(oAuthType);
        var callbackUrl = window.location.origin + "/" + this.atOptions.oAuthCallbackPath;
        var oAuthWindowType = this.atOptions.oAuthWindowType;
        var authUrl = this.getOAuthUrl(oAuthPath, callbackUrl, oAuthWindowType);
        if (oAuthWindowType == 'newWindow') {
            var oAuthWindowOptions = this.atOptions.oAuthWindowOptions;
            var windowOptions = '';
            if (oAuthWindowOptions) {
                for (var key in oAuthWindowOptions) {
                    windowOptions += "," + key + "=" + oAuthWindowOptions[key];
                }
            }
            var popup = window.open(authUrl, '_blank', "closebuttoncaption=Cancel" + windowOptions);
            return this.requestCredentialsViaPostMessage(popup);
        }
        else if (oAuthWindowType == 'sameWindow') {
            window.location.href = authUrl;
        }
        else {
            throw "Unsupported oAuthWindowType \"" + oAuthWindowType + "\"";
        }
    };
    AuthTokenService.prototype.processOAuthCallback = function () {
        this.getAuthDataFromParams();
    };
    // Sign out request and delete storage
    AuthTokenService.prototype.signOut = function () {
        //  let observ = this.delete(this.getUserPath() + this.atOptions.signOutPath);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('client');
        localStorage.removeItem('expiry');
        localStorage.removeItem('tokenType');
        localStorage.removeItem('uid');
        localStorage.removeItem('isLoggedin');
        localStorage.removeItem('currentShop');
        localStorage.removeItem('shops');
        this.atCurrentAuthData = null;
        this.atCurrentUserType = null;
        this.atCurrentUserData = null;
        //return observ;
        return true;
    };
    // Validate token request
    AuthTokenService.prototype.validateToken = function () {
        var _this = this;
        var observ = this.get(this.getUserPath() + this.atOptions.validateTokenPath + '?access_token=' + this.atCurrentAuthData.accessToken);
        observ.subscribe(function (res) {
            _this.atCurrentUserData = res.json();
            console.log(_this.atCurrentUserData);
            var shop = _this.atCurrentUserData.shops.find(function (item) { if (item.isactive == true)
                return true; });
            var shops = _this.atCurrentUserData.shops;
            localStorage.setItem('currentShop', JSON.stringify(shop)),
                localStorage.setItem('shops', JSON.stringify(shops)),
                _this.getAuthDataFromStorage();
            // this.authService.userSignedIn$.next(true);
        }, function (error) {
            if (error.status === 401 && _this.atOptions.signOutFailedValidate) {
                _this.signOut();
            }
        });
        return observ;
    };
    // Update password request
    AuthTokenService.prototype.updatePassword = function (updatePasswordData) {
        if (updatePasswordData.userType != null)
            this.atCurrentUserType = this.getUserTypeByName(updatePasswordData.userType);
        var args;
        if (updatePasswordData.passwordCurrent == null) {
            args = {
                password: updatePasswordData.password,
                password_confirmation: updatePasswordData.passwordConfirmation
            };
        }
        else {
            args = {
                current_password: updatePasswordData.passwordCurrent,
                password: updatePasswordData.password,
                password_confirmation: updatePasswordData.passwordConfirmation
            };
        }
        if (updatePasswordData.resetPasswordToken) {
            args.reset_password_token = updatePasswordData.resetPasswordToken;
        }
        var body = JSON.stringify(args);
        return this.put(this.getUserPath() + this.atOptions.updatePasswordPath, body);
    };
    // Reset password request
    AuthTokenService.prototype.resetPassword = function (resetPasswordData) {
        if (resetPasswordData.userType == null)
            this.atCurrentUserType = null;
        else
            this.atCurrentUserType = this.getUserTypeByName(resetPasswordData.userType);
        var body = JSON.stringify({
            email: resetPasswordData.email,
            redirect_url: this.atOptions.resetPasswordCallback
        });
        return this.post(this.getUserPath() + this.atOptions.resetPasswordPath, body);
    };
    /**
     *
     * HTTP Wrappers
     *
     */
    AuthTokenService.prototype.get = function (url, options) {
        return this.request(this.mergeRequestOptionsArgs({
            url: this.getApiPath() + url,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Get
        }, options));
    };
    AuthTokenService.prototype.post = function (url, body, options) {
        return this.request(this.mergeRequestOptionsArgs({
            url: this.getApiPath() + url,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Post,
            body: body
        }, options));
    };
    AuthTokenService.prototype.put = function (url, body, options) {
        return this.request(this.mergeRequestOptionsArgs({
            url: this.getApiPath() + url,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Put,
            body: body
        }, options));
    };
    AuthTokenService.prototype.delete = function (url, options) {
        return this.request(this.mergeRequestOptionsArgs({
            url: this.getApiPath() + url,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Delete
        }, options));
    };
    AuthTokenService.prototype.patch = function (url, body, options) {
        return this.request(this.mergeRequestOptionsArgs({
            url: this.getApiPath() + url,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Patch,
            body: body
        }, options));
    };
    AuthTokenService.prototype.head = function (path, options) {
        return this.request({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Head,
            url: this.getApiPath() + path
        });
    };
    AuthTokenService.prototype.options = function (url, options) {
        return this.request(this.mergeRequestOptionsArgs({
            url: this.getApiPath() + url,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Options
        }, options));
    };
    // Construct and send Http request
    AuthTokenService.prototype.request = function (options) {
        var baseRequestOptions;
        var baseHeaders = this.atOptions.globalOptions.headers;
        if (this.atOptions.authBase) {
            var baseParam = JSON.parse(options.body);
            baseHeaders.authorization = 'Basic ' + window.btoa(baseParam.email + ':' + baseParam.password);
            //      baseHeaders.Authorization = 'Basic cHJhYmludHBAZ21haWwuY29tOnBhc3N3b3Jk';
            delete baseParam.email;
            delete baseParam.password;
            options.body = "access_token=" + baseParam.access_token; //JSON.stringify(baseParam);
        }
        this.atOptions.authBase = false;
        // Get auth data from local storage
        this.getAuthDataFromStorage();
        // Merge auth headers to request if set
        /*    if (this.atCurrentAuthData != null) {
                (<any>Object).assign(baseHeaders, {
                    'access-token': this.atCurrentAuthData.accessToken,
                    'client':       this.atCurrentAuthData.client,
                    'expiry':       this.atCurrentAuthData.expiry,
                    'token-type':   this.atCurrentAuthData.tokenType,
                    'uid':          this.atCurrentAuthData.uid
                });
            } */
        baseRequestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"](baseHeaders)
        });
        // Merge standard and custom RequestOptions
        baseRequestOptions = baseRequestOptions.merge(options);
        var response = this.http.request(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Request"](baseRequestOptions)).share();
        //  let response = this.http.request(new Request(baseRequestOptions)).map((res:Response) => res.json());
        if (this.atCurrentAuthData == null) {
            this.handleResponse(response);
        }
        console.log(JSON.stringify(response) + 'respon');
        return response;
    };
    AuthTokenService.prototype.mergeRequestOptionsArgs = function (options, addOptions) {
        var returnOptions = options;
        if (options)
            Object.assign(returnOptions, addOptions);
        return returnOptions;
    };
    // Check if response is complete and newer, then update storage
    AuthTokenService.prototype.handleResponse = function (response) {
        var _this = this;
        //  observ.subscribe(res => this.atCurrentUserData = res.json().data, _error => null);
        response.subscribe(function (res) {
            _this.getAuthHeadersFromResponse(res);
        }, function (error) {
            _this.getAuthHeadersFromResponse(error);
        });
    };
    /**
     *
     * Get Auth Data
     *
     */
    // Try to load auth data
    AuthTokenService.prototype.tryLoadAuthData = function () {
        //  alert('inside load');
        var userType = this.getUserTypeByName(localStorage.getItem('userType'));
        if (userType)
            this.atCurrentUserType = userType;
        this.getAuthDataFromStorage();
        if (this.activatedRoute)
            this.getAuthDataFromParams();
        if (this.atCurrentAuthData) {
            this.validateToken();
            console.log('kk');
        }
    };
    // Parse Auth data from response
    AuthTokenService.prototype.getAuthHeadersFromResponse = function (data) {
        var headers = data.headers;
        var result = data.json();
        var user = result.user;
        var shop = result.user.shops.find(function (item) { if (item.isactive == true)
            return true; });
        var shops = result.user.shops;
        console.log(data + 'data' + data.token + data.user);
        var authData = {
            accessToken: result.token,
            client: user.name,
            expiry: headers.get('expiry'),
            tokenType: headers.get('token-type'),
            uid: user.id,
            currentShop: JSON.stringify(shop),
            shops: JSON.stringify(shops)
        };
        this.setAuthData(authData);
    };
    // Parse Auth data from post message
    AuthTokenService.prototype.getAuthDataFromPostMessage = function (data) {
        var authData = {
            accessToken: data['auth_token'],
            client: data['client_id'],
            expiry: data['expiry'],
            tokenType: 'Bearer',
            uid: data['uid'],
            currentShop: '',
            shops: ''
        };
        this.setAuthData(authData);
    };
    // Try to get auth data from storage.
    AuthTokenService.prototype.getAuthDataFromStorage = function () {
        var authData = {
            accessToken: localStorage.getItem('accessToken'),
            client: localStorage.getItem('client'),
            expiry: localStorage.getItem('expiry'),
            tokenType: localStorage.getItem('tokenType'),
            uid: localStorage.getItem('uid'),
            currentShop: localStorage.getItem('currentShop'),
            shops: localStorage.getItem('shops'),
        };
        if (this.checkAuthData(authData))
            this.atCurrentAuthData = authData;
    };
    // Try to get auth data from url parameters.
    AuthTokenService.prototype.getAuthDataFromParams = function () {
        var _this = this;
        if (this.activatedRoute.queryParams)
            this.activatedRoute.queryParams.subscribe(function (queryParams) {
                var authData = {
                    accessToken: queryParams['token'] || queryParams['auth_token'],
                    client: queryParams['client_id'],
                    expiry: queryParams['expiry'],
                    tokenType: 'Bearer',
                    uid: queryParams['uid'],
                    currentShop: '',
                    shops: []
                };
                if (_this.checkAuthData(authData))
                    _this.atCurrentAuthData = authData;
            });
    };
    /**
     *
     * Set Auth Data
     *
     */
    // Write auth data to storage
    AuthTokenService.prototype.setAuthData = function (authData) {
        if (this.checkAuthData(authData)) {
            this.atCurrentAuthData = authData;
            localStorage.setItem('accessToken', authData.accessToken);
            localStorage.setItem('client', authData.client);
            localStorage.setItem('expiry', authData.expiry);
            localStorage.setItem('tokenType', authData.tokenType);
            localStorage.setItem('uid', authData.uid);
            localStorage.setItem('currentShop', authData.currentShop);
            localStorage.setItem('shops', authData.shops);
            if (this.atCurrentUserType != null)
                localStorage.setItem('userType', this.atCurrentUserType.name);
            if (this.atCurrentAuthData) {
                this.validateToken();
            }
        }
    };
    /**
     *
     * Validate Auth Data
     *
     */
    // Check if auth data complete and if response token is newer
    AuthTokenService.prototype.checkAuthData = function (authData) {
        if (authData.accessToken != null &&
            //  authData.client != null &&
            //  authData.expiry != null &&
            //  authData.tokenType != null &&
            authData.uid != null) {
            //  if (this.atCurrentAuthData != null)
            //      return authData.expiry >= this.atCurrentAuthData.expiry;
            //  else
            return true;
        }
        else {
            return false;
        }
    };
    /**
     *
     * Construct Paths / Urls
     *
     */
    AuthTokenService.prototype.getUserPath = function () {
        if (this.atCurrentUserType == null)
            return '';
        else
            return this.atCurrentUserType.path + '/';
    };
    AuthTokenService.prototype.getApiPath = function () {
        var constructedPath = '';
        if (this.atOptions.apiBase != null)
            constructedPath += this.atOptions.apiBase + '/';
        if (this.atOptions.apiPath != null)
            constructedPath += this.atOptions.apiPath + '/';
        return constructedPath;
    };
    AuthTokenService.prototype.getOAuthPath = function (oAuthType) {
        var oAuthPath;
        oAuthPath = this.atOptions.oAuthPaths[oAuthType];
        if (oAuthPath == null)
            oAuthPath = "/auth/" + oAuthType;
        return oAuthPath;
    };
    AuthTokenService.prototype.getOAuthUrl = function (oAuthPath, callbackUrl, windowType) {
        var url;
        url = this.atOptions.oAuthBase + "/" + oAuthPath;
        url += "?omniauth_window_type=" + windowType;
        url += "&auth_origin_url=" + encodeURIComponent(callbackUrl);
        if (this.atCurrentUserType != null)
            url += "&resource_class=" + this.atCurrentUserType.name;
        return url;
    };
    /**
     *
     * OAuth
     *
     */
    AuthTokenService.prototype.requestCredentialsViaPostMessage = function (authWindow) {
        var pollerObserv = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].interval(500);
        var responseObserv = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].fromEvent(window, 'message').pluck('data')
            .filter(this.oAuthWindowResponseFilter);
        var responseSubscription = responseObserv.subscribe(this.getAuthDataFromPostMessage.bind(this));
        var pollerSubscription = pollerObserv.subscribe(function () {
            if (authWindow.closed)
                pollerSubscription.unsubscribe();
            else
                authWindow.postMessage('requestCredentials', '*');
        });
        return responseObserv;
    };
    AuthTokenService.prototype.oAuthWindowResponseFilter = function (data) {
        if (data.message == 'deliverCredentials' || data.message == 'authFailure')
            return data;
    };
    /**
     *
     * Utilities
     *
     */
    // Match user config by user config name
    AuthTokenService.prototype.getUserTypeByName = function (name) {
        if (name == null || this.atOptions.userTypes == null)
            return null;
        return this.atOptions.userTypes.find(function (userType) { return userType.name === name; });
    };
    AuthTokenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthTokenService);
    return AuthTokenService;
}());



/***/ }),

/***/ "../../../../../src/app/layout/invoices/invoices-id-uniqe.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UniqueInvoiceIdValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UniqueInvoiceValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoices_service__ = __webpack_require__("../../../../../src/app/layout/invoices/invoices.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
To check uniqe invoice id directive

*/



var UniqueInvoiceIdValidator = (function () {
    function UniqueInvoiceIdValidator(invoicesService) {
        this.invoicesService = invoicesService;
    }
    UniqueInvoiceIdValidator.prototype.validate = function (ctrl) {
        return this.invoicesService.isIdTaken(ctrl.value).
            map(function (isTaken) { return (isTaken ? { uniqueIDAlert: true } : null); });
    };
    UniqueInvoiceIdValidator = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__invoices_service__["a" /* InvoicesService */]])
    ], UniqueInvoiceIdValidator);
    return UniqueInvoiceIdValidator;
}());

var UniqueInvoiceValidatorDirective = (function () {
    function UniqueInvoiceValidatorDirective(validator) {
        this.validator = validator;
    }
    UniqueInvoiceValidatorDirective.prototype.validate = function (control) {
        this.validator.validate(control);
    };
    UniqueInvoiceValidatorDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appCheckUniqueInvoice]',
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_ASYNC_VALIDATORS"],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return UniqueInvoiceIdValidator; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [UniqueInvoiceIdValidator])
    ], UniqueInvoiceValidatorDirective);
    return UniqueInvoiceValidatorDirective;
}());



/***/ }),

/***/ "../../../../../src/app/layout/invoices/invoices.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_token_auth_token_service__ = __webpack_require__("../../../../../src/app/auth-token/auth-token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvoicesService = (function () {
    function InvoicesService(authService) {
        this.authService = authService;
        this.userOptions = {
            userPath: 'invoices'
        };
    }
    // Validate token request
    InvoicesService.prototype.getInvoicesByID = function (id) {
        var _this = this;
        var observ = this.authService.get(this.userOptions.userPath + '/' + id + '?access_token=' + this.authService.currentAuthData.accessToken);
        observ.subscribe(function (res) {
            _this.itemData = res.json();
            console.log(_this.itemData);
            // this.authService.userSignedIn$.next(true);
        }, function (error) {
            if (error.status === 401) {
                ///  this.signOut();
            }
        });
        return observ;
    };
    // Validate token request
    InvoicesService.prototype.getInvoicesViewByID = function (id) {
        var _this = this;
        var observ = this.authService.get(this.userOptions.userPath + '/' + id + '/view?access_token=' + this.authService.currentAuthData.accessToken);
        observ.subscribe(function (res) {
            _this.itemData = res.json();
            console.log(_this.itemData);
            // this.authService.userSignedIn$.next(true);
        }, function (error) {
            if (error.status === 401) {
                ///  this.signOut();
            }
        });
        return observ;
    };
    InvoicesService.prototype.getInvoices = function (docType) {
        var _this = this;
        var observ = this.authService.get(this.userOptions.userPath +
            '?access_token=' + this.authService.currentAuthData.accessToken +
            '&doc_type=' + docType +
            '&shop=' + JSON.parse(this.authService.currentAuthData.currentShop).sid.id);
        observ.subscribe(function (res) {
            _this.itemData = res.json();
            console.log(_this.itemData);
            // this.authService.userSignedIn$.next(true);
        }, function (error) {
            if (error.status === 401) {
                ///  this.signOut();
            }
        });
        return observ;
    };
    // Validate token request
    InvoicesService.prototype.addInvoices = function (body) {
        var _this = this;
        body.access_token = this.authService.currentAuthData.accessToken;
        body.shop = JSON.parse(this.authService.currentAuthData.currentShop).sid.id;
        body.createdBy = this.authService.currentAuthData.uid;
        var observ = this.authService.post(this.userOptions.userPath, body);
        observ.subscribe(function (res) {
            _this.itemData = res.json();
            console.log(_this.itemData);
            // this.authService.userSignedIn$.next(true);
        }, function (error) {
            if (error.status === 401) {
                ///  this.signOut();
            }
        });
        return observ;
    };
    // Validate token request
    InvoicesService.prototype.editInvoices = function (body, id) {
        var _this = this;
        body.access_token = this.authService.currentAuthData.accessToken;
        var observ = this.authService.put(this.userOptions.userPath + '/' + id, body);
        observ.subscribe(function (res) {
            _this.itemData = res.json();
            console.log(_this.itemData);
            // this.authService.userSignedIn$.next(true);
        }, function (error) {
            if (error.status === 401) {
                ///  this.signOut();
            }
        });
        return observ;
    };
    // Validate token request
    InvoicesService.prototype.deleteItem = function (id) {
        //  body.access_token = this.authService.currentAuthData.accessToken;
        var observ = this.authService.delete(this.userOptions.userPath + '/' + id + '?access_token=' + this.authService.currentAuthData.accessToken);
        observ.subscribe(function (res) {
        }, function (error) {
            if (error.status === 401) {
                ///  this.signOut();
            }
        });
        return observ;
    };
    InvoicesService.prototype.isIdTaken = function (inv) {
        if (!inv) {
            var isTaken = false;
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(isTaken).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["delay"])(400));
        }
        var body = { shop: JSON.parse(this.authService.currentAuthData.currentShop).sid.id,
            invoice_number: inv,
            access_token: this.authService.currentAuthData.accessToken };
        body = JSON.stringify(body);
        var observ = this.authService.post(this.userOptions.userPath + '/isuniqe', body);
        return observ;
        /*  observ.subscribe(
              res => {
                this.itemData = res.json();
                console.log(this.itemData);
                //const isTaken = this.itemData ? true : false;
                return this.itemData;
  
               // return Observable.of('true').pipe(delay(400));
             
                //const isTaken = ALTER_EGOS.includes(alterEgo);
                //return Observable.of(isTaken).pipe(delay (400));
                
              },
              error => {
                  if (error.status === 404) {
                    ///  this.signOut();
                    
                     return Observable.of('false');
                  }
                  const isTaken = false;
                return Observable.of(isTaken).pipe(delay (400));
              });   */
    };
    InvoicesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_token_auth_token_service__["a" /* AuthTokenService */]])
    ], InvoicesService);
    return InvoicesService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    token_auth_config: {
        apiBase: 'https://app-inprogress.herokuapp.com/api'
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map