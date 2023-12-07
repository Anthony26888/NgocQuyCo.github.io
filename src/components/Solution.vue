<template lang="">
  <v-main>
    <div class="container-fluid">
      <div class="banner">
        <img
          src="../assets/Image/solution.webp"
          alt="Cinque Terre"
          width="1000"
          height="300"
        />
        <div class="center text-teal-accent-4"><strong>Giải pháp</strong></div>
      </div>
    </div>
  </v-main>
</template>
<script>
export default {};
</script>
<style scoped>
.banner {
  position: relative;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 35px;
}

img {
  width: 100%;
  height: 300px;
  filter: grayscale(100%);
  object-fit: cover;
}
strong{
    font-weight: 700;
    font-size: 50px;
}
</style>
