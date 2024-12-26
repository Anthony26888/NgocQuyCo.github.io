<template>
  <section class="bsb-pricing-2 bg-grey-lighten-4 py-3 py-xl-8">
    <div class="container">
      <v-card variant="text">
        <v-card-title
          ><h3 class="display-5 text-center text-teal-darken-1">
            {{ Title }}
          </h3></v-card-title
        >
        <v-card-subtitle class="text-center text-wrap">{{
          Subtitle
        }}</v-card-subtitle>
        <v-divider width="300" class="mx-auto"></v-divider>
        <v-spacer />
        <v-card-text>
          <div class="row gy-5 gy-lg-0 gx-xl-5">
            <div
              class="col-12 col-lg-4"
              v-for="item in BannerService"
              :key="item"
            >
              <v-card>
                <v-img
                  :src="`/src/assets/Image/Banner/${item.img}`"
                  cover
                ></v-img>
                <v-card-title>{{ item.title }}</v-card-title>
                <v-card-text>
                  {{ item.description }}
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" variant="tonal" class="text-caption"
                    >Chi tiết</v-btn
                  >
                </v-card-actions>
              </v-card>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </section>
</template>

<script setup>
import { useAppStore } from "@/store/app";
</script>

<script>
const store = useAppStore();
export default {
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
  data() {
    return {
      BannerService: null,
      Title:"Dịch vụ",
      Subtitle:
        "Ngọc Quý luôn mang đến những giải pháp tốt nhất đến cho khách hàng đồng thời theo đó là những dịch vụ như thuê máy và hỗ trợ sửa chữa bảo hành kịp thời và nhanh chóng.",
    };
  },
  created() {
    this.FetchServiceBanner();
  },
  methods: {
    async FetchServiceBanner() {
      const res = await fetch(`${store.Url}/data/banner?location=Dịch%20vụ`);
      this.BannerService = await res.json();
    },
  },
};
</script>
<style scoped>
.zoom:hover {
  transform: scale(1.05, 1.05);
}
@media only screen and (max-width: 700px) {
  .frame {
    width: 400px;
  }
}
</style>
