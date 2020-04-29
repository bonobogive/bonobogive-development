(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rating-rating-module"],{

/***/ "./src/app/pages/rating/rating.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/rating/rating.module.ts ***!
  \***********************************************/
/*! exports provided: RatingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingPageModule", function() { return RatingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _rating_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rating.page */ "./src/app/pages/rating/rating.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









var routes = [
    {
        path: '',
        component: _rating_page__WEBPACK_IMPORTED_MODULE_5__["RatingPage"]
    }
];
var RatingPageModule = /** @class */ (function () {
    function RatingPageModule() {
    }
    RatingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RatingPageModule });
    RatingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RatingPageModule_Factory(t) { return new (t || RatingPageModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
            ]] });
    return RatingPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RatingPageModule, { declarations: [_rating_page__WEBPACK_IMPORTED_MODULE_5__["RatingPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
                ],
                declarations: [_rating_page__WEBPACK_IMPORTED_MODULE_5__["RatingPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/rating/rating.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/rating/rating.page.ts ***!
  \*********************************************/
/*! exports provided: RatingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingPage", function() { return RatingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../clients/bonobogive.client */ "./src/app/clients/bonobogive.client.ts");
/* harmony import */ var _components_rate_rate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/rate/rate.component */ "./src/app/components/rate/rate.component.ts");
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/topbar/topbar.component */ "./src/app/components/topbar/topbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/message/message.component */ "./src/app/components/message/message.component.ts");
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

// import { FirebaseService } from '../../services/firebase.service';













function RatingPage_div_4_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RatingPage_div_4_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RatingPage_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r419 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-message", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-message", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-rate", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingPage_div_4_Template_ion_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r419); var ctx_r418 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r418.submitRating(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RatingPage_div_4_span_5_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RatingPage_div_4_span_6_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r414 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", ctx_r414.advert.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", ctx_r414.ratedUser.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("advertId", ctx_r414.advertPrimaryKey)("ratedUserId", ctx_r414.ratedUserId)("showRatingsCount", ctx_r414.showRatingsCount)("reviewerUserId", ctx_r414.ratingUserId)("getReviewerRating", ctx_r414.getReviewerRating)("getAverageUserRating", ctx_r414.getAverageUserRating)("readOnlyRating", ctx_r414.readOnlyRating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx_r414.rateComponent == null ? null : ctx_r414.rateComponent.ratingComplete));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r414.rateComponent == null ? null : ctx_r414.rateComponent.foundPreviousRating));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r414.rateComponent == null ? null : ctx_r414.rateComponent.foundPreviousRating);
} }
function RatingPage_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var RatingPage = /** @class */ (function () {
    function RatingPage(activatedRoute, ratingClient, advertClient, userClient, loadingController, navController) {
        this.activatedRoute = activatedRoute;
        this.ratingClient = ratingClient;
        this.advertClient = advertClient;
        this.userClient = userClient;
        this.loadingController = loadingController;
        this.navController = navController;
        this.showRatingsCount = false;
        this.getReviewerRating = true;
        this.getAverageUserRating = false;
        this.readOnlyRating = false;
        this.loading = false;
        this.ratingSpinner = false;
    }
    RatingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.rating = new _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_4__["RatingEntity"]();
        this.rating.ratingBreakdown = new _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_4__["RatingBreakdown"]();
        var urlParams = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.activatedRoute.params, this.activatedRoute.queryParams, function (params, queryParams) { return (__assign(__assign({}, params), queryParams)); });
        urlParams.subscribe(function (routeParams) {
            _this.advertPrimaryKey = routeParams.advertPrimaryKey;
            _this.advertPartitionKey = _this.advertPrimaryKey.split("|")[0];
            _this.advertSortKey = _this.advertPrimaryKey.split("|")[1];
            _this.ratedUserId = routeParams.ratedUserId;
            _this.ratingUserId = routeParams.ratingUserId;
            var advertObservable = _this.advertClient.get(_this.advertPartitionKey, _this.advertSortKey);
            var userObservable = _this.userClient.get(_this.ratedUserId, true);
            var combined = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(advertObservable, userObservable);
            combined.subscribe(function (res) {
                _this.advert = res[0];
                _this.ratedUser = res[1];
                console.log("Got advert and user", res);
            })
                .add(function () {
                _this.loading = false;
            });
        });
    };
    RatingPage.prototype.submitRating = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ratingRequest, ratingObservable, loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ratingRequest = this.rateComponent.createRatingRequest();
                        ratingObservable = this.ratingClient.post(ratingRequest);
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Please wait...'
                            })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        ratingObservable.subscribe(function (res) {
                            console.log("rated user " + ratingRequest.ratedUserId, res);
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
                        return [2 /*return*/];
                }
            });
        });
    };
    RatingPage.ɵfac = function RatingPage_Factory(t) { return new (t || RatingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_4__["RatingClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_4__["AdvertClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_4__["UserClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"])); };
    RatingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RatingPage, selectors: [["app-rating"]], viewQuery: function RatingPage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_components_rate_rate_component__WEBPACK_IMPORTED_MODULE_5__["RateComponent"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rateComponent = _t.first);
        } }, decls: 6, vars: 2, consts: [["title", "Notifications"], [1, "Rate", "user"], [1, "rate-user"], [4, "ngIf"], [3, "message"], [3, "advertId", "ratedUserId", "showRatingsCount", "reviewerUserId", "getReviewerRating", "getAverageUserRating", "readOnlyRating"], ["expand", "block", 3, "disabled", "click"]], template: function RatingPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-topbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-content", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RatingPage_div_4_Template, 7, 12, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RatingPage_div_5_Template, 2, 0, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.ratedUserId && ctx.ratingUserId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_6__["TopbarComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_message_message_component__WEBPACK_IMPORTED_MODULE_8__["MessageComponent"], _components_rate_rate_component__WEBPACK_IMPORTED_MODULE_5__["RateComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]], styles: [".rate-user[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 100%;\n  top: 0;\n  bottom: 0;\n}\n\n.rate-user[_ngcontent-%COMP%]   ul.rating[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n.rate-user[_ngcontent-%COMP%]   .rating-title[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0;\n  margin: 0;\n}\n\n.rate-user[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\n  font-size: 20px;\n  display: block;\n}\n\n.rate-user[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]   .ion-md-star[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.rate-user[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]   .ion-md-star-outline[_ngcontent-%COMP%] {\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmF0aW5nL0M6XFxVc2Vyc1xcZ2FyZXRcXFNvdXJjZVxcUmVwb3NcXGJvbm9ib2dpdmUvc3JjXFxhcHBcXHBhZ2VzXFxyYXRpbmdcXHJhdGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JhdGluZy9yYXRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXNCO0VBQ3RCLFlBQVc7RUFDWCxNQUFLO0VBQ0wsU0FBUTtBQ0NaOztBRExBO0VBUVEsa0JBQWtCO0VBQ2xCLHFCQUFvQjtFQUNwQixvQkFBbUI7QUNDM0I7O0FEWEE7RUFnQlEsa0JBQWtCO0VBQ2xCLFVBQVM7RUFDVCxTQUFRO0FDRGhCOztBRGpCQTtFQXNCUSxlQUFlO0VBQUUsY0FBYTtBQ0F0Qzs7QUR0QkE7RUF5QlcsWUFBVztBQ0N0Qjs7QUQxQkE7RUE2QlcsV0FBVTtBQ0NyQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JhdGluZy9yYXRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhdGUtdXNlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB0b3A6MDtcclxuICAgIGJvdHRvbTowO1xyXG5cclxuICAgIHVsLnJhdGluZ3tcclxuXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6MCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjowICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgLy8gcGFkZGluZy1ib3R0b206MWVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5yYXRpbmctdGl0bGV7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhcntcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7IGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmlvbi1tZC1zdGFye1xyXG4gICAgICAgICAgIGNvbG9yOmdyZWVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlvbi1tZC1zdGFyLW91dGxpbmV7XHJcbiAgICAgICAgICAgY29sb3I6Z3JleTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLnN0YXIuYXZlcmFnZXtcclxuICAgICAgICBcclxuICAgICAgICAuaW9uLW1kLXN0YXJ7XHJcbiAgICAgICAgICAvLyAgY29sb3I6bWFwLWdldCgkbWFwOiAkY29sb3JzLCAka2V5OiBnb2xkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pb24tbWQtc3Rhci1oYWxme1xyXG4gICAgICAgICAgLy8gIGNvbG9yOm1hcC1nZXQoJG1hcDogJGNvbG9ycywgJGtleTogZ29sZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW9uLW1kLXN0YXItb3V0bGluZXtcclxuICAgICAgICAgICAvLyBjb2xvcjptYXAtZ2V0KCRtYXA6ICRjb2xvcnMsICRrZXk6IGdvbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIucmF0ZS11c2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG59XG5cbi5yYXRlLXVzZXIgdWwucmF0aW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4ucmF0ZS11c2VyIC5yYXRpbmctdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLnJhdGUtdXNlciAuc3RhciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5yYXRlLXVzZXIgLnN0YXIgLmlvbi1tZC1zdGFyIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ucmF0ZS11c2VyIC5zdGFyIC5pb24tbWQtc3Rhci1vdXRsaW5lIHtcbiAgY29sb3I6IGdyZXk7XG59XG4iXX0= */"] });
    return RatingPage;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rating',
                templateUrl: './rating.page.html',
                styleUrls: ['./rating.page.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_4__["RatingClient"] }, { type: _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_4__["AdvertClient"] }, { type: _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_4__["UserClient"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }]; }, { rateComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_components_rate_rate_component__WEBPACK_IMPORTED_MODULE_5__["RateComponent"]]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-rating-rating-module.js.map