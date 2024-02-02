<template>
  <v-carousel show-arrows="hover" cycle hide-delimiters width="400" class="animate__animated animate__backInLeft slide">
    <v-carousel-item v-for="item in store.products.slice(0,7)" :key="item">
      <router-link to="/Thong-tin-san-pham">
        <v-img :src="item.img" class="align-center mt-3" @click="store.GetDetail(item.id)"></v-img>
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
      length: 3,
      onboarding: 1,
    };
  },
  methods: {
    next() {
      this.onboarding = this.onboarding + 1 > this.length
        ? 1
        : this.onboarding + 1
    },
    prev() {
      this.onboarding = this.onboarding - 1 <= 0
        ? this.length
        : this.onboarding - 1
    },
  },
};
</script>
<style scoped>
.img {
  width: 500px;
  height: 400px;
}


@media only screen and (min-width: 300px) {
  .slide {
    height: 200px;
  }

}
</style>
