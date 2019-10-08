webpackJsonp(["contacts.module"],{

/***/ "../../../../../src/app/layout/contacts/contacts-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts_component__ = __webpack_require__("../../../../../src/app/layout/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacts_add_component__ = __webpack_require__("../../../../../src/app/layout/contacts/contacts.add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contacts_list_component__ = __webpack_require__("../../../../../src/app/layout/contacts/contacts.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contacts_edit_component__ = __webpack_require__("../../../../../src/app/layout/contacts/contacts.edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__contacts_component__["a" /* ContactsComponent */],
        children: [
            { path: 'add', component: __WEBPACK_IMPORTED_MODULE_3__contacts_add_component__["a" /* ContactsAddComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__contacts_list_component__["a" /* ContactsListComponent */] },
            { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_5__contacts_edit_component__["a" /* ContactsEditComponent */] },
        ]
    }
];
var ContactsRoutingModule = (function () {
    function ContactsRoutingModule() {
    }
    ContactsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ContactsRoutingModule);
    return ContactsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/contacts/contacts.add.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"contactsForm\" (ngSubmit)=\"onSubmit()\" class=\"row\">\r\n  <div class=\"col-12\">\r\n    <fieldset class=\"form-group\">\r\n        <label>Contact Type:</label>\r\n        <label></label>\r\n        <label class=\"radio-inline\">\r\n            <input type=\"radio\" formControlName=\"type\" name=\"type\" id=\"type\" value=\"c\" checked=\"\"> Customer\r\n        </label>\r\n        <label class=\"radio-inline\">\r\n            <input type=\"radio\" formControlName=\"type\" name=\"type\" id=\"type\" value=\"v\"> Vendor\r\n        </label>\r\n        <label class=\"radio-inline\">\r\n            <input type=\"radio\" formControlName=\"type\" name=\"type\" id=\"type\" value=\"s\"> Sales Person\r\n        </label>\r\n    </fieldset>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n   \r\n\t <div class=\"row\">\r\n      <fieldset class=\"form-group col-6\">\r\n        <label>Name</label>\r\n        <input [class.is-invalid]=\"contactsForm.controls.name.touched && !contactsForm.controls.name.valid\" required name=\"name\" formControlName=\"name\" class=\"form-control validate \">\r\n        <div class=\"invalid-feedback\">\r\n          Item Name is required.\r\n        </div>\r\n    </fieldset>\r\n       <fieldset class=\"form-group col-6\">\r\n          <label>Company Name</label>\r\n          <input [class.is-invalid]=\"contactsForm.controls.company.touched && !contactsForm.controls.company.valid\" required name=\"company\" formControlName=\"company\" class=\"form-control validate \">\r\n          <div class=\"invalid-feedback\">\r\n            Item company is required.\r\n          </div>\r\n      </fieldset>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-6\">\r\n          <label>TRN Number</label>\r\n          <input name=\"trn\" formControlName=\"trn\" class=\"form-control validate \">\r\n      </div>\r\n      <div class=\"form-group col-6\">\r\n          <label>Contact email</label>\r\n          <input name=\"email\" formControlName=\"email\" class=\"form-control validate \">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-4\">\r\n          <label>Phone</label>\r\n          <input placeholder=\"Work\" name=\"phone\" formControlName=\"phone\" class=\"form-control validate \">\r\n      </div>\r\n\r\n      <div class=\"form-group col-4\">\r\n          <label>Mobile </label>\r\n          <input   name=\"mobile\" formControlName=\"mobile\" class=\"form-control validate \" placeholder=\"Mobile\">\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <fieldset class=\"form-group\">\r\n        <label>Billing Address</label>\r\n        <textarea name='baddress' formControlName=\"baddress\" class=\"form-control\" rows=\"3\"></textarea>\r\n    </fieldset>\r\n    <fieldset class=\"form-group\">\r\n        <label>Shipping Address</label>\r\n        <textarea name='saddress' formControlName=\"saddress\" class=\"form-control\" rows=\"3\"></textarea>\r\n    </fieldset>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!(contactsForm.valid)\">Save</button>\r\n    <button class=\"btn btn-outline-primary\">Cancel</button>\r\n  <!--  <div class=\"row\" >{{contactsForm.value | json}}</div> -->\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/contacts/contacts.add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contacts_service__ = __webpack_require__("../../../../../src/app/layout/contacts/contacts.service.ts");
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







var ContactsAddComponent = (function () {
    function ContactsAddComponent(_fb, contactsService, router) {
        this._fb = _fb;
        this.contactsService = contactsService;
        this.router = router;
        this.rows = [];
        this.listCategory = [];
        this.contactsdata = {
            notes: '',
            desc: '',
            name: '',
            access_token: '',
            shop: '',
            createdBy: '',
            trn: '',
        };
        this.autocompleContacts = function (data) {
            var html = "<span>" + data.name + "</span>";
            return html;
        };
    }
    ContactsAddComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    ContactsAddComponent.prototype.initForm = function () {
        this.contactsForm = this._fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            type: ['v', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            company: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            trn: [''],
            mobile: [''],
            baddress: [''],
            saddress: ['']
        });
    };
    ContactsAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this.contactsService.addContacts(this.contactsForm.value).subscribe(function (res) { return res.status === 200 || res.status === 201 ? _this.router.navigate(['/contacts']) : _this.router.navigate(['/404']); });
    };
    ContactsAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__("../../../../../src/app/layout/contacts/contacts.add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/contacts/contacts.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__contacts_service__["a" /* ContactsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], ContactsAddComponent);
    return ContactsAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header activeurl=\"/contacts\" addurl=\"/contacts/add\" [heading]=\"'Contacts'\" [icon]=\"'fa-table'\"></app-page-header>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/contacts/contacts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
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



var ContactsComponent = (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () { };
    ContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__("../../../../../src/app/layout/contacts/contacts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/contacts/contacts.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/contacts/contacts.edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contacts_service__ = __webpack_require__("../../../../../src/app/layout/contacts/contacts.service.ts");
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








var ContactsEditComponent = (function () {
    function ContactsEditComponent(_fb, contactsService, _categoryService, router, route) {
        this._fb = _fb;
        this.contactsService = contactsService;
        this._categoryService = _categoryService;
        this.router = router;
        this.route = route;
        this.rows = [];
        this.listCategory = [];
        this.contactsdata = {
            notes: '',
            type: '',
            email: '',
            company: '',
            shop: '',
            createdBy: '',
            phone: '',
            mobile: '',
            baddress: '',
            saddress: '',
            trn: '',
            name: ''
        };
    }
    ContactsEditComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.currentItemID = this.route.snapshot.params['id'];
        this.getContacts(this.currentItemID);
    };
    ContactsEditComponent.prototype.initForm = function () {
        this.contactsForm = this._fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            type: ['v', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            company: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            mobile: [''],
            baddress: [''],
            trn: [''],
            saddress: ['']
        });
    };
    ContactsEditComponent.prototype.patchForm = function () {
        this.contactsForm.patchValue(this.contactsdata);
        /*  this.contactsForm.setValue({
            name: this.contactsdata.name,
            type: this.contactsdata.type,
            email: this.contactsdata.email,
            company: this.contactsdata.company,
            phone: this.contactsdata.phone,
            mobile: this.contactsdata.mobile,
            baddress: this.contactsdata.baddress || '',
            shop: this.contactsdata.shop,
            saddress: this.contactsdata.saddress || '',
            createdBy: this.contactsdata.createdBy || ''
          });*/
    };
    ContactsEditComponent.prototype.getContacts = function (id) {
        var _this = this;
        this.contactsService.getContactsByID(id).subscribe(function (res) {
            if (res.status === 200 || res.status === 304) {
                //  let resdata = res.json().rows;
                _this.contactsdata = res.json();
                _this.patchForm();
            }
            else {
                // this.contactsdata = []
            }
        });
    };
    ContactsEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.contactsService.editContacts(this.contactsForm.value, this.currentItemID).subscribe(function (res) { return res.status === 200 || res.status === 201 ? _this.router.navigate(['/contacts']) : _this.router.navigate(['/404']); });
    };
    ContactsEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__("../../../../../src/app/layout/contacts/contacts.add.component.html"),
            //  styleUrls: ['./contacts.component.scss'],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__contacts_service__["a" /* ContactsService */],
            __WEBPACK_IMPORTED_MODULE_5__category_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ContactsEditComponent);
    return ContactsEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/contacts/contacts.list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col col-xl-12\">\r\n      <div class=\"card mb-3\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n            <fieldset class=\"form-group col-md-4\">\r\n            <input\r\n             class=\"form-control\"\r\n              type='text'\r\n              id=\"company\"\r\n              placeholder='Filter by company'\r\n              (keyup)='updateFilter($event)'\r\n            />\r\n           </fieldset>\r\n           <fieldset class=\"form-group col-md-4\">\r\n           <input\r\n            class=\"form-control\"\r\n             type='text'\r\n             id=\"name\"\r\n             placeholder='Filter by name'\r\n             (keyup)='updateFilter($event)'\r\n           />\r\n          </fieldset>\r\n           </div>\r\n            <ngx-datatable\r\n              #contactstable\r\n              class=\"bootstrap\"\r\n              [rows]=\"rows\"\r\n              [columns]=\"columns\"\r\n              [columnMode]=\"'force'\"\r\n              [headerHeight]=\"40\"\r\n              [footerHeight]=\"40\"\r\n              [rowHeight]=\"'auto'\"\r\n              [limit]=\"10\"\r\n              [loadingIndicator]=\"loading\"\r\n              >\r\n            </ngx-datatable>\r\n            <ng-template #hdrTpl let-column=\"column\" >\r\n             <strong>Action</strong>\r\n            </ng-template>\r\n            <ng-template #categoryTmpl let-row=\"row\" let-value=\"value\">\r\n             {{(value === 'c') ? 'Coustomer' : ((value === 'v') ? 'Vendor' : 'Sales Person')}}\r\n           </ng-template>\r\n\r\n            <ng-template #editTmpl let-row=\"row\" let-value=\"value\">\r\n             <a [routerLink]=\"['./edit', value]\" class=\"\"><i class=\"fa fa-edit\"></i></a>\r\n             <!-- <a (click)=\"onDelete(value)\" class=\"btn btn-success\"><i class=\"fa fa-trash\"></i></a> -->\r\n             <app-modal (onSuccess)=\"onDelete(value)\" [title]=\"Confirm\" [bodyContent]=\"'Confirm your Item delete action.'\"></app-modal>\r\n           </ng-template>\r\n\r\n          </div>\r\n\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/contacts/contacts.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacts_service__ = __webpack_require__("../../../../../src/app/layout/contacts/contacts.service.ts");
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






var ContactsListComponent = (function () {
    function ContactsListComponent(contactsService, router) {
        var _this = this;
        this.contactsService = contactsService;
        this.router = router;
        this.rows = [];
        this.temp = [];
        this.columns = [];
        this.loading = false;
        this.loading = true;
        this.contactsService.getContacts().subscribe(function (res) {
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
    ContactsListComponent.prototype.ngOnInit = function () {
        this.columns = [
            {
                cellTemplate: this.categoryTmpl,
                name: 'type'
            },
            { prop: 'name' },
            { name: 'company' },
            {
                name: 'email'
            },
            { name: 'phone' },
            {
                cellTemplate: this.editTmpl,
                headerTemplate: this.hdrTpl,
                name: 'id'
            },
        ];
    };
    ContactsListComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.contactsService.deleteItem(id).subscribe(function (res) {
            if (res.status === 200 || res.status === 204) {
                _this.rows = _this.rows.filter(function (d) {
                    return d.id !== id;
                });
            }
        });
    };
    ContactsListComponent.prototype.updateFilter = function (event) {
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
                return d.type.toLowerCase().indexOf(val) !== -1 || !val;
            });
            this.rows = temp;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editTmpl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], ContactsListComponent.prototype, "editTmpl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('hdrTpl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], ContactsListComponent.prototype, "hdrTpl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('categoryTmpl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], ContactsListComponent.prototype, "categoryTmpl", void 0);
    ContactsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__("../../../../../src/app/layout/contacts/contacts.list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/contacts/contacts.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_2__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__contacts_service__["a" /* ContactsService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], ContactsListComponent);
    return ContactsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/contacts/contacts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contacts_routing_module__ = __webpack_require__("../../../../../src/app/layout/contacts/contacts-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contacts_component__ = __webpack_require__("../../../../../src/app/layout/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contacts_add_component__ = __webpack_require__("../../../../../src/app/layout/contacts/contacts.add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contacts_list_component__ = __webpack_require__("../../../../../src/app/layout/contacts/contacts.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngui_auto_complete__ = __webpack_require__("../../../../@ngui/auto-complete/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngui_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__ngui_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contacts_service__ = __webpack_require__("../../../../../src/app/layout/contacts/contacts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__category_category_service__ = __webpack_require__("../../../../../src/app/layout/category/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contacts_edit_component__ = __webpack_require__("../../../../../src/app/layout/contacts/contacts.edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ContactsModule = (function () {
    function ContactsModule() {
    }
    ContactsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_4__contacts_routing_module__["a" /* ContactsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared__["c" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"], __WEBPACK_IMPORTED_MODULE_8__shared__["b" /* ModalModule */],
                __WEBPACK_IMPORTED_MODULE_10__ngui_auto_complete__["NguiAutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot()],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__contacts_component__["a" /* ContactsComponent */], __WEBPACK_IMPORTED_MODULE_6__contacts_add_component__["a" /* ContactsAddComponent */],
                __WEBPACK_IMPORTED_MODULE_7__contacts_list_component__["a" /* ContactsListComponent */], __WEBPACK_IMPORTED_MODULE_13__contacts_edit_component__["a" /* ContactsEditComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_11__contacts_service__["a" /* ContactsService */], __WEBPACK_IMPORTED_MODULE_12__category_category_service__["a" /* CategoryService */]]
        })
    ], ContactsModule);
    return ContactsModule;
}());



/***/ })

});
//# sourceMappingURL=contacts.module.chunk.js.map