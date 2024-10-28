<template>
  <v-main class="bg-grey-lighten-4">
    <v-lazy
      :min-height="200"
      :options="{ threshold: 0.5 }"
      transition="fade-transition"
    >
      <v-container class="pa-2" fluid>
        <v-row cols="auto" algin="center" justify="center">
          <v-col cols="12">
            <Carousels />
          </v-col>
          <v-container>
            <v-divider class="mx-4"></v-divider>
          </v-container>
          <v-col cols="12">
            <SlideNewProduct />
          </v-col>
          <v-container>
            <v-divider class="mx-4"></v-divider>
          </v-container>
          <v-col cols="12">
            <SlideNumber />
          </v-col>
          <v-container>
            <v-divider class="mx-4"></v-divider>
          </v-container>
          <v-col cols="12">
            <SlideMachine />
            <v-container>
              <v-divider class="mx-4"></v-divider>
            </v-container>
            <SlideAccessory />
            <v-container>
              <v-divider class="mx-4"></v-divider>
            </v-container>
            <SlideMaterial />
          </v-col>
          <v-container>
            <v-divider class="mx-4"></v-divider>
          </v-container>
          <v-col cols="12">
            <SlideService />
          </v-col>
        </v-row>
      </v-container>
    </v-lazy>
  </v-main>
</template>

<script setup>
import Carousels from "@/components/carousels";
import Select from "@/components/SelectPage.vue";
import SlideNewProduct from "@/components/NewProductLanding.vue";
import SlideMaterial from "@/components/SlideMaterialLanding.vue";
import SlideAccessory from "@/components/SlideAccessoryLanding.vue";
import SlideService from "@/components/ServiceLanding.vue";
import SlideMachine from "@/components/SlideProductLanding.vue";
import SlideNumber from "@/components/NumberLanding.vue";
</script>

<script>
export default {
  data() {
    return {
      loading: true,
    };
  },

  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
};
</script>

<style scoped>
@media only screen and (max-width: 700px) {
  h2 {
    font-size: 15px;
    font-weight: 700;
  }
}

@media only screen and (min-width: 700px) {
  h2 {
    font-weight: 700;
  }
}
</style>
