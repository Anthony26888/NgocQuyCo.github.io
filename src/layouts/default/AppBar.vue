<template>
  <v-toolbar border density="comfortable">
    <v-toolbar-title class="p-3">
      <router-link to="/">
        <v-img src="../../assets/Image/logoNG.png" width="80" height="80"></v-img>
      </router-link>      
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn>
      Giới thiệu
    </v-btn>

    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">
          Sản phẩm
        </v-btn>
      </template>

      <v-list width="300">
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn>
      Liên hệ
    </v-btn>
  </v-toolbar>
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
        { text: 'Men', icon: 'mdi-folder' },
        { text: 'Women', icon: 'mdi-account-multiple' },
        { text: 'Kids', icon: 'mdi-star' },
        { text: 'Accessory', icon: 'mdi-history' }

      ],
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    };
  },
};
</script>
