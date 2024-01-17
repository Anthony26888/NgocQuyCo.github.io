<template>
  <vContainer>
    <v-toolbar density="comfortable" class="bg-transparent d-none d-sm-flex">
      <v-toolbar-title>
        <router-link to="/">
          <v-img
            src="../../assets/Image/logoNG.png"
            width="80"
            height="80"
          ></v-img>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn> Giới thiệu </v-btn>

      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props"> Sản phẩm </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn> Liên hệ </v-btn>
    </v-toolbar>

    <v-toolbar density="comfortable" class="d-flex d-sm-none bg-transparent">
      <v-toolbar-title
        ><router-link to="/">
          <v-img
            src="../../assets/Image/logoNG.png"
            width="50"
            height="50"
          ></v-img> </router-link
      ></v-toolbar-title>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
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
