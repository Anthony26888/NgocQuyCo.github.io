<template>
  <v-carousel>
    <v-carousel-item>
      <img class="mx-auto d-block" src="../assets/Image/banner1.png" alt="" srcset=""/>     
    </v-carousel-item>

    <v-carousel-item>
      <img class="mx-auto d-block" src="../assets/Image/banner2.png" alt="" srcset="" />
    </v-carousel-item>

    <v-carousel-item>
      <img class="mx-auto d-block" src="../assets/Image/banner3.png" alt="" srcset="" />
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
@media only screen and (max-width: 800px) {
  img {
    width: 700px;
  
  }
}
@media only screen and (max-width: 600px) {
  img {
    margin-top: 100px;
    width: 380px;
    height: 300px;
  }
}
</style>
<script setup>
//
</script>
