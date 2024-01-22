<template>
  <v-card>
    <v-toolbar class="p-2">
      <v-chip-group mandatory selected-class="text-success">
        <v-chip v-for="item in tag" :key="item" @click="store.GetFilter(item.title)">{{ item.title }}</v-chip>
      </v-chip-group>
    </v-toolbar>
    <div class="d-flex flex-wrap justify-center algin-center">
      <v-card class="m-1 bg-grey-lighten-4 card" v-for="item in store.Filter" :key="item">
        <router-link to="/Thong-tin-san-pham">
          <v-img class="align-end img" :src="item.img" cover @click="store.GetAccessory(item.id)"></v-img>
        </router-link>

        <v-card-subtitle class="pt-4">
          {{ item.model }}
        </v-card-subtitle>

        <v-card-text>
          <h5 class="title-name">{{ item.name }}</h5>          
          <h6 class="text-red-lighten-1 title-price">Giá: Liên hệ</h6>
        </v-card-text>
      </v-card>
    </div>
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
@media only screen and (min-width: 300px) {
  .card {
    max-width: 170px;
  }

  .img {
    width: 170px;
    height: 200px;
  }

  .title-name {
    font-size: 15px;
  }

  .title-price {
    font-size: 12px;
  }
}



@media only screen and (min-width: 500px) {
  .card {
    max-width: 310px;
  }

  .img {
    width: 310px;

  }
}

@media only screen and (min-width: 800px) {
  .card {
    max-width: 325px;
  }

  .img {
    width: 325px;

  }
}
</style>
