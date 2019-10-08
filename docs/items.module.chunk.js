webpackJsonp(["items.module"],{

/***/ "../../../../../src/app/layout/items/items-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__items_component__ = __webpack_require__("../../../../../src/app/layout/items/items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__items_add_component__ = __webpack_require__("../../../../../src/app/layout/items/items.add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__items_list_component__ = __webpack_require__("../../../../../src/app/layout/items/items.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__items_edit_component__ = __webpack_require__("../../../../../src/app/layout/items/items.edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__items_component__["a" /* ItemsComponent */],
        children: [
            { path: 'add', component: __WEBPACK_IMPORTED_MODULE_3__items_add_component__["a" /* ItemsAddComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__items_list_component__["a" /* ItemsListComponent */] },
            { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_5__items_edit_component__["a" /* ItemsEditComponent */] },
        ]
    }
];
var ItemsRoutingModule = (function () {
    function ItemsRoutingModule() {
    }
    ItemsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ItemsRoutingModule);
    return ItemsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/items/items.add.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"itemsForm\" (ngSubmit)=\"onSubmit()\" class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <div class=\"row\">\r\n    <fieldset class=\"form-group col-xl-6\">\r\n        <label>Name</label>\r\n        <input [class.is-invalid]=\"itemsForm.controls.name.touched && !itemsForm.controls.name.valid\" required name=\"name\" formControlName=\"name\" class=\"form-control validate \">\r\n        <div class=\"invalid-feedback\">\r\n          Item Name is required.\r\n        </div>\r\n    </fieldset>\r\n    <fieldset class=\"form-group col-xl-6\">\r\n      <label>Item code</label>\r\n      <input [class.is-invalid]=\"itemsForm.controls.sku.touched && !itemsForm.controls.sku.valid\" required name=\"sku\" formControlName=\"sku\" class=\"form-control validate \">\r\n      <div class=\"invalid-feedback\">\r\n        Item SKU is required.\r\n      </div>\r\n    </fieldset>\r\n  </div>\r\n\r\n    <div class=\"row\">\r\n      <fieldset class=\"form-group col-xl-6\">\r\n          <label>UOM</label>\r\n          <select  name=\"unit\" formControlName=\"unit\" class=\"form-control validate \">\r\n              <option>select</option>\r\n              <option *ngFor=\"let item of umoOption\">{{item.name}}</option>\r\n            </select>\r\n          <div class=\"invalid-feedback\">\r\n            Item SKU is required.\r\n          </div>\r\n      </fieldset>\r\n      <fieldset class=\"form-group col-xl-6\">\r\n      <label>Category</label>\r\n      <input  ngui-auto-complete\r\n                  [source]=\"listCategory\"\r\n                  name=\"name\"\r\n                  [ngModel]=\"itemsdata.category\"\r\n                  [ngModelOptions]=\"{standalone: true}\"\r\n                  [re-focus-after-select]=false\r\n                  [select-on-blur]=true\r\n                  [accept-user-input]=false\r\n                  value-property-name=\"name\"\r\n                  display-property-name=\"name\"\r\n                  (valueChanged)=\"setValueCategory($event)\"\r\n                  [list-formatter]=\"autocompleItems\"\r\n                  placeholder=\"Select items\"\r\n                  class=\"form-control\">\r\n      <input type=\"hidden\" formControlName=\"category\" class=\"form-control\" />\r\n      </fieldset>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-xl-4\">\r\n          <label>Quantity</label>\r\n          <input [class.is-invalid]=\"itemsForm.controls.quantity.touched && !itemsForm.controls.quantity.valid\"  name=\"quantity\" formControlName=\"quantity\" class=\"form-control validate \">\r\n          <div class=\"invalid-feedback\">\r\n            Item quantity is required.\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group col-xl-4\">\r\n          <label>Unit Price</label>\r\n          <input [class.is-invalid]=\"itemsForm.controls.unitprice.touched && !itemsForm.controls.unitprice.valid\"  name=\"unitprice\" formControlName=\"unitprice\" class=\"form-control validate \">\r\n          <div class=\"invalid-feedback\">\r\n            Item unitprice is required.\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"form-group col-xl-4\">\r\n          <label>Actual Price</label>\r\n          <input [class.is-invalid]=\"itemsForm.controls.actualprice.touched && !itemsForm.controls.actualprice.valid\"  name=\"actualprice\" formControlName=\"actualprice\" class=\"form-control validate \">\r\n          <div class=\"invalid-feedback\">\r\n            Item actualprice is required.\r\n          </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <fieldset class=\"form-group\">\r\n        <label>Description</label>\r\n        <textarea name='desc' formControlName=\"desc\" class=\"form-control\" rows=\"3\"></textarea>\r\n    </fieldset>\r\n    <fieldset class=\"form-group\">\r\n        <label>Notes</label>\r\n        <textarea name='notes' formControlName=\"notes\" class=\"form-control\" rows=\"3\"></textarea>\r\n    </fieldset>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <button type=\"submit\" class=\"btn btn-secondary\" [disabled]=\"!(itemsForm.valid)\">Submit Button</button>\r\n    <button type=\"reset\" class=\"btn btn-secondary\">Reset Button</button>\r\n  <!--  <div class=\"row\" >{{itemsForm.value | json}}</div> -->\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/items/items.add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__items_service__ = __webpack_require__("../../../../../src/app/layout/items/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__category_category_service__ = __webpack_require__("../../../../../src/app/layout/category/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ItemsAddComponent = (function () {
    function ItemsAddComponent(_fb, _categoryService, itemsService, router) {
        this._fb = _fb;
        this._categoryService = _categoryService;
        this.itemsService = itemsService;
        this.router = router;
        this.rows = [];
        this.listCategory = [];
        this.itemsdata = {
            notes: '',
            desc: '',
            name: '',
            access_token: '',
            shop: '',
            createdBy: '',
            unit: '',
            category: ''
        };
        this.autocompleItems = function (data) {
            var html = "<span>" + data.name + "</span>";
            return html;
        };
    }
    ItemsAddComponent.prototype.ngOnInit = function () {
        this.loadCategory();
        this.initForm();
        this.umoOption = this.itemsService.getUnits();
    };
    ItemsAddComponent.prototype.loadCategory = function () {
        var _this = this;
        this._categoryService.getCategory().subscribe(function (res) {
            if (res.status === 200 || res.status === 304) {
                var resdata = res.json().rows;
                //  this.rows = res.json().rows;
                _this.listCategory = resdata.slice();
            }
            else {
                _this.listCategory = [];
            }
        });
    };
    ;
    ItemsAddComponent.prototype.setValueCategory = function (e) {
        this.itemsForm.get('category').setValue(e.id);
    };
    ItemsAddComponent.prototype.initForm = function () {
        this.itemsForm = this._fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            sku: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            quantity: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            unitprice: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            actualprice: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            desc: [''],
            notes: [''],
            category: [''],
            unit: ['']
        });
    };
    ItemsAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this.itemsService.addItems(this.itemsForm.value).subscribe(function (res) { return res.status === 200 || res.status === 201 ? _this.router.navigate(['/items']) : _this.router.navigate(['/404']); });
    };
    ItemsAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-items',
            template: __webpack_require__("../../../../../src/app/layout/items/items.add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/items/items.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__category_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_4__items_service__["a" /* ItemsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], ItemsAddComponent);
    return ItemsAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/items/items.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header activeurl=\"/items\" addurl=\"/items/add\" [heading]=\"'Items'\" [icon]=\"'fa-table'\"></app-page-header>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/items/items.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/items/items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsComponent; });
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



var ItemsComponent = (function () {
    function ItemsComponent() {
    }
    ItemsComponent.prototype.ngOnInit = function () { };
    ItemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-items',
            template: __webpack_require__("../../../../../src/app/layout/items/items.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/items/items.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/items/items.edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__items_service__ = __webpack_require__("../../../../../src/app/layout/items/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__category_category_service__ = __webpack_require__("../../../../../src/app/layout/category/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ItemsEditComponent = (function () {
    function ItemsEditComponent(_fb, itemsService, _categoryService, router, route) {
        this._fb = _fb;
        this.itemsService = itemsService;
        this._categoryService = _categoryService;
        this.router = router;
        this.route = route;
        this.rows = [];
        this.listCategory = [];
        this.itemsdata = {
            notes: '',
            desc: '',
            name: '',
            access_token: '',
            shop: '',
            createdBy: '',
            sku: '',
            quantity: '',
            unitprice: '',
            category: { id: '', name: '' },
            actualprice: '',
            unit: ''
        };
        this.autocompleItems = function (data) {
            var html = "<span>" + data.name + "</span>";
            return html;
        };
    }
    ItemsEditComponent.prototype.ngOnInit = function () {
        this.loadCategory();
        this.initForm();
        this.currentItemID = this.route.snapshot.params['id'];
        this.getItems(this.currentItemID);
        this.umoOption = this.itemsService.getUnits();
    };
    ItemsEditComponent.prototype.loadCategory = function () {
        var _this = this;
        this._categoryService.getCategory().subscribe(function (res) {
            if (res.status === 200 || res.status === 304) {
                var resdata = res.json().rows;
                //  this.rows = res.json().rows;
                _this.listCategory = resdata.slice();
            }
            else {
                _this.listCategory = [];
            }
        });
    };
    ;
    ItemsEditComponent.prototype.initForm = function () {
        this.itemsForm = this._fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            sku: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            quantity: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            unitprice: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            actualprice: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            desc: [''],
            notes: [''],
            shop: [''],
            createdBy: [''],
            category: [''],
            unit: ['']
        });
    };
    ItemsEditComponent.prototype.patchForm = function () {
        this.itemsForm.setValue({
            name: this.itemsdata.name,
            desc: this.itemsdata.desc,
            sku: this.itemsdata.sku,
            quantity: this.itemsdata.quantity,
            unitprice: this.itemsdata.unitprice,
            actualprice: this.itemsdata.actualprice,
            notes: this.itemsdata.notes || '',
            shop: this.itemsdata.shop,
            category: this.itemsdata.category ? this.itemsdata.category.id : '',
            createdBy: this.itemsdata.createdBy || '',
            unit: this.itemsdata.unit || '',
        });
    };
    ItemsEditComponent.prototype.getItems = function (id) {
        var _this = this;
        this.itemsService.getItemsByID(id).subscribe(function (res) {
            if (res.status === 200 || res.status === 304) {
                //  let resdata = res.json().rows;
                _this.itemsdata = res.json();
                _this.patchForm();
            }
            else {
                // this.itemsdata = []
            }
        });
    };
    ItemsEditComponent.prototype.setValueCategory = function (e) {
        this.itemsForm.get('category').setValue(e.id);
    };
    ItemsEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.itemsService.editItems(this.itemsForm.value, this.currentItemID).subscribe(function (res) { return res.status === 200 || res.status === 201 ? _this.router.navigate(['/items']) : _this.router.navigate(['/404']); });
    };
    ItemsEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-items',
            template: __webpack_require__("../../../../../src/app/layout/items/items.add.component.html"),
            //  styleUrls: ['./items.component.scss'],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__items_service__["a" /* ItemsService */],
            __WEBPACK_IMPORTED_MODULE_5__category_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ItemsEditComponent);
    return ItemsEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/items/items.list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col col-xl-12\">\r\n      <div class=\"card mb-3\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n            <fieldset class=\"form-group col-md-4\">\r\n            <input\r\n             class=\"form-control\"\r\n              type='text'\r\n              id=\"sku\"\r\n              placeholder='Filter by sku'\r\n              (keyup)='updateFilter($event)'\r\n            />\r\n           </fieldset>\r\n           <fieldset class=\"form-group col-md-4\">\r\n           <input\r\n            class=\"form-control\"\r\n             type='text'\r\n             id=\"name\"\r\n             placeholder='Filter by name'\r\n             (keyup)='updateFilter($event)'\r\n           />\r\n          </fieldset>\r\n           </div>\r\n            <ngx-datatable\r\n              #itemstable\r\n              class=\"bootstrap\"\r\n              [rows]=\"rows\"\r\n              [columns]=\"columns\"\r\n              [columnMode]=\"'force'\"\r\n              [headerHeight]=\"40\"\r\n              [footerHeight]=\"40\"\r\n              [rowHeight]=\"'auto'\"\r\n              [limit]=\"10\"\r\n              [loadingIndicator]=\"loading\"\r\n              >\r\n            </ngx-datatable>\r\n            <ng-template #hdrTpl let-column=\"column\" >\r\n             <strong>Action</strong>\r\n            </ng-template>\r\n            <ng-template #categoryTmpl let-row=\"row\" let-value=\"value\">\r\n             {{value.name}}\r\n           </ng-template>\r\n\r\n            <ng-template #editTmpl let-row=\"row\" let-value=\"value\">\r\n             <a [routerLink]=\"['./edit', value]\" class=\"btn btn-success\"><i class=\"fa fa-edit\"></i></a>\r\n             <!-- <a (click)=\"onDelete(value)\" class=\"btn btn-success\"><i class=\"fa fa-trash\"></i></a> -->\r\n             <app-modal (onSuccess)=\"onDelete(value)\" [title]=\"Confirm\" [bodyContent]=\"'Confirm your Item delete action.'\"></app-modal>\r\n           </ng-template>\r\n\r\n          </div>\r\n\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/items/items.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__items_service__ = __webpack_require__("../../../../../src/app/layout/items/items.service.ts");
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






var ItemsListComponent = (function () {
    function ItemsListComponent(itemsService, router) {
        var _this = this;
        this.itemsService = itemsService;
        this.router = router;
        this.rows = [];
        this.temp = [];
        this.columns = [];
        this.loading = false;
        this.loading = true;
        this.itemsService.getItems().subscribe(function (res) {
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
    ItemsListComponent.prototype.ngOnInit = function () {
        this.columns = [
            {
                name: 'sku'
            },
            { prop: 'name' },
            { name: 'desc' },
            {
                cellTemplate: this.categoryTmpl,
                name: 'category'
            },
            { name: 'unitprice' },
            { name: 'quantity' },
            {
                cellTemplate: this.editTmpl,
                headerTemplate: this.hdrTpl,
                name: 'id'
            },
        ];
    };
    ItemsListComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.itemsService.deleteItem(id).subscribe(function (res) {
            if (res.status === 200 || res.status === 204) {
                _this.rows = _this.rows.filter(function (d) {
                    return d.id !== id;
                });
            }
        });
    };
    ItemsListComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        var field = event.target.id;
        // filter our data
        if (field == 'name') {
            var temp = this.temp.filter(function (d) {
                return d.name.toLowerCase().indexOf(val) !== -1 || !val;
            });
            this.rows = temp;
        }
        else {
            var temp = this.temp.filter(function (d) {
                return d.sku.toLowerCase().indexOf(val) !== -1 || !val;
            });
            this.rows = temp;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editTmpl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], ItemsListComponent.prototype, "editTmpl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('hdrTpl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], ItemsListComponent.prototype, "hdrTpl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('categoryTmpl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], ItemsListComponent.prototype, "categoryTmpl", void 0);
    ItemsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-items',
            template: __webpack_require__("../../../../../src/app/layout/items/items.list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/items/items.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_2__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__items_service__["a" /* ItemsService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], ItemsListComponent);
    return ItemsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/items/items.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsModule", function() { return ItemsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__items_routing_module__ = __webpack_require__("../../../../../src/app/layout/items/items-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__items_component__ = __webpack_require__("../../../../../src/app/layout/items/items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__items_add_component__ = __webpack_require__("../../../../../src/app/layout/items/items.add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__items_list_component__ = __webpack_require__("../../../../../src/app/layout/items/items.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngui_auto_complete__ = __webpack_require__("../../../../@ngui/auto-complete/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngui_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__ngui_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__items_service__ = __webpack_require__("../../../../../src/app/layout/items/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__category_category_service__ = __webpack_require__("../../../../../src/app/layout/category/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__items_edit_component__ = __webpack_require__("../../../../../src/app/layout/items/items.edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ItemsModule = (function () {
    function ItemsModule() {
    }
    ItemsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_4__items_routing_module__["a" /* ItemsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared__["c" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"], __WEBPACK_IMPORTED_MODULE_8__shared__["b" /* ModalModule */],
                __WEBPACK_IMPORTED_MODULE_10__ngui_auto_complete__["NguiAutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot()],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__items_component__["a" /* ItemsComponent */], __WEBPACK_IMPORTED_MODULE_6__items_add_component__["a" /* ItemsAddComponent */],
                __WEBPACK_IMPORTED_MODULE_7__items_list_component__["a" /* ItemsListComponent */], __WEBPACK_IMPORTED_MODULE_13__items_edit_component__["a" /* ItemsEditComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_11__items_service__["a" /* ItemsService */], __WEBPACK_IMPORTED_MODULE_12__category_category_service__["a" /* CategoryService */]]
        })
    ], ItemsModule);
    return ItemsModule;
}());



/***/ })

});
//# sourceMappingURL=items.module.chunk.js.map