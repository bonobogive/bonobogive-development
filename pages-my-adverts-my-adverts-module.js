(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-adverts-my-adverts-module"],{

/***/ "./src/app/pages/my-adverts/my-adverts.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/my-adverts/my-adverts.module.ts ***!
  \*******************************************************/
/*! exports provided: MyAdvertsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAdvertsPageModule", function() { return MyAdvertsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _my_adverts_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-adverts.page */ "./src/app/pages/my-adverts/my-adverts.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









var routes = [
    {
        path: '',
        component: _my_adverts_page__WEBPACK_IMPORTED_MODULE_5__["MyAdvertsPage"]
    }
];
var MyAdvertsPageModule = /** @class */ (function () {
    function MyAdvertsPageModule() {
    }
    MyAdvertsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MyAdvertsPageModule });
    MyAdvertsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MyAdvertsPageModule_Factory(t) { return new (t || MyAdvertsPageModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
            ]] });
    return MyAdvertsPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyAdvertsPageModule, { declarations: [_my_adverts_page__WEBPACK_IMPORTED_MODULE_5__["MyAdvertsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyAdvertsPageModule, [{
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
                declarations: [_my_adverts_page__WEBPACK_IMPORTED_MODULE_5__["MyAdvertsPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/my-adverts/my-adverts.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/my-adverts/my-adverts.page.ts ***!
  \*****************************************************/
/*! exports provided: MyAdvertsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAdvertsPage", function() { return MyAdvertsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_advert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/advert.service */ "./src/app/services/advert.service.ts");
/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/urls */ "./src/app/constants/urls.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../clients/bonobogive.client */ "./src/app/clients/bonobogive.client.ts");
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/topbar/topbar.component */ "./src/app/components/topbar/topbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/message/message.component */ "./src/app/components/message/message.component.ts");
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
















function MyAdvertsPage_ion_spinner_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-spinner");
} }
function MyAdvertsPage_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have no adverts yet!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyAdvertsPage_ng_container_9_ion_list_1_Template(rf, ctx) { if (rf & 1) {
    var _r292 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-message", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyAdvertsPage_ng_container_9_ion_list_1_Template_app_message_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r292); var advert_r290 = ctx.$implicit; var ctx_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r291.loadAdvert(advert_r290.primaryKey); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyAdvertsPage_ng_container_9_ion_list_1_Template_ion_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r292); var advert_r290 = ctx.$implicit; var ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r293.presentDeleteAlertConfirm(advert_r290); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var advert_r290 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageUrl", (advert_r290.images == null ? null : advert_r290.images.length) > 0 ? advert_r290.images[0].url : null)("title", advert_r290.title)("subTitle", advert_r290.description)("badge", advert_r290.expired ? "expired" : advert_r290.draft ? "draft" : null)("messageMultiLine", true)("square", true);
} }
function MyAdvertsPage_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyAdvertsPage_ng_container_9_ion_list_1_Template, 5, 6, "ion-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r288.myAdverts);
} }
var MyAdvertsPage = /** @class */ (function () {
    function MyAdvertsPage(navController, auth, errorService, advertService, alertController, advertClient) {
        this.navController = navController;
        this.auth = auth;
        this.errorService = errorService;
        this.advertService = advertService;
        this.alertController = alertController;
        this.advertClient = advertClient;
        this.title = "My adverts";
        this.advertImages = [];
        this.myAdverts = [];
        this.showSpinner = true;
        this.take = 10;
        this.skip = 0;
        this.gotAllAdverts = false;
        this.baseUrl = _constants_urls__WEBPACK_IMPORTED_MODULE_2__["Urls"].baseUrl;
        this.loadedAllAdverts = false;
        this.error = false;
        this.lastEvaluatedKeyHash = undefined;
    }
    MyAdvertsPage.prototype.ngOnInit = function () {
    };
    MyAdvertsPage.prototype.refresh = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.lastEvaluatedKeyHash = undefined;
                        this.myAdverts = [];
                        return [4 /*yield*/, this.getMyAdverts()];
                    case 1:
                        _a.sent();
                        refresher.target.complete();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyAdvertsPage.prototype.getMoreMyAdverts = function (infiniteScroll) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.loadedAllAdverts) {
                            infiniteScroll.target.complete();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.getMyAdverts()];
                    case 1:
                        _a.sent();
                        infiniteScroll.target.complete();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyAdvertsPage.prototype.getMyAdverts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pagination;
            var _this = this;
            return __generator(this, function (_a) {
                this.error = false;
                console.log(this.lastEvaluatedKeyHash);
                pagination = new _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__["PaginationRequest"]();
                pagination.take = 10;
                pagination.nextRequestBlob = this.lastEvaluatedKeyHash;
                this.showSpinner = true;
                this.advertClient.usersAdverts(this.auth.user.uid, pagination).subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        console.log(res);
                        (_a = this.myAdverts).push.apply(_a, res.entities);
                        this.lastEvaluatedKeyHash = res.lastEvaluatedKeyHash;
                        if (!res.lastEvaluatedKeyHash) {
                            this.loadedAllAdverts = true;
                        }
                        return [2 /*return*/];
                    });
                }); }, function (error) {
                    _this.error = true;
                    console.log("error getting my adverts", error);
                }).add(function () {
                    _this.showSpinner = false;
                });
                return [2 /*return*/];
            });
        });
    };
    MyAdvertsPage.prototype.deleteAdvert = function (advert) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.showSpinner = true;
                this.advertClient.delete(advert.partitionKey, advert.sortKey).subscribe(function (res) {
                    _this.showSpinner = false;
                    var index = _this.myAdverts.findIndex(function (x) { return x.partitionKey === advert.partitionKey; });
                    _this.myAdverts.splice(index, 1);
                });
                return [2 /*return*/];
            });
        });
    };
    MyAdvertsPage.prototype.presentDeleteAlertConfirm = function (advert) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Are you sure you want to delete " + advert.title,
                            message: 'You are about to delete this advert forever, are you sure you want to continue? There is no going back!',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Delete',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.deleteAdvert(advert)];
                                                case 1:
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
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
    MyAdvertsPage.prototype.ngAfterViewInit = function () {
        this.getMyAdverts();
    };
    MyAdvertsPage.prototype.redirecToPostNewAdvert = function () {
        this.navController.navigateRoot("post");
    };
    MyAdvertsPage.prototype.loadAdvert = function (advertPrimaryKey) {
        this.navController.navigateForward("advert/" + advertPrimaryKey);
    };
    MyAdvertsPage.ɵfac = function MyAdvertsPage_Factory(t) { return new (t || MyAdvertsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_advert_service__WEBPACK_IMPORTED_MODULE_1__["AdvertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__["AdvertClient"])); };
    MyAdvertsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyAdvertsPage, selectors: [["my-adverts"]], decls: 12, vars: 3, consts: [["title", "Adverts"], [1, "my-adverts"], ["slot", "fixed", 3, "ionRefresh"], [4, "ngIf"], ["threshold", "100px", 3, "ionInfinite"], ["loadingSpinner", "bubbles", "loadingText", "Loading more adverts..."], [4, "ngFor", "ngForOf"], ["lines", "none"], [3, "imageUrl", "title", "subTitle", "badge", "messageMultiLine", "square", "click"], ["fill", "clear", "color", "medium", "size", "small", "slot", "end", 3, "click"], ["name", "trash"]], template: function MyAdvertsPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-topbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-content", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-refresher", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionRefresh", function MyAdvertsPage_Template_ion_refresher_ionRefresh_3_listener($event) { return ctx.refresh($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-refresher-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "My adverts");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MyAdvertsPage_ion_spinner_7_Template, 1, 0, "ion-spinner", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MyAdvertsPage_div_8_Template, 2, 0, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MyAdvertsPage_ng_container_9_Template, 2, 1, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-infinite-scroll", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionInfinite", function MyAdvertsPage_Template_ion_infinite_scroll_ionInfinite_10_listener($event) { return ctx.getMoreMyAdverts($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ion-infinite-scroll-content", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSpinner);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showSpinner && ctx.myAdverts.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myAdverts);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_7__["TopbarComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScrollContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _components_message_message_component__WEBPACK_IMPORTED_MODULE_9__["MessageComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215LWFkdmVydHMvbXktYWR2ZXJ0cy5wYWdlLnNjc3MifQ== */"] });
    return MyAdvertsPage;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyAdvertsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'my-adverts',
                templateUrl: './my-adverts.page.html',
                styleUrls: ['./my-adverts.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _services_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"] }, { type: _services_advert_service__WEBPACK_IMPORTED_MODULE_1__["AdvertService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }, { type: _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__["AdvertClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-my-adverts-my-adverts-module.js.map