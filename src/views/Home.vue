<template>
  <div>
    <Header />
    <Brand />
    <Score />
    <ItemList />
  </div>
</template>
<script>
import Header from "@/components/Header";
import Brand from "@/components/Brand";
import Score from "@/components/Score";
import ItemList from "@/components/ItemList";

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
