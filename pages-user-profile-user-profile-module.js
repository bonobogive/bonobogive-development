(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-profile-user-profile-module"],{

/***/ "./src/app/pages/user-profile/user-profile.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.module.ts ***!
  \***********************************************************/
/*! exports provided: UserProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profile.page */ "./src/app/pages/user-profile/user-profile.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









var routes = [
    {
        path: '',
        component: _user_profile_page__WEBPACK_IMPORTED_MODULE_5__["UserProfilePage"]
    }
];
var UserProfilePageModule = /** @class */ (function () {
    function UserProfilePageModule() {
    }
    UserProfilePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserProfilePageModule });
    UserProfilePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserProfilePageModule_Factory(t) { return new (t || UserProfilePageModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
            ]] });
    return UserProfilePageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserProfilePageModule, { declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_5__["UserProfilePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfilePageModule, [{
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
                declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_5__["UserProfilePage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/user-profile/user-profile.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.page.ts ***!
  \*********************************************************/
/*! exports provided: UserProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePage", function() { return UserProfilePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../clients/bonobogive.client */ "./src/app/clients/bonobogive.client.ts");
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/topbar/topbar.component */ "./src/app/components/topbar/topbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_circle_image_circle_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/circle-image/circle-image.component */ "./src/app/components/circle-image/circle-image.component.ts");
/* harmony import */ var _components_adverts_adverts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/adverts/adverts.component */ "./src/app/components/adverts/adverts.component.ts");
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

















function UserProfilePage_app_circle_image_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-circle-image", 10);
} if (rf & 2) {
    var ctx_r320 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageUrl", ctx_r320.userProfile == null ? null : ctx_r320.userProfile.pictureUrl)("imageSize", ctx_r320.profileImageSize)("centerImage", ctx_r320.centerImage);
} }
function UserProfilePage_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function UserProfilePage_app_adverts_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-adverts", 11);
} if (rf & 2) {
    var ctx_r322 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("adverts", ctx_r322.userAdverts)("enableFavourites", true);
} }
var UserProfilePage = /** @class */ (function () {
    function UserProfilePage(auth, navController, activatedRoute, imageService, advertClient, userClient) {
        // this.userId = this.params.get("id");
        this.auth = auth;
        this.navController = navController;
        this.activatedRoute = activatedRoute;
        this.imageService = imageService;
        this.advertClient = advertClient;
        this.userClient = userClient;
        this.title = "User Profile";
        this.userRating = new _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__["RatingEntity"]();
        this.reviewerSubmittedUserRating = new _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__["RatingEntity"]();
        this.userAdverts = [];
        this.take = 10;
        this.profileImageSize = "10em";
        this.centerImage = true;
        this.showRatingsCount = true;
        this.readOnlyRating = true;
        this.getOverallaverage = true;
        this.getReviewersPreviousRating = false;
        this.loadedAllAdverts = false;
        this.nextRequestBlob = undefined;
    }
    UserProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        var urlParams = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.activatedRoute.params, this.activatedRoute.queryParams, function (params, queryParams) { return (__assign(__assign({}, params), queryParams)); });
        urlParams.subscribe(function (routeParams) {
            _this.userId = routeParams.id;
            _this.getUserProfile();
            _this.getUsersAdverts(null, null);
        });
    };
    UserProfilePage.prototype.getUserProfile = function () {
        var _this = this;
        this.userClient.get(this.userId, true).subscribe(function (res) {
            _this.userProfile = res;
        });
    };
    UserProfilePage.prototype.getUsersAdverts = function (refresher, infiniteScroll) {
        var _this = this;
        var pagination = new _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__["PaginationRequest"]();
        pagination.nextRequestBlob = this.nextRequestBlob;
        pagination.take = 10;
        this.advertClient.usersAdverts(this.userId, pagination).subscribe(function (res) {
            _this.userAdverts = res.entities;
            _this.nextRequestBlob = res.lastEvaluatedKeyHash;
            if (infiniteScroll) {
                infiniteScroll.target.complete();
            }
            if (refresher) {
                refresher.target.complete();
            }
        });
    };
    UserProfilePage.prototype.getMoreMyAdverts = function (infiniteScroll) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.loadedAllAdverts) {
                    infiniteScroll.target.complete();
                    return [2 /*return*/];
                }
                this.getUsersAdverts(null, infiniteScroll);
                return [2 /*return*/];
            });
        });
    };
    UserProfilePage.prototype.refresh = function (refresher) {
        this.nextRequestBlob = undefined;
        this.getUsersAdverts(refresher, null);
    };
    UserProfilePage.prototype.ngAfterViewInit = function () {
    };
    UserProfilePage.ɵfac = function UserProfilePage_Factory(t) { return new (t || UserProfilePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__["AdvertClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__["UserClient"])); };
    UserProfilePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfilePage, selectors: [["user-profile"]], decls: 18, vars: 7, consts: [["title", "User Profile"], [1, "userProfile"], ["slot", "fixed", 3, "ionRefresh"], ["right", "", 1, "ion-padding", 3, "hidden"], [3, "imageUrl", "imageSize", "centerImage", 4, "ngIf"], [4, "ngIf"], [3, "hidden"], [3, "adverts", "enableFavourites", 4, "ngIf"], ["threshold", "100px", 3, "ionInfinite"], ["loadingSpinner", "bubbles", "loadingText", "Loading more adverts..."], [3, "imageUrl", "imageSize", "centerImage"], [3, "adverts", "enableFavourites"]], template: function UserProfilePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-topbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-content", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-refresher", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionRefresh", function UserProfilePage_Template_ion_refresher_ionRefresh_3_listener($event) { return ctx.refresh($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-refresher-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ion-spinner", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserProfilePage_app_circle_image_7_Template, 1, 3, "app-circle-image", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserProfilePage_div_10_Template, 1, 0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserProfilePage_app_adverts_15_Template, 1, 2, "app-adverts", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-infinite-scroll", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionInfinite", function UserProfilePage_Template_ion_infinite_scroll_ionInfinite_16_listener($event) { return ctx.getMoreMyAdverts($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ion-infinite-scroll-content", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.userProfile == null ? null : ctx.userProfile.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userProfile == null ? null : ctx.userProfile.pictureUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userProfile == null ? null : ctx.userProfile.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userProfile == null ? null : ctx.userProfile.uid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !(ctx.userProfile == null ? null : ctx.userProfile.name));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.userProfile == null ? null : ctx.userProfile.name, " is giving");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userAdverts && ctx.userAdverts.length > 0);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_7__["TopbarComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScrollContent"], _components_circle_image_circle_image_component__WEBPACK_IMPORTED_MODULE_9__["CircleImageComponent"], _components_adverts_adverts_component__WEBPACK_IMPORTED_MODULE_10__["AdvertsComponent"]], styles: [".userProfile[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 3em;\n  font-weight: 350;\n}\n\n.userProfile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 350;\n}\n\n.userProfile[_ngcontent-%COMP%]   .advert-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1wcm9maWxlL0M6XFxVc2Vyc1xcZ2FyZXRcXFNvdXJjZVxcUmVwb3NcXGJvbm9ib2dpdmUvc3JjXFxhcHBcXHBhZ2VzXFx1c2VyLXByb2ZpbGVcXHVzZXItcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsY0FBYTtFQUNiLGdCQUFlO0FDQXZCOztBREhBO0VBT00sZ0JBQWU7QUNBckI7O0FEUEE7RUFXUyxhQUFZO0VBQ1osZUFBYztFQUNkLDhCQUE4QjtFQUM5QixzQkFBc0I7QUNBL0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyUHJvZmlsZXtcclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTozZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6MzUwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaDN7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OjM1MDtcclxuICAgIH1cclxuICAgIC5hZHZlcnQtbGlzdHtcclxuICAgICAgLy8gICBtYXJnaW46MWVtO1xyXG4gICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgIGZsZXgtd3JhcDp3cmFwO1xyXG4gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxyXG4gICAgIH1cclxuICB9IiwiLnVzZXJQcm9maWxlIGgyIHtcbiAgZm9udC1zaXplOiAzZW07XG4gIGZvbnQtd2VpZ2h0OiAzNTA7XG59XG5cbi51c2VyUHJvZmlsZSBoMyB7XG4gIGZvbnQtd2VpZ2h0OiAzNTA7XG59XG5cbi51c2VyUHJvZmlsZSAuYWR2ZXJ0LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbiJdfQ== */"] });
    return UserProfilePage;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfilePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'user-profile',
                templateUrl: './user-profile.page.html',
                styleUrls: ['./user-profile.page.scss'],
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"] }, { type: _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__["AdvertClient"] }, { type: _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__["UserClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-user-profile-user-profile-module.js.map