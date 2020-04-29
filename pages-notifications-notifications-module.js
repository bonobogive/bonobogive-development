(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notifications-notifications-module"],{

/***/ "./src/app/pages/notifications/notifications.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.module.ts ***!
  \*************************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications.page */ "./src/app/pages/notifications/notifications.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









var routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_5__["NotificationsPage"]
    }
];
var NotificationsPageModule = /** @class */ (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NotificationsPageModule });
    NotificationsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotificationsPageModule_Factory(t) { return new (t || NotificationsPageModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
            ]] });
    return NotificationsPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotificationsPageModule, { declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_5__["NotificationsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsPageModule, [{
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
                declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_5__["NotificationsPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/notifications/notifications.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/notifications/notifications.page.ts ***!
  \***********************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_advert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/advert.service */ "./src/app/services/advert.service.ts");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../clients/bonobogive.client */ "./src/app/clients/bonobogive.client.ts");
/* harmony import */ var _services_websocketnotification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/websocketnotification.service */ "./src/app/services/websocketnotification.service.ts");
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



















function NotificationsPage_div_3_ion_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-spinner", 9);
} }
function NotificationsPage_div_3_ion_list_6_Template(rf, ctx) { if (rf & 1) {
    var _r301 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-message", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsPage_div_3_ion_list_6_Template_app_message_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r301); var notification_r299 = ctx.$implicit; var ctx_r300 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r300.loadNotification(notification_r299); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsPage_div_3_ion_list_6_Template_ion_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r301); var notification_r299 = ctx.$implicit; var ctx_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r302.deleteNotification(notification_r299.message); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var notification_r299 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (notification_r299 == null ? null : notification_r299.message == null ? null : notification_r299.message.seen) ? "opened" : "new");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("messageMultiLine", true)("iconName", (notification_r299 == null ? null : notification_r299.message == null ? null : notification_r299.message.seen) ? "mail-open" : "mail")("focus", notification_r299.message.seen)("title", notification_r299.message.text);
} }
function NotificationsPage_div_3_ion_item_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have no notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotificationsPage_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r304 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotificationsPage_div_3_ion_spinner_1_Template, 1, 0, "ion-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-refresher", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionRefresh", function NotificationsPage_div_3_Template_ion_refresher_ionRefresh_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r304); var ctx_r303 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r303.refresh($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-refresher-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotificationsPage_div_3_ion_list_6_Template, 5, 5, "ion-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotificationsPage_div_3_ion_item_8_Template, 2, 0, "ion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-infinite-scroll", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionInfinite", function NotificationsPage_div_3_Template_ion_infinite_scroll_ionInfinite_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r304); var ctx_r305 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r305.getMoreNotifications($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ion-infinite-scroll-content", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r294 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r294.displaySpinner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r294.notifications);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r294.notifications == null ? null : ctx_r294.notifications.length) === 0);
} }
function NotificationsPage_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(navController, alertCtrl, errorService, auth, advertService, imageServie, messageClient, websocketService) {
        this.navController = navController;
        this.alertCtrl = alertCtrl;
        this.errorService = errorService;
        this.auth = auth;
        this.advertService = advertService;
        this.imageServie = imageServie;
        this.messageClient = messageClient;
        this.websocketService = websocketService;
        this.title = "notifications";
        this.displaySpinner = false;
        this.segmentOption = "new";
        this.MessageTypeEnum = _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__["MessageTypeEnum"];
    }
    NotificationsPage.prototype.ngOnInit = function () {
        this.getNotifications(null, null);
    };
    NotificationsPage.prototype.goToInbox = function () {
        this.navController.navigateRoot("inbox");
    };
    NotificationsPage.prototype.loadNotification = function (notification) {
        this.messageClient.updateMessageSeen(notification.message.partitionKey, notification.message.sortKey, true).subscribe(function (res) {
            console.log("message notification set to seen");
        });
        this.navController.navigateForward(notification.message.redirectUrl);
    };
    NotificationsPage.prototype.deleteNotification = function (notification) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.messageClient.delete(notification.partitionKey, notification.sortKey).subscribe(function (res) {
                    _this.notifications.splice(_this.notifications.findIndex(function (item) { return item.message.primaryKey === notification.primaryKey; }), 1);
                    console.log("Notification deleted", notification);
                });
                return [2 /*return*/];
            });
        });
    };
    NotificationsPage.prototype.getNotifications = function (refresher, infiniteScroll) {
        var _this = this;
        if (!refresher && !infiniteScroll)
            this.displaySpinner = true;
        // entityPrimaryKey = "notification.user-{userId}"
        this.messageClient.get("user-" + this.auth.user.uid, _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__["MessageTypeEnum"].Notification, 30, this.nextRequestBlob).subscribe(function (res) {
            var _a;
            _this.nextRequestBlob = res.lastEvaluatedKeyHash;
            if (!_this.notifications)
                _this.notifications = [];
            (_a = _this.notifications).push.apply(_a, res.messages);
        }).add(function () {
            _this.displaySpinner = false;
            _this.websocketService.newNotifictions = false;
            if (refresher)
                refresher.target.complete();
            if (infiniteScroll)
                infiniteScroll.target.complete();
        });
    };
    NotificationsPage.prototype.refresh = function (refresher) {
        this.nextRequestBlob = undefined;
        this.notifications = null;
        this.getNotifications(refresher, null);
    };
    NotificationsPage.prototype.getMoreNotifications = function (infiniteScroll) {
        this.getNotifications(null, infiniteScroll);
    };
    NotificationsPage.prototype.goToAdvert = function (advertId) {
        this.navController.navigateForward("advert/" + advertId);
    };
    NotificationsPage.ɵfac = function NotificationsPage_Factory(t) { return new (t || NotificationsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_advert_service__WEBPACK_IMPORTED_MODULE_4__["AdvertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__["MessageClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_websocketnotification_service__WEBPACK_IMPORTED_MODULE_7__["WebSocketNotificationService"])); };
    NotificationsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationsPage, selectors: [["notifications"]], decls: 5, vars: 2, consts: [["title", "Notifications"], [1, "notifications"], [4, "ngIf"], ["class", "mainspinner", "class", "ion-padding", "right", "", 4, "ngIf"], ["slot", "fixed", 3, "ionRefresh"], [1, "ion-padding"], ["lines", "none", "class", "ion-no-padding", 4, "ngFor", "ngForOf"], [3, "ionInfinite"], ["loadingText", "Loading more notifications..."], ["right", "", 1, "ion-padding"], ["lines", "none", 1, "ion-no-padding"], [3, "ngClass"], [3, "messageMultiLine", "iconName", "focus", "title", "click"], ["slot", "end", "color", "medium", "size", "large", "fill", "clear", 3, "click"], ["name", "trash"]], template: function NotificationsPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-topbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-content", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotificationsPage_div_3_Template, 11, 3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotificationsPage_div_4_Template, 3, 0, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.user);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.user);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__["TopbarComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScrollContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _components_message_message_component__WEBPACK_IMPORTED_MODULE_10__["MessageComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"]], styles: [".notifications[_ngcontent-%COMP%]   .mainspinner[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9ucy9DOlxcVXNlcnNcXGdhcmV0XFxTb3VyY2VcXFJlcG9zXFxib25vYm9naXZlL3NyY1xcYXBwXFxwYWdlc1xcbm90aWZpY2F0aW9uc1xcbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxXQUFXO0FDQW5CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RpZmljYXRpb25zIHtcclxuICAgIC5tYWluc3Bpbm5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgXHJcbn1cclxuXHJcbiIsIi5ub3RpZmljYXRpb25zIC5tYWluc3Bpbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"] });
    return NotificationsPage;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'notifications',
                templateUrl: './notifications.page.html',
                styleUrls: ['./notifications.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] }, { type: _services_error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _services_advert_service__WEBPACK_IMPORTED_MODULE_4__["AdvertService"] }, { type: _services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"] }, { type: _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_6__["MessageClient"] }, { type: _services_websocketnotification_service__WEBPACK_IMPORTED_MODULE_7__["WebSocketNotificationService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-notifications-notifications-module.js.map