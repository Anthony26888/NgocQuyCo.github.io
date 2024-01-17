<template>
  
  <vContainer>
    <v-app>
      <VRow>
        <VCol>
          <Title />
        </VCol>
        <VCol>
          <carousels />
        </VCol>
      </VRow>
      <Select class="mt-5" />
      <List class="mt-5" />
    </v-app>
  </vContainer>
</template>

<script setup>
import carousels from "@/components/carousels";
import Select from "@/components/SelectPage.vue";
import List from "@/components/ListProduct.vue";
import Title from "@/components/TitleHomePage.vue";
</script>
<style scoped>

</style>
