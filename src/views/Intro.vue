<template>
  <v-main>
    <v-container class="pa-2" fluid>
      <v-breadcrumbs :items="['Trang chủ', 'Giới thiệu']"></v-breadcrumbs>
      <Intro />
    </v-container>
  </v-main>
</template>

<script setup>
import Intro from "@/components/Intro.vue";
</script>
