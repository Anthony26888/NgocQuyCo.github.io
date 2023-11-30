<template>
  <v-toolbar color="light">
    <div class="d-flex">
      
      <router-link to="/" style="text-decoration: none">
        <v-img src="../../assets/Image/logoNG.png" :width="80"></v-img>
      </router-link>
    </div>
        
    <v-spacer></v-spacer>
    <v-toolbar-items>      
      <v-btn color="primary">Giới Thiệu</v-btn>
      <v-btn color="primary">Sản Phẩm</v-btn>
      <v-btn color="primary">Liên Hệ</v-btn>
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
