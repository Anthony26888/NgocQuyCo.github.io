<template>
  <v-sheet class="mx-auto bg-grey-lighten-3" :max-width="width" rounded>
    <v-card variant="text" title="Sản phẩm">
      <template v-slot:append>
        <v-btn
          class="text-caption"
          variant="text"
          color="primary"
          @click="RouterPush(id)"
          >Xem thêm</v-btn
        >
      </template>
      <v-card-text>
        <v-slide-group>
          <v-slide-group-item
            v-for="item in store.ListPrinter"
            :key="item.id"
            center-active
          >
            <v-hover v-slot="{ isHovering, props }" open-delay="100">
              <v-card
                class="ma-2 card cursor-pointers"
                :border="isHovering ? 'success md' : false"
                v-bind="props"
                flat
                :width="widthCard"
                :height="heightCard"
                @click="RouterDetailPage(item.id, item.type)"
              >
                <v-img
                  :src="`/src/assets/Image/Product/${item.imgDetail[0]}`"
                  class="m-3 cursor-pointers rounded"
                ></v-img>
                <v-divider class="mx-4"></v-divider>
                <v-card-title class="text-wrap text-body-1">{{
                  item.name
                }}</v-card-title>
                <v-card-subtitle class="text-subtitle-2">{{
                  item.brand
                }}</v-card-subtitle>
                <v-card-text class="text-danger">Giá: Liên hệ</v-card-text>
              </v-card>
            </v-hover>
          </v-slide-group-item>
        </v-slide-group>
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import { computed } from "vue";
import { useDisplay } from "vuetify";
import router from "../router/index";
const { name } = useDisplay();

const width = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case "xs":
      return 390;
    case "sm":
      return 430;
    case "md":
      return 768;
    case "lg":
      return 1400;
    case "xl":
      return 1900;
    case "xxl":
      return 2500;
  }

  return undefined;
});
const widthCard = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case "xs":
      return 153;
    case "sm":
      return 125;
    case "md":
      return 190;
    case "lg":
      return 208;
    case "xl":
      return 280;
    case "xxl":
      return 280;
  }

  return undefined;
});
const store = useAppStore();
store.FetchProduct();
</script>

<script>
export default {
  data() {
    return {
      id: "printer",
    };
  },
  methods: {
    RouterPush(value) {
      return router.push({ name: "San-pham", params: { id: value } });
    },
    RouterDetailPage(value, type){
      router.push({name: "DetailProduct", params: {type: type, id: value}})
    }
  },
};
</script>
<style scoped></style>
