<template>
  <v-card class="card">
    <v-row cols="auto">
      <v-col cols="5">
        <v-card variant="text">
          <v-card-title
            class="text-h2 font-weight-light text-start text-teal-darken-1 text-wrap"
            >Ngọc Quý Technology</v-card-title
          >
          <v-card-text>
            <p class="text-muted">
              Chuyên cung cấp các dòng máy in phun công nghiệp, giải pháp tối ưu
              cho sản xuất và hỗ trợ 24/7.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn class="bg-teal-darken-1">Xem ngay</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="7">
        <v-carousel
          show-arrows="hover"
          v-model="model"
          height="auto"
          hide-delimiters
          cycle
        >
          <v-carousel-item
            v-for="item in CarouselsBanner"
            :key="item"
            :src="`/src/assets/Image/Banner/${item.img}`"
            max-height="500"
          >
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup>
import { useAppStore } from "@/store/app";
</script>
<script>
const store = useAppStore();
export default {
  data() {
    return {
      model: 0,
      CarouselsBanner : null
    };
  },
  created() {
    this.FetchCarouselsBanner()
  },
  methods: {
    async FetchCarouselsBanner() {
      const res = await fetch(`${store.Url}/data/banner?location=Quảng%20cáo`);
      this.CarouselsBanner = await res.json();
    },
  },
};
</script>
<style scoped>
@media only screen and (min-width: 1440px) {
  .banner {
    height: 900px;
  }
}
.card {
  margin-top: -60px;
  padding: 10px;
}
</style>
