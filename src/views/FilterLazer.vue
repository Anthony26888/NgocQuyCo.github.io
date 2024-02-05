<template>
    <vContainer>
        <v-breadcrumbs :items="['Trang chủ', 'Sản Phẩm', 'Máy khắc Lazer']"></v-breadcrumbs>
        <v-app>
            <List />
        </v-app>
    </vContainer>
</template>
  
<script setup>

import List from "@/components/FilterLazer.vue";
</script>
<script>
export default {
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    },
};
</script>