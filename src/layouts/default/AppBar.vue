<template>
  <vContainer>
    <v-app-bar :elevation="2" density="comfortable" class="p-2" transition="fade-transition">
      <v-app-bar-title>
        <div class="d-flex">
          <router-link to="/">
            <v-img src="../../assets/Image/logoNG.png" width="80" height="80"></v-img>
          </router-link>
          <h4 class="mt-4 text-teal-darken-1">Ngọc Quý</h4>
        </div>

      </v-app-bar-title>
      <v-spacer></v-spacer>
      <router-link to="" style="text-decoration: none; color: inherit;">
        <v-btn class=" d-none d-sm-flex"> Giới thiệu </v-btn>
      </router-link>

      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" class=" d-none d-sm-flex"> Sản phẩm </v-btn>
        </template>

        <v-list width="200" density="compact">
          <v-list-item>
            <router-link to="/Danh-sach-may-in" style="text-decoration: none; color: inherit;">
              <v-list-item-title color="primary">Máy in CIJ</v-list-item-title>
            </router-link>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item>
            <router-link to="/Danh-sach-linh-kien" style="text-decoration: none; color: inherit;">
              <v-list-item-title><span>Linh kiện</span></v-list-item-title>
            </router-link>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item>
            <router-link to="/" style="text-decoration: none; color: inherit;">
              <v-list-item-title><span>Nguyên liệu</span></v-list-item-title>
            </router-link>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item>
            <router-link to="/" style="text-decoration: none; color: inherit;">
              <v-list-item-title><span>Thuê máy</span></v-list-item-title>
            </router-link>
          </v-list-item>

        </v-list>
      </v-menu>

      <router-link to="/Lien-he" style="text-decoration: none; color: inherit;">
        <v-btn class=" d-none d-sm-flex"> Liên hệ </v-btn>
      </router-link>

      <v-app-bar-nav-icon class="d-flex d-sm-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>


    <v-navigation-drawer class="mt-3" v-model="drawer" location="right" temporary>
      <v-list>
        <v-list-item>
          <router-link to="/Danh-sach-may-in" style="text-decoration: none; color: inherit;">
            <v-list-item-title color="primary">Máy in CIJ</v-list-item-title>
          </router-link>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <router-link to="/Danh-sach-linh-kien" style="text-decoration: none; color: inherit;">
            <v-list-item-title><span>Linh kiện</span></v-list-item-title>
          </router-link>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <router-link to="/" style="text-decoration: none; color: inherit;">
            <v-list-item-title><span>Nguyên liệu</span></v-list-item-title>
          </router-link>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <router-link to="/" style="text-decoration: none; color: inherit;">
            <v-list-item-title><span>Thuê máy</span></v-list-item-title>
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </vContainer>
</template>
<style scoped>
.logo {
  font-family: Inter;
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
