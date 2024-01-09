<template>
  <v-breadcrumbs :items="['Trang chủ', 'Sản Phẩm']"></v-breadcrumbs>

  <div class="">
    <v-toolbar density="comfortable">
      <v-toolbar-title><strong>Máy in CIJ</strong></v-toolbar-title>
      <v-spacer></v-spacer>
      <strong class="p-2">Xem tất cả</strong>
    </v-toolbar>
    <div class="d-flex justify-content-sm-center justify-content-lg-start flex-wrap p-4 ">
      <v-card class="m-3 bg-grey-lighten-4" width="300" v-for="value in store.products" :key="value">
        <router-link to="/Thong-tin-san-pham">
          <v-img class="align-end" height="250" width="300" :src="value.img" cover
            @click="store.GetInfo(value.id)"></v-img>
        </router-link>

        <v-card-subtitle class="pt-4">
          {{ value.model }}
        </v-card-subtitle>

        <v-card-text>
          <h5>{{ value.name }}</h5><br>
          <h6 class="text-red-lighten-1">Giá: Liên hệ</h6>
        </v-card-text>
      </v-card>
    </div>

    <v-toolbar density="comfortable">
      <v-toolbar-title><strong>Linh kiện lọc máy in CIJ</strong></v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/Danh-sach">
        <strong class="p-2">Xem tất cả</strong>
      </router-link>      
    </v-toolbar>
    <div class="d-flex justify-content-sm-center justify-content-lg-start flex-wrap p-4">
      <v-card class="m-3" width="300" v-for="value in store.accessory.slice(0, 5)" :key="value">
        <v-img class="align-end" height="250" width="300" :src="value.img" cover></v-img>
        <v-card-subtitle class="pt-4">
          {{ value.model }}
        </v-card-subtitle>

        <v-card-text>
          <h5>{{ value.name }}</h5><br>
          <h6 class="text-red-lighten-1">Giá: Liên hệ</h6>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/store/app";
const store = useAppStore();

</script>

<script>
export default {
  data() {
    return {
      
    }
  },
};
</script>
<style scoped>
</style>
