(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-favourites-favourites-module"],{

/***/ "./src/app/pages/favourites/favourites.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/favourites/favourites.module.ts ***!
  \*******************************************************/
/*! exports provided: FavouritesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesPageModule", function() { return FavouritesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _favourites_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favourites.page */ "./src/app/pages/favourites/favourites.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









var routes = [
    {
        path: '',
        component: _favourites_page__WEBPACK_IMPORTED_MODULE_5__["FavouritesPage"]
    }
];
var FavouritesPageModule = /** @class */ (function () {
    function FavouritesPageModule() {
    }
    FavouritesPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FavouritesPageModule });
    FavouritesPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FavouritesPageModule_Factory(t) { return new (t || FavouritesPageModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
            ]] });
    return FavouritesPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FavouritesPageModule, { declarations: [_favourites_page__WEBPACK_IMPORTED_MODULE_5__["FavouritesPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavouritesPageModule, [{
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
                declarations: [_favourites_page__WEBPACK_IMPORTED_MODULE_5__["FavouritesPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/favourites/favourites.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/favourites/favourites.page.ts ***!
  \*****************************************************/
/*! exports provided: FavouritesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesPage", function() { return FavouritesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../clients/bonobogive.client */ "./src/app/clients/bonobogive.client.ts");
/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/urls */ "./src/app/constants/urls.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _services_favourite_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/favourite.service */ "./src/app/services/favourite.service.ts");
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/topbar/topbar.component */ "./src/app/components/topbar/topbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/message/message.component */ "./src/app/components/message/message.component.ts");
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

//import { FindAdvertsRequestModel } from "../../models/FindAdvertsRequestModel";




//Models












function FavouritesPage_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FavouritesPage_div_4_ion_spinner_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-spinner");
} }
function FavouritesPage_div_4_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have no favourites ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FavouritesPage_div_4_ion_list_7_Template(rf, ctx) { if (rf & 1) {
    var _r348 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-message", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavouritesPage_div_4_ion_list_7_Template_app_message_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r348); var advert_r346 = ctx.$implicit; var ctx_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r347.openFavourite(advert_r346); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavouritesPage_div_4_ion_list_7_Template_ion_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r348); var advert_r346 = ctx.$implicit; var ctx_r349 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r349.deleteFavourite(advert_r346); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var advert_r346 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("square", true)("imageUrl", (advert_r346.images == null ? null : advert_r346.images.length) > 0 ? advert_r346.images[0] == null ? null : advert_r346.images[0].url : null)("title", advert_r346.title)("subTitle", advert_r346.description)("messageMultiLine", true);
} }
function FavouritesPage_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r351 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-refresher", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionRefresh", function FavouritesPage_div_4_Template_ion_refresher_ionRefresh_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r351); var ctx_r350 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r350.refresh($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-refresher-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My favourites");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FavouritesPage_div_4_ion_spinner_5_Template, 1, 0, "ion-spinner", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FavouritesPage_div_4_p_6_Template, 3, 0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FavouritesPage_div_4_ion_list_7_Template, 5, 5, "ion-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r342 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r342.showSpinner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r342.showSpinner && ctx_r342.adverts && ctx_r342.adverts.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r342.adverts);
} }
var FavouritesPage = /** @class */ (function () {
    function FavouritesPage(navController, auth, loadingCtrl, alertCtrl, errorService, favouritesService, advertClient) {
        this.navController = navController;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.errorService = errorService;
        this.favouritesService = favouritesService;
        this.advertClient = advertClient;
        this.title = "Favourties";
        this.showSpinner = false;
        this.showDelete = false;
        this.showFavourites = true;
        this.take = 10;
        this.advertSlotPosition = "start";
        this.loadedAllFavourites = false;
        this.baseUrl = _constants_urls__WEBPACK_IMPORTED_MODULE_4__["Urls"].baseUrl;
        this.adverts = [];
        this.nextRequestBlob = undefined;
        console.log("my favourties page loading");
        this.getFavourites(null, null);
    }
    FavouritesPage.prototype.ngOnInit = function () {
    };
    FavouritesPage.prototype.showDeleteFavouriteConfirm = function (advert) {
        return __awaiter(this, void 0, void 0, function () {
            var confirm;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: "Delete favourite?",
                            message: "Are you sure you want to delete this favourite?",
                            buttons: [
                                {
                                    text: "Yes",
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            this.deleteFavourite(advert);
                                            return [2 /*return*/];
                                        });
                                    }); }
                                },
                                {
                                    text: "No",
                                    handler: function () {
                                        console.log("Agree clicked");
                                    }
                                }
                            ]
                        })];
                    case 1:
                        confirm = _a.sent();
                        return [4 /*yield*/, confirm.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FavouritesPage.prototype.removeAdvertById = function (primaryKey) {
        var filteredAdverts = this.adverts.filter(function (x) { return x.primaryKey !== primaryKey; });
        console.log("filtered adverts", filteredAdverts);
        this.adverts = filteredAdverts;
    };
    FavouritesPage.prototype.deleteFavourite = function (advert) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.removeAdvertById(advert.primaryKey);
                this.favouritesService.deleteFavouriteByAdvertEntity(advert).subscribe(function (res) {
                }, function (err) {
                    console.log(err);
                });
                return [2 /*return*/];
            });
        });
    };
    FavouritesPage.prototype.openFavourite = function (advert) {
        this.navController.navigateForward("advert/" + advert.primaryKey);
    };
    FavouritesPage.prototype.getFavourites = function (refresher, infiniteScroll) {
        return __awaiter(this, void 0, void 0, function () {
            var pagination;
            var _this = this;
            return __generator(this, function (_a) {
                pagination = new _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_3__["PaginationRequest"]();
                this.showSpinner = true;
                pagination.take = 10;
                pagination.nextRequestBlob = this.nextRequestBlob;
                // if(this.favouritesService.userFavouriteAdvertIds) {
                //   this.advertClient.getAverts(this.favouritesService.userFavouriteAdvertIds.map(x=>x.entityPrimaryKey)).subscribe(res => {
                //     this.adverts = res.entities;
                //   }).add(()=> {
                //     this.showSpinner = false;
                //     if(refresher)
                //       refresher.target.complete();
                //       if(infiniteScroll)
                //         infiniteScroll.target.complete();
                //   });
                // } else {
                this.advertClient.favouritesAdverts(this.auth.user.uid, pagination).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function (x) {
                    return _this.advertClient.getAverts(x.entities.map(function (m) { return m.entityPrimaryKey; }));
                })).subscribe(function (res) { return _this.adverts = res.entities; }).add(function () {
                    _this.showSpinner = false;
                    if (refresher)
                        refresher.target.complete();
                    if (infiniteScroll)
                        infiniteScroll.target.complete();
                });
                return [2 /*return*/];
            });
        });
    };
    FavouritesPage.prototype.ngAfterViewInit = function () {
    };
    FavouritesPage.prototype.refresh = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loadedAllFavourites = false;
                        this.nextRequestBlob = undefined;
                        this.adverts = [];
                        return [4 /*yield*/, this.getFavourites(refresher, null)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FavouritesPage.prototype.getMore = function (infiniteScroll) {
        this.getFavourites(null, infiniteScroll);
    };
    FavouritesPage.prototype.redirecToPostNewAdvert = function () {
        this.navController.navigateRoot("Post");
    };
    FavouritesPage.prototype.loadAdvert = function (ev, id) {
        this.navController.navigateRoot("Advert/" + id);
    };
    FavouritesPage.ɵfac = function FavouritesPage_Factory(t) { return new (t || FavouritesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_favourite_service__WEBPACK_IMPORTED_MODULE_7__["FavouriteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_3__["AdvertClient"])); };
    FavouritesPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavouritesPage, selectors: [["app-favourites"]], decls: 7, vars: 2, consts: [["title", "Favourites"], [1, "favourites"], [4, "ngIf"], ["threshold", "100px", 3, "ionInfinite"], ["loadingSpinner", "bubbles", "loadingText", "Loading more adverts..."], ["slot", "fixed", 3, "ionRefresh"], [4, "ngFor", "ngForOf"], ["name", "heart", 2, "color", "red"], ["lines", "none", 1, "ion-no-padding"], [3, "square", "imageUrl", "title", "subTitle", "messageMultiLine", "click"], ["slot", "end", "fill", "clear", "color", "danger", "size", "large", 3, "click"], ["name", "heart"]], template: function FavouritesPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-topbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-content", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FavouritesPage_div_3_Template, 2, 0, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FavouritesPage_div_4_Template, 8, 3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-infinite-scroll", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionInfinite", function FavouritesPage_Template_ion_infinite_scroll_ionInfinite_5_listener($event) { return ctx.getMore($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-infinite-scroll-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.user);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.user);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__["TopbarComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScrollContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _components_message_message_component__WEBPACK_IMPORTED_MODULE_10__["MessageComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zhdm91cml0ZXMvZmF2b3VyaXRlcy5wYWdlLnNjc3MifQ== */"] });
    return FavouritesPage;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavouritesPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-favourites',
                templateUrl: './favourites.page.html',
                styleUrls: ['./favourites.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] }, { type: _services_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] }, { type: _services_favourite_service__WEBPACK_IMPORTED_MODULE_7__["FavouriteService"] }, { type: _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_3__["AdvertClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-favourites-favourites-module.js.map