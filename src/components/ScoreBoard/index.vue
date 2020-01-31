<template>
  <div class="scoreboard"  v-if="items.length">
    <div class="scoreboard__title">Your Shopping Spree</div>
    <div class="scoreboard__wrapper">
      <div v-for="item in items" :key="item.id" class="scoreboard__wrapper__item">
        <img
          :src="item.image"
          class="scoreboard__wrapper__item__image"
        />
        <div class="scoreboard__wrapper__item__title">{{item.title}}</div>
        <div class="scoreboard__wrapper__item__quantity">x {{item.quantity}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import "./style.scss";
export default {
  name: "ScoreBoard",
  computed: mapState({
     items: state => {
      let list = state.scoreboard.all;
      return list.sort((a, b) => a.id - b.id);
     }
  })
};
</script>


