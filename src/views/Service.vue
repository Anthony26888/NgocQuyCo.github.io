<template lang="">
  <v-main>
    <v-container class="pa-2" fluid>
      <v-breadcrumbs :items="['Trang chủ', 'Thuê máy']"></v-breadcrumbs>
      <Service />
      <Form />
    </v-container>
  </v-main>
</template>
<script setup>
import Service from "@/components/Service.vue";
import Form from "@/components/Form.vue";
</script>

<style lang=""></style>
