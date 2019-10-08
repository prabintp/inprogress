webpackJsonp(["organisation.module"],{

/***/ "../../../../../src/app/layout/organisation/organisation-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganisationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__organisation_component__ = __webpack_require__("../../../../../src/app/layout/organisation/organisation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__organisation_profile_component__ = __webpack_require__("../../../../../src/app/layout/organisation/organisation.profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__organisation_settings_component__ = __webpack_require__("../../../../../src/app/layout/organisation/organisation.settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__organisation_component__["a" /* OrganisationComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__organisation_profile_component__["a" /* OrganisationProfileComponent */] },
            { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_4__organisation_settings_component__["a" /* OrganisationSettingsComponent */] }
        ]
    }
];
var OrganisationRoutingModule = (function () {
    function OrganisationRoutingModule() {
    }
    OrganisationRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], OrganisationRoutingModule);
    return OrganisationRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/organisation/organisation.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <h2 class=\"text-muted\">Organisation <small></small></h2>\r\n  <router-outlet></router-outlet>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/organisation/organisation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/organisation/organisation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganisationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrganisationComponent = (function () {
    function OrganisationComponent() {
    }
    OrganisationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-organisation',
            template: __webpack_require__("../../../../../src/app/layout/organisation/organisation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/organisation/organisation.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [])
    ], OrganisationComponent);
    return OrganisationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/organisation/organisation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationModule", function() { return OrganisationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__organisation_routing_module__ = __webpack_require__("../../../../../src/app/layout/organisation/organisation-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__organisation_component__ = __webpack_require__("../../../../../src/app/layout/organisation/organisation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__organisation_profile_component__ = __webpack_require__("../../../../../src/app/layout/organisation/organisation.profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__organisation_settings_component__ = __webpack_require__("../../../../../src/app/layout/organisation/organisation.settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__organisation_service__ = __webpack_require__("../../../../../src/app/layout/organisation/organisation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_image_upload__ = __webpack_require__("../../../../angular2-image-upload/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var OrganisationModule = (function () {
    function OrganisationModule() {
    }
    OrganisationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__organisation_routing_module__["a" /* OrganisationRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_angular2_image_upload__["a" /* ImageUploadModule */].forRoot(),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__organisation_component__["a" /* OrganisationComponent */],
                __WEBPACK_IMPORTED_MODULE_5__organisation_profile_component__["a" /* OrganisationProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_6__organisation_settings_component__["a" /* OrganisationSettingsComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__organisation_service__["a" /* OrganisationService */]]
        })
    ], OrganisationModule);
    return OrganisationModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/organisation/organisation.profile.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<form  [formGroup]=\"OrganisationForm\" (ngSubmit)=\"onSubmit()\" class=\"\">\r\n    <div class=\"form-group row\">\r\n        <label for=\"example-text-input\" class=\"col-2 col-form-label\">Name</label>\r\n        <div class=\"col-10 col-md-6\">\r\n          <input class=\"form-control validate\" type=\"text\" required name=\"name\" formControlName=\"name\">\r\n        </div>\r\n      </div>\r\n     \r\n      <div class=\"form-group row\">\r\n        <label for=\"example-email-input\" class=\"col-2 col-form-label\">Email</label>\r\n        <div class=\"col-10 col-md-6\">\r\n         <input class=\"form-control validate\" type=\"text\" required name=\"email\" formControlName=\"email\">\r\n        </div>\r\n      </div>\r\n\r\n      <!--<image-upload  (uploadFinished)=\"onLogoUploadFinished($event)\"></image-upload>-->\r\n      <input class=\"form-control validate\" type=\"hidden\" required name=\"logo\" formControlName=\"logo\">\r\n      \r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"example-text-input\" class=\"col-2 col-form-label\">TRN Number</label>\r\n        <div class=\"col-10 col-md-6\">\r\n          <input class=\"form-control validate\" type=\"text\" required name=\"trn\" formControlName=\"trn\">\r\n        </div>\r\n      </div>\r\n     \r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"example-text-input\" class=\"col-2 col-form-label\">Address</label>\r\n        <div class=\"col-10 col-md-6\">\r\n            <textarea name='address' formControlName=\"address\" class=\"form-control\" rows=\"3\"></textarea>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"example-text-input\" class=\"col-2 col-form-label\">Bank Details</label>\r\n        <div class=\"col-10 col-md-6\">\r\n            <textarea name='bank' formControlName=\"bank\" class=\"form-control\" rows=\"3\"></textarea>\r\n        </div>\r\n      </div>\r\n    <br>\r\n\r\n      <legend>Print Template</legend>\r\n      <div class=\"form-group row\" formGroupName=\"print\">\r\n        <label for=\"example-text-input\" class=\"col-2 col-form-label\">Template Footer Text</label>\r\n        <div class=\"col-10 col-md-6\">\r\n            <textarea name='footer_text' formControlName=\"footer_text\" class=\"form-control\" rows=\"3\"></textarea>\r\n        </div>\r\n      </div>\r\n    \r\n      <div class=\"form-group row\" formGroupName=\"print\">\r\n            <label for=\"example-text-input\" class=\"col-2 col-form-label\">Template Terms/condition</label>\r\n            <div class=\"col-10 col-md-6\">\r\n                <textarea name='terms_condition' formControlName=\"terms_condition\" class=\"form-control\" rows=\"3\"></textarea>\r\n            </div>\r\n          </div>\r\n\r\n      <div class=\"form-group row\">\r\n            <label for=\"example-text-input\" class=\"col-2 col-form-label\"></label>\r\n        <div class=\"col-6\">\r\n        <button type=\"submit\" class=\"btn btn-outline-primary btn-sm\">  Save  </button>\r\n        </div>\r\n      </div>\r\n      \r\n     \r\n\r\n\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/organisation/organisation.profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganisationProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__organisation_service__ = __webpack_require__("../../../../../src/app/layout/organisation/organisation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_token_auth_token_service__ = __webpack_require__("../../../../../src/app/auth-token/auth-token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrganisationProfileComponent = (function () {
    function OrganisationProfileComponent(_organisationService, authService, _fb) {
        this._organisationService = _organisationService;
        this.authService = authService;
        this._fb = _fb;
        this.OrganisationForm = this._fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(20)]],
            address: [''],
            bank: [''],
            print: this._fb.group({
                footer_text: [''],
                terms_condition: ['']
            }),
            trn: [''],
            email: [''],
            logo: []
        });
    }
    OrganisationProfileComponent.prototype.ngOnInit = function () {
        this.currentShop = JSON.parse(this.authService.currentAuthData.currentShop).sid.id;
        this.getItem(this.currentShop);
    };
    OrganisationProfileComponent.prototype.patchForm = function () {
        var self = this;
        this.OrganisationForm.patchValue(this.organisationdata);
    };
    OrganisationProfileComponent.prototype.getItem = function (id) {
        var _this = this;
        this._organisationService.getOrganisationByID(id).subscribe(function (res) {
            if (res.status === 200 || res.status === 304) {
                //  let resdata = res.json().rows;
                _this.organisationdata = res.json();
                _this.patchForm();
            }
            else {
                // this.itemsdata = []
            }
        });
    };
    OrganisationProfileComponent.prototype.onSubmit = function () {
        var invdata = this.OrganisationForm.value;
        this._organisationService.editOrganisation(invdata, this.currentShop).subscribe(function (res) { return res.status === 200 || res.status === 201 ? console.log('updated Successfully') : console.log('updated errror'); });
    };
    OrganisationProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-organisation',
            template: __webpack_require__("../../../../../src/app/layout/organisation/organisation.profile.component.html"),
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__organisation_service__["a" /* OrganisationService */],
            __WEBPACK_IMPORTED_MODULE_3__auth_token_auth_token_service__["a" /* AuthTokenService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"]])
    ], OrganisationProfileComponent);
    return OrganisationProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/organisation/organisation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganisationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_token_auth_token_service__ = __webpack_require__("../../../../../src/app/auth-token/auth-token.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrganisationService = (function () {
    function OrganisationService(authService) {
        this.authService = authService;
        this.userOptions = {
            userPath: 'shops'
        };
    }
    // Validate token request
    OrganisationService.prototype.getOrganisationByID = function (id) {
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
    OrganisationService.prototype.getOrganisation = function () {
        var _this = this;
        var shopParam = '';
        if (this.authService.currentAuthData.currentShop !== "undefined") {
            shopParam = '&shop=' + JSON.parse(this.authService.currentAuthData.currentShop).sid.id;
        }
        var observ = this.authService.get(this.userOptions.userPath + '?access_token=' + this.authService.currentAuthData.accessToken + shopParam);
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
    OrganisationService.prototype.addOrganisation = function (body) {
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
    OrganisationService.prototype.editOrganisation = function (body, id) {
        var _this = this;
        body.access_token = this.authService.currentAuthData.accessToken;
        body.createdBy = this.authService.currentAuthData.uid;
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
    OrganisationService.prototype.deleteItem = function (id) {
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
    OrganisationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_token_auth_token_service__["a" /* AuthTokenService */]])
    ], OrganisationService);
    return OrganisationService;
}());



/***/ }),

/***/ "../../../../../src/app/layout/organisation/organisation.settings.component.html":
/***/ (function(module, exports) {

module.exports = "settings\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/organisation/organisation.settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganisationSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrganisationSettingsComponent = (function () {
    function OrganisationSettingsComponent() {
    }
    OrganisationSettingsComponent.prototype.ngOnInit = function () { };
    OrganisationSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-organisation',
            template: __webpack_require__("../../../../../src/app/layout/organisation/organisation.settings.component.html"),
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [])
    ], OrganisationSettingsComponent);
    return OrganisationSettingsComponent;
}());



/***/ })

});
//# sourceMappingURL=organisation.module.chunk.js.map