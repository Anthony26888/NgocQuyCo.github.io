<template>
  <vContainer>
        <v-breadcrumbs :items="['Trang chủ', 'Sản Phẩm', 'Liên hệ']"></v-breadcrumbs>
        <v-app>            
            <InfoProduct/>  
            <Description/>                
        </v-app>
    </vContainer>
</template>

<script setup>
import InfoProduct from "@/components/InfoProduct";
import Description from "@/components/DescriptionDetail";
</script>
<style scoped>

</style>
