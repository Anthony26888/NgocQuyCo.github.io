<template lang="">
  <div v-for="item in items" :key="item">
    <VRow justify="center" align="center" >
      <VCol cols xs="12" md="6">
        <router-link :to="item.direction">
          <v-img
            :src="item.img"
            height="400"
            class="animate__animated animate__backInLeft"
          ></v-img>
        </router-link>
      </VCol>
      <VCol cols xs="12" md="6" >
        <v-sheet class="animate__animated animate__backInRight">
          <h1 class="text-teal-darken-1 bold">{{ item.title }}</h1>
          <p class="text-muted">
            {{ item.description }}
          </p>
        </v-sheet>     
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
          title: "MÁY IN DATE",
          description:
            "Hệ thống Máy phun mực liên tục (CIJ) được sử dụng để in thông tin thay đổi, chẳng hạn như ngày tháng, lô hoặc mã vạch, trên các sản phẩm riêng lẻ khi chúng di chuyển dọc theo dây chuyền sản xuất, bất kể độ xốp, kích thước, hình dạng hoặc kết cấu.",
          img: "https://i.ibb.co/2WZJf3C/listproduct.png",
          direction: "/Danh-sach-may-in-date",
        },
        {
          title: "MÁY IN THÙNG",
          description:
            "Ứng dụng công nghệ gia nhiệt (Thermal Ink Jet – TIJ) Tiết kiệm chi phí, không cần bảo trì! Máy in tốt trên chất liệu thùng carton, hộp giấy carton, gỗ, vỏ trứng, nhựa cứng, nhựa dẻo, kim loại, nhôm, vật liệu xây dựng.",
          img: "https://i.ibb.co/TBdHhkW/1.png",
          direction: "/Danh-sach-may-in-thung",
        },
        {
          title: "MÁY KHẮC LAZER",
          description:
            "Máy khắc laser là giải pháp lý tưởng hoàn toàn đáp ứng các yêu cầu của khách hàng như: Không tiêu hao nguyên liệu, Hoạt động bền bỉ, vận hành dễ dàng, Thông tin được khắc đảm bảo chắc chắn, khó bị tẩy xóa, n được nhiều loại bản tin khác như như: Barcode, Qr Code, Ngày sản xuất – Hạn sử dụng.",
          img: "https://i.ibb.co/d6xgHj8/1.png",
          direction: "/Danh-sach-may-in-thung",
        },
        {
          title: "LINH KIỆN",
          description:
            "Chuyên cung cấp tất cả các linh kiện máy in Linx. Bao gồm lọc, Board, Màn hình....",
          img: "https://i.ibb.co/BqmfYZx/accessory.png",
          direction: "/Danh-sach-linh-kien",
        },
        {
          title: "NGUYÊN LIỆU",
          description:
            "Chuyên cung cấp tất cả sản phẩm mực và dung môi cho máy in date và máy in TIJ.",
          img: "https://i.ibb.co/GpnSFtg/ink.png",
          direction: "/Danh-sach-nguyen-lieu",
        },
      ],
    };
  },
};
</script>
<style scoped>
  .bold{
    font-weight: 700;
  }
</style>
