(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"Mm/0":function(t,e,o){"use strict";o.d(e,"a",(function(){return v}));var n=o("lGQG"),i=o("l3hs"),r=o("c7TG"),c=o("a/9d"),s=o("M2ZX"),a=o("nUpg"),l=o("TYT/"),u=o("DUip"),d=o("Valr"),p=o("QJY3"),h=["removeFocusInput"];function f(t,e){1&t&&l.Zb(0,"ion-back-button",11)}function g(t,e){1&t&&(l.dc(0,"span",12),l.Kc(1,"\ud83d\udd34"),l.cc())}var v=function(){function t(t,e,o,n,i,r,c,s,a,l,u){this.events=t,this.searchService=e,this.auth=o,this.camera=n,this.platform=i,this.nativeStorage=r,this.menuCtrl=c,this.router=s,this.navCtrl=a,this.toastController=l,this.webSocketNotificationService=u,this.isApp=!1,this.isSearchPage=!1,this.placeholder='try "table"',this.placeholders=["Search - it's all free!"],this.isApp=!this.platform.is("desktop")}return t.prototype.ngOnInit=function(){this.isSearchPage=!!this.isSamePage("/search"),this.randomPlaceHolder()},t.prototype.randomPlaceHolder=function(){var t=this.placeholders[Math.floor(Math.random()*this.placeholders.length)];this.placeholder=t},t.prototype.uploadImage=function(t){console.log("image chosen")},t.prototype.goToPost=function(){this.navCtrl.navigateForward("post")},t.prototype.openMainMenu=function(){this.menuCtrl.open("start")},t.prototype.goToIntroduction=function(){this.navCtrl.navigateForward("introduction")},t.prototype.search=function(t){t.target.blur(),this.isSamePage("search")||this.navCtrl.navigateForward("search"),t.target.value&&(this.searchService.refreshSearchResults(),this.searchService.searchPageSearchRequest.searchQuery=t.target.value,this.searchService.search(null,null))},t.prototype.isSamePage=function(t){return this.router.url===t&&(console.log("same page"),!0)},t.prototype.openNotifications=function(){this.auth&&this.auth.user?this.navCtrl.navigateForward("notifications"):this.goToLogin()},t.prototype.goToRegister=function(){this.navCtrl.navigateForward("register")},t.prototype.goToLogin=function(){this.navCtrl.navigateForward("login")},t.prototype.redirectToSearch=function(t){this.removeFocusInput.nativeElement.focus().this.navCtrl.navigateForward("search/true")},t.prototype.takePicture=function(t){return e=this,void 0,n=function(){var t,e,o;return function(t,e){var o,n,i,r,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,n=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(!((i=(i=c.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){c=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){c.label=r[1];break}if(6===r[0]&&c.label<i[1]){c.label=i[1],i=r;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(r);break}i[2]&&c.ops.pop(),c.trys.pop();continue}r=e.call(t,c)}catch(s){r=[6,s],n=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}(this,(function(n){switch(n.label){case 0:if(!this.auth||!this.auth.user)return this.goToLogin(),[2];if(this.goToPost(),this.platform.is("desktop"))return this.goToPost(),[2];t={quality:50,destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,targetWidth:1280,targetHeight:1280,saveToPhotoAlbum:!1},n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this.camera.getPicture(t)];case 2:return e=n.sent(),this.nativeStorage.setItem("latestPicture","data:image/jpeg;base64,"+e).then((function(){return console.log("Stored item!")}),(function(t){return console.error("Error storing item",t)})),this.navCtrl.navigateForward("post"),[3,4];case 3:return o=n.sent(),console.log(o),[3,4];case 4:return[2]}}))},new((o=void 0)||(o=Promise))((function(t,i){function r(t){try{s(n.next(t))}catch(e){i(e)}}function c(t){try{s(n.throw(t))}catch(e){i(e)}}function s(e){var n;e.done?t(e.value):(n=e.value,n instanceof o?n:new o((function(t){t(n)}))).then(r,c)}s((n=n.apply(e,[])).next())}));var e,o,n},t.prototype.placeHolderFocus=function(){this.placeholder="try 'table'"},t.prototype.placeHolderBlur=function(){this.placeholder="Search - it's all free!"},t.\u0275fac=function(e){return new(e||t)(l.Yb(r.d),l.Yb(i.a),l.Yb(n.a),l.Yb(c.a),l.Yb(r.eb),l.Yb(s.a),l.Yb(r.bb),l.Yb(u.i),l.Yb(r.db),l.Yb(r.kb),l.Yb(a.b))},t.\u0275cmp=l.Sb({type:t,selectors:[["app-topbar"]],viewQuery:function(t,e){var o;1&t&&l.Oc(h,!0),2&t&&l.Bc(o=l.mc())&&(e.removeFocusInput=o.first)},inputs:{title:"title",displaySearchBar:"displaySearchBar",displayCameraIcon:"displayCameraIcon"},decls:13,vars:9,consts:[[1,"ion-no-padding"],["slot","start","fill","clear",3,"click"],["name","menu",2,"font-size","2em"],["slot","start","color","primary","defaultHref","search",4,"ngIf"],["id","main-search-bar","autofocus","","slot","start",1,"searchbar",3,"searchIcon","ngModel","showCancelButton","clearIcon","placeholder","ngModelChange","search","ionFocus","ionBlur"],["searchInput",""],["type","hidden",2,"display","none"],["removeFocusInput",""],["slot","end","fill","clear",1,"ion-no-padding",3,"click"],[1,"ion-no-padding",3,"src"],["class","new-notification-position",4,"ngIf"],["slot","start","color","primary","defaultHref","search"],[1,"new-notification-position"]],template:function(t,e){1&t&&(l.dc(0,"ion-toolbar",0),l.dc(1,"ion-button",1),l.lc("click",(function(){return e.openMainMenu()})),l.Zb(2,"ion-icon",2),l.cc(),l.Jc(3,f,1,0,"ion-back-button",3),l.dc(4,"ion-searchbar",4,5),l.lc("ngModelChange",(function(t){return e.searchService.searchPageSearchRequest.searchQuery=t}))("search",(function(t){return e.search(t)}))("ionFocus",(function(){return e.placeHolderFocus()}))("ionBlur",(function(){return e.placeHolderBlur()})),l.cc(),l.Zb(6,"input",6,7),l.dc(8,"ion-button",8),l.lc("click",(function(t){return e.takePicture(t)})),l.Zb(9,"ion-icon",9),l.cc(),l.dc(10,"ion-button",8),l.lc("click",(function(){return e.openNotifications()})),l.Zb(11,"ion-icon",9),l.Jc(12,g,2,0,"span",10),l.cc(),l.cc()),2&t&&(l.Mb(3),l.vc("ngIf",!e.isSearchPage),l.Mb(1),l.vc("searchIcon","menu")("ngModel",e.searchService.searchPageSearchRequest.searchQuery)("showCancelButton",!1)("clearIcon","true")("placeholder",e.placeholder),l.Mb(5),l.vc("src","/assets/icon/menu/post-advert.svg"),l.Mb(2),l.vc("src","/assets/icon/menu/notification.svg"),l.Mb(1),l.vc("ngIf",e.webSocketNotificationService.newNotifictions))},directives:[r.X,r.j,r.t,d.l,r.L,r.jb,p.h,p.k,r.g,r.h],styles:[".title[_ngcontent-%COMP%]{color:var(--ion-color-primary);line-height:1em;font-size:.8em}.offline[_ngcontent-%COMP%]{background-color:var(--ion-color-danger);color:var(--ion-color-danger-contrast);text-transform:uppercase;text-align:center;font-size:.8em}.new-notification-position[_ngcontent-%COMP%]{position:absolute;right:1.5em;top:.5em;font-size:.7em}ion-searchbar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{display:none!important}ion-icon.custom[_ngcontent-%COMP%]{font-size:2em;color:var(--ion-color-primary)!important;-webkit-filter:brightness(0) saturate(100%) invert(31%) sepia(30%) saturate(3312%) hue-rotate(131deg) brightness(99%) contrast(101%);filter:brightness(0) saturate(100%) invert(31%) sepia(30%) saturate(3312%) hue-rotate(131deg) brightness(99%) contrast(101%)}.searchbar-search-icon[_ngcontent-%COMP%]{display:none!important}"]}),t}()},gDdP:function(t,e,o){"use strict";o.r(e),o.d(e,"PostPageModule",(function(){return N}));var n=o("Valr"),i=o("QJY3"),r=o("DUip"),c=o("c7TG"),s=o("a/9d"),a=o("M2ZX"),l=o("dzgT"),u=o("Xd5C"),d=o("EZtS"),p=o("8683"),h=o("lGQG"),f=o("9vc0"),g=o("fePz"),v=o("mnRn"),m=o("K8E+"),b=o("i5GC"),y=o("TYT/"),w=o("Mm/0"),M=function(){return(M=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},C=function(t,e,o,n){return new(o||(o=Promise))((function(i,r){function c(t){try{a(n.next(t))}catch(e){r(e)}}function s(t){try{a(n.throw(t))}catch(e){r(e)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(c,s)}a((n=n.apply(t,e||[])).next())}))},S=function(t,e){var o,n,i,r,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,n=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(!((i=(i=c.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){c=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){c.label=r[1];break}if(6===r[0]&&c.label<i[1]){c.label=i[1],i=r;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(r);break}i[2]&&c.ops.pop(),c.trys.pop();continue}r=e.call(t,c)}catch(s){r=[6,s],n=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},P=["mapComponent"];function A(t,e){1&t&&(y.dc(0,"div"),y.Kc(1,"Please sign in"),y.cc())}function x(t,e){1&t&&(y.dc(0,"h1",4),y.Kc(1,"Post advert page"),y.cc())}function F(t,e){1&t&&(y.dc(0,"h1",4),y.Kc(1,"Edit advert"),y.cc())}function k(t,e){if(1&t){var o=y.ec();y.dc(0,"ion-item"),y.dc(1,"ion-toggle",23),y.lc("ngModelChange",(function(t){return y.Dc(o),y.pc(3).removeExpiry=t}))("click",(function(){return y.Dc(o),y.pc(3).rememberToSaveAlert()})),y.cc(),y.dc(2,"ion-label",27),y.Kc(3,"Re-publish (default 30 days)"),y.cc(),y.Zb(4,"br"),y.cc()}if(2&t){var n=y.pc(3);y.Mb(1),y.vc("ngModel",n.removeExpiry)}}function I(t,e){if(1&t){var o=y.ec();y.dc(0,"div"),y.dc(1,"ion-thumbnail",28),y.lc("click",(function(){y.Dc(o);var t=e.$implicit;return y.pc(3).imagePressAlert(t)})),y.Zb(2,"img",29),y.cc(),y.cc()}if(2&t){var n=e.$implicit;y.Mb(2),y.vc("src",n.src,y.Ec)}}function G(t,e){if(1&t){var o=y.ec();y.dc(0,"ion-item"),y.dc(1,"ion-card",30),y.lc("click",(function(){y.Dc(o);var t=y.pc().$implicit;return y.pc(4).existingImagePressAlert(t)})),y.Zb(2,"ion-img",31),y.cc(),y.cc()}if(2&t){var n=y.pc().$implicit;y.Mb(2),y.vc("hidden",null==n.url)("src",n.url)}}function L(t,e){if(1&t&&(y.dc(0,"div"),y.Jc(1,G,3,2,"ion-item",2),y.cc()),2&t){var o=e.$implicit;y.Mb(1),y.vc("ngIf",o.url)}}function T(t,e){if(1&t&&(y.dc(0,"div"),y.Jc(1,L,2,1,"div",7),y.cc()),2&t){var o=y.pc(3);y.Mb(1),y.vc("ngForOf",null==o.existingAdvert?null:o.existingAdvert.images)}}function K(t,e){if(1&t&&(y.dc(0,"ion-select-option",32),y.Kc(1),y.cc()),2&t){var o=e.$implicit;y.wc("value",o.categoryCodeEnum),y.Mb(1),y.Lc(o.name)}}function Y(t,e){1&t&&y.Zb(0,"ion-icon",33)}function D(t,e){1&t&&y.Zb(0,"ion-spinner")}function O(t,e){if(1&t&&(y.dc(0,"ion-item"),y.dc(1,"small"),y.Kc(2),y.cc(),y.cc()),2&t){var o=y.pc(3);y.Mb(2),y.Lc(o.foundAddress)}}function J(t,e){1&t&&(y.dc(0,"ion-item"),y.Kc(1," Please enter a valid postcode e.g. CF10 4UW "),y.cc())}function Z(t,e){if(1&t&&(y.dc(0,"div"),y.Zb(1,"app-map",34,35),y.cc()),2&t){var o=y.pc(3);y.Mb(1),y.vc("lat",o.lat)("lng",o.lng)("radius",3)("disableDefaultUI",!0)("draggable",!1)("disableNavigation",!1)}}function E(t,e){if(1&t){var o=y.ec();y.dc(0,"ion-button",36),y.lc("click",(function(){y.Dc(o);var t=y.pc(3);return t.postAdvert(t.filesSelected)})),y.Kc(1," Publish "),y.cc()}if(2&t){var n=y.pc(3);y.vc("disabled",!n.postFormGroup.valid)}}function R(t,e){if(1&t){var o=y.ec();y.dc(0,"ion-button",36),y.lc("click",(function(){y.Dc(o);var t=y.pc(3);return t.updateAdvert(t.filesSelected)})),y.Kc(1," Save changes "),y.cc()}if(2&t){var n=y.pc(3);y.vc("disabled",!n.postFormGroup.valid)}}function _(t,e){if(1&t){var o=y.ec();y.dc(0,"div"),y.Jc(1,k,5,1,"ion-item",2),y.dc(2,"input",5),y.lc("change",(function(t){return y.Dc(o),y.pc(2).uploadImage(t.target.files)}))("ngModelChange",(function(t){return y.Dc(o),y.pc(2).fileInput=t})),y.cc(),y.dc(3,"label",6),y.Kc(4,"Add image"),y.cc(),y.Jc(5,I,3,1,"div",7),y.Jc(6,T,2,1,"div",2),y.dc(7,"form",8),y.dc(8,"ion-item"),y.dc(9,"ion-label",9),y.Kc(10,"Add item title"),y.cc(),y.Zb(11,"ion-input",10),y.cc(),y.dc(12,"ion-item"),y.dc(13,"ion-label",9),y.Kc(14,"Add item description"),y.cc(),y.Zb(15,"ion-input",11),y.cc(),y.dc(16,"ion-item"),y.dc(17,"ion-label",12),y.Kc(18,"Select category"),y.cc(),y.dc(19,"ion-select",13),y.Jc(20,K,2,2,"ion-select-option",14),y.cc(),y.cc(),y.dc(21,"p",15),y.Kc(22,'All adverts will expire in 30 days from publishing, unless you change the status to "collected" or "closed" '),y.cc(),y.dc(23,"ion-item"),y.dc(24,"ion-label",9),y.Kc(25,"Enter a postcode - remains private"),y.cc(),y.dc(26,"ion-input",16),y.lc("ionChange",(function(t){return y.Dc(o),y.pc(2).updateLatLngFromPostcode(t.target.value)})),y.cc(),y.dc(27,"ion-button",17),y.lc("click",(function(){return y.Dc(o),y.pc(2).updateLocation()})),y.Jc(28,Y,1,0,"ion-icon",18),y.Jc(29,D,1,0,"ion-spinner",2),y.cc(),y.cc(),y.Jc(30,O,3,1,"ion-item",2),y.Jc(31,J,2,0,"ion-item",2),y.Jc(32,Z,3,6,"div",2),y.Zb(33,"ion-input",19),y.Zb(34,"ion-input",20),y.dc(35,"ion-item",21),y.dc(36,"span",22),y.Kc(37,"Please fill in all fields"),y.cc(),y.cc(),y.cc(),y.dc(38,"ion-item"),y.dc(39,"ion-toggle",23),y.lc("ngModelChange",(function(t){return y.Dc(o),y.pc(2).draft=t}))("click",(function(){return y.Dc(o),y.pc(2).rememberToSaveAlert()})),y.cc(),y.dc(40,"ion-label"),y.Kc(41,"Draft - hidden from search"),y.cc(),y.Zb(42,"br"),y.cc(),y.Jc(43,E,2,1,"ion-button",24),y.Jc(44,R,2,1,"ion-button",24),y.Zb(45,"div",25),y.Zb(46,"div",26),y.cc()}if(2&t){var n=y.pc(2);y.Mb(1),y.vc("ngIf",n.advertExpired),y.Mb(1),y.vc("ngModel",n.fileInput),y.Mb(3),y.vc("ngForOf",n.imagesSelected),y.Mb(1),y.vc("ngIf",(null==n.existingAdvert||null==n.existingAdvert.images?null:n.existingAdvert.images.length)>0),y.Mb(1),y.vc("formGroup",n.postFormGroup),y.Mb(13),y.vc("ngForOf",n.categories),y.Mb(8),y.vc("ngIf",!n.postcodeLookupSpinner),y.Mb(1),y.vc("ngIf",n.postcodeLookupSpinner),y.Mb(1),y.vc("ngIf",n.foundAddress&&n.postFormGroup.controls.postcode.valid),y.Mb(1),y.vc("ngIf",!n.postFormGroup.controls.postcode.valid&&n.postFormGroup.controls.postcode.dirty),y.Mb(1),y.vc("ngIf",n.lat&&n.lng&&n.showMap),y.Mb(3),y.vc("hidden",n.postFormGroup.valid),y.Mb(4),y.vc("ngModel",n.draft),y.Mb(4),y.vc("ngIf",!n.postingAdvert&&!n.editMode),y.Mb(1),y.vc("ngIf",!n.postingAdvert&&n.editMode)}}function U(t,e){if(1&t&&(y.dc(0,"div"),y.Jc(1,x,2,0,"h1",3),y.Jc(2,F,2,0,"h1",3),y.Jc(3,_,47,15,"div",2),y.cc()),2&t){var o=y.pc();y.Mb(1),y.vc("ngIf",!o.editMode),y.Mb(1),y.vc("ngIf",o.editMode),y.Mb(1),y.vc("ngIf",!o.editMode||o.editMode&&!o.loadingAdvert)}}var j=function(){function t(t,e,o,n,r,c,s,a,l,d,p,h,f,g){this.navController=t,this.auth=e,this.loadingCtrl=o,this.alertCtrl=n,this.errorService=r,this.camera=c,this.advertService=s,this.toastController=a,this.geoService=l,this.formBuilder=d,this.activatedRoute=p,this.nativeStorage=h,this.imageService=f,this.advertClient=g,this.title="Post",this.photofallback=!1,this.categories=m.b,this.postingAdvert=!1,this.progress=0,this.postcodeLookupSpinner=!1,this.findingLocation=!1,this.maxNumberPictures=6,this.isApp=!1,this.filesSelected=[],this.imagesSelected=[],this.expiryDaysLength=30,this.loadingAdvert=!1,this.showMap=!1,this.editMode=!1,this.error="",this.removeExpiry=!1,this.draft=!1,this.advertExpired=!1,this.postFormGroup=this.formBuilder.group({title:["",i.o.compose([i.o.required])],description:["",i.o.compose([i.o.required])],category:[u.d.Unknown,i.o.compose([i.o.required])],expiryDaysLength:[30,i.o.compose([i.o.required])],postcode:["",i.o.compose([i.o.pattern("^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$"),i.o.required])],lat:["",i.o.compose([i.o.required])],lng:["",i.o.compose([i.o.required])]}),this.isApp=!1}return t.prototype.uploadImage=function(t){return C(this,void 0,void 0,(function(){var e,o,n,i;return S(this,(function(r){switch(r.label){case 0:for(e=Array.from(t),o=0,n=e;o<n.length;o++)this.filesSelected.push(n[o]);return console.log("files selected",this.filesSelected),i=this,[4,this.imageService.filesToImages(this.filesSelected)];case 1:return i.imagesSelected=r.sent(),this.fileInput=void 0,[2]}}))}))},t.prototype.removeSelectedImage=function(t){this.imagesSelected=this.imagesSelected.filter((function(e){return e!==t}))},t.prototype.ngOnInit=function(){},t.prototype.updateExpiryDays=function(t){this.expiryDaysLength=t},t.prototype.ionViewWillEnter=function(){var t=this;Object(l.b)(this.activatedRoute.params,this.activatedRoute.queryParams,(function(t,e){return M(M({},t),e)})).subscribe((function(e){return C(t,void 0,void 0,(function(){return S(this,(function(t){switch(t.label){case 0:return this.advertPrimaryKey=e.id,this.advertPrimaryKey?[3,2]:[4,this.updateLocation()];case 1:return t.sent(),[2];case 2:return this.editMode=!0,this.advertPartitionKey=this.advertPrimaryKey.split("|")[0],this.advertSortKey=this.advertPrimaryKey.split("|")[1],[4,this.getAdvert()];case 3:return t.sent(),[2]}}))}))}))},t.prototype.getAdvert=function(){return C(this,void 0,void 0,(function(){var t=this;return S(this,(function(e){return this.loadingAdvert=!0,this.advertClient.get(this.advertPartitionKey,this.advertSortKey).subscribe((function(e){return C(t,void 0,void 0,(function(){var t,o,n,i;return S(this,(function(r){switch(r.label){case 0:return e?(this.existingAdvert=e,this.draft=this.existingAdvert.draft,this.advertExpired=this.existingAdvert.expired,this.postFormGroup.patchValue({title:e.title,description:e.description,expiryDaysLength:e.expiryLength,category:e.category}),[4,this.geoService.findAddressByCoords(null===(n=this.existingAdvert.geoLocation)||void 0===n?void 0:n.lat,null===(i=this.existingAdvert.geoLocation)||void 0===i?void 0:i.lng)]):(this.navController.navigateRoot("home"),console.log("Advert not found"),[2]);case 1:return t=r.sent(),o=this.geoService.extractPostcode(t.address_components),this.postFormGroup.patchValue({postcode:o,lat:t.geometry.location.lat(),lng:t.geometry.location.lng()}),this.lat=t.geometry.location.lat(),this.lng=t.geometry.location.lng(),this.postFormGroup.controls.lat.setValue(this.lat),this.postFormGroup.controls.lng.setValue(this.lng),this.postFormGroup.controls.category.setValue(this.existingAdvert.category),console.log("Advert "+this.advertPrimaryKey+" loaded"),this.lat&&this.lng?(this.showMap=!0,this.mapComponent.lat=this.lat):this.showMap=!1,this.lng&&(this.mapComponent.lng=this.lng),this.mapComponent.loadMap(),[2]}}))}))}),(function(t){return console.log(t)})).add((function(){t.loadingAdvert=!1})),[2]}))}))},t.prototype.existingImagePressAlert=function(t){return C(this,void 0,void 0,(function(){var e=this;return S(this,(function(o){switch(o.label){case 0:return[4,this.alertCtrl.create({header:"Delete image",subHeader:"Would you like to delete this image?",buttons:[{text:"Cancel",role:"cancel",handler:function(){}},{text:"Delete",handler:function(){e.existingAdvert.images=e.existingAdvert.images.filter((function(e){return e!==t}))}}]})];case 1:return[4,o.sent().present()];case 2:return o.sent(),[2]}}))}))},t.prototype.imagePressAlert=function(t){return C(this,void 0,void 0,(function(){var e=this;return S(this,(function(o){switch(o.label){case 0:return[4,this.alertCtrl.create({header:"Remove image",subHeader:"Would you like to remove this image?",buttons:[{text:"Cancel",role:"cancel",handler:function(){}},{text:"Remove",handler:function(){e.removeSelectedImage(t)}}]})];case 1:return[4,o.sent().present()];case 2:return o.sent(),[2]}}))}))},t.prototype.updateLocation=function(){return C(this,void 0,void 0,(function(){var t,e,o;return S(this,(function(n){switch(n.label){case 0:return n.trys.push([0,5,6,7]),this.findingLocation=!0,this.postcodeLookupSpinner=!0,[4,this.geoService.refreshCurrentDevicePosition()];case 1:return n.sent(),this.postFormGroup.controls.lat.setValue(this.geoService.latestDevicePosition.coords.latitude),this.postFormGroup.controls.lng.setValue(this.geoService.latestDevicePosition.coords.longitude),t=this,[4,this.geoService.findAddressByCoords(this.geoService.latestDevicePosition.coords.latitude,this.geoService.latestDevicePosition.coords.longitude)];case 2:return t.currentLocation=n.sent(),e=this.geoService.extractPostcode(this.currentLocation.address_components),this.postFormGroup.controls.postcode.setValue(e),this.foundAddress=this.currentLocation.formatted_address,e?[4,this.updateLatLngFromPostcode(e)]:[3,4];case 3:n.sent(),n.label=4;case 4:return[3,7];case 5:return o=n.sent(),console.log("no location"),this.findingLocation=!1,this.postcodeLookupSpinner=!1,this.foundAddress="",this.errorService.errorHandler(p.a.Toast,o,"Unable to find device location"),this.error=o,[3,7];case 6:return this.findingLocation=!1,this.postcodeLookupSpinner=!1,[7];case 7:return[2]}}))}))},t.prototype.postAdvert=function(t){return C(this,void 0,void 0,(function(){var e,o,n,i,r,c,s=this;return S(this,(function(a){switch(a.label){case 0:return[4,this.loadingCtrl.create({spinner:"dots"})];case 1:if(e=a.sent(),this.postingAdvert=!0,(o=new u.c).status=u.x.Open,o.userId=this.auth.user.uid,o.draft=this.draft,o.title=this.postFormGroup.value.title,o.description=this.postFormGroup.value.description,o.category=u.d[u.d[parseInt(this.postFormGroup.value.category)]],o.expiryLength=this.postFormGroup.value.expiryDaysLength,o.geoLocation=new u.k,o.geoLocation.lat=parseFloat(this.postFormGroup.value.lat),o.geoLocation.lng=parseFloat(this.postFormGroup.value.lng),(null==t?void 0:t.length)>0)for(o.images||(o.images=[]),n=0,i=this.filesSelected;n<i.length;n++)r=i[n],(c=new u.l).mimeType=r.type,o.images.push(c);return this.advertClient.post(o).subscribe((function(t){return C(s,void 0,void 0,(function(){return S(this,(function(e){switch(e.label){case 0:return[4,this.uploadImages(t.imagesPresignedUrls)];case 1:return e.sent(),this.navController.navigateRoot("advert/"+t.advert.primaryKey),this.resetAdvert(),[2]}}))}))}),(function(t){return console.log(t)})).add((function(){return C(s,void 0,void 0,(function(){return S(this,(function(t){switch(t.label){case 0:return[4,e.dismiss()];case 1:return t.sent(),this.postingAdvert=!1,[2]}}))}))})),[2]}}))}))},t.prototype.updateAdvert=function(t){return C(this,void 0,void 0,(function(){var e,o,n,i,r,c,s,a,l=this;return S(this,(function(d){switch(d.label){case 0:return[4,this.loadingCtrl.create({spinner:"dots"})];case 1:return[4,(e=d.sent()).present()];case 2:if(d.sent(),this.postingAdvert=!0,o={advert:{partitionKey:this.advertPartitionKey,sortKey:this.advertSortKey,draft:this.draft,title:this.postFormGroup.value.title,description:this.postFormGroup.value.description,category:this.postFormGroup.value.category,expiryLength:this.postFormGroup.value.expiryDaysLength,geoLocation:{lat:parseFloat(this.postFormGroup.value.lat),lng:parseFloat(this.postFormGroup.value.lng)},userId:this.auth.user.uid,images:[].concat(this.existingAdvert.images),init:null,toJSON:null},init:null,toJSON:null},n=[],(null==t?void 0:t.length)>0)for(i=0,r=this.filesSelected;i<r.length;i++)c=r[i],(s=new u.l).mimeType=c.type,n.push(s);return(a=o.advert.images).push.apply(a,n),this.advertClient.put(o).subscribe((function(t){return C(l,void 0,void 0,(function(){return S(this,(function(e){switch(e.label){case 0:return[4,this.uploadImages(t.imagesPresignedUrls)];case 1:return e.sent(),this.navController.navigateRoot("advert/"+this.advertPrimaryKey),this.resetAdvert(),[2]}}))}))}),(function(t){return console.log(t)})).add((function(){return C(l,void 0,void 0,(function(){return S(this,(function(t){switch(t.label){case 0:return[4,e.dismiss()];case 1:return t.sent(),this.postingAdvert=!1,[2]}}))}))})),[2]}}))}))},t.prototype.uploadImages=function(t){return C(this,void 0,void 0,(function(){var e,o;return S(this,(function(n){switch(n.label){case 0:e=0,n.label=1;case 1:return e<t.length?[4,this.imageService.uploadFileToS3(this.filesSelected[e],t[e].signedUrl).toPromise()]:[3,4];case 2:o=n.sent(),console.log("uploadProfileImage res",o),n.label=3;case 3:return e++,[3,1];case 4:return[2]}}))}))},t.prototype.resetAdvert=function(){this.filesSelected=[],this.imagesSelected=[],this.existingAdvert=null,this.postingAdvert=!1},t.prototype.getFileExtensionFromContentType=function(t){var e="";switch(t.toLowerCase()){case"image/jpeg":case"image/jpg":e="jpg";case"image/png":e="png";default:e="jpg"}return e},t.prototype.updateLatLngFromPostcode=function(t){return C(this,void 0,void 0,(function(){var e,o;return S(this,(function(n){switch(n.label){case 0:return this.showMap=!1,[4,this.geoService.findAddressByPostcode(t)];case 1:return e=n.sent(),o=this.geoService.extractPostcode(e.address_components),this.postFormGroup.controls.postcode.setValue(o),this.foundAddress=e.formatted_address,this.lat=e.geometry.location.lat(),this.lng=e.geometry.location.lng(),this.postFormGroup.controls.lat.setValue(this.lat),this.postFormGroup.controls.lng.setValue(this.lng),this.showMap=!0,this.mapComponent&&(this.mapComponent.lat=this.lat,this.mapComponent.lng=this.lng,this.mapComponent.loadMap()),[2]}}))}))},t.prototype.rememberToSaveAlert=function(){return C(this,void 0,void 0,(function(){return S(this,(function(t){switch(t.label){case 0:return[4,this.alertCtrl.create({header:"Remember to save",subHeader:"Changes won't take affect till you "+(this.editMode?"save":"publish"),buttons:["Ok"]})];case 1:return[4,t.sent().present()];case 2:return t.sent(),[2]}}))}))},t.\u0275fac=function(e){return new(e||t)(y.Yb(c.db),y.Yb(h.a),y.Yb(c.ab),y.Yb(c.b),y.Yb(f.a),y.Yb(s.a),y.Yb(b.a),y.Yb(c.kb),y.Yb(g.a),y.Yb(i.b),y.Yb(r.a),y.Yb(a.a),y.Yb(v.a),y.Yb(u.b))},t.\u0275cmp=y.Sb({type:t,selectors:[["post"]],viewQuery:function(t,e){var o;1&t&&y.Gc(P,!0,d.a),2&t&&y.Bc(o=y.mc())&&(e.mapComponent=o.first)},decls:5,vars:2,consts:[["title","Post","displaySearchBar","false","displayCameraIcon","false"],[1,"post"],[4,"ngIf"],["class","center",4,"ngIf"],[1,"center"],["id","file-upload","type","file","name","file-upload","accept","image/*","multiple","",2,"display","none",3,"ngModel","change","ngModelChange"],["for","file-upload",1,"add-image",2,"color","rgb(0, 132, 80)"],[4,"ngFor","ngForOf"],[3,"formGroup"],["position","floating"],["formControlName","title","id","title"],["type","text","formControlName","description","name","desciption","id","description","maxlength","250"],["position","floating","for","category"],["formControlName","category","name","category","id","category"],["checked","false",3,"value",4,"ngFor","ngForOf"],[2,"font-weight","bold"],["type","text","formControlName","postcode","name","postcode","id","postcode","debounce","1500",3,"ionChange"],["clear","","type","button","slot","end",3,"click"],["name","locate","style","font-size:2em",4,"ngIf"],["type","hidden","formControlName","lat","id","lat"],["type","hidden","formControlName","lng","id","lng"],[3,"hidden"],[2,"color","red"],[3,"ngModel","ngModelChange","click"],["slot","end","full","","primary","",3,"disabled","click",4,"ngIf"],["id","original",2,"display","none"],["id","resampled"],[1,"ion-text-wrap"],[3,"click"],[3,"src"],["s","",1,"upload-image-thumbnails",3,"click"],[2,"object-fit","cover",3,"hidden","src"],["checked","false",3,"value"],["name","locate",2,"font-size","2em"],[3,"lat","lng","radius","disableDefaultUI","draggable","disableNavigation"],["mapComponent",""],["slot","end","full","","primary","",3,"disabled","click"]],template:function(t,e){1&t&&(y.dc(0,"ion-header"),y.Zb(1,"app-topbar",0),y.cc(),y.dc(2,"ion-content",1),y.Jc(3,A,2,0,"div",2),y.Jc(4,U,4,3,"div",2),y.cc()),2&t&&(y.Mb(3),y.vc("ngIf",!e.auth.user),y.Mb(1),y.vc("ngIf",e.auth.user))},directives:[c.s,w.a,c.p,n.l,i.a,i.h,i.k,n.k,i.q,i.i,i.d,c.y,c.z,c.x,c.jb,i.c,i.f,c.O,c.ib,c.j,c.W,c.c,c.U,c.k,c.u,c.P,c.t,c.S,d.a],styles:[".custom-file-upload[_ngcontent-%COMP%]{cursor:pointer}.custom-file-upload[_ngcontent-%COMP%], .custom-file-upload[_ngcontent-%COMP%]:hover{background-color:#fff;text-transform:lowercase;border:none;box-shadow:none}.upload-image-thumbnails[_ngcontent-%COMP%]{width:100px;height:100px;float:left}.upload-image-thumbnails[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:100px;-o-object-fit:cover;object-fit:cover}.add-image[_ngcontent-%COMP%]{font-size:1.3em}.add-image[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary)}"]}),t}(),B=o("j1ZV"),H=[{path:"",component:j}],N=function(){function t(){}return t.\u0275mod=y.Wb({type:t}),t.\u0275inj=y.Vb({factory:function(e){return new(e||t)},imports:[[n.c,i.e,i.m,c.Y,r.k.forChild(H),B.a]]}),t}()},i5GC:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var n=o("Xd5C"),i=o("TYT/"),r=function(){function t(t){this.advertClient=t,this.showFooter=!0}return t.prototype.getAdvert=function(t,e){return this.advertClient.get(t,e)},t.\u0275fac=function(e){return new(e||t)(i.hc(n.b))},t.\u0275prov=i.Ub({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);