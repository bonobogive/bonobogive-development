(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-post-post-module"],{

/***/ "./src/app/pages/post/post.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/post/post.module.ts ***!
  \*******************************************/
/*! exports provided: PostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _post_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post.page */ "./src/app/pages/post/post.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









var routes = [
    {
        path: '',
        component: _post_page__WEBPACK_IMPORTED_MODULE_5__["PostPage"]
    }
];
var PostPageModule = /** @class */ (function () {
    function PostPageModule() {
    }
    PostPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PostPageModule });
    PostPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PostPageModule_Factory(t) { return new (t || PostPageModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
            ]] });
    return PostPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostPageModule, { declarations: [_post_page__WEBPACK_IMPORTED_MODULE_5__["PostPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
                ],
                declarations: [_post_page__WEBPACK_IMPORTED_MODULE_5__["PostPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/post/post.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/post/post.page.ts ***!
  \*****************************************/
/*! exports provided: PostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPage", function() { return PostPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../clients/bonobogive.client */ "./src/app/clients/bonobogive.client.ts");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _enums_ErrorMessageTypeEnum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../enums/ErrorMessageTypeEnum */ "./src/app/enums/ErrorMessageTypeEnum.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _services_geo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/geo.service */ "./src/app/services/geo.service.ts");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _constants_categories__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../constants/categories */ "./src/app/constants/categories.ts");
/* harmony import */ var _services_advert_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../services/advert.service */ "./src/app/services/advert.service.ts");
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/topbar/topbar.component */ "./src/app/components/topbar/topbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
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































var _c0 = ["mapComponent"];
function PostPage_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostPage_div_4_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Post advert page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostPage_div_4_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit advert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostPage_div_4_div_3_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    var _r323 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toggle", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostPage_div_4_div_3_ion_item_1_Template_ion_toggle_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r323); var ctx_r322 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r322.removeExpiry = $event; })("click", function PostPage_div_4_div_3_ion_item_1_Template_ion_toggle_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r323); var ctx_r324 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r324.rememberToSaveAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Re-publish (default 30 days)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r311.removeExpiry);
} }
function PostPage_div_4_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r327 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-thumbnail", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostPage_div_4_div_3_div_5_Template_ion_thumbnail_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r327); var file_r325 = ctx.$implicit; var ctx_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r326.imagePressAlert(file_r325); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var file_r325 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", file_r325.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostPage_div_4_div_3_div_6_div_1_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    var _r333 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-card", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostPage_div_4_div_3_div_6_div_1_ion_item_1_Template_ion_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r333); var image_r329 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r331 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r331.existingImagePressAlert(image_r329); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var image_r329 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", image_r329.url == null)("src", image_r329.url);
} }
function PostPage_div_4_div_3_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostPage_div_4_div_3_div_6_div_1_ion_item_1_Template, 3, 2, "ion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var image_r329 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", image_r329.url);
} }
function PostPage_div_4_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostPage_div_4_div_3_div_6_div_1_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r313.existingAdvert == null ? null : ctx_r313.existingAdvert.images);
} }
function PostPage_div_4_div_3_ion_select_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-select-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var category_r335 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", category_r335.categoryCodeEnum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r335.name);
} }
function PostPage_div_4_div_3_ion_icon_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 33);
} }
function PostPage_div_4_div_3_ion_spinner_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-spinner");
} }
function PostPage_div_4_div_3_ion_item_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r317 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r317.foundAddress);
} }
function PostPage_div_4_div_3_ion_item_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid postcode e.g. CF10 4UW ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostPage_div_4_div_3_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-map", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r319 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lat", ctx_r319.lat)("lng", ctx_r319.lng)("radius", 3)("disableDefaultUI", true)("draggable", false)("disableNavigation", false);
} }
function PostPage_div_4_div_3_ion_button_43_Template(rf, ctx) { if (rf & 1) {
    var _r338 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostPage_div_4_div_3_ion_button_43_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r338); var ctx_r337 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r337.postAdvert(ctx_r337.filesSelected); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Publish ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r320 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r320.postFormGroup.valid);
} }
function PostPage_div_4_div_3_ion_button_44_Template(rf, ctx) { if (rf & 1) {
    var _r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostPage_div_4_div_3_ion_button_44_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r340); var ctx_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r339.updateAdvert(ctx_r339.filesSelected); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Save changes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r321.postFormGroup.valid);
} }
function PostPage_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r342 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostPage_div_4_div_3_ion_item_1_Template, 5, 1, "ion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PostPage_div_4_div_3_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r342); var ctx_r341 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r341.uploadImage($event.target.files); })("ngModelChange", function PostPage_div_4_div_3_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r342); var ctx_r343 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r343.fileInput = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostPage_div_4_div_3_div_5_Template, 3, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PostPage_div_4_div_3_div_6_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add item title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ion-input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add item description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ion-input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Select category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PostPage_div_4_div_3_ion_select_option_20_Template, 2, 2, "ion-select-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "All adverts will expire in 30 days from publishing, unless you change the status to \"collected\" or \"closed\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Enter a postcode - remains private");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionChange", function PostPage_div_4_div_3_Template_ion_input_ionChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r342); var ctx_r344 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r344.updateLatLngFromPostcode($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostPage_div_4_div_3_Template_ion_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r342); var ctx_r345 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r345.updateLocation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PostPage_div_4_div_3_ion_icon_28_Template, 1, 0, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, PostPage_div_4_div_3_ion_spinner_29_Template, 1, 0, "ion-spinner", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PostPage_div_4_div_3_ion_item_30_Template, 3, 1, "ion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PostPage_div_4_div_3_ion_item_31_Template, 2, 0, "ion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, PostPage_div_4_div_3_div_32_Template, 3, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "ion-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "ion-input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ion-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Please fill in all fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ion-toggle", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostPage_div_4_div_3_Template_ion_toggle_ngModelChange_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r342); var ctx_r346 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r346.draft = $event; })("click", function PostPage_div_4_div_3_Template_ion_toggle_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r342); var ctx_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r347.rememberToSaveAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Draft - hidden from search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, PostPage_div_4_div_3_ion_button_43_Template, 2, 1, "ion-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, PostPage_div_4_div_3_ion_button_44_Template, 2, 1, "ion-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r310 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r310.advertExpired);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r310.fileInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r310.imagesSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r310.existingAdvert == null ? null : ctx_r310.existingAdvert.images == null ? null : ctx_r310.existingAdvert.images.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r310.postFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r310.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r310.postcodeLookupSpinner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r310.postcodeLookupSpinner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r310.foundAddress && ctx_r310.postFormGroup.controls["postcode"].valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r310.postFormGroup.controls.postcode.valid && ctx_r310.postFormGroup.controls["postcode"].dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r310.lat && ctx_r310.lng && ctx_r310.showMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r310.postFormGroup.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r310.draft);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r310.postingAdvert && !ctx_r310.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r310.postingAdvert && ctx_r310.editMode);
} }
function PostPage_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostPage_div_4_h1_1_Template, 2, 0, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostPage_div_4_h1_2_Template, 2, 0, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostPage_div_4_div_3_Template, 47, 15, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r307.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r307.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r307.editMode || ctx_r307.editMode && !ctx_r307.loadingAdvert);
} }
var PostPage = /** @class */ (function () {
    function PostPage(navController, auth, loadingCtrl, alertCtrl, errorService, camera, advertService, toastController, geoService, formBuilder, activatedRoute, nativeStorage, imageService, advertClient) {
        this.navController = navController;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.errorService = errorService;
        this.camera = camera;
        this.advertService = advertService;
        this.toastController = toastController;
        this.geoService = geoService;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.nativeStorage = nativeStorage;
        this.imageService = imageService;
        this.advertClient = advertClient;
        this.title = "Post";
        this.photofallback = false;
        this.categories = _constants_categories__WEBPACK_IMPORTED_MODULE_14__["categoriesPost"];
        this.postingAdvert = false;
        this.progress = 0;
        this.postcodeLookupSpinner = false;
        this.findingLocation = false;
        this.maxNumberPictures = 6;
        this.isApp = false;
        this.filesSelected = [];
        this.imagesSelected = [];
        this.expiryDaysLength = 30;
        this.loadingAdvert = false;
        this.showMap = false;
        this.editMode = false;
        this.error = "";
        this.removeExpiry = false;
        this.draft = false;
        this.advertExpired = false;
        this.postFormGroup = this.formBuilder.group({
            title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            category: [_clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_7__["CategoryCodeEnum"].Unknown, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            expiryDaysLength: [30, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            postcode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$"), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            lat: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            lng: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
        });
        this.isApp = false;
    }
    PostPage.prototype.uploadImage = function (filelist) {
        return __awaiter(this, void 0, void 0, function () {
            var files, _i, files_1, file, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        files = Array.from(filelist);
                        for (_i = 0, files_1 = files; _i < files_1.length; _i++) {
                            file = files_1[_i];
                            this.filesSelected.push(file);
                        }
                        console.log("files selected", this.filesSelected);
                        _a = this;
                        return [4 /*yield*/, this.imageService.filesToImages(this.filesSelected)];
                    case 1:
                        _a.imagesSelected = _b.sent();
                        this.fileInput = undefined;
                        return [2 /*return*/];
                }
            });
        });
    };
    PostPage.prototype.removeSelectedImage = function (image) {
        this.imagesSelected = this.imagesSelected.filter(function (x) { return x !== image; });
    };
    PostPage.prototype.ngOnInit = function () {
    };
    PostPage.prototype.updateExpiryDays = function (value) {
        this.expiryDaysLength = value;
    };
    PostPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var urlParams = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])(this.activatedRoute.params, this.activatedRoute.queryParams, function (params, queryParams) { return (__assign(__assign({}, params), queryParams)); });
        urlParams.subscribe(function (routeParams) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.advertPrimaryKey = routeParams.id;
                        if (!!this.advertPrimaryKey) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.updateLocation()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        this.editMode = true;
                        this.advertPartitionKey = this.advertPrimaryKey.split("|")[0];
                        this.advertSortKey = this.advertPrimaryKey.split("|")[1];
                        return [4 /*yield*/, this.getAdvert()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    PostPage.prototype.getAdvert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.loadingAdvert = true;
                this.advertClient.get(this.advertPartitionKey, this.advertSortKey).subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                    var result, foundPostcode;
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                if (!res) {
                                    this.navController.navigateRoot("home");
                                    console.log("Advert not found");
                                    return [2 /*return*/];
                                }
                                this.existingAdvert = res;
                                this.draft = this.existingAdvert.draft;
                                this.advertExpired = this.existingAdvert.expired;
                                this.postFormGroup.patchValue({ title: res.title, description: res.description, expiryDaysLength: res.expiryLength, category: res.category });
                                return [4 /*yield*/, this.geoService.findAddressByCoords((_a = this.existingAdvert.geoLocation) === null || _a === void 0 ? void 0 : _a.lat, (_b = this.existingAdvert.geoLocation) === null || _b === void 0 ? void 0 : _b.lng)];
                            case 1:
                                result = _c.sent();
                                foundPostcode = this.geoService.extractPostcode(result.address_components);
                                this.postFormGroup.patchValue({ postcode: foundPostcode, lat: result.geometry.location.lat(), lng: result.geometry.location.lng() });
                                this.lat = result.geometry.location.lat();
                                this.lng = result.geometry.location.lng();
                                this.postFormGroup.controls['lat'].setValue(this.lat);
                                this.postFormGroup.controls['lng'].setValue(this.lng);
                                this.postFormGroup.controls['category'].setValue(this.existingAdvert.category);
                                console.log("Advert " + this.advertPrimaryKey + " loaded");
                                if (this.lat && this.lng) {
                                    this.showMap = true;
                                    this.mapComponent.lat = this.lat;
                                }
                                else {
                                    this.showMap = false;
                                }
                                if (this.lng) {
                                    this.mapComponent.lng = this.lng;
                                }
                                this.mapComponent.loadMap();
                                return [2 /*return*/];
                        }
                    });
                }); }, function (error) { return console.log(error); })
                    .add(function () {
                    _this.loadingAdvert = false;
                });
                return [2 /*return*/];
            });
        });
    };
    PostPage.prototype.existingImagePressAlert = function (image) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Delete image',
                            subHeader: 'Would you like to delete this image?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                },
                                {
                                    text: 'Delete',
                                    handler: function () {
                                        _this.existingAdvert.images = _this.existingAdvert.images.filter(function (x) { return x !== image; });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostPage.prototype.imagePressAlert = function (image) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Remove image',
                            subHeader: 'Would you like to remove this image?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                },
                                {
                                    text: 'Remove',
                                    handler: function () {
                                        _this.removeSelectedImage(image);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostPage.prototype.updateLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, postcode, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, 6, 7]);
                        this.findingLocation = true;
                        this.postcodeLookupSpinner = true;
                        return [4 /*yield*/, this.geoService.refreshCurrentDevicePosition()];
                    case 1:
                        _b.sent();
                        this.postFormGroup.controls['lat'].setValue(this.geoService.latestDevicePosition.coords.latitude);
                        this.postFormGroup.controls['lng'].setValue(this.geoService.latestDevicePosition.coords.longitude);
                        _a = this;
                        return [4 /*yield*/, this.geoService.findAddressByCoords(this.geoService.latestDevicePosition.coords.latitude, this.geoService.latestDevicePosition.coords.longitude)];
                    case 2:
                        _a.currentLocation = _b.sent();
                        postcode = this.geoService.extractPostcode(this.currentLocation.address_components);
                        this.postFormGroup.controls['postcode'].setValue(postcode);
                        this.foundAddress = this.currentLocation.formatted_address;
                        if (!postcode) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.updateLatLngFromPostcode(postcode)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        err_1 = _b.sent();
                        console.log("no location");
                        this.findingLocation = false;
                        this.postcodeLookupSpinner = false;
                        this.foundAddress = "";
                        this.errorService.errorHandler(_enums_ErrorMessageTypeEnum__WEBPACK_IMPORTED_MODULE_9__["ErrorMessageTypeEnum"].Toast, err_1, "Unable to find device location");
                        this.error = err_1;
                        return [3 /*break*/, 7];
                    case 6:
                        this.findingLocation = false;
                        this.postcodeLookupSpinner = false;
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    PostPage.prototype.postAdvert = function (filesSelected) {
        return __awaiter(this, void 0, void 0, function () {
            var loading, advert, _i, _a, selectedImage, newImage;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            spinner: "dots"
                        })];
                    case 1:
                        loading = _b.sent();
                        this.postingAdvert = true;
                        advert = new _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_7__["AdvertEntity"]();
                        advert.status = _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_7__["StatusEnum"].Open;
                        advert.userId = this.auth.user.uid;
                        advert.draft = this.draft;
                        advert.title = this.postFormGroup.value.title;
                        advert.description = this.postFormGroup.value.description;
                        advert.category = _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_7__["CategoryCodeEnum"][_clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_7__["CategoryCodeEnum"][parseInt(this.postFormGroup.value.category)]];
                        advert.expiryLength = this.postFormGroup.value.expiryDaysLength;
                        advert.geoLocation = new _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_7__["GeoModel"]();
                        advert.geoLocation.lat = parseFloat(this.postFormGroup.value.lat);
                        advert.geoLocation.lng = parseFloat(this.postFormGroup.value.lng);
                        if ((filesSelected === null || filesSelected === void 0 ? void 0 : filesSelected.length) > 0) {
                            if (!advert.images)
                                advert.images = [];
                            for (_i = 0, _a = this.filesSelected; _i < _a.length; _i++) {
                                selectedImage = _a[_i];
                                newImage = new _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_7__["ImageModel"]();
                                newImage.mimeType = selectedImage.type;
                                advert.images.push(newImage);
                            }
                        }
                        // create new advert
                        this.advertClient.post(advert).subscribe(function (newAdvert) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: 
                                    // create presignedUrls for images using new advert primary key
                                    return [4 /*yield*/, this.uploadImages(newAdvert.imagesPresignedUrls)];
                                    case 1:
                                        // create presignedUrls for images using new advert primary key
                                        _a.sent();
                                        this.navController.navigateRoot("advert/" + newAdvert.advert.primaryKey);
                                        this.resetAdvert();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function (error) { return console.log(error); })
                            .add(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, loading.dismiss()];
                                    case 1:
                                        _a.sent();
                                        this.postingAdvert = false;
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    PostPage.prototype.updateAdvert = function (filesSelected) {
        return __awaiter(this, void 0, void 0, function () {
            var loading, request, newImages, _i, _a, selectedImage, newImage;
            var _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            spinner: "dots"
                        })];
                    case 1:
                        loading = _c.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _c.sent();
                        this.postingAdvert = true;
                        request = {
                            advert: {
                                partitionKey: this.advertPartitionKey,
                                sortKey: this.advertSortKey,
                                draft: this.draft,
                                title: this.postFormGroup.value.title,
                                description: this.postFormGroup.value.description,
                                category: _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_7__["CategoryCodeEnum"][_clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_7__["CategoryCodeEnum"][parseInt(this.postFormGroup.value.category)]],
                                expiryLength: this.postFormGroup.value.expiryDaysLength,
                                geoLocation: {
                                    lat: parseFloat(this.postFormGroup.value.lat),
                                    lng: parseFloat(this.postFormGroup.value.lng)
                                },
                                userId: this.auth.user.uid,
                                images: [].concat(this.existingAdvert.images),
                                init: null,
                                toJSON: null
                            },
                            init: null,
                            toJSON: null
                        };
                        newImages = [];
                        if ((filesSelected === null || filesSelected === void 0 ? void 0 : filesSelected.length) > 0) {
                            for (_i = 0, _a = this.filesSelected; _i < _a.length; _i++) {
                                selectedImage = _a[_i];
                                newImage = new _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_7__["ImageModel"]();
                                newImage.mimeType = selectedImage.type;
                                newImages.push(newImage);
                            }
                        }
                        (_b = request.advert.images).push.apply(_b, newImages);
                        this.advertClient.put(request).subscribe(function (uploadResult) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.uploadImages(uploadResult.imagesPresignedUrls)];
                                    case 1:
                                        _a.sent();
                                        this.navController.navigateRoot("advert/" + this.advertPrimaryKey);
                                        this.resetAdvert();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function (error) { return console.log(error); })
                            .add(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, loading.dismiss()];
                                    case 1:
                                        _a.sent();
                                        this.postingAdvert = false;
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    PostPage.prototype.uploadImages = function (presignedUrls) {
        return __awaiter(this, void 0, void 0, function () {
            var x, file, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        x = 0;
                        _a.label = 1;
                    case 1:
                        if (!(x < presignedUrls.length)) return [3 /*break*/, 4];
                        file = this.filesSelected[x];
                        return [4 /*yield*/, this.imageService.uploadFileToS3(file, presignedUrls[x].signedUrl).toPromise()];
                    case 2:
                        result = _a.sent();
                        console.log("uploadProfileImage res", result);
                        _a.label = 3;
                    case 3:
                        x++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PostPage.prototype.resetAdvert = function () {
        this.filesSelected = [];
        this.imagesSelected = [];
        this.existingAdvert = null;
        this.postingAdvert = false;
    };
    PostPage.prototype.getFileExtensionFromContentType = function (contentType) {
        var extension = "";
        switch (contentType.toLowerCase()) {
            case "image/jpeg":
            case "image/jpg": {
                extension = "jpg";
            }
            case "image/png": {
                extension = "png";
            }
            default: {
                extension = "jpg";
            }
        }
        return extension;
    };
    PostPage.prototype.updateLatLngFromPostcode = function (postCode) {
        return __awaiter(this, void 0, void 0, function () {
            var res, extractedPostcode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showMap = false;
                        return [4 /*yield*/, this.geoService.findAddressByPostcode(postCode)];
                    case 1:
                        res = _a.sent();
                        extractedPostcode = this.geoService.extractPostcode(res.address_components);
                        this.postFormGroup.controls['postcode'].setValue(extractedPostcode);
                        this.foundAddress = res.formatted_address;
                        this.lat = res.geometry.location.lat();
                        this.lng = res.geometry.location.lng();
                        this.postFormGroup.controls['lat'].setValue(this.lat);
                        this.postFormGroup.controls['lng'].setValue(this.lng);
                        this.showMap = true;
                        if (this.mapComponent) {
                            this.mapComponent.lat = this.lat;
                            this.mapComponent.lng = this.lng;
                            this.mapComponent.loadMap();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PostPage.prototype.rememberToSaveAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var text, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        text = this.editMode ? "save" : "publish";
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: 'Remember to save',
                                subHeader: "Changes won't take affect till you " + text,
                                buttons: ['Ok']
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostPage.ɵfac = function PostPage_Factory(t) { return new (t || PostPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_error_service__WEBPACK_IMPORTED_MODULE_11__["ErrorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_advert_service__WEBPACK_IMPORTED_MODULE_15__["AdvertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_geo_service__WEBPACK_IMPORTED_MODULE_12__["GeoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_image_service__WEBPACK_IMPORTED_MODULE_13__["ImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_7__["AdvertClient"])); };
    PostPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostPage, selectors: [["post"]], viewQuery: function PostPage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true, _components_map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"]);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mapComponent = _t.first);
        } }, decls: 5, vars: 2, consts: [["title", "Post", "displaySearchBar", "false", "displayCameraIcon", "false"], [1, "post"], [4, "ngIf"], ["class", "center", 4, "ngIf"], [1, "center"], ["id", "file-upload", "type", "file", "name", "file-upload", "accept", "image/*", "multiple", "", 2, "display", "none", 3, "ngModel", "change", "ngModelChange"], ["for", "file-upload", 1, "add-image", 2, "color", "rgb(0, 132, 80)"], [4, "ngFor", "ngForOf"], [3, "formGroup"], ["position", "floating"], ["formControlName", "title", "id", "title"], ["type", "text", "formControlName", "description", "name", "desciption", "id", "description", "maxlength", "250"], ["position", "floating", "for", "category"], ["formControlName", "category", "name", "category", "id", "category"], ["checked", "false", 3, "value", 4, "ngFor", "ngForOf"], [2, "font-weight", "bold"], ["type", "text", "formControlName", "postcode", "name", "postcode", "id", "postcode", "debounce", "1500", 3, "ionChange"], ["clear", "", "type", "button", "slot", "end", 3, "click"], ["name", "locate", "style", "font-size:2em", 4, "ngIf"], ["type", "hidden", "formControlName", "lat", "id", "lat"], ["type", "hidden", "formControlName", "lng", "id", "lng"], [3, "hidden"], [2, "color", "red"], [3, "ngModel", "ngModelChange", "click"], ["slot", "end", "full", "", "primary", "", 3, "disabled", "click", 4, "ngIf"], ["id", "original", 2, "display", "none"], ["id", "resampled"], [1, "ion-text-wrap"], [3, "click"], [3, "src"], ["s", "", 1, "upload-image-thumbnails", 3, "click"], [2, "object-fit", "cover", 3, "hidden", "src"], ["checked", "false", 3, "value"], ["name", "locate", 2, "font-size", "2em"], [3, "lat", "lng", "radius", "disableDefaultUI", "draggable", "disableNavigation"], ["mapComponent", ""], ["slot", "end", "full", "", "primary", "", 3, "disabled", "click"]], template: function PostPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-topbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-content", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostPage_div_3_Template, 2, 0, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PostPage_div_4_Template, 4, 3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.user);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.user);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_16__["TopbarComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["BooleanValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonThumbnail"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSpinner"], _components_map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"]], styles: [".custom-file-upload[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  text-transform: lowercase;\n  border: none;\n  box-shadow: none;\n  cursor: pointer;\n}\n\n.custom-file-upload[_ngcontent-%COMP%]:hover {\n  background-color: #ffffff;\n  text-transform: lowercase;\n  border: none;\n  box-shadow: none;\n}\n\n.upload-image-thumbnails[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  float: left;\n}\n\n.upload-image-thumbnails[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.add-image[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n}\n\n.add-image[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9zdC9DOlxcVXNlcnNcXGdhcmV0XFxTb3VyY2VcXFJlcG9zXFxib25vYm9naXZlL3NyY1xcYXBwXFxwYWdlc1xccG9zdFxccG9zdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Bvc3QvcG9zdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFFSSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFlBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtBQ0R2Qjs7QURJSTtFQUVJLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsWUFBVztFQUNYLGdCQUFnQjtBQ0Z4Qjs7QURLSTtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBQ1osV0FBVTtBQ0ZsQjs7QURESTtFQUtZLFlBQVc7RUFDWCxhQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQjtBQ0FqQzs7QURPSTtFQUNJLGdCQUFlO0FDSnZCOztBREdJO0VBR1EsK0JBQStCO0FDRjNDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9zdC9wb3N0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLmN1c3RvbS1maWxlLXVwbG9hZCB7XHJcbiAgICAgIC8vICBjb2xvcjogbWFwLWdldCgkbWFwOiAkY29sb3JzLCAka2V5OiBwcmltYXJ5KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XHJcbiAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmN1c3RvbS1maWxlLXVwbG9hZDpob3ZlciB7XHJcbiAgICAgIC8vICBjb2xvcjogbWFwLWdldCgkbWFwOiAkY29sb3JzLCAka2V5OiBwcmltYXJ5KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XHJcbiAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAudXBsb2FkLWltYWdlLXRodW1ibmFpbHN7XHJcbiAgICAgICAgd2lkdGg6MTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5hZGQtaW1hZ2V7XHJcbiAgICAgICAgZm9udC1zaXplOjEuM2VtO1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBjb2xvcjp2YXIoIC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH0iLCIuY3VzdG9tLWZpbGUtdXBsb2FkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jdXN0b20tZmlsZS11cGxvYWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi51cGxvYWQtaW1hZ2UtdGh1bWJuYWlscyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi51cGxvYWQtaW1hZ2UtdGh1bWJuYWlscyBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uYWRkLWltYWdlIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cblxuLmFkZC1pbWFnZSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4iXX0= */"] });
    return PostPage;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'post',
                templateUrl: './post.page.html',
                styleUrls: ['./post.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }, { type: _services_error_service__WEBPACK_IMPORTED_MODULE_11__["ErrorService"] }, { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] }, { type: _services_advert_service__WEBPACK_IMPORTED_MODULE_15__["AdvertService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }, { type: _services_geo_service__WEBPACK_IMPORTED_MODULE_12__["GeoService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"] }, { type: _services_image_service__WEBPACK_IMPORTED_MODULE_13__["ImageService"] }, { type: _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_7__["AdvertClient"] }]; }, { mapComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["mapComponent", { read: _components_map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"], static: true }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-post-post-module.js.map