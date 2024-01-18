<template>
    <vContainer>
        <v-breadcrumbs :items="['Trang chủ', 'Sản Phẩm', 'Liên hệ']"></v-breadcrumbs>
        <v-app>            
            <Contact/>                  
        </v-app>
    </vContainer>
</template>
  
<script setup>

import Contact from "@/components/Contact.vue";

</script>