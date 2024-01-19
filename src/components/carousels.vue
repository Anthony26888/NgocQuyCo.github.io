<template>
  <v-carousel :continuous="false" :show-arrows="false" hide-delimiter-background delimiter-icon="mdi-square" class="slide" cycle>
    <v-carousel-item v-for="value in item" :key="value">
      <v-img class="title-img mx-auto" :src="value.image" cover></v-img>
    </v-carousel-item>
  </v-carousel>
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
        {
          image:
            "https://www.foxjet.com/portals/0/Gallery/Album/13/Linx4900_1.jpg",
        }
      ],
    };
  },
};
</script>
<style scoped>
  .title-img {    
    width: 500px;
    height: 400px;

    flex-shrink: 0;
}
@media only screen and (max-width: 600px) {
  .title-img{
    width: 250px;
    height: 250px;
  }
  .slide{
    width: 100%;
    height: 100px;
  }
}

</style>

