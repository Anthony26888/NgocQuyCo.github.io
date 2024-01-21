<template>  
  <div v-for="item in store.products" :key="item">
    <VRow>
      <VCol align="center" justify="center">
        <router-link to="/Thong-tin-san-pham">
          <v-img :src="item.img" width="500" height="500" @click="store.GetMachine(item.id)"></v-img>
        </router-link>        
      </VCol>
      <VCol>
        <v-sheet class="p-md-5 p-sm-2">
          <h3 class="text-teal-darken-1">{{ item.name }}</h3>
          <p class="text-muted">Model: {{ item.model }}</p>
          <v-list lines="one">
            <v-list-item v-for="value in item.tech"  prepend-icon="mdi-check-bold">{{ value }}</v-list-item>
          </v-list>       
          
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

