(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-introduction-introduction-module"],{

/***/ "./src/app/pages/introduction/introduction.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/introduction/introduction.module.ts ***!
  \***********************************************************/
/*! exports provided: IntroductionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionPageModule", function() { return IntroductionPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _introduction_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./introduction.page */ "./src/app/pages/introduction/introduction.page.ts");








var routes = [
    {
        path: '',
        component: _introduction_page__WEBPACK_IMPORTED_MODULE_5__["IntroductionPage"]
    }
];
var IntroductionPageModule = /** @class */ (function () {
    function IntroductionPageModule() {
    }
    IntroductionPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IntroductionPageModule });
    IntroductionPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IntroductionPageModule_Factory(t) { return new (t || IntroductionPageModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ]] });
    return IntroductionPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IntroductionPageModule, { declarations: [_introduction_page__WEBPACK_IMPORTED_MODULE_5__["IntroductionPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroductionPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                declarations: [_introduction_page__WEBPACK_IMPORTED_MODULE_5__["IntroductionPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/introduction/introduction.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/introduction/introduction.page.ts ***!
  \*********************************************************/
/*! exports provided: IntroductionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionPage", function() { return IntroductionPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");






var IntroductionPage = /** @class */ (function () {
    function IntroductionPage(navCtrl, nativeStorage) {
        this.navCtrl = navCtrl;
        this.nativeStorage = nativeStorage;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
    }
    IntroductionPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad IntroductionPage");
    };
    IntroductionPage.prototype.goToLogin = function () {
        this.setIntroductionComplete();
        this.navCtrl.navigateRoot("login");
    };
    IntroductionPage.prototype.goToRegister = function () {
        this.setIntroductionComplete();
        this.navCtrl.navigateRoot("register");
    };
    IntroductionPage.prototype.goToHome = function () {
        this.setIntroductionComplete();
        this.navCtrl.navigateRoot("home");
    };
    IntroductionPage.prototype.explore = function () {
        this.navCtrl.navigateRoot("home");
    };
    IntroductionPage.prototype.ngOnInit = function () {
        localStorage.setItem("introductionSeen", "true");
    };
    IntroductionPage.prototype.setIntroductionComplete = function () {
        this.nativeStorage.setItem('introductionComplete', true)
            .then(function () { return console.log('Stored item!'); }, function (error) { return console.error('Error storing item', error); });
    };
    IntroductionPage.ɵfac = function IntroductionPage_Factory(t) { return new (t || IntroductionPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_1__["NativeStorage"])); };
    IntroductionPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroductionPage, selectors: [["introduction"]], decls: 31, vars: 0, consts: [[1, "introduction"], ["pager", ""], [2, "background-color", "#ffffff"], ["src", "assets/images/logos/bonobo-title-centered.png", 2, "height", "30%", "width", "30%"], ["src", "assets/images/logos/large.png", 2, "height", "30%", "width", "30%"], [1, "slide-images"], ["src", "assets/images/intro/slide_1.png"], ["src", "assets/images/intro/slide_2.png"], ["src", "assets/images/intro/slide_3.png"], ["src", "assets/images/intro/slide_4.png"], [1, "slide-3"], [1, "explor", 3, "click"], [1, "register", 3, "click"], [1, "login", 3, "click"]], template: function IntroductionPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-slides", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-slide", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-slide", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "GET FREE THINGS");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "GIVE FREE THINGS");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "SAVE THE PLANET");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "HELP YOUR NEIGHBOUR");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Your unwanted items collected from your door. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Easy peasy. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-slide", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntroductionPage_Template_h2_click_25_listener() { return ctx.goToHome(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Explore");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntroductionPage_Template_h2_click_27_listener() { return ctx.goToRegister(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Register");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntroductionPage_Template_h2_click_29_listener() { return ctx.goToLogin(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlide"]], styles: [".introduction[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.introduction[_ngcontent-%COMP%]   .slide-images[_ngcontent-%COMP%] {\n  max-width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.introduction[_ngcontent-%COMP%]   .slide-images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 15%;\n  height: 15%;\n}\n\n.introduction[_ngcontent-%COMP%]   .slide-images[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 4vw;\n  color: black;\n}\n\n.introduction[_ngcontent-%COMP%]   .slide-images[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 3vw;\n}\n\n.introduction[_ngcontent-%COMP%]   .slide-3[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 8vw;\n  margin-top: 2em;\n  margin-bottom: 2em;\n  font-weight: 100;\n  display: block;\n}\n\n@media only screen and (min-width: 600px) {\n  .introduction[_ngcontent-%COMP%]   .slide-images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 8%;\n    height: 8%;\n  }\n  .introduction[_ngcontent-%COMP%]   .slide-images[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 3vw;\n  }\n  .introduction[_ngcontent-%COMP%]   .slide-images[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 2vw;\n  }\n  .introduction[_ngcontent-%COMP%]   .slide-3[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 6vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW50cm9kdWN0aW9uL0M6XFxVc2Vyc1xcZ2FyZXRcXFNvdXJjZVxcUmVwb3NcXGJvbm9ib2dpdmUvc3JjXFxhcHBcXHBhZ2VzXFxpbnRyb2R1Y3Rpb25cXGludHJvZHVjdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ludHJvZHVjdGlvbi9pbnRyb2R1Y3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtBQ0NqQjs7QURGQTtFQUdRLGNBQWE7RUFDYixpQkFBZ0I7RUFDaEIsa0JBQWlCO0FDR3pCOztBRFJBO0VBT1ksVUFBVTtFQUNWLFdBQVc7QUNLdkI7O0FEYkE7RUFZWSxjQUFjO0VBQ2QsWUFBVztBQ0t2Qjs7QURsQkE7RUFnQlksY0FBYztBQ00xQjs7QUR0QkE7RUFzQmdCLFlBQVc7RUFDWCxjQUFhO0VBQ2IsZUFBYztFQUNkLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLGNBQWE7QUNJN0I7O0FERUE7RUFDSTtJQUlZLFNBQVM7SUFDVCxVQUFVO0VDRnhCO0VESEU7SUFRWSxjQUFjO0VDRjVCO0VETkU7SUFXWSxjQUFjO0VDRjVCO0VEVEU7SUFpQlksY0FBYTtFQ0wzQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW50cm9kdWN0aW9uL2ludHJvZHVjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW50cm9kdWN0aW9uIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAuc2xpZGUtaW1hZ2VzIHtcclxuICAgICAgICBtYXgtd2lkdGg6ODAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNSU7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zbGlkZS0ze1xyXG4gICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjh2dztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDoxMDA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuaW50cm9kdWN0aW9uIHtcclxuICAgICAgICAuc2xpZGUtaW1hZ2VzIHtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDglO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zbGlkZS0ze1xyXG4gICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTo2dnc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuaW50cm9kdWN0aW9uIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmludHJvZHVjdGlvbiAuc2xpZGUtaW1hZ2VzIHtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5pbnRyb2R1Y3Rpb24gLnNsaWRlLWltYWdlcyBpbWcge1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDE1JTtcbn1cblxuLmludHJvZHVjdGlvbiAuc2xpZGUtaW1hZ2VzIGgyIHtcbiAgZm9udC1zaXplOiA0dnc7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmludHJvZHVjdGlvbiAuc2xpZGUtaW1hZ2VzIHAge1xuICBmb250LXNpemU6IDN2dztcbn1cblxuLmludHJvZHVjdGlvbiAuc2xpZGUtMyBoMiB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiA4dnc7XG4gIG1hcmdpbi10b3A6IDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICBmb250LXdlaWdodDogMTAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAuaW50cm9kdWN0aW9uIC5zbGlkZS1pbWFnZXMgaW1nIHtcbiAgICB3aWR0aDogOCU7XG4gICAgaGVpZ2h0OiA4JTtcbiAgfVxuICAuaW50cm9kdWN0aW9uIC5zbGlkZS1pbWFnZXMgaDIge1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICB9XG4gIC5pbnRyb2R1Y3Rpb24gLnNsaWRlLWltYWdlcyBwIHtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgfVxuICAuaW50cm9kdWN0aW9uIC5zbGlkZS0zIGgyIHtcbiAgICBmb250LXNpemU6IDZ2dztcbiAgfVxufVxuIl19 */"] });
    return IntroductionPage;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroductionPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'introduction',
                templateUrl: './introduction.page.html',
                styleUrls: ['./introduction.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }, { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_1__["NativeStorage"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-introduction-introduction-module.js.map