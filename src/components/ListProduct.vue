<template lang=""> 
  <div v-for="item in items" :key="item">
    <VRow justify="center" align="center">
      <VCol cols xs="12" md="6">
        <router-link :to="item.direction">
          <v-img
            :src="item.img"
            height="400"
          ></v-img>
        </router-link>
      </VCol>
      <VCol cols xs="12" md="6" class="mt-3">
        <h3 class="text-teal-darken-1">{{ item.title }}</h3>
        <p class="text-muted">
          {{item.description}}
        </p>
      </VCol>
    </VRow>
    <v-divider :thickness="7"></v-divider>
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
      items: [
        {
          title: "Máy in date",
          description:
            "Hệ thống Máy phun mực liên tục (CIJ) được sử dụng để in thông tin thay đổi, chẳng hạn như ngày tháng, lô hoặc mã vạch, trên các sản phẩm riêng lẻ khi chúng di chuyển dọc theo dây chuyền sản xuất, bất kể độ xốp, kích thước, hình dạng hoặc kết cấu.",
          img: "https://i.ibb.co/2WZJf3C/listproduct.png",
          direction:"/Danh-sach-may-in"
        },
        {
          title: "Linh kiện",
          description:
            "Chuyên cung cấp tất cả các linh kiện máy in Linx. Bao gồm lọc, Board, Màn hình,....",
          img: "https://i.ibb.co/BqmfYZx/accessory.png",
          direction:"/Danh-sach-linh-kien"
        },
        {
          title: "Nguyên liệu",
          description:
            "Chuyên cung cấp tất cả sản phẩm mực và dung môi cho máy in Linx.",
          img: "https://i.ibb.co/GpnSFtg/ink.png",
          direction:"/"
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
