<template>
  <VRow class="justify-center">
    <VCol xs="6">
      <div class="d-flex flex-column justify-content-center algin-item-center mt-5">
        <span class="title-name text-teal-darken-1">Chuyên cung cấp các sản phẩm máy in công nghiệp</span><br />
        <span class="title-model text-red">2024</span><br />

        <span class="text-muted">Ngọc Quý Technology - Chúng tôi luôn sẵn sàng khi bạn cần!</span><br />
        <VBtn color="light" rounded="xl" width="200" size="x-large" class="mt-5">Xem Ngay</VBtn>
      </div>
    </VCol>
    
    <VCol xs="6">
      <v-carousel :continuous="false" :show-arrows="false" hide-delimiter-background delimiter-icon="mdi-square" cycle class="mt-5">
        <v-carousel-item v-for="value in item" :key="value">
          <v-img class="title-img" :src="value.image" cover></v-img>
        </v-carousel-item>
      </v-carousel>
    </VCol>
  </VRow>
</template>
<script>
export default {
  data() {
    return {
      item: [
        {
          image:
            "https://linx.com.vn/wp-content/uploads/2022/12/may-in-phun-cao-cap-linx-8900-1024x768.webp",
        },
        {
          image:
            "https://linx.com.vn/wp-content/uploads/2023/02/may-in-phun-linx-7900-1024x769.jpg",
        },
        {
          image:
            "https://linx.com.vn/wp-content/uploads/2022/12/may-in-phun-linx-5900-1024x769.webp",
        },
      ],
    };
  },
};
</script>
<style scoped>
.title-name {
  font-family: Inter;
  font-size: 66px;
  font-style: normal;
  font-weight: 700;
  line-height: 62px;
  /* 93.939% */
}

.title-model {
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
}

.title-img {
  margin-left: 200px;
  width: 500px;
  height: 400px;

  flex-shrink: 0;
}

.box-detail {
  width: 200px;
}
</style>
<script setup>
//
</script>
