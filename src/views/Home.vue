<template>
  <div class="main-container">
    <Header />
    <Brand />
    <Score />
    <ItemList />
  </div>
</template>
<style lang="scss">
.main-container {
  font-family: "Roboto", sans-serif;
}
</style>
<script>
import Header from "@/components/Header.vue";
import Brand from "@/components/Brand.vue";
import Score from "@/components/Score.vue";
import ItemList from "@/components/ItemList.vue";

export default {
  name: "home",
  components: {
    Header,
    Brand,
    Score,
    ItemList
  }
};
</script>
