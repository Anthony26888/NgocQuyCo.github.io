<template lang="">
  <div class="mx-auto">
    <h6 class="text-center text-primary">THÔNG TIN LIÊN HỆ</h6>
    <h1 class="text-center text-teal-darken-1">
      CÔNG TY TNHH NGỌC QUÝ TECHNOLOGY
    </h1>
    <div class="mt-5">
      <div class="d-flex">
        <v-icon icon="mdi-home-city-outline" color="red" size="50"></v-icon>
        <h4 class="mt-2 ms-2 text-red">Trụ sở chính</h4>
      </div>
      <div class="d-flex">
        <v-icon icon="mdi-map-marker" color="primary" size="50"></v-icon>
        <h4 class="mt-2 ms-2">
          102/9/2D Đường 100 Bình Thới, Phường 14, Quận 11, Thành phố Hồ Chí
          Minh
        </h4>
      </div>
    </div>
    <div class="mt-5">
      <div class="d-flex">
        <v-icon icon="mdi-account-voice" color="red" size="50"></v-icon>
        <h4 class="mt-2 ms-2 text-red">Hỗ trợ bán hàng</h4>
      </div>
      <div class="d-flex">
        <v-icon icon="mdi-cellphone" color="primary" size="50"></v-icon>
        <div class="d-flex">
          <h4 class="mt-2 ms-2">Mr.Hải:</h4>
          <a href="tel:+84918504086" class="ms-2 mt-2"><h4>0918504086</h4></a>
          <span class="text-muted ms-2 mt-2">hoặc</span>
          <a href="tel:+84903062501" class="ms-2 mt-2"><h4>0903062501</h4></a>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <div class="d-flex">
        <v-icon icon="mdi-account-voice" color="red" size="50"></v-icon>
        <h4 class="mt-2 ms-2 text-red">Hỗ trợ kĩ thuật</h4>
      </div>
      <div class="d-flex">
        <v-icon icon="mdi-cellphone" color="primary" size="50"></v-icon>

        <div class="d-flex">
          <h4 class="mt-2 ms-2">Mr.Long:</h4>
          <a href="tel:+84941049190" class="mt-2 ms-2"><h4>0941049190</h4></a>
        </div>
      </div>
    </div>

    <!--Form Contact-->
    <v-card class="mt-5 bg-teal-lighten-5">
      <Form />
    </v-card>
  </div>
</template>
<script setup>
import Form from "./Form.vue";
</script>
<script></script>
<style scoped>
h1,
h6 {
  font-weight: 700;
}

.sheet {
  width: 200px;
}
</style>
