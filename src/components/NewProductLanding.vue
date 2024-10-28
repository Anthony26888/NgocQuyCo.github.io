<template>
  <v-card variant="text" class="frame">
    <v-card-title
      ><h3 class="display-5 text-center text-teal-darken-1">{{ h1 }}</h3></v-card-title
    >
    <v-card-subtitle class="text-center text-wrap">{{
      Subtitle
    }}</v-card-subtitle>
    <v-card-actions>
      <v-spacer />
      <v-btn variant="outlined" class="bg-primary" @click="RoutePush()"
        >Mua ngay</v-btn
      >
      <v-spacer />
    </v-card-actions>
    <v-divider width="300" class="mx-auto"></v-divider>
    <v-card-text>
      <div class="container">
        <v-row cols="auto" justify="center">
          <v-col cols="4" v-for="item in store.BannerNewLanding" :key="item">
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <v-card
                  v-bind="props"
                  :border="isHovering ? 'success md' : false"
                  :height="HeightImg"
                  :width="WidthImg"
                  variant="text"
                  class="borders"
                  @click="RouterDetailPage(item.router, item.type)"
                >
                  <v-img
                    cover
                    :src="`/src/assets/Image/Banner/${item.img}`"
                  ></v-img>
                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import { computed } from "vue";
import { useDisplay } from "vuetify";
import router from "../router/index";
const store = useAppStore();
store.FetchNewLanding();
const { name } = useDisplay();

const WidthImg = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case "xs":
      return 110;
  }

  return undefined;
});
const HeightImg = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case "xs":
      return 130;
    case "sm":
      return 110;
    case "md":
      return 200;
    case "lg":
      return 350;
    case "xl":
      return 420;
  }

  return undefined;
});
</script>

<script>
export default {
  data() {
    return {
      ShopNow: "",
      h1: "Sản phẩm mới",
      Subtitle:
        "Ngọc Quý luôn mang đến những sản phẩm chất lượng và cao cấp nhất đến với khách hàng, với độ chính xác cao và bền bỉ. Ngọc Quý sẽ là sự lựa chọn ",
    };
  },
  methods: {
    RoutePush() {
      router.push({ name: "San-pham", params: { id: "all" } });
    },
    RouterDetailPage(value, type) {
      router.push({ name: "DetailProduct", params: { type: type, id: value } });
    },
  },
};
</script>
<style scoped>
.zoom:hover {
  transform: scale(1.05, 1.05);
  background-color: aqua;
}
.borders {
  border-radius: 60% 40% 17% 83% / 67% 0% 100% 33%;
}
</style>
