<template lang="">
  <div>
    <VRow>
      <VCol>
        <carousels/>
      </VCol>
      <VCol>
        <h3 class="text-teal-darken-1">Máy in phun CIJ Linx</h3>
        <p class="text-muted">
          Hệ thống Máy phun mực liên tục (CIJ) được sử dụng để in thông tin thay
          đổi, chẳng hạn như ngày tháng, lô hoặc mã vạch, trên các sản phẩm
          riêng lẻ khi chúng di chuyển dọc theo dây chuyền sản xuất – bất kể độ
          xốp, kích thước, hình dạng hoặc kết cấu.
        </p>
        <router-link to="/Danh-sach-may-in">
          <VBtn class="bg-teal-darken-1">Xem thêm</VBtn>
        </router-link>
        
      </VCol>
    </VRow>
  </div>

  <v-divider></v-divider>
  <div class="mt-5">
    <VRow>
      <VCol>
        <v-img src="https://sc04.alicdn.com/kf/Hf0b9121dbb2b4d64bad71abaace22973Y.jpg_1200x1200.jpg" height="400"></v-img>
      </VCol>
      <VCol>
        <h3 class="text-teal-darken-1">Linh kiện Linx</h3>
        <p class="text-muted">
          Chuyên cung cấp tất cả các linh kiện máy in Linx. Bao gồm lọc, Board, Màn hình,....
        </p>
        <router-link to="/Danh-sach-linh-kien">
          <VBtn class="bg-teal-darken-1">Xem thêm</VBtn>
        </router-link>
      </VCol>
    </VRow>
  </div>

  <v-divider></v-divider>
  <div class="mt-5">
    <VRow>
      <VCol>
        <v-img src="../assets/Image/dungmoi.png" height="400"></v-img>
      </VCol>
      <VCol>
        <h3 class="text-teal-darken-1">Nguyên liệu</h3>
        <p class="text-muted">
          Chuyên cung cấp tất cả sản phẩm mực và dung môi cho máy in Linx.
        </p>
        <router-link to="">
          <VBtn class="bg-teal-darken-1">Xem thêm</VBtn>
        </router-link>
      </VCol>
    </VRow>
  </div>
</template>
<script setup>
import carousels from "@/components/carousels.vue";
import { useAppStore } from "@/store/app";
const store = useAppStore();
</script>
<script>

export default {
  data() {
    return {
      
    };
  },
};
</script>
<style lang=""></style>
