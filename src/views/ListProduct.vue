<template>
  <v-main class="bg-grey-lighten-4">
    <v-container class="pa-2" fluid>
      <v-breadcrumbs :items="['Trang chủ', 'Sản Phẩm']"></v-breadcrumbs>
      <List />
    </v-container>

  </v-main>
</template>

<script setup>
import List from "@/components/ListProduct";
</script>
