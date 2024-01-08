<template>
  <div class="row p-4 justify-item-center">
    <div class="col-12 col-sm-6">
      <router-link to="/San-pham">
        <img class="float-left" src="../assets/Image/product-homepage.webp" />
      </router-link>      
    </div>
    <div class="col-12 col-sm-6 mb-3 float-lg-right">
      <h1 class="text-teal-accent-4">Các sản phẩm</h1>
      <span class="text-muted">{{ title1 }}</span><br />
      <router-link to="/San-pham">
        <v-btn class="bg-teal-accent-4 mt-3 mx-auto">Tìm sản phẩm</v-btn>
      </router-link>
    </div>
  </div>
  <div class="row p-4 mt-3">
    <div class="col-12 col-sm-6 d-block d-sm-none">
      <router-link to="/San-pham">
        <img class="float-right" src="../assets/Image/solution-homepage.webp" />
      </router-link>      
    </div>
    <div class="col-12 col-sm-6 mb-3">
      <h1 class="text-teal-accent-4">Các giải pháp ứng dụng</h1>
      <span class="text-muted">{{ title2 }}</span><br />
      <router-link to="/Giai-phap">
        <v-btn class="bg-teal-accent-4 mt-3 mx-auto">Xem chi tiết</v-btn>
      </router-link>
    </div>
    <div class="col-12 col-sm-6 d-none d-sm-block">
      <router-link to="/San-pham">
        <img class="float-right" src="../assets/Image/solution-homepage.webp" />
      </router-link>      
    </div>
  </div>
  <div class="row p-4 mt-3">
    <div class="col-12 col-sm-6">
      <router-link to="/San-pham">
        <img class="float-lg-left" src="../assets/Image/muc-homepage.jpg" />
      </router-link>      
    </div>
    <div class="col-12 col-sm-6 mb-3">
      <h1 class="text-teal-accent-4">Các sản phẩm</h1>
      <span class="text-muted">{{ title3 }}</span><br />
      <v-btn class="bg-teal-accent-4 mt-3">Xem chi tiết</v-btn>
    </div>
  </div>
  <div class="row p-4 mt-3">
    <div class="col-12 col-sm-6 d-block d-sm-none">
      <router-link to="/San-pham">
        <img class="float-lg-right" src="../assets/Image/maintenance-homepage.png" />
      </router-link>      
    </div>
    <div class="col-12 col-sm-6 mb-3">
      <h1 class="text-teal-accent-4">BẢO TRÌ MÁY IN</h1>
      <span class="text-muted">{{ title4 }}</span><br />
      <v-btn class="bg-teal-accent-4 mt-3">Xem chi tiết</v-btn>
    </div>
    <div class="col-12 col-sm-6 d-none d-sm-block">
      <router-link to="/San-pham">
        <img class="float-lg-right" src="../assets/Image/maintenance-homepage.png" />
      </router-link>      
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      title1:
        "Các sản phẩm mã hóa và đánh dấu công nghiệp của Linx nổi tiếng về tính dễ sử dụng, độ tin cậy và chi phí sở hữu thấp.",
      title2:
        "Khám phá cách các giải pháp mã hóa và in phun của Linx có thể đáp ứng nhu cầu ứng dụng vật liệu hoặc ngành cụ thể của bạn.",
      title3:
        "Mực in Linx được sản xuất theo các quy trình và kiểm soát đảm bảo chất lượng nghiêm ngặt, giúp tăng độ bề và tuổi thọ của máy in tối đa",
      title4:
        "Việc đảm bảo hiệu suất hoạt động liên tục của các thiết bị trên dây chuyền sản xuất là tối quan trọng. Vận hành, bảo trì, bảo dưỡng máy in vô cùng cần thiết đảm bảo hạn chế tối đa tình trạng downtime cho máy in trục trặc.",
    };
  },
};
</script>

<style scoped>
img {
  width: 100%;
}

.shadow {
  width: 500px;
  height: 100px;
}
</style>
