<template>
  <div class="phone">
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  setup() {},
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  .phone {
    width: 450px;
    margin: 0 auto;
    border-radius: 10px;
    border: 1px solid #c4c4c4;
    box-shadow: 0px 0px 25px 0px #868686;
    font-family: 'Nunito', sans-serif;
  }
  .container {
    padding: 20px;
    padding-top: 20px;
  }
</style>