<template>
  <v-skeleton-loader max-height="500" type="image" :loading="loading">
    <v-carousel show-arrows="hover" cycle hide-delimiters width="400" class="animate__animated animate__backInLeft slide">
      <v-carousel-item v-for="item in store.products.slice(0, 10)" :key="item">
        <router-link to="/Thong-tin-san-pham">
          <v-img :src="item.img" class="align-center mt-3" @click="store.GetDetail(item.id)"></v-img>
        </router-link>
      </v-carousel-item>
    </v-carousel>
  </v-skeleton-loader>
</template>
<script setup>

import { useAppStore } from "@/store/app";
const store = useAppStore();
</script>
<script>
export default {
  data() {
    return {
      length: 3,
      onboarding: 1,
      loading:true
    };
  },
  mounted() {
    setTimeout(()=>{
      this.loading=false
    },3000)
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
