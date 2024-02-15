<template>
  <footer class="bg-body-tertiary text-center text-lg-start">
    <!-- Grid container -->
    <div class="container p-4">
      <!--Grid row-->
      <div class="row">
        <!--Grid column-->
        <div class="col-md-6 col-sm-12 mb-4 mb-md-0 mb-sm-0">
          <img src="../../assets/Image/logoNG.png" alt="" srcset="" />
          <h5 class="text-uppercase text-teal-accent-4">NGỌC QUÝ TECHNOLOGY</h5>

          <p>Chúng tôi luôn sẵn sàng khi bạn cần!</p>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-md-6 col-sm-12 mb-4 mb-md-0 mb-sm-0">
          <h5 class="text-uppercase text-teal-accent-4">Trụ sở</h5>
          <div class="d-flex">
            <v-icon
              size="large"
              color="green-darken-2"
              icon="mdi-map-marker"
            ></v-icon>
            <p class="ms-2">
              102/9/2D Đường 100 Bình Thới, Phường 14, Quận 11, TP.Hồ Chí Minh
            </p>
          </div>
          <div class="d-flex">
            <v-icon
              size="large"
              color="green-darken-2"
              icon="mdi-phone"
            ></v-icon>
            <div class="d-flex ms-2">
              <a href="tel:+84918504086" class="ms-2">
                <p>0918504086</p>
              </a>
              <span class="text-muted ms-2">hoặc</span>
              <a href="tel:+84903062501" class="ms-2">
                <p>0903062501</p>
              </a>
              <span class="text-muted ms-2">(Mr.Hải)</span>
            </div>
          </div>
          <div class="d-flex mt-2">
            <v-icon size="large" color="green-darken-2" icon="mdi-web"></v-icon>
            <a class="ms-2" href="http://ngocquytechco.com.vn"
              >http://ngocquytechco.com.vn</a
            >
          </div>
          <div class="d-flex mt-2">
            <v-icon
              size="large"
              color="green-darken-2"
              icon="mdi-email"
            ></v-icon>
            <a class="ms-2" href="mailto:ngocquytechco@gmail.com"
              >ngocquytechco@gmail.com</a
            >
          </div>
          <div class="d-flex mt-2">
            <v-icon
              size="large"
              color="green-darken-2"
              icon="mdi-facebook"
            ></v-icon>
            <a class="ms-2" href="https://www.facebook.com/people/M%C3%A1y-in-phun-c%C3%B4ng-nghi%E1%BB%87p-Ng%E1%BB%8Dc-Qu%C3%BD/61555545044060/?mibextid=kFxxJD"
              >Máy in phun công nghiệp- Ngọc Quý</a
            >
          </div>
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </div>
    <!-- Grid container -->
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>
