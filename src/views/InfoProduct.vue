<template>
    <vContainer>
        <v-breadcrumbs :items="['Trang chủ', 'Sản Phẩm', 'Chi tiết']"></v-breadcrumbs>
        <v-app>
            <VRow class="container mx-auto">
                <VCol cols xs="12" md="6">
                    <Slide />
                </VCol>
                <VCol cols xs="12" md="6">
                    <InfoProduct />
                </VCol>
            </VRow>
            <Description class="mt-5" />

            <v-toolbar density="comfortable" class="bg-transparent mt-5">
                <v-toolbar-title>
                    <h2 class="text-teal-darken-1">Sản phẩm khác</h2>
                </v-toolbar-title>
            </v-toolbar>
            <div v-if="store.Info.type == 'CIJ'">
                <SlideMachine />
            </div>
            <div v-if="store.Info.type == 'TIJ'">
                <SlideMachine />
            </div>
            <div v-if="store.Info.type == 'accessory'">
                <SlideAccessory />
            </div>
            <div v-if="store.Info.type == 'ink'">
                <SlideInk />
            </div>
            
        </v-app>
    </vContainer>
</template>

<script setup>
import InfoProduct from "@/components/InfoProduct";
import Description from "@/components/DescriptionDetail";
import SlideMachine from "@/components/SlideMachine.vue";
import SlideAccessory from "@/components/SlideAccessory.vue";
import SlideInk from "@/components/SlideInk.vue";
import Slide from "@/components/SlideDetail.vue"
import { useAppStore } from "@/store/app";
const store = useAppStore();
</script>

<style scoped></style>
