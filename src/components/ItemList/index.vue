<template>
  <div class="items" v-if="items.length">
    <Item v-for="item in items" :key="item.id" :obj="item" />
  </div>
</template>

<script>
import Item from "@/components/Item";
import { mapState } from "vuex";
import "./style.scss";

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
