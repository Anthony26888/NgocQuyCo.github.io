<template lang="">
  <div class="mx-auto">
    <h6 class="text-center">THÔNG TIN LIÊN HỆ</h6>
    <h1 class="text-center text-teal-darken-1">
      CÔNG TY TNHH NGỌC QUÝ TECHNOLOGY
    </h1>
  </div>
  <VRow class="mt-5 mx-auto" justify="center">
    <VCol class="mt-5 mx-auto">
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
    </VCol>
    <VCol class="mt-5" align="center">
      <div class="d-flex">
        <v-icon icon="mdi-account-voice" color="red" size="50"></v-icon>
        <h4 class="mt-2 ms-2 text-red">Số điện thoại</h4>
      </div>
      <div class="d-flex">
        <v-icon icon="mdi-cellphone" color="primary" size="50"></v-icon>
        <h4 class="mt-2 ms-2">
            Mr.Hải 0918504086
        </h4>
      </div>
    </VCol>
  </VRow>
</template>
<script>
export default {};
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
