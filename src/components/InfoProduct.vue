<template lang="">
  <VRow>
    <VCol cols xs="12" md="6">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner mt-5" >
          <div class="carousel-item active">
            <v-img :src="Info.imgDetail[0]" class="d-block w-100" height="450" alt="..." cover></v-img>
          </div>
          <div class="carousel-item">
            <v-img :src="Info.imgDetail[1]" class="d-block w-100" height="450" alt="..." cover></v-img>
          </div>
          <div class="carousel-item">
            <v-img :src="Info.imgDetail[2]" class="d-block w-100" height="450" alt="..." cover></v-img>
          </div>
          <div class="carousel-item">
            <v-img :src="Info.imgDetail[3]" class="d-block w-100" height="450" alt="..." cover></v-img>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </VCol>
    <VCol cols xs="12" md="6">
      <v-card class="w-100 mt-5 card mx-auto container p-5" height="450">
        <v-card-item class="mx-auto" elevation="16">
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
img {
  max-width: 100%;
  height: 100%;
}

.card {
  max-width: 100%;
  height: auto;
}

p {
  font-size: 15px;
}

@media only screen and (max-width: 600px) {
  img {
    width: 100%;
    height: 300px;
  }
}
</style>
