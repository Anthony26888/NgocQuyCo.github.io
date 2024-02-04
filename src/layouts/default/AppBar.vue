<template>
  <vContainer>
    <v-app-bar density="comfortable" class="bg-amber-lighten-2 p-3" transition="fade-transition">

      <router-link to="/">
        <v-img class="align-center" src="../../assets/Image/logoNG.png" width="100" height="100"></v-img>
      </router-link>

      <VSpacer />

      <div class="d-none d-sm-flex d-flex mx-auto align-center">
        <router-link to="/" style="text-decoration: none; color: inherit;">
          <v-btn class="title-app"> TRANG CHỦ </v-btn>
        </router-link>


        <router-link to="/Gioi-thieu" style="text-decoration: none; color: inherit;">
          <v-btn class="title-app"> GIỚI THIỆU </v-btn>
        </router-link>


        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <router-link to="/San-pham" style="text-decoration: none; color: inherit;">
              <v-btn v-bind="props" class="title-app"> SẢN PHẨM </v-btn>
            </router-link>
          </template>

          <v-list width="300">
            <v-divider></v-divider>
            <div v-for="value in items" :key="value">
              <router-link :to="value.router" style="text-decoration: none; color: inherit;">
                <v-list-item class="title-app">{{ value.title }}</v-list-item>
              </router-link>
              <v-divider></v-divider>
            </div>
          </v-list>
        </v-menu>

        <router-link to="/Lien-he" style="text-decoration: none; color: inherit;">
          <v-btn class="title-app"> LIÊN HỆ</v-btn>
        </router-link>
      </div>

      <v-app-bar-nav-icon class="d-flex d-sm-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer class="mt-4" v-model="drawer" location="right" temporary>
      <v-list>
        <router-link to="/Gioi-thieu" style="text-decoration: none; color: inherit;">
          <v-list-item title="GIỚI THIỆU"></v-list-item>
        </router-link>

        <v-divider></v-divider>

        <v-list-group value="Actions">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="SẢN PHẨM"></v-list-item>
          </template>

          <div v-for="value in items" :key="value">
            <router-link :to="value.router" style="text-decoration: none; color: inherit;">
              <v-list-item link :title="value.title"></v-list-item>
            </router-link>
          </div>
        </v-list-group>

        <v-divider></v-divider>

        <router-link to="/Lien-he" style="text-decoration: none; color: inherit;">
          <v-list-item link title="LIÊN THỆ"></v-list-item>
        </router-link>

      </v-list>
    </v-navigation-drawer>
  </vContainer>
</template>
<style scoped>
.logoTitle {
  font-family: Inter;
  font-weight: 700;
}

.title-app {
  font-family: Inter;
  font-weight: 500;
  font-size: 18px;

}

@media only screen and (max-width: 500px) {
  .logoTitle {
    font-size: 16px;
  }
}
</style>
<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "TẤT CẢ SẢN PHẨM", router: "/San-pham" },
        { title: "MÁY IN DATE", router: "/Danh-sach-may-in-date" },
        { title: "LINH KIỆN", router: "/Danh-sach-linh-kien" },
        { title: "NGUYÊN LIỆU", router: "/Danh-sach-nguyen-lieu" },
        { title: "THUÊ MÁY", router: "/Thue-may" },
      ]
    };
  },
};
</script>
