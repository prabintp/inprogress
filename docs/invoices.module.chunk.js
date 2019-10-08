webpackJsonp(["invoices.module"],{

/***/ "../../../../../src/app/layout/components/lineitems/lineitems.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"adressForm\">\r\n    <div class=\"form-group col-xs-6\">\r\n        <label>street</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"street\">\r\n        <small [hidden]=\"adressForm.controls.street.valid\" class=\"text-danger\">\r\n            Street is required\r\n        </small>\r\n    </div>\r\n    <div class=\"form-group col-xs-6\">\r\n        <label>postcode</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"postcode\">\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/components/lineitems/lineitems.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 56px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    background: #222;\n    border: 0;\n    border-radius: 0;\n    color: #999;\n    text-decoration: none; }\n    .sidebar .list-group a.list-group-item .fa {\n      margin-right: 10px; }\n  .sidebar .list-group a:hover {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group a.router-link-active {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group .header-fields {\n    padding-top: 10px; }\n    .sidebar .list-group .header-fields > .list-group-item:first-child {\n      border-top: 1px solid rgba(255, 255, 255, 0.2); }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n    .sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #222; }\n      .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: 0.75rem 1.5rem;\n        padding-top: 1rem; }\n    .sidebar .sidebar-dropdown .panel-title a:hover,\n    .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #151515; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radious: 0;\n    border: none; }\n    .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #222;\n      border: 0 solid transparent; }\n      .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n      .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #fff; }\n    .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #151515; }\n\n.nested-menu .list-group-item {\n  cursor: pointer; }\n\n.nested-menu .nested {\n  list-style-type: none; }\n\n.nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n\n.nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #fff;\n    padding: 10px;\n    display: block; }\n\n@media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px; } }\n\n@media (min-width: 992px) {\n  .header-fields {\n    display: none; } }\n\n::-webkit-scrollbar {\n  width: 8px; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/components/lineitems/lineitems.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineitemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LineitemsComponent = (function () {
    function LineitemsComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('group'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
    ], LineitemsComponent.prototype, "adressForm", void 0);
    LineitemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lineitems',
            template: __webpack_require__("../../../../../src/app/layout/components/lineitems/lineitems.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/components/lineitems/lineitems.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LineitemsComponent);
    return LineitemsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/invoices/invoices-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoices_component__ = __webpack_require__("../../../../../src/app/layout/invoices/invoices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invoices_add_component__ = __webpack_require__("../../../../../src/app/layout/invoices/invoices.add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invoices_list_component__ = __webpack_require__("../../../../../src/app/layout/invoices/invoices.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__invoices_edit_component__ = __webpack_require__("../../../../../src/app/layout/invoices/invoices.edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__invoices_component__["a" /* InvoicesComponent */],
        children: [
            { path: 'add', component: __WEBPACK_IMPORTED_MODULE_3__invoices_add_component__["a" /* InvoicesAddComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__invoices_list_component__["a" /* InvoicesListComponent */] },
            { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_5__invoices_edit_component__["a" /* InvoicesEditComponent */] },
        ]
    }
];
var InvoicesRoutingModule = (function () {
    function InvoicesRoutingModule() {
    }
    InvoicesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], InvoicesRoutingModule);
    return InvoicesRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/invoices/invoices.add.component.html":
/***/ (function(module, exports) {

module.exports = "<form  [formGroup]=\"invoiceForm\" (ngSubmit)=\"onSubmit()\" class=\"\">\r\n\r\n  <div class=\"row\">\r\n    <fieldset class=\"form-group col-6 col-md-3\">\r\n      <label>ID#</label>\r\n        <input [class.is-invalid]=\"invoiceForm.controls.invoice_number.touched && invoiceForm.controls.invoice_number.invalid\" required name=\"name\" \r\n        formControlName=\"invoice_number\" id=\"invoice_number\"\r\n        class=\"form-control validate \">\r\n       \r\n       <!-- <div *ngIf=\"invoiceForm.controls.invoice_number.pending\">Validating...</div> -->\r\n          <div *ngIf=\"invoiceForm.controls.invoice_number.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"invoiceForm.controls.invoice_number.errors?.uniqueIDAlert\">\r\n              ID is already taken.\r\n            </div>\r\n            <div *ngIf=\"invoiceForm.controls.invoice_number.errors.required\" class=\"\">\r\n              ID is required.\r\n            </div>\r\n            </div>\r\n\r\n    </fieldset>\r\n\r\n    <fieldset class=\"form-group col-6 col-md-3\">\r\n      <label>{{docType == 'purchaseorders' ? 'Vendor' : 'Customer' }}</label>\r\n      <input  ngui-auto-complete\r\n                  [source]=\"customerData\"\r\n                  formControlName=\"customer_name\"\r\n                  value-property-name=\"customer\"\r\n                  display-property-name=\"name\"\r\n                 (valueChanged)=\"onChangeCustomer($event)\"\r\n                  [value-formatter]=\"myValueFormatter\"\r\n                  [list-formatter]=\"autocompleCustomer\"\r\n                  [select-on-blur]=\"true\"\r\n                  [re-focus-after-select]=\"false\"\r\n                  [open-on-focus]=\"false\"\r\n                  placeholder=\"Select items\"\r\n                  class=\"form-control\">\r\n\r\n    </fieldset>\r\n    <input type=\"hidden\" name='customer' formControlName=\"customer\"  class=\"form-control\">\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <fieldset class=\"form-group col-md-3 col-6\">\r\n        <label>Date</label>\r\n        <div class=\"input-group datepicker-input\">\r\n            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                name=\"invdate\" formControlName=\"invoice_date\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n            <button class=\"input-group-addon\" (click)=\"d1.toggle()\" type=\"button\">\r\n                <!-- <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/> -->\r\n                <span class=\"fa fa-calendar\"></span>\r\n            </button>\r\n        </div>\r\n        <!--  <input required name='sku' [(ngModel)]=\"invoicesdata.sku\" class=\"form-control\" placeholder=\"****\"> -->\r\n      </fieldset>\r\n      <div class=\"form-group col-md-3 col-6\">\r\n        <label>Due Date</label>\r\n        <div class=\"input-group datepicker-input\">\r\n            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                name=\"dp\" formControlName=\"invoice_due\" ngbDatepicker #d2=\"ngbDatepicker\">\r\n            <button class=\"input-group-addon\" (click)=\"d2.toggle()\" type=\"button\">\r\n                <!-- <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/> -->\r\n                <span class=\"fa fa-calendar\"></span>\r\n            </button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"docType != 'purchaseorders'\">\r\n      <fieldset class=\"form-group col-6 col-md-3\">\r\n        <label>Sales Person</label>\r\n        <input  ngui-auto-complete\r\n                    [source]=\"customerData\"\r\n                    formControlName=\"sales_person_name\"\r\n                    value-property-name=\"name\"\r\n                    display-property-name=\"name\"\r\n                   (valueChanged)=\"onChangeSalesPerson($event)\"\r\n                    [value-formatter]=\"myValueFormatter\"\r\n                    [list-formatter]=\"autocompleCustomer\"\r\n                    [select-on-blur]=\"true\"\r\n                    [re-focus-after-select]=\"false\"\r\n                    [open-on-focus]=\"false\"\r\n                    placeholder=\"Select items\"\r\n                    class=\"form-control\">\r\n\t\t<input type=\"hidden\" name='sales_person' formControlName=\"sales_person\"  class=\"form-control\">\r\n      </fieldset>\r\n      \r\n\t  <fieldset class=\"form-group col-6 col-md-3\">\r\n        <label>Purchase Order</label>\r\n        <input  ngui-auto-complete\r\n                    [source]=\"purchaseOrder\"\r\n                    formControlName=\"purchase_order_name\"\r\n                    value-property-name=\"invoice_number\"\r\n                    display-property-name=\"invoice_number\"\r\n                   (valueChanged)=\"onChangePurchaseOrder($event)\"\r\n                    [value-formatter]=\"myPOFormatter\"\r\n                    [list-formatter]=\"autocomplePurchaseOrder\"\r\n                    [select-on-blur]=\"true\"\r\n                    [re-focus-after-select]=\"false\"\r\n                    [open-on-focus]=\"false\"\r\n                    placeholder=\"Select items\"\r\n                    class=\"form-control\">\r\n\t\t<input type=\"hidden\" name='purchase_order' formControlName=\"purchase_order\"  class=\"form-control\">\r\n      </fieldset>\r\n\t  \r\n\t   <fieldset class=\"form-group col-6 col-md-3\">\r\n      <label>shipping Method</label>\r\n        <input name=\"shipping_method\" formControlName=\"shipping_method\" class=\"form-control\">\r\n    </fieldset>\r\n\t  \r\n\t  <fieldset class=\"form-group col-md-3 col-6\">\r\n        <label>Shipping Date</label>\r\n        <div class=\"input-group datepicker-input\">\r\n            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                name=\"shipping_date\" formControlName=\"shipping_date\" ngbDatepicker #d3=\"ngbDatepicker\">\r\n            <button class=\"input-group-addon\" (click)=\"d3.toggle()\" type=\"button\">\r\n                <!-- <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/> -->\r\n                <span class=\"fa fa-calendar\"></span>\r\n            </button>\r\n        </div>\r\n        <!--  <input required name='sku' [(ngModel)]=\"invoicesdata.sku\" class=\"form-control\" placeholder=\"****\"> -->\r\n      </fieldset>\r\n      \r\n    </div>\r\n\t\r\n\t<div class=\"row\">\r\n\t  <fieldset class=\"form-group col-6 col-md-3\">\r\n      <label>Payment Terms</label>\r\n        <input name=\"payment_terms\" formControlName=\"payment_terms\" class=\"form-control\">\r\n    </fieldset>\r\n\t</div>\r\n\r\n  <!--  <lineitems [group]=\"line_items\"></lineitems> -->\r\n\r\n    <div class=\"row\">\r\n      <fieldset class=\"form-group col-md-2 col-2\">\r\n        <label>Item Code</label>\r\n      </fieldset>\r\n      <fieldset class=\"form-group  col-3\">\r\n          <label>Item Desc</label>\r\n        </fieldset>\r\n        <fieldset class=\"form-group col-1\">\r\n            <label>U.O.M</label>\r\n          </fieldset>\r\n      <div class=\"form-group  col-1\">\r\n        <label>Quantity</label>\r\n      </div>\r\n      <fieldset class=\"form-group col-2\">\r\n        <label>Rate</label>\r\n      </fieldset>\r\n      <fieldset class=\"form-group col-3\">\r\n        <label>amount</label>\r\n      </fieldset>\r\n    </div>\r\n<div formArrayName=\"line_items\">\r\n    <div  *ngFor=\"let row of lineItems.controls;  let i = index\">\r\n    <div  class=\"row\" [formGroupName]=\"i\">\r\n    <fieldset class=\"form-group col-md-2 col-3\">\r\n      <!-- <md-input ngui-auto-complete\r\n        style=\"width:100%\"\r\n        id=\"model6\"\r\n        [(ngModel)]=\"myModel\"\r\n        [source]=\"arrayOfNumbers\"\r\n        [list-formatter]=\"rightAligned\"\r\n        placeholder=\"amount\" align=\"end\">\r\n        <span md-prefix>$&nbsp;</span>\r\n        <span md-suffix>.00</span>\r\n      </md-input>-->\r\n        <!--   -->\r\n      <input  ngui-auto-complete\r\n                  [source]=\"continents\"\r\n                  formControlName=\"sku\"\r\n                  name=\"sku\"\r\n                  value-property-name=\"sku\"\r\n                  value-property-name=\"sku\"\r\n                  display-property-name=\"sku\"\r\n                  (valueChanged)=\"onChangeItem($event,i,1)\"\r\n                  [value-formatter]=\"myValueFormatter\"\r\n                  [list-formatter]=\"autocompleItems\"\r\n                  [select-on-blur]=\"true\"\r\n                  [re-focus-after-select]=\"false\"\r\n                  [open-on-focus]=\"false\"\r\n                  placeholder=\"Select items\"\r\n                  class=\"form-control\">\r\n    <!--<input type=\"hidden\" name='item_name' formControlName=\"item_name\"  class=\"form-control\"> -->\r\n    <input type=\"hidden\" name='item_id' formControlName=\"item_id\"  class=\"form-control\">\r\n    <!--<input type=\"hidden\" name='tax_rate' formControlName=\"tax_rate\"  class=\"form-control\">\r\n    <input type=\"hidden\" name='tax_type' formControlName=\"tax_type\"  class=\"form-control\"> -->\r\n      <!--  <input required name='sku' [(ngModel)]=\"row.line_items\" class=\"form-control\" placeholder=\"****\">-->\r\n    </fieldset>\r\n    <div class=\"form-group col-3\">\r\n        <input type=\"text\" name='item_name' formControlName=\"item_name\"  class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group col-1\">\r\n          <input type=\"text\" name='unit' formControlName=\"unit\"  class=\"form-control\">\r\n        </div>\r\n    <div class=\"form-group col-md-1 col-1\">\r\n      <input type=\"text\" name='quantity' formControlName=\"quantity\"  class=\"form-control\">\r\n    </div>\r\n    <fieldset class=\"form-group col-md-2 col-2\">\r\n        <input required name='rate' formControlName=\"rate\"  class=\"form-control\" placeholder=\"\">\r\n    </fieldset>\r\n    <div class=\"form-group col-2\">\r\n      <input required name='item_total{{i}}' [(ngModel)]=\"item_total[i]\" class=\"form-control-plaintext\" readonly [ngModelOptions]=\"{standalone: true}\" >\r\n    </div>\r\n\r\n    <div class=\"form-group col-1\">\r\n      <a href=\"#\" title=\"Remove Item\" class=\"badge badge-info\" (click)=\"removeLineitems(i)\"><i class=\"fa fa-minus fa-fw\"></i></a>\r\n    </div>\r\n\r\n  </div>\r\n   </div>\r\n </div>\r\n\r\n <div class=\"form-group row\">\r\n   <fieldset class=\"form-group col-md-3 col-5\">\r\n    <a (click)=\"addItemRow()\" href=\"#\" class=\"badge badge-info\"><i class=\"fa fa-plus fa-fw\"></i> Add Items</a>\r\n   </fieldset>\r\n    <label for=\"staticEmail\" class=\"col-md-2 col-3 col-form-label offset-2 offset-md-4 text-right\">Sub Total</label>\r\n    <div class=\"col-md-2 col-2\">\r\n       <input name='subtotal' formControlName=\"subtotal\"  class=\"form-control-plaintext\" placeholder=\"00\" readonly>\r\n    </div>\r\n  </div>\r\n\r\n <div class=\"form-group row\">\r\n   <div class=\"col-md-3 col-4\">\r\n     <fieldset class=\"form-group\">\r\n       <label>Invoice status</label>\r\n       <select class=\"form-control\" formControlName=\"status\">\r\n           <option value=\"pending\" [selected]=\"true\" >Pending</option>\r\n           <option value=\"completed\">Completed</option>\r\n       </select>\r\n     </fieldset>\r\n   </div>\r\n   <div class=\"col-md-3 col-4\">\r\n     <fieldset class=\"form-group\">\r\n       <label>Tax</label>\r\n       <select formControlName=\"tax\" class=\"form-control\">\r\n        <option value=\"0\" [selected]=\"true\">Choose an option</option>\r\n        <option *ngFor=\"let opt of taxRates\" [value]=\"opt.id\">{{opt.name}}</option>\r\n      </select>\r\n     </fieldset>\r\n   </div>\r\n\r\n    <label class=\"col-md-2 col-2 col-form-label offset-md-1 text-right\" >Tax Amount</label>\r\n    <div class=\"col-md-2 col-2\">\r\n     <input readonly name='totalTax' formControlName=\"totalTax\"  class=\"form-control-plaintext\" placeholder=\"00\">\r\n    </div>\r\n </div>\r\n\r\n\r\n <div class=\"form-group row\">\r\n    <label class=\"col-md-2 col-3 col-form-label offset-7 offset-md-7 text-right\">Total</label>\r\n    <div class=\"col-md-2 col-2\">\r\n     <input readonly name='total' formControlName=\"total\"  class=\"form-control-plaintext\" placeholder=\"00\">\r\n    </div>\r\n </div>\r\n\r\n\r\n\r\n\r\n\r\n  <div class=\"col-md-12\">\r\n    <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n    <button type=\"reset\" [routerLink]=\"['/'+docType]\" class=\"btn btn-brand\">cancel</button>\r\n    <!--<button  (click)=\"openModal()\" class=\"btn btn-primary\">Print view</button> -->\r\n   <!--  <div class=\"row\" >{{invoiceForm.value | json}}</div> -->\r\n  </div> \r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/invoices/invoices.add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicesAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invoices_service__ = __webpack_require__("../../../../../src/app/layout/invoices/invoices.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__items_items_service__ = __webpack_require__("../../../../../src/app/layout/items/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tax_tax_service__ = __webpack_require__("../../../../../src/app/layout/tax/tax.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contacts_contacts_service__ = __webpack_require__("../../../../../src/app/layout/contacts/contacts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__invoices_id_uniqe_directive__ = __webpack_require__("../../../../../src/app/layout/invoices/invoices-id-uniqe.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var InvoicesAddComponent = (function () {
    function InvoicesAddComponent(_fb, invoicesService, itemsService, _taxService, _contactsService, _uniqueInvoiceIdValidator, router) {
        var _this = this;
        this._fb = _fb;
        this.invoicesService = invoicesService;
        this.itemsService = itemsService;
        this._taxService = _taxService;
        this._contactsService = _contactsService;
        this._uniqueInvoiceIdValidator = _uniqueInvoiceIdValidator;
        this.router = router;
        this.rows = [];
        this.item_total = [];
        this.res = [];
        //  public taxRates: any = [];
        this.line_items1 = [{ item_id: '', quantity: '', rate: '', item_total: '' }, { item_id: '', quantity: '', rate: '', item_total: '' }];
        this.continents = [];
        this.taxRates = [];
        this.customerData = [];
        this.purchaseOrder = [];
        this.autocompleItems = function (data) {
            var html = "<span>" + data.name + " - " + data.sku + "</span>";
            return html;
        };
        this.autocompleCustomer = function (data) {
            var html = "<span>" + data.name;
            return html;
        };
        this.autocomplePurchaseOrder = function (data) {
            var html = "<span>" + data.invoice_number;
            return html;
        };
        this.docType = this.router.routerState.snapshot.url.split('/')[1];
        this.itemsService.getItems().subscribe(function (res) {
            if (res.status === 200 || res.status === 304) {
                var resdata = res.json().rows;
                //  this.rows = res.json().rows;
                _this.continents = resdata.slice();
            }
            else {
                console.log(res.status + 'service error');
            }
        });
        this.invoicesService.getInvoices('purchaseorders').subscribe(function (res) {
            if (res.status === 200 || res.status === 304) {
                var resdata = res.json().rows;
                // this.rows = res.json().rows;
                _this.purchaseOrder = resdata.slice();
            }
            else {
                _this.purchaseOrder = [];
            }
        });
        this._taxService.getTax().subscribe(function (res) {
            if (res.status === 200 || res.status === 304) {
                var resdata = res.json().rows;
                //  this.rows = res.json().rows;
                _this.taxRates = resdata.slice();
            }
            else {
                console.log(res.status + 'service error');
            }
        });
        this._contactsService.getContacts().subscribe(function (res) {
            if (res.status === 200 || res.status === 304) {
                var resdata = res.json().rows;
                //  this.rows = res.json().rows;
                _this.customerData = resdata.slice();
            }
            else {
                console.log(res.status + 'service error');
            }
        });
        this.invoiceForm = this._fb.group({
            name: [''],
            invoice_number: ['', { Validators: [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].minLength(5)],
                    asyncValidators: [this._uniqueInvoiceIdValidator.validate.bind(this._uniqueInvoiceIdValidator)],
                    updateOn: 'blur'
                }],
            invoice_date: [''],
            invoice_due: [''],
            subtotal: ['00'],
            total: ['00'],
            totalTax: ['00'],
            discount: ['00'],
            status: ['pending'],
            tax: ['0'],
            tax_rate: ['0'],
            tax_type: ['0'],
            customer: [''],
            sales_person: [''],
            purchase_order: [''],
            purchase_order_name: [''],
            customer_name: [''],
            sales_person_name: [''],
            doc_type: [this.docType],
            shipping_date: [''],
            shipping_method: [''],
            payment_terms: [''],
            line_items: this._fb.array([
                this.initLineitems(),
            ])
        });
        this.bInit();
    }
    Object.defineProperty(InvoicesAddComponent.prototype, "lineItems", {
        //  public lineItems;
        get: function () { return this.invoiceForm.get('line_items'); },
        enumerable: true,
        configurable: true
    });
    InvoicesAddComponent.prototype.ngOnInit = function () {
        console.log(this.router.routerState.snapshot.url.split('/')[1] + 'urll');
    };
    ;
    InvoicesAddComponent.prototype.bInit = function () {
        var self = this;
        self.invoiceForm.get('line_items').valueChanges.subscribe(function (value) {
            console.log(value);
            var subtotal = 0;
            value.forEach(function (i, a, as) {
                var q = i.quantity;
                var r = i.rate;
                var itotal = q * r;
                self.item_total[a] = itotal;
                subtotal = subtotal + itotal;
                self.invoiceForm.controls['subtotal'].setValue((subtotal).toFixed(2));
                self.invoiceForm.controls['total'].setValue((subtotal + parseFloat(self.invoiceForm.value.totalTax)).toFixed(2));
                self.invoiceForm.controls['tax'].setValue(self.invoiceForm.value.tax);
            });
        });
        self.invoiceForm.controls['tax'].valueChanges.subscribe(function (value) {
            if (value === '0') {
                self.invoiceForm.controls['total'].setValue(self.invoiceForm.value.total - self.invoiceForm.value.totalTax);
                self.invoiceForm.controls['totalTax'].setValue(0);
                self.invoiceForm.controls['tax_type'].setValue(0);
                self.invoiceForm.controls['tax_rate'].setValue(0);
                return false;
            }
            console.log(value);
            console.log(self.taxRates);
            var itm = self.taxRates;
            var selectedTax = self.taxRates.find(function (itm) {
                return itm.id == value;
            });
            console.log(selectedTax.id);
            var total_tax = (selectedTax.type === 'fixed') ? selectedTax.rate : parseInt(self.invoiceForm.value.subtotal) * (parseInt(selectedTax.rate) / 100);
            self.invoiceForm.controls['totalTax'].setValue(parseFloat(total_tax).toFixed(2));
            self.invoiceForm.controls['tax_type'].setValue(selectedTax.type);
            self.invoiceForm.controls['tax_rate'].setValue(selectedTax.rate);
            self.invoiceForm.controls['total'].setValue((parseFloat(self.invoiceForm.value.subtotal) + parseFloat(total_tax)).toFixed(2));
        });
    };
    InvoicesAddComponent.prototype.initLineitems = function () {
        return this._fb.group({
            item_id: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required],
            quantity: [''],
            item_name: [''],
            rate: [''],
            item_total: [''],
            sku: [''],
            unit: ['']
        });
    };
    InvoicesAddComponent.prototype.myValueFormatter = function (data) {
        return "" + data.sku;
    };
    InvoicesAddComponent.prototype.updateItemTotal = function (item) {
        this.invoiceForm.get('line_items');
    };
    InvoicesAddComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.invoiceForm.invalid) {
            this.invoiceForm.get('invoice_number').markAsTouched();
            this.invoiceForm.get('name').markAsTouched();
            return;
        }
        var invdata = this.invoiceForm.value;
        if (invdata.sales_person === '') {
            delete invdata.sales_person;
        }
        if (invdata.customer === '') {
            delete invdata.customer;
        }
        if (invdata.purchase_order === '') {
            delete invdata.purchase_order;
        }
        this.invoicesService.addInvoices(invdata).subscribe(function (res) { return res.status === 200 || res.status === 201 ? _this.router.navigate(['/invoices']) : _this.router.navigate(['/404']); });
    };
    InvoicesAddComponent.prototype.myPOFormatter = function (data) {
        return "" + data.invoice_number;
    };
    InvoicesAddComponent.prototype.onChangeItem = function (e, index, quantity) {
        var lineitems = this.invoiceForm.controls['line_items'];
        var currentLineItem = lineitems.controls[index];
        currentLineItem.controls['quantity'].setValue(quantity);
        currentLineItem.controls['item_name'].setValue(e.name);
        currentLineItem.controls['rate'].setValue(e.unitprice);
        currentLineItem.controls['item_id'].setValue(e.id);
        currentLineItem.controls['sku'].setValue(e.sku);
        currentLineItem.controls['unit'].setValue(e.unit);
        currentLineItem.controls['item_total'].setValue(currentLineItem.controls['quantity'].value * e.unitprice);
    };
    InvoicesAddComponent.prototype.onChangeCustomer = function (e) {
        this.invoiceForm.controls['customer'].setValue(e.id);
        this.invoiceForm.controls['customer_name'].setValue(e.name);
    };
    InvoicesAddComponent.prototype.onChangeSalesPerson = function (e) {
        this.invoiceForm.controls['sales_person'].setValue(e.id);
        this.invoiceForm.controls['sales_person_name'].setValue(e.name);
    };
    InvoicesAddComponent.prototype.onChangePurchaseOrder = function (e) {
        this.invoiceForm.controls['purchase_order'].setValue(e.id);
        this.invoiceForm.controls['purchase_order_name'].setValue(e.invoice_number);
    };
    InvoicesAddComponent.prototype.addItemRow = function () {
        event.preventDefault();
        var control = this.invoiceForm.controls['line_items'];
        control.push(this.initLineitems());
        //  this.line_items.push({item_id:'',quantity:'',rate:'',item_total:''})
    };
    InvoicesAddComponent.prototype.removeLineitems = function (i) {
        event.preventDefault();
        var control = this.invoiceForm.controls['line_items'];
        control.removeAt(i);
    };
    InvoicesAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invoices',
            template: __webpack_require__("../../../../../src/app/layout/invoices/invoices.add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/invoices/invoices.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_2__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__invoices_service__["a" /* InvoicesService */],
            __WEBPACK_IMPORTED_MODULE_4__items_items_service__["a" /* ItemsService */],
            __WEBPACK_IMPORTED_MODULE_5__tax_tax_service__["a" /* TaxService */],
            __WEBPACK_IMPORTED_MODULE_6__contacts_contacts_service__["a" /* ContactsService */],
            __WEBPACK_IMPORTED_MODULE_8__invoices_id_uniqe_directive__["a" /* UniqueInvoiceIdValidator */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], InvoicesAddComponent);
    return InvoicesAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/invoices/invoices.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n      <app-page-header activeurl=\"/{{docType}}\" addurl=\"/{{docType}}/add\" [heading]=\"docType\" [icon]=\"'fa-table'\"></app-page-header>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/invoices/invoices.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/invoices/invoices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvoicesComponent = (function () {
    function InvoicesComponent(router) {
        this.router = router;
        this.docType = this.router.routerState.snapshot.url.split('/')[1];
    }
    InvoicesComponent.prototype.ngOnInit = function () { };
    InvoicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invoices',
            template: __webpack_require__("../../../../../src/app/layout/invoices/invoices.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/invoices/invoices.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], InvoicesComponent);
    return InvoicesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/invoices/invoices.edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicesEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invoices_service__ = __webpack_require__("../../../../../src/app/layout/invoices/invoices.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__invoices_view_component__ = __webpack_require__("../../../../../src/app/layout/invoices/invoices.view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__items_items_service__ = __webpack_require__("../../../../../src/app/layout/items/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tax_tax_service__ = __webpack_require__("../../../../../src/app/layout/tax/tax.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contacts_contacts_service__ = __webpack_require__("../../../../../src/app/layout/contacts/contacts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var InvoicesEditComponent = (function () {
    function InvoicesEditComponent(_fb, invoicesService, router, itemsService, _contactsService, _taxService, route, modalService) {
        var _this = this;
        this._fb = _fb;
        this.invoicesService = invoicesService;
        this.router = router;
        this.itemsService = itemsService;
        this._contactsService = _contactsService;
        this._taxService = _taxService;
        this.route = route;
        this.modalService = modalService;
        this.item_total = [];
        this.rows = [];
        this.invoicesdata = {
            notes: '',
            desc: '',
            name: '',
            access_token: '',
            shop: '',
            createdBy: '',
        };
        this.continents = [];
        this.taxRates = [];
        this.customerData = [];
        this.purchaseOrder = [];
        this.autocompleItems = function (data) {
            var html = "<span>" + data.name + " - " + data.sku + "</span>";
            return html;
        };
        this.autocompleCustomer = function (data) {
            var html = "<span>" + data.name;
            return html;
        };
        this.autocomplePurchaseOrder = function (data) {
            var html = "<span>" + data.invoice_number;
            return html;
        };
        this.docType = this.router.routerState.snapshot.url.split('/')[1];
        this.itemsService.getItems().subscribe(function (res) {
            if (res.status === 200 || res.status === 304) {
                var resdata = res.json().rows;
                //  this.rows = res.json().rows;
                _this.continents = resdata.slice();
            }
            else {
                _this.rows = [];
            }
        });
        this.invoicesService.getInvoices('purchaseorders').subscribe(function (res) {
            if (res.status === 200 || res.status === 304) {
                var resdata = res.json().rows;
                // this.rows = res.json().rows;
                _this.purchaseOrder = resdata.slice();
            }
            else {
                _this.purchaseOrder = [];
            }
        });
        this._taxService.getTax().subscribe(function (res) {
            if (res.status === 200 || res.status === 304) {
                var resdata = res.json().rows;
                //  this.rows = res.json().rows;
                _this.taxRates = resdata.slice();
                _this.invoiceForm.controls['tax'].setValue(_this.invoiceForm.value.tax);
            }
            else {
                console.log(res.status + 'service error');
            }
        });
        this._contactsService.getContacts().subscribe(function (res) {
            if (res.status === 200 || res.status === 304) {
                var resdata = res.json().rows;
                //  this.rows = res.json().rows;
                _this.customerData = resdata.slice();
            }
            else {
                console.log(res.status + 'service error');
            }
        });
        this.invoiceForm = this._fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].minLength(5)]],
            invoice_number: ['', [__WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].minLength(4)]],
            invoice_date: [''],
            invoice_due: [''],
            subtotal: ['00'],
            total: ['00'],
            totalTax: ['00'],
            tax: ['0'],
            tax_rate: ['0'],
            tax_type: ['0'],
            status: [''],
            customer: [''],
            sales_person: [''],
            purchase_order: [''],
            purchase_order_name: [''],
            customer_name: [''],
            sales_person_name: [''],
            doc_type: [this.docType],
            shipping_date: [''],
            shipping_method: [''],
            payment_terms: [''],
            line_items: this._fb.array([
                this.initLineitems(),
            ])
        });
        this.bInit();
    }
    Object.defineProperty(InvoicesEditComponent.prototype, "lineItems", {
        get: function () { return this.invoiceForm.get('line_items'); },
        enumerable: true,
        configurable: true
    });
    InvoicesEditComponent.prototype.ngOnInit = function () {
        this.currentItemID = this.route.snapshot.params['id'];
        this.getInvoices(this.currentItemID);
    };
    InvoicesEditComponent.prototype.bInit = function () {
        var self = this;
        /*   self.invoiceForm.get('item_total').valueChanges.subscribe((value) => {
             console.log(value+'ddd');
           });*/
        self.invoiceForm.get('line_items').valueChanges.subscribe(function (value) {
            console.log(value);
            var subtotal = 0;
            value.forEach(function (i, a, as) {
                var q = i.quantity;
                var r = i.rate;
                var itotal = q * r;
                self.item_total[a] = itotal;
                subtotal = subtotal + itotal;
                self.invoiceForm.controls['subtotal'].setValue((subtotal).toFixed(2));
                self.invoiceForm.controls['total'].setValue((subtotal + parseFloat(self.invoiceForm.value.totalTax)).toFixed(2));
                self.invoiceForm.controls['tax'].setValue(self.invoiceForm.value.tax);
            });
        });
        self.invoiceForm.get('tax').valueChanges.subscribe(function (value) {
            if (self.taxRates.length < 1)
                return false;
            if (value === '0') {
                self.invoiceForm.controls['total'].setValue(self.invoiceForm.value.total - self.invoiceForm.value.totalTax);
                self.invoiceForm.controls['totalTax'].setValue(0);
                self.invoiceForm.controls['tax_type'].setValue(0);
                self.invoiceForm.controls['tax_rate'].setValue(0);
                return false;
            }
            console.log(value);
            console.log(self.taxRates);
            var itm = self.taxRates;
            var selectedTax = self.taxRates.find(function (itm) {
                return itm.id == value;
            });
            //  console.log(selectedTax.id);
            var total_tax = (selectedTax.type === 'fixed') ? selectedTax.rate : parseInt(self.invoiceForm.value.subtotal) * (parseInt(selectedTax.rate) / 100);
            self.invoiceForm.controls['totalTax'].setValue(parseFloat(total_tax).toFixed(2));
            self.invoiceForm.controls['tax_type'].setValue(selectedTax.type);
            self.invoiceForm.controls['tax_rate'].setValue(selectedTax.rate);
            self.invoiceForm.controls['total'].setValue((parseFloat(self.invoiceForm.value.subtotal) + parseFloat(total_tax)).toFixed(2));
        });
    };
    InvoicesEditComponent.prototype.initLineitems = function () {
        return this._fb.group({
            item_id: ['', __WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].required],
            quantity: [''],
            item_name: [''],
            rate: [''],
            item_total: [''],
            sku: [''],
            unit: ['']
        });
    };
    InvoicesEditComponent.prototype.updateTotal = function (total) {
        this.invoiceForm.controls['subtotal'].setValue(total);
        this.invoiceForm.controls['total'].setValue(total);
    };
    InvoicesEditComponent.prototype.onChangeQuantity = function (e, i) {
        console.log(i + 'dddd');
        // this.invoiceForm.get('line_items').controls[i].get('item_id').setValue(100);
    };
    InvoicesEditComponent.prototype.updateItemTotal = function (item) {
        this.invoiceForm.get('line_items');
    };
    InvoicesEditComponent.prototype.openModal = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_5__invoices_view_component__["a" /* InvoicesViewComponent */], { size: 'lg' });
        modalRef.componentInstance.invoiceId = this.currentItemID;
        return false;
    };
    ;
    InvoicesEditComponent.prototype.patchForm = function () {
        var self = this;
        for (var i = 1; this.invoiceData.line_items.length > i; i++) {
            this.addItemRow();
        }
        this.invoiceForm.patchValue(this.invoiceData);
    };
    InvoicesEditComponent.prototype.getInvoices = function (id) {
        var _this = this;
        this.invoicesService.getInvoicesByID(id).subscribe(function (res) {
            if (res.status === 200 || res.status === 304) {
                //  let resdata = res.json().rows;
                //  this.invoicesdata = res.json();
                _this.invoiceData = res.json();
                _this.patchForm();
            }
            else {
                // this.invoicesdata = []
            }
        });
    };
    InvoicesEditComponent.prototype.onSubmit = function () {
        var _this = this;
        var invdata = this.invoiceForm.value;
        if (invdata.sales_person === '') {
            delete invdata.sales_person;
        }
        if (invdata.tax === '0') {
            delete invdata.tax;
        }
        if (invdata.customer === '') {
            delete invdata.customer;
        }
        if (invdata.purchase_order === '') {
            delete invdata.purchase_order;
        }
        this.invoicesService.editInvoices(invdata, this.currentItemID).subscribe(function (res) { return res.status === 200 || res.status === 201 ? _this.router.navigate(['/invoices']) : _this.router.navigate(['/404']); });
    };
    InvoicesEditComponent.prototype.myPOFormatter = function (data) {
        return "" + data.invoice_number;
    };
    InvoicesEditComponent.prototype.myValueFormatter = function (data) {
        return "" + data.sku;
    };
    InvoicesEditComponent.prototype.onChangeItem = function (e, index, quantity) {
        if (e === undefined || e.id === undefined || e.id == '')
            return false;
        var lineitems = this.invoiceForm.controls['line_items'];
        var currentLineItem = lineitems.controls[index];
        currentLineItem.controls['quantity'].setValue(quantity);
        currentLineItem.controls['item_name'].setValue(e.name);
        currentLineItem.controls['rate'].setValue(e.unitprice);
        currentLineItem.controls['item_id'].setValue(e.id);
        currentLineItem.controls['sku'].setValue(e.sku);
        currentLineItem.controls['unit'].setValue(e.unit);
        currentLineItem.controls['item_total'].setValue(currentLineItem.controls['quantity'].value * e.unitprice);
    };
    InvoicesEditComponent.prototype.onChangeCustomer = function (e) {
        this.invoiceForm.controls['customer'].setValue(e.id);
        this.invoiceForm.controls['customer_name'].setValue(e.name);
    };
    InvoicesEditComponent.prototype.onChangeSalesPerson = function (e) {
        this.invoiceForm.controls['sales_person'].setValue(e.id);
        this.invoiceForm.controls['sales_person_name'].setValue(e.name);
    };
    InvoicesEditComponent.prototype.onChangePurchaseOrder = function (e) {
        this.invoiceForm.controls['purchase_order'].setValue(e.id);
        this.invoiceForm.controls['purchase_order_name'].setValue(e.invoice_number);
    };
    InvoicesEditComponent.prototype.addItemRow = function () {
        event.preventDefault();
        var control = this.invoiceForm.controls['line_items'];
        control.push(this.initLineitems());
        //  this.line_items.push({item_id:'',quantity:'',rate:'',item_total:''})
    };
    InvoicesEditComponent.prototype.removeLineitems = function (i) {
        event.preventDefault();
        var control = this.invoiceForm.controls['line_items'];
        control.removeAt(i);
    };
    InvoicesEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invoices',
            template: __webpack_require__("../../../../../src/app/layout/invoices/invoices.add.component.html"),
            //  styleUrls: ['./invoices.component.scss'],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_2__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__invoices_service__["a" /* InvoicesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__items_items_service__["a" /* ItemsService */],
            __WEBPACK_IMPORTED_MODULE_8__contacts_contacts_service__["a" /* ContactsService */],
            __WEBPACK_IMPORTED_MODULE_7__tax_tax_service__["a" /* TaxService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]])
    ], InvoicesEditComponent);
    return InvoicesEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/invoices/invoices.list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col col-xl-12\">\r\n      <div class=\"card mb-3\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n            <fieldset class=\"form-group col-md-4\">\r\n            <input\r\n             class=\"form-control\"\r\n              type='text'\r\n              id=\"invoice_number\"\r\n              placeholder='Filter by ID#'\r\n              (keyup)='updateFilter($event)'\r\n            />\r\n           </fieldset>\r\n\r\n           </div>\r\n            <ngx-datatable\r\n              #invoicestable\r\n              class=\"bootstrap\"\r\n              [rows]=\"rows\"\r\n              [columns]=\"columns\"\r\n              [columnMode]=\"'force'\"\r\n              [headerHeight]=\"40\"\r\n              [footerHeight]=\"40\"\r\n              [rowHeight]=\"'auto'\"\r\n              [limit]=\"10\"\r\n              [loadingIndicator]=\"loading\"\r\n              >\r\n            </ngx-datatable>\r\n            <ng-template #hdrTpl let-column=\"column\" >\r\n             <strong>Action</strong>\r\n            </ng-template>\r\n          <!--  <ng-template #dateTpl let-row=\"row\" let-value=\"value\">\r\n             {{value.day}}\r\n           </ng-template> -->\r\n            <ng-template #editTmpl let-row=\"row\" let-value=\"value\">\r\n             <a [routerLink]=\"['./edit', value]\" title=\"Edit\" class=\"\"><i class=\"fa fa-edit\"></i></a>\r\n             <app-modal (onSuccess)=\"onDelete(value)\" [title]=\"Confirm\" [bodyContent]=\"'Confirm your Item delete action.'\"></app-modal>\r\n             <a  href=\"javascript.void(0)\" (click)=\"openPrintView(value)\" title=\"View Details\" class=\"\"><i class=\"fa fa-eye\"></i></a>\r\n           </ng-template>\r\n\r\n          </div>\r\n\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/invoices/invoices.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invoices_view_component__ = __webpack_require__("../../../../../src/app/layout/invoices/invoices.view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__invoices_service__ = __webpack_require__("../../../../../src/app/layout/invoices/invoices.service.ts");
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








var InvoicesListComponent = (function () {
    function InvoicesListComponent(invoicesService, router, activatedRoute, modalService) {
        var _this = this;
        this.invoicesService = invoicesService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.rows = [];
        this.temp = [];
        this.columns = [];
        this.loading = false;
        // same as above
        //  this.activatedRoute.url.subscribe((url: urlSegment)=> console.log(url[0].path));
        this.docType = this.router.routerState.snapshot.url.split('/')[1];
        console.log(this.router.routerState.snapshot.url[1]);
        this.loading = true;
        this.invoicesService.getInvoices(this.docType).subscribe(function (res) {
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
    InvoicesListComponent.prototype.ngOnInit = function () {
        this.columns = [
            { prop: 'invoice_number',
                name: 'ID#' },
            { prop: 'status' },
            { prop: 'customer_name',
                name: this.docType === 'purchaseorders' ? 'Vendor' : 'Customer' },
            { prop: 'total' },
            {
                cellTemplate: this.editTmpl,
                headerTemplate: this.hdrTpl,
                name: 'id'
            },
        ];
    };
    InvoicesListComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.invoicesService.deleteItem(id).subscribe(function (res) {
            if (res.status === 200 || res.status === 204) {
                _this.rows = _this.rows.filter(function (d) {
                    return d.id !== id;
                });
            }
        });
    };
    InvoicesListComponent.prototype.openPrintView = function (invoiceId) {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_4__invoices_view_component__["a" /* InvoicesViewComponent */], { size: 'lg' });
        modalRef.componentInstance.invoiceId = invoiceId;
        return false;
    };
    ;
    InvoicesListComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        var field = event.target.id;
        // filter our data
        if (field == 'invoice_number') {
            var temp = this.temp.filter(function (d) {
                return d.invoice_number.toLowerCase().indexOf(val) !== -1 || !val;
            });
            this.rows = temp;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editTmpl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], InvoicesListComponent.prototype, "editTmpl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('hdrTpl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], InvoicesListComponent.prototype, "hdrTpl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dateTpl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], InvoicesListComponent.prototype, "dateTpl", void 0);
    InvoicesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invoices',
            template: __webpack_require__("../../../../../src/app/layout/invoices/invoices.list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/invoices/invoices.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_2__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__invoices_service__["a" /* InvoicesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]])
    ], InvoicesListComponent);
    return InvoicesListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/invoices/invoices.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesModule", function() { return InvoicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invoices_routing_module__ = __webpack_require__("../../../../../src/app/layout/invoices/invoices-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invoices_component__ = __webpack_require__("../../../../../src/app/layout/invoices/invoices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__invoices_add_component__ = __webpack_require__("../../../../../src/app/layout/invoices/invoices.add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__invoices_list_component__ = __webpack_require__("../../../../../src/app/layout/invoices/invoices.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__invoices_view_component__ = __webpack_require__("../../../../../src/app/layout/invoices/invoices.view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__invoices_service__ = __webpack_require__("../../../../../src/app/layout/invoices/invoices.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__invoices_edit_component__ = __webpack_require__("../../../../../src/app/layout/invoices/invoices.edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngui_auto_complete__ = __webpack_require__("../../../../@ngui/auto-complete/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngui_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__ngui_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__items_items_service__ = __webpack_require__("../../../../../src/app/layout/items/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tax_tax_service__ = __webpack_require__("../../../../../src/app/layout/tax/tax.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contacts_contacts_service__ = __webpack_require__("../../../../../src/app/layout/contacts/contacts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__invoices_id_uniqe_directive__ = __webpack_require__("../../../../../src/app/layout/invoices/invoices-id-uniqe.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_lineitems_lineitems_component__ = __webpack_require__("../../../../../src/app/layout/components/lineitems/lineitems.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var InvoicesModule = (function () {
    function InvoicesModule() {
    }
    InvoicesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__invoices_routing_module__["a" /* InvoicesRoutingModule */], __WEBPACK_IMPORTED_MODULE_13__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__shared__["c" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__["NgxDatatableModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_8__shared__["b" /* ModalModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_12__ngui_auto_complete__["NguiAutoCompleteModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__invoices_component__["a" /* InvoicesComponent */], __WEBPACK_IMPORTED_MODULE_5__invoices_add_component__["a" /* InvoicesAddComponent */],
                __WEBPACK_IMPORTED_MODULE_6__invoices_list_component__["a" /* InvoicesListComponent */], __WEBPACK_IMPORTED_MODULE_11__invoices_edit_component__["a" /* InvoicesEditComponent */], __WEBPACK_IMPORTED_MODULE_18__components_lineitems_lineitems_component__["a" /* LineitemsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__invoices_view_component__["a" /* InvoicesViewComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_10__invoices_service__["a" /* InvoicesService */], __WEBPACK_IMPORTED_MODULE_14__items_items_service__["a" /* ItemsService */], __WEBPACK_IMPORTED_MODULE_15__tax_tax_service__["a" /* TaxService */], __WEBPACK_IMPORTED_MODULE_16__contacts_contacts_service__["a" /* ContactsService */], __WEBPACK_IMPORTED_MODULE_17__invoices_id_uniqe_directive__["a" /* UniqueInvoiceIdValidator */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_7__invoices_view_component__["a" /* InvoicesViewComponent */]]
        })
    ], InvoicesModule);
    return InvoicesModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/invoices/invoices.view.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\t\t\r\n<div class=\"container\">\r\n\t<div class=\"row mt-2\">\r\n\t  <div class=\"col-12\">\r\n\t  <button (click)=\"printv()\" class=\"btn btn-outline-primary pull-right\"><i class=\"fa fa-print\"></i> Print\r\n\t  </button>\r\n\t</div>\r\n\t</div>\r\n  </div>\r\n  <div class=\"container inv-print\" id=\"inv-print\">\r\n  \r\n\t  <div class=\"row\">\r\n\t\t\t  <div class=\"col-12 text-center\">\r\n\t\t\t\t\t  <h2 *ngIf=\"docType === 'invoices'\">TAX INVOICE</h2>\r\n\t\t\t\t\t  <h2 *ngIf=\"docType === 'purchaseorders'\">{{docTypeView}}</h2>\r\n\t\t\t\t\t  <h2 *ngIf=\"docType === 'salesorders'\">{{docTypeView}}</h2>\r\n\t\t\t  </div>\r\n\t  </div>\r\n\t  \r\n\t  <div class=\"row\">\r\n\t\t  <div class=\"col-12\">\r\n\t  <div class=\"table-responsive\">\r\n\t  <table class=\"table\">\r\n\t\t  <tr>\r\n\t\t\t  \r\n\t\t\t  <td class=\"col-4 no-line\" style=\"width:33.3333%;border: 1px solid #ddd; border-radius: 10px;\">\r\n\t\t\t\t\t  <div align=\"left\">\r\n\t\t\t\t\t\t\t  <div class=\"invoice-title\">\r\n\t\t\t\t\t\t\t\t  <!-- <h2>{{invoiceData?.shop.name}}</h2> -->\r\n\t\t\t\t\t\t\t\t  <address>\r\n\t\t\t\t\t\t\t\t\t\t  <strong>Billed To:</strong><br>\r\n\t\t\t\t\t\t\t\t\t\t  <div [innerHTML]=\"invoiceData?.customer.baddress\"></div>\r\n\t\t\t\t  \r\n\t\t\t\t\t\t\t\t\t\t  </address>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t  </td>\r\n\t\t\t  <td class=\"col-4 no-line\"  align=\"center\" style=\"width:33.3333%\">\r\n\t\t\t\t  \r\n\t\t\t\t\t\t\t  <img src=\"http://www.daralfalah.co.ae/images/logo_home.png\" width=\"125px\" height=\"125px\" />\r\n\t\t\t\t\t  \r\n\t\t\t  </td>\r\n\t\t\t  <td class=\"col-4 no-line\" style=\"width:33.3333%; border: 1px solid #ddd; border-radius: 10px\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t  <div style=\"padding-bottom: 10px\">\r\n\t\t\t\t\t\t\t\t\t  <strong>UAE TRN:</strong>\r\n\t\t\t\t\t\t\t\t\t  <span>{{invoiceData?.shop.trn}}</span>\r\n  \r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t  <div style=\"padding-bottom: 10px\">\r\n\t\t\t\t\t\t\t\t\t  <strong>Invoice Number:</strong>\r\n\t\t\t\t\t\t\t\t\t  <span>{{invoiceData?.invoice_number}}</span>\r\n  \r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t  <div>\r\n\t\t\t\t\t\t\t\t\t  <strong>Invoice date:</strong>\r\n\t\t\t\t\t\t\t\t\t  <span>\t{{invoiceData?.invoiceDate | date:'MM/dd/yyyy'}}</span>\r\n  \r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t  \r\n\t\t\t\t\t\t  \r\n\t\t\t\t  </div>\r\n\t\t\t  </td>\r\n\t\t  </tr>\r\n\t  \r\n\t  </table>\r\n  </div>\r\n  </div></div>\r\n\t  <div class=\"row\">\r\n\t\t  <div class=\"col-12\">\r\n\t\t\t\t\t  \r\n\t\t  <!--\t\t\t\t\r\n\t\t\t  <div class=\"row\">\r\n\t\t\t\t  <div class=\"col-6\">\r\n\t\t\t\t\t  <address>\r\n\t\t\t\t\t  <strong>Billed To:</strong><br>\r\n\t\t\t  <div [innerHTML]=\"invoiceData?.customer.baddress\"></div>\r\n  \r\n\t\t\t\t\t  </address>\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div class=\"col-6 text-right\" align=\"right\">\r\n\t\t\t\t\t  <address>\r\n\t\t\t\t\t  <strong>Shipped To:</strong><br>\r\n\t\t\t\t<div [innerHTML]=\"invoiceData?.customer.saddress\"></div>\r\n\t\t\t\t\t  </address>\r\n\t\t\t\t  </div>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"row\">\r\n\t\t\t\t  <div class=\"col-6\">\r\n\t\t\t\t\t  <address>\r\n\t\t\t\t<strong>Payment Details:</strong><br>\r\n  \r\n\t\t\t\t\t  </address>\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div class=\"col-6 text-right\" align=\"right\">\r\n\t\t\t\t\t  <address>\r\n\t\t\t\t\t\t  <strong>Order Date:</strong><br>\r\n\t\t\t\t\t\t  {{invoiceData?.invoiceDate | date:'MM/dd/yyyy'}}<br><br>\r\n\t\t\t\t\t  </address>\r\n\t\t\t\t  </div>\r\n\t\t\t\t  </div>\r\n\t\t\t  -->\r\n  \r\n\t\t\t  <div class=\"table-responsive detail-table\" >\r\n\t\t\t\t\t  <table class=\"table table-bordered mb-2 table-sm\" style=\"margin-bottom: 0px\">\r\n\t\t\t\t\t\t  <thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <tr class=\"info\">\r\n\t\t\t\t\t\t\t\t\t  <td><strong>Customer ID</strong></td>\r\n\t\t\t\t\t\t\t\t\t  <td class=\"text-center\"><strong>customer PO</strong></td>\r\n\t\t\t\t\t\t\t\t\t  <td class=\"text-center\"><strong>Payment Terms</strong></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </tr>\r\n\t\t\t\t\t\t  </thead>\r\n\t\t\t\t\t\t  <tbody>\r\n\t\t\t\t\t\t\t  <tr>\r\n\t\t\t\t\t\t\t\t  <td>{{invoiceData?.customer.company}}</td>\r\n\t\t\t\t\t\t\t\t  <td class=\"text-center\">{{invoiceData?.purchase_order_name}}</td>\r\n\t\t\t\t\t\t\t\t  <td class=\"text-center\">{{invoiceData?.payment_terms}}</td>\r\n\t\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t  </tr>\r\n\t\t\t\t\t\t  </tbody>\r\n\t\t\t\t\t  </table>\r\n  \r\n\t\t\t\t\t  <table class=\"table mb-2 table-bordered table-sm\">\r\n\t\t\t\t\t\t\t  <thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <tr class=\"info\">\r\n\t\t\t\t\t\t\t\t\t\t  <td><strong>Customer TRN</strong></td>\r\n\t\t\t\t\t\t\t\t\t\t  <td class=\"text-center\"><strong>Shipping Method</strong></td>\r\n\t\t\t\t\t\t\t\t\t\t  <td class=\"text-center\"><strong>Ship Date</strong></td>\r\n\t\t\t\t\t\t\t\t\t\t  <td class=\"text-center\"><strong>Due Date</strong></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </tr>\r\n\t\t\t\t\t\t\t  </thead>\r\n\t\t\t\t\t\t\t  <tbody>\r\n\t\t\t\t\t\t\t\t  <tr>\r\n\t\t\t\t\t\t\t\t\t  <td>{{invoiceData?.customer.trn}}</td>\r\n\t\t\t\t\t\t\t\t\t  <td class=\"text-center\">{{invoiceData?.shipping_method}}</td>\r\n\t\t\t\t\t\t\t\t\t  <td class=\"text-center\">{{invoiceData?.shipping_date | date:'MM/dd/yyyy'}}</td>\r\n\t\t\t\t\t\t\t\t\t  <td class=\"text-center\">{{invoiceData?.invoice_due | date:'MM/dd/yyyy'}}</td>\r\n\t\t\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t  </tr>\r\n\t\t\t\t\t\t\t  </tbody>\r\n\t\t\t\t\t\t  </table>\r\n\t\t\t\t  </div>\r\n  \r\n  \r\n\t\t  </div>\r\n\t  </div>\r\n\t  <div class=\"row\">\r\n\t\t  <div class=\"col-12 mt-2\">\r\n\t\t\t  <div class=\"panel panel-default\">\r\n\t\t\t\t<!--   <div class=\"panel-heading\">\r\n\t\t\t\t\t  <h3 class=\"panel-title\"><strong>Order summary</strong></h3>\r\n\t\t\t\t  </div> -->\r\n\t\t\t  <div class=\"panel-body\">\r\n\t\t\t\t\t  <div class=\"table-responsive mb-2\" style=\"border: 1px solid #ddd; min-height: 350px\">\r\n\t\t\t\t\t\t  <table class=\"table table-striped table-bordered table-sm\">\r\n\t\t\t\t\t\t\t  <thead>\r\n\t\t\t\t\t\t\t\t  <tr class=\"info\">\r\n\t\t\t\t\t\t\t\t\t  <td><strong>Item</strong></td>\r\n\t\t\t\t\t\t\t\t\t  <td><strong>Description</strong></td>\r\n\t\t\t\t\t\t\t\t\t  <td><strong>UOM</strong></td>\r\n\t\t\t\t\t\t\t\t\t  <td class=\"text-center\"><strong>Price</strong></td>\r\n\t\t\t\t\t\t\t\t\t  <td class=\"text-center\"><strong>Quantity</strong></td>\r\n\t\t\t\t\t\t\t\t\t  <td class=\"text-right\"><strong>Totals</strong></td>\r\n\t\t\t\t\t\t\t\t  </tr>\r\n\t\t\t\t\t\t\t  </thead>\r\n\t\t\t\t\t\t\t  <tbody>\r\n\t\t\t\t\t\t\t\t  <!-- foreach ($order->lineItems as $line) or some such thing here -->\r\n\t\t\t\t\t\t\t\t  <tr *ngFor=\"let row of invoiceData?.line_items;  let i = index\">\r\n\t\t\t\t\t\t\t\t\t  <td>{{row.sku}}</td>\r\n\t\t\t\t\t\t\t\t\t  <td>{{row.item_name}}</td>\r\n\t\t\t\t\t\t\t\t\t  <td>{{row.unit}}</td>\r\n\t\t\t\t\t\t\t\t\t  <td class=\"text-center\">{{row.rate}}</td>\r\n\t\t\t\t\t\t\t\t\t  <td class=\"text-center\">{{row.quantity}}</td>\r\n\t\t\t\t\t\t\t\t\t  <td class=\"text-right\">{{row.rate * row.quantity}}</td>\r\n\t\t\t\t\t\t\t\t  </tr>\r\n  \r\n\t\t\t\t\t\t\t  </tbody>\r\n\t\t\t\t\t\t  </table>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t  </div>\r\n\t\t\t  </div>\r\n\t\t  </div>\r\n\t  </div>\r\n\t\t  <br>\r\n\t\t  \r\n\t\t  \r\n\t  <div class=\"row\" *ngIf=\"docType !== 'salesorders'\">\r\n\t\t  <div class=\"col-12\">\r\n\t  <div class=\"table-responsive\">\r\n\t  <table class=\"table\">\r\n\t\t  <tr>\r\n\t\t\t  <td class=\"col-4 no-line\"  align=\"left\" style=\"width:50%; border: 1px solid #ddd; border-radius: 10px\">\r\n\t\t\t\t\t  <address>\r\n\t\t\t\t\t\t\t  <strong>Bank Details:</strong><br>\r\n\t\t\t\t\t\t\t  <div [innerHTML]=\"invoiceData?.shop.bank\"></div>\r\n\t\t\t\t\t  </address>\r\n\t\t\t  </td>\r\n\t\t\t  <td class=\"col-4 no-line\" style=\"width:50%\" align=\"right\">\r\n\t\t\t\t  <table class=\"table table-bordered table-sm\">\r\n\t\t\t\t\t  <tbody>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t  <td class=\"thick-line text-left\"><strong>Subtotal</strong></td>\r\n\t\t\t\t\t\t\t  <td class=\"thick-line text-right\">{{invoiceData?.subtotal}}</td>\r\n\t\t\t\t\t\t  </tr>\r\n\t\t\t\t\t\t  <tr>\r\n\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t  <td class=\" text-left\"><strong>{{invoiceData?.tax.name}}</strong></td>\r\n\t\t\t\t\t\t\t  <td class=\" text-right\">{{invoiceData?.total_tax}}</td>\r\n\t\t\t\t\t\t  </tr>\r\n\t\t\t\t\t\t  <tr>\r\n\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t  <td class=\" text-left info\"><strong>Total</strong></td>\r\n\t\t\t\t\t\t\t  <td class=\" text-right info\">{{invoiceData?.total}}</td>\r\n\t\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  </tbody>\r\n\t\t\t\t\t  </table>\r\n\t\t\t  </td>\r\n\t\t  </tr>\r\n\t  \r\n\t  </table>\r\n  </div>\r\n  </div></div>\r\n  \r\n  <div class=\"row  mb-2 sign\" >\r\n\t\t<div class=\" col-6 text-left\">\r\n\t\t\t\t<div style=\"padding-bottom: 10px\">\r\n\t\t\t\t\t\t\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<div style=\"padding-bottom: 10px\">\r\n\t\t\t\t\t\t\r\n\r\n\t\t\t\t</div>\r\n\t\t</div>\r\n\t\t  <div class=\" col-6 text-left\">\r\n\t\t\t\t  <div style=\"padding-bottom: 10px\">\r\n\t\t\t\t\t\t  <strong>Recever's Name:</strong>\r\n  \r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div style=\"padding-bottom: 10px\">\r\n\t\t\t\t\t\t  <strong>Signature & Stamp:</strong>\r\n  \r\n\t\t\t\t  </div>\r\n\t\t\t  \r\n\t\t  </div>\r\n\t  \r\n\t  </div>\r\n  \r\n\t <!--  <div class=\"row text-center\">\r\n\t\t<div class=\" col-12\">\r\n\t\t\t\t  <br>\r\n\t\t\t\t  <br>\r\n\t\t\t\t  <br>\r\n\t\t</div>\r\n\t  </div> -->\r\n\t  \r\n  \r\n\t  <div class=\"row text-center pb-3 \">\r\n\t\t<div class=\" col-12\">\r\n\t\t  {{invoiceData?.shop.print.terms_condition}}\r\n\t\t</div>\r\n\t  </div>\r\n  \r\n  \r\n\t  <div class=\"row text-center footer\">\r\n\t\t \r\n\t\t<div class=\"col-12\" >\r\n\t\t\t\t<div [innerHTML]=\"invoiceData?.shop.print.footer_text\"></div>\r\n\t\t  \r\n\t\t</div>\r\n\t  </div>\r\n\t\t  \r\n\t\t \r\n  </div>\r\n  \r\n\r\n\r\n\r\n\t<!-- main body end -->\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/invoices/invoices.view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".inv-print {\n  /*\r\n  .txt-rgt{\r\n    text-align: justify; \r\n -moz-text-align-last: right; \r\n text-align-last: right;\r\n  }\r\n  padding: 15px;\r\n  .invoice-title h2, .invoice-title h3 {\r\n      display: inline-block;\r\n  }\r\n\r\n  .table > tbody > tr > .no-line {\r\n      border-top: none;\r\n  }\r\n\r\n  .table > thead > tr > .no-line {\r\n      border-bottom: none;\r\n  }\r\n\r\n  .table > tbody > tr > .thick-line {\r\n      border-top: 2px solid;\r\n  }\r\n  .detail-table{\r\n      .table{\r\n          thead {\r\n              background-color: #cccccc;\r\n\r\n          }\r\n      }\r\n  } */ }\n  .inv-print .footer {\n    bottom: 0px;\n    left: 0px;\n    width: 100%;\n    padding: 5px; }\n  .inv-print table {\n    page-break-inside: avoid; }\n  .inv-print table {\n    width: 100%;\n    max-width: 100%;\n    margin-bottom: 1rem;\n    background-color: transparent; }\n  .inv-print .table th,\n  .inv-print .table td {\n    padding: 0.75rem;\n    vertical-align: top; }\n    .inv-print .table th.no-line,\n    .inv-print .table td.no-line {\n      border: none; }\n  .inv-print .table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #dee2e6; }\n  .inv-print .table tbody + tbody {\n    border-top: 2px solid #dee2e6; }\n  .inv-print .table .table {\n    background-color: #fff; }\n  .inv-print .table-sm th,\n  .inv-print .table-sm td {\n    padding: 0.3rem; }\n  .inv-print .table-bordered th,\n  .inv-print .table-bordered td {\n    border: 1px solid #dee2e6; }\n  .inv-print .table-bordered thead th,\n  .inv-print .table-bordered thead td {\n    border-bottom-width: 2px; }\n  .inv-print .table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(0, 0, 0, 0.05); }\n  .inv-print .table-hover tbody tr:hover {\n    background-color: rgba(0, 0, 0, 0.075); }\n  .inv-print .table-primary,\n  .inv-print .table-primary > th,\n  .inv-print .table-primary > td {\n    background-color: #b8daff; }\n  .inv-print .table-hover .table-primary:hover {\n    background-color: #9fcdff; }\n  .inv-print .table-hover .table-primary:hover > td,\n  .inv-print .table-hover .table-primary:hover > th {\n    background-color: #9fcdff; }\n  .inv-print .table-secondary,\n  .inv-print .table-secondary > th,\n  .inv-print .table-secondary > td {\n    background-color: #dddfe2; }\n  .inv-print .table-hover .table-secondary:hover {\n    background-color: #cfd2d6; }\n  .inv-print .table-hover .table-secondary:hover > td,\n  .inv-print .table-hover .table-secondary:hover > th {\n    background-color: #cfd2d6; }\n  .inv-print .table-success,\n  .inv-print .table-success > th,\n  .inv-print .table-success > td {\n    background-color: #c3e6cb; }\n  .inv-print .table-hover .table-success:hover {\n    background-color: #b1dfbb; }\n  .inv-print .table-hover .table-success:hover > td,\n  .inv-print .table-hover .table-success:hover > th {\n    background-color: #b1dfbb; }\n  .inv-print .table-info,\n  .inv-print .table-info > th,\n  .inv-print .table-info > td {\n    background-color: #bee5eb; }\n  .inv-print .table-hover .table-info:hover {\n    background-color: #abdde5; }\n  .inv-print .table-hover .table-info:hover > td,\n  .inv-print .table-hover .table-info:hover > th {\n    background-color: #abdde5; }\n  .inv-print .table-warning,\n  .inv-print .table-warning > th,\n  .inv-print .table-warning > td {\n    background-color: #ffeeba; }\n  .inv-print .table-hover .table-warning:hover {\n    background-color: #ffe8a1; }\n  .inv-print .table-hover .table-warning:hover > td,\n  .inv-print .table-hover .table-warning:hover > th {\n    background-color: #ffe8a1; }\n  .inv-print .table-danger,\n  .inv-print .table-danger > th,\n  .inv-print .table-danger > td {\n    background-color: #f5c6cb; }\n  .inv-print .table-hover .table-danger:hover {\n    background-color: #f1b0b7; }\n  .inv-print .table-hover .table-danger:hover > td,\n  .inv-print .table-hover .table-danger:hover > th {\n    background-color: #f1b0b7; }\n  .inv-print .table-light,\n  .inv-print .table-light > th,\n  .inv-print .table-light > td {\n    background-color: #fdfdfe; }\n  .inv-print .table-hover .table-light:hover {\n    background-color: #ececf6; }\n  .inv-print .table-hover .table-light:hover > td,\n  .inv-print .table-hover .table-light:hover > th {\n    background-color: #ececf6; }\n  .inv-print .table-dark,\n  .inv-print .table-dark > th,\n  .inv-print .table-dark > td {\n    background-color: #c6c8ca; }\n  .inv-print .table-hover .table-dark:hover {\n    background-color: #b9bbbe; }\n  .inv-print .table-hover .table-dark:hover > td,\n  .inv-print .table-hover .table-dark:hover > th {\n    background-color: #b9bbbe; }\n  .inv-print .table-active,\n  .inv-print .table-active > th,\n  .inv-print .table-active > td {\n    background-color: rgba(0, 0, 0, 0.075); }\n  .inv-print .table-hover .table-active:hover {\n    background-color: rgba(0, 0, 0, 0.075); }\n  .inv-print .table-hover .table-active:hover > td,\n  .inv-print .table-hover .table-active:hover > th {\n    background-color: rgba(0, 0, 0, 0.075); }\n  .inv-print .table .thead-dark th {\n    color: #fff;\n    background-color: #212529;\n    border-color: #32383e; }\n  .inv-print .table .thead-light th {\n    color: #495057;\n    background-color: #e9ecef;\n    border-color: #dee2e6; }\n  .inv-print .table-dark {\n    color: #fff;\n    background-color: #212529; }\n  .inv-print .table-dark th,\n  .inv-print .table-dark td,\n  .inv-print .table-dark thead th {\n    border-color: #32383e; }\n  .inv-print .table-dark.table-bordered {\n    border: 0; }\n  .inv-print .table-dark.table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.05); }\n  .inv-print .table-dark.table-hover tbody tr:hover {\n    background-color: rgba(255, 255, 255, 0.075); }\n  .inv-print .col-6,\n  .inv-print .col-12 {\n    float: left; }\n  .inv-print .col-12 {\n    width: 100%; }\n  .inv-print .col-6 {\n    width: 50%; }\n  .inv-print hr {\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    border: 0;\n    border-top: 1px solid rgba(0, 0, 0, 0.1); }\n  .inv-print .inv-print {\n    padding: 15px; }\n  .inv-print h1,\n  .inv-print .h1,\n  .inv-print h2,\n  .inv-print .h2,\n  .inv-print h3,\n  .inv-print .h3 {\n    margin-top: 20px;\n    margin-bottom: 10px; }\n  .inv-print h1,\n  .inv-print .h1 {\n    font-size: 36px; }\n  .inv-print h2,\n  .inv-print .h2 {\n    font-size: 30px; }\n  .inv-print .text-left {\n    text-align: left; }\n  .inv-print .text-right {\n    text-align: right; }\n  .inv-print .text-center {\n    text-align: center; }\n  .inv-print .text-justify {\n    text-align: justify; }\n  .inv-print .table-condensed > thead > tr > th,\n  .inv-print .table-condensed > tbody > tr > th,\n  .inv-print .table-condensed > tfoot > tr > th,\n  .inv-print .table-condensed > thead > tr > td,\n  .inv-print .table-condensed > tbody > tr > td,\n  .inv-print .table-condensed > tfoot > tr > td {\n    padding: 5px; }\n  .inv-print .table-bordered {\n    border: 1px solid #ddd; }\n  .inv-print .table-bordered > thead > tr > th,\n  .inv-print .table-bordered > tbody > tr > th,\n  .inv-print .table-bordered > tfoot > tr > th,\n  .inv-print .table-bordered > thead > tr > td,\n  .inv-print .table-bordered > tbody > tr > td,\n  .inv-print .table-bordered > tfoot > tr > td {\n    border: 1px solid #ddd;\n    border-bottom: 0px; }\n  .inv-print .table-bordered > thead > tr > th,\n  .inv-print .table-bordered > thead > tr > td {\n    border-bottom-width: 2px; }\n  .inv-print .table-striped > tbody > tr:nth-of-type(odd) {\n    background-color: #f9f9f9; }\n  .inv-print .table-hover > tbody > tr:hover {\n    background-color: #f5f5f5; }\n  .inv-print table col[class*=\"col-\"] {\n    position: static;\n    float: none;\n    display: table-column; }\n  .inv-print table td[class*=\"col-\"],\n  .inv-print table th[class*=\"col-\"] {\n    position: static;\n    float: none;\n    display: table-cell; }\n  .inv-print .table > thead > tr > td.active,\n  .inv-print .table > tbody > tr > td.active,\n  .inv-print .table > tfoot > tr > td.active,\n  .inv-print .table > thead > tr > th.active,\n  .inv-print .table > tbody > tr > th.active,\n  .inv-print .table > tfoot > tr > th.active,\n  .inv-print .table > thead > tr.active > td,\n  .inv-print .table > tbody > tr.active > td,\n  .inv-print .table > tfoot > tr.active > td,\n  .inv-print .table > thead > tr.active > th,\n  .inv-print .table > tbody > tr.active > th,\n  .inv-print .table > tfoot > tr.active > th {\n    background-color: #f5f5f5; }\n  .inv-print .table-hover > tbody > tr > td.active:hover,\n  .inv-print .table-hover > tbody > tr > th.active:hover,\n  .inv-print .table-hover > tbody > tr.active:hover > td,\n  .inv-print .table-hover > tbody > tr:hover > .active,\n  .inv-print .table-hover > tbody > tr.active:hover > th {\n    background-color: #e8e8e8; }\n  .inv-print .table > thead > tr > td.success,\n  .inv-print .table > tbody > tr > td.success,\n  .inv-print .table > tfoot > tr > td.success,\n  .inv-print .table > thead > tr > th.success,\n  .inv-print .table > tbody > tr > th.success,\n  .inv-print .table > tfoot > tr > th.success,\n  .inv-print .table > thead > tr.success > td,\n  .inv-print .table > tbody > tr.success > td,\n  .inv-print .table > tfoot > tr.success > td,\n  .inv-print .table > thead > tr.success > th,\n  .inv-print .table > tbody > tr.success > th,\n  .inv-print .table > tfoot > tr.success > th {\n    background-color: #dff0d8; }\n  .inv-print .table-hover > tbody > tr > td.success:hover,\n  .inv-print .table-hover > tbody > tr > th.success:hover,\n  .inv-print .table-hover > tbody > tr.success:hover > td,\n  .inv-print .table-hover > tbody > tr:hover > .success,\n  .inv-print .table-hover > tbody > tr.success:hover > th {\n    background-color: #d0e9c6; }\n  .inv-print .table > thead > tr > td.info,\n  .inv-print .table > tbody > tr > td.info,\n  .inv-print .table > tfoot > tr > td.info,\n  .inv-print .table > thead > tr > th.info,\n  .inv-print .table > tbody > tr > th.info,\n  .inv-print .table > tfoot > tr > th.info,\n  .inv-print .table > thead > tr.info > td,\n  .inv-print .table > tbody > tr.info > td,\n  .inv-print .table > tfoot > tr.info > td,\n  .inv-print .table > thead > tr.info > th,\n  .inv-print .table > tbody > tr.info > th,\n  .inv-print .table > tfoot > tr.info > th {\n    background-color: #d9edf7; }\n  .inv-print .table-hover > tbody > tr > td.info:hover,\n  .inv-print .table-hover > tbody > tr > th.info:hover,\n  .inv-print .table-hover > tbody > tr.info:hover > td,\n  .inv-print .table-hover > tbody > tr:hover > .info,\n  .inv-print .table-hover > tbody > tr.info:hover > th {\n    background-color: #c4e3f3; }\n  .inv-print .table > thead > tr > td.warning,\n  .inv-print .table > tbody > tr > td.warning,\n  .inv-print .table > tfoot > tr > td.warning,\n  .inv-print .table > thead > tr > th.warning,\n  .inv-print .table > tbody > tr > th.warning,\n  .inv-print .table > tfoot > tr > th.warning,\n  .inv-print .table > thead > tr.warning > td,\n  .inv-print .table > tbody > tr.warning > td,\n  .inv-print .table > tfoot > tr.warning > td,\n  .inv-print .table > thead > tr.warning > th,\n  .inv-print .table > tbody > tr.warning > th,\n  .inv-print .table > tfoot > tr.warning > th {\n    background-color: #fcf8e3; }\n  .inv-print .table-hover > tbody > tr > td.warning:hover,\n  .inv-print .table-hover > tbody > tr > th.warning:hover,\n  .inv-print .table-hover > tbody > tr.warning:hover > td,\n  .inv-print .table-hover > tbody > tr:hover > .warning,\n  .inv-print .table-hover > tbody > tr.warning:hover > th {\n    background-color: #faf2cc; }\n  .inv-print .table > thead > tr > td.danger,\n  .inv-print .table > tbody > tr > td.danger,\n  .inv-print .table > tfoot > tr > td.danger,\n  .inv-print .table > thead > tr > th.danger,\n  .inv-print .table > tbody > tr > th.danger,\n  .inv-print .table > tfoot > tr > th.danger,\n  .inv-print .table > thead > tr.danger > td,\n  .inv-print .table > tbody > tr.danger > td,\n  .inv-print .table > tfoot > tr.danger > td,\n  .inv-print .table > thead > tr.danger > th,\n  .inv-print .table > tbody > tr.danger > th,\n  .inv-print .table > tfoot > tr.danger > th {\n    background-color: #f2dede; }\n  .inv-print .table-hover > tbody > tr > td.danger:hover,\n  .inv-print .table-hover > tbody > tr > th.danger:hover,\n  .inv-print .table-hover > tbody > tr.danger:hover > td,\n  .inv-print .table-hover > tbody > tr:hover > .danger,\n  .inv-print .table-hover > tbody > tr.danger:hover > th {\n    background-color: #ebcccc; }\n  .inv-print .table-responsive {\n    overflow-x: auto;\n    min-height: 0.01%; }\n  .inv-print address {\n    margin-bottom: 20px;\n    font-style: normal;\n    line-height: 1.42857143; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/invoices/invoices.view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicesViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_printd__ = __webpack_require__("../../../../printd/dist/printd.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_printd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_printd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__invoices_service__ = __webpack_require__("../../../../../src/app/layout/invoices/invoices.service.ts");
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








var InvoicesViewComponent = (function () {
    function InvoicesViewComponent(invoicesService, 
        //  private printit: printjs,
        modalService, router) {
        this.invoicesService = invoicesService;
        this.modalService = modalService;
        this.router = router;
        this.docType = this.router.routerState.snapshot.url.split('/')[1];
        this.docTypeView = (this.docType === 'purchaseorders') ? 'Purchase Order' : this.docType === 'invoices' ? 'Invoice' : 'Sales Order';
    }
    InvoicesViewComponent.prototype.printDiv = function (divId, title) {
        var mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');
        mywindow.document.write("<html><head><title>" + title + "</title>");
        mywindow.document.write('</head><body >');
        mywindow.document.write(document.getElementById(divId).innerHTML);
        mywindow.document.write('</body></html>');
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/
        mywindow.print();
        mywindow.close();
        return true;
    };
    InvoicesViewComponent.prototype.printv = function () {
        var d = new __WEBPACK_IMPORTED_MODULE_4_printd__["Printd"]();
        var cssText = " \n      @page {\n        size: A4;\n        margin: 1mm 7mm 7mm 7mm;\n      }\n      .sign { page-break-inside : avoid }\n      .footer{\n        position:fixed;\n        bottom:0px;\n       left:0px;\n       width:100%;\n       padding:8px;\n    }\n    #header {\n      display: table-header-group;\n    }\n    \n    #main {\n      display: table-row-group;\n    }\n    \n    #footer {\n      display: table-footer-group;\n    }\n    table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent; }\n  .table th,\n  .table td {\n    padding: 0.75rem;\n    vertical-align: top;\n     }\n  .table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #dee2e6; }\n  .table tbody + tbody {\n    border-top: 2px solid #dee2e6; }\n  .table .table {\n    background-color: #fff; }\n\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem; }\n\n\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #dee2e6; }\n  .table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.table-hover tbody tr:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #b8daff; }\n\n.table-hover .table-primary:hover {\n  background-color: #9fcdff; }\n  .table-hover .table-primary:hover > td,\n  .table-hover .table-primary:hover > th {\n    background-color: #9fcdff; }\n\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #dddfe2; }\n\n.table-hover .table-secondary:hover {\n  background-color: #cfd2d6; }\n  .table-hover .table-secondary:hover > td,\n  .table-hover .table-secondary:hover > th {\n    background-color: #cfd2d6; }\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #c3e6cb; }\n\n.table-hover .table-success:hover {\n  background-color: #b1dfbb; }\n  .table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #b1dfbb; }\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #bee5eb; }\n\n.table-hover .table-info:hover {\n  background-color: #abdde5; }\n  .table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #abdde5; }\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffeeba; }\n\n.table-hover .table-warning:hover {\n  background-color: #ffe8a1; }\n  .table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #ffe8a1; }\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f5c6cb; }\n\n.table-hover .table-danger:hover {\n  background-color: #f1b0b7; }\n  .table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #f1b0b7; }\n\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe; }\n\n.table-hover .table-light:hover {\n  background-color: #ececf6; }\n  .table-hover .table-light:hover > td,\n  .table-hover .table-light:hover > th {\n    background-color: #ececf6; }\n\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca; }\n\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe; }\n  .table-hover .table-dark:hover > td,\n  .table-hover .table-dark:hover > th {\n    background-color: #b9bbbe; }\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n  .table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: rgba(0, 0, 0, 0.075); }\n\n.table .thead-dark th {\n  color: #fff;\n  background-color: #212529;\n  border-color: #32383e; }\n\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6; }\n\n.table-dark {\n  color: #fff;\n  background-color: #212529; }\n  .table-dark th,\n  .table-dark td,\n  .table-dark thead th {\n    border-color: #32383e; }\n  .table-dark.table-bordered {\n    border: 0; }\n  .table-dark.table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.05); }\n  .table-dark.table-hover tbody tr:hover {\n    background-color: rgba(255, 255, 255, 0.075); }\n      .col-6,\n      .col-12 {\n      \tfloat: left\n      }\n\n      .col-12 {\n      \twidth: 100%\n      }\n\n      .col-6 {\n      \twidth: 50%\n      }\n\n  hr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n  .inv-print {\n    padding: 15px;\n}h1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n\tmargin-top: 20px;\n\tmargin-bottom: 10px\n}\nh1,\n.h1 {\n\tfont-size: 36px\n}\n\nh2,\n.h2 {\n\tfont-size: 30px\n}\n.text-left {\n\ttext-align: left\n}\n\n.text-right {\n\ttext-align: right\n}\n\n.text-center {\n\ttext-align: center\n}\n\n.text-justify {\n\ttext-align: justify\n}\n.table-condensed>thead>tr>th,\n.table-condensed>tbody>tr>th,\n.table-condensed>tfoot>tr>th,\n.table-condensed>thead>tr>td,\n.table-condensed>tbody>tr>td,\n.table-condensed>tfoot>tr>td {\n\tpadding: 5px\n}\n\n\n.table-bordered>thead>tr>th,\n.table-bordered>tbody>tr>th,\n.table-bordered>tfoot>tr>th,\n.table-bordered>thead>tr>td,\n.table-bordered>tbody>tr>td,\n.table-bordered>tfoot>tr>td {\n\tborder: 1px solid #ddd\n}\n\n.table-bordered>thead>tr>th,\n.table-bordered>thead>tr>td {\n\tborder-bottom-width: 2px\n}\n\n.table-striped>tbody>tr:nth-of-type(odd) {\n\tbackground-color: #f9f9f9\n}\n\n.table-hover>tbody>tr:hover {\n\tbackground-color: #f5f5f5\n}\n\ntable col[class*=\"col-\"] {\n\tposition: static;\n\tfloat: none;\n\tdisplay: table-column\n}\n\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n\tposition: static;\n\tfloat: none;\n\tdisplay: table-cell\n}\n\n.table>thead>tr>td.active,\n.table>tbody>tr>td.active,\n.table>tfoot>tr>td.active,\n.table>thead>tr>th.active,\n.table>tbody>tr>th.active,\n.table>tfoot>tr>th.active,\n.table>thead>tr.active>td,\n.table>tbody>tr.active>td,\n.table>tfoot>tr.active>td,\n.table>thead>tr.active>th,\n.table>tbody>tr.active>th,\n.table>tfoot>tr.active>th {\n\tbackground-color: #f5f5f5\n}\n\n.table-hover>tbody>tr>td.active:hover,\n.table-hover>tbody>tr>th.active:hover,\n.table-hover>tbody>tr.active:hover>td,\n.table-hover>tbody>tr:hover>.active,\n.table-hover>tbody>tr.active:hover>th {\n\tbackground-color: #e8e8e8\n}\n\n.table>thead>tr>td.success,\n.table>tbody>tr>td.success,\n.table>tfoot>tr>td.success,\n.table>thead>tr>th.success,\n.table>tbody>tr>th.success,\n.table>tfoot>tr>th.success,\n.table>thead>tr.success>td,\n.table>tbody>tr.success>td,\n.table>tfoot>tr.success>td,\n.table>thead>tr.success>th,\n.table>tbody>tr.success>th,\n.table>tfoot>tr.success>th {\n\tbackground-color: #dff0d8\n}\n\n.table>thead>tr>td.no-line{\n  border: none;\n}\n\n.table-hover>tbody>tr>td.success:hover,\n.table-hover>tbody>tr>th.success:hover,\n.table-hover>tbody>tr.success:hover>td,\n.table-hover>tbody>tr:hover>.success,\n.table-hover>tbody>tr.success:hover>th {\n\tbackground-color: #d0e9c6\n}\n\n.table>thead>tr>td.info,\n.table>tbody>tr>td.info,\n.table>tfoot>tr>td.info,\n.table>thead>tr>th.info,\n.table>tbody>tr>th.info,\n.table>tfoot>tr>th.info,\n.table>thead>tr.info>td,\n.table>tbody>tr.info>td,\n.table>tfoot>tr.info>td,\n.table>thead>tr.info>th,\n.table>tbody>tr.info>th,\n.table>tfoot>tr.info>th {\n\tbackground-color: #d9edf7\n}\n\n.table-hover>tbody>tr>td.info:hover,\n.table-hover>tbody>tr>th.info:hover,\n.table-hover>tbody>tr.info:hover>td,\n.table-hover>tbody>tr:hover>.info,\n.table-hover>tbody>tr.info:hover>th {\n\tbackground-color: #c4e3f3\n}\n\n.table>thead>tr>td.warning,\n.table>tbody>tr>td.warning,\n.table>tfoot>tr>td.warning,\n.table>thead>tr>th.warning,\n.table>tbody>tr>th.warning,\n.table>tfoot>tr>th.warning,\n.table>thead>tr.warning>td,\n.table>tbody>tr.warning>td,\n.table>tfoot>tr.warning>td,\n.table>thead>tr.warning>th,\n.table>tbody>tr.warning>th,\n.table>tfoot>tr.warning>th {\n\tbackground-color: #fcf8e3\n}\n\n.table-hover>tbody>tr>td.warning:hover,\n.table-hover>tbody>tr>th.warning:hover,\n.table-hover>tbody>tr.warning:hover>td,\n.table-hover>tbody>tr:hover>.warning,\n.table-hover>tbody>tr.warning:hover>th {\n\tbackground-color: #faf2cc\n}\n\n.table>thead>tr>td.danger,\n.table>tbody>tr>td.danger,\n.table>tfoot>tr>td.danger,\n.table>thead>tr>th.danger,\n.table>tbody>tr>th.danger,\n.table>tfoot>tr>th.danger,\n.table>thead>tr.danger>td,\n.table>tbody>tr.danger>td,\n.table>tfoot>tr.danger>td,\n.table>thead>tr.danger>th,\n.table>tbody>tr.danger>th,\n.table>tfoot>tr.danger>th {\n\tbackground-color: #f2dede\n}\n\n.table-hover>tbody>tr>td.danger:hover,\n.table-hover>tbody>tr>th.danger:hover,\n.table-hover>tbody>tr.danger:hover>td,\n.table-hover>tbody>tr:hover>.danger,\n.table-hover>tbody>tr.danger:hover>th {\n\tbackground-color: #ebcccc\n}\n.col-6,\n.col-12 {\n    float: left\n}\n\n.col-12 {\n    width: 100%\n}\n\n.col-6 {\n    width: 50%\n}\n.offset-8{\n  margin-left:50%;\n}\n\n.table-responsive {\n\toverflow-x: auto;\n\tmin-height: 0.01%\n}address {\n\tmargin-bottom: 20px;\n\tfont-style: normal;\n\tline-height: 1.42857143\n}";
        // opens the "print dialog" of your browser to print the element
        d.print(document.getElementById('inv-print'), cssText);
        //  printJS({ printable: 'inv-print', type: 'html', header: '' });
    };
    InvoicesViewComponent.prototype.ngOnInit = function () {
        //  this.currentItemID = this.route.snapshot.params['id'];
        this.getInvoices(this.invoiceId);
    };
    InvoicesViewComponent.prototype.getInvoices = function (id) {
        var _this = this;
        this.invoicesService.getInvoicesViewByID(id).subscribe(function (res) {
            if (res.status === 200 || res.status === 304) {
                _this.invoiceData = res.json();
                _this.invoiceData.customer.baddress = _this.invoiceData.customer.baddress.replace(/(?:\r\n|\r|\n)/g, '<br>');
                _this.invoiceData.customer.saddress = _this.invoiceData.customer.saddress.replace(/(?:\r\n|\r|\n)/g, '<br>');
                _this.invoiceData.shop.address = _this.invoiceData.shop.address.replace(/(?:\r\n|\r|\n)/g, '<br>');
                _this.invoiceData.shop.bank = _this.invoiceData.shop.bank.replace(/(?:\r\n|\r|\n)/g, '<br>');
                var invdate = _this.invoiceData.invoice_date;
                var invshipping = _this.invoiceData.shipping_date;
                var invdue = _this.invoiceData.invoice_due;
                var total_tax = (_this.invoiceData.tax_type === 'fixed') ? _this.invoiceData.tax_rate : parseInt(_this.invoiceData.subtotal) * (parseInt(_this.invoiceData.tax_rate) / 100);
                _this.invoiceData.invoiceDate = new Date(invdate.year, invdate.month - 1, invdate.day);
                _this.invoiceData.shipping_date = new Date(invshipping.year, invshipping.month - 1, invshipping.day);
                _this.invoiceData.invoice_due = new Date(invdue.year, invdue.month - 1, invdue.day);
                _this.invoiceData.total_tax = parseFloat(total_tax).toFixed(2);
                console.log(_this.invoiceData.invoiceData);
            }
            else {
                // this.invoicesdata = []
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InvoicesViewComponent.prototype, "invoiceId", void 0);
    InvoicesViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invoice1',
            template: __webpack_require__("../../../../../src/app/layout/invoices/invoices.view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/invoices/invoices.view.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__invoices_service__["a" /* InvoicesService */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], InvoicesViewComponent);
    return InvoicesViewComponent;
}());



/***/ }),

/***/ "../../../../printd/dist/printd.umd.js":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.printd = {})));
}(this, (function (exports) { 'use strict';

function createStyle(doc, cssText) {
    var style = doc.createElement('style');
    style.type = 'text/css';
    style.appendChild(window.document.createTextNode(cssText));
    return style;
}
function createIFrame(parent) {
    if (parent === void 0) { parent = window.document.body; }
    var el = window.document.createElement('iframe');
    var css = 'visibility:hidden;width:0;height:0;position:absolute;z-index:-9999;bottom:0;';
    el.setAttribute('src', 'about:blank');
    el.setAttribute('style', css);
    el.setAttribute('width', '0');
    el.setAttribute('height', '0');
    el.setAttribute('wmode', 'opaque');
    parent.appendChild(el);
    return el;
}
var Printd = /** @class */ (function () {
    function Printd(parent) {
        if (parent === void 0) { parent = window.document.body; }
        this.node = null;
        this.parent = parent;
        this.iframe = createIFrame(this.parent);
    }
    Printd.prototype.getIFrame = function () {
        return this.iframe;
    };
    Printd.prototype.print = function (el, cssText, callback) {
        this.node = el.cloneNode(true);
        var _a = this.iframe, contentDocument = _a.contentDocument, contentWindow = _a.contentWindow;
        if (contentDocument && contentWindow) {
            if (cssText) {
                contentDocument.head.appendChild(createStyle(contentDocument, cssText));
            }
            if (this.node) {
                contentDocument.body.innerHTML = '';
                contentDocument.body.appendChild(this.node);
                if (callback) {
                    callback(contentWindow, contentDocument, this.node, this.launchPrint);
                }
                else {
                    this.launchPrint(contentWindow);
                }
            }
        }
    };
    Printd.prototype.launchPrint = function (contentWindow) {
        var result = contentWindow.document.execCommand('print', false, null);
        if (!result) {
            contentWindow.print();
        }
    };
    return Printd;
}());

exports.Printd = Printd;
exports.createIFrame = createIFrame;
exports.createStyle = createStyle;
exports['default'] = Printd;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=printd.umd.js.map


/***/ })

});
//# sourceMappingURL=invoices.module.chunk.js.map