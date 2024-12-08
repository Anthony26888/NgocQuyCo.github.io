<template>
  <v-main>
    <v-container class="pa-2" fluid>
      <v-breadcrumbs :items="['Trang chủ', 'Giỏ hàng']"></v-breadcrumbs>
      <Contact />
    </v-container>
  </v-main>
</template>

<script setup>
import Contact from "@/components/CartPage.vue";
</script>
