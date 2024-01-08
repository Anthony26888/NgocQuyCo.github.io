<template>
  <v-breadcrumbs :items="['Trang chủ', 'Sản Phẩm']"></v-breadcrumbs>

  <div class="">
    <v-sheet :elevation="2" class="p-2 bg-sheet">
      <strong>Máy In CIJ</strong>
    </v-sheet>
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

    <v-sheet :elevation="2" class="p-2 bg-sheet mt-3">
      <strong>Linh kiện máy in</strong>
    </v-sheet>
    <div class="d-flex justify-content-sm-center justify-content-lg-start flex-wrap p-4">
      <v-card class="m-3" width="300" v-for="value in store.accessory" :key="value">
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
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
    }
  },
};
</script>
<style scoped>
.bg-sheet {
  color: white;
  background: #808080;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #3fada8, #808080);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #3fada8, #808080);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


}</style>
