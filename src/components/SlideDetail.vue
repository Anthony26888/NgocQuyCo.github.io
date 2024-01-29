<template lang="">
  <v-window v-model="onboarding">
    <v-window-item v-for="n in Info.imgDetail" :key="`card-${n}`" :value="n">
      <v-card height="400" class="d-flex justify-center align-center">
        <v-img :src="n"></v-img>
      </v-card>
    </v-window-item>
  </v-window>

  <v-card-actions class="justify-center">
    <v-item-group v-model="onboarding" class="text-center" mandatory>
      <v-item
        v-for="n in Info.imgDetail"
        :key="`btn-${n}`"
        v-slot="{ isSelected, toggle }"
        :value="n"
      >
        <v-btn variant="outlined" @click="toggle" class="slide-btn">
          <v-img :src="n" class="slide" ></v-img>
        </v-btn>
      </v-item>
    </v-item-group>
  </v-card-actions>
  <v-img
    class="img mx-auto"
    :src="Info.imgDetail"
    v-if="Info.slide == 'false'"
  ></v-img>
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
      length: 4,
      onboarding: 0,
    };
  },

  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 > this.length ? 1 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 <= 0 ? this.length : this.onboarding - 1;
    },
  },
};
</script>
<style scoped>
@media only screen and (min-width: 300px) {
  .slide-btn {
    width: 70px;
    height: 70px;
  }
  .slide{
    width: 60px;
    height: 60px;
  }

}
@media only screen and (min-width: 700px) {
  .slide-btn {
    width: 150px;
    height: 150px;
  }
  .slide{
    width: 140px;
    height: 140px;
  }

}
</style>
