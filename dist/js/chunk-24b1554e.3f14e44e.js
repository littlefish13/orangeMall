(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24b1554e"],{"05d3":function(t,s,e){"use strict";var a=e("1aa4"),i=e.n(a);i.a},1148:function(t,s,e){"use strict";var a=e("a691"),i=e("1d80");t.exports="".repeat||function(t){var s=String(i(this)),e="",o=a(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(s+=s))1&o&&(e+=s);return e}},"13a3":function(t,s,e){},1844:function(t,s,e){},"1aa4":function(t,s,e){},"1ac5":function(t,s,e){"use strict";var a=e("55d6"),i=e.n(a);i.a},3415:function(t,s,e){"use strict";var a=e("13a3"),i=e.n(a);i.a},"408a":function(t,s,e){var a=e("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=a(t))throw TypeError("Incorrect invocation");return+t}},"4e9a":function(t,s,e){"use strict";var a=e("9fd7"),i=e.n(a);i.a},"55d6":function(t,s,e){},"5b9a":function(t,s,e){},"6ab7":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"detail"}},[e("detail-nav-bar",{ref:"navbar",staticClass:"nav-bar",on:{navItemClick:t.navItemClick}}),e("scroll",{ref:"scroll",staticClass:"wrapper",attrs:{probeType:3},on:{getPosition:t.getPosition}},[e("detail-swiper",{attrs:{swiperImage:t.swiperImage}}),e("detail-goods-info",{attrs:{goods:t.goods}}),e("detail-shop-info",{attrs:{shop:t.shop}}),e("detail-goods-specific",{attrs:{detailInfo:t.detailInfo},on:{goodsImageLoad:t.goodsImageLoad}}),e("detail-param-info",{ref:"param",attrs:{paramInfo:t.paramInfo}}),e("detail-comment-info",{ref:"comment",attrs:{commentInfo:t.commentInfo}}),e("goods-list",{ref:"recommend",attrs:{goods:t.recommend}})],1),e("detail-bottom-bar",{attrs:{swiperImage:t.swiperImage,allData:t.allData},on:{addToCart:t.addCart}}),e("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],nativeOn:{click:function(s){return t.backTop(s)}}})],1)},i=[],o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:""}},[a("nav-bar",[a("div",{staticClass:"left",attrs:{slot:"left"},on:{click:t.backHome},slot:"left"},[a("img",{attrs:{src:e("7a74"),alt:""}})]),a("div",{staticClass:"center",attrs:{slot:"center"},slot:"center"},t._l(t.titles,(function(s,e){return a("div",{key:e,staticClass:"center-item",class:{active:e===t.activeIndex},on:{click:function(s){return t.itemClick(e)}}},[t._v(t._s(s)+" ")])})),0)])],1)},n=[],r=e("a7ac"),c={name:"DetailNavBar",props:{},data:function(){return{titles:["商品","参数","评论","推荐"],activeIndex:0}},components:{NavBar:r["a"]},methods:{itemClick:function(t){this.activeIndex=t,this.$emit("navItemClick",t)},backHome:function(){this.$router.back()}}},l=c,d=(e("3415"),e("2877")),f=Object(d["a"])(l,o,n,!1,null,"58967e6b",null),u=f.exports,m=e("5d17");e("b0c0");function h(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}var p=e("1bab");function v(t){return Object(p["a"])({url:"/detail",params:{iid:t}})}function g(){return Object(p["a"])({url:"/recommend"})}var _=function t(s,e,a){h(this,t),this.title=s.title,this.desc=s.desc,this.newPrice=s.price,this.oldPrice=s.oldPrice,this.discount=s.discountDesc,this.discountBgColor=s.discountBgColor,this.columns=e,this.services=a,this.realPrice=s.lowNowPrice},b=function t(s){h(this,t),this.logo=s.shopLogo,this.name=s.name,this.fans=s.cFans,this.sells=s.cSells,this.score=s.score,this.goodsCount=s.cGoods},I=function t(s,e){h(this,t),this.image=s.images?s.images[0]:"",this.infos=s.set,this.sizes=e.tables},C=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.swiperImage,(function(t){return e("div",{key:t.index,staticClass:"swiper-slide"},[e("img",{attrs:{src:"http:"+t,alt:""}})])})),0),e("div",{staticClass:"swiper-pagination"})])},w=[],x=e("b619"),y={name:"DetailSwiper",data:function(){return{}},props:{swiperImage:Array},mounted:function(){new x["a"](".swiper-container",{autoplay:{disableOnInteraction:!1,delay:2e3},observer:!0,pagination:{el:".swiper-pagination",clickable:!0}})}},k=y,D=(e("1ac5"),Object(d["a"])(k,C,w,!1,null,"67ee88cc",null)),$=D.exports,O=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.goods).length?e("div",{staticClass:"info"},[e("div",{staticClass:"info-title"},[e("b",[t._v(t._s(t.goods.title))])]),e("div",{staticClass:"info-price"},[e("span",{staticClass:"new"},[t._v(t._s(t.goods.newPrice))]),e("span",{staticClass:"old"},[t._v(t._s(t.goods.oldPrice))]),e("span",{staticClass:"discount",style:"background-color: "+t.goods.discountBgColor},[t._v(t._s(t.goods.discount))])]),e("div",{staticClass:"info-base"},[e("span",[t._v(t._s(t.goods.columns[0]))]),e("span",[t._v(t._s(t.goods.columns[1]))]),e("span",[t._v(t._s(t.goods.services[t.goods.services.length-1].name))])]),e("div",{staticClass:"info-services"},t._l(t.goods.services.length-1,(function(s){return e("span",{key:s,staticClass:"info-services-item"},[e("img",{attrs:{src:"http:"+t.goods.services[s-1].icon}}),e("span",[t._v(t._s(t.goods.services[s-1].name))])])})),0)]):t._e()},j=[],P={name:"DetailGoodsInfo",props:{goods:{type:Object,default:function(){}}}},T=P,S=(e("8762"),Object(d["a"])(T,O,j,!1,null,"32f592cd",null)),Y=S.exports,B=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shop-info"},[e("div",{staticClass:"shop-top"},[e("img",{attrs:{src:"http:"+t.shop.logo}}),e("span",{staticClass:"title"},[t._v(t._s(t.shop.name))])]),e("div",{staticClass:"shop-middle"},[e("div",{staticClass:"shop-middle-item shop-middle-left"},[e("div",{staticClass:"info-sells"},[e("div",{staticClass:"sells-count"},[t._v(" "+t._s(t._f("sellCountFilter")(t.shop.sells))+" ")]),e("div",{staticClass:"sells-text"},[t._v("总销量")])]),e("div",{staticClass:"info-goods"},[e("div",{staticClass:"goods-count"},[t._v(" "+t._s(t.shop.goodsCount)+" ")]),e("div",{staticClass:"goods-text"},[t._v("全部宝贝")])])]),e("div",{staticClass:"shop-middle-item shop-middle-right"},[e("table",t._l(t.shop.score,(function(s,a){return e("tr",{key:a},[e("td",[t._v(t._s(s.name))]),e("td",{staticClass:"score",class:{"score-better":s.isBetter}},[t._v(t._s(s.score))]),e("td",{staticClass:"better",class:{"better-more":s.isBetter}},[e("span",[t._v(t._s(s.isBetter?"高":"低"))])])])})),0)])]),t._m(0)])},E=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shop-bottom"},[e("div",{staticClass:"enter-shop"},[t._v("进店逛逛")])])}],F=(e("b680"),{name:"DetailShopInfo",props:{shop:{type:Object,default:function(){return{}}}},filters:{sellCountFilter:function(t){return t<1e4?t:(t/1e4).toFixed(1)+"万"}}}),N=F,L=(e("8643"),Object(d["a"])(N,B,E,!1,null,"4cb96fba",null)),z=L.exports,G=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"goods-specific"}},[e("div",{staticClass:"goods-desc"},[e("span",[t._v(t._s(t.goodsDesc))])]),e("div",{staticClass:"goods-image"},t._l(t.goodsImage,(function(s,a){return e("div",{key:a,staticClass:"goods-image-item"},[e("div",[t._v(t._s(s.key))]),t._l(s.list,(function(s,a){return e("div",{key:a},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http:"+s,expression:"'http:' + image"}],attrs:{alt:""},on:{load:t.imageLoad}})])}))],2)})),0)])},R=[],M=e("9977"),A={name:"DetailGoodsSpecific",props:{detailInfo:Object},computed:{goodsDesc:function(){return this.detailInfo.desc},goodsImage:function(){return this.detailInfo.detailImage}},methods:{imageLoad:function(){this.$emit("goodsImageLoad")}}},H=A,J=(e("ffaf"),Object(d["a"])(H,G,R,!1,null,"1500eb69",null)),W=J.exports,q=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.paramInfo).length?e("div",{staticClass:"param-info"},[t._l(t.paramInfo.sizes,(function(s,a){return e("table",{key:a,staticClass:"info-size"},t._l(s,(function(s,a){return e("tr",{key:a},t._l(s,(function(s,a){return e("td",{key:a},[t._v(t._s(s))])})),0)})),0)})),e("table",{staticClass:"info-param"},t._l(t.paramInfo.infos,(function(s,a){return e("tr",{key:a},[e("td",{staticClass:"info-param-key"},[t._v(t._s(s.key))]),e("td",{staticClass:"param-value"},[t._v(t._s(s.value))])])})),0),0!==t.paramInfo.image.length?e("div",{staticClass:"info-img"},[e("img",{attrs:{src:t.paramInfo.image,alt:""}})]):t._e()],2):t._e()},K=[],Q={name:"DetailParamInfo",props:{paramInfo:{type:Object,default:function(){return{}}}}},U=Q,V=(e("b893"),Object(d["a"])(U,q,K,!1,null,"477e18af",null)),X=V.exports,Z=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[0!==Object.keys(t.commentInfo).length?e("div",{staticClass:"comment-info"},[t._m(0),e("div",{staticClass:"info-user"},[e("img",{attrs:{src:"http:"+t.commentInfo.user.avatar,alt:""}}),e("span",[t._v(t._s(t.commentInfo.user.uname))])]),e("div",{staticClass:"info-detail"},[e("p",[t._v(t._s(t.commentInfo.content))]),e("div",{staticClass:"info-other"},[e("span",{staticClass:"date"},[t._v(t._s(t._f("showDate")(t.commentInfo.created)))]),e("span",[t._v(t._s(t.commentInfo.style))])]),e("div",{staticClass:"info-imgs"},t._l(t.commentInfo.images,(function(t,s){return e("img",{key:s,attrs:{src:"http:"+t}})})),0)])]):t._e()])},tt=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"info-header"},[e("div",{staticClass:"header-title"},[t._v("用户评价")]),e("div",{staticClass:"header-more"},[t._v(" 更多 "),e("i",{staticClass:"arrow-right"})])])}],st={name:"DetailCommentInfo",props:{commentInfo:{type:Object}},filters:{showDate:function(t){var s=new Date(1e3*t);return Object(M["b"])(s,"yyyy-MM-dd")}}},et=st,at=(e("8843"),Object(d["a"])(et,Z,tt,!1,null,"3c8dfbb5",null)),it=at.exports,ot=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bottom-bar"},[e("van-popup",{style:{height:"48.5%"},attrs:{position:"bottom",closeable:"","close-icon":"close","close-on-click-overlay":"true"},model:{value:t.show,callback:function(s){t.show=s},expression:"show"}},[e("div",{staticClass:"cart_info"},[e("div",{staticClass:"cart_info_img"},[e("img",{attrs:{src:"http:"+t.swiperImage[0],alt:""}})]),e("div",{staticClass:"cart_goods_info"},[e("p",{staticClass:"cart_store"},[t._v("库存12345件"),e("br"),t._v("请选择商品属性")])]),e("p",{staticClass:"cart_num"},[t._v("购买数量")]),e("van-stepper",{attrs:{integer:""},on:{change:t.change},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}}),t._l(t.chooseInfo,(function(s,a){return e("div",{key:a,staticClass:"choose_info"},[e("p",{staticClass:"size"},[t._v(t._s(s.label))]),t._l(s.list,(function(s,a){return e("p",{key:a,staticClass:"item_label"},[e("a",{staticClass:"size_item"},[t._v(t._s(s.name))])])}))],2)}))],2)]),e("van-overlay",{attrs:{show:t.show},on:{click:function(s){t.show=!1}}}),e("div",{staticClass:"add_cart"},[e("van-goods-action",[e("van-goods-action-icon",{attrs:{icon:"chat-o",text:"客服"}}),e("van-goods-action-icon",{attrs:{icon:"shop-o",text:"店铺",info:""}}),e("van-goods-action-icon",{attrs:{icon:"star-o",text:"收藏"}}),e("van-goods-action-button",{attrs:{type:"warning",text:"加入购物车"},on:{click:t.addToCart}}),e("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"}})],1)],1)],1)},nt=[],rt=(e("a9e3"),{name:"DetailBottomBar",props:{swiperImage:Array,allData:Object},data:function(){return{show:!1,chooseInfo:[],i:1}},methods:{addToCart:function(){this.show?(this.$emit("addToCart",this.i),this.show=!1):this.show=!0},toBuy:function(){},change:function(){this.i=Number(this.value),console.log(this.i)}},mounted:function(){console.log(this.swiperImage),console.log(this.allData),this.chooseInfo=this.allData.skuInfo.props,console.log(this.chooseInfo)}}),ct=rt,lt=(e("4e9a"),Object(d["a"])(ct,ot,nt,!1,null,"16893026",null)),dt=lt.exports,ft=e("6d71"),ut=e("725f"),mt={name:"Detail",data:function(){return{swiperImage:[],goods:{},shop:{},detailInfo:{},paramInfo:{},commentInfo:{},recommend:[],partsY:[0],getPartsY:null,currentIndex:0,isShow:!1}},components:{DetailNavBar:u,DetailSwiper:$,DetailGoodsInfo:Y,DetailShopInfo:z,DetailGoodsSpecific:W,DetailParamInfo:X,DetailCommentInfo:it,DetailBottomBar:dt,GoodsList:ft["a"],Scroll:m["a"],BackTop:ut["a"]},computed:{itemId:function(){return this.$route.params.id}},methods:{getDetail_methods:function(){var t=this;return v(this.itemId).then((function(s){var e=s.result;t.swiperImage=e.itemInfo.topImages,t.goods=new _(e.itemInfo,e.columns,e.shopInfo.services),t.shop=new b(e.shopInfo),t.detailInfo=e.detailInfo,t.paramInfo=new I(e.itemParams.info,e.itemParams.rule),e.rate.list.length>0&&(t.commentInfo=e.rate.list[0],console.log(e.rate.list)),t.allData=e,console.log(t.allData)}))},getRecommend_methods:function(){var t=this;return g().then((function(s){t.recommend=s.data.list}))},goodsImageLoad:function(){this.$refs.scroll.refresh(),this.getPartsY()},navItemClick:function(t){0==t?this.$refs.scroll.scrollTo(0,0):this.$refs.scroll.scrollTo(0,-(this.partsY[t]-44))},getPosition:function(t){var s=-t.y;0!==this.currentIndex&&s>=0&&s<this.partsY[1]-44&&(this.currentIndex=0,this.$refs.navbar.activeIndex=0),1!==this.currentIndex&&s>=this.partsY[1]-44&&s<this.partsY[2]-44&&(this.currentIndex=1,this.$refs.navbar.activeIndex=1),2!==this.currentIndex&&s>=this.partsY[2]-44&&s<this.partsY[3]-44&&(this.currentIndex=2,this.$refs.navbar.activeIndex=2),3!==this.currentIndex&&s>=this.partsY[3]-44&&(this.currentIndex=3,this.$refs.navbar.activeIndex=3),this.isShow=s>1e3},backTop:function(){this.$refs.scroll.scrollTo(0,0)},addCart:function(t){var s=this,e={};e.id=this.itemId,e.title=this.goods.title,e.desc=this.goods.desc,e.realPrice=this.goods.realPrice,e.image=this.swiperImage[0],e.counter=t,this.$store.dispatch("addToCart",e).then((function(t){s.$toast(t,1500)}))}},created:function(){var t=this;this.getDetail_methods(),this.getRecommend_methods(),this.getPartsY=Object(M["a"])((function(){t.partsY=[],t.partsY.push(0),t.partsY.push(t.$refs.param.$el.offsetTop),t.partsY.push(t.$refs.comment.$el.offsetTop),t.partsY.push(t.$refs.recommend.$el.offsetTop)}))},mounted:function(){console.log(this.detailInfo)}},ht=mt,pt=(e("05d3"),Object(d["a"])(ht,a,i,!1,null,"4cff9417",null));s["default"]=pt.exports},"7a74":function(t,s,e){t.exports=e.p+"img/back.26df9036.svg"},"7e12":function(t,s,e){},8643:function(t,s,e){"use strict";var a=e("99e9"),i=e.n(a);i.a},8762:function(t,s,e){"use strict";var a=e("7e12"),i=e.n(a);i.a},8843:function(t,s,e){"use strict";var a=e("1844"),i=e.n(a);i.a},"99e9":function(t,s,e){},"9fd7":function(t,s,e){},b0c0:function(t,s,e){var a=e("83ab"),i=e("9bf2").f,o=Function.prototype,n=o.toString,r=/^\s*function ([^ (]*)/,c="name";!a||c in o||i(o,c,{configurable:!0,get:function(){try{return n.call(this).match(r)[1]}catch(t){return""}}})},b680:function(t,s,e){"use strict";var a=e("23e7"),i=e("a691"),o=e("408a"),n=e("1148"),r=e("d039"),c=1..toFixed,l=Math.floor,d=function(t,s,e){return 0===s?e:s%2===1?d(t,s-1,e*t):d(t*t,s/2,e)},f=function(t){var s=0,e=t;while(e>=4096)s+=12,e/=4096;while(e>=2)s+=1,e/=2;return s},u=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){c.call({})}));a({target:"Number",proto:!0,forced:u},{toFixed:function(t){var s,e,a,r,c=o(this),u=i(t),m=[0,0,0,0,0,0],h="",p="0",v=function(t,s){var e=-1,a=s;while(++e<6)a+=t*m[e],m[e]=a%1e7,a=l(a/1e7)},g=function(t){var s=6,e=0;while(--s>=0)e+=m[s],m[s]=l(e/t),e=e%t*1e7},_=function(){var t=6,s="";while(--t>=0)if(""!==s||0===t||0!==m[t]){var e=String(m[t]);s=""===s?e:s+n.call("0",7-e.length)+e}return s};if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(h="-",c=-c),c>1e-21)if(s=f(c*d(2,69,1))-69,e=s<0?c*d(2,-s,1):c/d(2,s,1),e*=4503599627370496,s=52-s,s>0){v(0,e),a=u;while(a>=7)v(1e7,0),a-=7;v(d(10,a,1),0),a=s-1;while(a>=23)g(1<<23),a-=23;g(1<<a),v(1,1),g(2),p=_()}else v(0,e),v(1<<-s,0),p=_()+n.call("0",u);return u>0?(r=p.length,p=h+(r<=u?"0."+n.call("0",u-r)+p:p.slice(0,r-u)+"."+p.slice(r-u))):p=h+p,p}})},b893:function(t,s,e){"use strict";var a=e("5b9a"),i=e.n(a);i.a},c3e7:function(t,s,e){},ffaf:function(t,s,e){"use strict";var a=e("c3e7"),i=e.n(a);i.a}}]);
//# sourceMappingURL=chunk-24b1554e.3f14e44e.js.map