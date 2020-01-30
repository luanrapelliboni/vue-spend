<template>
  <div>
    <h1 class="brand">
      <img src="../assets/billgates.png" class="brand__logo" />
      Spend Bill Gates' Money
    </h1>
  </div>
</template>

<script>
export default {
  name: "Brand"
};
</script>

<style lang="scss">
.brand {
  font-size: 32px;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;
  line-height: 1.6em;
  background: white;
  padding: 30px 20px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  .brand__logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;
    width: 125px;
    height: 125px;
    border-radius: 125px;
  }
}
</style>
