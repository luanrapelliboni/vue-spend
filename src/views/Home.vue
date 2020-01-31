<template>
  <div>
    <Header />
    <Brand />
    <Score />
    <ItemList />
    <ScoreBoard />
  </div>
</template>
<script>
import Header from "@/components/Header";
import Brand from "@/components/Brand";
import Score from "@/components/Score";
import ScoreBoard from "@/components/ScoreBoard";
import ItemList from "@/components/ItemList";

export default {
  name: "home",
  components: {
    Header,
    Brand,
    Score,
    ScoreBoard,
    ItemList
  }
};
</script>
