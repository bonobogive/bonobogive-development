(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inbox-chat-chat-module"],{

/***/ "./src/app/pages/inbox/chat/chat.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/inbox/chat/chat.module.ts ***!
  \*************************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat.page */ "./src/app/pages/inbox/chat/chat.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");









var routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_5__["ChatPage"]
    }
];
var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatPageModule });
    ChatPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatPageModule_Factory(t) { return new (t || ChatPageModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            ]] });
    return ChatPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatPageModule, { declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_5__["ChatPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                ],
                declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_5__["ChatPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/inbox/chat/chat.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/inbox/chat/chat.page.ts ***!
  \***********************************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../clients/bonobogive.client */ "./src/app/clients/bonobogive.client.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/topbar/topbar.component */ "./src/app/components/topbar/topbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/message/message.component */ "./src/app/components/message/message.component.ts");
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


















var _c0 = ["conversationheader"];
var _c1 = ["content"];
var _c2 = ["conversationFooter"];
function ChatPage_ion_avatar_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r230.auth.user == null ? null : ctx_r230.auth.user.pictureUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatPage_app_message_14_Template(rf, ctx) { if (rf & 1) {
    var _r236 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-message", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatPage_app_message_14_Template_app_message_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r236); var ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r235.goToAdvert(ctx_r235.advert == null ? null : ctx_r235.advert.partitionKey, ctx_r235.advert == null ? null : ctx_r235.advert.sortKey); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("square", true)("imageUrl", ctx_r231.advert.images[0].url)("title", ctx_r231.advert == null ? null : ctx_r231.advert.title)("messageMultiLine", false);
} }
function ChatPage_div_22_div_1_app_message_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-message", 26);
} if (rf & 2) {
    var message_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageUrl", ctx_r239.theirUserProfile == null ? null : ctx_r239.theirUserProfile.pictureUrl)("tinyTitle", ctx_r239.theirUserProfile == null ? null : ctx_r239.theirUserProfile.name)("message", message_r238.message.text)("focus", message_r238)("messageMultiLine", true)("timestamp", message_r238.message.dateTimeUtcCreated);
} }
function ChatPage_div_22_div_1_app_message_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-message", 27);
} if (rf & 2) {
    var message_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageUrl", ctx_r240.auth.user == null ? null : ctx_r240.auth.user.pictureUrl)("messageReply", true)("imagePositionRight", false)("tinyTitle", ctx_r240.auth == null ? null : ctx_r240.auth.user == null ? null : ctx_r240.auth.user.name)("message", message_r238.message.text)("focus", message_r238.message.delivered)("messageMultiLine", true)("timestamp", message_r238);
} }
function ChatPage_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatPage_div_22_div_1_app_message_1_Template, 1, 6, "app-message", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatPage_div_22_div_1_app_message_2_Template, 1, 8, "app-message", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var message_r238 = ctx.$implicit;
    var ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (message_r238.message == null ? null : message_r238.message.userId) === (ctx_r237.theirUserProfile == null ? null : ctx_r237.theirUserProfile.uid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (message_r238.message == null ? null : message_r238.message.userId) === (ctx_r237.auth == null ? null : ctx_r237.auth.user == null ? null : ctx_r237.auth.user.uid));
} }
function ChatPage_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatPage_div_22_div_1_Template, 3, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-bottom", ctx_r232.conversationFooterHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r232.messages);
} }
function ChatPage_ion_toolbar_32_ion_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatPage_ion_toolbar_32_ion_button_2_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r246); var ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r245.openAdvertStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatPage_ion_toolbar_32_ion_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r248 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatPage_ion_toolbar_32_ion_button_3_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r248); var ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r247.openAdvertStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Status: ", ctx_r244.StatusEnum[ctx_r244.advert.status], "");
} }
function ChatPage_ion_toolbar_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-toolbar", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatPage_ion_toolbar_32_ion_button_2_Template, 2, 0, "ion-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatPage_ion_toolbar_32_ion_button_3_Template, 2, 1, "ion-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r234.auth.user == null ? null : ctx_r234.auth.user.uid) == ctx_r234.advert.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r234.auth.user == null ? null : ctx_r234.auth.user.uid) == ctx_r234.advert.userId);
} }
var ChatPage = /** @class */ (function () {
    function ChatPage(auth, formBuilder, errorService, loadingCtrl, navController, popoverCtrl, activatedRoute, modalController, chatClient, messageClient, userClient, advertClient) {
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.errorService = errorService;
        this.loadingCtrl = loadingCtrl;
        this.navController = navController;
        this.popoverCtrl = popoverCtrl;
        this.activatedRoute = activatedRoute;
        this.modalController = modalController;
        this.chatClient = chatClient;
        this.messageClient = messageClient;
        this.userClient = userClient;
        this.advertClient = advertClient;
        // googleMapApiKey = "AIzaSyBL_Jz0y3Y2BNMDn677sRvMRWhW1_PrQ4o";
        this.title = 'Post Private Message';
        this.loadingMedia = false;
        // messages: MessageEntity[] = [];
        this.gotAllMessages = false;
        this.messages = [];
        this.advertImageUrl = "";
        this.myAdvert = false;
        this.messgeInputPlaceholder = "Message privately";
        this.take = 10;
        this.limit = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.take); // import 'rxjs/BehaviorSubject';
        this.showRatingsCount = true;
        this.allowRating = false;
        this.getReviewerRating = true;
        this.readOnlyRating = true;
        this.average = 0;
        this.chatSeen = false;
        this.loadingMessages = false;
        this.loadingMore = false;
        this.loadingChatDetails = false;
        this.nextRequestBlob = "";
        this.StatusEnum = _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_5__["StatusEnum"];
        this.postMessageForm = this.formBuilder.group({
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    Object.defineProperty(ChatPage.prototype, "isAdvertOwner", {
        get: function () {
            if (this.advert && this.advert.userId === this.auth.user.uid) {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    ChatPage.prototype.messageInputFocus = function () {
        this.scrollToBottom();
    };
    ChatPage.prototype.messageInputBlur = function () {
        this.scrollToBottom();
    };
    ChatPage.prototype.ngOnInit = function () {
        var _this = this;
        var urlParams = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.activatedRoute.params, this.activatedRoute.queryParams, function (params, queryParams) { return (__assign(__assign({}, params), queryParams)); });
        urlParams.subscribe(function (routeParams) {
            if (!routeParams.chatId) {
                return;
            }
            _this.chatPrimaryKey = routeParams.chatId;
            _this.loadChat();
            _this.advertPartitionKey = _this.chatPrimaryKey.split("chat.")[1].split("|")[0];
            _this.advertSortKey = _this.chatPrimaryKey.split("|")[1];
            _this.advertClient.get(_this.advertPartitionKey, _this.advertSortKey).subscribe(function (res) {
                _this.advert = res;
            });
        });
    };
    ChatPage.prototype.loadPreviousMessages = function (infiniteScroll) {
        if (!this.loadingChatDetails && !this.loadingMessages && (this.nextRequestBlob !== "" && this.nextRequestBlob))
            this.loadMessages(infiniteScroll);
        infiniteScroll.target.complete();
    };
    ChatPage.prototype.loadMessages = function (infiniteScroll) {
        var _this = this;
        this.loadingMessages = true;
        this.messageClient.get(this.chatPrimaryKey, _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_5__["MessageTypeEnum"].Private, 10, this.nextRequestBlob).subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if (infiniteScroll) {
                    infiniteScroll.target.complete();
                }
                this.nextRequestBlob = res.lastEvaluatedKeyHash;
                if (res.lastEvaluatedKeyHash === "null" || !res.lastEvaluatedKeyHash)
                    this.nextRequestBlob = "";
                (_a = this.messages).unshift.apply(_a, res.messages);
                // TODO - update message seen or chat conversation seen
                this.chatClient.updateUserChatSeen("chat.user-" + this.auth.user.uid, this.chatDetails.primaryKey, true).subscribe(function (res) {
                    console.log("Updated chat user to seen", res);
                });
                return [2 /*return*/];
            });
        }); }).add(function () {
            _this.loadingMessages = false;
            _this.scrollToBottom();
        });
    };
    ChatPage.prototype.loadChat = function () {
        var _this = this;
        this.loadingChatDetails = true;
        this.chatClient.get(this.chatPrimaryKey.split('|')[0] + "|" + this.chatPrimaryKey.split('|')[1], this.chatPrimaryKey.split('|')[2]).subscribe(function (res) {
            _this.chatDetails = res;
            // their user
            var theirUserId = _this.chatDetails.userIds.find(function (x) { return x !== _this.auth.user.uid; });
            if (!theirUserId) {
                theirUserId = _this.chatDetails.userIds[0];
            }
            _this.userClient.get(theirUserId, true).subscribe(function (res) {
                _this.theirUserProfile = res;
            });
            _this.loadMessages(null);
        }).add(function () {
            _this.loadingChatDetails = false;
            _this.scrollToBottom();
        });
    };
    ChatPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            try {
                if (_this.content) {
                    _this.content.scrollToBottom();
                }
            }
            catch (e) {
            }
        });
    };
    ChatPage.prototype.privateMessageForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var messageContent, message;
            var _this = this;
            return __generator(this, function (_a) {
                messageContent = this.postMessageForm.value['message'];
                message = new _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_5__["CreateMessageRequestModel"]();
                message.entityPrimaryKey = this.chatDetails.primaryKey;
                message.messageType = _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_5__["MessageTypeEnum"].Private;
                message.text = messageContent;
                message.userId = this.auth.user.uid;
                message.entityType = _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_5__["EntityTypeEnum"].Chat;
                this.messageClient.post(message).subscribe(function (res) {
                    var messageResponse = new _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_5__["MessageResponse"]();
                    messageResponse.message = res;
                    messageResponse.user = _this.auth.user;
                    _this.messages.push(messageResponse);
                    _this.scrollToBottom();
                }).add(function () {
                    _this.postMessageForm.reset();
                });
                return [2 /*return*/];
            });
        });
    };
    ChatPage.prototype.openAdvertStatus = function () {
        this.navController.navigateForward("advert-status/" + this.advert.primaryKey);
    };
    // async updateAdvertStatus() {
    //   await this.advertService.updateAdvertStatus(this.advert, this.advert.status);
    //   if (this.advert.status === 'collected') {
    //     this.rateUser();
    //   }
    // }
    ChatPage.prototype.goToProfile = function (userId) {
        this.navController.navigateForward("user-profile/" + userId);
    };
    ChatPage.prototype.goToAdvert = function (partitionKey, sortKey) {
        this.navController.navigateForward("advert/" + partitionKey + "/" + sortKey);
    };
    ChatPage.prototype.rateUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, url;
            return __generator(this, function (_a) {
                data = {
                    reviewerUserId: this.auth.user.uid,
                    ratedUserId: this.theirUserProfile.uid,
                    overallaverages: false,
                    advertId: this.chatDetails.partitionKey,
                    getAverageUserRating: false,
                    getReviewerRating: true,
                    readOnlyRating: false,
                    showRatingsCount: false,
                    displayname: this.theirUserProfile.name
                };
                url = "rating?ratedUserId=" + data.ratedUserId + "&reviewerUserId=" + data.reviewerUserId + "&overallaverages=" + data.overallaverages + "&advertId=" + data.advertId + "&getAverageUserRating=" + data.getAverageUserRating + "&getReviewerRating=" + data.getReviewerRating + "&readOnlyRating=" + data.readOnlyRating + "&showRatingsCount=" + data.showRatingsCount + "&displayname=" + data.displayname;
                console.log("Navigate to " + url);
                this.navController.navigateForward(url);
                return [2 /*return*/];
            });
        });
    };
    ChatPage.ɵfac = function ChatPage_Factory(t) { return new (t || ChatPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_5__["ChatClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_5__["MessageClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_5__["UserClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_5__["AdvertClient"])); };
    ChatPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatPage, selectors: [["chat"]], viewQuery: function ChatPage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.conversationheaderView = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.conversationFooterView = _t.first);
        } }, decls: 33, vars: 12, consts: [["title", "Chat"], [1, "chat", 2, "margin-bottom", "50em"], ["content", ""], [3, "hidden"], ["lines", "none"], [2, "margin-left", "0.5em", "margin-right", "0.5em"], [4, "ngIf"], ["slot", "start", 1, "ion-no-padding"], ["slot", "start", 3, "square", "imageUrl", "title", "messageMultiLine", "click", 4, "ngIf"], ["name", "information-circle-outline", 2, "font-size", "2em"], ["threshold", "100px", "position", "top", 3, "ionInfinite"], ["loadingSpinner", "bubbles", "loadingText", "Loading more messages..."], [3, "marginBottom", 4, "ngIf"], [1, "chat-footer", 3, "hidden"], ["conversationFooter", ""], [1, "toolbar-chatbar"], [3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "message", 3, "placeholder", "ionFocus", "ionBlur"], ["fill", "clear", "size", "large", "type", "submit", "slot", "end", 3, "disabled"], ["name", "send"], ["class", "toolbar-status", "class", "ion-no-padding", 4, "ngIf"], [3, "src"], ["slot", "start", 3, "square", "imageUrl", "title", "messageMultiLine", "click"], [4, "ngFor", "ngForOf"], [3, "imageUrl", "tinyTitle", "message", "focus", "messageMultiLine", "timestamp", 4, "ngIf"], [3, "imageUrl", "messageReply", "imagePositionRight", "tinyTitle", "message", "focus", "messageMultiLine", "timestamp", 4, "ngIf"], [3, "imageUrl", "tinyTitle", "message", "focus", "messageMultiLine", "timestamp"], [3, "imageUrl", "messageReply", "imagePositionRight", "tinyTitle", "message", "focus", "messageMultiLine", "timestamp"], [1, "ion-no-padding"], ["button-default", "", "block", "", 3, "click", 4, "ngIf"], ["fill", "clear", "color", "dark", "button-default", "", "block", "", 3, "click", 4, "ngIf"], ["button-default", "", "block", "", 3, "click"], ["fill", "clear", "color", "dark", "button-default", "", "block", "", 3, "click"]], template: function ChatPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-topbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-content", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-spinner", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-item", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Inbox");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ">");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChatPage_ion_avatar_12_Template, 2, 1, "ion-avatar", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ChatPage_app_message_14_Template, 1, 4, "app-message", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ion-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Suggest a location, date and time for collection");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-infinite-scroll", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionInfinite", function ChatPage_Template_ion_infinite_scroll_ionInfinite_20_listener($event) { return ctx.loadPreviousMessages($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "ion-infinite-scroll-content", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ChatPage_div_22_Template, 2, 3, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-footer", 13, 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-toolbar", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-card", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "form", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChatPage_Template_form_ngSubmit_27_listener() { return ctx.privateMessageForm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ion-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionFocus", function ChatPage_Template_ion_input_ionFocus_29_listener() { return ctx.messageInputFocus(); })("ionBlur", function ChatPage_Template_ion_input_ionBlur_29_listener() { return ctx.messageInputBlur(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ion-button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "ion-icon", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ChatPage_ion_toolbar_32_Template, 4, 2, "ion-toolbar", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.loadingChatDetails);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.loadingChatDetails);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Private message with ", ctx.theirUserProfile == null ? null : ctx.theirUserProfile.name, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.user == null ? null : ctx.auth.user.pictureUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.advert == null ? null : ctx.advert.images.length) > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messages);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !(ctx.chatDetails == null ? null : ctx.chatDetails.primaryKey));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.auth.user);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.postMessageForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.messgeInputPlaceholder);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.postMessageForm.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.advert && (ctx.advert == null ? null : ctx.advert.userId) == (ctx.auth.user == null ? null : ctx.auth.user.uid));
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__["TopbarComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScrollContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonAvatar"], _components_message_message_component__WEBPACK_IMPORTED_MODULE_10__["MessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], styles: [".chat[_ngcontent-%COMP%]   .chat-item-advert-image[_ngcontent-%COMP%] {\n  padding-right: 1em;\n  position: relative;\n  padding: 0;\n}\n\n.chat[_ngcontent-%COMP%]   .chat-item-advert-image[_ngcontent-%COMP%]   .advert-owner-photourl[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2%;\n  padding: 0;\n  margin: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 40%;\n  height: 40%;\n  border: 1px solid white;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.chat-footer[_ngcontent-%COMP%]   .toolbar-status[_ngcontent-%COMP%] {\n  background-color: \"red\";\n}\n\n.chat-footer[_ngcontent-%COMP%]   .average-rating-container[_ngcontent-%COMP%] {\n  background-color: white;\n  display: block;\n  margin: 0em;\n  padding: 0.5em;\n  font-size: 1.5em;\n}\n\n.chat-footer[_ngcontent-%COMP%]   .average-rating-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 1em;\n  padding: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5ib3gvY2hhdC9DOlxcVXNlcnNcXGdhcmV0XFxTb3VyY2VcXFJlcG9zXFxib25vYm9naXZlL3NyY1xcYXBwXFxwYWdlc1xcaW5ib3hcXGNoYXRcXGNoYXQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9pbmJveC9jaGF0L2NoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWlCO0VBQ2pCLGtCQUFrQjtFQUVsQixVQUFTO0FDRGpCOztBREpBO0VBT1ksa0JBQWtCO0VBQ2xCLFVBQVM7RUFDVCxVQUFTO0VBQ1QsU0FBUTtFQUNSLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLFVBQVM7RUFDVCxXQUFVO0VBQ1YsdUJBQXNCO0VBQ3RCLGtCQUFpQjtFQUNqQixvQkFBaUI7S0FBakIsaUJBQWlCO0FDQzdCOztBRFNBO0VBT1EsdUJBQXNCO0FDWjlCOztBREtBO0VBYVEsdUJBQXNCO0VBQ3RCLGNBQWE7RUFDYixXQUFVO0VBQ1YsY0FBYTtFQUNiLGdCQUFlO0FDZHZCOztBREhBO0VBb0JZLFdBQVU7RUFDVixZQUFXO0FDYnZCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5ib3gvY2hhdC9jaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0IHtcclxuICAgIC5jaGF0LWl0ZW0tYWR2ZXJ0LWltYWdle1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6MWVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAvLyBib3JkZXItcmlnaHQ6MXB4IHNvbGlkIHJnYigyMTQsIDIxNCwgMjE0KTtcclxuICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgLmFkdmVydC1vd25lci1waG90b3VybHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206MiU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIHdpZHRoOjQwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OjQwJTtcclxuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2Nyb2xsLWNvbnRlbnR7XHJcbiAgICAgICAvLyBtYXJnaW4tYm90dG9tOjEwZW07XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uY2hhdC1mb290ZXIge1xyXG4gICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRtYXA6ICRjb2xvcnMsICRrZXk6IHByaW1hcnkpO1xyXG4gICAgLnRvb2xiYXItY2hhdGJhciB7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRtYXA6ICRjb2xvcnMsICRrZXk6IHByaW1hcnkpO1xyXG4gICAgfVxyXG4gICAgLnRvb2xiYXItc3RhdHVzIHtcclxuICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJG1hcDogJGNvbG9ycywgJGtleTogcHJpbWFyeSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpcInJlZFwiO1xyXG4gICAgICBcclxuICAgIH0gLy8gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcblxyXG5cclxuICAgIC5hdmVyYWdlLXJhdGluZy1jb250YWluZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjowZW07XHJcbiAgICAgICAgcGFkZGluZzowLjVlbTtcclxuICAgICAgICBmb250LXNpemU6MS41ZW07XHJcblxyXG4gICAgICAgIHVse1xyXG4gICAgICAgICAgICBtYXJnaW46MWVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjFlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iLCIuY2hhdCAuY2hhdC1pdGVtLWFkdmVydC1pbWFnZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY2hhdCAuY2hhdC1pdGVtLWFkdmVydC1pbWFnZSAuYWR2ZXJ0LW93bmVyLXBob3RvdXJsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogNDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmNoYXQtZm9vdGVyIC50b29sYmFyLXN0YXR1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IFwicmVkXCI7XG59XG5cbi5jaGF0LWZvb3RlciAuYXZlcmFnZS1yYXRpbmctY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDBlbTtcbiAgcGFkZGluZzogMC41ZW07XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5jaGF0LWZvb3RlciAuYXZlcmFnZS1yYXRpbmctY29udGFpbmVyIHVsIHtcbiAgbWFyZ2luOiAxZW07XG4gIHBhZGRpbmc6IDFlbTtcbn1cbiJdfQ== */"] });
    return ChatPage;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "chat",
                templateUrl: './chat.page.html',
                styleUrls: ['./chat.page.scss'],
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }, { type: _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }, { type: _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_5__["ChatClient"] }, { type: _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_5__["MessageClient"] }, { type: _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_5__["UserClient"] }, { type: _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_5__["AdvertClient"] }]; }, { conversationheaderView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['conversationheader']
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['content']
        }], conversationFooterView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['conversationFooter']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-inbox-chat-chat-module.js.map