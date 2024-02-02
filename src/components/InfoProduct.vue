<template lang="">
  <v-card class="card p-3 animate__animated animate__backInRight animate__delay-0.5s" variant="flat">
    <v-card-item class="">
      <h1 class="text-teal-accent-4">{{ Info.name }}</h1>

      <v-card-subtitle
        ><span>{{ Info.model }}</span></v-card-subtitle
      >
    </v-card-item>

    <v-card-text>
      <span>{{ Info.description }}</span>
      <VSpacer />      
      <div class="mt-5 d-flex">
        <h4 class="text-red">LIÊN HỆ: </h4>
        <a href="tel:+84918504086" class="ms-2"><h4>0918504086</h4></a>
        <span class="text-muted ms-2">hoặc</span>
        <a href="tel:+84903062501" class="ms-2"><h4>0903062501</h4></a>
        <span class="text-muted ms-2">(Mr.Hải)</span>
      </div>
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
@media only screen and (min-width: 300px) {
  h4 {
    font-size: 15px;
  }
}

@media only screen and (min-width: 700px) {
  .slide {
    width: 500px;
    height: 100px;
  }
  h4 {
    font-size: 22px;
  }
}
</style>
