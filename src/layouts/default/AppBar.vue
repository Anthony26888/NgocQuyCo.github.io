<template>
  <v-toolbar class="bg-light">
    <div class="d-flex">
      
      <router-link to="/" style="text-decoration: none">
        <v-img class="m-4" src="../../assets/Image/logoNG.png" :width="120" :height="70"></v-img>
      </router-link>
    </div>
        
    <v-spacer></v-spacer>
    <v-toolbar-items>      
      <v-btn class="text-teal-accent-4">Giới Thiệu</v-btn>
      <v-btn class="text-teal-accent-4">Sản Phẩm</v-btn>
      <v-btn class="text-teal-accent-4">Liên Hệ</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<style scoped>
  img{
    width: 80px;
    height: 80px;
  }
</style>
<script setup>
//
</script>
