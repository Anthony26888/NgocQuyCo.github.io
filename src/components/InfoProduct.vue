<template lang="">
  <VRow>
    <VCol cols xs="12" md="6">
      <v-img :src="Info.imgDetail" v-if="(Info.slide = 'false')"></v-img>
      <v-carousel show-arrows="hover" cycle hide-delimiters v-if="(Info.slide = 'true')">
        <v-carousel-item :src="item"  v-for="item in Info.imgDetail" :key="item"></v-carousel-item>   
      </v-carousel>    
    </VCol>
    <VCol cols xs="12" md="6">
      <v-card class="w-100 card mx-auto container p-5 card-info">
        <v-card-item class="mx-auto" elevation="16">
          <h1 class="text-teal-accent-4">{{ Info.name }}</h1>

          <v-card-subtitle><span>{{ Info.model }}</span></v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <span>{{ Info.description }}</span>
          <VSpacer />
          <VBtn class="bg-teal-accent-4 mt-5">Liên hệ ngay</VBtn>
          <p class="mt-3">
            <v-icon
              size="large"
              color="green-darken-2"
              icon="mdi-phone"
            ></v-icon>
            0918504086 (Mr Hải)
          </p>
        </v-card-text>
      </v-card>
    </VCol>
  </VRow>
</template>

<script>
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";
export default {
  components: "InfoProduct",
  setup() {
    const store = useAppStore();
    const { Info } = storeToRefs(store);
    return { Info };
  },
  data() {
    return {
      tab: null,
    };
  },
};
</script>
<style scoped>
p {
  font-size: 15px;
}

.img {
  width: 100%;
  height: 500px;
}

.card {
  width: 100%;
  height: 500px;
}
</style>
