<template>
    <vContainer>
        <v-breadcrumbs :items="['Trang chủ', 'Sản Phẩm', 'Máy in CIJ']"></v-breadcrumbs>
        <v-app>            
            <List/>                  
        </v-app>
    </vContainer>
</template>
  
<script setup>

import List from "@/components/FilterMachine";
</script>