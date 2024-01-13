<template lang="">
  <div class="d-flex flex-column justify-content-center algin-item-center mt-5">
    <span class="title-name text-teal-darken-1"
      >{{ titleLarge}}</span
    ><br />
    <span class="title-model text-red">{{ year}}</span><br />
    <span class="text-muted"
      >{{logan}}</span
    >
  </div>
</template>
<script>
export default {
    data() {
        return {
            titleLarge: "Chuyên cung cấp các sản phẩm máy in công nghiệp",
            year: "since 2015",
            logan: "Ngọc Quý Technology - Chúng tôi luôn sẵn sàng khi bạn cần!"
        }
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
