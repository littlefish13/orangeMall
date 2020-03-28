<template>



<div class="listItem">



<van-swipe-cell>

  <div id="item">


    <div class="item-button">

      <van-checkbox 
      v-model="cartItem.check"
      checked-color="orange"  @change='getChange()' @click="btnClick()">
</van-checkbox>


    </div>
    <div class="item-image">
      <!-- 加http:是为了打包后能正常引用 -->
      <img :src="'http:' + cartItem.image" alt="">
    </div>
    <div class="item-main">
      <div class="item-title"><b>{{cartItem.title}}</b></div>
      <div class="item-desc">{{cartItem.desc}}</div>
      <div class="item-pc">
        <span class="item-price">{{cartItem.realPrice | showPrice}}</span>
        
        <!-- <span class="item-counter">
          <img src="~assets/img/cart/minus32.png" alt="" class="minus" @click="minusCounter">
          {{cartItem.counter}}
          <img src="~assets/img/cart/plus32.png" alt="" class="plus" @click="plusCounter">
        </span> -->
<van-stepper v-model="value" integer @plus='plusCounter(cartItem.id)' @minus='minusCounter(cartItem.id)' @change='Change()'/>
             
      </div>     
    </div>
  </div>

<!-- 删除滑动 -->
     <van-button
    slot="right"
    square
    text="删除"
    type="danger"
    class="delete-button"
    @click='del(cartItem.id,index)'
    
  />
  

</van-swipe-cell>





</div>

</template>

<script>
export default {
  name: 'ShopCartListItem',
  props: {
    cartItem: Object,
    index: Number,
    cartList:Array
  },
  data() {
    return {
      check: true,
      data:this.$store.state.cartList,
      allChecked:true,
      counter:1,
      value:1
    }
  },
  mounted() {
    console.log(this.cartItem);
    console.log(this.index);
    this.value=this.cartItem.counter
  },

  methods: {
    // -按钮
    minusCounter() {
        console.log(this.cartItem);
      if(this.cartItem.counter > 1) {
        this.cartItem.counter -= 1
      }else {
        //添加了个删除功能
        this.$emit('removeItem')
      }
      this.cartItem.counter=this.value
    },
    // +按钮
    plusCounter() {
      this.cartItem.counter += 1
      this.cartItem.counter=this.value
    },
    btnClick() {
      this.$store.commit('changeCheck', this.index)
    },

// checkbox
getChange(){
  console.log(this.cartItem);
this.check=this.cartItem.check
    this.cartItem.check=!this.cartItem.check

this.$store.commit('changeCheck', this.index)
  console.log(this.cartItem.check);
    console.log(this.check);
},


del(id,i){
this.$emit('removeItem')
},

  Change(){
    this.cartItem.counter=this.value
  }
  },
 computed: {

 },
  //过滤器
  filters: {
    showPrice(price) {
      // 数字才能用toFixed方法
      return "￥" + parseFloat(price).toFixed(2)
    }
  }
}
</script>

<style scoped>
.listItem{
  border-radius: 10px;
  /* border: 1px solid rgb(223, 223, 223); */
  margin: 10px;
    box-shadow: 3px 3px 6px 3px rgba(150, 150, 150, 0.3) ;

}
  #item {
    display: flex;
    justify-content: space-around;
    font-size: 10px;
    padding: 0.8em;


  }

  .item-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .item-button .button-container {
    border: 1px solid rgb(197, 197, 197);
    border-radius: 50%;
  }
  /* 被选中的按钮样式 */
  .check {
    background-color: var(--color-high-text);
  }

  .item-image {
    margin-left: 0.5em
  }
  .item-image img {
    width: 7em;
    height: 9em;
    border-radius: 0.5em;
  }

  .item-main {
    margin-left: 1em;
    /* 纵向flex布局 */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .item-main .item-title {
    /* 必须要有固定宽度 */
    width: 13em;
    /* 避免重叠现象 */
    overflow: hidden;
    /* 多行文本只按一行显示，超出文本省略号 */
    text-overflow: ellipsis;
    /* 禁止自动换行 */
    white-space: nowrap;
    font-size: 1.4em;
  }
  .item-main .item-desc {
    /* 必须要有固定宽度 */
    width: 13em;
    /* 避免重叠现象 */
    overflow: hidden;
    /* 多行文本只按一行显示，超出文本省略号 */
    text-overflow: ellipsis;
    /* 禁止自动换行 */
    white-space: nowrap;
    font-size: 1.3em;
  }

  .item-pc {
    display: flex;
    justify-content: space-between
  }
  .item-pc .item-price {
    color: red;
    font-size: 1.3em;
  }
  .item-pc .item-counter {
    font-size: 1.5em;
  }
  .item-pc .item-counter .minus {
    width: 1.4em;
    height: 1.4em;
    position: relative;
    top: 0.35em;
  }
  .item-pc .item-counter .plus {
    width: 1.4em;
    height: 1.4em;
    position: relative;
    top: 0.35em;
  }
  


  /* 删除按钮 */

.delete-button {
  /* position: relative; */
  width: 60px;
  height:100%;
  background-color: orange;
  border: none;
  font-size: 13px;
    border-radius:0 10px 10px 0;
}




</style>