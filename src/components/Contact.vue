<template lang="">
  <div class="mx-auto">
    <h6 class="text-center text-primary">THÔNG TIN LIÊN HỆ</h6>
    <h1 class="text-center text-teal-darken-1">
      CÔNG TY TNHH NGỌC QUÝ TECHNOLOGY
    </h1>
<<<<<<< HEAD
    <div class="mt-5">
      <div class="d-flex">
        <v-icon icon="mdi-home-city-outline" color="red" size="50"></v-icon>
        <h4 class="mt-2 ms-2 text-red">Trụ sở chính</h4>
      </div>
      <div class="d-flex">
        <v-icon icon="mdi-map-marker" color="primary" size="50"></v-icon>
        <h4 class="mt-2 ms-2">
          102/1 Hẻm 102 Bình Thới, Phường 14, Quận 11, Thành phố Hồ Chí Minh
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
        <h4 class="mt-2 ms-2">Mr.Hải 0918504086</h4>
      </div>
    </div>
    <div class="mt-5">
      <div class="d-flex">
        <v-icon icon="mdi-account-voice" color="red" size="50"></v-icon>
        <h4 class="mt-2 ms-2 text-red">Hỗ trợ kĩ thuật</h4>
      </div>
      <div class="d-flex">
        <v-icon icon="mdi-cellphone" color="primary" size="50"></v-icon>
        <h4 class="mt-2 ms-2">Mr.Long 0327001191</h4>
      </div>
    </div>

    <!--Form Contact-->
    <v-card class="mt-5 bg-teal-lighten-5">
      <Form/>
    </v-card>
    
    
  </div>
=======
  </div>
  <div class="mt-5 mx-auto">
    <div class="d-flex">
      <v-icon icon="mdi-home-city-outline" color="red" size="50"></v-icon>
      <h4 class="mt-2 ms-2 text-red">Trụ sở chính</h4>
    </div>
    <div class="d-flex">
      <v-icon icon="mdi-map-marker" color="primary" size="50"></v-icon>
      <h4 class="mt-2 ms-2">
        102/1 Hẻm 102 Bình Thới, Phường 14, Quận 11, Thành phố Hồ Chí Minh
      </h4>
    </div>
    <div class="d-flex mt-3">
      <v-icon icon="mdi-account-voice" color="red" size="50"></v-icon>
      <h4 class="mt-2 ms-2 text-red">Số điện thoại sale</h4>
    </div>
    <div class="d-flex">
      <v-icon icon="mdi-cellphone" color="primary" size="50"></v-icon>
      <h4 class="mt-2 ms-2">Mr.Hải 0918504086</h4>
    </div>

    <div class="d-flex mt-3">
      <v-icon icon="mdi-account-voice" color="red" size="50"></v-icon>
      <h4 class="mt-2 ms-2 text-red">Số điện thoại kĩ thuật</h4>
    </div>
    <div class="d-flex">
      <v-icon icon="mdi-cellphone" color="primary" size="50"></v-icon>
      <h4 class="mt-2 ms-2">Mr.Long 0327001191</h4>
    </div>
  </div>



  <!--GOOGLE MAP-->
  <GoogleMap
    api-key="AIzaSyDOFlx7_zAF2nBL2D8rdhJTREPgnGgvtKk"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
>>>>>>> f891346abf0729033df464abf2e73ed77c1e0df0
</template>
<script setup>
import Form from "./Form.vue"
</script>
<script>
<<<<<<< HEAD

export default {};
=======
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 };

    return { center };
  },
});
>>>>>>> f891346abf0729033df464abf2e73ed77c1e0df0
</script>
<style scoped>
h1,
h6 {
  font-weight: 700;
}

.sheet {
  width: 200px;
}
</style>
