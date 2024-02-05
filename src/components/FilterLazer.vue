<template>  
  <div v-for="item in store.Lazer" :key="item">
    <VRow align="center" justify="center">
      <VCol cols="12" md="6">
        <router-link to="/Thong-tin-san-pham">
          <v-img :src="item.img"  class="mx-auto animate__animated animate__backInLeft"  width="500" height="500" @click="store.GetDetail(item.id)"></v-img>
        </router-link>        
      </VCol>
      <VCol cols="12" md="6">
        <v-sheet class="p-md-5 p-sm-2 animate__animated animate__backInRight">
          <h2 class="text-teal-darken-1">{{ item.name }}</h2>
          <p class="text-muted">Thương hiệu: {{ item.model }}</p>
          <v-list lines="one"  v-for="value in item.tech" :key="value">
            <v-list-item  prepend-icon="mdi-check-bold">{{ value }}</v-list-item>
          </v-list>
        </v-sheet>
      </VCol>
    </VRow>
    <v-divider :thickness="7"></v-divider>
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
<style scoped>
  h1,h2,h3,h4,h5,h6{
    font-weight: 700;
  }
</style>

