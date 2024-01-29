<template>
  <v-toolbar density="comfortable" class="bg-grey-lighten-2 mt-5">
    <h2 class="text-teal-darken-1 title-slide bg-amber-lighten-2 p-3 text-center mt-2">NGUYÊN LIỆU</h2>
    <v-spacer></v-spacer>
    <router-link to="/Danh-sach-nguyen-lieu" style="text-decoration: none; color: inherit">
      <strong class="text-teal-darken-1 p-2">Xem thêm</strong>
    </router-link>
  </v-toolbar>

  <Carousel v-bind="settings" :breakpoints="breakpoints" class="mt-3">
    <Slide v-for="value in store.ink.slice(0, 10)" :key="value">
      <router-link to="/Thong-tin-san-pham" style="text-decoration: none; color: inherit;">
        <v-card class="bg-grey-lighten-4 card animate__flipInX">
          <v-img class="img" :src="value.img" @click="store.GetInk(value.id)"></v-img>          
          <v-card-text>
            <h5 class="title-name">{{ value.name }}</h5>
            <h6 class="text-red-lighten-1 title-price">Giá: Liên hệ</h6>
          </v-card-text>
        </v-card>
      </router-link>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup>

import { useAppStore } from "@/store/app";
const store = useAppStore();
</script>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Breakpoints',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 2,
      snapAlign: 'start',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: 'center',
      },
      1280: {
        itemsToShow: 5,
        snapAlign: 'center',
      },
      1920: {
        itemsToShow: 7,
        snapAlign: 'center',
      }
    },
  }),
})
</script>
<style scoped>
h2 {
  font-weight: 700;
}
.title-slide{
  width: 250px;
}

@media only screen and (min-width: 300px) {
  .card {
    max-width: 160px;
    height:250px;
  }

  .img {
    width: 170px;
  }

  .title-name {
    font-size: 15px;
  }

  .title-price {
    font-size: 12px;
  }
  .title-slide{
    font-size: 20px;
  }
}

@media only screen and (min-width: 400px) {
  .card {
    max-width: 180px;
    height:280px;
  }

  .img {
    width: 180px;
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
    height:300px;
  }

  .img {
    width: 230px;

  }
  .title-slide{
    font-size: 27px;
  }
}
@media only screen and (min-width: 850px) {
  .card {
    max-width: 280px;
    height:350px
  }

  .img {
    width: 280px;

  }
  .title-slide{
    font-size: 27px;
  }
}
@media only screen and (min-width: 1024px) {
  .card {
    max-width: 280px;
    height:380px
  }

  .img {
    width: 280px;

  }

  .title-name {
    font-size: 20px;
  }

  .title-price {
    font-size: 18px;
  }
}

@media only screen and (min-width: 1280px) {
  .card {
    max-width: 220px;
    height:320px
  }

  .img {
    width: 220px;

  }

  .title-name {
    font-size: 20px;
  }

  .title-price {
    font-size: 18px;
  }
}
@media only screen and (min-width: 1920px) {
  .card {
    max-width: 240px;
    height:350px
  }

  .img {
    width: 240px;

  }

  .title-name {
    font-size: 20px;
  }

  .title-price {
    font-size: 18px;
  }
}
</style>
