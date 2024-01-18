<template>
  <div class="">
    <v-toolbar density="comfortable" class="bg-transparent">
      <v-toolbar-title><h2>Máy in CIJ</h2></v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/Danh-sach-may-in" style="text-decoration: none; color: inherit;">
        <strong class="p-2">Xem thêm</strong>
      </router-link>
    </v-toolbar>

    <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
      <v-slide-group-item>
        <v-card class="m-2 bg-grey-lighten-4" width="300" v-for="value in store.products" :key="value">
        <router-link to="/Thong-tin-san-pham">
          <v-img class="align-center" height="250" width="300" :src="value.img" cover
            @click="store.GetMachine(value.id)"></v-img>
        </router-link>

        <v-card-subtitle class="pt-4">
          {{ value.model }}
        </v-card-subtitle>

        <v-card-text>
          <h5>{{ value.name }}</h5>
          <br />
          <h6 class="text-red-lighten-1">Giá: Liên hệ</h6>
        </v-card-text>
      </v-card>
      </v-slide-group-item>
    </v-slide-group>


    <v-toolbar density="comfortable" class="bg-transparent">
      <v-toolbar-title><h2>Linh kiện</h2></v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/Danh-sach-linh-kien" style="text-decoration: none; color: inherit;">
        <strong class="p-2">Xem thêm</strong>
      </router-link>
    </v-toolbar>
    
    <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
      <v-slide-group-item>
        <v-card class="m-2 bg-grey-lighten-4" width="300" v-for="value in store.accessory.slice(0,10)" :key="value">
        <router-link to="/Thong-tin-san-pham">
          <v-img class="align-center" height="250" width="300" :src="value.img" cover
            @click="store.GetAccessory(value.id)"></v-img>
        </router-link>

        <v-card-subtitle class="pt-4">
          {{ value.model }}
        </v-card-subtitle>

        <v-card-text>
          <h5>{{ value.name }}</h5>
          <br />
          <h6 class="text-red-lighten-1">Giá: Liên hệ</h6>
        </v-card-text>
      </v-card>
      </v-slide-group-item>
    </v-slide-group>
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
      model: null,
    };
  },
};
</script>
<style scoped>
  h2{
    font-weight: 700;
  }
</style>

