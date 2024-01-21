<template>  
  <vContainer >
    <v-app >
      <VRow justify="center" align="center">
        <VCol cols xs="12" md="6"> 
          <carousels />
        </VCol>
        <VCol cols xs="12" md="6">
          <Title />
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
import List from "@/components/ListHomePage.vue";
import Title from "@/components/TitleHomePage.vue";
</script>
<style scoped>

</style>
