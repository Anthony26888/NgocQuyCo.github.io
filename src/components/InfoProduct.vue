<template lang="">
  <v-card class="card p-3" variant="flat">
    <v-card-item class="">
      <h1 class="text-teal-accent-4">{{ Info.name }}</h1>

      <v-card-subtitle
        ><span>{{ Info.model }}</span></v-card-subtitle
      >
    </v-card-item>

    <v-card-text>
      <span>{{ Info.description }}</span>
      <VSpacer />
      <VBtn class="bg-teal-accent-4 mt-5">Liên hệ ngay</VBtn>
      <p class="mt-3">
        <v-icon size="large" color="green-darken-2" icon="mdi-phone"></v-icon>
        0918504086 (Mr Hải)
      </p>
    </v-card-text>
  </v-card>
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

@media only screen and (min-width: 700px) {
  .slide {
    width: 500px;
    height: 100px;
  }
}
</style>
