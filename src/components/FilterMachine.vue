<template>  
  <div v-for="item in store.products" :key="item">
    <VRow>
      <VCol align="center" justify="center">
        <v-img :src="item.img" width="500" height="500"></v-img>
      </VCol>
      <VCol>
        <v-sheet class="p-md-5 p-sm-2">
          <h3 class="text-teal-darken-1">{{ item.name }}</h3>
          <p class="text-muted">Model: {{ item.model }}</p>
          <v-list lines="one">
            <v-list-item v-for="value in item.feature"  prepend-icon="mdi-check-bold">{{ value }}</v-list-item>
          </v-list>
          <router-link to="/Thong-tin-san-pham">
            <VBtn class="bg-teal-darken-1" @click="store.GetInfo(value.id)">Xem thêm</VBtn>
          </router-link>
          
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

