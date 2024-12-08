<template>
  <section class="bsb-pricing-2 bg-grey-lighten-4 py-3 py-xl-8">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h3 class="display-5 text-center text-teal-darken-1">Dịch vụ</h3>
          <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row gy-5 gy-lg-0 gx-xl-5">
        <div class="col-12 col-lg-4">
          <v-card>
            <v-img
              src="@/assets/Image/Banner/solution-landing.png"
              cover
            ></v-img>
            <v-card-title>Giải pháp</v-card-title>
            <v-card-text>
              Công ty Ngọc Quý luôn hỗ trợ và cung cấp những giải pháp tối ưu
              nhất cho sản phẩm với những yêu cầu từ khách hàng.
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" variant="tonal" class="text-caption"
                >Chi tiết</v-btn
              >
            </v-card-actions>
          </v-card>
        </div>
        <div class="col-12 col-lg-4">
          <v-card>
            <v-img src="@/assets/Image/Banner/repair-landing.png" cover></v-img>
            <v-card-title>Sữa chữa</v-card-title>
            <v-card-text>
              Hỗ trợ sửa chữa và bảo hành cho khách hàng thông qua điện thoại
              hoặc trực tiếp sửa chữa tại xưởng sản xuất hoặc tại nhà với chi
              phí cực kì thấp.
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" variant="tonal" class="text-caption"
                >Chi tiết</v-btn
              >
            </v-card-actions>
          </v-card>
        </div>
        <div class="col-12 col-lg-4">
          <v-card>
            <v-img src="@/assets/Image/Banner/all-product.png" cover></v-img>
            <v-card-title>Thuê máy</v-card-title>
            <v-card-text>
              Công ty chuyên cung cấp máy mới và hỗ trợ khách hàng thuê máy giúp
              tiết kiệm tối đa chi phí khách hàng.
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" variant="tonal" class="text-caption"
                >Chi tiết</v-btn
              >
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useAppStore } from "@/store/app";
const store = useAppStore();
store.FetchProduct();
store.FetchBannerLanding();
</script>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
  data() {
    return {
      Url: "http://localhost:3000",
      loading: true,
      h1: "Dịch vụ",
      Subtitle:
        "Ngọc Quý luôn mang đến những giải pháp tốt nhất đến cho khách hàng đồng thời theo đó là những dịch vụ như thuê máy và hỗ trợ sửa chữa bảo hành kịp thời và nhanh chóng.",
    };
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
