<template lang="">
  <div v-if="Info.slide == 'true'">
    <v-window v-model="onboarding">
      <v-window-item v-for="n in Info.imgDetail" :key="n" :value="n">
        <v-card
          height="300"
          width="300"
          class="mx-auto"
        >
          <v-img aspect-ratio="1/1" :src="n" height="300" width="300" class=" mx-auto animate__animated animate__bounceInDown animate__delay-0.25s"></v-img>
        </v-card>
      </v-window-item>
    </v-window>

    <v-card-actions
      class="justify-center animate__animated animate__bounceInUp animate__delay-1s"
    >
      <v-item-group v-model="onboarding" class="text-center" mandatory>
        <v-item
          v-for="n in Info.imgDetail"
          :key="`btn-${n}`"
          v-slot="{ isSelected, toggle }"
          :value="n"
        >
          <v-btn variant="outlined" @click="toggle" class="slide-btn">
            <v-img :src="n" class="slide"></v-img>
          </v-btn>
        </v-item>
      </v-item-group>
    </v-card-actions>
  </div>

  <v-img
    class="img mx-auto"
    :src="Info.imgDetail"
    height="400"
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

  .slide {
    width: 60px;
    height: 60px;
  }
}

@media only screen and (min-width: 700px) {
  .slide-btn {
    width: 120px;
    height: 120px;
  }

  .slide {
    width: 110px;
    height: 110px;
  }
}
</style>
