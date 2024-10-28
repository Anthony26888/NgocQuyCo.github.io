<template>
  <v-main class="bg-grey-lighten-4">
    <v-container class="pa-2" fluid>
      <v-breadcrumbs
        :items="['Trang chủ', 'Sản Phẩm', 'Thông tin sản phẩm']"
      ></v-breadcrumbs>
      <InfoProduct/>
    </v-container>
  </v-main>
</template>

<script setup>
import InfoProduct from "@/components/InfoProduct";
</script>
<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
};
</script>

<style scoped></style>
