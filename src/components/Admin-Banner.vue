<template lang="">
  <v-card width="100%">
    <v-card-title class="text-h4 font-weight-light"
      >Danh sách Banner</v-card-title
    >
    <v-card-text>
      <v-data-table-virtual
        fixed-header
        :headers="headers"
        :items="Banner"
        height="700"
      >
        <template v-slot:item.img="{ value }">
          <v-img
            :src="`/src/assets/Image/Banner/${value}`"
            width="100"
            height="100"
          ></v-img>
        </template>
        <template v-slot:item.description="{ value }">
          <p class="d-inline-block text-truncate" style="max-width: 150px">{{value}}</p>
        </template>
        <template v-slot:item.id="{ value }">
          <v-btn
            icon="mdi mdi-file-edit-outline"
            variant="tonal"
            color="primary"
            size="x-small"
            :to="`/Admin/Danh-sach-Banner/Chinh-sua-Banner/${value}`"
          ></v-btn>
        </template>
      </v-data-table-virtual>
    </v-card-text>
  </v-card>
</template>
<script setup>
import { useAppStore } from "@/store/app";

</script>

<script>
const store = useAppStore();
export default {
  data() {
    return {
      Banner:[],
      headers: [
        {
          align: "start",
          key: "img",
          title: "Hình ảnh",
        },
        {
          align: "start",
          key: "name",
          title: "Tên hình ảnh",
        },
        { key: "title", title: "Tiêu đề" },
        { key: "description", title: "Mô tả" },
        { key: "location", title: "Vị trí" },
        { key: "id", title: "Chỉnh sửa" },
      ],
    };
  },
  created() {
    this.FetchBanner()
  },
  methods: {
    async FetchBanner(){
      const res = await fetch(`${store.Url}/data/banner`)
      this.Banner = await res.json()
    }
  },
};
</script>
<style lang=""></style>
