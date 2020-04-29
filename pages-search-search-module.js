(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-search-module"],{

/***/ "./src/app/pages/search/search.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/search/search.module.ts ***!
  \***********************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search.page */ "./src/app/pages/search/search.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/__ivy_ngcc__/fesm5/ngx-progressbar-core.js");











var routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_5__["SearchPage"]
    }
];
var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SearchPageModule });
    SearchPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SearchPageModule_Factory(t) { return new (t || SearchPageModule)(); }, providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_8__["NgProgressModule"]
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
            ]] });
    return SearchPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchPageModule, { declarations: [_search_page__WEBPACK_IMPORTED_MODULE_5__["SearchPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPageModule, [{
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
                declarations: [_search_page__WEBPACK_IMPORTED_MODULE_5__["SearchPage"]],
                providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_8__["NgProgressModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/search/search.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/search/search.page.ts ***!
  \*********************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../clients/bonobogive.client */ "./src/app/clients/bonobogive.client.ts");
/* harmony import */ var _components_adverts_adverts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/adverts/adverts.component */ "./src/app/components/adverts/adverts.component.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/topbar/topbar.component */ "./src/app/components/topbar/topbar.component.ts");
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

















var _c0 = ["advertsComponent"];
var _c1 = ["searchInput"];
function SearchPage_ion_spinner_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-spinner", 23);
} }
function SearchPage_app_adverts_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-adverts", 24);
} if (rf & 2) {
    var ctx_r399 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("adverts", ctx_r399.searchService.searchResults)("enableFavourites", true);
} }
function SearchPage_p_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sorry, something wen't wrong...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchPage_p_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No results, try expanding your filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var SearchPage = /** @class */ (function () {
    function SearchPage(searchService, auth, menuCtrl, location, activatedRoute, navController, toastController) {
        this.searchService = searchService;
        this.auth = auth;
        this.menuCtrl = menuCtrl;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.toastController = toastController;
        this.readyToFetchMore = true;
        this.distance = 50;
        this.SortByEnum = _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_5__["SortByEnum"];
    }
    SearchPage.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.searchService.search(null, null);
                return [2 /*return*/];
            });
        });
    };
    SearchPage.prototype.ngOnInit = function () {
        this.init();
    };
    SearchPage.prototype.refresh = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.searchService.searchResults = [];
                        this.searchService.searchPageSearchRequest.from = 0;
                        this.searchService.noMoreResults = false;
                        return [4 /*yield*/, this.searchService.search(refresher, null)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    SearchPage.prototype.reset = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.searchService.refreshSearchParameters();
                this.searchService.refreshSearchResults();
                this.searchService.search(null, null);
                return [2 /*return*/];
            });
        });
    };
    SearchPage.prototype.presentDistanceToast = function (initialDistance) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: initialDistance + " miles returned no results, trying again with no limit",
                            duration: 4000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.filterSearch = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var distance;
            return __generator(this, function (_a) {
                distance = event.detail.value;
                this.searchService.searchPageSearchRequest.distanceMiles = distance;
                this.searchService.search(null, null);
                console.log(this.searchService.searchPageSearchRequest.sortBy);
                return [2 /*return*/];
            });
        });
    };
    SearchPage.prototype.onCancel = function () {
        console.log("cancel");
        this.location.back();
    };
    SearchPage.prototype.openFilter = function () {
        this.menuCtrl.open("end");
    };
    SearchPage.prototype.ionViewDidEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var urlParams;
            var _this = this;
            return __generator(this, function (_a) {
                urlParams = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.activatedRoute.params, this.activatedRoute.queryParams, function (params, queryParams) { return (__assign(__assign({}, params), queryParams)); });
                urlParams.subscribe(function (routeParams) {
                    var showKeyboard = routeParams["showKeyboard"] === "true";
                    if (showKeyboard) {
                        setTimeout(function () {
                            _this.input.setFocus();
                        });
                    }
                });
                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    ;
    SearchPage.prototype.goToLogin = function () {
        this.navController.navigateForward("login");
    };
    SearchPage.prototype.goToPost = function () {
        if (!this.auth || !this.auth.user) {
            this.goToLogin();
            return;
        }
        this.navController.navigateForward("post");
    };
    SearchPage.prototype.focusSearch = function () {
        var search = document.getElementsByClassName("searchbar-input")[0];
        var att = document.createAttribute("id");
        att.value = "main-search-input";
        search.setAttributeNode(att);
        document.getElementById("main-search-input").focus();
    };
    SearchPage.prototype.getNextSearchResults = function (infiniteScroll) {
        if (!this.searchService.noMoreResults) {
            this.searchService.searchPageSearchRequest.from = this.searchService.searchPageSearchRequest.from + this.searchService.searchResults.length;
            this.searchService.search(null, infiniteScroll);
        }
        else {
            infiniteScroll.target.complete();
        }
    };
    SearchPage.ɵfac = function SearchPage_Factory(t) { return new (t || SearchPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"])); };
    SearchPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchPage, selectors: [["app-search"]], viewQuery: function SearchPage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.advertsComponent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
        } }, decls: 41, vars: 7, consts: [["title", "Search"], [1, "search"], ["slot", "fixed", 3, "ionRefresh"], ["lines", "none"], ["slot", "start", 2, "margin-top", "2em"], ["min", "1", "max", "100", "pin", "true", "debounce", "200", 3, "value", "ionChange"], ["slot", "start"], ["slot", "end"], ["size", "12", "size-sm", "", 2, "text-align", "center"], [1, "logo-moto"], ["src", "assets/images/logos/icon-text-250-side-beta.png", 2, "padding", "1em"], ["fill", "outline", "expand", "block", "color", "primary", "size", "large", 3, "click"], ["fill", "outline", "expand", "block", "color", "secondary", "size", "large", 3, "click"], ["size", "12", "size-sm", ""], ["fill", "clear", "size", "small", 1, "sort-button", 2, "float", "right", 3, "click"], [2, "font-weight", "bold"], [2, "text-decoration", "underline"], ["name", "options", 1, "filter-options-icon"], ["name", "dots", 4, "ngIf"], [3, "adverts", "enableFavourites", 4, "ngIf"], ["class", "ion-padding", 4, "ngIf"], [3, "ionInfinite"], ["loadingText", "Loading more adverts..."], ["name", "dots"], [3, "adverts", "enableFavourites"], [1, "ion-padding"]], template: function SearchPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-topbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-content", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-refresher", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function SearchPage_Template_ion_refresher_ionRefresh_3_listener($event) { return ctx.refresh($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-refresher-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-item", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-badge", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-range", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function SearchPage_Template_ion_range_ionChange_8_listener($event) { return ctx.filterSearch($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-label", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "1 km");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "100 km");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-grid");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-col", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Give and collect free items");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-col");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchPage_Template_ion_button_click_22_listener() { return ctx.goToPost(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Give");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-col");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchPage_Template_ion_button_click_25_listener() { return ctx.focusSearch(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Search ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-col", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchPage_Template_ion_button_click_29_listener() { return ctx.openFilter(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Sort: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "ion-icon", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, SearchPage_ion_spinner_35_Template, 1, 0, "ion-spinner", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, SearchPage_app_adverts_36_Template, 1, 2, "app-adverts", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, SearchPage_p_37_Template, 2, 0, "p", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, SearchPage_p_38_Template, 2, 0, "p", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-infinite-scroll", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionInfinite", function SearchPage_Template_ion_infinite_scroll_ionInfinite_39_listener($event) { return ctx.getNextSearchResults($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "ion-infinite-scroll-content", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.distance, " km");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.distance);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.SortByEnum[ctx.searchService.searchPageSearchRequest.sortBy], "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.searchService.searchSpinner);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.searchService.searchResults);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.searchService.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.searchService.searchSpinner && (!ctx.searchService.searchResults || ctx.searchService.searchResults.length === 0) && !ctx.searchService.error);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_9__["TopbarComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBadge"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRange"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScrollContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSpinner"], _components_adverts_adverts_component__WEBPACK_IMPORTED_MODULE_6__["AdvertsComponent"]], styles: [".open-filter-button[_ngcontent-%COMP%] {\n  color: #8d8d8d;\n  text-align: right;\n  font-size: 1.0em;\n  padding: 0.3em;\n  margin: 0;\n}\n\n.filter-options-icon[_ngcontent-%COMP%] {\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n  font-size: 2.0em;\n}\n\n.logo-moto[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\n.logo-moto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 1em;\n  display: inline-block;\n  font-size: 1.5em;\n}\n\n.sort-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VhcmNoL0M6XFxVc2Vyc1xcZ2FyZXRcXFNvdXJjZVxcUmVwb3NcXGJvbm9ib2dpdmUvc3JjXFxhcHBcXHBhZ2VzXFxzZWFyY2hcXHNlYXJjaC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBd0I7RUFBRSxpQkFBZ0I7RUFBRyxnQkFBZTtFQUFFLGNBQWE7RUFBRSxTQUFRO0FDS3pGOztBREVBO0VBQ0ksbUJBQWtCO0VBQ2xCLG9CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLGdCQUFlO0FDQ25COztBRElBO0VBQ0ksK0JBQStCO0FDRG5DOztBREFBO0VBR1EsV0FBVTtFQUNWLHFCQUFvQjtFQUNwQixnQkFBZTtBQ0N2Qjs7QURRQTtFQUNJLDhDQUE2QztBQ0xqRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wZW4tZmlsdGVyLWJ1dHRvbntcclxuICAgIGNvbG9yOnJnYigxNDEsIDE0MSwgMTQxKTsgdGV4dC1hbGlnbjpyaWdodDsgIGZvbnQtc2l6ZToxLjBlbTsgcGFkZGluZzowLjNlbTsgbWFyZ2luOjA7IFxyXG59XHJcblxyXG4uc2VhcmNoe1xyXG5cclxufVxyXG5cclxuLmZpbHRlci1vcHRpb25zLWljb257XHJcbiAgICBwYWRkaW5nLWxlZnQ6MC41ZW07IFxyXG4gICAgcGFkZGluZy1yaWdodDowLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGZvbnQtc2l6ZToyLjBlbTtcclxuXHJcblxyXG59XHJcblxyXG4ubG9nby1tb3RvIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBzcGFue1xyXG4gICAgICAgIG1hcmdpbjoxZW07XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7ICBcclxuICAgICAgICBmb250LXNpemU6MS41ZW07XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5zb3J0LWJ1dHRvbiBzcGFuIHtcclxuICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCkgIWltcG9ydGFudDtcclxufSIsIi5vcGVuLWZpbHRlci1idXR0b24ge1xuICBjb2xvcjogIzhkOGQ4ZDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMS4wZW07XG4gIHBhZGRpbmc6IDAuM2VtO1xuICBtYXJnaW46IDA7XG59XG5cbi5maWx0ZXItb3B0aW9ucy1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcbiAgcGFkZGluZy1yaWdodDogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDIuMGVtO1xufVxuXG4ubG9nby1tb3RvIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmxvZ28tbW90byBzcGFuIHtcbiAgbWFyZ2luOiAxZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLnNvcnQtYnV0dG9uIHNwYW4ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KSAhaW1wb3J0YW50O1xufVxuIl19 */"] });
    return SearchPage;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SearchPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-search",
                templateUrl: "./search.page.html",
                styleUrls: ["./search.page.scss"],
            }]
    }], function () { return [{ type: _services_search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }]; }, { advertsComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["advertsComponent"]
        }], input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["searchInput", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-search-search-module.js.map