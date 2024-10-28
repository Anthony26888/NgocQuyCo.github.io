<template>
  <v-carousel show-arrows="hover" v-model="model" height="auto" hide-delimiters>
    <v-carousel-item
      v-for="item in store.Banner"
      :key="item"
      cycles
      :src="`/src/assets/Image/Banner/${item.img}`"
    >
  </v-carousel-item>
  </v-carousel>
</template>
<script setup>
import { useAppStore } from "@/store/app";
const store = useAppStore();
store.FetchBanner();
</script>
<script>
export default {
  data() {
    return {
      length: 3,
      onboarding: 1,
      loading: true,
      model:0
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 > this.length ? 1 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 <= 0 ? this.length : this.onboarding - 1;
    },
  },
};
</script>
<style scoped>
@media only screen and (min-width: 1440px) {
  .banner{
    height:900px
  }
}
</style>
