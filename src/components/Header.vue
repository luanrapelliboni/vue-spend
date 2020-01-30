<template>
  <div>
    <header>
      <div class="wrapper">
        <a href="/">Neal.fun</a>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss">
header {
  .wrapper {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    padding: 17px;
    a {
      color: #333;
      text-decoration: none;
      font-size: 30px;
      margin-left: -20px;
    }
  }
  background: #fff;
  padding: 30px 20px;
  margin-bottom: 10px;
  font-weight: bold;
  line-height: 1.6em;
}
</style>
