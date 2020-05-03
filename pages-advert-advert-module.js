(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-advert-advert-module"],{

/***/ "./node_modules/copy-to-clipboard/index.js":
/*!*************************************************!*\
  !*** ./node_modules/copy-to-clipboard/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__(/*! toggle-selection */ "./node_modules/toggle-selection/index.js");

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        e.clipboardData.clearData();
        e.clipboardData.setData(options.format, text);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ "./node_modules/toggle-selection/index.js":
/*!************************************************!*\
  !*** ./node_modules/toggle-selection/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ "./src/app/pages/advert/advert.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/advert/advert.module.ts ***!
  \***********************************************/
/*! exports provided: AdvertPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertPageModule", function() { return AdvertPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _advert_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./advert.page */ "./src/app/pages/advert/advert.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");










var routes = [
    {
        path: '',
        component: _advert_page__WEBPACK_IMPORTED_MODULE_5__["AdvertPage"],
        data: { preload: true }
    }
];
var AdvertPageModule = /** @class */ (function () {
    function AdvertPageModule() {
    }
    AdvertPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdvertPageModule });
    AdvertPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdvertPageModule_Factory(t) { return new (t || AdvertPageModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
            ]] });
    return AdvertPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdvertPageModule, { declarations: [_advert_page__WEBPACK_IMPORTED_MODULE_5__["AdvertPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvertPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
                ],
                declarations: [_advert_page__WEBPACK_IMPORTED_MODULE_5__["AdvertPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/advert/advert.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/advert/advert.page.ts ***!
  \*********************************************/
/*! exports provided: AdvertPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertPage", function() { return AdvertPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/favourite.service */ "./src/app/services/favourite.service.ts");
/* harmony import */ var _services_advert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/advert.service */ "./src/app/services/advert.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/urls */ "./src/app/constants/urls.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_comments_comments_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/comments/comments.component */ "./src/app/components/comments/comments.component.ts");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../clients/bonobogive.client */ "./src/app/clients/bonobogive.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/topbar/topbar.component */ "./src/app/components/topbar/topbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/message/message.component */ "./src/app/components/message/message.component.ts");
/* harmony import */ var _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/rating/rating.component */ "./src/app/components/rating/rating.component.ts");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _pipes_favourite_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../pipes/favourite.pipe */ "./src/app/pipes/favourite.pipe.ts");
/* harmony import */ var _pipes_advert_image_url_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../pipes/advert-image-url.pipe */ "./src/app/pipes/advert-image-url.pipe.ts");
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


































var _c0 = ["content"];
var _c1 = ["commentinput"];
function AdvertPage_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvertPage_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Advert no longer exists...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvertPage_div_6_ion_icon_5_Template(rf, ctx) { if (rf & 1) {
    var _r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertPage_div_6_ion_icon_5_Template_ion_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r173); var ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r172.openEditPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvertPage_div_6_ion_icon_7_Template(rf, ctx) { if (rf & 1) {
    var _r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertPage_div_6_ion_icon_7_Template_ion_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r175); var ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r174.share(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvertPage_div_6_ion_icon_8_Template(rf, ctx) { if (rf & 1) {
    var _r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertPage_div_6_ion_icon_8_Template_ion_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r177); var ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r176.copyUrl(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvertPage_div_6_ion_icon_9_Template(rf, ctx) { if (rf & 1) {
    var _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertPage_div_6_ion_icon_9_Template_ion_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r179); var ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r178.deleteFavourite(ctx_r178.advert); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvertPage_div_6_ion_icon_11_Template(rf, ctx) { if (rf & 1) {
    var _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertPage_div_6_ion_icon_11_Template_ion_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r181); var ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r180.addFavourite(ctx_r180.advert); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvertPage_div_6_ion_icon_13_Template(rf, ctx) { if (rf & 1) {
    var _r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertPage_div_6_ion_icon_13_Template_ion_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r183); var ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r182.goToLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvertPage_div_6_div_17_ion_slide_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var image_r185 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r185.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AdvertPage_div_6_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-slides", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdvertPage_div_6_div_17_ion_slide_2_Template, 2, 1, "ion-slide", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r166.slideOpts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r166.advert == null ? null : ctx_r166.advert.images);
} }
function AdvertPage_div_6_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-slides", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "advertImageUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r167.slideOpts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx_r167.advert.category), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AdvertPage_div_6_app_map_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-map", 31, 32);
} if (rf & 2) {
    var ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lat", ctx_r168.lat)("lng", ctx_r168.lng)("radius", 3)("disableDefaultUI", true)("draggable", false)("disableNavigation", false);
} }
function AdvertPage_div_6_form_28_ion_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 41);
} }
function AdvertPage_div_6_form_28_ion_icon_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 42);
} }
function AdvertPage_div_6_form_28_ion_spinner_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-spinner", 43);
} }
function AdvertPage_div_6_form_28_Template(rf, ctx) { if (rf & 1) {
    var _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdvertPage_div_6_form_28_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r192); var ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r191.postComment(ctx_r191.advert.partitionKey); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Request item or ask a question...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-input", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionBlur", function AdvertPage_div_6_form_28_Template_ion_input_ionBlur_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r192); var ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r193.commentInputBlur(); })("ionFocus", function AdvertPage_div_6_form_28_Template_ion_input_ionFocus_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r192); var ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r194.commentInputFocus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdvertPage_div_6_form_28_ion_icon_7_Template, 1, 0, "ion-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdvertPage_div_6_form_28_ion_icon_8_Template, 1, 0, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdvertPage_div_6_form_28_ion_spinner_9_Template, 1, 0, "ion-spinner", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r169.postCommentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r169.postCommentForm.valid && !ctx_r169.posting);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r169.postCommentForm.valid && !ctx_r169.posting);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r169.posting);
} }
function AdvertPage_div_6_app_comments_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-comments", 44);
} if (rf & 2) {
    var ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("advert", ctx_r170.advert)("user", ctx_r170.advertOwner)("showReply", true)("advertComments", ctx_r170.advertComments);
} }
function AdvertPage_div_6_div_31_Template(rf, ctx) { if (rf & 1) {
    var _r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertPage_div_6_div_31_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r196); var ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r195.loadReportPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvertPage_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-refresher", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionRefresh", function AdvertPage_div_6_Template_ion_refresher_ionRefresh_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r198); var ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r197.refresh($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-refresher-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdvertPage_div_6_ion_icon_5_Template, 1, 0, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdvertPage_div_6_ion_icon_7_Template, 1, 0, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdvertPage_div_6_ion_icon_8_Template, 1, 0, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdvertPage_div_6_ion_icon_9_Template, 1, 0, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "favourite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AdvertPage_div_6_ion_icon_11_Template, 1, 0, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "favourite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdvertPage_div_6_ion_icon_13_Template, 1, 0, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AdvertPage_div_6_div_17_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AdvertPage_div_6_div_18_Template, 5, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "app-message", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertPage_div_6_Template_app_message_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r198); var ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r199.openUserProfile(ctx_r199.auth == null ? null : ctx_r199.auth.user == null ? null : ctx_r199.auth.user.uid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-rating", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AdvertPage_div_6_app_map_27_Template, 2, 6, "app-map", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AdvertPage_div_6_form_28_Template, 10, 4, "form", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AdvertPage_div_6_app_comments_29_Template, 1, 4, "app-comments", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ion-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AdvertPage_div_6_div_31_Template, 3, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r158.auth.user == null ? null : ctx_r158.auth.user.uid) == ctx_r158.advert.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r158.canShare);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r158.copyUrlShare);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r158.auth == null ? null : ctx_r158.auth.user) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 22, ctx_r158.advert == null ? null : ctx_r158.advert.primaryKey, ctx_r158.favouriteService.userFavouriteAdvertIds));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r158.auth == null ? null : ctx_r158.auth.user) && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 25, ctx_r158.advert == null ? null : ctx_r158.advert.primaryKey, ctx_r158.favouriteService.userFavouriteAdvertIds));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r158.auth.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r158.advert.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r158.advert == null ? null : ctx_r158.advert.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r158.advert == null ? null : ctx_r158.advert.images));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("tinyTitle", "", ctx_r158.advert.daysRemaining, " days remaining");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r158.advertOwner == null ? null : ctx_r158.advertOwner.name)("imageUrl", ctx_r158.advertOwner == null ? null : ctx_r158.advertOwner.pictureUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showBadge", true)("showStars", true)("readonly", true)("rating", ctx_r158.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r158.advert.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r158.advert.geoLocation || !ctx_r158.advert.geoLocation.lat || !ctx_r158.advert.geoLocation.lng);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r158.lat && ctx_r158.lng);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r158.auth.user && ctx_r158.advert.status === ctx_r158.StatusEnum.Open);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r158.advert.partitionKey && ctx_r158.advertComments.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r158.auth.user);
} }
function AdvertPage_ion_footer_7_ion_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertPage_ion_footer_7_ion_button_1_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r206); var ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r205.focusOnCommentInput(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvertPage_ion_footer_7_ion_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertPage_ion_footer_7_ion_button_2_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r208); var ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r207.goToLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvertPage_ion_footer_7_ion_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertPage_ion_footer_7_ion_button_3_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r210); var ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r209.openAdvertStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvertPage_ion_footer_7_ion_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r212 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertPage_ion_footer_7_ion_button_4_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r212); var ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r211.openAdvertStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "no longer available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvertPage_ion_footer_7_ion_label_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "no longer available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvertPage_ion_footer_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-footer", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdvertPage_ion_footer_7_ion_button_1_Template, 2, 0, "ion-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdvertPage_ion_footer_7_ion_button_2_Template, 2, 0, "ion-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdvertPage_ion_footer_7_ion_button_3_Template, 2, 0, "ion-button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdvertPage_ion_footer_7_ion_button_4_Template, 2, 0, "ion-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdvertPage_ion_footer_7_ion_label_5_Template, 2, 0, "ion-label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r159.advert.status === ctx_r159.StatusEnum.Open && ctx_r159.auth.user && (ctx_r159.auth.user == null ? null : ctx_r159.auth.user.uid) !== ctx_r159.advert.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r159.advert.status === ctx_r159.StatusEnum.Open && !ctx_r159.auth.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r159.auth.user == null ? null : ctx_r159.auth.user.uid) == ctx_r159.advert.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r159.advert.status != ctx_r159.StatusEnum.Open && (ctx_r159.auth == null ? null : ctx_r159.auth.user == null ? null : ctx_r159.auth.user.uid) === (ctx_r159.advert == null ? null : ctx_r159.advert.userId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r159.advert.status != ctx_r159.StatusEnum.Open && (ctx_r159.auth == null ? null : ctx_r159.auth.user == null ? null : ctx_r159.auth.user.uid) !== (ctx_r159.advert == null ? null : ctx_r159.advert.userId));
} }
var AdvertPage = /** @class */ (function () {
    function AdvertPage(navController, auth, loadingCtrl, alertCtrl, errorService, advertService, socialSharing, toastCtrl, formBuilder, favouriteService, activatedRoute, imageService, advertClient, commentClient, ratingClient) {
        var _this = this;
        this.navController = navController;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.errorService = errorService;
        this.advertService = advertService;
        this.socialSharing = socialSharing;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.favouriteService = favouriteService;
        this.activatedRoute = activatedRoute;
        this.imageService = imageService;
        this.advertClient = advertClient;
        this.commentClient = commentClient;
        this.ratingClient = ratingClient;
        this.title = "Advert";
        // userInfo: UserInfo;
        this.canShare = false;
        this.copyUrlShare = false;
        this.advertComments = [];
        this.commentsReady = false;
        this.posting = false;
        this.StatusEnum = _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_12__["StatusEnum"];
        // @ViewChild("commentinput") commentinput: Input;
        // @ViewChild("mapComponent") mapComponent: MapComponent;
        this.baseUrl = _constants_urls__WEBPACK_IMPORTED_MODULE_6__["Urls"].baseUrl;
        this.messageSpinner = false;
        this.advertDateCreated = "";
        this.body = "";
        this.expiresText = "Expires";
        this.advertImagesBySize = [];
        this.loadingAdvert = false;
        this.loadedAdvert = false;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
        this.lastEvaluatedKeyHash = undefined;
        this.advert = new _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_12__["AdvertEntity"]();
        // this.advert.address = new AddressModel();
        this.advert.images = [];
        //this.partitionKey = this.params.get("id");
        this.postCommentForm = this.formBuilder.group({
            body: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]
        });
        this.postCommentForm = this.formBuilder.group({
            body: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]
        });
        //Check if sharing via email is supported
        this.socialSharing.canShareViaEmail().then(function () {
            // Sharing via email is possible
            _this.canShare = true;
        }).catch(function () {
            // Sharing via email is not possible
            _this.canShare = false;
            _this.copyUrlShare = true;
        });
    }
    AdvertPage.prototype.openAdvertStatus = function () {
        this.navController.navigateForward("advert-status/" + this.advertPrimaryKey);
    };
    AdvertPage.prototype.getUserRating = function (advert) {
        var _this = this;
        this.ratingClient.average(advert.userId, _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_12__["EntityTypeEnum"].Advert).subscribe(function (result) {
            if (result.averageRating) {
                _this.rating = result.averageRating;
            }
            else {
                _this.rating = 0;
            }
        });
    };
    AdvertPage.prototype.presentToast = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 3000,
                            position: "bottom"
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvertPage.prototype.commentInputBlur = function () {
        this.advertService.showFooter = true;
    };
    AdvertPage.prototype.commentInputFocus = function () {
        this.advertService.showFooter = false;
    };
    AdvertPage.prototype.ngOnInit = function () {
        var _this = this;
        var urlParams = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(this.activatedRoute.params, this.activatedRoute.queryParams, function (params, queryParams) { return (__assign(__assign({}, params), queryParams)); });
        urlParams.subscribe(function (routeParams) {
            _this.advertPrimaryKey = routeParams.id;
            _this.advertPartitionKey = _this.advertPrimaryKey.split("|")[0];
            _this.advertSortKey = _this.advertPrimaryKey.split("|")[1];
            _this.loadData().then(function () {
                console.log("Advert " + _this.advertPrimaryKey + " loaded");
            });
        });
    };
    AdvertPage.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.advertComments = [];
                        return [4 /*yield*/, this.getAdvert(this.advertPartitionKey, this.advertSortKey)];
                    case 1:
                        _a.sent();
                        this.getAdvertComments();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvertPage.prototype.refresh = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.advertComments = [];
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.sent();
                        refresher.target.complete();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvertPage.prototype.copyUrl = function () {
        var currentUrl = window.location.href;
        copy_to_clipboard__WEBPACK_IMPORTED_MODULE_9__(currentUrl, {
            debug: true,
            message: 'Press #{key} to copy'
        });
        this.presentToast("Link copied");
    };
    AdvertPage.prototype.share = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.socialSharing.share("I found this on Bonobo Give... " + this.advert.title + " I found this on Bonobo Give... " + this.advert.title, null, _constants_urls__WEBPACK_IMPORTED_MODULE_6__["Urls"].baseUrlLive + "advert/" + this.advert.partitionKey)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvertPage.prototype.copyShareUrl = function () {
        var urlToCopy = _constants_urls__WEBPACK_IMPORTED_MODULE_6__["Urls"].baseUrlLive + "/#/advert/" + this.advert.partitionKey;
        var element = document.createElement("input");
        //Assign different attributes to the element.
        element.setAttribute("type", "hidden");
        element.setAttribute("value", urlToCopy);
        element.setAttribute("name", "shareUrl");
        element.setAttribute("id", "shareUrl");
        document.body.appendChild(element);
        element.select();
        var successful = document.execCommand("copy");
        if (successful === true) {
            this.presentToast("Link copied");
        }
        else {
            this.presentToast("Failed to copy share url");
        }
    };
    AdvertPage.prototype.deleteFavourite = function () {
        this.favouriteService.deleteFavouriteByAdvertEntity(this.advert).subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
        ;
    };
    AdvertPage.prototype.deleteAdvert = function (advert) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.advertClient.delete(advert.partitionKey, advert.sortKey)];
                    case 1:
                        _a.sent();
                        this.navController.navigateForward("my-adverts");
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvertPage.prototype.addFavourite = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.favouriteService.addFavourite(this.advertPrimaryKey)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvertPage.prototype.focusOnCommentInput = function () {
        var _this = this;
        setTimeout(function () {
            _this.input.nativeElement.setFocus();
        });
    };
    AdvertPage.prototype.openEditPage = function () {
        this.navController.navigateForward("post/" + this.advertPrimaryKey);
    };
    AdvertPage.prototype.openUserProfile = function (userId) {
        this.navController.navigateForward("user-profile/" + userId);
    };
    AdvertPage.prototype.getAdvert = function (advertPartitionKey, advertSortKey) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.loadingAdvert = true;
                this.loadedAdvert = false;
                this.advertClient.get(advertPartitionKey, advertSortKey).subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.advert = res;
                        return [2 /*return*/];
                    });
                }); }, function (error) {
                    console.log("Error loading advert", error);
                    _this.navController.navigateForward("home");
                    _this.presentToast("Sorry there was an issue loading this advert");
                })
                    .add(function () {
                    _this.loadingAdvert = false;
                    _this.loadedAdvert = true;
                });
                return [2 /*return*/];
            });
        });
    };
    AdvertPage.prototype.addDays = function (date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    };
    AdvertPage.prototype.scrollToBottom = function () {
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
    AdvertPage.prototype.postComment = function () {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            var _this = this;
            return __generator(this, function (_a) {
                this.posting = true;
                request = new _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_12__["CreateMessageRequestModel"]();
                request.entityPrimaryKey = this.advertPrimaryKey;
                request.messageType = _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_12__["MessageTypeEnum"].Comment;
                request.text = this.postCommentForm.value["body"];
                request.userId = this.auth.user.uid;
                this.commentClient.post(request).subscribe(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.postCommentForm.reset();
                                this.posting = false;
                                this.scrollToBottom();
                                return [4 /*yield*/, this.loadData()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    AdvertPage.prototype.getAdvertComments = function () {
        var _this = this;
        console.log("Getting advert comments");
        var pagination = new _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_12__["PaginationRequest"]();
        pagination.take = 10;
        pagination.nextRequestBlob = this.lastEvaluatedKeyHash;
        this.advertComments = [];
        this.commentClient.get(this.advertPrimaryKey, _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_12__["MessageTypeEnum"].Comment, pagination.take, pagination.nextRequestBlob).subscribe(function (res) {
            var _a;
            (_a = _this.advertComments).push.apply(_a, res.messages);
        });
    };
    AdvertPage.prototype.goToLogin = function () {
        this.navController.navigateForward("login");
    };
    AdvertPage.prototype.loadReportPage = function () {
        this.navController.navigateForward("report/" + this.advertPrimaryKey);
    };
    AdvertPage.ɵfac = function AdvertPage_Factory(t) { return new (t || AdvertPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_advert_service__WEBPACK_IMPORTED_MODULE_2__["AdvertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_favourite_service__WEBPACK_IMPORTED_MODULE_1__["FavouriteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_image_service__WEBPACK_IMPORTED_MODULE_11__["ImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_12__["AdvertClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_12__["MessageClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_12__["RatingClient"])); };
    AdvertPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdvertPage, selectors: [["advert"]], viewQuery: function AdvertPage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_components_comments_comments_component__WEBPACK_IMPORTED_MODULE_10__["CommentsComponent"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.commentsComponent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
        } }, decls: 8, vars: 4, consts: [["title", "Adverts"], [1, "advert"], ["content", ""], [4, "ngIf"], ["style", "text-align: center", "class", "footer-buttons", 4, "ngIf"], ["slot", "fixed", 3, "ionRefresh"], [1, "advert-buttons"], [1, "options-left"], ["class", "icon edit", "ios", "ios-create", "md", "md-create", 3, "click", 4, "ngIf"], [1, "options-right"], ["class", "icon", "name", "share", 3, "click", 4, "ngIf"], ["class", "icon", "name", "heart", "isActive", "true", "color", "danger", 3, "click", 4, "ngIf"], ["class", "icon regular", "name", "heart-empty", "isActive", "false", 3, "click", 4, "ngIf"], [1, "ion-padding"], ["lines", "none", 1, "ion-no-padding"], ["slot", "start"], [3, "title", "imageUrl", "tinyTitle", "click"], [3, "showBadge", "showStars", "readonly", "rating"], [3, "hidden"], [3, "lat", "lng", "radius", "disableDefaultUI", "draggable", "disableNavigation", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "advert", "user", "showReply", "advertComments", 4, "ngIf"], [1, "ion-text-right"], ["ios", "ios-create", "md", "md-create", 1, "icon", "edit", 3, "click"], ["name", "share", 1, "icon", 3, "click"], ["name", "heart", "isActive", "true", "color", "danger", 1, "icon", 3, "click"], ["name", "heart-empty", "isActive", "false", 1, "icon", "regular", 3, "click"], ["pager", "true", 3, "options"], [4, "ngFor", "ngForOf"], [3, "src"], ["pager", "false", 3, "options"], [3, "lat", "lng", "radius", "disableDefaultUI", "draggable", "disableNavigation"], ["mapComponent", ""], [3, "formGroup", "ngSubmit"], ["position", "floating"], ["id", "maincommentinput", "type", "text", "formControlName", "body", "maxlength", "250", 3, "ionBlur", "ionFocus"], ["commentinput", ""], ["size", "large", "slot", "end", "fill", "clear", "type", "submit", 1, "ion-no-padding"], ["class", "send-button-disabled", "name", "send", 4, "ngIf"], ["slot", "end", "class", "send-button", "name", "send", 4, "ngIf"], ["slot", "end", "class", "ion-spinner-postsmessage", 4, "ngIf"], ["name", "send", 1, "send-button-disabled"], ["slot", "end", "name", "send", 1, "send-button"], ["slot", "end", 1, "ion-spinner-postsmessage"], [3, "advert", "user", "showReply", "advertComments"], [1, "report", 3, "click"], [1, "footer-buttons", 2, "text-align", "center"], ["color", "primary", "button-default", "", "block", "", 3, "click", 4, "ngIf"], ["button-default", "", "block", "", 3, "click", 4, "ngIf"], ["fill", "clear", "color", "dark", 3, "click", 4, "ngIf"], ["size", "large", "fill", "clear", "color", "dark", 4, "ngIf"], ["color", "primary", "button-default", "", "block", "", 3, "click"], ["button-default", "", "block", "", 3, "click"], ["fill", "clear", "color", "dark", 3, "click"], ["size", "large", "fill", "clear", "color", "dark"]], template: function AdvertPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-topbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-content", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdvertPage_div_4_Template, 2, 0, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdvertPage_div_5_Template, 3, 0, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdvertPage_div_6_Template, 32, 28, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdvertPage_ion_footer_7_Template, 6, 5, "ion-footer", 4);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingAdvert);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadedAdvert && !ctx.advert);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadedAdvert && ctx.advert);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.advert && ctx.advertService.showFooter);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_15__["TopbarComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _components_message_message_component__WEBPACK_IMPORTED_MODULE_17__["MessageComponent"], _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_18__["RatingComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlide"], _components_map_map_component__WEBPACK_IMPORTED_MODULE_19__["MapComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["MaxLengthValidator"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSpinner"], _components_comments_comments_component__WEBPACK_IMPORTED_MODULE_10__["CommentsComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFooter"]], pipes: [_pipes_favourite_pipe__WEBPACK_IMPORTED_MODULE_20__["FavouritePipe"], _pipes_advert_image_url_pipe__WEBPACK_IMPORTED_MODULE_21__["AdvertImageUrlPipe"]], styles: [".footer-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-transform: initial !important;\n}\n\n.advert[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  padding-top: 0px;\n  color: #554749;\n}\n\n.advert[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\n.advert[_ngcontent-%COMP%]   .send-button-disabled[_ngcontent-%COMP%] {\n  color: grey;\n}\n\n.advert[_ngcontent-%COMP%]   .report[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n\n.advert[_ngcontent-%COMP%]   .ion-spinner-postmessage[_ngcontent-%COMP%] {\n  stroke: white;\n}\n\n.advert[_ngcontent-%COMP%]   .advert-buttons[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0em;\n  left: 0;\n  right: 0;\n  z-index: 2;\n  height: 4em;\n}\n\n.advert[_ngcontent-%COMP%]   .advert-buttons[_ngcontent-%COMP%]   .options-left[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1em;\n  left: 0;\n  z-index: 1;\n  margin-left: 0.25em;\n}\n\n.advert[_ngcontent-%COMP%]   .advert-buttons[_ngcontent-%COMP%]   .options-right[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1em;\n  right: 0;\n  z-index: 1;\n}\n\n.advert[_ngcontent-%COMP%]   .advert-buttons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.3);\n  opacity: 50%;\n  font-size: 1.4em;\n  border-radius: 50%;\n  padding: 0.5em;\n  color: white;\n  margin-right: 0.25em;\n}\n\n.advert[_ngcontent-%COMP%]   .user-rating-rate[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.advert[_ngcontent-%COMP%]   .user-rating-rate[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n.advert[_ngcontent-%COMP%]   .user-rating-rate[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n.advert[_ngcontent-%COMP%]   .user-rating-rate[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #00613a !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWR2ZXJ0L0M6XFxVc2Vyc1xcZ2FyZXRcXFNvdXJjZVxcUmVwb3NcXGJvbm9ib2dpdmUvc3JjXFxhcHBcXHBhZ2VzXFxhZHZlcnRcXGFkdmVydC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkdmVydC9hZHZlcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQWtDO0FDQ3RDOztBREVBO0VBRVEsZUFBZTtFQUNmLGdCQUFlO0VBQ2YsY0FBc0I7QUNBOUI7O0FESkE7RUFPUSwrQkFBOEI7QUNDdEM7O0FEUkE7RUFXUSxXQUFVO0FDQ2xCOztBRFpBO0VBY1EsZ0JBQWdCO0FDRXhCOztBRGhCQTtFQWlCUSxhQUFhO0FDR3JCOztBRHBCQTtFQW9CUSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7QUNJbkI7O0FEN0JBO0VBMkJZLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztFQUNQLFVBQVU7RUFDVixtQkFBa0I7QUNNOUI7O0FEckNBO0VBa0NZLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsUUFBUTtFQUNSLFVBQVU7QUNPdEI7O0FENUNBO0VBeUNZLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLG9CQUFtQjtBQ08vQjs7QUR0REE7RUF5RFksVUFBUztFQUNULFNBQVE7QUNDcEI7O0FEM0RBO0VBNERnQixxQkFBcUI7RUFDckIsb0JBQW9CO0FDR3BDOztBRGhFQTtFQWdFb0IscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQ0l4Qzs7QURyRUE7RUFtRXdCLHlCQUF5QjtBQ01qRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkdmVydC9hZHZlcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1idXR0b25zIGJ1dHRvbiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWR2ZXJ0IHtcclxuICAgIGgxIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoODUsIDcxLCA3Myk7XHJcbiAgICB9XHJcbiAgICAuc2VuZC1idXR0b24ge1xyXG4gICAgICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIH1cclxuXHJcbiAgICAuc2VuZC1idXR0b24tZGlzYWJsZWR7XHJcbiAgICAgICAgY29sb3I6Z3JleTtcclxuICAgIH1cclxuICAgIC5yZXBvcnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICB9XHJcbiAgICAuaW9uLXNwaW5uZXItcG9zdG1lc3NhZ2Uge1xyXG4gICAgICAgIHN0cm9rZTogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuYWR2ZXJ0LWJ1dHRvbnMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDBlbTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwOyAvL2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgOTcsIDU4LCAwLjQpO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgaGVpZ2h0OiA0ZW07IC8vICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAub3B0aW9ucy1sZWZ0IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDFlbTtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MC4yNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3B0aW9ucy1yaWdodCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAxZW07XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgLy8gIG1hcmdpbi1yaWdodDowLjI1ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiA1MCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjAuMjVlbTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXItcmF0aW5nLXJhdGUge1xyXG4gICAgICAgIC5yYXRpbmd7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDYxM2EgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxufSIsIi5mb290ZXItYnV0dG9ucyBidXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbCAhaW1wb3J0YW50O1xufVxuXG4uYWR2ZXJ0IGgxIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBjb2xvcjogIzU1NDc0OTtcbn1cblxuLmFkdmVydCAuc2VuZC1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uYWR2ZXJ0IC5zZW5kLWJ1dHRvbi1kaXNhYmxlZCB7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4uYWR2ZXJ0IC5yZXBvcnQge1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4uYWR2ZXJ0IC5pb24tc3Bpbm5lci1wb3N0bWVzc2FnZSB7XG4gIHN0cm9rZTogd2hpdGU7XG59XG5cbi5hZHZlcnQgLmFkdmVydC1idXR0b25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBlbTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDI7XG4gIGhlaWdodDogNGVtO1xufVxuXG4uYWR2ZXJ0IC5hZHZlcnQtYnV0dG9ucyAub3B0aW9ucy1sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFlbTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLWxlZnQ6IDAuMjVlbTtcbn1cblxuLmFkdmVydCAuYWR2ZXJ0LWJ1dHRvbnMgLm9wdGlvbnMtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMWVtO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLmFkdmVydCAuYWR2ZXJ0LWJ1dHRvbnMgLmljb24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG9wYWNpdHk6IDUwJTtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tcmlnaHQ6IDAuMjVlbTtcbn1cblxuLmFkdmVydCAudXNlci1yYXRpbmctcmF0ZSAucmF0aW5nIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYWR2ZXJ0IC51c2VyLXJhdGluZy1yYXRlIC5yYXRpbmcgdWwge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4uYWR2ZXJ0IC51c2VyLXJhdGluZy1yYXRlIC5yYXRpbmcgdWwgbGkge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4uYWR2ZXJ0IC51c2VyLXJhdGluZy1yYXRlIC5yYXRpbmcgdWwgbGkgaW9uLWljb24ge1xuICBjb2xvcjogIzAwNjEzYSAhaW1wb3J0YW50O1xufVxuIl19 */"] });
    return AdvertPage;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvertPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'advert',
                templateUrl: './advert.page.html',
                styleUrls: ['./advert.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }, { type: _services_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"] }, { type: _services_advert_service__WEBPACK_IMPORTED_MODULE_2__["AdvertService"] }, { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"] }, { type: _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__["FavouriteService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"] }, { type: _services_image_service__WEBPACK_IMPORTED_MODULE_11__["ImageService"] }, { type: _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_12__["AdvertClient"] }, { type: _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_12__["MessageClient"] }, { type: _clients_bonobogive_client__WEBPACK_IMPORTED_MODULE_12__["RatingClient"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['content']
        }], commentsComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_components_comments_comments_component__WEBPACK_IMPORTED_MODULE_10__["CommentsComponent"]]
        }], input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['commentinput', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-advert-advert-module.js.map