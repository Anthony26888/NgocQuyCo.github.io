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
            <v-btn v-bind="props" class="title-app"> SẢN PHẨM </v-btn>
          </template>

          <v-list width="300" density="compact">
            <v-list-item>
              <router-link to="/Danh-sach-may-in" style="text-decoration: none; color: inherit;">
                <v-list-item-title color="primary">MÁY IN DATE</v-list-item-title>
              </router-link>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
              <router-link to="/Danh-sach-linh-kien" style="text-decoration: none; color: inherit;">
                <v-list-item-title><span>LINH KIỆN</span></v-list-item-title>
              </router-link>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
              <router-link to="/" style="text-decoration: none; color: inherit;">
                <v-list-item-title><span>NGUYÊN LIỆU</span></v-list-item-title>
              </router-link>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
              <router-link to="/Thue-may" style="text-decoration: none; color: inherit;">
                <v-list-item-title><span>THUÊ MÁY</span></v-list-item-title>
              </router-link>
            </v-list-item>
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
        <v-list-item title="GIỚI THIỆU">
          <template v-slot:append>
            <v-btn size="small" variant="text" icon="mdi-menu-down"></v-btn>
          </template>
        </v-list-item>
      

        <v-divider></v-divider>

        <router-link to="/San-pham" style="text-decoration: none; color: inherit;">
          <v-list-item link title="SẢN PHẨM"></v-list-item>
        </router-link>

        <v-divider></v-divider>

        <router-link to="/Lien-he" style="text-decoration: none; color: inherit;">
          <v-list-item link title="LIÊN HỆ"></v-list-item>
        </router-link>

        <v-divider></v-divider>

        <router-link to="/Thue-may" style="text-decoration: none; color: inherit;">
          <v-list-item link title="THUÊ MÁY"></v-list-item>
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
        { text: "Men", icon: "mdi-folder" },
        { text: "Women", icon: "mdi-account-multiple" },
        { text: "Kids", icon: "mdi-star" },
        { text: "Accessory", icon: "mdi-history" },
      ],
      items: [
        { title: "Máy in CIJ" },
        { title: "Linh kiện" },
        { title: "Nguyên iệu" },
      ],
    };
  },
};
</script>
