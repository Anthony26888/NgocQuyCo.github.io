<template>
  <v-row justify="start" class="px-3">
    <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="2">
      <v-card
        v-show="FilterDesktop"
        class="mt-2"
        title="Sắp xếp"
        subtitle="Danh mục"
      >
        <template v-slot:append>
          <v-btn
            color="red"
            variant="tonal"
            class="text-capitalize"
            @click="RouterPush(removal)"
            >Xoá chọn</v-btn
          >
        </template>
        <v-card-text>
          <v-list density="compact">
            <v-list-subheader>Máy in phun</v-list-subheader>

            <v-list-item
              v-for="(item, i) in machine"
              :key="i"
              :value="item"
              color="primary"
              @click="RouterPush(item.value)"
            >
              <template v-slot:prepend="{ isActive }">
                <v-list-item-action start>
                  <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                </v-list-item-action>
              </template>

              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
            <v-list-subheader>Linh kiện</v-list-subheader>

            <v-list-item
              v-for="(item, i) in accessory"
              :key="i"
              :value="item"
              color="primary"
              @click="RouterPush(item.value)"
            >
              <template v-slot:prepend="{ isActive }">
                <v-list-item-action start>
                  <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                </v-list-item-action>
              </template>

              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
            <v-list-subheader>Nguyên liệu</v-list-subheader>

            <v-list-item
              v-for="(item, i) in material"
              :key="i"
              :value="item"
              color="primary"
              @click="RouterPush(item.value)"
            >
              <template v-slot:prepend="{ isActive }">
                <v-list-item-action start>
                  <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                </v-list-item-action>
              </template>

              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
      <v-container class="pa-2" fluid>
        <v-card title="Sắp xếp" v-show="FilterMobile">
          <template v-slot:append>
            <v-btn
              color="red"
              variant="tonal"
              class="text-capitalize"
              @click="RouterPush(removal)"
              >Xoá chọn</v-btn
            >
          </template>
          <v-card-text class="d-flex m-2 flex-wrap" justify="center">
            <v-btn
              v-for="item in SelectButtonMobile"
              :key="item"
              class="ma-2 pa-2 text-capitalize"
              variant="outlined"
              :size="sizeButton"
              @click="RouterPush(item.value)"
            >
              {{ item.name }}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-container>
    </v-col>
    <v-col cols="auto" xs="12" sm="12" md="9" lg="9" xl="10">
      <v-card variant="text">
        <v-container class="pa-2" fluid>
          <v-row dense justify="start">
            <v-col
              v-for="item in Product"
              :key="item.name"
              xs="1"
              sm="4"
              md="4"
              lg="3"
              xl="2"
            >
              <v-hover v-slot="{ isHovering, props }" open-delay="100">
                <v-card
                  class="pb-3 card cursor-pointers"
                  :border="isHovering ? 'success md' : false"
                  v-bind="props"
                  flat
                  :width="widthCard"
                  :height="heightCard"
                  @click="RouterDetailPage(item.id, item.type)"
                >
                  <v-img
                    :src="`/src/assets/Image/Product/${item.img}`"
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
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>
import { useAppStore } from "@/store/app";
import { computed } from "vue";
import { useDisplay } from "vuetify";
import router from "../router/index";
const { name } = useDisplay();

const widthCard = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case "xs":
      return 165;
    case "sm":
      return 185;
  }

  return undefined;
});
const heightCard = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case "xs":
      return 320;
    case "sm":
      return 320;
    case "md":
      return 400;
    case "lg":
      return 450;
    case "xl":
      return 450;
    case "xxl":
      return 450;
  }

  return undefined;
});
const FilterDesktop = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case "xs":
      return false;
    case "sm":
      return false;
    case "md":
      return false;
    case "lg":
      return true;
    case "xl":
      return true;
    case "xxl":
      return true;
  }

  return undefined;
});
const FilterMobile = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case "xs":
      return true;
    case "sm":
      return true;
    case "md":
      return true;
    case "lg":
      return false;
    case "xl":
      return false;
    case "xxl":
      return false;
  }

  return undefined;
});
const sizeButton = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case "xs":
      return "small";
    case "sm":
      return "small";
  }

  return undefined;
});
</script>
<script>
const store = useAppStore();

export default {
  data() {
    return {
      machine: [
        { name: "Máy in phun", value: "CIJ" },
        { name: "Máy in Lazer", value: "lazer" },
        { name: "Máy in thùng", value: "TIJ" },
      ],
      accessory: [
        { name: "Lọc", value: "Lọc" },
        { name: "Van", value: "Van" },
        { name: "Board", value: "Board" },
        { name: "Bàn phím", value: "Bàn phím" },
        { name: "Màn hình", value: "LK Màn hình" },
        { name: "Đầu in", value: "LK Đầu in" },
        { name: "Bơm", value: "Bơm" },
        { name: "Khác", value: "Khác" },
      ],
      material: [
        { name: "Mực đen", value: "Mực đen" },
        { name: "Mực vàng", value: "Mực vàng" },
        { name: "Máy trắng", value: "Mực trắng" },
        { name: "Dung môi", value: "NL Dung môi" },
        { name: "Nước rửa", value: "Nước rửa" },
        { name: "Combo", value: "Mực và dung môi" },
      ],
      SelectButtonMobile: [
        { name: "Máy in", value: "printer" },
        { name: "Linh kiện", value: "accessory" },
        { name: "Nguyên liệu", value: "material" },
      ],

      removal: "all",
      SelectRoute: "",
      Product: [],
      Url: store.Url,
    };
  },
  async created() {
    this.FetchProduct();
    this.$watch(() => this.$route.params, this.FetchProduct);
  },
  methods: {
    async FetchProduct() {
      if (this.SelectRoute == "") {
        const res = await fetch(
          `${this.Url}/product?type=${this.$route.params.id}`
        );
        return (this.Product = await res.json());
      }
      if (this.SelectRoute !== "") {
        const res = await fetch(
          `${this.Url}/product?model=${this.$route.params.id}`
        );
        return (this.Product = await res.json());
      }
      if (this.$route.params.id == "all") {
        const res = await fetch(`${this.Url}/product`);
        return (this.Product = await res.json());
      }
    },
    RouterPush(value) {
      if (value == "") {
        this.SelectRoute = value;
        return router.push({
          name: "San-pham",
          params: { id: "tat-ca-san-pham" },
        });
      }
      if (value !== "") {
        this.SelectRoute = value;
        return router.push({ name: "San-pham", params: { id: value } });
      }
      if (value == "all") {
        this.SelectRoute = value
        return router.push({ name: "San-pham", params: { id: value } });
      }
    },
    RouterDetailPage(value, type){
      router.push({name: "DetailProduct", params: {type: type, id: value}})
    }
  },
};
</script>
<style scoped>
.bold {
  font-weight: 700;
}
</style>
