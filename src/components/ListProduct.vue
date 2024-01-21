<template lang="">
  <div>
    <VRow>
      <VCol cols xs="12" md="6">
        <router-link to="/Danh-sach-may-in">
          <v-img
            src="https://www.codeplus.co.th/uploads/4240/photos/202205/202205-19-095927_N53W-0.jpg"
            height="400"
          ></v-img>
        </router-link>
      </VCol>
      <VCol cols xs="12" md="6" class="mt-3">
        <h3 class="text-teal-darken-1">Máy in phun CIJ Linx</h3>
        <p class="text-muted">
          Hệ thống Máy phun mực liên tục (CIJ) được sử dụng để in thông tin thay
          đổi, chẳng hạn như ngày tháng, lô hoặc mã vạch, trên các sản phẩm
          riêng lẻ khi chúng di chuyển dọc theo dây chuyền sản xuất – bất kể độ
          xốp, kích thước, hình dạng hoặc kết cấu.
        </p>
      </VCol>
    </VRow>
  </div>

  <v-divider></v-divider>
  <div class="">
    <VRow>
      <VCol cols xs="12" md="6">
        <router-link to="/Danh-sach-may-in">
          <v-img
            src="https://sc04.alicdn.com/kf/Hf0b9121dbb2b4d64bad71abaace22973Y.jpg_1200x1200.jpg"
            height="400"
          ></v-img>
        </router-link>
      </VCol>
      <VCol cols xs="12" md="6" class="mt-3">
        <h3 class="text-teal-darken-1">Linh kiện Linx</h3>
        <p class="text-muted">
          Chuyên cung cấp tất cả các linh kiện máy in Linx. Bao gồm lọc, Board,
          Màn hình,....
        </p>
      </VCol>
    </VRow>
  </div>

  <v-divider></v-divider>
  <div class="">
    <VRow>
      <VCol cols xs="12" md="6">
        <router-link to="/Danh-sach-may-in">
          <v-img src="../assets/Image/dungmoi.png" height="400"></v-img>
        </router-link>
      </VCol>
      <VCol cols xs="12" md="6" class="mt-3">
        <h3 class="text-teal-darken-1">Nguyên liệu</h3>
        <p class="text-muted">
          Chuyên cung cấp tất cả sản phẩm mực và dung môi cho máy in Linx.
        </p>
      </VCol>
    </VRow>
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
      item: [
        {
          title: "Máy in phun CIJ Linx",
          description:
            "Hệ thống Máy phun mực liên tục (CIJ) được sử dụng để in thông tin thay đổi, chẳng hạn như ngày tháng, lô hoặc mã vạch, trên các sản phẩm riêng lẻ khi chúng di chuyển dọc theo dây chuyền sản xuất, bất kể độ xốp, kích thước, hình dạng hoặc kết cấu.",
          img: "https://static.wixstatic.com/media/8c3fb9_fb7179d98c0a424f9f8184c0f23dc824~mv2.jpg/v1/fill/w_602,h_263,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Picture1_edited.jpg",
        },
        {
          title: "Linh kiện Linx",
          description:
            "Chuyên cung cấp tất cả các linh kiện máy in Linx. Bao gồm lọc, Board, Màn hình,....",
          img: "https://sc04.alicdn.com/kf/Hf0b9121dbb2b4d64bad71abaace22973Y.jpg_1200x1200.jpg",
        },
        {
          title: "Nguyên liệu",
          description:
            "Chuyên cung cấp tất cả sản phẩm mực và dung môi cho máy in Linx.",
          img: "https://sc04.alicdn.com/kf/Hf0b9121dbb2b4d64bad71abaace22973Y.jpg_1200x1200.jpg",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
