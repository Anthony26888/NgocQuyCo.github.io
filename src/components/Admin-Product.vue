<template lang="">
  <div v-show="SwitchPages == true">
    <v-card variant="text" >
      <v-card-title class="text-h4 font-weight-light"
        >Danh sách sản phẩm</v-card-title
      >

      <v-card-text>
        <v-card flat variant="text">
          <v-card-title class="d-flex align-center pe-2">
            <v-btn
              color="primary"
              variant="tonal"
              class="text-caption"
              @click="SwitchPage()"
              >Tạo mới</v-btn
            >
            <v-spacer></v-spacer>

            <v-text-field
              v-model="search"
              density="compact"
              label="Tìm kiếm"
              prepend-inner-icon="mdi-magnify"
              variant="solo-filled"
              flat
              hide-details
              single-line
            ></v-text-field>
          </v-card-title>

          <v-divider></v-divider>
          <v-data-table-virtual
            fixed-header
            :headers="headers"
            :items="store.ListFilter"
            height="700"
            :search="search"
          >
            <template v-slot:item.img="{ value }">
              <v-img
                :src="`/src/assets/Image/Product/${value}`"
                width="100"
                height="100"
              ></v-img>
            </template>
            <template v-slot:item.edit="{ value }">
              <v-btn
                icon="mdi mdi-file-edit-outline"
                color="primary"
                size="x-small"
              ></v-btn>
            </template>
          </v-data-table-virtual>
        </v-card>
      </v-card-text>
    </v-card>
  </div>
  <div v-show="SwitchPages == false">
    <v-btn
      prepend-icon="mdi mdi-arrow-left"
      variant="text"
      class="m-2 text-caption"
      @click="SwitchPages = true"
    >
      Quay lại
    </v-btn>
    <FormNewProduct/>
  </div>
</template>
<script setup>
import { useAppStore } from "@/store/app";

import FormNewProduct from "@/components/Admin-FormNewProduct.vue"
const store = useAppStore();
store.FetchProduct();
</script>
<script>
export default {
  data() {
    return {

      SwitchPages: true,
      search: "",
      headers: [
        {
          align: "start",
          key: "id",
          title: "ID",
        },
        {
          align: "start",
          key: "img",
          title: "Hình ảnh",
        },
        {
          align: "start",
          key: "name",
          title: "Tên sản phẩm",
        },
        { key: "type", title: "Định dạng" },
        { key: "model", title: "Loại sản phẩm" },
        { key: "brand", title: "Thương hiệu" },
        { key: "edit", title: "Chỉnh sửa" },
      ],
    };
  },
  methods: {
    SwitchPage() {
      this.SwitchPages = false;
    },



  },
};
</script>
<style lang=""></style>
