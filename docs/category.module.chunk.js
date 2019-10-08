webpackJsonp(["category.module"],{

/***/ "../../../../../src/app/layout/category/category-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_component__ = __webpack_require__("../../../../../src/app/layout/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_add_component__ = __webpack_require__("../../../../../src/app/layout/category/category.add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category_list_component__ = __webpack_require__("../../../../../src/app/layout/category/category.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__category_edit_component__ = __webpack_require__("../../../../../src/app/layout/category/category.edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__category_component__["a" /* CategoryComponent */],
        children: [
            { path: 'add', component: __WEBPACK_IMPORTED_MODULE_3__category_add_component__["a" /* CategoryAddComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__category_list_component__["a" /* CategoryListComponent */] },
            { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_5__category_edit_component__["a" /* CategoryEditComponent */] },
        ]
    }
];
var CategoryRoutingModule = (function () {
    function CategoryRoutingModule() {
    }
    CategoryRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], CategoryRoutingModule);
    return CategoryRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/category/category.add.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"categoryForm\" (ngSubmit)=\"onAdd()\">\r\n  <div class=\"row\">\r\n    <fieldset class=\"form-group col-md-6\">\r\n      <label>Category Name</label>\r\n      <input [class.is-invalid]=\"categoryForm.controls.name.touched && !categoryForm.controls.name.valid\" required name=\"name\" formControlName=\"name\" class=\"form-control validate \">\r\n      <div class=\"invalid-feedback\">\r\n        category Name is required.\r\n      </div>\r\n    </fieldset>\r\n  </div>\r\n  <div class=\"row\">\r\n    <fieldset class=\"form-group col-md-6\">\r\n      <label>Description</label>\r\n        <textarea name=\"desc\" formControlName=\"desc\" class=\"form-control validate\" rows=\"3\"></textarea>\r\n      </fieldset>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n      <button type=\"submit\" class=\"btn btn-secondary\" [disabled]=\"!(categoryForm.valid)\">Submit Button</button>\r\n      <button type=\"reset\" class=\"btn btn-secondary\">Reset Button</button>\r\n    <!--  <div class=\"row\" >{{categoryForm.value | json}}</div> -->\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/category/category.add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category_service__ = __webpack_require__("../../../../../src/app/layout/category/category.service.ts");
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







var CategoryAddComponent = (function () {
    function CategoryAddComponent(_fb, categoryService, router) {
        this._fb = _fb;
        this.categoryService = categoryService;
        this.router = router;
        this.rows = [];
    }
    CategoryAddComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    CategoryAddComponent.prototype.initForm = function () {
        this.categoryForm = this._fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            desc: ['']
        });
    };
    CategoryAddComponent.prototype.onAdd = function () {
        var _this = this;
        this.categoryService.addCategory(this.categoryForm.value).subscribe(function (res) { return res.status === 200 || res.status === 201 ? _this.router.navigate(['/category']) : _this.router.navigate(['/404']); });
    };
    CategoryAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-category',
            template: __webpack_require__("../../../../../src/app/layout/category/category.add.component.html"),
            //  styleUrls: ['./category.component.scss'],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], CategoryAddComponent);
    return CategoryAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [activeurl]=\"'/category'\" [addurl]=\"'/category/add'\" [heading]=\"'Category'\" [icon]=\"'fa-table'\"></app-page-header>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
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



var CategoryComponent = (function () {
    function CategoryComponent() {
    }
    CategoryComponent.prototype.ngOnInit = function () { };
    CategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-category',
            template: __webpack_require__("../../../../../src/app/layout/category/category.component.html"),
            //  styleUrls: ['./category.component.scss'],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/category/category.edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"categoryForm\" (ngSubmit)=\"onEdit()\">\r\n  <div class=\"row\">\r\n    <fieldset class=\"form-group col-md-6\">\r\n      <label>Category Name</label>\r\n      <input [class.is-invalid]=\"categoryForm.controls.name.touched && !categoryForm.controls.name.valid\" required name=\"name\" formControlName=\"name\" class=\"form-control validate \">\r\n      <div class=\"invalid-feedback\">\r\n        category Name is required.\r\n      </div>\r\n    </fieldset>\r\n  </div>\r\n  <div class=\"row\">\r\n    <fieldset class=\"form-group col-md-6\">\r\n      <label>Description</label>\r\n        <textarea name=\"desc\" formControlName=\"desc\" class=\"form-control validate\" rows=\"3\"></textarea>\r\n      </fieldset>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n      <button type=\"submit\" class=\"btn btn-secondary\" [disabled]=\"!(categoryForm.valid)\">Submit Button</button>\r\n      <button type=\"reset\" class=\"btn btn-secondary\">Reset Button</button>\r\n      <!-- <div class=\"row\" >{{categoryForm.value | json}}</div> -->\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/category/category.edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category_service__ = __webpack_require__("../../../../../src/app/layout/category/category.service.ts");
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







var CategoryEditComponent = (function () {
    function CategoryEditComponent(_fb, categoryService, router, route) {
        this._fb = _fb;
        this.categoryService = categoryService;
        this.router = router;
        this.route = route;
        this.rows = [];
        this.categorydata = {
            desc: '',
            name: ''
        };
    }
    CategoryEditComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.currentItemID = this.route.snapshot.params['id'];
        this.getCategory(this.currentItemID);
    };
    CategoryEditComponent.prototype.initForm = function () {
        this.categoryForm = this._fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            desc: ['']
        });
    };
    CategoryEditComponent.prototype.patchForm = function () {
        this.categoryForm.setValue({
            name: this.categorydata.name,
            desc: this.categorydata.desc
        });
    };
    CategoryEditComponent.prototype.getCategory = function (id) {
        var _this = this;
        this.categoryService.getCategoryByID(id).subscribe(function (res) {
            if (res.status === 200 || res.status === 304) {
                //  let resdata = res.json().rows;
                _this.categorydata = res.json();
                _this.patchForm();
            }
            else {
                // this.categorydata = []
            }
        });
    };
    CategoryEditComponent.prototype.onEdit = function () {
        var _this = this;
        this.categoryService.editCategory(this.categoryForm.value, this.currentItemID).subscribe(function (res) { return res.status === 200 || res.status === 201 ? _this.router.navigate(['/category']) : _this.router.navigate(['/404']); });
    };
    CategoryEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-category',
            template: __webpack_require__("../../../../../src/app/layout/category/category.edit.component.html"),
            //  styleUrls: ['./category.component.scss'],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], CategoryEditComponent);
    return CategoryEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/category/category.list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col col-xl-12\">\r\n      <div class=\"card mb-3\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n           <fieldset class=\"form-group col-md-4\">\r\n           <input\r\n            class=\"form-control\"\r\n             type='text'\r\n             id=\"name\"\r\n             placeholder='Filter by Category Name'\r\n             (keyup)='updateFilter($event)'\r\n           />\r\n          </fieldset>\r\n           </div>\r\n            <ngx-datatable\r\n              #categorytable\r\n              class=\"bootstrap\"\r\n              [rows]=\"rows\"\r\n              [columns]=\"columns\"\r\n              [columnMode]=\"'force'\"\r\n              [headerHeight]=\"40\"\r\n              [footerHeight]=\"40\"\r\n              [rowHeight]=\"'auto'\"\r\n              [limit]=\"10\"\r\n              [loadingIndicator]=\"loading\"\r\n              >\r\n            </ngx-datatable>\r\n            <ng-template #hdrTpl let-column=\"column\" >\r\n             <strong>Action</strong>\r\n            </ng-template>\r\n            <ng-template #editTmpl let-row=\"row\" let-value=\"value\">\r\n             <a [routerLink]=\"['./edit', value]\" class=\"btn btn-success\"><i class=\"fa fa-edit\"></i></a>\r\n             <app-modal (onSuccess)=\"onDelete(value)\" [title]=\"Confirm\" [bodyContent]=\"'Confirm your Category delete action.'\"></app-modal>\r\n           </ng-template>\r\n          </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/category/category.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_service__ = __webpack_require__("../../../../../src/app/layout/category/category.service.ts");
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






var CategoryListComponent = (function () {
    function CategoryListComponent(categoryService, router) {
        var _this = this;
        this.categoryService = categoryService;
        this.router = router;
        this.rows = [];
        this.temp = [];
        this.columns = [];
        this.loading = false;
        this.loading = true;
        this.categoryService.getCategory().subscribe(function (res) {
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
    CategoryListComponent.prototype.ngOnInit = function () {
        this.columns = [
            { prop: 'name' },
            { name: 'desc' },
            {
                cellTemplate: this.editTmpl,
                headerTemplate: this.hdrTpl,
                name: 'id'
            },
        ];
    };
    CategoryListComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.categoryService.deleteItem(id).subscribe(function (res) {
            if (res.status === 200 || res.status === 204) {
                _this.rows = _this.rows.filter(function (d) {
                    return d.id !== id;
                });
            }
        });
    };
    CategoryListComponent.prototype.updateFilter = function (event) {
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
    ], CategoryListComponent.prototype, "editTmpl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('hdrTpl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], CategoryListComponent.prototype, "hdrTpl", void 0);
    CategoryListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-category',
            template: __webpack_require__("../../../../../src/app/layout/category/category.list.component.html"),
            //  styleUrls: ['./category.component.scss'],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_2__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], CategoryListComponent);
    return CategoryListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/category/category.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category_routing_module__ = __webpack_require__("../../../../../src/app/layout/category/category-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__category_component__ = __webpack_require__("../../../../../src/app/layout/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__category_add_component__ = __webpack_require__("../../../../../src/app/layout/category/category.add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__category_list_component__ = __webpack_require__("../../../../../src/app/layout/category/category.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__category_service__ = __webpack_require__("../../../../../src/app/layout/category/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__category_edit_component__ = __webpack_require__("../../../../../src/app/layout/category/category.edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var CategoryModule = (function () {
    function CategoryModule() {
    }
    CategoryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__category_routing_module__["a" /* CategoryRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared__["c" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_8__shared__["b" /* ModalModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__category_component__["a" /* CategoryComponent */], __WEBPACK_IMPORTED_MODULE_6__category_add_component__["a" /* CategoryAddComponent */],
                __WEBPACK_IMPORTED_MODULE_7__category_list_component__["a" /* CategoryListComponent */], __WEBPACK_IMPORTED_MODULE_11__category_edit_component__["a" /* CategoryEditComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__category_service__["a" /* CategoryService */]]
        })
    ], CategoryModule);
    return CategoryModule;
}());



/***/ })

});
//# sourceMappingURL=category.module.chunk.js.map