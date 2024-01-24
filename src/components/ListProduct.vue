<template lang=""> 
  <div v-for="item in items" :key="item">
    <VRow>
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
    <v-divider></v-divider>
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
          title: "Máy in phun CIJ Linx",
          description:
            "Hệ thống Máy phun mực liên tục (CIJ) được sử dụng để in thông tin thay đổi, chẳng hạn như ngày tháng, lô hoặc mã vạch, trên các sản phẩm riêng lẻ khi chúng di chuyển dọc theo dây chuyền sản xuất, bất kể độ xốp, kích thước, hình dạng hoặc kết cấu.",
          img: "https://www.codeplus.co.th/uploads/4240/photos/202205/202205-19-095927_N53W-0.jpg",
          direction:"/Danh-sach-may-in"
        },
        {
          title: "Linh kiện Linx",
          description:
            "Chuyên cung cấp tất cả các linh kiện máy in Linx. Bao gồm lọc, Board, Màn hình,....",
          img: "https://sc04.alicdn.com/kf/Hf0b9121dbb2b4d64bad71abaace22973Y.jpg_1200x1200.jpg",
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
