<template>
  <div class="score">{{formattedNumber}}</div>
</template>

<script>
import { mapState } from "vuex";

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

<style lang="scss">
$bgColor: rgb(46, 204, 113);
$foreColor: #FFF;

.score {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  color: $foreColor;
  background-color: $bgColor;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  top: 0px;
  position: sticky;
  padding: 20px;
}
</style>
