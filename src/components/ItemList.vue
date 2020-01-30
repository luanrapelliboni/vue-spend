<template>
  <div class="items" v-if="items.length">
    <Item v-for="item in items" :key="item.id" :obj="item" />
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
import { mapState } from "vuex";

export default {
  name: "ItemList",
  components: {
    Item
  },
  computed: mapState({
    items: state => state.items.all
  }),
  created() {
    this.$store.dispatch("items/getAllItems");
  }
};
</script>

<style lang="scss">
.items {
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 10px;
}
</style>
