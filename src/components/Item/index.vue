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
import "./style.scss";

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

        this.$store.dispatch("scoreboard/addItem", {
          item: obj,
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

        this.$store.dispatch("scoreboard/removeItem", {
          item: obj,
          quantity: this.quantity
        });
      }
    }
  }
};
</script>

