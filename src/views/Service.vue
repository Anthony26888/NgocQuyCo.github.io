<template lang="">
  <vContainer>
    <v-app>
      <v-breadcrumbs
        :items="['Trang chủ', 'Thuê máy']"
      ></v-breadcrumbs>
      <Service />
      <v-card class="mt-5 bg-teal-lighten-5">
        <Form />
      </v-card>
    </v-app>
  </vContainer>
</template>
<script setup>
import Service from "@/components/Service.vue";
import Form from "@/components/Form.vue";
</script>

<style lang=""></style>
