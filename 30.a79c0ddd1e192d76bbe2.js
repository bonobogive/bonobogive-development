(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{VYDa:function(t,e,n){"use strict";n.r(e),n.d(e,"FavouritesPageModule",(function(){return C}));var r=n("Valr"),i=n("QJY3"),o=n("DUip"),u=n("c7TG"),a=n("psW0"),s=n("Xd5C"),c=n("AzuR"),l=n("lGQG"),f=n("9vc0"),v=n("mveN"),d=n("TYT/"),h=n("Mm/0"),p=n("5j9j"),y=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function u(t){try{s(r.next(t))}catch(e){o(e)}}function a(t){try{s(r.throw(t))}catch(e){o(e)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,a)}s((r=r.apply(t,e||[])).next())}))},b=function(t,e){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!((i=(i=u.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=e.call(t,u)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};function g(t,e){1&t&&(d.dc(0,"div"),d.Kc(1,"Please sign in"),d.cc())}function m(t,e){1&t&&d.Zb(0,"ion-spinner")}function w(t,e){1&t&&(d.dc(0,"p"),d.Kc(1,"You have no favourites "),d.Zb(2,"ion-icon",7),d.cc())}function F(t,e){if(1&t){var n=d.ec();d.dc(0,"ion-list"),d.dc(1,"ion-item",8),d.dc(2,"app-message",9),d.lc("click",(function(){d.Dc(n);var t=e.$implicit;return d.pc(2).openFavourite(t)})),d.cc(),d.Kc(3),d.dc(4,"ion-button",10),d.lc("click",(function(){d.Dc(n);var t=e.$implicit;return d.pc(2).deleteFavourite(t)})),d.Zb(5,"ion-icon",11),d.cc(),d.cc(),d.cc()}if(2&t){var r=e.$implicit;d.Mb(2),d.vc("square",!0)("imageUrl",(null==r.images?null:r.images.length)>0?null==r.images[0]?null:r.images[0].url:null)("title",r.title)("subTitle",r.description)("messageMultiLine",!0),d.Mb(1),d.Mc(" ",r.primaryKey," ")}}function A(t,e){if(1&t){var n=d.ec();d.dc(0,"div"),d.dc(1,"ion-refresher",5),d.lc("ionRefresh",(function(t){return d.Dc(n),d.pc().refresh(t)})),d.Zb(2,"ion-refresher-content"),d.cc(),d.dc(3,"h2"),d.Kc(4,"My favourites"),d.cc(),d.Jc(5,m,1,0,"ion-spinner",2),d.Jc(6,w,3,0,"p",2),d.Jc(7,F,6,6,"ion-list",6),d.cc()}if(2&t){var r=d.pc();d.Mb(5),d.vc("ngIf",r.showSpinner),d.Mb(1),d.vc("ngIf",!r.showSpinner&&r.adverts&&0===r.adverts.length),d.Mb(1),d.vc("ngForOf",r.adverts)}}var x=function(){function t(t,e,n,r,i,o,u){this.navController=t,this.auth=e,this.loadingCtrl=n,this.alertCtrl=r,this.errorService=i,this.favouritesService=o,this.advertClient=u,this.title="Favourties",this.showSpinner=!1,this.showDelete=!1,this.showFavourites=!0,this.take=10,this.advertSlotPosition="start",this.loadedAllFavourites=!1,this.baseUrl=c.a.baseUrl,this.adverts=[],this.nextRequestBlob=void 0,console.log("my favourties page loading"),this.getFavourites(null,null)}return t.prototype.ngOnInit=function(){},t.prototype.showDeleteFavouriteConfirm=function(t){return y(this,void 0,void 0,(function(){var e=this;return b(this,(function(n){switch(n.label){case 0:return[4,this.alertCtrl.create({header:"Delete favourite?",message:"Are you sure you want to delete this favourite?",buttons:[{text:"Yes",handler:function(){return y(e,void 0,void 0,(function(){return b(this,(function(e){return this.deleteFavourite(t),[2]}))}))}},{text:"No",handler:function(){console.log("Agree clicked")}}]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}}))}))},t.prototype.removeAdvertById=function(t){var e=this.adverts.filter((function(e){return e.primaryKey!==t}));console.log("filtered adverts",e),this.adverts=e},t.prototype.deleteFavourite=function(t){return y(this,void 0,void 0,(function(){return b(this,(function(e){return this.removeAdvertById(t.primaryKey),this.favouritesService.deleteFavouriteByAdvertEntity(t).subscribe((function(t){}),(function(t){console.log(t)})),[2]}))}))},t.prototype.openFavourite=function(t){this.navController.navigateForward("advert/"+t.primaryKey)},t.prototype.getFavourites=function(t,e){return y(this,void 0,void 0,(function(){var n,r=this;return b(this,(function(i){return n=new s.r,this.showSpinner=!0,n.take=10,n.nextRequestBlob=this.nextRequestBlob,this.advertClient.favouritesAdverts(this.auth.user.uid,n).pipe(Object(a.a)((function(t){return r.advertClient.getAverts(t.entities.map((function(t){return t.entityPrimaryKey})))}))).subscribe((function(t){return r.adverts=t.entities})).add((function(){r.showSpinner=!1,t&&t.target.complete(),e&&e.target.complete()})),[2]}))}))},t.prototype.ngAfterViewInit=function(){},t.prototype.refresh=function(t){return y(this,void 0,void 0,(function(){return b(this,(function(e){switch(e.label){case 0:return this.loadedAllFavourites=!1,this.nextRequestBlob=void 0,this.adverts=[],[4,this.getFavourites(t,null)];case 1:return e.sent(),[2]}}))}))},t.prototype.getMore=function(t){this.getFavourites(null,t)},t.prototype.redirecToPostNewAdvert=function(){this.navController.navigateRoot("Post")},t.prototype.loadAdvert=function(t,e){this.navController.navigateRoot("Advert/"+e)},t.\u0275fac=function(e){return new(e||t)(d.Yb(u.db),d.Yb(l.a),d.Yb(u.ab),d.Yb(u.b),d.Yb(f.a),d.Yb(v.a),d.Yb(s.b))},t.\u0275cmp=d.Sb({type:t,selectors:[["app-favourites"]],decls:7,vars:2,consts:[["title","Favourites"],[1,"favourites"],[4,"ngIf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading more adverts..."],["slot","fixed",3,"ionRefresh"],[4,"ngFor","ngForOf"],["name","heart",2,"color","red"],["lines","none",1,"ion-no-padding"],[3,"square","imageUrl","title","subTitle","messageMultiLine","click"],["slot","end","fill","clear","color","danger","size","large",3,"click"],["name","heart"]],template:function(t,e){1&t&&(d.dc(0,"ion-header"),d.Zb(1,"app-topbar",0),d.cc(),d.dc(2,"ion-content",1),d.Jc(3,g,2,0,"div",2),d.Jc(4,A,8,3,"div",2),d.dc(5,"ion-infinite-scroll",3),d.lc("ionInfinite",(function(t){return e.getMore(t)})),d.Zb(6,"ion-infinite-scroll-content",4),d.cc(),d.cc()),2&t&&(d.Mb(3),d.vc("ngIf",!e.auth.user),d.Mb(1),d.vc("ngIf",e.auth.user))},directives:[u.s,h.a,u.p,r.l,u.v,u.w,u.H,u.I,r.k,u.S,u.t,u.A,u.y,p.a,u.j],styles:[""]}),t}(),k=n("j1ZV"),I=[{path:"",component:x}],C=function(){function t(){}return t.\u0275mod=d.Wb({type:t}),t.\u0275inj=d.Vb({factory:function(e){return new(e||t)},imports:[[r.c,i.e,i.m,u.Y,o.k.forChild(I),k.a]]}),t}()},mveN:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("lGQG"),i=n("i5GC"),o=n("Xd5C"),u=n("xMyE"),a=n("TYT/"),s=function(){function t(t,e,n){this.advertService=t,this.auth=e,this.advertClient=n,this.userFavouriteAdvertIds=[],this.userFavourites()}return t.prototype.userFavourites=function(){var t=this;if(this.auth&&this.auth.user&&this.auth.user.uid){var e=new o.r;e.nextRequestBlob=void 0,e.take=1e3,this.advertClient.favouritesAdverts(this.auth.user.uid,e).subscribe((function(e){t.userFavouriteAdvertIds=e.entities}))}},t.prototype.addFavourite=function(t){return e=this,void 0,r=function(){var e,n,r=this;return function(t,e){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!((i=(i=u.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=e.call(t,u)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}(this,(function(i){return e=t+this.auth.user.uid,(n=new o.j).primaryKey=e,n.entityPrimaryKey=t,this.userFavouriteAdvertIds.push(n),this.advertClient.addFavourite(t,this.auth.user.uid).subscribe((function(t){var e=r.userFavouriteAdvertIds.findIndex((function(e){return e.entityPrimaryKey===t.entityPrimaryKey}));-1!==e?(r.userFavouriteAdvertIds[e]=t,console.log("Advert added "+t)):console.log("Couldn't find array to update")})),[2]}))},new((n=void 0)||(n=Promise))((function(t,i){function o(t){try{a(r.next(t))}catch(e){i(e)}}function u(t){try{a(r.throw(t))}catch(e){i(e)}}function a(e){var r;e.done?t(e.value):(r=e.value,r instanceof n?r:new n((function(t){t(r)}))).then(o,u)}a((r=r.apply(e,[])).next())}));var e,n,r},t.prototype.deleteFavouriteByAdvertEntity=function(t){var e=this;return this.advertClient.deleteFavourite(this.auth.user.uid,t.primaryKey).pipe(Object(u.a)((function(n){e.userFavouriteAdvertIds=e.userFavouriteAdvertIds.filter((function(e){return e.entityPrimaryKey!==t.primaryKey})),console.log("Favourite for advert "+t.primaryKey+" deleted")})))},t.\u0275fac=function(e){return new(e||t)(a.hc(i.a),a.hc(r.a),a.hc(o.b))},t.\u0275prov=a.Ub({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);