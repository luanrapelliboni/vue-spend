<template>
  <div class="item">
    <img :src="obj.image" class="item__image" />
    <div class="item__title">{{ obj.title }}</div>
    <div class="item__price">{{ formattedPrice }}</div>
    <div class="item__sell">
      <button
        v-bind:class="{
          'item__sell__button':true,
          'item__sell__button--disabled':(quantity === 0),
          'item__sell__button--danger':(quantity > 0)
        }"
        @click="sell(obj)"
      >Sell</button>
      <input readonly pattern="\d*" type="number" class="item__sell__input" :value="quantity" />
      <button
        v-bind:class="{
          'item__sell__button':true,
          'item__sell__button--disabled':(obj.price > totalScore)
        }"
        @click="buy(obj)"
      >Buy</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Item",
  data: function() {
    return {
      quantity: 0
    };
  },
  props: {
    obj: Object
  },
  computed: {
    formattedPrice: function() {
      return this.obj.price.toLocaleString("en", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
      });
    },
    ...mapState({
      totalScore: state => state.score.total
    })
  },
  methods: {
    buy(obj) {
      if (obj.price <= this.totalScore) {
        this.quantity = this.quantity + 1;
        this.$store.dispatch("score/sub", {
          price: obj.price,
          quantity: this.quantity
        });
      }
    },
    sell(obj) {
      if (this.quantity - 1 >= 0) {
        this.quantity = this.quantity - 1;
        this.$store.dispatch("score/sum", {
          price: obj.price,
          quantity: this.quantity
        });
      }
    }
  }
};
</script>

<style lang="scss">
.item {
  max-width: 100%;
  background-color: white;
  text-align: center;
  font-size: 18px;
  padding: 20px 15px;
  .item__image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 110px;
    object-fit: contain;
    padding: 15px 10px 10px;
  }
  .item__title {
    font-size: 22px;
    font-weight: bold;
  }
  .item__price {
    font-size: 20px;
    color: rgb(46, 204, 113);
  }
  .item__sell {
    font-size: 20px;
    font-weight: bold;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 25px;
    gap: 10px;
    .item__sell__input {
      max-width: 100px;
      text-align: center;
      font-size: 16px;
      color: rgb(51, 51, 51);
      font-family: Roboto, sans-serif;
      -webkit-appearance: none;
      padding: 9px 12px;
      border-radius: 3px;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(178, 190, 195);
      border-image: initial;
    }
    .item__sell__button {
      font-size: 16px;
      cursor: pointer;
      text-align: center;
      background-color: rgb(5, 196, 107);
      color: white;
      font-weight: bold;
      user-select: none;
      touch-action: manipulation;
      padding: 9px 12px;
      border-radius: 3px;
      border-width: initial;
      border-style: none;
      border-color: initial;
      border-image: initial;
    }
    .item__sell__button--danger {
      background-color: rgb(245, 59, 87);
    }
    .item__sell__button--disabled {
      color: rgb(51, 51, 51);
      cursor: auto;
      background-color: rgb(241, 242, 246);
    }
  }
}
</style>
