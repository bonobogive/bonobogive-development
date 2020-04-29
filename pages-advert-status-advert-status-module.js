(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-advert-status-advert-status-module"],{

/***/ "./src/app/pages/advert-status/advert-status.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/advert-status/advert-status.module.ts ***!
  \*************************************************************/
/*! exports provided: AdvertStatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertStatusPageModule", function() { return AdvertStatusPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _advert_status_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./advert-status.page */ "./src/app/pages/advert-status/advert-status.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var angular_star_rating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-star-rating */ "./node_modules/angular-star-rating/__ivy_ngcc__/esm5/angular-star-rating.js");











var routes = [
    {
        path: '',
        component: _advert_status_page__WEBPACK_IMPORTED_MODULE_5__["AdvertStatusPage"]
    }
];
var AdvertStatusPageModule = /** @class */ (function () {
    function AdvertStatusPageModule() {
    }
    AdvertStatusPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdvertStatusPageModule });
    AdvertStatusPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdvertStatusPageModule_Factory(t) { return new (t || AdvertStatusPageModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
                angular_star_rating__WEBPACK_IMPORTED_MODULE_8__["StarRatingModule"]
            ]] });
    return AdvertStatusPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdvertStatusPageModule, { declarations: [_advert_status_page__WEBPACK_IMPORTED_MODULE_5__["AdvertStatusPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
        angular_star_rating__WEBPACK_IMPORTED_MODULE_8__["StarRatingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvertStatusPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
                    angular_star_rating__WEBPACK_IMPORTED_MODULE_8__["StarRatingModule"]
                ],
                declarations: [_advert_status_page__WEBPACK_IMPORTED_MODULE_5__["AdvertStatusPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/advert-status/advert-status.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/advert-status/advert-status.page.ts ***!
  \***********************************************************/
/*! exports provided: AdvertStatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertStatusPage", function() { return AdvertStatusPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_advert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/advert.service */ "./src/app/services/advert.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../clients/bonobogive.client */ "./src/app/clients/bonobogive.client.ts");
/* harmony import */ var _components_rate_rate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/rate/rate.component */ "./src/app/components/rate/rate.component.ts");
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/topbar/topbar.component */ "./src/app/components/topbar/topbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/message/message.component */ "./src/app/components/message/message.component.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



















function AdvertStatusPage_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvertStatusPage_ion_list_7_ion_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Open");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvertStatusPage_ion_list_7_ion_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Expired");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvertStatusPage_ion_list_7_ion_item_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Collected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-radio", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r426 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r426.StatusEnum.Collected);
} }
function AdvertStatusPage_ion_list_7_ion_item_11_Template(rf, ctx) { if (rf & 1) {
    var _r431 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You can remove the expiry by editing this advert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertStatusPage_ion_list_7_ion_item_11_Template_ion_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r431); var ctx_r430 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r430.editAdvert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvertStatusPage_ion_list_7_div_12_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-message", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ion-radio", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var user_r433 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", user_r433.name)("imageUrl", user_r433 == null ? null : user_r433.pictureUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r433.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", user_r433.uid);
} }
function AdvertStatusPage_ion_list_7_div_12_Template(rf, ctx) { if (rf & 1) {
    var _r435 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Who collected?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-radio-group", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdvertStatusPage_ion_list_7_div_12_Template_ion_radio_group_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r435); var ctx_r434 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r434.ratedUserId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-list-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You have private messaged the following people ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdvertStatusPage_ion_list_7_div_12_ng_container_6_Template, 6, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r428 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r428.ratedUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r428.users);
} }
function AdvertStatusPage_ion_list_7_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Rate user");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-rate", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r429 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratedUserId", ctx_r429.ratedUserId)("reviewerUserId", ctx_r429.auth.user.uid)("advertId", ctx_r429.advertPrimaryKey);
} }
function AdvertStatusPage_ion_list_7_Template(rf, ctx) { if (rf & 1) {
    var _r437 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-radio-group", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdvertStatusPage_ion_list_7_Template_ion_radio_group_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r437); var ctx_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r436.status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdvertStatusPage_ion_list_7_ion_label_3_Template, 2, 0, "ion-label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdvertStatusPage_ion_list_7_ion_label_4_Template, 2, 0, "ion-label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ion-radio", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ion-radio", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AdvertStatusPage_ion_list_7_ion_item_10_Template, 4, 1, "ion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AdvertStatusPage_ion_list_7_ion_item_11_Template, 5, 0, "ion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdvertStatusPage_ion_list_7_div_12_Template, 7, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdvertStatusPage_ion_list_7_div_13_Template, 4, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r421 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r421.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r421.isExpired);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r421.isExpired);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r421.StatusEnum.Open);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r421.StatusEnum.Closed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r421.users == null ? null : ctx_r421.users.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r421.isExpired);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r421.users.length > 0 && ctx_r421.status == ctx_r421.StatusEnum.Collected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r421.users == null ? null : ctx_r421.users.length) > 0 && ctx_r421.status == ctx_r421.StatusEnum.Collected && ctx_r421.ratedUserId && ctx_r421.ratedUserId !== "00000000-0000-0000-0000-000000000000");
} }
function AdvertStatusPage_ion_button_9_Template(rf, ctx) { if (rf & 1) {
    var _r439 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertStatusPage_ion_button_9_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r439); var ctx_r438 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r438.confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save advert status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvertStatusPage_ion_button_10_Template(rf, ctx) { if (rf & 1) {
    var _r441 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertStatusPage_ion_button_10_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r441); var ctx_r440 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r440.confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r423 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx_r423.rateComponent == null ? null : ctx_r423.rateComponent.ratingComplete));
} }
var AdvertStatusPage = /** @class */ (function () {
    function AdvertStatusPage(activatedRoute, advertService, auth, navController, loadingController, advertClient, ratingClient) {
        this.activatedRoute = activatedRoute;
        this.advertService = advertService;
        this.auth = auth;
        this.navController = navController;
        this.loadingController = loadingController;
        this.advertClient = advertClient;
        this.ratingClient = ratingClient;
        this.users = [];
        this.loading = false;
        this.ratedUserId = null;
        this.isExpired = false;
        this.StatusEnum = _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__["StatusEnum"];
    }
    AdvertStatusPage.prototype.ngOnInit = function () {
        this.rating = new _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__["RatingEntity"]();
        this.rating.ratingBreakdown = new _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__["RatingBreakdown"]();
    };
    AdvertStatusPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var urlParams = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.activatedRoute.params, this.activatedRoute.queryParams, function (params, queryParams) { return (__assign(__assign({}, params), queryParams)); });
        urlParams.subscribe(function (routeParams) {
            _this.advertPrimaryKey = routeParams.id;
            _this.advertPartitionKey = _this.advertPrimaryKey.split("|")[0];
            _this.advertSortKey = _this.advertPrimaryKey.split("|")[1];
            _this.getAdvert(_this.advertPartitionKey, _this.advertSortKey);
        });
    };
    AdvertStatusPage.prototype.reset = function () {
        this.advertPrimaryKey = undefined;
        this.status = undefined;
        this.users = [];
        this.loading = undefined;
        this.selectedUser = undefined;
        this.advert = undefined;
        this.ratedUserId = undefined;
        this.rating = undefined;
    };
    AdvertStatusPage.prototype.confirm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, advertStatusRequest, updateStatusObservable, ratingRequest, ratingObservable, ratingSub;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        if (this.status.toString() !== _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__["StatusEnum"].Collected.toString()) {
                            this.ratedUserId = undefined;
                        }
                        advertStatusRequest = new _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__["UpdateAdvertStatusModel"]();
                        advertStatusRequest.collectedUserId = this.ratedUserId;
                        advertStatusRequest.sortKey = this.advert.sortKey;
                        advertStatusRequest.partitionKey = this.advert.partitionKey;
                        advertStatusRequest.status = this.status;
                        updateStatusObservable = this.advertClient.updateAdvertStatus(advertStatusRequest);
                        ratingRequest = null;
                        if (this.status.toString() === _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__["StatusEnum"].Collected.toString()) {
                            ratingRequest = this.rateComponent.createRatingRequest();
                            ratingObservable = this.ratingClient.post(ratingRequest);
                            ratingSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(updateStatusObservable, ratingObservable);
                            ratingSub.subscribe(function (res) {
                                console.log("Updated advert status to " + _this.status + " and rated user " + ratingRequest.ratedUserId, res);
                            }).add(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, loading.dismiss()];
                                        case 1:
                                            _a.sent();
                                            this.navController.navigateRoot("advert/" + this.advert.primaryKey);
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        else {
                            this.advertClient.updateAdvertStatus(advertStatusRequest).subscribe(function (res) {
                                console.log("Updated advert status to " + _this.status, res);
                            })
                                .add(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, loading.dismiss()];
                                        case 1:
                                            _a.sent();
                                            this.navController.navigateRoot("advert/" + this.advert.primaryKey);
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvertStatusPage.prototype.getUsersAffectedByStatusChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.advertClient.associatedUsers(this.advert.partitionKey, this.advert.sortKey).subscribe(function (res) {
                    console.log("Associated users", res);
                    _this.users = res;
                });
                return [2 /*return*/];
            });
        });
    };
    AdvertStatusPage.prototype.editAdvert = function () {
        this.navController.navigateForward("post/" + this.advert.partitionKey);
    };
    AdvertStatusPage.prototype.getAdvert = function (partitionKey, sortKey) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.loading = true;
                this.advertService.getAdvert(partitionKey, sortKey).subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.status = res.status;
                        this.loading = false;
                        this.advert = res;
                        this.isExpired = this.advert.expired;
                        if (res.collectedUserId) {
                            this.ratedUserId = res.collectedUserId;
                        }
                        this.getUsersAffectedByStatusChange();
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    AdvertStatusPage.ɵfac = function AdvertStatusPage_Factory(t) { return new (t || AdvertStatusPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_advert_service__WEBPACK_IMPORTED_MODULE_3__["AdvertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__["AdvertClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__["RatingClient"])); };
    AdvertStatusPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdvertStatusPage, selectors: [["app-advert-status"]], viewQuery: function AdvertStatusPage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_components_rate_rate_component__WEBPACK_IMPORTED_MODULE_7__["RateComponent"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rateComponent = _t.first);
        } }, decls: 11, vars: 4, consts: [["title", "Advert Status"], [1, "ion-padding"], [4, "ngIf"], ["expand", "block", "color", "primary", 3, "click", 4, "ngIf"], ["expand", "block", 3, "disabled", "click", 4, "ngIf"], [3, "ngModel", "ngModelChange"], [3, "value"], [1, "ion-text-wrap"], [3, "click"], [4, "ngFor", "ngForOf"], [3, "title", "imageUrl"], ["slot", "end", 3, "value"], [3, "ratedUserId", "reviewerUserId", "advertId"], ["expand", "block", "color", "primary", 3, "click"], ["expand", "block", 3, "disabled", "click"]], template: function AdvertStatusPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-topbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-content", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Change advert status");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdvertStatusPage_div_5_Template, 2, 0, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdvertStatusPage_ion_list_7_Template, 14, 9, "ion-list", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdvertStatusPage_ion_button_9_Template, 2, 0, "ion-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AdvertStatusPage_ion_button_10_Template, 2, 1, "ion-button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.advert);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status !== ctx.StatusEnum.Collected);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status === ctx.StatusEnum.Collected);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__["TopbarComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRadio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["RadioValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonListHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _components_message_message_component__WEBPACK_IMPORTED_MODULE_11__["MessageComponent"], _components_rate_rate_component__WEBPACK_IMPORTED_MODULE_7__["RateComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkdmVydC1zdGF0dXMvYWR2ZXJ0LXN0YXR1cy5wYWdlLnNjc3MifQ== */"] });
    return AdvertStatusPage;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvertStatusPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-advert-status',
                templateUrl: './advert-status.page.html',
                styleUrls: ['./advert-status.page.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_advert_service__WEBPACK_IMPORTED_MODULE_3__["AdvertService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }, { type: _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__["AdvertClient"] }, { type: _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__["RatingClient"] }]; }, { rateComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_components_rate_rate_component__WEBPACK_IMPORTED_MODULE_7__["RateComponent"]]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-advert-status-advert-status-module.js.map