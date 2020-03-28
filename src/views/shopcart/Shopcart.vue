<template>
  <div>
    <nav-bar class="cart-nav-bar"><div slot="center">购物车<span class="goodsNumber" >(共{{goodsNumber}}件宝贝)</span></div></nav-bar>
    <!-- 商品区 -->
    <shop-cart-list v-if="this.$store.state.cartList.length>0"></shop-cart-list>
     
  <p class="empty">您的购物车空空如也!<br/><br/>
  快去购物吧！
  </p>

    <!-- 控制区 -->
    <shop-cart-control></shop-cart-control>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import ShopCartList from './childCpn/ShopCartList'
import ShopCartControl from './childCpn/ShopCartControl'

export default {
  name: 'Shopcart',
  components: {
    NavBar,
    ShopCartList,
    ShopCartControl
  },
  data() {
    return {
      
    }
  },
  mounted() {
    console.log(this.$store.state.cartList[0].check);
  },
  computed: {
    goodsNumber() {
      return this.$store.state.cartList.length
      console.log(this.$store.state.cartList);
      
    }
  }
}
</script>

<style scoped>
  .cart-nav-bar {
    background-color: var(--color-tint);
    color: white;
    position: relative;
    z-index: 9
  }
.center{
  float: left;
}
  .goodsNumber{
    font-size: 13px;
  }
  
  /* 空购物车 */
.empty{
  font-size: 15px;
  text-align: center;
  margin: 2rem auto;
}
</style>