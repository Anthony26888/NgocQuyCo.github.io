<template>
  <vContainer>
    <v-app>
      <v-breadcrumbs :items="['Trang chủ', 'Sản Phẩm', 'Giải pháp']"></v-breadcrumbs>
      <Solution />
    </v-app>
  </vContainer>
</template>

<script setup>
import Solution from "@/components/Solution.vue";
</script>
