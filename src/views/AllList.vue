<template>
    <vContainer>
        <v-breadcrumbs :items="['Trang chủ', 'Sản Phẩm', 'Danh sách sản phẩm']"></v-breadcrumbs>
        <v-app>            
            <List/>                  
        </v-app>
    </vContainer>
</template>
  
<script setup>

import List from "@/components/ListProduct.vue";

</script>