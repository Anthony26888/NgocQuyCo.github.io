<template>
    <vContainer>
        <v-breadcrumbs :items="['Trang chủ', 'Giới thiệu']"></v-breadcrumbs>
        <v-app>            
            <Intro/>                  
        </v-app>
    </vContainer>
</template>
  
<script setup>

import Intro from "@/components/Intro.vue";

</script>