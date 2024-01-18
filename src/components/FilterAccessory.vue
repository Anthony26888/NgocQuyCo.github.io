<template>
  <v-card>
    <v-toolbar class="p-2">
      <v-chip-group mandatory selected-class="text-success">
        <v-chip
          v-for="item in tag"
          :key="item"
          @click="store.GetFilter(item.title)"
          >{{ item.title }}</v-chip
        >
      </v-chip-group>      
    </v-toolbar>
    <v-container class="pa-2" fluid>      
      <div class="d-flex flex-wrap justify-lg-center algin-center">
        <v-card class="m-3 bg-grey-lighten-4" width="250" v-for="item in store.Filter" :key="item">
          <router-link to="/Thong-tin-san-pham">
            <v-img
              class="align-end img-card p-2"              
              :src="item.img"
              cover
              @click="store.GetAccessory(item.id)"
            ></v-img>
          </router-link>

          <v-card-subtitle class="pt-4">
            {{ item.model }}
          </v-card-subtitle>

          <v-card-text>
            <h5>{{ item.name }}</h5>
            <br />
            <h6 class="text-red-lighten-1">Giá: Liên hệ</h6>
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  </v-card>
</template>
<script setup>
import { useAppStore } from "@/store/app";
const store = useAppStore();

</script>
<script>
export default {  
  data() {
    return {     
      
      tag: [
        { title: "Tất cả" },
        { title: "Lọc" },
        { title: "Board" },
        { title: "Bơm" },
        { title: "Màn hình" },
        { title: "Bàn phím" },
        { title: "Van" },
        { title: "Khác" },
      ],
    };
  },
  methods: {
  
  },
};
</script>
<style scoped>
  .img-card{
    width: 250px;
    height: 250px;
  }
</style>
