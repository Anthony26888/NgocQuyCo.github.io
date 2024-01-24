<template>
  <vContainer>
        <v-breadcrumbs :items="['Trang chủ', 'Sản Phẩm', 'Chi tiết']"></v-breadcrumbs>
        <v-app>
            <VRow>
                <VCol cols xs="12" md="6">
                    <Slide/> 
                </VCol>
                <VCol cols xs="12" md="6">
                    <InfoProduct/>  
                </VCol>
            </VRow> 
            <Description class="mt-5"/>  
            <SlideSuggest/> 
        </v-app>
    </vContainer>
</template>

<script setup>
import InfoProduct from "@/components/InfoProduct";
import Description from "@/components/DescriptionDetail";
import SlideSuggest from "@/components/SlideSuggest.vue";
import Slide from "@/components/SlideDetail.vue"
</script>

<style scoped>

</style>
