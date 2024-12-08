<template lang="">
  <v-card variant="text">
    <v-card-text>
      <v-card class="p-5">
        <div class="mt-3">
          <div class="d-flex">
            <v-icon icon="mdi-home-city-outline" color="red" size="50"></v-icon>
            <h4 class="mt-2 ms-2 text-red">Trụ sở chính</h4>
          </div>
          <div class="d-flex">
            <v-icon icon="mdi-map-marker" color="primary" size="50"></v-icon>
            <h4 class="mt-2 ms-2">
              102/9/2D Đường 100 Bình Thới, Phường 14, Quận 11, Thành phố Hồ Chí
              Minh
            </h4>
          </div>
        </div>
        <div class="mt-3">
          <div class="d-flex">
            <v-icon icon="mdi-account-voice" color="red" size="50"></v-icon>
            <h4 class="mt-2 ms-2 text-red">Hỗ trợ bán hàng</h4>
          </div>
          <div class="d-flex">
            <v-icon
              icon="mdi-cellphone"
              color="primary"
              size="30"
              class="mt-2"
            ></v-icon>
            <div>
              <h4 class="ms-2">Mr.Hải:</h4>
              <div class="d-flex">
                <a
                  href="tel:+84918504086"
                  class="ms-2"
                  style="text-decoration: none; color: blue"
                  ><h4>0918504086</h4></a
                >
                <span class="text-muted ms-2">hoặc</span>
                <a
                  href="tel:+84903062501"
                  class="ms-2"
                  style="text-decoration: none; color: blue"
                  ><h4>0903062501</h4></a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <div class="d-flex">
            <v-icon icon="mdi-account-voice" color="red" size="50"></v-icon>
            <h4 class="mt-2 ms-2 text-red">Hỗ trợ kĩ thuật</h4>
          </div>
          <div class="d-flex">
            <v-icon
              icon="mdi-cellphone"
              color="primary"
              size="30"
              class="mt-2"
            ></v-icon>

            <div class="d-flex">
              <h4 class="mt-2 ms-2">Mr.Long:</h4>
              <a
                href="tel:+84941049190"
                class="mt-2 ms-2"
                style="text-decoration: none; color: blue"
                ><h4>0941049190</h4></a
              >
            </div>
          </div>
        </div>

        <div class="mt-5">
          <div class="d-flex">
            <v-icon icon="mdi-facebook" color="red" size="50"></v-icon>
            <h4 class="mt-2 ms-2 text-red">Fanpage</h4>
          </div>
          <div class="d-flex">
            <v-icon
              icon="mdi-cursor-default-click"
              color="primary"
              size="30"
              class="mt-2"
            ></v-icon>
            <a
              style="text-decoration: none; color: blue"
              href="https://www.facebook.com/people/M%C3%A1y-in-phun-c%C3%B4ng-nghi%E1%BB%87p-Ng%E1%BB%8Dc-Qu%C3%BD/61555545044060/?mibextid=kFxxJD"
              class="mt-2 ms-2"
              ><h4>Máy in phun công nghiệp- Ngọc Quý</h4></a
            >
          </div>
        </div>
      </v-card>
    </v-card-text>

    <!--Form Contact-->
    <h3 class="display-5 text-center text-teal-darken-1 text-wrap">
      Liên hệ với chúng tôi ngay
    </h3>
    <v-card class="" variant="text">
      <v-card-text>
        <Form />
      </v-card-text>
    </v-card>
  </v-card>
</template>
<script setup>
import Form from "./Form.vue";
</script>
<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
};
</script>
<style scoped>
h1,
h6 {
  font-weight: 700;
}

.sheet {
  width: 200px;
}

@media only screen and (min-width: 300px) {
  h1 {
    font-size: 16px;
  }

  h4 {
    font-size: 15px;
  }
}

@media only screen and (min-width: 700px) {
  h1 {
    font-size: 23px;
  }

  h4 {
    font-size: 18px;
  }
}

@media only screen and (min-width: 1024px) {
  h1 {
    font-size: 25px;
  }

  h4 {
    font-size: 20px;
  }
}

@media only screen and (min-width: 1440px) {
  h1 {
    font-size: 30px;
  }

  h4 {
    font-size: 22px;
  }
}

@media only screen and (min-width: 1920px) {
  h1 {
    font-size: 35px;
  }

  h4 {
    font-size: 25px;
  }

  h6 {
    font-size: 20px;
  }
}
</style>
