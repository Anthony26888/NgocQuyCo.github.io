<template>
    <vContainer>
        <v-breadcrumbs :items="['Trang chủ', 'Sản Phẩm', 'Danh sách máy in CIJ']"></v-breadcrumbs>
        <v-app>            
            <List/>                  
        </v-app>
    </vContainer>
</template>
  
<script setup>

import List from "@/components/FilterMachine";
</script>