<template>
  <v-card>
    <v-skeleton-loader type="heading" :loading="loading">
      <v-toolbar class="p-2">
        <v-slide-group show-arrows>
          <v-slide-group-item>
            <v-chip-group mandatory selected-class="text-success">
              <v-chip v-for="item in tag" :key="item" @click="store.GetFilterInk(item.title)">{{ item.title }}</v-chip>
            </v-chip-group>
          </v-slide-group-item>
        </v-slide-group>
      </v-toolbar>
    </v-skeleton-loader>
   
    <div class="d-flex flex-wrap justify-center">
      <v-skeleton-loader type="card" :loading="loading" class="ma-2 mb-2 rounded-xl card-load"
        v-for="value in store.FilterInk" :key="value">
        <v-card class="bg-grey-lighten-4 rounded-xl" hover>
          <v-img class="img" :src="value.img" @click="store.GetDetail(value.id)"></v-img>
          <v-card-text class="text-center">
            <h6 class="title-name">{{ value.name }}</h6>
            <h6 class="text-red-lighten-1 title-price">Giá: Liên hệ</h6>
          </v-card-text>
        </v-card>
      </v-skeleton-loader>
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
      loading: true,
      tag: [
        { title: "Tất cả" },
        { title: "Mực đen" },
        { title: "Mực vàng" },
        { title: "Mực trắng" },
        { title: "Dung môi" },
        { title: "Mực và dung môi" }
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
};
</script>
<style scoped>
@media only screen and (min-width: 300px) {
  .card {
    max-width: 140px;
    height: 240px;
  }

  .card-load {
    width: 140px;
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

  .card-load {
    width: 160px;
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

  .card-load {
    width: 230px;
  }

  .img {
    width: 230px;
  }
}

@media only screen and (min-width: 1024px) {
  .card {
    width: 300px;
    height: 410px;
  }

  .card-load {
    width: 300px;
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
