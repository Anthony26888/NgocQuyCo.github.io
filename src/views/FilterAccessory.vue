<template>
    <vContainer>
        <v-breadcrumbs :items="['Trang chủ', 'Sản Phẩm', 'Linh Kiện']"></v-breadcrumbs>
        <v-app>            
            <List/>                  
        </v-app>
    </vContainer>
</template>
  
<script setup>

import List from "@/components/FilterAccessory.vue";
</script>