webpackJsonp(["tax.module"],{

/***/ "../../../../../src/app/layout/tax/tax-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tax_component__ = __webpack_require__("../../../../../src/app/layout/tax/tax.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tax_add_component__ = __webpack_require__("../../../../../src/app/layout/tax/tax.add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tax_list_component__ = __webpack_require__("../../../../../src/app/layout/tax/tax.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tax_edit_component__ = __webpack_require__("../../../../../src/app/layout/tax/tax.edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__tax_component__["a" /* TaxComponent */],
        children: [
            { path: 'add', component: __WEBPACK_IMPORTED_MODULE_3__tax_add_component__["a" /* TaxAddComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__tax_list_component__["a" /* TaxListComponent */] },
            { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_5__tax_edit_component__["a" /* TaxEditComponent */] },
        ]
    }
];
var TaxRoutingModule = (function () {
    function TaxRoutingModule() {
    }
    TaxRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], TaxRoutingModule);
    return TaxRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/tax/tax.add.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<form [formGroup]=\"taxForm\" (ngSubmit)=\"onAdd()\">\r\n  <div class=\"row\">\r\n    <fieldset class=\"form-group col-md-6\">\r\n      <label>Tax Name</label>\r\n      <input [class.is-invalid]=\"taxForm.controls.name.touched && !taxForm.controls.name.valid\" required name=\"name\" formControlName=\"name\" class=\"form-control validate \">\r\n      <div class=\"invalid-feedback\">\r\n        tax Name is required.\r\n      </div>\r\n    </fieldset>\r\n    <fieldset class=\"form-group col-md-6\">\r\n      <label>code</label>\r\n        <input name=\"code\" formControlName=\"code\" class=\"form-control validate\">\r\n      </fieldset>\r\n  </div>\r\n  <div class=\"row\">\r\n    <fieldset class=\"form-group col-md-6\">\r\n      <label>Rate</label>\r\n        <input name=\"rate\" formControlName=\"rate\" class=\"form-control validate\">\r\n      </fieldset>\r\n    <fieldset class=\"form-group col-md-6\">\r\n      <label>Type</label>\r\n      <select class=\"form-control\" formControlName=\"type\">\r\n          <option value=\"percentage\" [selected]=\"true\" >Percentage</option>\r\n          <option value=\"fixed\">Fixed</option>\r\n      </select>\r\n    </fieldset>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n      <button type=\"submit\" class=\"btn btn-secondary\" [disabled]=\"!(taxForm.valid)\">Submit Button</button>\r\n      <button type=\"reset\" class=\"btn btn-secondary\">Reset Button</button>\r\n  <!--   <div class=\"row\" >{{taxForm.value | json}}</div> -->\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/tax/tax.add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tax_service__ = __webpack_require__("../../../../../src/app/layout/tax/tax.service.ts");
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







var TaxAddComponent = (function () {
    function TaxAddComponent(_fb, taxService, router) {
        this._fb = _fb;
        this.taxService = taxService;
        this.router = router;
        this.rows = [];
    }
    TaxAddComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    TaxAddComponent.prototype.initForm = function () {
        this.taxForm = this._fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            code: [''],
            rate: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            type: ['percentage', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]]
        });
    };
    TaxAddComponent.prototype.onAdd = function () {
        var _this = this;
        this.taxService.addTax(this.taxForm.value).subscribe(function (res) { return res.status === 200 || res.status === 201 ? _this.router.navigate(['/tax']) : _this.router.navigate(['/404']); });
    };
    TaxAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tax',
            template: __webpack_require__("../../../../../src/app/layout/tax/tax.add.component.html"),
            //  styleUrls: ['./tax.component.scss'],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__tax_service__["a" /* TaxService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], TaxAddComponent);
    return TaxAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/tax/tax.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [activeurl]=\"'/tax'\" [addurl]=\"'/tax/add'\" [heading]=\"'Tax'\" [icon]=\"'fa-table'\"></app-page-header>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/tax/tax.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxComponent; });
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



var TaxComponent = (function () {
    function TaxComponent() {
    }
    TaxComponent.prototype.ngOnInit = function () { };
    TaxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tax',
            template: __webpack_require__("../../../../../src/app/layout/tax/tax.component.html"),
            //  styleUrls: ['./category.component.scss'],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [])
    ], TaxComponent);
    return TaxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/tax/tax.edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"taxForm\" (ngSubmit)=\"onEdit()\">\r\n  <div class=\"row\">\r\n    <fieldset class=\"form-group col-md-6\">\r\n      <label>Tax Name</label>\r\n      <input [class.is-invalid]=\"taxForm.controls.name.touched && !taxForm.controls.name.valid\" required name=\"name\" formControlName=\"name\" class=\"form-control validate \">\r\n      <div class=\"invalid-feedback\">\r\n        tax Name is required.\r\n      </div>\r\n    </fieldset>\r\n    <fieldset class=\"form-group col-md-6\">\r\n      <label>code</label>\r\n        <input name=\"code\" formControlName=\"code\" class=\"form-control validate\">\r\n      </fieldset>\r\n  </div>\r\n  <div class=\"row\">\r\n    <fieldset class=\"form-group col-md-6\">\r\n      <label>Rate</label>\r\n        <input name=\"rate\" formControlName=\"rate\" class=\"form-control validate\">\r\n      </fieldset>\r\n    <fieldset class=\"form-group col-md-6\">\r\n      <label>Type</label>\r\n      <select class=\"form-control\" formControlName=\"type\">\r\n          <option value=\"percentage\" [selected]=\"true\" >Percentage</option>\r\n          <option value=\"fixed\">Fixed</option>\r\n      </select>\r\n    </fieldset>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n      <button type=\"submit\" class=\"btn btn-secondary\" [disabled]=\"!(taxForm.valid)\">Submit Button</button>\r\n      <button type=\"reset\" class=\"btn btn-secondary\">Reset Button</button>\r\n      <!-- <div class=\"row\" >{{taxForm.value | json}}</div> -->\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/tax/tax.edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tax_service__ = __webpack_require__("../../../../../src/app/layout/tax/tax.service.ts");
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







var TaxEditComponent = (function () {
    function TaxEditComponent(_fb, taxService, router, route) {
        this._fb = _fb;
        this.taxService = taxService;
        this.router = router;
        this.route = route;
        this.rows = [];
    }
    TaxEditComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.currentItemID = this.route.snapshot.params['id'];
        this.getTax(this.currentItemID);
    };
    TaxEditComponent.prototype.initForm = function () {
        this.taxForm = this._fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            code: [''],
            rate: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            type: ['percentage', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]]
        });
    };
    TaxEditComponent.prototype.patchForm = function () {
        this.taxForm.patchValue(this.taxdata);
    };
    TaxEditComponent.prototype.getTax = function (id) {
        var _this = this;
        this.taxService.getTaxByID(id).subscribe(function (res) {
            if (res.status === 200 || res.status === 304) {
                //  let resdata = res.json().rows;
                _this.taxdata = res.json();
                _this.patchForm();
            }
            else {
                // this.taxdata = []
            }
        });
    };
    TaxEditComponent.prototype.onEdit = function () {
        var _this = this;
        this.taxService.editTax(this.taxForm.value, this.currentItemID).subscribe(function (res) { return res.status === 200 || res.status === 201 ? _this.router.navigate(['/tax']) : _this.router.navigate(['/404']); });
    };
    TaxEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tax',
            template: __webpack_require__("../../../../../src/app/layout/tax/tax.edit.component.html"),
            //  styleUrls: ['./tax.component.scss'],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__tax_service__["a" /* TaxService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], TaxEditComponent);
    return TaxEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/tax/tax.list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col col-xl-12\">\r\n      <div class=\"card mb-3\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n           <fieldset class=\"form-group col-md-4\">\r\n           <input\r\n            class=\"form-control\"\r\n             type='text'\r\n             id=\"name\"\r\n             placeholder='Filter by Tax Name'\r\n             (keyup)='updateFilter($event)'\r\n           />\r\n          </fieldset>\r\n           </div>\r\n            <ngx-datatable\r\n              #taxtable\r\n              class=\"bootstrap\"\r\n              [rows]=\"rows\"\r\n              [columns]=\"columns\"\r\n              [columnMode]=\"'force'\"\r\n              [headerHeight]=\"40\"\r\n              [footerHeight]=\"40\"\r\n              [rowHeight]=\"'auto'\"\r\n              [limit]=\"10\"\r\n              [loadingIndicator]=\"loading\"\r\n              >\r\n            </ngx-datatable>\r\n            <ng-template #hdrTpl let-column=\"column\" >\r\n             <strong>Action</strong>\r\n            </ng-template>\r\n            <ng-template #editTmpl let-row=\"row\" let-value=\"value\">\r\n             <a [routerLink]=\"['./edit', value]\" class=\"btn btn-success\"><i class=\"fa fa-edit\"></i></a>\r\n             <app-modal (onSuccess)=\"onDelete(value)\" [title]=\"Confirm\" [bodyContent]=\"'Confirm your Tax delete action.'\"></app-modal>\r\n           </ng-template>\r\n          </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/tax/tax.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tax_service__ = __webpack_require__("../../../../../src/app/layout/tax/tax.service.ts");
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






var TaxListComponent = (function () {
    function TaxListComponent(taxService, router) {
        var _this = this;
        this.taxService = taxService;
        this.router = router;
        this.rows = [];
        this.temp = [];
        this.columns = [];
        this.loading = false;
        this.loading = true;
        this.taxService.getTax().subscribe(function (res) {
            if (res.status === 200 || res.status === 304) {
                var resdata = res.json().rows;
                _this.rows = res.json().rows;
                _this.temp = resdata.slice();
            }
            else {
                _this.rows = [];
            }
        });
    }
    TaxListComponent.prototype.ngOnInit = function () {
        this.columns = [
            { prop: 'name' },
            { name: 'code' },
            { name: 'rate' },
            { name: 'type' },
            {
                cellTemplate: this.editTmpl,
                headerTemplate: this.hdrTpl,
                name: 'id'
            },
        ];
    };
    TaxListComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.taxService.deleteItem(id).subscribe(function (res) {
            if (res.status === 200 || res.status === 204) {
                _this.rows = _this.rows.filter(function (d) {
                    return d.id !== id;
                });
            }
        });
    };
    TaxListComponent.prototype.updateFilter = function (event) {
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
    ], TaxListComponent.prototype, "editTmpl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('hdrTpl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], TaxListComponent.prototype, "hdrTpl", void 0);
    TaxListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tax',
            template: __webpack_require__("../../../../../src/app/layout/tax/tax.list.component.html"),
            //  styleUrls: ['./tax.component.scss'],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_2__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__tax_service__["a" /* TaxService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], TaxListComponent);
    return TaxListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/tax/tax.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxModule", function() { return TaxModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tax_routing_module__ = __webpack_require__("../../../../../src/app/layout/tax/tax-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tax_component__ = __webpack_require__("../../../../../src/app/layout/tax/tax.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tax_add_component__ = __webpack_require__("../../../../../src/app/layout/tax/tax.add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tax_list_component__ = __webpack_require__("../../../../../src/app/layout/tax/tax.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tax_service__ = __webpack_require__("../../../../../src/app/layout/tax/tax.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tax_edit_component__ = __webpack_require__("../../../../../src/app/layout/tax/tax.edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var TaxModule = (function () {
    function TaxModule() {
    }
    TaxModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__tax_routing_module__["a" /* TaxRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared__["c" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_8__shared__["b" /* ModalModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__tax_component__["a" /* TaxComponent */], __WEBPACK_IMPORTED_MODULE_6__tax_add_component__["a" /* TaxAddComponent */],
                __WEBPACK_IMPORTED_MODULE_7__tax_list_component__["a" /* TaxListComponent */], __WEBPACK_IMPORTED_MODULE_11__tax_edit_component__["a" /* TaxEditComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__tax_service__["a" /* TaxService */]]
        })
    ], TaxModule);
    return TaxModule;
}());



/***/ })

});
//# sourceMappingURL=tax.module.chunk.js.map