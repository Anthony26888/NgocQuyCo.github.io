<template>  
  <vContainer >
    <v-app >
      <VRow>
        <VCol sm="12" md="6" class="d-none d-sm-flex d-flex d-sm-none d-md-flex d-lg-none">
          <carousels />
        </VCol>
        <VCol sm="12" md="6">
          <Title />
        </VCol>
        <VCol sm="12" md="6" class="d-none d-sm-flex d-sm-none d-md-flex d-sm-flex d-md-none d-md-none d-lg-flex">
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
import List from "@/components/ListHomePage.vue";
import Title from "@/components/TitleHomePage.vue";
</script>
<style scoped>

</style>
