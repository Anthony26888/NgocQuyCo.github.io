<template>
    <vContainer>
        <v-breadcrumbs :items="['Trang chủ', 'Sản Phẩm', 'Danh sách sản phẩm']"></v-breadcrumbs>
        <v-app>            
            <Filter />
        </v-app>
    </vContainer>
</template>
  
<script setup>
import Filter from "@/components/FilterProduct.vue";
</script>