<template>
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" ata-bs-interval="2000">
        <img src="https://linx.com.vn/wp-content/uploads/2022/12/may-in-phun-cao-cap-linx-8900-1024x768.webp"
          class="d-block w-100" alt="..." d>
      </div>
      <div class="carousel-item" ata-bs-interval="2000">
        <img src="https://linx.com.vn/wp-content/uploads/2023/02/may-in-phun-linx-7900-1024x769.jpg" class="d-block w-100"
          alt="...">
      </div>
      <div class="carousel-item" ata-bs-interval="2000">
        <img src="https://linx.com.vn/wp-content/uploads/2022/12/may-in-phun-linx-5900-1024x769.webp"
          class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item" ata-bs-interval="2000">
        <img src="https://www.foxjet.com/portals/0/Gallery/Album/13/Linx4900_1.jpg" class="d-block w-100" alt="...">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: [
        "https://linx.com.vn/wp-content/uploads/2022/12/may-in-phun-cao-cap-linx-8900-1024x768.webp",
        "https://linx.com.vn/wp-content/uploads/2023/02/may-in-phun-linx-7900-1024x769.jpg",
        "https://linx.com.vn/wp-content/uploads/2022/12/may-in-phun-linx-5900-1024x769.webp",
        "https://www.foxjet.com/portals/0/Gallery/Album/13/Linx4900_1.jpg",
      ],
    };
  },
};
</script>
<style scoped>
.img {
  width: 700px;
  height: 500px;

}


@media only screen and (max-width: 600px) {
  .slide {
    width: 350px;
  }
}
</style>
