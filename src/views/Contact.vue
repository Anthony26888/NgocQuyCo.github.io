<template>
  <v-main>
    <v-container class="pa-2" fluid>
      <v-breadcrumbs :items="['Trang chủ', 'Liên hệ']"></v-breadcrumbs>
      <Contact />
    </v-container>
  </v-main>
</template>

<script setup>
import Contact from "@/components/Contact.vue";
</script>
