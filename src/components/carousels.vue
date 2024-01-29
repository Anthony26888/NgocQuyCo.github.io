<template>
  <v-carousel show-arrows="hover" cycle hide-delimiters width="400" class="animate__animated animate__backInLeft">
    <v-carousel-item v-for="item in store.products" :key="item">
      <router-link to="/Thong-tin-san-pham">
        <v-img :src="item.img"  @click="store.GetMachine(item.id)"></v-img>
      </router-link>
    </v-carousel-item>
  </v-carousel>
</template>
<script setup>

import { useAppStore } from "@/store/app";
const store = useAppStore();
</script>
<script>
export default {
  data() {
    return {
      items: [
        "https://i.ibb.co/DtrwDjY/3.png",
        "https://i.ibb.co/hFQF21Q/6.png",
        "https://i.ibb.co/4dLBWcn/5.png",
        "https://i.ibb.co/FnyrhmB/1.png",
        "https://i.ibb.co/r01c1R9/2.png",
        "https://i.ibb.co/K64xx49/4.png",
        "https://i.ibb.co/VvD7tzZ/vt180.jpg"
      ],
    };
  },
};
</script>
<style scoped>
.img {
  width: 500px;
  height: 400px;
}


@media only screen and (max-width: 600px) {
  .slide {
    width: 350px;
  }
}
</style>
