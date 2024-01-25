<template lang="">
  <div class="d-flex flex-column justify-content-center algin-item-center text-center">
    <span class="title-name text-teal-darken-1">{{ titleLarge }}</span><br/>    
    <span class="title-collab text-deep-orange-lighten-2">{{ collab }}</span><br/> 
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
      collab:"Linx - Hitachi -TIJ INKJET"
    };
  },
};
</script>
<style scoped>
@media only screen and (min-width: 300px) {
  .title-name {
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 62px;   
    /* 93.939% */
  }

  .title-logan {
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
  }
  .title-collab {
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
  }
}

@media only screen and (min-width: 700px) {
  .title-name {
    font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 62px;
    /* 93.939% */
  }

  .title-logan {
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
  }
  .title-collab {
    font-family: Inter;
    font-size: 23px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
  }
}

@media only screen and (min-width: 1024px) {
  .title-name {
    font-family: Inter;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: 62px;
    /* 93.939% */
  }
  .title-collab {
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
  }

  .title-logan {
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
  }
}
</style>
