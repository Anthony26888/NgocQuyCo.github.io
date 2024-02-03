<template>
  <v-card>
    <v-toolbar class="p-2">
      <v-slide-group show-arrows>
        <v-slide-group-item>
          <v-chip-group mandatory selected-class="text-success">
            <v-chip v-for="item in tag" :key="item" @click="store.GetFilter(item.title)">{{ item.title }}</v-chip>
          </v-chip-group>
        </v-slide-group-item>
      </v-slide-group>
    </v-toolbar>
    <div class="d-flex flex-wrap justify-center algin-center p-3">
      <v-card class="bg-grey-lighten-4 card m-1 animate__animated animate__bounceInUp" v-for="item in store.FilterAccessory" :key="item">
        <router-link to="/Thong-tin-san-pham" style="text-decoration: none; color: inherit;">
          <v-img class="img" :src="item.img" @click="store.GetDetail(item.id)"></v-img>
          <v-card-text>
            <h5 class="title-name text-center">{{ item.name }}</h5>
            <h6 class="text-red-lighten-1 title-price text-center">Giá: Liên hệ</h6>
          </v-card-text>
        </router-link>
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
    max-width: 140px;
    height: 240px;
  }

  .img {
    width: 140px;
  }

  .title-name {
    font-size: 15px;
  }

  .title-price {
    font-size: 12px;
  }
}

@media only screen and (min-width: 400px) {
  .card {
    max-width: 160px;
    height: 240px;
  }

  .img {
    width: 160px;
  }

  .title-name {
    font-size: 15px;
  }

  .title-price {
    font-size: 12px;
  }
}

@media only screen and (min-width: 700px) {
  .card {
    max-width: 230px;
    height: 300px;
  }

  .img {
    width: 230px;

  }
}

@media only screen and (min-width: 1024px) {
  .card {
    max-width: 300px;
    height: 410px;
  }

  .img {
    width: 300px;
    height: 300px;

  }

  .title-name {
    font-size: 20px;
  }

  .title-price {
    font-size: 18px;
  }
}
</style>
