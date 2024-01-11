<template>
  <vContainer>
    <v-app>
      <carousels />
      <Home/>
      
      <List class="mt-5"/>
    </v-app>
  </vContainer>
</template>

<script setup>
import carousels from "@/components/carousels";
import Home from "@/components/HomePage";
import List from "@/components/ListProduct.vue";
</script>
