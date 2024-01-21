<template lang="">
  <div class="d-flex flex-column justify-content-center algin-item-center">
    <span class="title-name text-teal-darken-1">{{ titleLarge }}</span
    ><br />
    <span class="title-model text-red">{{ year }}</span
    ><br />
    <span class="text-muted title-logan">{{ logan }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titleLarge: "Chuyên cung cấp các sản phẩm máy in công nghiệp",
      year: "since 2015",
      logan: "Ngọc Quý Technology - Chúng tôi luôn sẵn sàng khi bạn cần!",
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

.box-detail {
  width: 200px;
}
@media only screen and (max-width: 600px) {
  .title-name {
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 62px;
    /* 93.939% */
  }
  .title-model {
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
  }
  .title-logan {
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
  }
}
@media only screen and (max-width: 800px) {
  .title-name {
    font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 62px;
    /* 93.939% */
}
.title-model {
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
}
.title-logan{
  font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
}
}
</style>
