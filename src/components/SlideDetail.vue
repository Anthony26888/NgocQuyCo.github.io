<template lang="">
  <v-carousel
    cycle
    width="400"
    height="400"
    hide-delimiter-background
    show-arrows="hover"
    class="mx-auto"
    v-if="Info.slide == 'true'"
  >
    <v-carousel-item v-for="slide in Info.imgDetail" :key="slide">
        <div class="d-flex fill-height justify-center align-center">
          <v-img :src="slide"></v-img>
        </div>
    </v-carousel-item>
  </v-carousel>
  <v-img class="img mx-auto" :src="Info.imgDetail" v-if="Info.slide == 'false'"></v-img>
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
.img {
  width: 500px;
  height: 400px;
}


</style>
