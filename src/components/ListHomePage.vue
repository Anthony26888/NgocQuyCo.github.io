<template>
  <div class="">
    <v-toolbar density="comfortable" class="bg-transparent">
      <v-toolbar-title>
        <h2>Máy in CIJ</h2>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/Danh-sach-may-in" style="text-decoration: none; color: inherit">
        <strong class="p-2">Xem thêm</strong>
      </router-link>
    </v-toolbar>


    <v-slide-group v-model="model" center-active show-arrows>
      <v-slide-group-item >
        <v-card class="bg-grey-lighten-4 card m-1" v-for="value in store.products" :key="value">
          <router-link to="/Thong-tin-san-pham">
            <v-img class="img" :src="value.img" @click="store.GetMachine(value.id)"></v-img>
          </router-link>

          <v-card-subtitle class="pt-2">
            {{ value.model }}
          </v-card-subtitle>

          <v-card-text>
            <h5 class="title-name">{{ value.name }}</h5>            
            <h6 class="text-red-lighten-1 title-price">Giá: Liên hệ</h6>
          </v-card-text>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>

    <v-toolbar density="comfortable" class="bg-transparent mt-3">
      <v-toolbar-title>
        <h2>Linh kiện</h2>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/Danh-sach-linh-kien" style="text-decoration: none; color: inherit">
        <strong class="p-2">Xem thêm</strong>
      </router-link>
    </v-toolbar>

    <v-slide-group v-model="model" class="" center-active show-arrows>
      <v-slide-group-item>
        <v-card class="bg-grey-lighten-4 card m-1" v-for="value in store.accessory.slice(0, 10)" :key="value">
          <router-link to="/Thong-tin-san-pham">
            <v-img class=" img" :src="value.img" @click="store.GetAccessory(value.id)"></v-img>
          </router-link>

          <v-card-subtitle class="pt-4">
            {{ value.model }}
          </v-card-subtitle>

          <v-card-text>
            <h5 class="title-name">{{ value.name }}</h5>
            <br />
            <h6 class="text-red-lighten-1 title-price">Giá: Liên hệ</h6>
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
h2 {
  font-weight: 700;
}

@media only screen and (min-width: 300px) {
  .card {
    max-width: 118px; 
  }

  .img {
    width: 118px;    
  }

  .title-name{
    font-size: 15px;
  }

  .title-price{
    font-size: 12px;
  }
}

@media only screen and (min-width: 400px) {
  .card {
    max-width: 130px; 
  }

  .img {
    width: 130px;    
  }

  .title-name{
    font-size: 15px;
  }

  .title-price{
    font-size: 12px;
  }
}

@media only screen and (min-width: 420px) {
  .card {
    max-width: 140px; 
  }

  .img {
    width: 140px;    
  }

  .title-name{
    font-size: 15px;
  }

  .title-price{
    font-size: 12px;
  }
}

@media only screen and (min-width: 500px) {
  .card {
    width: 350px;
  }

  .img {
    width: 350px;
    
  }
}
</style>
