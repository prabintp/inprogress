webpackJsonp(["accounts.module"],{

/***/ "../../../../../src/app/layout/accounts/accounts-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accounts_component__ = __webpack_require__("../../../../../src/app/layout/accounts/accounts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accounts_add_component__ = __webpack_require__("../../../../../src/app/layout/accounts/accounts.add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accounts_list_component__ = __webpack_require__("../../../../../src/app/layout/accounts/accounts.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accounts_edit_component__ = __webpack_require__("../../../../../src/app/layout/accounts/accounts.edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__accounts_component__["a" /* AccountsComponent */],
        children: [
            { path: 'add', component: __WEBPACK_IMPORTED_MODULE_3__accounts_add_component__["a" /* AccountsAddComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__accounts_list_component__["a" /* AccountsListComponent */] },
            { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_5__accounts_edit_component__["a" /* AccountsEditComponent */] },
        ]
    }
];
var AccountsRoutingModule = (function () {
    function AccountsRoutingModule() {
    }
    AccountsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AccountsRoutingModule);
    return AccountsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/accounts/accounts.add.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<form [formGroup]=\"accountsForm\" (ngSubmit)=\"onAdd()\">\r\n  <div class=\"row\">\r\n    <fieldset class=\"form-group col-md-3\">\r\n      <label>Accounts Name</label>\r\n      <input [class.is-invalid]=\"accountsForm.controls.name.touched && !accountsForm.controls.name.valid\" required name=\"name\" formControlName=\"name\" class=\"form-control validate \">\r\n      <div class=\"invalid-feedback\">\r\n        accounts Name is required.\r\n      </div>\r\n    </fieldset>\r\n    <fieldset class=\"form-group col-md-3\">\r\n      <label>Account Type</label>\r\n      \r\n      <select  name=\"accounttype\" formControlName=\"accounttype\" class=\"form-control validate \">\r\n          <option value=\"null\"  disabled=\"disabled\">Please Select</option>\r\n          <option *ngFor=\"let item of accountOption\" [ngValue]=\"item.id\">{{item.name}}</option>\r\n        </select>\r\n      <div class=\"invalid-feedback\">\r\n        Item SKU is required.\r\n      </div>\r\n    </fieldset>\r\n    <fieldset class=\"form-group col-md-6\">\r\n      <label>Description</label>\r\n      <textarea name=\"desc\" formControlName=\"desc\" class=\"form-control validate\" rows=\"3\"></textarea>\r\n    </fieldset>\r\n  </div>\r\n  <div class=\"row\">\r\n \r\n</div>\r\n\r\n  <div class=\"col-md-12\">\r\n      <button type=\"submit\" class=\"btn btn-secondary\" [disabled]=\"!(accountsForm.valid)\">Submit Button</button>\r\n      <button type=\"reset\" class=\"btn btn-secondary\">Reset Button</button>\r\n   \r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/accounts/accounts.add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accounts_service__ = __webpack_require__("../../../../../src/app/layout/accounts/accounts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountsAddComponent = (function () {
    function AccountsAddComponent(_fb, accountsService, router) {
        var _this = this;
        this._fb = _fb;
        this.accountsService = accountsService;
        this.router = router;
        this.rows = [];
        this.accountsService.getAccountTypes().subscribe(function (res) {
            if (res.status === 200 || res.status === 304) {
                var resdata = res.json().rows;
                // this.rows = res.json().rows;
                _this.accountOption = resdata.slice();
            }
            else {
                _this.accountOption = [];
            }
        });
    }
    AccountsAddComponent.prototype.ngOnInit = function () {
        this.initForm();
        // this.accountOption = this.accountsService.getAccountTypes();
    };
    AccountsAddComponent.prototype.initForm = function () {
        this.accountsForm = this._fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            desc: [''],
            accounttype: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]]
        });
    };
    AccountsAddComponent.prototype.onAdd = function () {
        var _this = this;
        this.accountsService.addAccounts(this.accountsForm.value).subscribe(function (res) { return res.status === 200 || res.status === 201 ? _this.router.navigate(['/accounts']) : _this.router.navigate(['/404']); });
    };
    AccountsAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-accounts',
            template: __webpack_require__("../../../../../src/app/layout/accounts/accounts.add.component.html"),
            //  styleUrls: ['./accounts.component.scss'],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__accounts_service__["a" /* AccountsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AccountsAddComponent);
    return AccountsAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/accounts/accounts.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [activeurl]=\"'/accounts'\" [addurl]=\"'/accounts/add'\" [heading]=\"'Accounts'\" [icon]=\"'fa-table'\"></app-page-header>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/accounts/accounts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsComponent; });
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



var AccountsComponent = (function () {
    function AccountsComponent() {
    }
    AccountsComponent.prototype.ngOnInit = function () { };
    AccountsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-accounts',
            template: __webpack_require__("../../../../../src/app/layout/accounts/accounts.component.html"),
            //  styleUrls: ['./category.component.scss'],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [])
    ], AccountsComponent);
    return AccountsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/accounts/accounts.edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accounts_service__ = __webpack_require__("../../../../../src/app/layout/accounts/accounts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountsEditComponent = (function () {
    function AccountsEditComponent(_fb, accountsService, router, route) {
        var _this = this;
        this._fb = _fb;
        this.accountsService = accountsService;
        this.router = router;
        this.route = route;
        this.rows = [];
        this.accountsService.getAccountTypes().subscribe(function (res) {
            if (res.status === 200 || res.status === 304) {
                var resdata = res.json().rows;
                // this.rows = res.json().rows;
                _this.accountOption = resdata.slice();
            }
            else {
                _this.accountOption = [];
            }
        });
    }
    AccountsEditComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.currentItemID = this.route.snapshot.params['id'];
        this.getAccounts(this.currentItemID);
    };
    AccountsEditComponent.prototype.initForm = function () {
        this.accountsForm = this._fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            desc: [''],
            accounttype: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]]
        });
    };
    AccountsEditComponent.prototype.patchForm = function () {
        this.accountsForm.setValue({
            name: this.accountsdata.name,
            desc: this.accountsdata.desc,
            accounttype: this.accountsdata.accounttype ? this.accountsdata.accounttype.id : ''
        });
        // this.accountsForm.patchValue(this.accountsdata);
    };
    AccountsEditComponent.prototype.getAccounts = function (id) {
        var _this = this;
        this.accountsService.getAccountsByID(id).subscribe(function (res) {
            if (res.status === 200 || res.status === 304) {
                //  let resdata = res.json().rows;
                _this.accountsdata = res.json();
                _this.patchForm();
            }
            else {
                // this.accountsdata = []
            }
        });
    };
    AccountsEditComponent.prototype.onAdd = function () {
        var _this = this;
        this.accountsService.editAccounts(this.accountsForm.value, this.currentItemID).subscribe(function (res) { return res.status === 200 || res.status === 201 ? _this.router.navigate(['/accounts']) : _this.router.navigate(['/404']); });
    };
    AccountsEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-accounts',
            template: __webpack_require__("../../../../../src/app/layout/accounts/accounts.add.component.html"),
            //  styleUrls: ['./accounts.component.scss'],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__accounts_service__["a" /* AccountsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AccountsEditComponent);
    return AccountsEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/accounts/accounts.list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col col-xl-12\">\r\n      <div class=\"card mb-3\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n           <fieldset class=\"form-group col-md-4\">\r\n           <input\r\n            class=\"form-control\"\r\n             type='text'\r\n             id=\"name\"\r\n             placeholder='Filter by Accounts Name'\r\n             (keyup)='updateFilter($event)'\r\n           />\r\n          </fieldset>\r\n           </div>\r\n            <ngx-datatable\r\n              #accountstable\r\n              class=\"bootstrap\"\r\n              [rows]=\"rows\"\r\n              [columns]=\"columns\"\r\n              [columnMode]=\"'force'\"\r\n              [headerHeight]=\"40\"\r\n              [footerHeight]=\"40\"\r\n              [rowHeight]=\"'auto'\"\r\n              [limit]=\"10\"\r\n              [loadingIndicator]=\"loading\"\r\n              >\r\n            </ngx-datatable>\r\n            \r\n            <ng-template #hdrTpl let-column=\"column\" >\r\n             <strong>Action</strong>\r\n            </ng-template>\r\n\r\n            <ng-template #accountTypeTmpl let-row=\"row\" let-value=\"value\">\r\n              {{value.name}}\r\n            </ng-template>\r\n\r\n            <ng-template #editTmpl let-row=\"row\" let-value=\"value\">\r\n             <a [routerLink]=\"['./edit', value]\" class=\"btn btn-success\"><i class=\"fa fa-edit\"></i></a>\r\n             <app-modal (onSuccess)=\"onDelete(value)\" [title]=\"Confirm\" [bodyContent]=\"'Confirm your Accounts delete action.'\"></app-modal>\r\n           </ng-template>\r\n          </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/accounts/accounts.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accounts_service__ = __webpack_require__("../../../../../src/app/layout/accounts/accounts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountsListComponent = (function () {
    function AccountsListComponent(accountsService, router) {
        var _this = this;
        this.accountsService = accountsService;
        this.router = router;
        this.rows = [];
        this.temp = [];
        this.columns = [];
        this.loading = false;
        this.loading = true;
        this.accountsService.getAccounts().subscribe(function (res) {
            if (res.status === 200 || res.status === 304) {
                var resdata = res.json().rows;
                _this.rows = res.json().rows;
                _this.temp = resdata.slice();
                console.log(_this.temp);
            }
            else {
                _this.rows = [];
            }
        });
    }
    AccountsListComponent.prototype.ngOnInit = function () {
        this.columns = [
            { prop: 'name' },
            {
                cellTemplate: this.accountTypeTmpl,
                name: 'Account Type',
                prop: 'accounttype'
            },
            {
                cellTemplate: this.editTmpl,
                headerTemplate: this.hdrTpl,
                name: 'id'
            },
        ];
    };
    AccountsListComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.accountsService.deleteItem(id).subscribe(function (res) {
            if (res.status === 200 || res.status === 204) {
                _this.rows = _this.rows.filter(function (d) {
                    return d.id !== id;
                });
            }
        });
    };
    AccountsListComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        var field = event.target.id;
        // filter our data
        if (field == 'name') {
            var temp = this.temp.filter(function (d) {
                return d.name.toLowerCase().indexOf(val) !== -1 || !val;
            });
            this.rows = temp;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editTmpl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], AccountsListComponent.prototype, "editTmpl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('hdrTpl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], AccountsListComponent.prototype, "hdrTpl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('accountTypeTmpl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], AccountsListComponent.prototype, "accountTypeTmpl", void 0);
    AccountsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-accounts',
            template: __webpack_require__("../../../../../src/app/layout/accounts/accounts.list.component.html"),
            //  styleUrls: ['./accounts.component.scss'],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_2__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__accounts_service__["a" /* AccountsService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AccountsListComponent);
    return AccountsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/accounts/accounts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsModule", function() { return AccountsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accounts_routing_module__ = __webpack_require__("../../../../../src/app/layout/accounts/accounts-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accounts_component__ = __webpack_require__("../../../../../src/app/layout/accounts/accounts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__accounts_add_component__ = __webpack_require__("../../../../../src/app/layout/accounts/accounts.add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__accounts_list_component__ = __webpack_require__("../../../../../src/app/layout/accounts/accounts.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__accounts_service__ = __webpack_require__("../../../../../src/app/layout/accounts/accounts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__accounts_edit_component__ = __webpack_require__("../../../../../src/app/layout/accounts/accounts.edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AccountsModule = (function () {
    function AccountsModule() {
    }
    AccountsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__accounts_routing_module__["a" /* AccountsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared__["c" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_8__shared__["b" /* ModalModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__accounts_component__["a" /* AccountsComponent */], __WEBPACK_IMPORTED_MODULE_6__accounts_add_component__["a" /* AccountsAddComponent */],
                __WEBPACK_IMPORTED_MODULE_7__accounts_list_component__["a" /* AccountsListComponent */], __WEBPACK_IMPORTED_MODULE_11__accounts_edit_component__["a" /* AccountsEditComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__accounts_service__["a" /* AccountsService */]]
        })
    ], AccountsModule);
    return AccountsModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/accounts/accounts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsService; });
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


var AccountsService = (function () {
    function AccountsService(authService) {
        this.authService = authService;
        this.userOptions = {
            userPath: 'accounts',
            accountTypePath: 'accounttype'
        };
    }
    AccountsService.prototype.getAccountTypes = function () {
        var _this = this;
        var observ = this.authService.get(this.userOptions.accountTypePath +
            '?access_token=' + this.authService.currentAuthData.accessToken +
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
    AccountsService.prototype.getAccountsByID = function (id) {
        var _this = this;
        var observ = this.authService.get(this.userOptions.userPath + '/' + id +
            '?access_token=' + this.authService.currentAuthData.accessToken);
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
    AccountsService.prototype.getAccounts = function () {
        var _this = this;
        var observ = this.authService.get(this.userOptions.userPath + '?access_token=' + this.authService.currentAuthData.accessToken + '&shop=' + JSON.parse(this.authService.currentAuthData.currentShop).sid.id);
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
    AccountsService.prototype.addAccounts = function (body) {
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
    AccountsService.prototype.editAccounts = function (body, id) {
        var _this = this;
        body.access_token = this.authService.currentAuthData.accessToken;
        var observ = this.authService.put(this.userOptions.userPath + '/' + id, body);
        observ.subscribe(function (res) {
            _this.itemData = res.json();
            console.log(_this.itemData);
            // this.authSservice.userSignedIn$.next(true);
        }, function (error) {
            if (error.status === 401) {
                ///  this.signOut();
            }
        });
        return observ;
    };
    // Validate token request
    AccountsService.prototype.deleteItem = function (id) {
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
    AccountsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_token_auth_token_service__["a" /* AuthTokenService */]])
    ], AccountsService);
    return AccountsService;
}());



/***/ })

});
//# sourceMappingURL=accounts.module.chunk.js.map