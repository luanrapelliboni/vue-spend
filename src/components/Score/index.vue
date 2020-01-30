<template>
  <div class="score">{{formattedNumber}}</div>
</template>

<script>
import { mapState } from "vuex";
import "./style.scss";
export default {
  name: "Score",
  computed: mapState({
    formattedNumber: state => {
      let total = state.score.total;
      return (
        total.toLocaleString("en", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0
        }) + " left"
      );
    }
  })
};
</script>

