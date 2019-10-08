webpackJsonp(["users.module"],{

/***/ "../../../../../src/app/layout/users/users-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_component__ = __webpack_require__("../../../../../src/app/layout/users/users.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__users_component__["a" /* UsersComponent */]
    }
];
var UsersRoutingModule = (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Users'\" [icon]=\"'fa-table'\"></app-page-header>\r\n    <div class=\"row\">\r\n        <div class=\"col col-xl-12\">\r\n          <div class=\"card mb-3\">\r\n\r\n              <div class=\"card-body\">\r\n                <ngx-datatable\r\n                  class=\"bootstrap\"\r\n                  [rows]=\"rows\"\r\n                  [columns]=\"columns\"\r\n                  [columnMode]=\"'force'\"\r\n                  [headerHeight]=\"50\"\r\n                  [footerHeight]=\"50\"\r\n                  [rowHeight]=\"'auto'\"\r\n                  [limit]=\"10\"\r\n                  [loadingIndicator]=\"loading\"\r\n                  >\r\n                </ngx-datatable>\r\n                <ng-template #hdrTpl let-column=\"column\" >\r\n                 <strong>Avathar</strong>\r\n                </ng-template>\r\n                <ng-template #editTmpl let-row=\"row\" let-value=\"value\">\r\n                 <img\r\n                  src=\"{{value}}\"\r\n                 />\r\n               </ng-template>\r\n              </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/users/users.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__("../../../../../src/app/layout/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersComponent = (function () {
    function UsersComponent(usersService) {
        var _this = this;
        this.usersService = usersService;
        this.rows = [];
        this.columns = [];
        this.loading = false;
        this.loading = true;
        this.usersService.getUsers().subscribe(function (res) { return res.status === 200 || res.status === 304 ? _this.rows = res.json().rows : _this.rows = []; });
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.columns = [
            {
                cellTemplate: this.editTmpl,
                headerTemplate: this.hdrTpl,
                name: 'picture'
            },
            { prop: 'name' },
            { name: 'email' }
        ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editTmpl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], UsersComponent.prototype, "editTmpl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('hdrTpl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], UsersComponent.prototype, "hdrTpl", void 0);
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/layout/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/users/users.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_routing_module__ = __webpack_require__("../../../../../src/app/layout/users/users-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_component__ = __webpack_require__("../../../../../src/app/layout/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_service__ = __webpack_require__("../../../../../src/app/layout/users/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UsersModule = (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__users_routing_module__["a" /* UsersRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared__["c" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__["NgxDatatableModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__users_component__["a" /* UsersComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__users_service__["a" /* UsersService */]]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/users/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
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


var UsersService = (function () {
    function UsersService(authService) {
        this.authService = authService;
        this.userOptions = {
            userPath: '/users'
        };
    }
    // Validate token request
    UsersService.prototype.getUsers = function () {
        var _this = this;
        var observ = this.authService.get(this.userOptions.userPath + '?access_token=' + this.authService.currentAuthData.accessToken);
        observ.subscribe(function (res) {
            _this.userData = res.json();
            console.log(_this.userData);
            // this.authService.userSignedIn$.next(true);
        }, function (error) {
            if (error.status === 401) {
                ///  this.signOut();
            }
        });
        return observ;
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_token_auth_token_service__["a" /* AuthTokenService */]])
    ], UsersService);
    return UsersService;
}());



/***/ })

});
//# sourceMappingURL=users.module.chunk.js.map