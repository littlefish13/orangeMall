<template>
  <div class="bottom-bar">
    <!-- <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy" @click="toBuy">购买</div>
    </div> -->
    
<van-popup v-model="show"
 position="bottom"
  
  :style="{ height: '48.5%' }"
  closeable
  close-icon="close"
  close-on-click-overlay=true



>
<div class="cart_info">
<div class="cart_info_img"><img :src="'http:' + swiperImage[0]" alt=""></div>
<div class="cart_goods_info">
  <!-- <p class="cart_info_price">￥{{this.data.price}}</p> -->
  <p class="cart_store">库存12345件<br/>请选择商品属性</p>
</div>
  <p class="cart_num">购买数量</p>
  <van-stepper v-model="value" @change='change' integer/>

  <div class="choose_info" v-for="(item,index) of chooseInfo" :key="index">
<p class="size">{{item.label}}</p>

<p class="item_label" v-for="(v,i) in item.list" :key="i">
  <!-- <p class="inner_v" v-for="(inner_v,inner_i) in v.list" :key="inner_i"> -->
<a class="size_item">{{v.name}}</a>
<!-- </p> -->
</p>
<!-- <p class="age">年龄</p>
<span  class="age_item">5岁以下</span>
<span  class="age_item">3岁以下</span> -->


  </div>



</div>


</van-popup>


<van-overlay :show="show" @click="show = false" />
<div class="add_cart">
 <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" />
            <van-goods-action-icon icon="shop-o" text="店铺" info="" />
            <van-goods-action-icon icon="star-o" text="收藏" />
            <van-goods-action-button type="warning" text="加入购物车" @click="addToCart" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
</div>


  </div>
</template>

<script>

	export default {
    name: "DetailBottomBar",
      props: {
    swiperImage: Array,
    allData:Object
  },
    data() {
      return {
        show: false,
        chooseInfo:[],
        i:1
      }
    },
    methods: {
     
      addToCart() {
        
        if(this.show){
  this.$emit('addToCart',this.i)

  this.show=false
        }else{
    this.show=true
        }
  
        
      },
      toBuy() {
        // this.$toast('对不起,还未开发此功能',1500)
      },

change(){
this.i=Number(this.value)
console.log(this.i);

}





    },





    mounted() {
      console.log(this.swiperImage);
      console.log(this.allData);
      this.chooseInfo=this.allData.skuInfo.props
      console.log(this.chooseInfo);
      
    },
	}
</script>

<style scoped>
  .bottom-bar {
    height: 58px;
    position: fixed;
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    text-align: center;
  }

  .bar-item {
    flex: 1;
    display: flex;
  }

  .bar-item>div {
    flex: 1;
  }

  .bar-left .text {
    font-size: 13px;
  }

  .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
  }

  .bar-left .service {
    background-position:0 -54px;
  }

  .bar-left .shop {
    background-position:0 -98px;
  }

  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 58px;
  }

  .bar-right .cart {
    background-color: #ffe817;
    color: #333;
  }

  .bar-right .buy {
    background-color: #f69;
  }






/* 加入购物车 */
.total{
  padding: 0.3rem;
  font-size: 0.3rem;
vertical-align: middle;
   display: inline-block;
 
}
   .total_price{
width: 1.5rem;
  color: red;
  display: inline-block;
  vertical-align: top;
  font-size: 0.3rem;
  }
.van-button__text{
  display: inline-block;
}










 /* 购物车选项 */

 /* .choose_info{
   display: flex;
   flex-wrap: wrap;
 } */
.cart_info{
  width: 100%;
  height: 100%;

}
.cart_info .cart_info_img img{
  width:100%;
  left: -40%;
  position: relative;
 height: 140%;
     border: 3px solid rgb(190, 187, 187);

 
}
.cart_info .cart_info_img{
    display: inline-block;
    width: 28%;
    height: 28%;
   
     
}

.cart_goods_info{
  display: inline-block;
  width: 30%;
  
  margin-left: 70rpx;
  height: 0.3rem;
  line-height: 30rpx;
  
}
.cart_goods_info .cart_info_price{
  color: red;
  font-size: 32rpx;
}

.cart_goods_info .cart_store{
    font-size: 13px;
margin-left: -40px;
}

.cart_num{
  font-size: 26rpx;
  width: 30%;
  margin: 23px 0 0px 0px;
  
}
.van-stepper{
  float: right;
    width: 30%;
    position: relative;
    top:-22px;
}


.size{
 /* width: 50px; */
  display: inline-block;
 font-size: 26rpx;
 margin-left: 5%;
 margin-top: 1.7%;
}

.size_item{
 
  border-radius: 15px;
  background-color: orange;
  font-size:12px;
  text-align: center; 
  display: inline-block;
  padding: 6px 10px;
  margin:3px; 
  color: white;
}
/* .size_item:nth-of-type(1){
  margin-left: 300rpx;
} */

.age{
   font-size: 0.26rem;
 margin: 30rpx 0 -5rpx 35rpx;
 
}

.age_item{
    border-radius: 15rpx;
  background-color: orange;
  font-size:23rpx;

  text-align: center; 
  display: inline-block;
  padding: 10rpx 30rpx;
  margin-left:30rpx; 
  color: white;
}

.age_item:nth-of-type(1){
  margin-left: 30rpx;
}
.van-overlay{
  height: 93%;

}
.van-goods-action{
  z-index: 999999;
}

/* .item_label{
display: flex;
flex-wrap: wrap;
justify-content: space-around;
flex-direction: row;
} */
.choose_info{
  padding:0 10px ;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
flex-direction: row;
width: 100%;
height: 100px;


}

</style>
