(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-351cf974"],{"0c7b":function(t,e,o){"use strict";var n=o("9461"),a=o.n(n);a.a},"1a25":function(t,e,o){"use strict";var n=o("9918"),a=o.n(n);a.a},"1bbd":function(t,e,o){},2909:function(t,e,o){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,o=new Array(t.length);e<t.length;e++)o[e]=t[e];return o}}o("a4d3"),o("e01a"),o("d28b"),o("a630"),o("e260"),o("d3b7"),o("25f0"),o("3ca3"),o("ddb0");function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){return n(t)||a(t)||r()}o.d(e,"a",(function(){return s}))},"34d9":function(t,e,o){},"417e":function(t,e,o){"use strict";var n=o("1bbd"),a=o.n(n);a.a},"463f":function(t,e,o){"use strict";var n=o("34d9"),a=o.n(n);a.a},"4df4":function(t,e,o){"use strict";var n=o("0366"),a=o("7b0b"),r=o("9bdd"),s=o("e95a"),i=o("50c4"),c=o("8418"),l=o("35a1");t.exports=function(t){var e,o,u,d,f,m,p=a(t),h="function"==typeof this?this:Array,b=arguments.length,v=b>1?arguments[1]:void 0,w=void 0!==v,g=l(p),_=0;if(w&&(v=n(v,b>2?arguments[2]:void 0,2)),void 0==g||h==Array&&s(g))for(e=i(p.length),o=new h(e);e>_;_++)m=w?v(p[_],_):p[_],c(o,_,m);else for(d=g.call(p),f=d.next,o=new h;!(u=f.call(d)).done;_++)m=w?r(d,v,[u.value,_],!0):u.value,c(o,_,m);return o.length=_,o}},"5cbe":function(t,e,o){t.exports=o.p+"img/recommend_bg.794b6628.jpg"},"5f8b":function(t,e,o){"use strict";var n=o("902e"),a=o.n(n);a.a},"7f9e":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"tabcontrol"}},t._l(t.text,(function(e,n){return o("div",{key:e.index,class:{active:n===t.activeIndex},attrs:{id:"tabcontrol-item"},on:{click:function(e){return t.itemClick(n)}}},[o("span",[t._v(t._s(e))])])})),0)},a=[],r={name:"TabControl",data:function(){return{activeIndex:0}},methods:{itemClick:function(t){this.activeIndex=t,this.$emit("tabClick",t)}},props:{text:Array}},s=r,i=(o("1a25"),o("2877")),c=Object(i["a"])(s,n,a,!1,null,null,null);e["a"]=c.exports},8418:function(t,e,o){"use strict";var n=o("c04e"),a=o("9bf2"),r=o("5c6c");t.exports=function(t,e,o){var s=n(e);s in t?a.f(t,s,r(0,o)):t[s]=o}},"902e":function(t,e,o){},9461:function(t,e,o){},9918:function(t,e,o){},a630:function(t,e,o){var n=o("23e7"),a=o("4df4"),r=o("1c7e"),s=!r((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:s},{from:a})},b3d7:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"home"}},[o("nav-bar",{staticClass:"home-nav",scopedSlots:t._u([{key:"center",fn:function(){return[t._v("商橙")]},proxy:!0}])}),o("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.isTabControlShow,expression:"isTabControlShow"}],ref:"tabControl_1",staticClass:"tab-control",attrs:{text:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),o("scroll",{ref:"scroll",staticClass:"wrapper",attrs:{probeType:3,pullUpLoad:!0},on:{getPosition:t.showBackTop,pullUpLoad:t.pullUpLoad}},[o("home-swiper",{attrs:{cbanners:t.banners},on:{swiperImageLoad:t.swiperImageLoad}}),o("home-feature"),o("tab-control",{ref:"tabControl_2",attrs:{text:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),o("goods-list",{attrs:{goods:t.goods[t.showtype].list}})],1),o("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],nativeOn:{click:function(e){return t.backTop(e)}}})],1)},a=[],r=o("2909"),s=o("a7ac"),i=o("1bab");function c(){return Object(i["a"])({url:"/home/multidata"})}function l(t,e){return Object(i["a"])({url:"/home/data",params:{type:t,page:e}})}var u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"swiper-container"},[o("div",{staticClass:"swiper-wrapper"},t._l(t.cbanners,(function(e){return o("div",{key:e.index,staticClass:"swiper-slide"},[o("a",{attrs:{href:e.link}},[o("img",{attrs:{src:e.image,width:"100%",height:"150px"},on:{load:t.imageLoad}})])])})),0),o("div",{staticClass:"swiper-pagination"})])},d=[],f=o("b619"),m={name:"HomeSwiper",data:function(){return{isLoad:!1}},props:{cbanners:Array},mounted:function(){new f["a"](".swiper-container",{autoplay:{disableOnInteraction:!1,delay:2e3},observer:!0,pagination:{el:".swiper-pagination",clickable:!0}})},methods:{imageLoad:function(){this.isLoad||(this.$emit("swiperImageLoad"),this.isLoad=!this.isLoad)}}},p=m,h=(o("463f"),o("2877")),b=Object(h["a"])(p,u,d,!1,null,null,null),v=b.exports,w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"recommend"},t._l(t.crecommends,(function(e){return o("div",{key:e.index,staticClass:"recommend-item"},[o("a",{attrs:{href:e.link}},[o("img",{attrs:{src:e.image,alt:""}}),o("div",[t._v(t._s(e.title))])])])})),0)},g=[],_={name:"HomeRecommend",props:{crecommends:Array}},y=_,C=(o("0c7b"),Object(h["a"])(y,w,g,!1,null,null,null)),k=C.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"feature"}},[n("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[n("img",{attrs:{src:o("5cbe"),alt:"1111"}})])])}],T={name:"HomeFeature"},L=T,O=(o("5f8b"),Object(h["a"])(L,x,$,!1,null,null,null)),j=O.exports,H=o("7f9e"),S=o("6d71"),A=o("5d17"),I=o("725f"),E=o("9977"),G={name:"Home",components:{NavBar:s["a"],HomeSwiper:v,HomeRecommend:k,HomeFeature:j,TabControl:H["a"],GoodsList:S["a"],Scroll:A["a"],BackTop:I["a"]},data:function(){return{banners:null,recommends:null,goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},showtype:"pop",isShow:!1,tabControlOffsetTop:0,isTabControlShow:!1,rememberPositionY:0}},created:function(){this.getHomeMultidata_methods(),this.getHomeGoods_methods("pop"),this.getHomeGoods_methods("new"),this.getHomeGoods_methods("sell")},mounted:function(){var t=Object(E["a"])(this.$refs.scroll.refresh,50);this.$bus.$on("itemImageLoad",(function(){t()}))},activated:function(){this.$refs.scroll.scrollTo(0,this.rememberPositionY,1),this.$refs.scroll.refresh()},deactivated:function(){this.rememberPositionY=this.$refs.scroll.scroll.y},methods:{tabClick:function(t){switch(t){case 0:this.showtype="pop";break;case 1:this.showtype="new";break;case 2:this.showtype="sell";break}this.$refs.tabControl_1.activeIndex=t,this.$refs.tabControl_2.activeIndex=t},backTop:function(){this.$refs.scroll.scrollTo(0,0)},showBackTop:function(t){this.isShow=-t.y>1e3,this.isTabControlShow=-t.y>this.tabControlOffsetTop},pullUpLoad:function(){this.getHomeGoods_methods(this.showtype)},swiperImageLoad:function(){this.tabControlOffsetTop=this.$refs.tabControl_2.$el.offsetTop},getHomeMultidata_methods:function(){var t=this;c().then((function(e){t.banners=e.data.banner.list,t.recommends=e.data.recommend.list}))},getHomeGoods_methods:function(t){var e=this,o=this.goods[t].page+1;l(t,o).then((function(o){var n;(n=e.goods[t].list).push.apply(n,Object(r["a"])(o.data.list)),e.goods[t].page+=1,e.$refs.scroll.scroll.finishPullUp()}))}}},P=G,U=(o("417e"),Object(h["a"])(P,n,a,!1,null,"71ba35b1",null));e["default"]=U.exports}}]);
//# sourceMappingURL=chunk-351cf974.9e3228db.js.map