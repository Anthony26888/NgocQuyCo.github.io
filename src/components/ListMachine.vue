<template lang="">
  <div v-for="item in store.products" :key="item">
    <VRow>
      <VCol align="center" justify="center">
        <v-img :src="item.img" width="500" height="500"></v-img>
      </VCol>
      <VCol>
        <v-sheet>
          <h3 class="text-teal-darken-1">{{ item.name }}</h3>
          <p class="text-muted">Model: {{ item.model }}</p>
          <v-list lines="one">
            <v-list-item
              v-for="value in item.feature"
              
            >{{value}}</v-list-item>
          </v-list>
          <VBtn>Xem thêm</VBtn>
        </v-sheet>
      </VCol>
    </VRow>
    <v-divider></v-divider>
  </div>
</template>
<script setup>
import { useAppStore } from "@/store/app";
const store = useAppStore();
</script>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang=""></style>
