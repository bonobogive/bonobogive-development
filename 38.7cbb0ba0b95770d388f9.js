(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{TBb5:function(e,t,n){"use strict";n.r(t),n.d(t,"UserProfilePageModule",(function(){return S}));var r=n("Valr"),i=n("QJY3"),o=n("DUip"),s=n("c7TG"),c=n("lGQG"),l=n("dzgT"),a=n("mnRn"),u=n("Xd5C"),f=n("TYT/"),d=n("Mm/0"),g=function(e){return{centerImage:e}},p=function(e,t,n){return{width:e,height:t,"max-width":n}},h=function(){function e(){}return e.prototype.ngOnInit=function(){},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=f.Sb({type:e,selectors:[["app-circle-image"]],inputs:{imageUrl:"imageUrl",imageSize:"imageSize",centerImage:"centerImage"},decls:2,vars:9,consts:[[3,"ngClass"],[3,"src","ngStyle"]],template:function(e,t){1&e&&(f.dc(0,"div",0),f.Zb(1,"img",1),f.cc()),2&e&&(f.vc("ngClass",f.yc(3,g,t.centerImage)),f.Mb(1),f.wc("src",t.imageUrl,f.Ec),f.vc("ngStyle",f.Ac(5,p,t.imageSize,t.imageSize,t.imageSize)))},directives:[r.j,r.m],styles:["img[_ngcontent-%COMP%]{border-radius:50%;-o-object-fit:cover;object-fit:cover;margin:1em;border:50%}.centerImage[_ngcontent-%COMP%]{text-align:center}"]}),e}(),v=n("NCXR"),b=function(){return(b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function m(e,t){if(1&e&&f.Zb(0,"app-circle-image",10),2&e){var n=f.pc();f.vc("imageUrl",null==n.userProfile?null:n.userProfile.pictureUrl)("imageSize",n.profileImageSize)("centerImage",n.centerImage)}}function y(e,t){1&e&&f.Zb(0,"div")}function P(e,t){if(1&e&&f.Zb(0,"app-adverts",11),2&e){var n=f.pc();f.vc("linear",!1)("adverts",n.userAdverts)("enableFavourites",!0)}}var w=function(){function e(e,t,n,r,i,o){this.auth=e,this.navController=t,this.activatedRoute=n,this.imageService=r,this.advertClient=i,this.userClient=o,this.title="User Profile",this.userRating=new u.u,this.reviewerSubmittedUserRating=new u.u,this.userAdverts=[],this.take=10,this.profileImageSize="10em",this.centerImage=!0,this.showRatingsCount=!0,this.readOnlyRating=!0,this.getOverallaverage=!0,this.getReviewersPreviousRating=!1,this.loadedAllAdverts=!1,this.nextRequestBlob=void 0}return e.prototype.ngOnInit=function(){var e=this;Object(l.b)(this.activatedRoute.params,this.activatedRoute.queryParams,(function(e,t){return b(b({},e),t)})).subscribe((function(t){e.userId=t.id,e.getUserProfile(),e.getUsersAdverts(null,null)}))},e.prototype.getUserProfile=function(){var e=this;this.userClient.get(this.userId,!0).subscribe((function(t){e.userProfile=t}))},e.prototype.getUsersAdverts=function(e,t){var n=this,r=new u.r;r.nextRequestBlob=this.nextRequestBlob,r.take=10,this.advertClient.usersAdverts(this.userId,r).subscribe((function(r){n.userAdverts=r.entities,n.nextRequestBlob=r.lastEvaluatedKeyHash,t&&t.target.complete(),e&&e.target.complete()}))},e.prototype.getMoreMyAdverts=function(e){return t=this,void 0,r=function(){return function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(c){o=[6,c],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}(this,(function(t){return this.loadedAllAdverts?(e.target.complete(),[2]):(this.getUsersAdverts(null,e),[2])}))},new((n=void 0)||(n=Promise))((function(e,i){function o(e){try{c(r.next(e))}catch(t){i(t)}}function s(e){try{c(r.throw(e))}catch(t){i(t)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(o,s)}c((r=r.apply(t,[])).next())}));var t,n,r},e.prototype.refresh=function(e){this.nextRequestBlob=void 0,this.getUsersAdverts(e,null)},e.prototype.ngAfterViewInit=function(){},e.\u0275fac=function(t){return new(t||e)(f.Yb(c.a),f.Yb(s.db),f.Yb(o.a),f.Yb(a.a),f.Yb(u.b),f.Yb(u.z))},e.\u0275cmp=f.Sb({type:e,selectors:[["user-profile"]],decls:18,vars:7,consts:[["title","User Profile"],[1,"userProfile"],["slot","fixed",3,"ionRefresh"],["right","",1,"ion-padding",3,"hidden"],[3,"imageUrl","imageSize","centerImage",4,"ngIf"],[4,"ngIf"],[3,"hidden"],[3,"linear","adverts","enableFavourites",4,"ngIf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading more adverts..."],[3,"imageUrl","imageSize","centerImage"],[3,"linear","adverts","enableFavourites"]],template:function(e,t){1&e&&(f.dc(0,"ion-header"),f.Zb(1,"app-topbar",0),f.cc(),f.dc(2,"ion-content",1),f.dc(3,"ion-refresher",2),f.lc("ionRefresh",(function(e){return t.refresh(e)})),f.Zb(4,"ion-refresher-content"),f.cc(),f.Zb(5,"ion-spinner",3),f.dc(6,"div"),f.Jc(7,m,1,3,"app-circle-image",4),f.dc(8,"h2"),f.Kc(9),f.cc(),f.Jc(10,y,1,0,"div",5),f.dc(11,"div",6),f.Zb(12,"hr"),f.dc(13,"h3"),f.Kc(14),f.cc(),f.Jc(15,P,1,3,"app-adverts",7),f.cc(),f.cc(),f.dc(16,"ion-infinite-scroll",8),f.lc("ionInfinite",(function(e){return t.getMoreMyAdverts(e)})),f.Zb(17,"ion-infinite-scroll-content",9),f.cc(),f.cc()),2&e&&(f.Mb(5),f.vc("hidden",null==t.userProfile?null:t.userProfile.name),f.Mb(2),f.vc("ngIf",null==t.userProfile?null:t.userProfile.pictureUrl),f.Mb(2),f.Lc(null==t.userProfile?null:t.userProfile.name),f.Mb(1),f.vc("ngIf",null==t.userProfile?null:t.userProfile.uid),f.Mb(1),f.vc("hidden",!(null!=t.userProfile&&t.userProfile.name)),f.Mb(3),f.Mc("",null==t.userProfile?null:t.userProfile.name," is giving"),f.Mb(1),f.vc("ngIf",t.userAdverts&&t.userAdverts.length>0))},directives:[s.s,d.a,s.p,s.H,s.I,s.S,r.l,s.v,s.w,h,v.a],styles:[".userProfile[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:3em;font-weight:350}.userProfile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:350}.userProfile[_ngcontent-%COMP%]   .advert-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;box-sizing:border-box}"]}),e}(),I=n("j1ZV"),M=[{path:"",component:w}],S=function(){function e(){}return e.\u0275mod=f.Wb({type:e}),e.\u0275inj=f.Vb({factory:function(t){return new(t||e)},imports:[[r.c,i.e,i.m,s.Y,o.k.forChild(M),I.a]]}),e}()}}]);