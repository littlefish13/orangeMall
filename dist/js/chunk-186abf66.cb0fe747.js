(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-186abf66"],{"151d":function(t,e,n){},"1a25":function(t,e,n){"use strict";var a=n("9918"),o=n.n(a);o.a},2617:function(t,e,n){"use strict";var a=n("151d"),o=n.n(a);o.a},2909:function(t,e,n){"use strict";function a(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("25f0"),n("3ca3"),n("ddb0");function o(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){return a(t)||o(t)||i()}n.d(e,"a",(function(){return r}))},"3d1a":function(t,e,n){},"3f0d":function(t,e,n){},"4b55":function(t,e,n){"use strict";var a=n("3f0d"),o=n.n(a);o.a},"4df4":function(t,e,n){"use strict";var a=n("0366"),o=n("7b0b"),i=n("9bdd"),r=n("e95a"),s=n("50c4"),c=n("8418"),l=n("35a1");t.exports=function(t){var e,n,u,f,d,h,g=o(t),p="function"==typeof this?this:Array,m=arguments.length,y=m>1?arguments[1]:void 0,b=void 0!==y,v=l(g),C=0;if(b&&(y=a(y,m>2?arguments[2]:void 0,2)),void 0==v||p==Array&&r(v))for(e=s(g.length),n=new p(e);e>C;C++)h=b?y(g[C],C):g[C],c(n,C,h);else for(f=v.call(g),d=f.next,n=new p;!(u=d.call(f)).done;C++)h=b?i(f,y,[u.value,C],!0):u.value,c(n,C,h);return n.length=C,n}},"7f9e":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tabcontrol"}},t._l(t.text,(function(e,a){return n("div",{key:e.index,class:{active:a===t.activeIndex},attrs:{id:"tabcontrol-item"},on:{click:function(e){return t.itemClick(a)}}},[n("span",[t._v(t._s(e))])])})),0)},o=[],i={name:"TabControl",data:function(){return{activeIndex:0}},methods:{itemClick:function(t){this.activeIndex=t,this.$emit("tabClick",t)}},props:{text:Array}},r=i,s=(n("1a25"),n("2877")),c=Object(s["a"])(r,a,o,!1,null,null,null);e["a"]=c.exports},8418:function(t,e,n){"use strict";var a=n("c04e"),o=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var r=a(e);r in t?o.f(t,r,i(0,n)):t[r]=n}},"8bc9":function(t,e,n){"use strict";var a=n("c060"),o=n.n(a);o.a},9918:function(t,e,n){},a3ac:function(t,e,n){"use strict";var a=n("3d1a"),o=n.n(a);o.a},a630:function(t,e,n){var a=n("23e7"),o=n("4df4"),i=n("1c7e"),r=!i((function(t){Array.from(t)}));a({target:"Array",stat:!0,forced:r},{from:o})},bb51:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"category"}},[n("nav-bar",{staticClass:"category-nav",scopedSlots:t._u([{key:"center",fn:function(){return[t._v("商品分类")]},proxy:!0}])}),n("category-menu",{staticClass:"category-menu",attrs:{menuList:t.menuList}}),n("category-content",{attrs:{menuList:t.menuList}})],1)},o=[],i=n("a7ac"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"category-menu"}},[n("scroll",{staticClass:"wrapper"},t._l(this.menuList,(function(e,a){return n("div",{key:a,staticClass:"item",class:{click:a===t.activeIndex},on:{click:function(n){return t.itemClick(e,a)}}},[t._v(t._s(e.title)+" ")])})),0)],1)},s=[],c=n("5d17"),l={name:"CategoryMenu",components:{Scroll:c["a"]},props:{menuList:Array},data:function(){return{activeIndex:0}},methods:{itemClick:function(t,e){this.$bus.$emit("getMaitKey",t.maitKey),this.$bus.$emit("getMiniWallKey",t.miniWallkey),this.activeIndex=e}}},u=l,f=(n("2617"),n("2877")),d=Object(f["a"])(u,r,s,!1,null,"bfff2058",null),h=d.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"category-content"}},[n("scroll",{ref:"scroll",staticClass:"wrapper",attrs:{probeType:3},on:{getPosition:t.getPosition}},[n("cg-content-top"),n("tab-control",{attrs:{text:["综合","新品","销量"]},on:{tabClick:t.itemClick}}),n("cg-content-detail",{attrs:{goods:t.goods[t.showType].list}})],1),n("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],nativeOn:{click:function(e){return t.backTop(e)}}})],1)},p=[],m=n("2909"),y=n("7f9e"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"cg-content-top"}},t._l(t.linkList,(function(e,a){return n("div",{key:a,staticClass:"item-container"},[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image,alt:""}}),n("p",[t._v(t._s(e.title))])])])})),0)},v=[],C=n("1bab");function _(){return Object(C["a"])({url:"/category"})}function k(t){return Object(C["a"])({url:"/subcategory",params:{maitKey:t}})}function w(t,e){return Object(C["a"])({url:"/subcategory/detail",params:{miniWallkey:t,type:e}})}var x={name:"CgContentTop",data:function(){return{linkList:[]}},created:function(){var t=this;this.getSubcategory_methods(3627),this.$bus.$on("getMaitKey",(function(e){t.getSubcategory_methods(e)}))},methods:{getSubcategory_methods:function(t){var e=this;k(t).then((function(t){e.linkList=t.data.list}))}}},$=x,T=(n("8bc9"),Object(f["a"])($,b,v,!1,null,"03f17ff6",null)),j=T.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("goods-list",{attrs:{goods:t.goods}})],1)},S=[],A=n("6d71"),L={name:"CgContentDetail",components:{GoodsList:A["a"]},props:{goods:Array},data:function(){return{}},methods:{},created:function(){}},D=L,E=Object(f["a"])(D,O,S,!1,null,"65a30b97",null),I=E.exports,K=n("725f"),M={name:"CategoryContent",components:{CgContentTop:j,Scroll:c["a"],TabControl:y["a"],CgContentDetail:I,BackTop:K["a"]},props:{},data:function(){return{goods:{pop:{list:[]},new:{list:[]},sell:{list:[]}},showType:"pop",isShow:!1}},methods:{itemClick:function(t){switch(t){case 0:this.showType="pop";break;case 1:this.showType="new";break;case 2:this.showType="sell";break}},getCategoryDetail_methods:function(t,e){var n=this;w(t,e).then((function(t){var a,o;0===n.goods[e].list.length?(a=n.goods[e].list).push.apply(a,Object(m["a"])(t)):(n.goods[e].list=[],(o=n.goods[e].list).push.apply(o,Object(m["a"])(t)))}))},getPosition:function(t){-t.y>1e3?this.isShow=!0:this.isShow=!1},backTop:function(){this.$refs.scroll.scrollTo(0,0)}},created:function(){var t=this;this.getCategoryDetail_methods(10062603,"pop"),this.getCategoryDetail_methods(10062603,"new"),this.getCategoryDetail_methods(10062603,"sell"),this.$bus.$on("getMiniWallKey",(function(e){t.getCategoryDetail_methods(e,"pop"),t.getCategoryDetail_methods(e,"new"),t.getCategoryDetail_methods(e,"sell")}))}},W=M,P=(n("a3ac"),Object(f["a"])(W,g,p,!1,null,"31cca245",null)),B=P.exports,J={name:"Category",components:{NavBar:i["a"],CategoryMenu:h,CategoryContent:B},data:function(){return{menuList:[]}},methods:{getCategory_methods:function(){var t=this;_().then((function(e){t.menuList=e.data.category.list}))}},created:function(){this.getCategory_methods()}},N=J,G=(n("4b55"),Object(f["a"])(N,a,o,!1,null,"5c622e7a",null));e["default"]=G.exports},c060:function(t,e,n){}}]);
//# sourceMappingURL=chunk-186abf66.cb0fe747.js.map