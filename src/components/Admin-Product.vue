<template lang="">
  <v-card width="100%">
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
            to="/Admin/Danh-sach-san-pham/Tao-san-pham-moi"
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
          <template v-slot:item.imgDetail="{ value }">
            <v-img
              :src="`/src/assets/Image/Product/${value[0]}`"
              width="100"
              height="100"
            ></v-img>
          </template>
          <template v-slot:item.id="{ value }">
            <v-btn
              icon="mdi mdi-file-edit-outline"
              variant="tonal"
              color="primary"
              size="x-small"
              @click="EditForm(value)"
            ></v-btn>
            <v-btn
              class="m-2"
              icon="mdi mdi-delete-empty"
              variant="tonal"
              color="danger"
              size="x-small"
              @click="DialogDelete = true, GetID = value"
            ></v-btn>
          </template>
        </v-data-table-virtual>
      </v-card>
    </v-card-text>
  </v-card>
  <v-dialog v-model="DialogDelete" width="auto">
    <v-card
      max-width="400"
      prepend-icon="mdi mdi-delete-empty"
      text="Bạn có chắc xoá sản phẩm?"
      title="Xoá sản phẩm"
    >
      <template v-slot:actions>
        <v-btn
          class="ms-auto"
          text="Xác nhận"
          @click="(DialogDelete = false), DeleteProduct()"
          color="danger"
          variant="tonal"
          to="/Admin/Danh-sach-san-pham"
        ></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
<script setup>
import axios from "axios";
import router from "../router/index";
import { useAppStore } from "@/store/app";

store.FetchProduct();
</script>
<script>
const store = useAppStore();
export default {
  data() {
    return {
      GetID:"",
      DialogDelete:false,
      search: "",
      headers: [
        {
          align: "start",
          key: "imgDetail",
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
        { key: "id", title: "Chỉnh sửa" },
      ],
    };
  },
  methods: {
    EditForm(value) {
      router.push({ name: "Chỉnh sửa sản phẩm", params: { id: value } });
    },
    DeleteProduct() {
      axios
        .delete(`${store.Url}/data/delete/product/${this.GetID}`)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
<style lang=""></style>
